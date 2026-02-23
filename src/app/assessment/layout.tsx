import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Free eIDAS 2.0 Readiness Assessment",
  description:
    "Evaluate your organisation's eIDAS 2.0 preparedness in 3 minutes. Get a compliance score and personalised action plan for the EU Digital Identity Wallet.",
  alternates: { canonical: "/assessment" },
  openGraph: {
    title: "Free eIDAS 2.0 Readiness Assessment",
    description:
      "Evaluate your organisation's eIDAS 2.0 preparedness. Get a compliance score and personalised action plan.",
    type: "website",
    url: "/assessment",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "eIDAS 2.0 Readiness Assessment",
  description:
    "Evaluate your organization's preparedness for eIDAS 2.0 and the EU Digital Identity Wallet. Free assessment with actionable recommendations.",
  url: "https://eidas-readiness.eu/assessment",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "12-question compliance assessment",
    "Compliance readiness score",
    "Personalized gap analysis",
    "Actionable recommendations",
  ],
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={webAppJsonLd} />
      {children}
    </>
  );
}
