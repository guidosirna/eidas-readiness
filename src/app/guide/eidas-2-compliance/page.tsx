import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import ContentGate from "@/components/ContentGate";
import SidebarLayout from "@/components/SidebarLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "eIDAS 2.0 Compliance Guide: What You Need to Know",
  description:
    "Complete eIDAS 2.0 compliance guide: requirements, deadlines, EUDIW integration, and a step-by-step implementation roadmap for your organisation.",
  alternates: { canonical: "/guide/eidas-2-compliance" },
  openGraph: {
    title: "eIDAS 2.0 Compliance Guide: What You Need to Know",
    description:
      "Complete eIDAS 2.0 compliance guide: requirements, deadlines, EUDIW integration, and implementation roadmap.",
    type: "article",
    url: "/guide/eidas-2-compliance",
  },
};

const sections = [
  { id: "what-is-eidas-2", label: "What is eIDAS 2.0?" },
  { id: "key-changes", label: "Key Changes from eIDAS 1.0" },
  { id: "eudiw", label: "The European Digital Identity Wallet" },
  { id: "who-is-affected", label: "Who is Affected" },
  { id: "compliance-requirements", label: "Compliance Requirements" },
  { id: "implementation-roadmap", label: "Implementation Roadmap" },
  { id: "key-deadlines", label: "Key Deadlines and Timeline" },
  { id: "common-challenges", label: "Common Challenges" },
  { id: "how-to-start", label: "How to Start" },
];

export default function EidasComplianceGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Complete Guide to eIDAS 2.0 Compliance",
    description:
      "Comprehensive eIDAS 2.0 compliance guide covering requirements, deadlines, the European Digital Identity Wallet, and a step-by-step implementation roadmap.",
    datePublished: "2025-06-15",
    dateModified: "2025-12-10",
    author: {
      "@type": "Organization",
      name: "eIDAS 2.0 Readiness",
      url: "https://eidas-readiness.eu",
    },
    publisher: {
      "@type": "Organization",
      name: "eIDAS 2.0 Readiness",
      url: "https://eidas-readiness.eu",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://eidas-readiness.eu/guide/eidas-2-compliance",
    },
    wordCount: 3500,
    articleSection: "Compliance Guides",
    keywords: [
      "eIDAS 2.0",
      "eIDAS 2.0 compliance guide",
      "eIDAS 2.0 requirements",
      "European Digital Identity Wallet",
      "EUDIW",
      "digital identity regulation",
      "trust services",
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Achieve eIDAS 2.0 Compliance",
    description:
      "A step-by-step roadmap for organizations to comply with the eIDAS 2.0 regulation.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Conduct a Gap Analysis",
        text: "Assess your current digital identity infrastructure against eIDAS 2.0 requirements to identify gaps.",
        url: "https://eidas-readiness.eu/guide/eidas-2-compliance#implementation-roadmap",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Define Your Compliance Strategy",
        text: "Develop a prioritized plan that addresses regulatory, technical, and organizational requirements.",
        url: "https://eidas-readiness.eu/guide/eidas-2-compliance#implementation-roadmap",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Technical Implementation",
        text: "Implement required protocols, integrate EUDIW support, and update trust service infrastructure.",
        url: "https://eidas-readiness.eu/guide/eidas-2-compliance#implementation-roadmap",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Testing and Validation",
        text: "Conduct interoperability testing, security audits, and user acceptance testing.",
        url: "https://eidas-readiness.eu/guide/eidas-2-compliance#implementation-roadmap",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Certification and Ongoing Compliance",
        text: "Obtain required certifications, register with supervisory bodies, and establish continuous monitoring.",
        url: "https://eidas-readiness.eu/guide/eidas-2-compliance#implementation-roadmap",
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchema} />

      <Breadcrumbs items={[{ label: "Guides", href: "/guide" }, { label: "eIDAS 2.0 Compliance Guide" }]} />

      {/* Hero */}
      <section className="px-6 pt-20 pb-14 sm:pt-24 sm:pb-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#62718d" }}>
            Compliance Guide
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            The Complete Guide to eIDAS 2.0 Compliance
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm" style={{ color: "#62718d" }}>
            <time dateTime="2025-06-15">Published June 15, 2025</time>
            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>
            <span>Updated December 10, 2025</span>
            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>
            <span>15 min read</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "#62718d" }}>
            The{" "}
            <Link
              href="/glossary/eidas-2"
              className="font-medium hover:opacity-70"
              style={{ color: "#0033ff" }}
            >
              eIDAS 2.0 regulation
            </Link>{" "}
            represents the most significant overhaul of Europe&apos;s digital
            identity framework since its inception. Whether you are a financial
            institution, healthcare provider, public administration, or
            technology company operating in the EU, this guide will walk you
            through every requirement, deadline, and implementation step you
            need to know.
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              alt="Digital networks and data infrastructure"
              width={800}
              height={320}
              className="w-full max-h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <SidebarLayout sections={sections}>
          <ContentGate previewSections={1}>
          {/* 1. What is eIDAS 2.0? */}
          <section id="what-is-eidas-2">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              1. What is eIDAS 2.0?
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              eIDAS 2.0 is the informal name for the revised Regulation on
              electronic identification and trust services for electronic
              transactions in the internal market. It amends the original{" "}
              <a href="https://eur-lex.europa.eu/eli/reg/2014/910/oj" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"><strong className="text-blue-600">
                Regulation (EU) No 910/2014
              </strong></a>{" "}
              (commonly known as eIDAS 1.0), which established the first
              EU-wide legal framework for electronic identification, authentication,
              and trust services such as{" "}
              <Link
                href="/glossary/qes"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                qualified electronic signatures
              </Link>
              , seals, timestamps, and registered delivery services.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Why the Update Was Needed
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Since eIDAS 1.0 entered into force in 2016, the digital
              landscape changed dramatically. COVID-19 accelerated the demand
              for remote identity verification. Cross-border recognition of
              national eID schemes remained fragmented: only 14 of 27 Member
              States had notified an eID scheme by 2022, and adoption among
              citizens was uneven. At the same time, the private sector was
              largely excluded from the eID ecosystem, and new use cases such as
              attribute attestation, verifiable credentials, and mobile-first
              identity wallets were not covered by the original text.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The European Commission published its legislative proposal in
              June 2021, and after intensive negotiations between the European
              Parliament and the Council, the amending regulation was formally
              adopted in early 2024. The revised framework introduces a
              mandatory{" "}
              <Link
                href="/glossary/eudiw"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                European Digital Identity Wallet (EUDIW)
              </Link>{" "}
              that every Member State must offer to its citizens and residents,
              along with a substantially expanded set of trust services and
              governance requirements.
            </p>

            <div className="mt-8 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl p-5">
              <p className="font-semibold text-slate-900">Key Takeaway</p>
              <p className="mt-2 text-slate-500">
                eIDAS 2.0 transforms digital identity from a voluntary,
                government-centric system into a mandatory, wallet-based
                ecosystem that spans both public and private sectors across all
                27 EU Member States.
              </p>
            </div>
          </section>

          {/* 2. Key Changes from eIDAS 1.0 */}
          <section id="key-changes">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              2. Key Changes from eIDAS 1.0
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              While eIDAS 1.0 laid the groundwork, eIDAS 2.0 introduces
              fundamental shifts in scope, technology, and obligations. The
              table below summarizes the most impactful changes.
            </p>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Area
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      eIDAS 1.0
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      eIDAS 2.0
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-500">
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Digital Identity Wallet
                    </td>
                    <td className="px-4 py-3">Not addressed</td>
                    <td className="px-4 py-3">
                      Mandatory EUDIW in every Member State
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      eID Coverage
                    </td>
                    <td className="px-4 py-3">
                      Voluntary notification by Member States
                    </td>
                    <td className="px-4 py-3">
                      Mandatory provision to all citizens and residents
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Private Sector
                    </td>
                    <td className="px-4 py-3">
                      Limited obligation to accept eID
                    </td>
                    <td className="px-4 py-3">
                      Mandatory acceptance by relying parties in key sectors
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Attribute Attestations
                    </td>
                    <td className="px-4 py-3">Not covered</td>
                    <td className="px-4 py-3">
                      Electronic Attestation of Attributes (EAA) and Qualified
                      EAA introduced
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Trust Services
                    </td>
                    <td className="px-4 py-3">
                      Signatures, seals, timestamps, registered delivery
                    </td>
                    <td className="px-4 py-3">
                      Adds e-archiving, e-ledgers, and management of remote
                      signing devices
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Governance
                    </td>
                    <td className="px-4 py-3">
                      National supervisory bodies
                    </td>
                    <td className="px-4 py-3">
                      Strengthened governance, cooperation group, conformity
                      assessments, peer reviews
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Interoperability
                    </td>
                    <td className="px-4 py-3">
                      Interoperability framework (voluntary)
                    </td>
                    <td className="px-4 py-3">
                      Mandatory technical standards (ARF), toolbox, reference
                      implementation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              New Trust Services
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              eIDAS 2.0 expands the catalogue of qualified trust services to
              include:
            </p>
            <ul className="mb-6 space-y-2 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">
                    Electronic archiving services
                  </strong>{" "}
                  &mdash; long-term preservation of electronic documents and
                  data with legal certainty.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">
                    Electronic ledger services
                  </strong>{" "}
                  &mdash; qualified ledgers (potentially blockchain-based) for
                  recording data with integrity guarantees.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">
                    Management of remote electronic signature and seal creation
                    devices
                  </strong>{" "}
                  &mdash; a new qualified service governing the management of
                  cryptographic keys held remotely by{" "}
                  <Link
                    href="/glossary/qtsp"
                    className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
                  >
                    Qualified Trust Service Providers (QTSPs)
                  </Link>
                  .
                </span>
              </li>
            </ul>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Universal Acceptance
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              One of the most consequential changes is the obligation for
              certain private-sector relying parties to accept the EUDIW. Under
              eIDAS 1.0, cross-border acceptance was largely limited to public
              services. eIDAS 2.0 extends mandatory acceptance to sectors such
              as banking (under <a href="https://eur-lex.europa.eu/eli/dir/2015/849/oj" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600">Anti-Money Laundering</a> requirements), transport,
              healthcare, telecommunications, energy, and any service provider
              that is legally required to perform strong customer authentication
              or identity verification. This means that if your platform verifies
              user identity today, you will very likely need to support the
              wallet tomorrow.
            </p>
          </section>

          {/* 3. EUDIW */}
          <section id="eudiw">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              3. The European Digital Identity Wallet (EUDIW)
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The{" "}
              <Link
                href="/glossary/eudiw"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                EUDIW
              </Link>{" "}
              is the centrepiece of eIDAS 2.0. It is a mobile application (or
              combination of secure element and app) issued under the authority
              of a Member State that allows citizens and residents to:
            </p>
            <ul className="mb-6 space-y-2 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  Store and present{" "}
                  <Link href="/glossary/pid" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"><strong className="text-blue-600">
                    Person Identification Data (PID)
                  </strong></Link>{" "}
                  &mdash; a minimum dataset that identifies the holder (name,
                  date of birth, unique identifier) and is authenticated at a
                  high level of assurance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  Store and selectively disclose{" "}
                  <Link href="/glossary/eaa" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"><strong className="text-blue-600">
                    Electronic Attestations of Attributes (EAAs)
                  </strong></Link>{" "}
                  &mdash; verifiable claims about the holder such as a
                  professional qualification, a driving licence, a university
                  diploma, or a proof of address.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  Create{" "}
                  <Link
                    href="/glossary/qes"
                    className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
                  >
                    qualified electronic signatures (QES)
                  </Link>{" "}
                  for free for non-professional use, making legally binding
                  digital signing accessible to all EU citizens.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  Authenticate to online and offline services, both in the
                  public and private sectors, using a single trusted app.
                </span>
              </li>
            </ul>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              How the Wallet Works
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The wallet relies on a decentralised architecture. There is no
              single EU database of identities. Instead, each Member State
              issues wallets that conform to the{" "}
              <strong className="text-slate-900">
                Architecture and Reference Framework (ARF)
              </strong>{" "}
              developed by the EU Toolbox Expert Group. The ARF defines the
              protocols, data models, and security requirements that ensure all
              wallets are interoperable across borders. At a technical level,
              the wallet combines a secure cryptographic device (either
              hardware-backed on the smartphone or via a remote HSM) with a
              user-facing application and backend infrastructure provided by the
              Member State or a delegated entity.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Relying parties (the organizations requesting identity data) must
              register and authenticate themselves before they can request
              attributes from the wallet. This protects users from unauthorized
              data harvesting and ensures that only the minimum necessary data
              is shared. The principle of{" "}
              <strong className="text-slate-900">selective disclosure</strong>{" "}
              means a user can, for instance, prove they are over 18 without
              revealing their exact date of birth.
            </p>

            <div className="mt-8 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl p-5">
              <p className="font-semibold text-slate-900">
                Preparing for the EUDIW?
              </p>
              <p className="mt-2 text-slate-500">
                Read our dedicated{" "}
                <Link
                  href="/guide/eudiw-preparation"
                  className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
                >
                  EUDIW Preparation Guide
                </Link>{" "}
                for a deep dive into integration patterns, security
                requirements, and technical architecture considerations for
                relying parties.
              </p>
            </div>
          </section>

          {/* 4. Who is Affected */}
          <section id="who-is-affected">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              4. Who is Affected
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              eIDAS 2.0 has a significantly broader scope than its predecessor.
              The regulation affects any organization that provides services
              requiring identity verification within the EU, as well as trust
              service providers, Member State authorities, and technology
              vendors. Below is a sector-by-sector breakdown of the key
              impacts.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Financial Services
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Banks, payment institutions, investment firms, and insurance
              companies are among the most directly impacted. They will be
              required to accept the EUDIW for customer due diligence under
              Anti-Money Laundering (AML) regulations, strong customer
              authentication under PSD2/PSD3, and account opening procedures.
              This means integrating wallet-based identity verification into
              onboarding flows, potentially replacing or supplementing existing
              video-ident, photo-ident, or in-branch verification. Financial
              institutions should also expect that QES created via the wallet
              will become a standard mechanism for signing contracts and
              mandates.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Healthcare
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Healthcare providers, insurers, and digital health platforms will
              need to accept wallet-based identification for patient
              verification, electronic prescriptions, and cross-border access to
              medical records. Electronic Attestations of Attributes will enable
              patients to carry verified health insurance information and
              professional qualifications for healthcare workers across borders.
              The European Health Data Space (EHDS) regulation is expected to
              interoperate closely with eIDAS 2.0 wallet infrastructure.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Public Sector
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Government agencies and public administrations at all levels
              (EU, national, regional, municipal) are required to accept the
              EUDIW for accessing digital public services. This covers everything
              from tax filing and social benefits applications to business
              registration and public procurement. Public sector bodies also
              serve as issuers of many critical attestations such as driving
              licences, social security records, and residence permits.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Telecommunications
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Telecom operators are subject to identity verification obligations
              under EU and national laws (e.g., SIM registration requirements).
              The EUDIW will become an accepted and potentially preferred means
              of identity verification for SIM activation, contract signing, and
              age verification for content services.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              E-Commerce and Digital Platforms
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Very large online platforms (as defined by the <a href="https://eur-lex.europa.eu/eli/reg/2022/2065/oj" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600">Digital Services
              Act</a>) are obligated to accept the EUDIW for user authentication
              when required by law. E-commerce platforms that perform age
              verification, KYC for marketplace sellers, or identity checks for
              regulated goods will need to integrate wallet verification flows.
              The regulation also impacts platforms that need to verify business
              identities under the Digital Markets Act.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Travel and Transport
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Airlines, railways, and other transport operators will need to
              support wallet-based identity verification for check-in, boarding,
              and cross-border travel within the Schengen area. Car rental
              services, hotel check-ins, and mobility-as-a-service platforms
              will similarly need to accept EUDIW-based driving licence
              attestations and identity verification.
            </p>

            <div className="mt-8 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl p-5">
              <p className="font-semibold text-slate-900">Not sure if you are affected?</p>
              <p className="mt-2 text-slate-500">
                Take our free{" "}
                <Link
                  href="/assessment"
                  className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
                >
                  eIDAS 2.0 readiness assessment
                </Link>{" "}
                to get a personalized analysis of how the regulation applies to
                your organization.
              </p>
            </div>
          </section>

          {/* 5. Compliance Requirements */}
          <section id="compliance-requirements">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              5. Compliance Requirements
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              Achieving compliance with eIDAS 2.0 involves meeting requirements
              across three dimensions: technical, organizational, and legal.
              The precise obligations depend on whether your organization is a{" "}
              <Link
                href="/glossary/qtsp"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                QTSP
              </Link>
              , a relying party, an EAA issuer, or a combination of these
              roles.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Technical Requirements
            </h3>
            <ul className="mb-6 space-y-2 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Protocol support:</strong>{" "}
                  Implement the communication protocols defined in the ARF for
                  wallet-to-relying-party interactions, including OpenID for
                  Verifiable Presentations (OID4VP) and ISO/IEC 18013-5 for
                  proximity flows.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Credential formats:</strong>{" "}
                  Support the standardised credential formats for PIDs and EAAs,
                  including SD-JWT based verifiable credentials and mdoc
                  (ISO 18013-5) formats.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Trust registry integration:</strong>{" "}
                  Connect to the EU Trust Lists and the new Access Certificate
                  Authority infrastructure to validate wallet authenticity and
                  relying party registrations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Security standards:</strong>{" "}
                  Meet the certification requirements under the relevant Common
                  Criteria protection profiles or equivalent security
                  evaluations defined by implementing acts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">QES integration:</strong>{" "}
                  If you issue or rely on electronic signatures, ensure your
                  infrastructure supports the wallet-based QES creation process,
                  including remote signing protocols.
                </span>
              </li>
            </ul>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Organizational Requirements
            </h3>
            <ul className="mb-6 space-y-2 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Policies and procedures:</strong>{" "}
                  Establish documented policies for identity verification,
                  data handling, incident management, and business continuity
                  that align with eIDAS 2.0 requirements.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Staff training:</strong>{" "}
                  Train personnel on wallet-based identity verification flows,
                  data protection obligations under eIDAS 2.0, and incident
                  reporting procedures.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Vendor management:</strong>{" "}
                  If you rely on third parties for identity services or trust
                  infrastructure, ensure contractual and operational alignment
                  with the new requirements.
                </span>
              </li>
            </ul>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Legal Requirements
            </h3>
            <ul className="mb-6 space-y-2 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Registration:</strong>{" "}
                  Relying parties that access wallet data must register with the
                  appropriate authority and declare which attributes they
                  request and the legal basis for each.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Data protection:</strong>{" "}
                  Align wallet data processing with <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600">GDPR</a>, including data
                  minimisation, purpose limitation, and privacy impact
                  assessments. eIDAS 2.0 introduces specific anti-tracking
                  provisions (e.g., unique identifiers must not allow cross-service
                  correlation by default).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Conformity assessment:</strong>{" "}
                  QTSPs and wallet providers must undergo conformity assessments
                  by accredited bodies, with regular audits and peer review
                  processes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Liability framework:</strong>{" "}
                  Understand the updated liability provisions, which place clear
                  obligations on wallet providers, QTSPs, and EAA issuers for
                  damages arising from failures in their services.
                </span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed text-slate-500">
              For a practical, checklist-based view of these requirements, see
              our{" "}
              <Link
                href="/eidas-2-compliance-checklist"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                eIDAS 2.0 Compliance Checklist
              </Link>
              .
            </p>
          </section>

          {/* 6. Implementation Roadmap */}
          <section id="implementation-roadmap">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              6. Implementation Roadmap
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              Successfully implementing eIDAS 2.0 compliance requires a phased
              approach. Below is a five-phase roadmap based on real-world
              implementation experience.
            </p>

            {/* Phase 1 */}
            <div className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  1
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Gap Analysis
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Estimated duration: 4 &ndash; 8 weeks
                  </p>
                  <p className="mt-3 text-slate-500">
                    Assess your current identity verification processes, trust
                    service usage, and technical infrastructure against the full
                    set of eIDAS 2.0 requirements. Identify which role(s) your
                    organization plays (relying party, QTSP, EAA issuer) and
                    map every touchpoint where digital identity is used. Evaluate
                    existing contracts, vendor relationships, and data flows.
                    Deliverable: a comprehensive gap report with prioritized
                    findings.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  2
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Strategy and Planning
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Estimated duration: 4 &ndash; 6 weeks
                  </p>
                  <p className="mt-3 text-slate-500">
                    Based on the gap analysis, define a compliance strategy that
                    prioritizes the highest-impact areas. Determine whether to
                    build in-house capabilities, partner with QTSPs, or adopt
                    commercial solutions. Create a detailed project plan with
                    milestones aligned to the regulatory deadlines. Secure
                    budget and executive sponsorship. Establish governance
                    structures including a project steering committee and
                    designated compliance lead.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  3
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Technical Implementation
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Estimated duration: 12 &ndash; 24 weeks
                  </p>
                  <p className="mt-3 text-slate-500">
                    Execute the technical changes: integrate EUDIW verification
                    protocols (OID4VP, mdoc), update credential issuance
                    pipelines, connect to trust registries, and implement the
                    required data minimisation controls. Update APIs, user
                    interfaces, and backend systems to handle wallet-based
                    identity flows. If you are a QTSP, implement new service
                    types (e-archiving, ledgers) and upgrade existing services to
                    meet revised standards. Develop fallback procedures for
                    cases where wallet verification is unavailable.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  4
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Testing and Validation
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Estimated duration: 6 &ndash; 12 weeks
                  </p>
                  <p className="mt-3 text-slate-500">
                    Conduct interoperability testing with wallet reference
                    implementations and large-scale pilots (LSPs). Perform
                    security audits and penetration testing against the
                    applicable protection profiles. Run user acceptance testing
                    to ensure wallet-based flows are intuitive and do not
                    degrade the user experience. Validate data protection
                    compliance through privacy impact assessments and GDPR
                    audits. Document all test results for the conformity
                    assessment process.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  5
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Certification and Ongoing Compliance
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Estimated duration: 4 &ndash; 8 weeks (initial), then
                    ongoing
                  </p>
                  <p className="mt-3 text-slate-500">
                    Engage an accredited conformity assessment body (CAB) for
                    formal evaluation. Submit the required documentation and
                    evidence packages. Register with the national supervisory
                    body. Once certified, establish a continuous compliance
                    programme that includes periodic audits, vulnerability
                    monitoring, incident response procedures, and tracking of
                    implementing acts and delegated acts as the regulatory
                    framework evolves.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-slate-500">
              Total estimated duration from start to initial certification
              ranges from{" "}
              <strong className="text-slate-900">30 to 58 weeks</strong>,
              depending on organizational complexity, existing infrastructure
              maturity, and the number of services affected.
            </p>
          </section>

          {/* 7. Key Deadlines and Timeline */}
          <section id="key-deadlines">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              7. Key Deadlines and Timeline
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              The regulation sets a series of milestones for Member States,
              trust service providers, and relying parties. Below are the major
              dates you need to track.
            </p>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Date
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Milestone
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-500">
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      April 2024
                    </td>
                    <td className="px-4 py-3">
                      Amending regulation formally adopted and published in the
                      Official Journal of the EU. Entry into force 20 days after
                      publication.
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      Late 2024 &ndash; 2025
                    </td>
                    <td className="px-4 py-3">
                      Commission adopts implementing acts and delegated acts
                      detailing technical standards, certification schemes, and
                      the Architecture and Reference Framework (ARF).
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      2025 &ndash; 2026
                    </td>
                    <td className="px-4 py-3">
                      Large-scale pilots (LSPs) conclude. Reference wallet
                      implementations mature and become available for testing.
                      Member States begin developing their national wallet
                      solutions.
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      2026
                    </td>
                    <td className="px-4 py-3">
                      Member States must provide at least one EUDIW to citizens
                      and residents. First wave of mandatory acceptance
                      obligations enters into force.
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      2027 and beyond
                    </td>
                    <td className="px-4 py-3">
                      Full enforcement of all relying party acceptance
                      obligations. Ongoing issuance of implementing acts.
                      Periodic review and potential further amendments.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-500">
              For a more detailed and regularly updated view of all regulatory
              milestones, visit our{" "}
              <Link
                href="/eidas-2-timeline"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                eIDAS 2.0 Timeline
              </Link>{" "}
              page.
            </p>
          </section>

          {/* 8. Common Challenges */}
          <section id="common-challenges">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              8. Common Challenges
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              These are the most frequently encountered challenges when
              preparing for eIDAS 2.0 and how to address them.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Regulatory Uncertainty
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Many implementing acts and delegated acts are still being
              finalised, which creates uncertainty about exact technical
              requirements.{" "}
              <strong className="text-slate-900">Mitigation:</strong> Follow the
              ARF development closely, participate in industry consultations,
              and build modular architectures that can adapt to evolving
              specifications. Engage with the EU Toolbox Expert Group outputs
              and the large-scale pilot results as authoritative guidance.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Legacy System Integration
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Organizations with mature identity verification systems built on
              legacy protocols (SAML 2.0, proprietary APIs, manual processes)
              face significant integration effort.{" "}
              <strong className="text-slate-900">Mitigation:</strong> Adopt an
              abstraction layer or identity orchestration platform that can
              mediate between existing systems and the new wallet-based flows.
              Plan for parallel operation during the transition period rather
              than a hard cutover.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Cross-Border Interoperability
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Despite the harmonised framework, practical interoperability
              between 27 national wallet implementations will take time to
              mature.{" "}
              <strong className="text-slate-900">Mitigation:</strong> Test early
              with multiple wallet reference implementations. Participate in
              cross-border pilot programmes. Design your integration to be
              wallet-agnostic, relying on the standardised ARF protocols rather
              than any single national implementation.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              User Experience Design
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Wallet-based identity flows introduce new interaction patterns
              that can confuse users if poorly designed. QR codes, deep links,
              consent screens, and selective disclosure add steps to what may
              have been a simple form-fill process.{" "}
              <strong className="text-slate-900">Mitigation:</strong> Invest in UX
              research and prototyping early. Conduct usability testing with
              real users. Follow the design guidelines published by the EU
              large-scale pilots.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Organizational Readiness
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              eIDAS 2.0 compliance is not purely a technology project. It
              requires legal review, process redesign, staff training, and
              executive sponsorship.{" "}
              <strong className="text-slate-900">Mitigation:</strong> Establish a
              cross-functional working group early, including legal, compliance,
              product, engineering, and operations. Secure a dedicated budget
              line and executive sponsor. Treat this as a strategic programme,
              not a one-off IT project.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Resource Constraints
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Skilled professionals with eIDAS expertise are in short supply.
              The intersection of digital identity standards, cryptography,
              EU regulation, and mobile security is a niche domain.{" "}
              <strong className="text-slate-900">Mitigation:</strong> Consider
              engaging specialised consultancies for gap analysis and strategy.
              Build internal expertise gradually through targeted training.
              Leverage the open-source reference implementations and toolkits
              provided by the EU to reduce development effort.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-500">
              Have questions about these challenges? Check our{" "}
              <Link
                href="/faq"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                FAQ page
              </Link>{" "}
              for answers to the most commonly asked questions about eIDAS 2.0
              compliance.
            </p>
          </section>

          {/* 9. How to Start */}
          <section id="how-to-start">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              9. How to Start
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              If you have read this far, you already understand the scope and
              urgency of eIDAS 2.0. Here are the practical first steps you can
              take today to begin your compliance journey.
            </p>

            <ol className="mb-8 space-y-4 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  1
                </span>
                <span>
                  <strong className="text-slate-900">
                    Take the readiness assessment.
                  </strong>{" "}
                  Our free{" "}
                  <Link
                    href="/assessment"
                    className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
                  >
                    eIDAS 2.0 readiness assessment
                  </Link>{" "}
                  gives you a quick understanding of where your organization
                  stands today and produces a personalized report with
                  recommended next steps.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  2
                </span>
                <span>
                  <strong className="text-slate-900">
                    Identify your role under the regulation.
                  </strong>{" "}
                  Determine whether your organization is primarily a relying
                  party, a trust service provider, an EAA issuer, or a
                  combination. This determines which specific requirements
                  apply to you.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  3
                </span>
                <span>
                  <strong className="text-slate-900">
                    Map your current identity touchpoints.
                  </strong>{" "}
                  Document every place in your customer or user journey where
                  identity verification, authentication, or electronic signing
                  occurs. This inventory will form the basis of your gap
                  analysis.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  4
                </span>
                <span>
                  <strong className="text-slate-900">
                    Assemble a cross-functional team.
                  </strong>{" "}
                  Bring together stakeholders from legal, compliance, product,
                  engineering, and operations. eIDAS 2.0 is not solely a
                  technology challenge; it touches policy, process, and user
                  experience.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  5
                </span>
                <span>
                  <strong className="text-slate-900">
                    Review the compliance checklist.
                  </strong>{" "}
                  Use our{" "}
                  <Link
                    href="/eidas-2-compliance-checklist"
                    className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
                  >
                    eIDAS 2.0 Compliance Checklist
                  </Link>{" "}
                  to get a structured overview of every requirement and track
                  your progress.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  6
                </span>
                <span>
                  <strong className="text-slate-900">
                    Stay informed.
                  </strong>{" "}
                  Monitor the{" "}
                  <Link
                    href="/eidas-2-timeline"
                    className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
                  >
                    eIDAS 2.0 timeline
                  </Link>{" "}
                  for deadline updates. Follow the implementing acts as they are
                  published. Engage with industry working groups and pilot
                  programmes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  7
                </span>
                <span>
                  <strong className="text-slate-900">
                    Consider expert support.
                  </strong>{" "}
                  If your organization lacks in-house expertise in digital
                  identity and EU regulation, engaging a specialized
                  consultancy can accelerate your readiness and reduce risk.
                </span>
              </li>
            </ol>
          </section>

          </ContentGate>

          {/* Related Resources */}
          <div className="mt-16 -mx-6 px-6 py-10 sm:-mx-0 sm:px-8 sm:py-12" style={{ backgroundColor: "#f0f4ff", borderRadius: "2px" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Related resources</p>
            <div className="space-y-1.5">
              {[
                { href: "/guide/eudiw-preparation", label: "EUDIW Preparation Guide", desc: "Technical roadmap for wallet integration." },
                { href: "/eidas-2-timeline", label: "eIDAS 2.0 Timeline", desc: "Key dates and enforcement milestones." },
                { href: "/eidas-2-compliance-checklist", label: "eIDAS 2.0 Compliance Checklist", desc: "Track your compliance progress step by step." },
                { href: "/assessment", label: "Readiness Assessment", desc: "Get a personalised score and action plan." },
                { href: "/faq", label: "FAQ", desc: "Answers to common eIDAS 2.0 questions." },
                { href: "/glossary", label: "Glossary", desc: "Definitions for eIDAS 2.0 key terms." },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-3 px-4 py-3 group transition-colors hover:bg-white/60" style={{ borderRadius: "2px" }}>
                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: "#0033ff" }} />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold" style={{ color: "#010f62" }}>{link.label}</h3>
                    <p className="text-sm line-clamp-1 mt-0.5" style={{ color: "#62718d" }}>{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <CtaBlock
              variant="primary"
              headline="Ready to Start Your eIDAS 2.0 Journey?"
              description="Take our free readiness assessment to understand your current compliance posture and get a personalized roadmap for eIDAS 2.0 implementation."
              buttonText="Take the Readiness Assessment"
              buttonHref="/assessment"
            />
          </div>
        </SidebarLayout>
      </section>
    </>
  );
}
