import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { glossaryTerms, getTermBySlug } from "@/lib/glossary-data";
import GlossaryTermView, { termMetadata, termPath } from "@/components/GlossaryTermView";
import { termLocales } from "@/lib/i18n/glossary";
import { alternatesFor } from "@/lib/i18n/config";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const term = getTermBySlug(params.slug);
  if (!term) {
    return { title: "Term Not Found | eIDAS 2.0 Glossary" };
  }
  return {
    ...termMetadata("en", term.slug, term),
    alternates: alternatesFor("en", termPath(term.slug), termLocales(term.slug)),
  };
}

export default function GlossaryTermPage({ params }: PageProps) {
  const term = getTermBySlug(params.slug);
  if (!term) notFound();
  return <GlossaryTermView locale="en" slug={term.slug} content={term} />;
}
