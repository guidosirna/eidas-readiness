import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FaqPageView, { faqMetadata, FAQ_PATH, FAQ_IDS } from "@/components/FaqPageView";
import { faqIsComplete, faqLocales } from "@/lib/i18n/faq";
import { TRANSLATED_LOCALES, alternatesFor, isTranslatedLocale } from "@/lib/i18n/config";

/**
 * Only languages with every question translated get a page.
 *
 * A partly translated FAQ would still render, falling back to English per
 * question, but it would be a page that switches language mid-list. Better to
 * not have it than to have that.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LOCALES.filter((locale) => faqIsComplete(locale, FAQ_IDS)).map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) return {};
  return {
    ...faqMetadata(locale),
    alternates: alternatesFor(locale, FAQ_PATH, faqLocales(FAQ_IDS)),
  };
}

export default async function LocalisedFaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale) || !faqIsComplete(locale, FAQ_IDS)) notFound();
  return <FaqPageView locale={locale} />;
}
