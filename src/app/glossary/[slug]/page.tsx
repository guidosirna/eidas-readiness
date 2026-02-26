import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossaryTerms, getTermBySlug } from "@/lib/glossary-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShareButton from "@/components/ShareButton";

const categoryColors: Record<string, string> = {
  "Core Regulation": "bg-blue-50 text-blue-700 hover:bg-blue-100",
  "Digital Identity": "bg-sky-50 text-sky-700 hover:bg-sky-100",
  "Trust Services": "bg-amber-50 text-amber-700 hover:bg-amber-100",
  "Technical Standards": "bg-purple-50 text-purple-700 hover:bg-purple-100",
  Governance: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
};

function getCategoryBadgeClass(category: string): string {
  return categoryColors[category] ?? "bg-slate-100 text-slate-600";
}

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
    title: `${term.term} | eIDAS 2.0 Glossary`,
    description: term.shortDefinition,
    alternates: { canonical: `/glossary/${term.slug}` },
    openGraph: {
      title: `${term.term} | eIDAS 2.0 Glossary`,
      description: term.shortDefinition,
      type: "website",
      url: `/glossary/${term.slug}`,
    },
  };
}

export default function GlossaryTermPage({ params }: PageProps) {
  const term = getTermBySlug(params.slug);

  if (!term) {
    notFound();
  }

  const relatedTerms = term.relatedTerms
    .map((slug) => getTermBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getTermBySlug>>[];

  // Split long definitions into readable paragraphs
  let paragraphs = term.fullDefinition
    .split(/\n\n+/)
    .filter((p) => p.trim().length > 0);

  // If only 1 paragraph and very long, split into ~3-sentence chunks
  if (paragraphs.length === 1 && paragraphs[0].length > 400) {
    const sentences = paragraphs[0].match(/[^.!?]+[.!?]+/g) || [paragraphs[0]];
    const chunkSize = Math.ceil(sentences.length / Math.ceil(sentences.length / 3));
    paragraphs = [];
    for (let i = 0; i < sentences.length; i += chunkSize) {
      paragraphs.push(sentences.slice(i, i + chunkSize).join("").trim());
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.shortDefinition,
    url: `https://www.eidasreadiness.com/glossary/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "eIDAS 2.0 & Digital Identity Glossary",
      url: "https://www.eidasreadiness.com/glossary",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: term.term }]} />

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            {term.term}
          </h1>
          <div className="mt-4">
            <Link
              href={`/glossary?category=${encodeURIComponent(term.category)}`}
              className={`inline-block px-4 py-2 text-base font-medium transition-colors ${getCategoryBadgeClass(term.category)}`}
              style={{ borderRadius: "2px" }}
            >
              {term.category}
            </Link>
          </div>
        </div>
      </section>

      <article className="px-6 pt-10 pb-12 sm:pt-12 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          {/* Share */}
          <ShareButton title={term.term} variant="compact" />

          {/* Short definition highlight */}
          <div className="mt-8 p-5" style={{ backgroundColor: "#f9f9fa", borderLeft: "3px solid #0033ff", borderRadius: "2px" }}>
            <p className="text-base leading-relaxed sm:text-lg sm:leading-relaxed" style={{ color: "#010f62" }}>
              {term.shortDefinition}
            </p>
          </div>

          {/* Full definition */}
          <div className="mt-10 space-y-5">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-slate-500 sm:text-lg sm:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Terms */}
          {relatedTerms.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-xl font-semibold text-slate-900 mb-6">
                Related Terms
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedTerms.map((rt) => (
                  <Link
                    key={rt.slug}
                    href={`/glossary/${rt.slug}`}
                    className="group block card p-5"
                  >
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {rt.term}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-500 line-clamp-2">
                      {rt.shortDefinition}
                    </p>
                    <span
                      className={`mt-3 inline-block px-4 py-2 text-base font-medium transition-colors ${getCategoryBadgeClass(rt.category)}`}
                      style={{ borderRadius: "2px" }}
                    >
                      {rt.category}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/glossary"
              className="btn-ghost"
            >
              <span aria-hidden="true">&larr;</span>
              Back to glossary
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <CtaBlock
            variant="primary"
            headline="See How eIDAS 2.0 Affects Your Organisation"
            description="Take our free readiness assessment to understand your compliance gaps and get actionable recommendations."
            buttonText="Get your readiness score"
          />
        </div>
      </section>
    </>
  );
}
