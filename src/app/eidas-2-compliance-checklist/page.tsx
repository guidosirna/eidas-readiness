import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChecklistInteractive from "@/components/ChecklistInteractive";

export const metadata: Metadata = {
  title: "eIDAS 2.0 Compliance Checklist | 20 Steps to Readiness",
  description:
    "Interactive eIDAS 2.0 compliance checklist: 20 actionable steps covering legal, technical, organisational, and privacy readiness for the EU Digital Identity Wallet.",
  alternates: { canonical: "/eidas-2-compliance-checklist" },
  openGraph: {
    title: "eIDAS 2.0 Compliance Checklist | 20 Steps to Readiness",
    description:
      "20 actionable steps covering legal, technical, organisational, and privacy readiness for eIDAS 2.0.",
    type: "website",
    url: "/eidas-2-compliance-checklist",
  },
};

export default function ComplianceChecklistPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "eIDAS 2.0 Compliance Checklist | 20 Steps to Readiness",
    description:
      "Twenty actionable steps covering legal, technical, organisational, and privacy readiness for eIDAS 2.0 and the European Digital Identity Wallet.",
    datePublished: "2025-07-01",
    dateModified: "2026-02-23",
    author: {
      "@type": "Organization",
      name: "eIDAS Readiness",
      url: "https://eidas-readiness.eu",
    },
    publisher: {
      "@type": "Organization",
      name: "eIDAS Readiness",
      url: "https://eidas-readiness.eu",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://eidas-readiness.eu/eidas-2-compliance-checklist",
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[{ label: "eIDAS 2.0 Compliance Checklist" }]} />
      <div className="mx-auto max-w-7xl px-6">
        <ChecklistInteractive />
      </div>
    </>
  );
}
