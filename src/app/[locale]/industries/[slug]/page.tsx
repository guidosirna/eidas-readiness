import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageView, { industryMetadata, industryPath } from "@/components/IndustryPageView";
import {
  getIndustryTranslation,
  industryLocales,
  translatedIndustrySlugs,
} from "@/lib/i18n/industries";
import { TRANSLATED_LOCALES, alternatesFor, isTranslatedLocale } from "@/lib/i18n/config";

/**
 * The sector pages that have been translated.
 *
 * Only the locale/slug pairs that actually exist are generated, so a request
 * for a sector with no translation in that language 404s rather than serving
 * the English text under a German URL, which is the version of this that gets
 * a site a duplicate-content problem instead of an extra language.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LOCALES.flatMap((locale) =>
    translatedIndustrySlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale)) return {};
  const content = getIndustryTranslation(locale, slug);
  if (!content) return {};
  return {
    ...industryMetadata(locale, slug, content),
    alternates: alternatesFor(locale, industryPath(slug), industryLocales(slug)),
  };
}

export default async function LocalisedIndustryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  const content = getIndustryTranslation(locale, slug);
  if (!content) notFound();
  return <IndustryPageView locale={locale} slug={slug} content={content} />;
}
