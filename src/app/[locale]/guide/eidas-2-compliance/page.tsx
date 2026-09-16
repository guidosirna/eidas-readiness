import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage, { guideMetadata, GUIDE_PATH } from "@/components/GuidePage";
import { TRANSLATED_LOCALES, alternatesFor, isTranslatedLocale } from "@/lib/i18n/config";

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
    ...guideMetadata(locale),
    alternates: alternatesFor(locale, GUIDE_PATH),
  };
}

export default async function LocalisedGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <GuidePage locale={locale} />;
}
