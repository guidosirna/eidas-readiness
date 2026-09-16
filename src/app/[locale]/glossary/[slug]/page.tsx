import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryTermView, { termMetadata, termPath } from "@/components/GlossaryTermView";
import { getTermTranslation, termLocales, translatedTermSlugs } from "@/lib/i18n/glossary";
import { TRANSLATED_LOCALES, alternatesFor, isTranslatedLocale } from "@/lib/i18n/config";

/** The glossary terms that have been translated. One, so far. */
export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LOCALES.flatMap((locale) =>
    translatedTermSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale)) return {};
  const content = getTermTranslation(locale, slug);
  if (!content) return {};
  return {
    ...termMetadata(locale, slug, content),
    alternates: alternatesFor(locale, termPath(slug), termLocales(slug)),
  };
}

export default async function LocalisedGlossaryTermPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  const content = getTermTranslation(locale, slug);
  if (!content) notFound();
  return <GlossaryTermView locale={locale} slug={slug} content={content} />;
}
