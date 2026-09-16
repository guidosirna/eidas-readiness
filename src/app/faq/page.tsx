import type { Metadata } from "next";
import FaqPageView, { faqMetadata, FAQ_PATH, FAQ_IDS } from "@/components/FaqPageView";
import { faqLocales } from "@/lib/i18n/faq";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
  ...faqMetadata("en"),
  alternates: alternatesFor("en", FAQ_PATH, faqLocales(FAQ_IDS)),
};

export default function FaqPage() {
  return <FaqPageView locale="en" />;
}
