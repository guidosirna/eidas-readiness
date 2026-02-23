"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import ShareButton from "@/components/ShareButton";
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
      { id: 1, title: "Map your regulatory obligations under eIDAS 2.0", description: "Start by identifying every article and implementing act in the revised eIDAS Regulation that applies to your organisation. Mapping obligations early prevents last-minute surprises and gives legal teams time to interpret sector-specific nuances." },
      { id: 2, title: "Identify if you qualify as a relying party requiring mandatory EUDIW acceptance", description: "The regulation mandates that certain public-sector bodies and regulated private-sector organisations must accept the European Digital Identity Wallet. Determine whether your services fall within scope by reviewing the sectors listed in the Annex." },
      { id: 3, title: "Review and update privacy policies for digital identity data processing", description: "Accepting wallet-based credentials means processing new categories of personal data. Your privacy policies must clearly describe what data you receive, why you process it, and how long you retain it." },
      { id: 4, title: "Assess GDPR alignment with eIDAS 2.0 data handling requirements", description: "eIDAS 2.0 reinforces GDPR principles such as purpose limitation and data minimisation while introducing wallet-specific obligations around selective disclosure. Conduct a gap analysis between your current GDPR posture and the additional requirements." },
      { id: 5, title: "Establish legal framework for accepting electronic attestations of attributes", description: "Qualified and non-qualified electronic attestations carry different levels of legal assurance. Define internal policies for which attestations you will accept, under what conditions, and what liability frameworks apply." },
    ],
  },
  {
    name: "Technical Infrastructure",
    slug: "technical-infrastructure",
    items: [
      { id: 6, title: "Evaluate current identity verification and authentication systems", description: "Audit your existing identity stack to understand what protocols, credential formats, and levels of assurance you already support. This baseline assessment reveals which components can be reused and which need upgrading." },
      { id: 7, title: "Assess compatibility with EUDIW credential formats (SD-JWT, mdoc)", description: "The European Digital Identity Wallet will issue credentials in standardised formats such as SD-JWT and ISO/IEC 18013-5 mdoc. Check whether your verification systems can parse and validate these formats today." },
      { id: 8, title: "Plan integration with OpenID4VP/OpenID4VCI protocols", description: "OpenID for Verifiable Presentations and OpenID for Verifiable Credential Issuance are the core interaction protocols for wallet-based credential exchange. Map out the API endpoints and redirect flows your systems will need." },
      { id: 9, title: "Implement or plan support for qualified electronic signatures", description: "eIDAS 2.0 enables citizens to create qualified electronic signatures directly from their wallets, which carry the same legal weight as handwritten signatures. Ensure your applications can trigger, receive, and verify these signatures." },
      { id: 10, title: "Review cryptographic infrastructure for eIDAS 2.0 trust anchors", description: "The regulation introduces trusted lists and trust anchors that your systems must validate against when accepting wallet credentials. Verify that your cryptographic libraries support the required algorithms." },
      { id: 11, title: "Set up testing environment using available LSP sandboxes", description: "EU Large-Scale Pilots such as POTENTIAL, EWC, NOBID, and DC4EU provide sandbox environments where you can test wallet interactions before production rollout." },
    ],
  },
  {
    name: "Organisational Readiness",
    slug: "organisational-readiness",
    items: [
      { id: 12, title: "Appoint an eIDAS 2.0 compliance lead or team", description: "Designate a person or cross-functional team responsible for coordinating your eIDAS 2.0 programme. Clear ownership prevents siloed efforts across legal, IT, and product departments." },
      { id: 13, title: "Conduct internal awareness training on digital identity concepts", description: "Many stakeholders across your organisation will be unfamiliar with verifiable credentials, selective disclosure, and wallet-based authentication. Run training sessions covering core concepts and business implications." },
      { id: 14, title: "Develop an eIDAS 2.0 implementation roadmap with milestones", description: "Translate your compliance obligations into a phased plan with concrete milestones, budgets, and success criteria. Align milestones with the regulatory timeline so that critical dependencies are met before enforcement dates." },
      { id: 15, title: "Establish vendor evaluation criteria for trust service providers", description: "Whether you need a qualified trust service provider for issuing attestations or a technology vendor for wallet integration, define clear evaluation criteria upfront. Consider certification status, geographic coverage, and API maturity." },
      { id: 16, title: "Create incident response procedures for digital identity breaches", description: "Digital identity systems introduce new attack surfaces. Develop incident response playbooks that cover detection, containment, notification, and recovery specific to wallet-based interactions." },
    ],
  },
  {
    name: "Data Protection & Privacy",
    slug: "data-protection-privacy",
    items: [
      { id: 17, title: "Implement data minimisation principles for credential verification", description: "Only request the attributes you genuinely need to complete a transaction or deliver a service. eIDAS 2.0 enshrines data minimisation as a core design principle for wallet interactions." },
      { id: 18, title: "Design selective disclosure flows to request only necessary attributes", description: "Selective disclosure allows users to share individual attributes from a credential without revealing the entire document. Architect your verification flows so that presentation requests specify the minimum required fields." },
      { id: 19, title: "Establish consent management processes for wallet interactions", description: "Users must give informed, explicit consent before their wallet shares credentials with your service. Design consent screens and logging mechanisms that capture what was requested and approved." },
      { id: 20, title: "Conduct Data Protection Impact Assessment for EUDIW integration", description: "Integrating with the European Digital Identity Wallet constitutes a high-risk processing activity under GDPR Article 35. Carry out a DPIA that evaluates risks to data subjects and documents mitigations." },
    ],
  },
];

const TOTAL_ITEMS = categories.reduce((sum, cat) => sum + cat.items.length, 0);
const STORAGE_KEY = "eidas-checklist-checked";

/* ────────────────────────────────────────────────────────────────────── */
/*  Icons                                                                */
/* ────────────────────────────────────────────────────────────────────── */

function CheckIconEmpty() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: "#e8e8e8" }}>
      <rect x="1" y="1" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CheckIconFilled() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: "#0033ff" }}>
      <rect x="1" y="1" width="18" height="18" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Component                                                            */
/* ────────────────────────────────────────────────────────────────────── */

export default function ChecklistInteractive() {
  const [currentCat, setCurrentCat] = useState(0);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  /* Load from localStorage */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const ids: number[] = JSON.parse(stored);
        setChecked(new Set(ids));
      }
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  /* Persist to localStorage */
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

  const cat = categories[currentCat];
  const catCompleted = cat.items.filter((item) => checked.has(item.id)).length;
  const catTotal = cat.items.length;

  const goNext = () => {
    if (currentCat < categories.length - 1) {
      setCurrentCat((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const goBack = () => {
    if (currentCat > 0) {
      setCurrentCat((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="lg:grid lg:gap-16 py-12 lg:py-16" style={{ gridTemplateColumns: "5fr 7fr" }}>
      {/* Left panel — progress overview */}
      <aside className="hidden lg:block">
        <div className="sticky top-[124px] md:top-[156px]">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#010f62" }}>Compliance Checklist</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#62718d" }}>
            20 action items across 4 domains. Track your progress as you go.
          </p>

          {/* Overall progress */}
          <div className="p-4 mb-6" style={{ backgroundColor: "#f9f9fa", borderRadius: "2px" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold" style={{ color: "#010f62" }}>Overall progress</span>
              <span className="text-sm font-semibold" style={{ color: "#0033ff" }}>{completedCount}/{TOTAL_ITEMS}</span>
            </div>
            <div className="w-full h-2 overflow-hidden" style={{ backgroundColor: "#e8e8e8", borderRadius: "2px" }}>
              <div
                className="h-full transition-all duration-500 ease-out"
                style={{ width: `${progressPct}%`, backgroundColor: "#0033ff", borderRadius: "2px" }}
              />
            </div>
            <p className="text-sm mt-2" style={{ color: "#62718d" }}>{progressPct}% complete</p>
          </div>

          {/* Category list */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#62718d" }}>Categories</p>
          <ul className="space-y-1">
            {categories.map((c, i) => {
              const catDone = c.items.filter((item) => checked.has(item.id)).length;
              const isActive = i === currentCat;
              const isComplete = catDone === c.items.length;
              return (
                <li key={c.slug}>
                  <button
                    type="button"
                    onClick={() => { setCurrentCat(i); window.scrollTo(0, 0); }}
                    className="w-full text-left px-3 py-2.5 text-sm transition-colors flex items-center justify-between gap-2"
                    style={{
                      color: isActive ? "#0033ff" : "#62718d",
                      borderLeft: isActive ? "2px solid #0033ff" : "2px solid transparent",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    <span>{c.name}</span>
                    <span className="text-sm shrink-0 flex items-center gap-1" style={{ color: isComplete ? "#22c55e" : "#62718d" }}>
                      {isComplete && <Check className="h-3 w-3" />}
                      {catDone}/{c.items.length}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Related links */}
          <div className="mt-6 pt-6" style={{ borderTop: "1px solid #e8e8e8" }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#62718d" }}>Related</p>
            <div className="space-y-1">
              {[
                { href: "/assessment", label: "Readiness Assessment", desc: "Get a personalised compliance score" },
                { href: "/guide/eidas-2-compliance", label: "Compliance Guide", desc: "Deep-dive into every requirement" },
                { href: "/eidas-2-timeline", label: "Timeline", desc: "Key dates and milestones" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2.5 px-3 py-2 group transition-colors hover:bg-gray-50"
                  style={{ borderRadius: "2px" }}
                >
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: "#0033ff" }} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium" style={{ color: "#010f62" }}>{link.label}</p>
                    <p className="text-sm line-clamp-1" style={{ color: "#62718d" }}>{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 pt-6" style={{ borderTop: "1px solid #e8e8e8" }}>
            <ShareButton title="eIDAS 2.0 Compliance Checklist" variant="compact" />
          </div>
        </div>
      </aside>

      {/* Mobile: compact header */}
      <div className="lg:hidden mb-6">
        <h2 className="text-xl font-semibold mb-1" style={{ color: "#010f62" }}>Compliance Checklist</h2>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm" style={{ color: "#62718d" }}>20 items across 4 domains</span>
          <span className="text-sm font-semibold" style={{ color: "#0033ff" }}>{completedCount}/{TOTAL_ITEMS}</span>
        </div>
        <div className="w-full h-1.5 overflow-hidden mb-4" style={{ backgroundColor: "#e8e8e8", borderRadius: "2px" }}>
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%`, backgroundColor: "#0033ff", borderRadius: "2px" }}
          />
        </div>
      </div>

      {/* Right panel — current category */}
      <div className="min-w-0">
        {/* Category header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#62718d" }}>
            Category {currentCat + 1} of {categories.length}
          </p>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: "#010f62" }}>{cat.name}</h3>
          <p className="text-sm" style={{ color: "#62718d" }}>{catCompleted} of {catTotal} items completed</p>
        </div>

        {/* Items */}
        <ol className="space-y-4">
          {cat.items.map((item) => {
            const isChecked = checked.has(item.id);
            return (
              <li
                key={item.id}
                onClick={() => toggle(item.id)}
                className="card-static p-5 cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: isChecked ? "rgba(0,51,255,0.04)" : undefined,
                  borderColor: isChecked ? "rgba(0,51,255,0.2)" : undefined,
                }}
              >
                <div className="flex items-start gap-4">
                  {isChecked ? <CheckIconFilled /> : <CheckIconEmpty />}
                  <div>
                    <h4
                      className={`text-base font-semibold leading-snug transition-colors duration-200 ${isChecked ? "line-through" : ""}`}
                      style={{
                        color: isChecked ? "#62718d" : "#010f62",
                        textDecorationColor: isChecked ? "#e8e8e8" : undefined,
                      }}
                    >
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "#62718d" }}>{item.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {currentCat > 0 ? (
            <button onClick={goBack} className="btn-secondary inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </button>
          ) : (
            <div />
          )}
          {currentCat < categories.length - 1 ? (
            <button onClick={goNext} className="btn-primary inline-flex items-center gap-2">
              Next category <ArrowUpRight className="h-4 w-4 arrow-animate" />
            </button>
          ) : (
            <Link href="/assessment" className="btn-primary inline-flex items-center gap-2">
              Take the Assessment <ArrowUpRight className="h-4 w-4 arrow-animate" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
