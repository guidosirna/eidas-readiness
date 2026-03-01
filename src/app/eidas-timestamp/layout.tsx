import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "eIDAS Timestamp Tool - Trusted Timestamping for Digital Documents",
  description:
    "Timestamp your digital documents with our eIDAS-compliant tool. RFC 3161 trusted timestamps, client-side privacy, no registration required.",
  alternates: { canonical: "/eidas-timestamp" },
  openGraph: {
    title: "eIDAS Timestamp Tool",
    description:
      "Timestamp your digital documents with trusted RFC 3161 timestamps. Client-side privacy, no registration required.",
    type: "website",
    url: "/eidas-timestamp",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "eIDAS Timestamp Tool",
  description:
    "Trusted timestamping tool for digital documents. RFC 3161 compliant, client-side hashing for privacy, no registration required.",
  url: "https://www.eidasreadiness.com/eidas-timestamp",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "",
    priceCurrency: "EUR",
    priceSpecification: { "@type": "PriceSpecification", "priceCurrency": "EUR" },
  },
  featureList: [
    "RFC 3161 trusted timestamps",
    "Client-side file hashing",
    "No registration required",
    "Any file type supported",
    "Verifiable timestamp proof",
    "Easy to use",
  ],
};

export default function TimestampLayout({
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
