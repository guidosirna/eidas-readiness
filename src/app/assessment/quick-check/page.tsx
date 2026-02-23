import type { Metadata } from "next";
import AssessmentQuickCheck from "@/components/AssessmentQuickCheck";

export const metadata: Metadata = {
  title: "eIDAS 2.0 Quick Check | Free Compliance Assessment",
  description:
    "Answer 12 targeted questions to evaluate your organisation's eIDAS 2.0 readiness. Get a compliance score across 6 areas with a personalised action plan.",
  alternates: { canonical: "/assessment/quick-check" },
  openGraph: {
    title: "eIDAS 2.0 Quick Check | Free Compliance Assessment",
    description:
      "Answer 12 targeted questions to evaluate your eIDAS 2.0 readiness. Get a score and personalised action plan.",
    type: "website",
    url: "/assessment/quick-check",
  },
};

export default function QuickCheckPage() {
  return <AssessmentQuickCheck />;
}
