import type { Metadata } from "next";
import GuidePage, { guideMetadata, GUIDE_PATH } from "@/components/GuidePage";
import { alternatesFor } from "@/lib/i18n/config";

// Every string on this page now lives in src/lib/i18n/guide.ts and the markup
// in src/components/GuidePage.tsx, shared with /de, /it and /es.
export const metadata: Metadata = {
  ...guideMetadata("en"),
  alternates: alternatesFor("en", GUIDE_PATH),
};

export default function EidasComplianceGuidePage() {
  return <GuidePage locale="en" />;
}
