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

export function trackLeadSubmit(source: string) {
  trackEvent("lead_submit", "conversion", source);
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
