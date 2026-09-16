import { SITE_URL } from "@/lib/site";
import Link from "next/link";
import { getTermBySlug } from "@/lib/glossary-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShareButton from "@/components/ShareButton";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import HtmlLang from "@/components/HtmlLang";
import { UI } from "@/lib/i18n/ui";
import { termLocales, type GlossaryTranslation } from "@/lib/i18n/glossary";
import { DEFAULT_LOCALE, LOCALE_TAGS, localePath, type Locale } from "@/lib/i18n/config";

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

export function termPath(slug: string) {
  return `/glossary/${slug}`;
}

/**
 * Splits a definition into readable paragraphs.
 *
 * The English data holds most definitions as one long block, so anything over
 * 400 characters is cut into roughly three-sentence chunks. The sentence
 * regex is deliberately crude and works on all four languages, because none
 * of them end a sentence with anything other than . ! or ?
 */
function toParagraphs(text: string): string[] {
  let paragraphs = text.split(/\n\n+/).filter((p) => p.trim().length > 0);
  if (paragraphs.length === 1 && paragraphs[0].length > 400) {
    const sentences = paragraphs[0].match(/[^.!?]+[.!?]+/g) || [paragraphs[0]];
    const chunkSize = Math.ceil(sentences.length / Math.ceil(sentences.length / 3));
    paragraphs = [];
    for (let i = 0; i < sentences.length; i += chunkSize) {
      paragraphs.push(sentences.slice(i, i + chunkSize).join("").trim());
    }
  }
  return paragraphs;
}

/**
 * One glossary term, in one language.
 *
 * Related terms come from the English data in every language: there is one
 * translated term, so a German page linking to German related terms would
 * link to pages that do not exist. The category badge is the other way round,
 * shown translated but linking with the English key, because /glossary
 * filters on the English value.
 */
export default function GlossaryTermView({
  locale,
  slug,
  content,
}: {
  locale: Locale;
  slug: string;
  content: GlossaryTranslation;
}) {
  const t = UI[locale];
  const english = getTermBySlug(slug)!;
  const relatedTerms = english.relatedTerms
    .map((s) => getTermBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getTermBySlug>>[];
  const paragraphs = toParagraphs(content.fullDefinition);
  const categoryLabel = t.glossary.categories[content.category] ?? content.category;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: content.term,
    description: content.shortDefinition,
    inLanguage: LOCALE_TAGS[locale],
    url: `${SITE_URL}${localePath(locale, termPath(slug))}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "eIDAS 2.0 & Digital Identity Glossary",
      url: `${SITE_URL}/glossary`,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      {locale !== DEFAULT_LOCALE && <HtmlLang lang={LOCALE_TAGS[locale]} />}

      <Breadcrumbs items={[{ label: t.breadcrumb.glossary, href: "/glossary" }, { label: content.term }]} />

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            {content.term}
          </h1>
          <div className="mt-4">
            <Link
              href={`/glossary?category=${encodeURIComponent(content.category)}`}
              className={`inline-block px-4 py-2 text-base font-medium transition-colors ${getCategoryBadgeClass(content.category)}`}
              style={{ borderRadius: "2px" }}
            >
              {categoryLabel}
            </Link>
          </div>
          <div className="mt-5">
            <LocaleSwitcher
              current={locale}
              path={termPath(slug)}
              available={termLocales(slug)}
              label={t.language}
            />
          </div>
        </div>
      </section>

      <article className="px-6 pt-10 pb-12 sm:pt-12 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          <ShareButton title={content.term} variant="compact" />

          {/* Short definition highlight */}
          <div className="mt-8 p-5" style={{ backgroundColor: "#f9f9fa", borderLeft: "3px solid #0033ff", borderRadius: "2px" }}>
            <p className="text-base leading-relaxed sm:text-lg sm:leading-relaxed" style={{ color: "#010f62" }}>
              {content.shortDefinition}
            </p>
          </div>

          {/* Full definition */}
          <div className="mt-10 space-y-5">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-500 sm:text-lg sm:leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Terms — English targets, English labels */}
          {relatedTerms.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-xl font-semibold text-slate-900 mb-6">
                {t.glossary.relatedTerms}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedTerms.map((rt) => (
                  <Link key={rt.slug} href={`/glossary/${rt.slug}`} className="group block card p-5">
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
            <Link href="/glossary" className="btn-ghost">
              <span aria-hidden="true">&larr;</span>
              {t.glossary.back}
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <CtaBlock
            variant="primary"
            headline={t.glossary.ctaHeadline}
            description={t.glossary.ctaDescription}
            buttonText={t.glossary.ctaButton}
          />
        </div>
      </section>
    </>
  );
}

/** Metadata for one term in one language. */
export function termMetadata(locale: Locale, slug: string, content: GlossaryTranslation) {
  // The glossary template is right for the long tail and wrong for the few
  // terms that compete on real volume, so those carry their own title.
  const title = content.metaTitle ?? `${content.term} | eIDAS 2.0 Glossary`;
  const description = content.metaDescription ?? content.shortDefinition;
  return {
    // absolute: the root layout appends "| eIDAS 2.0 Readiness", which pushes
    // an override past the ~60 characters Google shows. A term on the default
    // template is short enough to keep the suffix.
    title: content.metaTitle ? { absolute: content.metaTitle } : title,
    description,
    openGraph: {
      title,
      description,
      type: "website" as const,
      url: localePath(locale, termPath(slug)),
      locale: LOCALE_TAGS[locale],
    },
  };
}
