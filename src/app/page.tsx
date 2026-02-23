import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "eIDAS 2.0 Readiness Check | Is Your Organization Prepared?",
  description:
    "Free eIDAS 2.0 readiness assessment. Evaluate your compliance, identify gaps, and get a personalised action plan for the EU Digital Identity Wallet.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "eIDAS 2.0 Readiness Check | Is Your Organization Prepared?",
    description:
      "Free eIDAS 2.0 readiness assessment. Evaluate your compliance, identify gaps, and get a personalised action plan.",
    type: "website",
    url: "/",
  },
};
import {
  Shield,
  CreditCard,
  Wifi,
  ArrowRight,
  Code2,
  Scale,
  Building,
  Landmark,
  Heart,
  ShoppingCart,
  Plane,
  FileText,
  Users,
  Globe,
  Lock,
  Smartphone,
  ChevronRight,
} from "lucide-react";

const homepageFaqs = faqItems.slice(0, 4);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "eIDAS 2.0 Readiness",
  url: "https://eidas-readiness.eu",
  description: "Free eIDAS 2.0 readiness assessment helping organizations prepare for EU Digital Identity Wallet compliance.",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "eIDAS 2.0 Readiness",
  url: "https://eidas-readiness.eu",
  description: "Assess your organization's readiness for eIDAS 2.0 and the European Digital Identity Wallet.",
  publisher: { "@type": "Organization", name: "eIDAS 2.0 Readiness" },
};


export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webSiteSchema} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/office-meeting.jpg')" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(1,15,98,0.92)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-white mx-auto max-w-4xl">
            Is your organization ready for&nbsp;eIDAS&nbsp;2.0?
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            The EU Digital Identity Wallet becomes mandatory in{" "}
            <span className="font-semibold text-white">2026</span>.
            Find out where you stand in 3&nbsp;minutes.
          </p>
          <div className="mt-10">
            <a href="/assessment" className="btn-primary inline-flex">
              Take the free assessment <ArrowRight className="h-4 w-4" />
            </a>
          </div>


        </div>
      </section>

      {/* ── How it works — The main value proposition ──────── */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>How it works</p>
            <h2 className="text-3xl sm:text-4xl mb-4">Three steps to your compliance roadmap</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#62718d" }}>Free, no signup, takes under 5 minutes.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-0">
            {[
              { num: "1", title: "Answer 12 questions", desc: "Covering legal obligations, technical readiness, privacy alignment, and integration planning.", icon: FileText },
              { num: "2", title: "Get your readiness score", desc: "See exactly where you stand across 6 compliance areas with a detailed breakdown.", icon: Shield },
              { num: "3", title: "Follow your action plan", desc: "Receive prioritised, personalised recommendations tailored to your specific gaps.", icon: ChevronRight },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.num} className="relative flex flex-col items-center text-center px-8 py-10">
                  {/* Connecting line — hidden on mobile, hidden on last item */}
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-16 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px" style={{ backgroundColor: "#e8e8e8" }} />
                  )}
                  {/* Step number circle */}
                  <div
                    className="relative w-14 h-14 flex items-center justify-center mb-6"
                    style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
                  >
                    <span className="text-xl font-bold text-white">{item.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "#010f62" }}>{item.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#62718d" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <a href="/assessment" className="btn-primary">
              Start the quick check <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── What is eIDAS 2.0 — Context ─────────────────────── */}
      <section className="relative overflow-hidden" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-start">
            {/* Left — image with displacement (extends beyond grid) */}
            <div className="relative lg:-ml-6 lg:-mr-6">
              <div className="relative overflow-hidden" style={{ borderRadius: "2px" }}>
                <Image
                  src="/images/eu-parliament.jpg"
                  alt="European Parliament"
                  width={720}
                  height={540}
                  className="w-full h-auto object-cover"
                  style={{ minHeight: "480px" }}
                />
              </div>
            </div>

            {/* Right — heading + blue panel */}
            <div className="flex flex-col lg:pl-12">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6" style={{ color: "#010f62" }}>
                  What is eIDAS&nbsp;2.0?
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#62718d" }}>
                  The EU&apos;s updated digital identity regulation requires every Member State to issue a free{" "}
                  <a href="/glossary/eudiw" className="btn-ghost font-medium">Digital Identity Wallet</a>{" "}
                  to citizens and residents. Organizations in regulated sectors must accept it.
                </p>
              </div>

              {/* Blue panel with icon rows — displaced downward to overlap */}
              <div className="p-8 sm:p-10 flex flex-col" style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}>
                <div className="space-y-4">
                  {[
                    { icon: Users, number: "450M+", label: "EU citizens will receive a free digital identity wallet" },
                    { icon: Globe, number: "27", label: "Member States with cross-border recognition" },
                    { icon: Smartphone, number: "2026", label: "Mandatory wallet acceptance begins for regulated sectors" },
                    { icon: Lock, number: "100%", label: "Privacy by design with selective disclosure" },
                  ].map((item) => (
                    <a
                      key={item.number}
                      href="/guide/eidas-2-compliance"
                      className="flex items-center gap-4 p-4 transition-colors group"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "2px" }}
                    >
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "2px" }}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xl font-bold text-white">{item.number}</p>
                        <p className="text-sm text-white/70 leading-snug">{item.label}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-white/40 shrink-0 transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="/guide/eidas-2-compliance" className="inline-flex items-center gap-2 text-white font-semibold text-base hover:opacity-80 transition-opacity">
                    <FileText className="h-4 w-4" /> Read the full guide <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries — Who is affected ─────────────────────── */}
      <section style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Affected industries</p>
          <h2 className="text-3xl sm:text-4xl mb-4">Is your sector affected?</h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "#62718d" }}>These industries must accept the EU Digital Identity Wallet. Find your sector.</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <CreditCard className="w-10 h-10" />, title: "Financial Services", slug: "financial-services", desc: "Banks, payment providers, and fintechs must accept EUDIW for customer onboarding and strong authentication." },
              { icon: <Heart className="w-10 h-10" />, title: "Healthcare", slug: "healthcare", desc: "Hospitals, insurers, and health platforms need to verify patient identity and handle health attestations." },
              { icon: <Landmark className="w-10 h-10" />, title: "Government & Public Sector", slug: "government-public-sector", desc: "All public services offering online access must accept the wallet for citizen authentication." },
              { icon: <Wifi className="w-10 h-10" />, title: "Telecommunications", slug: "telecommunications", desc: "Telecom operators must accept the wallet for SIM registration and subscriber verification." },
              { icon: <ShoppingCart className="w-10 h-10" />, title: "E-commerce & Platforms", slug: "ecommerce-platforms", desc: "Very large online platforms must support wallet-based age verification and identity checks." },
              { icon: <Plane className="w-10 h-10" />, title: "Travel & Transport", slug: "travel-transport", desc: "Airlines, hotels, and mobility providers will need to verify digital travel credentials and identity documents." },
            ].map((item) => (
              <a key={item.title} href={`/industries/${item.slug}`} className="card-blue-hover p-6 group">
                <div className="card-icon mb-5" style={{ color: "#0033ff" }}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2" style={{ color: "#010f62" }}>{item.title}</h4>
                <p className="text-base leading-relaxed mb-3" style={{ color: "#62718d" }}>{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-base font-semibold group-hover:gap-2" style={{ color: "#0033ff" }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a href="/industries" className="btn-secondary">View all industries</a>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ─────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock
            headline="Understand how these changes affect your business"
            description="Take our free eIDAS 2.0 readiness assessment and discover which areas of digital identity compliance need your attention."
            buttonText="Get your readiness score"
            buttonHref="/assessment"
          />
        </div>
      </section>

      {/* ── Key roles — Who in the org ───────────────────────── */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Who in your organization</p>
          <h2 className="text-3xl sm:text-4xl mb-4">Key roles that need to prepare</h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "#62718d" }}>eIDAS 2.0 affects multiple teams. Find out what it means for your position.</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: <Shield className="w-10 h-10" />, title: "CTOs and Technical Leaders", slug: "cto-technical-lead", desc: "Responsible for technical infrastructure changes, protocol integration, and wallet connectivity." },
              { icon: <Scale className="w-10 h-10" />, title: "Compliance Officers", slug: "compliance-officer", desc: "Must understand new regulatory obligations, mandatory acceptance rules, and reporting requirements." },
              { icon: <Code2 className="w-10 h-10" />, title: "Product Managers", slug: "product-manager", desc: "Need to plan wallet-based identity features, user flows, and credential verification UX." },
              { icon: <Building className="w-10 h-10" />, title: "Legal Teams", slug: "legal-team", desc: "Must assess liability implications, data protection alignment, and relying party registration." },
            ].map((item) => (
              <a key={item.title} href={`/roles/${item.slug}`} className="card-blue-hover p-6 group">
                <div className="card-icon mb-5" style={{ color: "#0033ff" }}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2" style={{ color: "#010f62" }}>{item.title}</h4>
                <p className="text-base leading-relaxed mb-3" style={{ color: "#62718d" }}>{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-base font-semibold group-hover:gap-2" style={{ color: "#0033ff" }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a href="/roles" className="btn-secondary">View all roles</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>FAQ</p>
              <h2 className="text-3xl sm:text-4xl mb-4">Common questions</h2>
              <p className="text-lg mb-8" style={{ color: "#62718d" }}>Quick answers to the most common questions about eIDAS 2.0.</p>
              <a href="/faq" className="btn-secondary"><FileText className="h-4 w-4" /> See all FAQs</a>
            </div>
            <div>
              <FaqAccordion
                items={homepageFaqs.map((faq) => ({ question: faq.question, answer: faq.answer }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock
            headline="Start preparing today"
            description="Organizations that act early have time to implement changes thoughtfully. Those that wait risk non-compliance and competitive disadvantage."
            buttonText="Take the free assessment"
            buttonHref="/assessment"
          />
        </div>
      </section>
    </>
  );
}
