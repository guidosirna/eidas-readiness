import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  Server,
  ShieldCheck,
  Users,
  FileCheck,
  GitBranch,
  ArrowRight,
  Check,
  Clock,
  BarChart3,
  FileText,
} from "lucide-react";

const sixAreas = [
  { icon: Scale, title: "Legal Framework", desc: "Obligations, timelines, and sector applicability" },
  { icon: Server, title: "Technical Infrastructure", desc: "Authentication methods and protocol readiness" },
  { icon: ShieldCheck, title: "Security & Privacy", desc: "Data minimisation and GDPR alignment" },
  { icon: Users, title: "Organizational Readiness", desc: "Governance and cross-functional coordination" },
  { icon: FileCheck, title: "Documentation", desc: "Policies, audit trails, and record-keeping" },
  { icon: GitBranch, title: "Integration Planning", desc: "API capabilities and EUDIW roadmap" },
];

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero: left text + right white card with CTA */}
      <section className="relative" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/eu-parliament.jpg')" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(1,15,98,0.92)" }} />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            {/* Left: headline (3 cols) */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] font-semibold text-white mb-5">
                Is your organisation ready for eIDAS&nbsp;2.0?
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                Answer 12 targeted questions and get a compliance readiness score with a personalised action plan.
              </p>
            </div>
            {/* Right: white card with CTA inside (2 cols) */}
            <div className="lg:col-span-2 bg-white p-8 sm:p-9" style={{ borderRadius: "2px" }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#62718d" }}>What to expect</p>
              <ul className="space-y-5">
                {[
                  { icon: Clock, text: "Takes under 5 minutes" },
                  { icon: BarChart3, text: "Score across 6 compliance areas" },
                  { icon: FileText, text: "Personalised gap analysis" },
                  { icon: Check, text: "No signup required" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 shrink-0" style={{ color: "#0033ff" }} />
                    <span className="text-base" style={{ color: "#010f62" }}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6" style={{ borderTop: "1px solid #e8e8e8" }}>
                <Link
                  href="/assessment/quick-check"
                  className="btn-primary w-full justify-center text-base gap-2"
                  style={{ padding: "14px 28px" }}
                >
                  Start the Quick Check <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EU Framework logos — matching homepage */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium" style={{ color: "#62718d" }}>Based on the European regulatory framework</p>
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
              <Image src="/logos/eu-flag.svg" alt="European Union" width={72} height={48} className="h-12 w-auto" />
              <Image src="/logos/european-commission.svg" alt="European Commission" width={200} height={44} className="h-9 w-auto" />
              <Image src="/logos/eidas-regulation.svg" alt="eIDAS 2.0 Regulation" width={220} height={52} className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* What you get + six areas combined */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: what you get */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>What you get</p>
              <h2 className="text-3xl sm:text-4xl mb-6">Your personalised compliance roadmap</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#62718d" }}>
                After completing the assessment, you receive a detailed breakdown of your organisation&apos;s eIDAS 2.0 readiness, with specific recommendations tailored to your current maturity level.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: BarChart3, text: "Overall readiness score across 6 compliance areas" },
                  { icon: ShieldCheck, text: "Specific gaps in your digital identity infrastructure" },
                  { icon: FileText, text: "Prioritised recommendations for your maturity level" },
                  { icon: Check, text: "Clear picture of your EUDIW preparedness" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-base" style={{ color: "#62718d" }}>
                    <item.icon className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#0033ff" }} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: six areas grid */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Assessment scope</p>
              <h3 className="text-2xl sm:text-3xl mb-6">Six areas we evaluate</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {sixAreas.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className="card-static p-5 flex items-start gap-3">
                      <div className="w-9 h-9 shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,51,255,0.08)", borderRadius: "2px" }}>
                        <Icon className="h-4 w-4" style={{ color: "#0033ff" }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-0.5" style={{ color: "#010f62" }}>{card.title}</h4>
                        <p className="text-sm leading-snug" style={{ color: "#62718d" }}>{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="pattern-pixels px-8 py-14 sm:px-14 sm:py-16 text-center" style={{ backgroundColor: "#010f62", borderRadius: "2px" }}>
            <h2 className="relative text-2xl sm:text-3xl font-semibold text-white">Ready to find out where you stand?</h2>
            <p className="relative mt-4 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">Answer 12 targeted questions and receive a personalised compliance roadmap in minutes.</p>
            <div className="relative mt-8">
              <Link
                href="/assessment/quick-check"
                className="inline-flex items-center gap-2 bg-white font-semibold transition-colors hover:bg-gray-100 cursor-pointer"
                style={{ color: "#010f62", padding: "12px 28px", borderRadius: "2px", fontSize: "16px" }}
              >
                Start the Quick Check <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
