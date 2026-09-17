"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Check,
  Clock,
  BarChart3,
  FileText,
  Mail,
} from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";
import AssessmentWizard from "@/components/AssessmentWizard";

const sixAreas = [
  { title: "Legal Framework", desc: "Obligations, timelines, and sector applicability" },
  { title: "Technical Infrastructure", desc: "Authentication methods and protocol readiness" },
  { title: "Security & Privacy", desc: "Data minimisation and GDPR alignment" },
  { title: "Organizational Readiness", desc: "Governance and cross-functional coordination" },
  { title: "Documentation", desc: "Policies, audit trails, and record-keeping" },
  { title: "Integration Planning", desc: "API capabilities and EUDIW roadmap" },
];

/**
 * The assessment: the headline, the twelve questions beside it, then what you
 * get back.
 *
 * The questions used to be a separate page at /assessment/quick-check, reached
 * by a button where the wizard now sits. Every CTA on the site — header, footer,
 * sticky banner, home hero, all four locales of the timeline and the guide —
 * points here, and this page spent that traffic on one more click: over 90 days
 * 80 people arrived and 16 clicked through. The step was the leak, not the
 * questions: 12 of those 16 went on to answer.
 *
 * "What to expect" moved out of the white card and under the headline, because
 * the card is the wizard now. "Talk to an expert" stays beside the headline as
 * the plainly secondary thing it is.
 */
export default function AssessmentPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero: left text + right white card with CTA */}
      <section className="relative" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/eu-parliament.jpg')" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(1,15,98,0.92)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Left: headline, what to expect, and the secondary action (2 cols) */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] font-semibold text-white mb-5">
                Is your organisation ready for eIDAS&nbsp;2.0?
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                Answer 12 targeted questions and get a compliance readiness score with a personalised action plan.
              </p>
              <ul className="mt-9 space-y-4">
                {[
                  { icon: Clock, text: "Takes under 5 minutes" },
                  { icon: BarChart3, text: "Score across 6 compliance areas" },
                  { icon: FileText, text: "Personalised gap analysis" },
                  { icon: Check, text: "No signup required" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 shrink-0 text-white/50" />
                    <span className="text-base text-white/80">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 pt-7" style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center gap-2 text-base font-medium text-white/80 transition-opacity hover:opacity-70 cursor-pointer"
                >
                  <Mail className="h-4 w-4" /> Talk to an expert
                </button>
              </div>
            </div>
            {/* Right: the twelve questions, where the button used to be (3 cols) */}
            <div className="lg:col-span-3 min-w-0">
              <AssessmentWizard />
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>What you get</p>
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
              <Image src="/logos/eidas-regulation.svg" alt="eIDAS 2.0" width={200} height={52} className="h-11 w-auto mt-8" />
            </div>
            {/* Right: six areas grid */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Assessment scope</p>
              <h3 className="text-2xl sm:text-3xl mb-6">Six areas we evaluate</h3>
              <div className="grid gap-5">
                {sixAreas.map((card) => (
                  <div key={card.title} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 mt-1" style={{ color: "#0033ff" }} />
                    <div>
                      <h4 className="text-base font-semibold mb-0.5" style={{ color: "#010f62" }}>{card.title}</h4>
                      <p className="text-base leading-relaxed" style={{ color: "#62718d" }}>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <ContactFormModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
