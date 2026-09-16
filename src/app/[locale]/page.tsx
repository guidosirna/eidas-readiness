import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage, { homeMetadata, HOME_PATH } from "@/components/HomePage";
import { TRANSLATED_LOCALES, alternatesFor, isTranslatedLocale } from "@/lib/i18n/config";

/**
 * The translated homepages, at /de, /it and /es.
 *
 * English stays at the root. This segment is the only place a bare locale
 * prefix resolves to a page, so dynamicParams stays false: /fr must 404
 * rather than render English under a French URL.
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
    ...homeMetadata(locale),
    alternates: alternatesFor(locale, HOME_PATH),
  };
}

export default async function LocalisedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <HomePage locale={locale} />;
}
