"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Upload,
  Hash,
  Download,
  ShieldCheck,
  FileCheck,
  Globe,
  UserX,
  Clock,
  Fingerprint,
  Scale,
  ClipboardCheck,
  Lightbulb,
  BarChart3,
  Database,
  FolderCheck,
  Check,
} from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";

const howItWorks = [
  {
    step: 1,
    icon: Upload,
    title: "Upload your file",
    desc: "Select any document. Your file never leaves your browser -only a cryptographic hash is sent.",
  },
  {
    step: 2,
    icon: Hash,
    title: "Hash & stamp",
    desc: "We generate an RFC 3161 timestamp token from a qualified Time Stamp Authority, binding the hash to an exact point in time.",
  },
  {
    step: 3,
    icon: Download,
    title: "Download proof",
    desc: "Receive a verifiable timestamp proof file (.tsr) you can use as legal evidence that your document existed at that time.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Client-side privacy",
    desc: "Your file never leaves your device. Only a SHA-256 hash is transmitted.",
  },
  {
    icon: Clock,
    title: "RFC 3161 compliant",
    desc: "Industry-standard trusted timestamping protocol recognised by courts and regulators.",
  },
  {
    icon: Globe,
    title: "Browser-based",
    desc: "No software to install. Works directly in your browser on any device.",
  },
  {
    icon: UserX,
    title: "No registration",
    desc: "Start timestamping immediately. No account, no email, no signup required.",
  },
  {
    icon: Fingerprint,
    title: "Verifiable proof",
    desc: "Anyone can independently verify your timestamp using standard tools.",
  },
  {
    icon: FileCheck,
    title: "Any file type",
    desc: "PDFs, images, contracts, source code -timestamp any digital file.",
  },
];

const useCases = [
  {
    icon: Scale,
    title: "Legal & contracts",
    desc: "Prove when a contract, agreement, or legal document was signed or created.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory compliance",
    desc: "Meet eIDAS, GDPR, and industry-specific requirements for document timestamping.",
  },
  {
    icon: Lightbulb,
    title: "Intellectual property",
    desc: "Establish prior art for inventions, designs, and creative works.",
  },
  {
    icon: BarChart3,
    title: "Audit trails",
    desc: "Create tamper-proof audit trails for financial records and reports.",
  },
  {
    icon: Database,
    title: "Data integrity",
    desc: "Prove that datasets, logs, or research data have not been altered.",
  },
  {
    icon: FolderCheck,
    title: "Document management",
    desc: "Add trusted timestamps to your document workflow for long-term archival.",
  },
];

export default function TimestampPage() {
  const [contactOpen, setContactOpen] = useState(false);


  return (
    <main className="min-h-screen bg-white">
      {/* ── Section 1: Hero ─────────────────────────────── */}
      <section className="relative" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/eu-parliament.jpg')" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(1,15,98,0.92)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-3">
              <span
                className="inline-block text-sm font-semibold uppercase tracking-widest mb-5 px-3 py-1"
                style={{ color: "#0033ff", backgroundColor: "rgba(0,51,255,0.15)", borderRadius: "2px" }}
              >
                Timestamp Tool
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] font-semibold text-white mb-5">
                eIDAS trusted timestamp tool
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                Prove when your documents existed with trusted, RFC&nbsp;3161 timestamps. Client-side privacy, no registration required.
              </p>
            </div>
            <div className="lg:col-span-2 bg-white p-8 sm:p-9" style={{ borderRadius: "2px" }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#62718d" }}>Why use this tool</p>
              <ul className="space-y-5">
                {[
                  { icon: ShieldCheck, text: "Legally admissible timestamp proof" },
                  { icon: Clock, text: "RFC 3161 trusted timestamps" },
                  { icon: UserX, text: "No registration or signup" },
                  { icon: Globe, text: "Works with any file type" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 shrink-0" style={{ color: "#0033ff" }} />
                    <span className="text-base" style={{ color: "#010f62" }}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 space-y-3" style={{ borderTop: "1px solid #e8e8e8" }}>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="btn-primary w-full justify-center text-base gap-2"
                  style={{ padding: "14px 28px" }}
                >
                  Try the timestamp tool <ArrowUpRight className="h-4 w-4 arrow-animate" />
                </button>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 text-base font-semibold transition-colors hover:bg-gray-50 cursor-pointer"
                  style={{ padding: "14px 28px", borderRadius: "2px", border: "1px solid #e8e8e8", color: "#010f62" }}
                >
                  <Mail className="h-4 w-4" /> Talk to an expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: How it works ─────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>How it works</p>
            <h2 className="text-3xl sm:text-4xl font-semibold" style={{ color: "#010f62" }}>Three simple steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 mx-auto flex items-center justify-center text-white text-lg font-bold mb-5"
                  style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#010f62" }}>{item.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#62718d" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Features grid ────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Features</p>
            <h2 className="text-3xl sm:text-4xl font-semibold" style={{ color: "#010f62" }}>Built for trust and privacy</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-static p-7">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#f0f3ff", borderRadius: "2px" }}
                >
                  <f.icon className="h-5 w-5" style={{ color: "#0033ff" }} />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: "#010f62" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#62718d" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Qualified vs Non-qualified ───────── */}
      <section style={{ backgroundColor: "#f9f9fa", borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Understanding timestamps</p>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6" style={{ color: "#010f62" }}>
                Qualified vs non-qualified timestamps
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#62718d" }}>
                Under eIDAS, electronic timestamps come in two levels. A <strong style={{ color: "#010f62" }}>non-qualified timestamp</strong> provides a reliable link between data and a point in time, while a <strong style={{ color: "#010f62" }}>qualified timestamp</strong> carries the full legal presumption of accuracy across all EU member states.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#62718d" }}>
                Our tool provides non-qualified timestamps using RFC&nbsp;3161 from a trusted TSA. Qualified timestamp support, issued by an EU-certified Qualified Trust Service Provider, is also available.
              </p>
            </div>
            <div className="space-y-5">
              {/* Non-qualified card */}
              <div className="bg-white p-7" style={{ border: "1px solid #e8e8e8", borderRadius: "2px" }}>
                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Non-qualified</p>
                <h3 className="text-lg font-semibold mb-4" style={{ color: "#010f62" }}>Standard timestamp</h3>
                <ul className="space-y-3">
                  {[
                    "RFC 3161 compliant",
                    "Admissible as evidence in court",
                    "Issued by a trusted TSA",
                    "Suitable for most business use cases",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "#62718d" }}>
                      <Check className="h-4 w-4 shrink-0" style={{ color: "#0033ff" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid #e8e8e8" }}>
                  <span className="text-sm font-semibold" style={{ color: "#0033ff" }}>Available now</span>
                </div>
              </div>
              {/* Qualified card */}
              <div className="p-7" style={{ backgroundColor: "#010f62", borderRadius: "2px" }}>
                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Qualified</p>
                <h3 className="text-lg font-semibold mb-4 text-white">eIDAS qualified timestamp</h3>
                <ul className="space-y-3">
                  {[
                    "Everything in non-qualified, plus:",
                    "Legal presumption of accuracy across all EU states",
                    "Issued by a Qualified Trust Service Provider (QTSP)",
                    "Highest level of legal certainty under eIDAS",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                      <Check className="h-4 w-4 shrink-0 text-white/50" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                  <span className="text-sm font-semibold text-white/60">Contact us for qualified timestamps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Use cases ────────────────────────── */}
      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Use cases</p>
            <h2 className="text-3xl sm:text-4xl font-semibold" style={{ color: "#010f62" }}>When you need a trusted timestamp</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="card-static p-7" style={{ backgroundColor: "white" }}>
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#f0f3ff", borderRadius: "2px" }}
                >
                  <uc.icon className="h-5 w-5" style={{ color: "#0033ff" }} />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: "#010f62" }}>{uc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#62718d" }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Bottom CTA ───────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="pattern-pixels px-8 py-14 sm:px-14 sm:py-16 text-center" style={{ backgroundColor: "#010f62", borderRadius: "2px" }}>
            <h2 className="relative text-2xl sm:text-3xl font-semibold text-white">Ready to timestamp your documents?</h2>
            <p className="relative mt-4 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
              Get in touch to learn how trusted timestamps can strengthen your compliance and document integrity.
            </p>
            <div className="relative mt-8">
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2 bg-white font-semibold transition-colors hover:bg-gray-100 cursor-pointer"
                style={{ color: "#010f62", padding: "12px 28px", borderRadius: "2px", fontSize: "16px" }}
              >
                Get in touch <ArrowUpRight className="h-4 w-4 arrow-animate" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
