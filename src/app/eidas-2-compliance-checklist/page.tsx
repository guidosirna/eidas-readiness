import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChecklistInteractive from "@/components/ChecklistInteractive";
import ShareButton from "@/components/ShareButton";

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

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            eIDAS 2.0 Compliance Checklist
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            20 actionable steps across 4 domains. Track your progress and ensure your organisation is ready for the EU Digital Identity Wallet.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-end py-4">
          <ShareButton title="eIDAS 2.0 Compliance Checklist" variant="compact" />
        </div>
        <ChecklistInteractive />
      </div>
    </>
  );
}
