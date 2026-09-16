/**
 * Runs on every Netlify form submission, whichever form it came from.
 *
 * Two jobs:
 *  1. Send the visitor the guide they asked for, when the submission came from
 *     the content gate. Until this existed the gate collected an address and
 *     sent nothing, while the card promised delivery.
 *  2. Send the internal notification, with the things worth waking up for at the
 *     top: who, from what company, which service, which campaign. Netlify's own
 *     notification is a fixed template that cannot be styled.
 *
 * Netlify stores the submission before invoking this function, so a failure here
 * never costs a lead, the worst case is an email that did not go out.
 */
import { createHmac } from "node:crypto";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const FROM = "eIDAS Readiness <hello@eidasreadiness.com>";
const NOTIFY_TO = process.env.NOTIFY_EMAIL || "guidosirna@gmail.com";
const SITE = "https://eidasreadiness.com";

const NAVY = "#010f62";
const BLUE = "#0033ff";
const GRAY = "#62718d";
const LINE = "#e8e8e8";

type Submission = {
  form_name?: string;
  data?: Record<string, string>;
  created_at?: string;
};

const GUIDES: Record<string, { title: string; blurb: string }> = {
  "/guide/eidas-2-compliance": {
    title: "The Complete Guide to eIDAS 2.0 Compliance",
    blurb:
      "Requirements, deadlines, and a step-by-step implementation roadmap for the revised regulation.",
  },
  "/guide/eudiw-preparation": {
    title: "How to Prepare for the European Digital Identity Wallet",
    blurb:
      "Architecture, relying party requirements, credential formats, and a six-month readiness roadmap.",
  },
};

/**
 * A per-recipient key on the guide link. It does not gate anything, the page
 * stays open so search engines keep indexing it. It makes forwarding visible:
 * one key showing up across many sessions is a link that got passed around.
 */
function personalKey(email: string, page: string): string {
  const secret = process.env.LINK_SECRET || "";
  if (!secret) return "";
  return createHmac("sha256", secret).update(`${email}:${page}`).digest("hex").slice(0, 16);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(inner: string): string {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f9f9fa">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9fa;padding:32px 16px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid ${LINE};border-radius:2px">
<tr><td style="padding:32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:${GRAY}">
${inner}
</td></tr></table>
<p style="margin:20px 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:12px;color:#9aa5bd">
eIDAS Readiness &middot; <a href="${SITE}" style="color:#9aa5bd">eidasreadiness.com</a>
</p>
</td></tr></table></body></html>`;
}

function button(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0"><tr><td style="background:${BLUE};border-radius:2px">
<a href="${href}" style="display:inline-block;padding:13px 26px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none">${label}</a>
</td></tr></table>`;
}

function guideEmail(page: string, link: string): { subject: string; html: string } {
  const guide = GUIDES[page];
  return {
    subject: `Your copy of ${guide.title}`,
    html: shell(
      `<h1 style="margin:0 0 8px;font-size:22px;line-height:1.3;color:${NAVY}">${escapeHtml(guide.title)}</h1>
<p style="margin:0 0 20px;color:${GRAY}">${escapeHtml(guide.blurb)}</p>
<p style="margin:0;color:${GRAY}">Here is your copy. The link is yours, so you can come back to the guide whenever you need it.</p>
${button(link, "Read the guide")}
<p style="margin:0 0 6px;font-size:14px;color:${GRAY}">Two things that pair well with it:</p>
<ul style="margin:0;padding-left:20px;font-size:14px;color:${GRAY}">
<li style="margin-bottom:6px"><a href="${SITE}/assessment" style="color:${BLUE}">The readiness assessment</a>: twelve questions, a score across six compliance areas.</li>
<li><a href="${SITE}/eidas-2-timeline" style="color:${BLUE}">The timeline</a>: the dates that actually bind you.</li>
</ul>`
    ),
  };
}

/** Shown in the qualifying line, so they never repeat in the details below. */
const SHOWN_ABOVE = [
  "name",
  "company",
  "email",
  "service",
  "role",
  "industry",
  "country",
  "referrer",
  "landing_page",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const LABELS: Record<string, string> = {
  "content-gate": "Content gate",
  "content-gate-profile": "Content gate, step two",
  assessment: "Readiness assessment",
  "contact-expert": "Talk to an expert",
  chatbot: "Help chatbot",
  newsletter: "Newsletter",
};

function subjectFor(form: string, data: Record<string, string>, identity: string): string {
  switch (form) {
    case "contact-expert":
      return data.service
        ? `Quote request: ${data.service} (${identity})`
        : `New enquiry from ${identity}`;
    case "assessment":
      return data.percentage
        ? `Assessment ${data.percentage}% ${data.level || ""}, ${identity}`.replace(" ,", ",")
        : `Assessment completed by ${identity}`;
    case "content-gate":
      return `Guide unlocked by ${identity}`;
    // Step two arrives as its own submission, minutes after the first. Its own
    // subject line, so the inbox does not read it as a second lead.
    case "content-gate-profile":
      return `Lead filled in: ${identity}`;
    case "chatbot":
      return `Chatbot lead: ${identity}`;
    case "newsletter":
      return `Newsletter signup: ${identity}`;
    default:
      return `New submission from ${identity}`;
  }
}

function notificationEmail(sub: Submission): { subject: string; html: string } {
  const data = sub.data || {};
  const form = sub.form_name || "unknown";
  const email = data.email || "";
  const domain = email.includes("@") ? email.slice(email.lastIndexOf("@") + 1) : "";

  const identity = data.company || domain || email;
  const headline = data.name || data.company || email || "New submission";

  // Everything that qualifies the lead on one line, in the order it gets read.
  const qualifiers = [data.name ? data.company : "", data.country, data.industry, data.role]
    .filter(Boolean)
    .join(" \u00b7 ");

  // Only paths and names here. Mail clients turn bare URLs into links of their
  // own, which is how one lead ended up looking like five different links.
  const origin = data.utm_source
    ? `Campaign: ${[data.utm_source, data.utm_medium].filter(Boolean).join(" / ")}${
        data.utm_campaign ? ` \u00b7 ${data.utm_campaign}` : ""
      }`
    : data.referrer
      ? `From ${data.referrer.replace(/^https?:\/\//, "").split("/")[0]}`
      : "Direct visit";

  const score =
    form === "assessment" && data.percentage
      ? `<p style="margin:0 0 20px;padding:14px 16px;background:#f0f4ff;border-radius:2px;color:${NAVY}">
<strong style="font-size:20px">${escapeHtml(data.percentage)}%</strong> ${escapeHtml(
          data.level || ""
        )}${data.weak_areas ? `<br><span style="font-size:14px;color:${GRAY}">weak areas: ${escapeHtml(data.weak_areas)}</span>` : ""}</p>`
      : "";

  const service = data.service
    ? `<p style="margin:0 0 20px;padding:12px 16px;background:#f0f4ff;border-radius:2px;color:${NAVY};font-weight:600">${escapeHtml(
        data.service
      )}</p>`
    : "";

  const message = data.message
    ? `<p style="margin:0 0 20px;padding:14px 16px;border-left:3px solid ${LINE};color:${NAVY}">${escapeHtml(
        data.message
      )}</p>`
    : "";

  const rest = Object.keys(data)
    .filter((k) => !SHOWN_ABOVE.includes(k) && data[k] && k !== "ip" && k !== "user_agent")
    .map(
      (k) =>
        `<tr><td style="padding:4px 0;color:${GRAY};font-size:13px;width:150px">${escapeHtml(k)}</td>
<td style="padding:4px 0;color:${NAVY};font-size:13px">${escapeHtml(data[k])}</td></tr>`
    )
    .join("");

  return {
    subject: subjectFor(form, data, identity),
    html: shell(
      `<p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${BLUE}">${escapeHtml(
        LABELS[form] || form
      )}</p>
<h1 style="margin:0 0 6px;font-size:22px;line-height:1.3;color:${NAVY}">${escapeHtml(headline)}</h1>
${
  qualifiers
    ? `<p style="margin:0 0 2px;font-size:15px;color:${NAVY}">${escapeHtml(qualifiers)}</p>`
    : ""
}
<p style="margin:0 0 20px;font-size:13px;color:${GRAY}">${escapeHtml(origin)}</p>
${service}${score}${message}
${
  email
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 8px"><tr><td style="background:${BLUE};border-radius:2px">
<a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:13px 26px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none">Reply to ${escapeHtml(
        email
      )}</a></td></tr></table>`
    : ""
}
${
  rest
    ? `<p style="margin:24px 0 8px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${GRAY}">Details</p>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid ${LINE}">${rest}</table>`
    : ""
}`
    ),
  };
}

async function send(payload: Record<string, unknown>): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, reply_to: NOTIFY_TO, ...payload }),
  });

  if (!res.ok) {
    throw new Error(`Resend rejected the send with ${res.status}: ${await res.text()}`);
  }
}

export const handler = async (event: { body?: string | null }) => {
  let submission: Submission;
  try {
    submission = JSON.parse(event.body || "{}").payload || {};
  } catch {
    return { statusCode: 400, body: "Malformed submission payload" };
  }

  const data = submission.data || {};
  const results: string[] = [];

  // The guide first: someone is waiting for it.
  const page = data.page || "";
  if (submission.form_name === "content-gate" && data.email && GUIDES[page]) {
    const key = personalKey(data.email, page);
    const link = `${SITE}${page}${key ? `?k=${key}` : ""}`;
    try {
      const mail = guideEmail(page, link);
      await send({ to: [data.email], subject: mail.subject, html: mail.html });
      results.push("guide sent");
    } catch (err) {
      // Logged, not thrown: a failure here must not also cost the notification.
      console.error("Failed to send the guide:", err);
      results.push("guide FAILED");
    }
  }

  try {
    const mail = notificationEmail(submission);
    await send({ to: [NOTIFY_TO], subject: mail.subject, html: mail.html });
    results.push("notification sent");
  } catch (err) {
    console.error("Failed to send the notification:", err);
    results.push("notification FAILED");
  }

  return { statusCode: 200, body: results.join(", ") };
};
