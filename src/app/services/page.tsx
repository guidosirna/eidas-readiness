import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "eIDAS 2.0 Consulting Services | Readiness Audit & Implementation",
  description:
    "Structured support for your eIDAS 2.0 implementation: readiness audit, implementation roadmap, and advisory programme for European organisations preparing for the EU Digital Identity Wallet.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "eIDAS 2.0 Consulting Services",
    description:
      "From readiness assessment to full implementation guidance. Readiness audit, implementation roadmap, and advisory programme for eIDAS 2.0 and the EU Digital Identity Wallet.",
    type: "website",
    url: "/services",
  },
};

const BASE_URL = "https://www.eidasreadiness.com";

export default function ServicesRoute() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "eIDAS 2.0 Consulting Services",
    description:
      "Readiness audit, implementation roadmap, and advisory programme for eIDAS 2.0 and the EU Digital Identity Wallet.",
    url: `${BASE_URL}/services`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          name: "Readiness Audit",
          description:
            "A comprehensive evaluation of your current compliance posture across legal obligations, technical infrastructure, privacy alignment, and organisational readiness.",
          price: "5000",
        },
        {
          name: "Implementation Roadmap",
          description:
            "A tailored technical and organisational roadmap that takes you from current state to eIDAS 2.0 compliance.",
        },
        {
          name: "Advisory Programme",
          description:
            "Hands-on support through implementation: regulatory monitoring, technical guidance, and strategic alignment.",
        },
      ].map((service, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          serviceType: "eIDAS 2.0 compliance consulting",
          areaServed: "EU",
          provider: {
            "@type": "Organization",
            name: "eIDAS 2.0 Readiness",
            url: BASE_URL,
          },
          // Only the audit publishes a figure. The other two are quoted, so
          // no price is emitted for them — structured data is public.
          offers: service.price
            ? {
                "@type": "Offer",
                priceCurrency: "EUR",
                price: service.price,
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "EUR",
                  minPrice: service.price,
                  valueAddedTaxIncluded: false,
                },
              }
            : { "@type": "Offer", availability: "https://schema.org/InStock" },
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "Services" }]} />
      <ServicesPage />
    </>
  );
}
