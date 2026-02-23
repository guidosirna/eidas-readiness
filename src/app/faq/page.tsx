import type { Metadata } from "next";
import Link from "next/link";
import { faqItems } from "@/lib/faq-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqPageClient from "@/components/FaqPageClient";

export const metadata: Metadata = {
  title: "eIDAS 2.0 FAQ | Frequently Asked Questions",
  description:
    "Answers to common eIDAS 2.0 questions about the EU Digital Identity Wallet, compliance deadlines, trust services, and technical integration.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "eIDAS 2.0 FAQ | Frequently Asked Questions",
    description:
      "Answers to common eIDAS 2.0 questions about the EU Digital Identity Wallet, compliance deadlines, and integration.",
    type: "website",
    url: "/faq",
  },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      {/* Hero */}
      <section className="px-6 pt-20 pb-14 sm:pt-24 sm:pb-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            Find quick answers to common questions about{" "}
            <Link href="/guide/eidas-2-compliance" className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600">
              eIDAS 2.0 compliance
            </Link>
            , the European Digital Identity Wallet, and business readiness.
          </p>
        </div>
      </section>

      {/* Interactive FAQ content with sidebar */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <FaqPageClient />
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <CtaBlock
          variant="primary"
          headline="Still Have Questions? Check Your Readiness"
          description="Take our free eIDAS 2.0 readiness assessment to find out where your organisation stands and get a personalised action plan."
          buttonText="eIDAS Quick Check"
          buttonHref="/assessment"
        />
      </div>
    </>
  );
}
