import type { Metadata } from "next";
import TimelinePage, { timelineMetadata, TIMELINE_PATH } from "@/components/TimelinePage";
import { alternatesFor } from "@/lib/i18n/config";

// Every string on this page now lives in src/lib/i18n/timeline.ts and the
// markup in src/components/TimelinePage.tsx, shared with /de, /it and /es.
// The title is evergreen on purpose: one carrying "2026" or an exact date
// reads as stale the day after it passes, and nobody remembers to come back
// for it. The urgency belongs to DeadlineCountdown, which recomputes in the
// browser and is therefore never wrong.
export const metadata: Metadata = {
  ...timelineMetadata("en"),
  alternates: alternatesFor("en", TIMELINE_PATH),
};

export default function EidasTimelinePage() {
  return <TimelinePage locale="en" />;
}
