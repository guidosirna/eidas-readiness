import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChecklistInteractive from "@/components/ChecklistInteractive";

export const metadata: Metadata = {
  title: "Interactive eIDAS 2.0 Compliance Checklist | Step-by-Step",
  description:
    "Work through 20 eIDAS 2.0 compliance items one category at a time. Track your progress across legal, technical, organisational, and privacy readiness.",
  alternates: { canonical: "/eidas-2-compliance-checklist/interactive" },
  openGraph: {
    title: "Interactive eIDAS 2.0 Compliance Checklist",
    description:
      "Step-by-step interactive checklist for eIDAS 2.0 compliance. Track your progress across 4 domains.",
    type: "website",
    url: "/eidas-2-compliance-checklist/interactive",
  },
};

export default function InteractiveChecklistPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Checklist", href: "/eidas-2-compliance-checklist" }, { label: "Interactive" }]} />
      <div className="mx-auto max-w-7xl px-6">
        <ChecklistInteractive />
      </div>
    </>
  );
}
