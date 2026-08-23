/**
 * Campaign attribution for leads.
 *
 * GA4 reads utm_* off the URL for its own reports, but the lead that lands in
 * Netlify carries none of it, so a submission cannot be traced back to the
 * campaign that produced it. This captures the parameters on the first page of
 * a visit and keeps them for the rest of the session, because people rarely
 * convert on the page they landed on.
 */

const STORAGE_KEY = "lead_attribution";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type Attribution = Record<string, string>;

function read(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

/**
 * Records where this visit came from, once per session. Called on first render;
 * later calls are no-ops so a mid-session navigation cannot overwrite the
 * original source with an empty one.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  if (read()) return;

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) attribution[key] = value.slice(0, 200);
  }

  // Referrer and landing page are useful even with no campaign tags at all.
  const referrer = document.referrer;
  if (referrer && !referrer.startsWith(window.location.origin)) {
    attribution.referrer = referrer.slice(0, 300);
  }
  attribution.landing_page = window.location.pathname;

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // sessionStorage unavailable: attribution is lost, the lead is not
  }
}

/** Attribution for this visit, ready to merge into a form payload. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  return read() ?? {};
}
