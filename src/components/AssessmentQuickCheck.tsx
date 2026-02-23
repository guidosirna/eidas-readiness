"use client";

import AssessmentWizard from "@/components/AssessmentWizard";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Scale,
  Server,
  ShieldCheck,
  Users,
  FileCheck,
  GitBranch,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const sixAreas = [
  { icon: Scale, title: "Legal Framework", desc: "Obligations, timelines, and sector applicability" },
  { icon: Server, title: "Technical Infrastructure", desc: "Authentication methods and protocol readiness" },
  { icon: ShieldCheck, title: "Security & Privacy", desc: "Data minimisation and GDPR alignment" },
  { icon: Users, title: "Organizational Readiness", desc: "Governance and cross-functional coordination" },
  { icon: FileCheck, title: "Documentation", desc: "Policies, audit trails, and record-keeping" },
  { icon: GitBranch, title: "Integration Planning", desc: "API capabilities and EUDIW roadmap" },
];

export default function AssessmentQuickCheck() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Assessment", href: "/assessment" }, { label: "Quick Check" }]} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="lg:grid lg:gap-16 py-12 lg:py-16" style={{ gridTemplateColumns: "5fr 7fr" }}>
          {/* Left sidebar — context panel */}
          <aside className="hidden lg:block">
            <div className="sticky top-[124px] md:top-[156px]">
              <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: "#010f62" }}>Quick Check</h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#62718d" }}>
                12 questions across 6 compliance areas. Takes under 5&nbsp;minutes.
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#62718d" }}>Areas we evaluate</p>
              <ul className="space-y-5">
                {sixAreas.map((card) => {
                  const Icon = card.icon;
                  return (
                    <li key={card.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,51,255,0.08)", borderRadius: "2px" }}>
                        <Icon className="h-5 w-5" style={{ color: "#0033ff" }} />
                      </div>
                      <div>
                        <p className="text-base font-semibold" style={{ color: "#010f62" }}>{card.title}</p>
                        <p className="text-base leading-relaxed" style={{ color: "#62718d" }}>{card.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-10 pt-6" style={{ borderTop: "1px solid #e8e8e8" }}>
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 text-base font-medium transition-colors hover:opacity-70"
                  style={{ color: "#0033ff" }}
                >
                  <ArrowLeft className="h-4 w-4" /> Back to overview
                </Link>
              </div>
            </div>
          </aside>

          {/* Mobile: compact header */}
          <div className="lg:hidden mb-8">
            <Link
              href="/assessment"
              className="btn-ghost mb-4"
            >
              <ArrowLeft className="h-4 w-4" /> Back to overview
            </Link>
            <h2 className="font-display text-2xl font-semibold" style={{ color: "#010f62" }}>Quick Check</h2>
            <p className="text-base mt-1" style={{ color: "#62718d" }}>12 questions · Under 5 minutes</p>
          </div>

          {/* Right: the wizard */}
          <div className="min-w-0">
            <AssessmentWizard />
          </div>
        </div>
      </div>
    </>
  );
}
