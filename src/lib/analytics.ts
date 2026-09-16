declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

/* ── Pre-defined events ── */

export function trackAssessmentStart() {
  trackEvent("assessment_start", "engagement", "Started readiness assessment");
}

export function trackAssessmentComplete(score: number) {
  trackEvent("assessment_complete", "engagement", "Completed assessment", score);
}

/**
 * Fires once per question the user answers (1-indexed). This is the per-step
 * signal GA4 Funnel Exploration needs to compute where people drop off; there
 * is deliberately no separate abandonment event.
 */
export function trackAssessmentStep(questionNumber: number) {
  trackEvent(
    "assessment_step",
    "engagement",
    `Question ${questionNumber}`,
    questionNumber
  );
}

export function trackChecklistToggle(itemId: number, checked: boolean) {
  trackEvent(
    checked ? "checklist_check" : "checklist_uncheck",
    "engagement",
    `Item ${itemId}`
  );
}

export function trackChecklistProgress(completed: number, total: number) {
  trackEvent("checklist_progress", "engagement", `${completed}/${total}`, completed);
}

export function trackLeadSubmit(source: string, detail?: string) {
  trackEvent("lead_submit", "conversion", detail ? `${source}: ${detail}` : source);
}

/**
 * The profile fields that arrive AFTER the email, on the gate's second step.
 * A separate event on purpose: folded into `lead_submit` it would make the
 * historical series count two different things under one name, and nothing
 * about the chart would say so.
 */
export function trackLeadEnriched(source: string, detail?: string) {
  trackEvent("lead_enriched", "conversion", detail ? `${source}: ${detail}` : source);
}

/**
 * A work-email check turned an address away. Only the domain travels, never the
 * address: the domain is the whole question, and it is what tells a filter that
 * costs real leads from one that only stops throwaways. Until this existed a
 * rejection left no trace at all, so the filter could not be judged either way.
 */
export function trackEmailRejected(source: string, domain: string) {
  trackEvent("lead_email_rejected", "conversion", `${source}: ${domain}`);
}

/** Gate rendered: the denominator for the readwall conversion rate. */
export function trackGateView(page: string) {
  trackEvent("content_gate_view", "engagement", page);
}

/** Gate cleared, whether by submitting the form or by a stored unlock. */
export function trackGateUnlock(
  page: string,
  method: "form" | "returning" | "link"
) {
  trackEvent("content_gate_unlock", "conversion", `${page} (${method})`);
}

export function trackChatbotOpen() {
  trackEvent("chatbot_open", "engagement", "Opened help chatbot");
}

export function trackCtaClick(label: string) {
  trackEvent("cta_click", "conversion", label);
}

export function trackGuideView(slug: string) {
  trackEvent("guide_view", "content", slug);
}

export function trackResourceClick(href: string) {
  trackEvent("resource_click", "engagement", href);
}

export function trackBannerClick() {
  trackEvent("banner_click", "conversion", "Sticky banner CTA");
}

export function trackBannerDismiss() {
  trackEvent("banner_dismiss", "engagement", "Dismissed sticky banner");
}
