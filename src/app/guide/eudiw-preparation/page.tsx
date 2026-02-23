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
  title: "EUDIW Preparation Guide: Digital Identity Wallet",
  description:
    "EUDIW preparation guide for relying parties: wallet architecture, technical integration, credential formats, and a 6-month readiness roadmap.",
  alternates: { canonical: "/guide/eudiw-preparation" },
  openGraph: {
    title: "EUDIW Preparation Guide: Digital Identity Wallet",
    description:
      "EUDIW preparation guide: wallet architecture, technical integration, credential formats, and readiness roadmap.",
    type: "article",
    url: "/guide/eudiw-preparation",
  },
};

const sections = [
  { id: "what-is-eudiw", label: "What is the EUDIW?" },
  { id: "architecture", label: "Architecture & Technical Foundation" },
  { id: "who-must-accept", label: "Who Must Accept the EUDIW" },
  { id: "relying-party-requirements", label: "Requirements for Relying Parties" },
  { id: "technical-integration", label: "Technical Integration Guide" },
  { id: "standards", label: "Standards & Specifications" },
  { id: "privacy", label: "Privacy & Data Protection" },
  { id: "roadmap", label: "Preparation Roadmap" },
  { id: "common-pitfalls", label: "Common Pitfalls" },
];

export default function EudiwPreparationGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Prepare for the European Digital Identity Wallet (EUDIW)",
    description:
      "Comprehensive EUDIW preparation guide covering architecture, relying party requirements, technical integration patterns, credential formats, privacy considerations, and a 6-month readiness roadmap.",
    datePublished: "2026-01-20",
    dateModified: "2026-02-18",
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
      "@id": "https://eidas-readiness.eu/guide/eudiw-preparation",
    },
    wordCount: 2800,
    articleSection: "Compliance Guides",
    keywords: [
      "EUDIW preparation",
      "EU digital identity wallet compliance",
      "European Digital Identity Wallet",
      "EUDIW relying party",
      "EUDIW integration",
      "eIDAS 2.0 wallet",
      "digital identity wallet",
      "ARF architecture reference framework",
      "OpenID4VP",
      "SD-JWT",
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <Breadcrumbs items={[{ label: "Guides", href: "/guide" }, { label: "EUDIW Preparation Guide" }]} />

      {/* Hero */}
      <section className="px-6 pt-20 pb-14 sm:pt-24 sm:pb-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#62718d" }}>
            Preparation Guide
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            How to Prepare for the European Digital Identity Wallet (EUDIW)
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm" style={{ color: "#62718d" }}>
            <time dateTime="2026-01-20">Published January 20, 2026</time>
            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>
            <span>Updated February 18, 2026</span>
            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>
            <span>12 min read</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "#62718d" }}>
            The{" "}
            <Link
              href="/glossary/eudiw"
              className="font-medium hover:opacity-70"
              style={{ color: "#0033ff" }}
            >
              European Digital Identity Wallet (EUDIW)
            </Link>{" "}
            is set to transform how organizations verify identity across the
            European Union. Whether you operate in financial services,
            healthcare, telecom, or the public sector, preparing for the wallet
            is no longer optional &mdash; it is a regulatory obligation under{" "}
            <Link
              href="/guide/eidas-2-compliance"
              className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
            >
              eIDAS 2.0
            </Link>
            . This guide walks you through everything you need to know: the
            wallet&apos;s architecture, who must accept it, relying party
            requirements, technical integration patterns, and a practical
            6-month roadmap to readiness.
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="Digital identity and mobile wallet technology"
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
          {/* 1. What is the EUDIW? */}
          <section id="what-is-eudiw">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              1. What is the EUDIW?
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The European Digital Identity Wallet (EUDIW) is a mobile
              application &mdash; or a combination of a secure element and an
              application &mdash; issued under the authority of an EU Member
              State. It allows citizens and residents to store, manage, and
              selectively present their identity data and verifiable credentials
              to public and private sector organizations across all 27 Member
              States.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              At its core, the wallet stores{" "}
              <strong className="text-slate-900">
                Person Identification Data (PID)
              </strong>{" "}
              &mdash; the minimum dataset that uniquely identifies the holder,
              including name, date of birth, and a unique identifier &mdash;
              authenticated at a high level of assurance. Beyond PID, the wallet
              can hold{" "}
              <strong className="text-slate-900">
                Electronic Attestations of Attributes (EAAs)
              </strong>
              : verifiable claims such as driving licences, university diplomas,
              professional qualifications, proof of address, and health
              insurance information. Citizens can also create qualified
              electronic signatures (QES) directly from the wallet for free for
              non-professional purposes.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The European Commission&apos;s vision is ambitious: by providing
              every EU citizen with a trusted, interoperable digital identity
              wallet, the regulation eliminates the fragmentation that plagued
              the original eIDAS framework. Where only 14 of 27 Member States
              had notified an eID scheme under eIDAS 1.0, the EUDIW makes
              digital identity universal, portable, and user-controlled. The
              wallet puts the citizen at the centre, enabling them to decide
              exactly which data to share, with whom, and for what purpose.
            </p>

            <div className="mt-8 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl p-5">
              <p className="font-semibold text-slate-900">Key Takeaway</p>
              <p className="mt-2 text-slate-500">
                The EUDIW is not simply a new authentication method. It is a
                paradigm shift toward citizen-controlled, privacy-preserving
                digital identity that every affected organization must support.
              </p>
            </div>
          </section>

          {/* 2. Architecture & Technical Foundation */}
          <section id="architecture">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              2. Architecture & Technical Foundation
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The technical blueprint for the EUDIW is defined by the{" "}
              <Link
                href="/glossary/arf"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                Architecture Reference Framework (ARF)
              </Link>
              , developed by the EU Toolbox Expert Group. The ARF specifies the
              protocols, data models, security requirements, and trust
              mechanisms that ensure interoperability across all national wallet
              implementations. Understanding the ARF is essential for any
              organization planning EUDIW integration.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Credential Formats
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The ARF mandates support for two primary credential formats, each
              serving different use cases:
            </p>
            <ul className="mb-6 space-y-2 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <Link
                    href="/glossary/sd-jwt"
                    className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
                  >
                    <strong className="text-blue-600">SD-JWT</strong>
                  </Link>{" "}
                  (Selective Disclosure JSON Web Token) &mdash; A compact,
                  JSON-based credential format that enables the holder to
                  selectively disclose individual claims without revealing the
                  entire credential. SD-JWT is optimised for online (remote)
                  presentation flows and is the primary format for web-based
                  relying party interactions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">mdoc (<a href="https://www.iso.org/standard/69084.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600">ISO 18013-5</a>)</strong>{" "}
                  &mdash; A binary credential format defined by the ISO mobile
                  driving licence standard. mdoc is optimised for proximity
                  (in-person) presentations using NFC or BLE and provides
                  strong device binding and session encryption. It is the
                  mandatory format for presenting mobile driving licences and
                  is widely used for offline verification scenarios.
                </span>
              </li>
            </ul>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Presentation & Issuance Protocols
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Communication between the wallet and relying parties relies on
              the{" "}
              <Link
                href="/glossary/openid4vc"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                OpenID for Verifiable Credentials (OpenID4VC)
              </Link>{" "}
              protocol family:
            </p>
            <ul className="mb-6 space-y-2 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <a href="https://openid.net/specs/openid-4-verifiable-presentations-1_0.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"><strong className="text-blue-600">OpenID4VP</strong> (OpenID for
                  Verifiable Presentations)</a> &mdash; The protocol used by
                  relying parties to request and receive credential
                  presentations from the wallet. It supports both same-device
                  and cross-device flows (e.g., QR code scanning).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">OpenID4VCI</strong> (OpenID for
                  Verifiable Credential Issuance) &mdash; The protocol used by
                  issuers (Member States, QTSPs, authorised bodies) to deliver
                  credentials into the wallet. Relying parties that also issue
                  attestations need to implement this protocol.
                </span>
              </li>
            </ul>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Wallet Attestation
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              A critical trust mechanism in the EUDIW ecosystem is{" "}
              <Link
                href="/glossary/wallet-attestation"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                wallet attestation
              </Link>
              . Before a relying party accepts credentials from a wallet, it
              must verify that the wallet itself is genuine &mdash; that it is a
              certified wallet instance running on a secure device, issued by an
              authorised wallet provider. Wallet attestation cryptographically
              proves the authenticity and integrity of the wallet application,
              preventing rogue or cloned wallets from participating in the
              ecosystem. This mechanism is backed by a Wallet Trust Evidence
              (WTE) and Wallet Instance Attestation (WIA) framework defined in
              the ARF.
            </p>
          </section>

          {/* 3. Who Must Accept the EUDIW */}
          <section id="who-must-accept">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              3. Who Must Accept the EUDIW
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              eIDAS 2.0 introduces mandatory acceptance obligations for
              specific sectors. If your organization falls into any of the
              following categories, you are legally required to accept the EUDIW
              as a means of identity verification.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Financial Services (PSD2 / AML)
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Banks, payment institutions, investment firms, and insurance
              companies must accept the EUDIW for customer due diligence under
              Anti-Money Laundering (AML) regulations and for strong customer
              authentication under PSD2/PSD3. This covers account opening,
              onboarding KYC flows, and ongoing identity verification. The
              wallet will enable customers to present verified PID and
              attestations (such as proof of address or source of funds) in a
              single, streamlined flow that replaces video-ident or
              document-upload processes.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Telecommunications
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Telecom operators subject to SIM registration and identity
              verification requirements must accept wallet-based
              identification. This applies to SIM activation, contract signing,
              and age verification for content services. The wallet simplifies
              compliance with national SIM registration laws while giving
              customers a faster, fully digital onboarding experience.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Public Services
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              All government agencies and public administrations at EU,
              national, regional, and municipal levels are required to accept
              the EUDIW for accessing digital public services. This includes
              tax filing, social benefits applications, business registration,
              public procurement, and any service that currently requires eID
              or in-person identity verification. Public sector bodies are also
              among the primary issuers of EAAs.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Healthcare
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Healthcare providers, insurers, and digital health platforms must
              accept wallet-based identification for patient verification,
              electronic prescriptions, and cross-border access to medical
              records. The European Health Data Space (EHDS) is designed to
              interoperate with the EUDIW, enabling patients to carry verified
              health insurance details and healthcare workers to present
              professional qualifications across borders.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Transport
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Airlines, railways, car rental services, and mobility platforms
              must support wallet-based identity verification for check-in,
              boarding, and cross-border travel. Mobile driving licence
              attestations presented through the wallet will replace physical
              documents for car rental and enforcement scenarios. Hotel check-in
              and ride-sharing identity verification will similarly shift to
              wallet-based flows.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Very Large Online Platforms
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Platforms designated under the Digital Services Act (DSA) are
              obligated to accept the EUDIW for user authentication where
              legally required. This includes age verification, KYC for
              marketplace sellers, and identity verification for regulated goods
              or services.
            </p>

            <div className="mt-8 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl p-5">
              <p className="font-semibold text-slate-900">
                Not sure if you are affected?
              </p>
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

          {/* 4. Requirements for Relying Parties */}
          <section id="relying-party-requirements">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              4. Requirements for Relying Parties
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              Being a relying party in the EUDIW ecosystem comes with a
              specific set of obligations. These requirements ensure trust,
              transparency, and user protection throughout the credential
              verification process.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Registration
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Every relying party must register with the appropriate national
              authority before requesting data from wallets. During
              registration, you must declare which attributes you intend to
              request, the legal basis for each attribute request, and the
              purpose of the data processing. This registration is published in
              a relying party registry that the wallet uses to authenticate
              your organization to the user before any data is shared.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Authentication Flows
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Relying parties must implement the standardised authentication
              flows defined in the ARF. This means supporting OpenID4VP for
              requesting credential presentations, handling both same-device
              flows (where the wallet app is on the same device as the browser)
              and cross-device flows (where the user scans a QR code with their
              wallet). The relying party must authenticate itself to the wallet
              using its registered certificate so the user can verify who is
              requesting their data.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Credential Verification
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Upon receiving a credential presentation, you must verify the
              cryptographic signatures, check the issuer&apos;s trust status
              against the EU Trusted Lists, validate the wallet attestation,
              confirm the credential has not been revoked (via status lists or
              OCSP), and ensure the credential is within its validity period.
              This verification chain is critical &mdash; accepting an
              unverified or revoked credential exposes your organization to
              legal liability.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Data Minimisation & Consent Management
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              You may only request the attributes strictly necessary for the
              specific transaction. Requesting excessive data violates both the
              eIDAS 2.0 regulation and <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600">GDPR</a>. The wallet displays a consent
              screen to the user showing exactly which attributes you are
              requesting and why. You must implement consent logging and be
              prepared to demonstrate that every attribute request has a valid
              legal basis. Users can refuse individual attributes or decline the
              entire request.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Audit Requirements
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Relying parties must maintain detailed logs of all credential
              verification transactions, including what was requested, what was
              received, the timestamp, and the verification result. These audit
              trails must be retained in accordance with applicable data
              retention requirements and made available to supervisory
              authorities upon request. Regular internal audits of your EUDIW
              integration processes are strongly recommended.
            </p>
          </section>

          {/* 5. Technical Integration Guide */}
          <section id="technical-integration">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              5. Technical Integration Guide
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              Integrating EUDIW verification into your application involves a
              defined sequence of steps. Below is a practical walkthrough of
              the credential presentation flow and the key implementation
              decisions you will face.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Credential Presentation Flow
            </h3>
            <ol className="mb-6 space-y-4 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  1
                </span>
                <span>
                  <strong className="text-slate-900">
                    Initiate the request.
                  </strong>{" "}
                  Your backend creates an OpenID4VP authorization request
                  specifying the required credentials and attributes. This
                  request includes your relying party certificate, a nonce for
                  replay protection, and the presentation definition describing
                  the expected credential format and claims.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  2
                </span>
                <span>
                  <strong className="text-slate-900">
                    Deliver to the wallet.
                  </strong>{" "}
                  The request is delivered to the wallet either via a deep link
                  (same-device flow) or via a QR code that the user scans
                  (cross-device flow). The wallet parses the request and
                  verifies your relying party identity.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  3
                </span>
                <span>
                  <strong className="text-slate-900">User consent.</strong> The
                  wallet presents the user with a consent screen showing your
                  organization&apos;s name, the requested attributes, and the
                  stated purpose. The user can approve, selectively disclose
                  specific attributes, or decline.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  4
                </span>
                <span>
                  <strong className="text-slate-900">
                    Presentation response.
                  </strong>{" "}
                  The wallet creates a verifiable presentation containing only
                  the approved attributes, signs it with the holder&apos;s key,
                  and sends it back to your backend via the OpenID4VP response
                  endpoint.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  5
                </span>
                <span>
                  <strong className="text-slate-900">
                    Verify and process.
                  </strong>{" "}
                  Your backend verifies the presentation (signatures, issuer
                  trust, revocation status, wallet attestation) and extracts the
                  requested attributes to complete the business process.
                </span>
              </li>
            </ol>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Integration Patterns
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              There are two primary integration patterns for web-based relying
              parties:
            </p>
            <ul className="mb-6 space-y-2 text-lg text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Redirect flow</strong> &mdash;
                  The user is redirected to a wallet interaction page (similar
                  to an OAuth redirect) where they scan a QR code or are
                  deep-linked to their wallet. After consent, they are
                  redirected back to your application. This pattern is simpler
                  to implement and works well for standard web applications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-slate-900">Embedded flow</strong> &mdash;
                  The wallet interaction is embedded directly in your user
                  interface using a JavaScript SDK or iframe. The QR code or
                  deep link is rendered inline, and presentation responses are
                  received via a callback without leaving your page. This
                  provides a smoother user experience but requires more
                  development effort.
                </span>
              </li>
            </ul>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              SDK Options
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Several open-source and commercial SDK options are available to
              simplify integration. The EU Reference Wallet implementation
              provides reference libraries for credential verification. The
              OpenID Foundation maintains open-source libraries for OpenID4VP
              and OpenID4VCI in multiple languages (Java, Kotlin, TypeScript,
              Python). Commercial identity orchestration platforms are also
              beginning to offer EUDIW verification modules that abstract the
              protocol complexity behind a single API.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Testing Environments
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The EU Large-Scale Pilots (LSPs) &mdash; including the POTENTIAL
              consortium and the EWC (EU Digital Identity Wallet Consortium)
              &mdash; provide sandbox environments where relying parties can
              test their integrations against reference wallet implementations.
              These sandboxes issue test credentials and simulate the full
              presentation flow, enabling you to validate your implementation
              before production deployment. Early engagement with these testing
              environments is strongly recommended.
            </p>
          </section>

          {/* 6. Standards & Specifications */}
          <section id="standards">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              6. Standards & Specifications
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              The EUDIW ecosystem is built on a layered set of international
              and European standards. Below are the key specifications that
              relying parties and implementers should be familiar with.
            </p>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Standard
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-500">
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      ISO/IEC 18013-5
                    </td>
                    <td className="px-4 py-3">
                      The international standard for mobile driving licences
                      (mDL). Defines the mdoc credential format, device
                      engagement protocols, and proximity presentation flows
                      using NFC and BLE. Foundational for in-person wallet
                      verification scenarios.
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      W3C Verifiable Credentials
                    </td>
                    <td className="px-4 py-3">
                      The W3C data model for expressing verifiable credentials
                      and presentations in a standard, interoperable format.
                      Provides the semantic foundation for how credentials are
                      structured, signed, and verified across different systems.
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      OpenID4VC Family
                    </td>
                    <td className="px-4 py-3">
                      A suite of protocols built on OpenID Connect for
                      verifiable credential issuance (OpenID4VCI), presentation
                      (OpenID4VP), and self-issued identity providers
                      (SIOPv2). These are the core communication protocols
                      between wallets, issuers, and relying parties.
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      SD-JWT (IETF)
                    </td>
                    <td className="px-4 py-3">
                      An IETF specification for selective disclosure using JSON
                      Web Tokens. Enables credential holders to reveal only
                      specific claims from a signed credential without breaking
                      the cryptographic integrity of the issuer&apos;s
                      signature.
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                      ETSI Standards
                    </td>
                    <td className="px-4 py-3">
                      European standards for trust services, electronic
                      signatures, and security. Key standards include ETSI EN
                      319 401 (general requirements for trust service providers),
                      ETSI TS 119 461 (identity proofing), and the forthcoming
                      standards for wallet certification and conformity
                      assessment.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-500">
              For definitions of key terms, consult our glossary entries for{" "}
              <Link
                href="/glossary/sd-jwt"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                SD-JWT
              </Link>
              ,{" "}
              <Link
                href="/glossary/openid4vc"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                OpenID4VC
              </Link>
              , and{" "}
              <Link
                href="/glossary/arf"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                ARF
              </Link>
              .
            </p>
          </section>

          {/* 7. Privacy & Data Protection */}
          <section id="privacy">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              7. Privacy & Data Protection
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Privacy is a foundational design principle of the EUDIW, not an
              afterthought. The regulation and the ARF embed multiple privacy-
              enhancing technologies and governance mechanisms to protect
              citizens from surveillance and data overcollection.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Selective Disclosure
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              <Link
                href="/glossary/selective-disclosure"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                Selective disclosure
              </Link>{" "}
              allows the wallet holder to reveal only the specific attributes
              needed for a given transaction. For example, when verifying age,
              the user can prove they are over 18 without disclosing their
              exact date of birth, name, or any other personal data. This is
              technically enabled by the SD-JWT format (for online flows) and
              the mdoc data model (for proximity flows), both of which support
              per-claim disclosure.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Zero-Knowledge Proofs
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The ARF is designed to accommodate zero-knowledge proof (ZKP)
              mechanisms in future iterations. ZKPs go beyond selective
              disclosure by allowing the holder to prove a statement about their
              data (e.g., &quot;my age is above 18&quot; or &quot;my salary is
              above a threshold&quot;) without revealing any underlying data at
              all. While ZKP support is not mandated in the initial
              implementation, the architecture is designed to be extensible,
              and several Member States and pilot programmes are actively
              exploring ZKP-based credential schemes.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              Data Minimisation Principle
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              The data minimisation principle is legally enforced, not just
              recommended. Relying parties may only request attributes that
              are strictly necessary for the specific service being provided.
              Requesting additional &quot;nice to have&quot; data is a
              regulatory violation. The wallet enforces this at the consent
              layer, and supervisory authorities can audit relying party
              registrations to verify that declared attribute requests match
              legitimate business needs.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              GDPR Alignment
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              eIDAS 2.0 is explicitly designed to complement GDPR. All
              personal data processed through the wallet is subject to GDPR
              rules, including purpose limitation, storage limitation, and data
              subject rights (access, rectification, erasure). The regulation
              introduces specific anti-tracking provisions: unique identifiers
              must not allow cross-service correlation by default, and wallet
              providers are prohibited from collecting data about user
              transactions. Relying parties should conduct a Data Protection
              Impact Assessment (DPIA) for their EUDIW integration.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">
              User Consent
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-500">
              Every credential presentation requires explicit user consent. The
              wallet clearly shows the user which attributes are being
              requested, by whom, and for what purpose. Users retain full
              control: they can approve, partially approve (sharing only some
              requested attributes), or deny the request entirely. A complete
              transaction history is stored locally in the wallet so users can
              review past disclosures at any time.
            </p>
          </section>

          {/* 8. Preparation Roadmap */}
          <section id="roadmap">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              8. Preparation Roadmap
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              Below is a practical 6-month roadmap for organizations preparing
              to accept the EUDIW. This timeline assumes your organization has
              existing identity verification infrastructure that needs to be
              extended to support wallet-based flows.
            </p>

            {/* Months 1-2 */}
            <div className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  1
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Month 1&ndash;2: Assess
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Discovery & Gap Analysis
                  </p>
                  <ul className="mt-3 space-y-2 text-slate-500">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Inventory all identity verification touchpoints in your
                        customer and employee journeys.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Determine your role(s) under eIDAS 2.0 (relying party,
                        EAA issuer, or both) and identify which mandatory
                        acceptance obligations apply.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Assess your current technical stack against the ARF
                        requirements (protocol support, credential format
                        handling, trust registry connectivity).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Conduct a legal review of attribute requests, data
                        processing bases, and GDPR alignment.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Produce a gap report with prioritised findings and
                        resource estimates.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Months 3-4 */}
            <div className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  2
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Month 3&ndash;4: Design & Plan
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Architecture & Implementation Planning
                  </p>
                  <ul className="mt-3 space-y-2 text-slate-500">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Design the target architecture for EUDIW integration,
                        choosing between redirect and embedded flows.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Select your SDK and technology stack (open-source
                        libraries, commercial platform, or custom
                        implementation).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Define the presentation definitions for each use case
                        (which credentials and attributes to request).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Design consent flows, error handling, and fallback
                        mechanisms for users without a wallet.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Prepare the relying party registration application
                        including attribute justifications.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Create a detailed implementation plan with milestones,
                        resource allocation, and risk register.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Months 5-6 */}
            <div className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  3
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Month 5&ndash;6: Implement & Test
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Development, Integration Testing & Validation
                  </p>
                  <ul className="mt-3 space-y-2 text-slate-500">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Implement OpenID4VP credential request and verification
                        endpoints on your backend.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Integrate trust registry lookups, revocation checking,
                        and wallet attestation verification.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Build the frontend integration (QR code rendering, deep
                        link handling, consent feedback).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Test against LSP sandbox environments with reference
                        wallet implementations and test credentials.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Conduct security testing, penetration testing, and a
                        Data Protection Impact Assessment (DPIA).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Run user acceptance testing to validate the end-to-end
                        experience and resolve usability issues.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>
                        Submit relying party registration and prepare for
                        production deployment.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-slate-500">
              For organizations with more complex requirements (multiple use
              cases, EAA issuance, cross-border operations), the timeline may
              extend beyond six months. Review the detailed implementation
              roadmap in our{" "}
              <Link
                href="/guide/eidas-2-compliance"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                eIDAS 2.0 Compliance Guide
              </Link>{" "}
              and the{" "}
              <Link
                href="/eidas-2-timeline"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                eIDAS 2.0 timeline
              </Link>{" "}
              for regulatory deadline alignment.
            </p>
          </section>

          {/* 9. Common Pitfalls */}
          <section id="common-pitfalls">
            <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
              9. Common Pitfalls
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-500">
              These are the five most common mistakes companies make when
              preparing for the EUDIW &mdash; and how to avoid them.
            </p>

            <div className="mb-6 card-static p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                1. Treating the EUDIW as &quot;just another login method&quot;
              </h3>
              <p className="mt-3 text-slate-500">
                Many organizations initially approach the EUDIW as a simple SSO
                integration, similar to adding a &quot;Login with Google&quot;
                button. In reality, EUDIW integration involves verifiable
                credential verification, trust chain validation, wallet
                attestation checks, and regulatory compliance obligations that
                go far beyond standard OAuth/OIDC flows. Underestimating this
                complexity leads to delays and incomplete implementations.
              </p>
            </div>

            <div className="mb-6 card-static p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                2. Requesting more attributes than necessary
              </h3>
              <p className="mt-3 text-slate-500">
                Organizations accustomed to collecting extensive user data
                during onboarding often replicate this pattern in their EUDIW
                integration, requesting every available attribute &quot;just in
                case.&quot; This violates the data minimisation principle,
                exposes the organization to regulatory risk, and degrades the
                user experience (users are less likely to consent when they see
                excessive data requests). Design each presentation request
                around the minimum viable attribute set for the specific
                transaction.
              </p>
            </div>

            <div className="mb-6 card-static p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                3. Ignoring the cross-device flow
              </h3>
              <p className="mt-3 text-slate-500">
                Some implementations only support the same-device flow (deep
                links), assuming users will always access services from their
                phone. In practice, a significant percentage of users access web
                services from a desktop or laptop and need to scan a QR code
                with their wallet app on a separate device. Failing to implement
                the cross-device flow excludes a large portion of your user
                base and creates a poor experience for desktop users.
              </p>
            </div>

            <div className="mb-6 card-static p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                4. Skipping wallet attestation verification
              </h3>
              <p className="mt-3 text-slate-500">
                Wallet attestation is the mechanism that ensures you are
                interacting with a genuine, certified wallet instance rather
                than a spoofed or compromised application. Some organizations
                skip this check during development and forget to enable it in
                production. Without wallet attestation verification, your
                system is vulnerable to fraudulent presentations from
                unauthorized applications. This is both a security risk and a
                compliance failure.
              </p>
            </div>

            <div className="mb-6 card-static p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                5. Delaying preparation until implementing acts are finalised
              </h3>
              <p className="mt-3 text-slate-500">
                The most damaging pitfall is waiting for every implementing act
                and technical specification to be published before starting
                preparation. While some details are still evolving, the core
                architecture (ARF), protocols (OpenID4VP, OpenID4VCI), and
                credential formats (SD-JWT, mdoc) are stable and well-
                documented. Organizations that wait find themselves scrambling
                to implement in months what should take six months or more.
                Start with the assessment and design phases now, and iterate as
                specifications mature.
              </p>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-500">
              Have questions about EUDIW preparation? Visit our{" "}
              <Link
                href="/faq"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                FAQ page
              </Link>{" "}
              or explore the{" "}
              <Link
                href="/eidas-2-compliance-checklist"
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600"
              >
                eIDAS 2.0 Compliance Checklist
              </Link>{" "}
              for a structured view of all requirements.
            </p>
          </section>

          </ContentGate>

          {/* Related Resources */}
          <div className="mt-16 -mx-6 px-6 py-10 sm:-mx-0 sm:px-8 sm:py-12" style={{ backgroundColor: "#f0f4ff", borderRadius: "2px" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Related resources</p>
            <div className="space-y-1.5">
              {[
                { href: "/guide/eidas-2-compliance", label: "eIDAS 2.0 Compliance Guide", desc: "Deep-dive into every requirement of the regulation." },
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
              headline="Ready to Assess Your EUDIW Readiness?"
              description="Take our free readiness assessment to understand where your organization stands today and get a personalized roadmap for EUDIW integration and eIDAS 2.0 compliance."
              buttonText="Start the Assessment"
              buttonHref="/assessment"
            />
          </div>
        </SidebarLayout>
      </section>
    </>
  );
}
