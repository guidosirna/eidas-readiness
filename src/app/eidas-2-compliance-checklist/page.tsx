import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import SidebarLayout from "@/components/SidebarLayout";
import ChecklistPageClient from "@/components/ChecklistPageClient";
import { checklistSidebarSections } from "@/lib/checklist-data";
import { BookOpen, Smartphone, Clock, ClipboardCheck, HelpCircle, BookA, ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "eIDAS 2.0 Compliance Checklist | 20 Steps to Readiness",
  description:
    "Interactive eIDAS 2.0 compliance checklist: 20 actionable steps covering legal, technical, organisational, and privacy readiness for the EU Digital Identity Wallet.",
  alternates: { canonical: "/eidas-2-compliance-checklist" },
  openGraph: {
    title: "eIDAS 2.0 Compliance Checklist | 20 Steps to Readiness",
    description:
      "20 actionable steps covering legal, technical, organisational, and privacy readiness for eIDAS 2.0.",
    type: "article",
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
    dateModified: "2026-02-21",
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

  const sidebarSections = [
    ...checklistSidebarSections,
    { id: "related-resources", label: "Related Resources" },
  ];

  return (
    <>
      <JsonLd data={articleSchema} />

      <Breadcrumbs items={[{ label: "eIDAS 2.0 Compliance Checklist" }]} />

      {/* Hero */}
      <section className="px-6 pt-20 pb-14 sm:pt-24 sm:pb-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            eIDAS 2.0 Compliance Checklist
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            Use this practical, step-by-step checklist to track your
            organisation&apos;s progress toward full eIDAS 2.0 readiness.
            Covering legal, technical, organisational, and data-protection
            requirements.
          </p>
          <div className="mt-6">
            <Link
              href="/eidas-2-compliance-checklist/interactive"
              className="btn-primary inline-flex items-center gap-2"
            >
              Start interactive walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Body with sidebar */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <SidebarLayout sections={sidebarSections}>
          {/* Interactive checklist content */}
          <ChecklistPageClient />

          {/* Related Resources — light blue style */}
          <div id="related-resources" className="mt-12 scroll-mt-32 -mx-6 px-6 py-10 sm:-mx-0 sm:px-8 sm:py-12" style={{ backgroundColor: "#f0f4ff", borderRadius: "2px" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Related resources</p>
            <div className="space-y-1.5">
              {[
                {
                  href: "/guide/eidas-2-compliance",
                  label: "eIDAS 2.0 Compliance Guide",
                  desc: "Deep-dive into every requirement of the regulation.",
                },
                {
                  href: "/guide/eudiw-preparation",
                  label: "EUDIW Preparation Guide",
                  desc: "Technical roadmap for wallet integration.",
                },
                {
                  href: "/eidas-2-timeline",
                  label: "eIDAS 2.0 Timeline",
                  desc: "Key dates and enforcement milestones.",
                },
                {
                  href: "/assessment",
                  label: "Readiness Assessment",
                  desc: "Get a personalised score and action plan.",
                },
                {
                  href: "/glossary",
                  label: "Glossary",
                  desc: "Definitions for eIDAS 2.0 key terms.",
                },
                {
                  href: "/faq",
                  label: "FAQ",
                  desc: "Answers to common eIDAS 2.0 questions.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 group transition-colors hover:bg-white/60"
                  style={{ borderRadius: "2px" }}
                >
                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: "#0033ff" }} />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold" style={{ color: "#010f62" }}>{link.label}</h3>
                    <p className="text-sm line-clamp-1 mt-0.5" style={{ color: "#62718d" }}>{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SidebarLayout>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock
            headline="Want a Personalised Gap Analysis?"
            description="Take our free eIDAS 2.0 readiness assessment to identify exactly where your organisation stands and receive a tailored action plan with prioritised next steps."
            buttonText="See where you stand"
            buttonHref="/assessment"
          />
        </div>
      </section>
    </>
  );
}
