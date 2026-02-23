import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/lib/glossary-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlossaryPageClient from "@/components/GlossaryPageClient";

export const metadata: Metadata = {
  title: "eIDAS 2.0 Glossary | Digital Identity Terms Explained",
  description:
    "Glossary of eIDAS 2.0 and digital identity terms. Definitions for EUDIW, QTSP, verifiable credentials, trust services, and key EU regulation concepts.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "eIDAS 2.0 Glossary: Digital Identity Terms Explained",
    description: "Comprehensive glossary of eIDAS 2.0 and digital identity terms.",
    type: "website",
    url: "/glossary",
  },
};

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "eIDAS 2.0 & Digital Identity Glossary",
    description:
      "Comprehensive glossary of terms related to eIDAS 2.0, the European Digital Identity Wallet, trust services, and digital identity standards.",
    url: "https://eidas-readiness.eu/glossary",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.shortDefinition,
      url: `https://eidas-readiness.eu/glossary/${t.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: "eIDAS 2.0 Glossary" }]} />

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            eIDAS 2.0 &amp; Digital Identity Glossary
          </h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#62718d" }}>
            Every key term you need to understand, from the{" "}
            <Link
              href="/guide/eidas-2-compliance"
              className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
            >
              eIDAS 2.0 compliance framework
            </Link>{" "}
            to trust services, wallet architecture, and technical standards.
          </p>
        </div>
      </section>

      {/* Interactive glossary content with search + filters */}
      <Suspense>
        <GlossaryPageClient />
      </Suspense>

      {/* CTA */}
      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <CtaBlock
            headline="Understand How These Concepts Apply to Your Business"
            description="Take our free eIDAS 2.0 readiness assessment and discover which areas of digital identity compliance need your attention."
            buttonText="Get your readiness score"
          />
        </div>
      </section>
    </>
  );
}
