import type { Metadata } from "next";
import Link from "next/link";
import TimelineVisual from "@/components/TimelineVisual";
import JsonLd from "@/components/JsonLd";
import DeadlineCountdown from "@/components/DeadlineCountdown";
import { industries } from "@/lib/industries-data";
import { roles } from "@/lib/roles-data";
import { getTermBySlug } from "@/lib/glossary-data";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedResources from "@/components/RelatedResources";
import SidebarLayout from "@/components/SidebarLayout";
import { BookOpen, Smartphone, ClipboardCheck, ListChecks, BookA, CreditCard, Landmark, Wifi } from "lucide-react";

export const metadata: Metadata = {
  // Evergreen on purpose: a title carrying "2026" or an exact date reads as
  // stale the day after it passes, and nobody remembers to come back for it.
  // The urgency belongs to DeadlineCountdown, which recomputes in the browser
  // and is therefore never wrong.
  title: { absolute: "eIDAS 2.0 Timeline: Key Dates and the Wallet Deadline" },
  description:
    "Every eIDAS 2.0 date, from the 2021 proposal to the deadline for member states to offer a wallet, and mandatory acceptance by regulated sectors after it. With a live countdown.",
  alternates: { canonical: "/eidas-2-timeline" },
  openGraph: {
    title: "eIDAS 2.0 Timeline: Key Dates and the Wallet Deadline",
    description:
      "Every eIDAS 2.0 date, from the 2021 proposal to the wallet deadline and mandatory acceptance after it.",
    type: "article",
    url: "/eidas-2-timeline",
  },
};


// Google has 31 of this site's 59 URLs indexed and 47 "discovered, currently
// not indexed", which is almost exactly the leaf pages. A leaf stays out of
// the index when nothing links to it from a page the crawler visits often,
// and this
// page is the one it visits most: 48% of the site's search clicks. So the
// block below is a route in, and it is contextual on purpose, since every
// sector and role here carries an obligation the timeline dates.
// "European Digital Identity Wallet (EUDIW)" is the right label on its own
// page and far too long in a row of inline links, so take the abbreviation
// where the term declares one.
function shortLabel(term: string): string {
  // Leading form first: "mdoc (ISO 18013-5)" is known as mdoc, and taking the
  // parenthesis would label it with the standard number instead.
  const lead = term.match(/^([A-Za-z0-9-]{2,12})\s*\(/);
  if (lead) return lead[1];
  const abbr = term.match(/\(([^)]{2,12})\)\s*$/);
  return abbr ? abbr[1] : term;
}

const TIMELINE_TERMS = [
  "eudiw", "arf", "pid", "qeaa", "eaa", "relying-party",
  "trust-framework", "openid4vc", "sd-jwt", "mdoc", "lsp", "qtsp",
];

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
    date: "December 2024",
    title: "First Implementing Acts Enter into Force",
    description:
      "Implementing Regulations (EU) 2024/2977 to 2024/2982, adopted on 28 November 2024, were published on 4 December and entered into force on 24 December 2024. They define person identification data, attestation formats, wallet certification and relying party registration. They also start the 24-month clock in Article 5a(1) for member states to provide a wallet.",
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
    date: "24 December 2026",
    title: "Member State Wallet Availability",
    description:
      "The hard deadline. Every member state must offer at least one European Digital Identity Wallet to its citizens and residents, backed by a notified eID scheme and interoperable across borders. Twenty-four months from the entry into force of the first implementing acts, under Article 5a(1) of Regulation (EU) 2024/1183.",
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
            <DeadlineCountdown />

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


            {/* Who this affects.
                Three rows of inline links rather than a grid of stacked
                columns: the job here is to give the crawler a route into the
                leaf pages, and a reader a way across, not to open a new
                chapter. No explanatory paragraph either, the labels carry it. */}
            <div id="who-this-affects" className="pt-2">
              <dl className="space-y-3 text-sm">
                {[
                  {
                    label: "Sectors",
                    links: industries.map((i) => ({ href: `/industries/${i.slug}`, text: i.title })),
                  },
                  {
                    label: "Roles",
                    links: roles.map((r) => ({ href: `/roles/${r.slug}`, text: r.title })),
                  },
                  {
                    label: "Terms",
                    links: [
                      ...TIMELINE_TERMS.map((slug) => getTermBySlug(slug))
                        .filter(Boolean)
                        .map((t) => ({ href: `/glossary/${t!.slug}`, text: shortLabel(t!.term) })),
                      { href: "/glossary", text: "all 36" },
                    ],
                  },
                ].map((row) => (
                  <div key={row.label} className="sm:flex sm:gap-4">
                    <dt
                      className="shrink-0 text-xs font-semibold uppercase tracking-wider sm:w-20 sm:pt-0.5"
                      style={{ color: "#a0a8bd" }}
                    >
                      {row.label}
                    </dt>
                    <dd className="mt-1 leading-relaxed sm:mt-0">
                      {row.links.map((l, i) => (
                        <span key={l.href}>
                          {i > 0 && <span style={{ color: "#d4d8e3" }}>{" · "}</span>}
                          <Link href={l.href} className="hover:opacity-70" style={{ color: "#010f62" }}>
                            {l.text}
                          </Link>
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Related Resources — light blue style */}
            <div id="related-resources" className="-mx-6 px-6 py-10 sm:-mx-0 sm:px-8 sm:py-12" style={{ backgroundColor: "#f0f4ff", borderRadius: "2px" }}>
          <RelatedResources
            resources={[
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
            ]}
          />
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
