"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { trackChecklistToggle } from "@/lib/analytics";

/* ────────────────────────────────────────────────────────────────────── */
/*  Checklist data                                                       */
/* ────────────────────────────────────────────────────────────────────── */

interface ChecklistItem {
  id: number;
  title: string;
  description: string;
}

interface ChecklistCategory {
  name: string;
  slug: string;
  items: ChecklistItem[];
}

const categories: ChecklistCategory[] = [
  {
    name: "Legal & Regulatory",
    slug: "legal-regulatory",
    items: [
      {
        id: 1,
        title: "Map your regulatory obligations under eIDAS 2.0",
        description:
          "Start by identifying every article and implementing act in the revised eIDAS Regulation that applies to your organisation. Mapping obligations early prevents last-minute surprises and gives legal teams time to interpret sector-specific nuances. This exercise also feeds directly into your compliance roadmap and resource planning.",
      },
      {
        id: 2,
        title:
          "Identify if you qualify as a relying party requiring mandatory EUDIW acceptance",
        description:
          "The regulation mandates that certain public-sector bodies and regulated private-sector organisations must accept the European Digital Identity Wallet. Determine whether your services fall within scope by reviewing the sectors listed in the Annex to the regulation. Misclassifying your status could result in non-compliance penalties or missed opportunities.",
      },
      {
        id: 3,
        title:
          "Review and update privacy policies for digital identity data processing",
        description:
          "Accepting wallet-based credentials means processing new categories of personal data, such as verified attributes and electronic attestations. Your privacy policies must clearly describe what data you receive, why you process it, and how long you retain it. Transparent disclosure builds user trust and satisfies both eIDAS 2.0 and GDPR requirements.",
      },
      {
        id: 4,
        title:
          "Assess GDPR alignment with eIDAS 2.0 data handling requirements",
        description:
          "eIDAS 2.0 reinforces GDPR principles such as purpose limitation and data minimisation while introducing wallet-specific obligations around selective disclosure. Conduct a gap analysis between your current GDPR compliance posture and the additional requirements of the regulation. Addressing gaps early avoids duplicated effort across privacy and identity workstreams.",
      },
      {
        id: 5,
        title:
          "Establish legal framework for accepting electronic attestations of attributes",
        description:
          "Qualified and non-qualified electronic attestations of attributes carry different levels of legal assurance. Define internal policies for which attestations you will accept, under what conditions, and what liability frameworks apply. This legal clarity protects your organisation and sets expectations for partners and end-users alike.",
      },
    ],
  },
  {
    name: "Technical Infrastructure",
    slug: "technical-infrastructure",
    items: [
      {
        id: 6,
        title:
          "Evaluate current identity verification and authentication systems",
        description:
          "Audit your existing identity stack to understand what protocols, credential formats, and levels of assurance you already support. This baseline assessment reveals which components can be reused and which need upgrading. A clear inventory also helps estimate integration costs and timelines.",
      },
      {
        id: 7,
        title:
          "Assess compatibility with EUDIW credential formats (SD-JWT, mdoc)",
        description:
          "The European Digital Identity Wallet will issue credentials in standardised formats such as SD-JWT and ISO/IEC 18013-5 mdoc. Check whether your verification systems can parse and validate these formats today. Early compatibility testing reduces the risk of integration failures when wallets go live.",
      },
      {
        id: 8,
        title: "Plan integration with OpenID4VP/OpenID4VCI protocols",
        description:
          "OpenID for Verifiable Presentations (OpenID4VP) and OpenID for Verifiable Credential Issuance (OpenID4VCI) are the core interaction protocols for wallet-based credential exchange. Map out the API endpoints, redirect flows, and metadata configurations your systems will need. Starting protocol integration early gives your team time to handle edge cases and interoperability quirks.",
      },
      {
        id: 9,
        title:
          "Implement or plan support for qualified electronic signatures",
        description:
          "eIDAS 2.0 enables citizens to create qualified electronic signatures directly from their wallets, which carry the same legal weight as handwritten signatures. Ensure your applications can trigger, receive, and verify these signatures. This capability unlocks high-assurance digital workflows such as contract signing and regulatory filings.",
      },
      {
        id: 10,
        title:
          "Review cryptographic infrastructure for eIDAS 2.0 trust anchors",
        description:
          "The regulation introduces trusted lists and trust anchors that your systems must validate against when accepting wallet credentials. Verify that your cryptographic libraries support the required algorithms and that certificate chain validation aligns with the EU Trust Framework. Weak cryptographic foundations undermine the entire trust model.",
      },
      {
        id: 11,
        title: "Set up testing environment using available LSP sandboxes",
        description:
          "EU Large-Scale Pilots such as POTENTIAL, EWC, NOBID, and DC4EU provide sandbox environments where you can test wallet interactions before production rollout. Connecting to a sandbox gives your developers hands-on experience with real credential flows. Early testing shortens the path from pilot to production readiness.",
      },
    ],
  },
  {
    name: "Organisational Readiness",
    slug: "organisational-readiness",
    items: [
      {
        id: 12,
        title: "Appoint an eIDAS 2.0 compliance lead or team",
        description:
          "Designate a person or cross-functional team responsible for coordinating your eIDAS 2.0 programme. Clear ownership prevents siloed efforts across legal, IT, and product departments. The compliance lead also serves as the primary point of contact for regulators and external partners.",
      },
      {
        id: 13,
        title:
          "Conduct internal awareness training on digital identity concepts",
        description:
          "Many stakeholders across your organisation will be unfamiliar with verifiable credentials, selective disclosure, and wallet-based authentication. Run training sessions that cover core concepts, business implications, and user-experience considerations. Informed teams make better decisions during implementation and are more effective at supporting end-users.",
      },
      {
        id: 14,
        title:
          "Develop an eIDAS 2.0 implementation roadmap with milestones",
        description:
          "Translate your compliance obligations into a phased plan with concrete milestones, budgets, and success criteria. Align milestones with the regulatory timeline so that critical dependencies are met before enforcement dates. A well-structured roadmap also helps secure executive sponsorship and funding.",
      },
      {
        id: 15,
        title:
          "Establish vendor evaluation criteria for trust service providers",
        description:
          "Whether you need a qualified trust service provider for issuing attestations or a technology vendor for wallet integration, define clear evaluation criteria upfront. Consider factors like certification status, geographic coverage, API maturity, and support responsiveness. Rigorous vendor selection reduces implementation risk and long-term lock-in.",
      },
      {
        id: 16,
        title:
          "Create incident response procedures for digital identity breaches",
        description:
          "Digital identity systems introduce new attack surfaces, from credential theft to fraudulent presentations. Develop incident response playbooks that cover detection, containment, notification, and recovery specific to wallet-based interactions. Practised response procedures minimise the impact of security incidents and satisfy regulatory reporting obligations.",
      },
    ],
  },
  {
    name: "Data Protection & Privacy",
    slug: "data-protection-privacy",
    items: [
      {
        id: 17,
        title:
          "Implement data minimisation principles for credential verification",
        description:
          "Only request the attributes you genuinely need to complete a transaction or deliver a service. eIDAS 2.0 enshrines data minimisation as a core design principle for wallet interactions. Collecting excessive data not only violates the regulation but also erodes user confidence in your digital identity flows.",
      },
      {
        id: 18,
        title:
          "Design selective disclosure flows to request only necessary attributes",
        description:
          "Selective disclosure allows users to share individual attributes from a credential without revealing the entire document. Architect your verification flows so that presentation requests specify the minimum required fields. This approach respects user privacy and demonstrates compliance with both eIDAS 2.0 and GDPR best practices.",
      },
      {
        id: 19,
        title:
          "Establish consent management processes for wallet interactions",
        description:
          "Users must give informed, explicit consent before their wallet shares credentials with your service. Design consent screens and logging mechanisms that capture what was requested, what was shared, and when the user approved the exchange. Robust consent management is both a legal safeguard and a user-experience differentiator.",
      },
      {
        id: 20,
        title:
          "Conduct Data Protection Impact Assessment for EUDIW integration",
        description:
          "Integrating with the European Digital Identity Wallet constitutes a high-risk processing activity under GDPR Article 35. Carry out a Data Protection Impact Assessment that evaluates risks to data subjects, documents mitigations, and involves your Data Protection Officer. Completing the DPIA before go-live demonstrates accountability and avoids regulatory pushback.",
      },
    ],
  },
];

const TOTAL_ITEMS = categories.reduce(
  (sum, cat) => sum + cat.items.length,
  0
);

const STORAGE_KEY = "eidas-checklist-checked";

/* ────────────────────────────────────────────────────────────────────── */
/*  Icons                                                                */
/* ────────────────────────────────────────────────────────────────────── */

function CheckIconEmpty() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{ color: "#e8e8e8" }}
    >
      <rect x="1" y="1" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CheckIconFilled() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{ color: "#0033ff" }}
    >
      <rect x="1" y="1" width="18" height="18" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 10.5l2.5 2.5 4.5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Component                                                            */
/* ────────────────────────────────────────────────────────────────────── */

export default function ChecklistPageClient() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  /* Load from localStorage on mount */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const ids: number[] = JSON.parse(stored);
        setChecked(new Set(ids));
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  /* Persist to localStorage on change */
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checked)));
  }, [checked, hydrated]);

  const toggle = useCallback((id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        trackChecklistToggle(id, false);
      } else {
        next.add(id);
        trackChecklistToggle(id, true);
      }
      return next;
    });
  }, []);

  const completedCount = checked.size;
  const progressPct = Math.round((completedCount / TOTAL_ITEMS) * 100);

  return (
    <div className="space-y-12">
      {/* Sticky progress bar — sticks below header + breadcrumb + mobile pill bar */}
      <div
        className="sticky top-[140px] md:top-[172px] lg:top-[140px] z-20 -mx-6 px-6"
        style={{ backgroundColor: "#fff", borderBottom: "1px solid #e8e8e8" }}
      >
        <div className="py-3 flex items-center gap-4">
          <p className="text-sm font-semibold shrink-0" style={{ color: "#010f62" }}>
            {completedCount}/{TOTAL_ITEMS}
          </p>
          <div className="flex-1 h-2 overflow-hidden" style={{ backgroundColor: "#e8e8e8", borderRadius: "2px" }}>
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%`, backgroundColor: "#0033ff", borderRadius: "2px" }}
            />
          </div>
          <p className="text-sm shrink-0" style={{ color: "#62718d" }}>
            {progressPct}%
          </p>
        </div>
      </div>

      {/* Progress Tracker */}
      <div>
        <div className="card-static p-6 text-center">
          <p className="text-2xl font-semibold" style={{ color: "#010f62" }}>
            {completedCount} / {TOTAL_ITEMS}{" "}
            <span className="text-lg font-normal" style={{ color: "#62718d" }}>
              completed
            </span>
          </p>
          <div className="mx-auto mt-3 h-2 max-w-md overflow-hidden" style={{ backgroundColor: "#e8e8e8", borderRadius: "2px" }}>
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%`, backgroundColor: "#0033ff", borderRadius: "2px" }}
            />
          </div>
          <p className="mt-3 text-sm" style={{ color: "#62718d" }}>
            Click items to track your progress. Your checklist is saved locally
            in this browser. Use it alongside our{" "}
            <Link
              href="/assessment"
              className="font-medium hover:opacity-70"
              style={{ color: "#0033ff" }}
            >
              interactive readiness assessment
            </Link>{" "}
            for personalised scoring.
          </p>
        </div>
        <p className="mt-6 text-base leading-relaxed" style={{ color: "#62718d" }}>
          This checklist distils{" "}
          <Link
            href="/guide/eidas-2-compliance"
            className="font-medium hover:opacity-70"
            style={{ color: "#0033ff" }}
          >
            eIDAS 2.0
          </Link>{" "}
          into twenty action items across four domains. Work through it
          systematically, assign owners, and revisit as implementing acts
          evolve. For deeper context, see our{" "}
          <Link
            href="/guide/eidas-2-compliance"
            className="font-medium hover:opacity-70"
            style={{ color: "#0033ff" }}
          >
            compliance guide
          </Link>
          ,{" "}
          <Link
            href="/eidas-2-timeline"
            className="font-medium hover:opacity-70"
            style={{ color: "#0033ff" }}
          >
            timeline
          </Link>
          , and{" "}
          <Link
            href="/faq"
            className="font-medium hover:opacity-70"
            style={{ color: "#0033ff" }}
          >
            FAQ
          </Link>
          .
        </p>
      </div>

      {/* Checklist Sections — all visible, each with scroll-spy id */}
      {categories.map((cat) => (
        <div key={cat.slug} id={cat.slug} className="scroll-mt-32">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: "#010f62" }}>
            {cat.name}
          </h2>

          <ol className="space-y-4">
            {cat.items.map((item) => {
              const isChecked = checked.has(item.id);
              return (
                <li
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className="card-static p-6 cursor-pointer transition-colors duration-200"
                  style={{
                    backgroundColor: isChecked ? "rgba(0,51,255,0.04)" : undefined,
                    borderColor: isChecked ? "rgba(0,51,255,0.2)" : undefined,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {isChecked ? <CheckIconFilled /> : <CheckIconEmpty />}
                    <div>
                      <h3
                        className={`text-lg font-semibold leading-snug transition-colors duration-200 ${
                          isChecked ? "line-through" : ""
                        }`}
                        style={{
                          color: isChecked ? "#62718d" : "#010f62",
                          textDecorationColor: isChecked ? "#e8e8e8" : undefined,
                        }}
                      >
                        <span style={{ color: "#62718d", marginRight: "0.5rem" }}>
                          {item.id}.
                        </span>
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed" style={{ color: "#62718d" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
