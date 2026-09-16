import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustryBySlug } from "@/lib/industries-data";
import IndustryPageView, { industryMetadata, industryPath } from "@/components/IndustryPageView";
import { industryLocales } from "@/lib/i18n/industries";
import { alternatesFor } from "@/lib/i18n/config";

interface PageProps { params: { slug: string } }

export function generateStaticParams() { return industries.map((ind) => ({ slug: ind.slug })); }

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    ...industryMetadata("en", industry.slug, industry),
    // Only the sectors that have translations claim other languages. Four of
    // the six have none, and for those this emits the canonical alone.
    alternates: alternatesFor("en", industryPath(industry.slug), industryLocales(industry.slug)),
  };
}

export default function IndustryPage({ params }: PageProps) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();
  return <IndustryPageView locale="en" slug={industry.slug} content={industry} />;
}
