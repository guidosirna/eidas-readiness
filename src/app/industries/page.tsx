import type { Metadata } from "next";
import {
  CreditCard, Heart, Landmark, Wifi, ShoppingCart, Plane, ArrowRight,
} from "lucide-react";
import { industries } from "@/lib/industries-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "eIDAS 2.0 by Industry | Sector-Specific Compliance Guidance",
  description: "How eIDAS 2.0 impacts your industry. Compliance guidance for financial services, healthcare, government, telecoms, e-commerce, and travel.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "eIDAS 2.0 by Industry: Sector-Specific Compliance Guidance",
    description: "Sector-specific eIDAS 2.0 compliance guidance for financial services, healthcare, government, telecoms, e-commerce, and travel.",
    type: "website",
    url: "/industries",
  },
};

const industryMeta: Record<string, { icon: React.ElementType }> = {
  "financial-services": { icon: CreditCard },
  healthcare: { icon: Heart },
  "government-public-sector": { icon: Landmark },
  telecommunications: { icon: Wifi },
  "ecommerce-platforms": { icon: ShoppingCart },
  "travel-transport": { icon: Plane },
};

export default function IndustriesIndexPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "eIDAS 2.0 by Industry", description: "Sector-specific eIDAS 2.0 compliance guidance.", url: "https://eidas-readiness.eu/industries" };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "eIDAS 2.0 by Industry" }]} />
      <section className="px-6 pt-20 pb-14 sm:pt-24 sm:pb-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>eIDAS 2.0 by Industry</h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "#62718d" }}>Every sector faces unique challenges under eIDAS 2.0. Explore how the regulation applies to your industry.</p>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const meta = industryMeta[industry.slug] ?? { icon: Landmark };
              const Icon = meta.icon;
              return (
                <a key={industry.slug} href={`/industries/${industry.slug}`} className="card-blue-hover p-6 group">
                  <div className="card-icon mb-5" style={{ color: "#0033ff" }}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: "#010f62" }}>{industry.title}</h2>
                  <p className="text-base line-clamp-3 mb-3" style={{ color: "#62718d" }}>{industry.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-base font-semibold group-hover:gap-2" style={{ color: "#0033ff" }}>
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock variant="secondary" headline="Assess Your Industry-Specific Readiness" description="Take our free eIDAS 2.0 readiness assessment to understand how the regulation impacts your sector." buttonText="Check your readiness" />
        </div>
      </section>
    </>
  );
}
