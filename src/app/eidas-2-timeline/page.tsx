import type { Metadata } from "next";
import Link from "next/link";
import TimelineVisual from "@/components/TimelineVisual";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import SidebarLayout from "@/components/SidebarLayout";
import { BookOpen, Smartphone, ClipboardCheck, ListChecks, BookA, CreditCard, Landmark, Wifi, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "eIDAS 2.0 Timeline & Key Deadlines",
  description:
    "eIDAS 2.0 timeline: key dates from adoption through 2026-2027 wallet rollout and mandatory acceptance by regulated sectors.",
  alternates: { canonical: "/eidas-2-timeline" },
  openGraph: {
    title: "eIDAS 2.0 Timeline & Key Deadlines",
    description:
      "eIDAS 2.0 timeline: key dates from adoption through 2026-2027 wallet rollout and mandatory acceptance.",
    type: "article",
    url: "/eidas-2-timeline",
  },
};

const timelineEvents = [
  {
    date: "June 2021",
    title: "European Commission Proposal",
    description:
      "The European Commission proposed the revision of eIDAS, introducing the European Digital Identity Wallet framework to give every EU citizen access to a secure, interoperable digital identity.",
    status: "past" as const,
  },
  {
    date: "November 2023",
    title: "Political Agreement Reached",
    description:
      "European Parliament and Council reached a political agreement on the revised eIDAS regulation after extensive trilogue negotiations, setting the stage for formal adoption.",
    status: "past" as const,
  },
  {
    date: "March 2024",
    title: "European Parliament Approval",
    description:
      "The regulation was formally adopted by the European Parliament with a decisive majority, signalling strong institutional backing for the digital identity framework.",
    status: "past" as const,
  },
  {
    date: "April 2024",
    title: "Council of the EU Adoption",
    description:
      "The Council formally adopted the regulation, completing the legislative process and clearing the path for publication in the Official Journal of the European Union.",
    status: "past" as const,
  },
  {
    date: "May 2024",
    title: "Entry into Force",
    description:
      "eIDAS 2.0 officially entered into force on 20 May 2024, starting the countdown for member state transposition and implementing act development.",
    status: "past" as const,
  },
  {
    date: "November 2024",
    title: "Architecture Reference Framework Updates",
    description:
      "Updated ARF specifications for wallet implementation were published, providing technical guidance on interoperability, security, and data model standards for EUDIW development.",
    status: "past" as const,
  },
  {
    date: "Q2 2025",
    title: "Implementing Acts Publication",
    description:
      "The European Commission published key implementing acts defining the technical standards, certification schemes, and operational requirements for wallets and trust services.",
    status: "past" as const,
  },
  {
    date: "Q4 2025",
    title: "Large-Scale Pilot Results",
    description:
      "Large-Scale Pilots (LSPs) delivered final results and recommendations based on real-world testing across healthcare, finance, travel, and government use cases.",
    status: "past" as const,
  },
  {
    date: "H1 2026",
    title: "Member State Wallet Availability",
    description:
      "EU member states must make digital identity wallets available to all citizens and residents, backed by national eID schemes and interoperable across borders.",
    status: "current" as const,
  },
  {
    date: "2026\u20132027",
    title: "Mandatory Acceptance by Relying Parties",
    description:
      "Private sector entities in key industries, including banking, telecoms, healthcare, and transport, must accept the EUDIW for identity verification and attribute sharing.",
    status: "future" as const,
  },
  {
    date: "2027+",
    title: "Full Ecosystem Maturity",
    description:
      "Complete trust service ecosystem operational with qualified electronic attestations of attributes, cross-border interoperability, and widespread private-sector adoption.",
    status: "future" as const,
  },
];

export default function EidasTimelinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "eIDAS 2.0 Timeline & Key Deadlines",
    description:
      "A comprehensive timeline of the eIDAS 2.0 regulation from the 2021 European Commission proposal through formal adoption to the 2026-2027 wallet rollout.",
    author: {
      "@type": "Organization",
      name: "eIDAS Readiness",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: "eIDAS 2.0 Timeline" }]} />

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            eIDAS 2.0 Timeline &amp; Key Deadlines
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            Track every milestone of the European Digital Identity framework,
            from the original Commission proposal to the mandatory wallet
            rollout across all EU member states.
          </p>
        </div>
      </section>

      {/* Body with sidebar */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <SidebarLayout shareTitle="eIDAS 2.0 Timeline & Key Dates" sections={[
          { id: "overview", label: "Overview" },
          { id: "implementation-timeline", label: "Implementation Timeline" },
          { id: "what-this-means", label: "What This Means" },
          { id: "related-resources", label: "Related Resources" },
        ]}>
          <div className="space-y-12">
            {/* Overview */}
            <div id="overview">
              <h2 className="text-2xl sm:text-3xl mb-4">Overview</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#62718d" }}>
                <p>
                  The eIDAS 2.0 regulation represents the most ambitious overhaul of
                  digital identity legislation in Europe since the original eIDAS
                  framework was adopted in 2014. Understanding the regulatory timeline
                  is essential for any organisation operating in the EU, because each
                  milestone triggers specific obligations and opportunities.
                </p>
                <p>
                  The legislative journey began in June 2021 when the European
                  Commission tabled its proposal for a European Digital Identity
                  Wallet. After more than two years of negotiation between the
                  Parliament and the Council, the revised regulation was formally
                  adopted in early 2024 and entered into force in May of that year.
                  Since then, the focus has shifted to the technical layer:
                  implementing acts, the Architecture Reference Framework (
                  <Link
                    href="/glossary/arf"
                    className="font-medium hover:opacity-70"
                    style={{ color: "#0033ff" }}
                  >
                    ARF
                  </Link>
                  ), and Large-Scale Pilots that will shape how the{" "}
                  <Link
                    href="/glossary/eudiw"
                    className="font-medium hover:opacity-70"
                    style={{ color: "#0033ff" }}
                  >
                    EUDIW
                  </Link>{" "}
                  works in practice.
                </p>
                <p>
                  The deadlines ahead are not abstract policy dates. They carry
                  direct compliance consequences. Member states must offer wallets to
                  citizens by the first half of 2026, and regulated industries will be
                  required to accept them shortly thereafter. Organisations that begin
                  preparing now will gain a significant competitive advantage. For a
                  step-by-step compliance roadmap, see our{" "}
                  <Link
                    href="/guide/eidas-2-compliance"
                    className="font-medium hover:opacity-70"
                    style={{ color: "#0033ff" }}
                  >
                    eIDAS 2.0 compliance guide
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Implementation Timeline */}
            <div id="implementation-timeline">
              <h2 className="text-2xl sm:text-3xl mb-8">Full eIDAS 2.0 implementation timeline</h2>
              <TimelineVisual events={timelineEvents} />
            </div>

            {/* What This Means For Your Organisation */}
            <div id="what-this-means">
              <h2 className="text-2xl sm:text-3xl mb-6">What this means for your organisation</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    Icon: CreditCard,
                    title: "Financial services",
                    desc: "KYC and AML workflows must integrate wallet-based identity verification by 2026-2027.",
                    href: "/industries/financial-services",
                  },
                  {
                    Icon: Landmark,
                    title: "Public sector",
                    desc: "Member states must issue wallets and accept them for public services by H1 2026.",
                    href: "/industries/government-public-sector",
                  },
                  {
                    Icon: Wifi,
                    title: "Regulated industries",
                    desc: "Telecoms, healthcare, travel, and energy face mandatory acceptance between 2026 and 2027.",
                    href: "/industries",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-3 px-4 py-4 group transition-colors hover:bg-white/60 card-static"
                  >
                    <item.Icon className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#0033ff" }} />
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold" style={{ color: "#010f62" }}>{item.title}</h3>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: "#62718d" }}>{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Resources — light blue style */}
            <div id="related-resources" className="-mx-6 px-6 py-10 sm:-mx-0 sm:px-8 sm:py-12" style={{ backgroundColor: "#f0f4ff", borderRadius: "2px" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Related resources</p>
              <div className="space-y-1.5">
                {[
                  {
                    href: "/guide/eidas-2-compliance",
                    label: "eIDAS 2.0 Compliance Guide",
                    desc: "Step-by-step roadmap to meet every regulatory requirement.",
                  },
                  {
                    href: "/assessment",
                    label: "Readiness Assessment",
                    desc: "Find out where your organisation stands today.",
                  },
                  {
                    href: "/eidas-2-compliance-checklist",
                    label: "Compliance Checklist",
                    desc: "A hands-on checklist to track your progress.",
                  },
                  {
                    href: "/glossary/eudiw",
                    label: "EUDIW (European Digital Identity Wallet)",
                    desc: "What the wallet is and how it works.",
                  },
                  {
                    href: "/glossary/arf",
                    label: "ARF (Architecture Reference Framework)",
                    desc: "The technical blueprint behind the wallet ecosystem.",
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
          </div>
        </SidebarLayout>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock
            headline="Don't Miss Critical Deadlines - Assess Your Readiness Now"
            description="Take our free eIDAS 2.0 readiness assessment to understand your compliance gaps and get a tailored action plan before the key deadlines hit."
            buttonText="Check your readiness"
            buttonHref="/assessment"
          />
        </div>
      </section>
    </>
  );
}
