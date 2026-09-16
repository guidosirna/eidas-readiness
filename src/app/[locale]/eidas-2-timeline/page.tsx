import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TimelinePage, { timelineMetadata, TIMELINE_PATH } from "@/components/TimelinePage";
import { TRANSLATED_LOCALES, alternatesFor, isTranslatedLocale } from "@/lib/i18n/config";

/**
 * The timeline in German, Italian and Spanish.
 *
 * English is not in this segment: it lives at the bare /eidas-2-timeline,
 * because every URL Google has indexed for this site is an English one and
 * moving them under /en/ to make the shape symmetrical would be a migration
 * with nothing to gain.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) return {};
  return {
    ...timelineMetadata(locale),
    alternates: alternatesFor(locale, TIMELINE_PATH),
  };
}

export default async function LocalisedTimelinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <TimelinePage locale={locale} />;
}
