import { SITE_URL } from "@/lib/site";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import ContentGate from "@/components/ContentGate";
import SidebarLayout from "@/components/SidebarLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedResources from "@/components/RelatedResources";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import HtmlLang from "@/components/HtmlLang";
import { UI } from "@/lib/i18n/ui";
import { prose } from "@/lib/i18n/prose";
import { GUIDE_CONTENT, type GuideBlock } from "@/lib/i18n/guide";
import { DEFAULT_LOCALE, LOCALE_TAGS, localePath, type Locale } from "@/lib/i18n/config";

export const GUIDE_PATH = "/guide/eidas-2-compliance";

/**
 * One content block of the guide.
 *
 * The classNames are lifted verbatim from the page this replaces. The guide is
 * 1,054 impressions and the point of the refactor was to translate it, not to
 * redesign it, so anything that changed look would be a change nobody asked
 * for on a page that already works.
 */
function Block({
  block,
  index,
  locale,
}: {
  block: GuideBlock;
  index: number;
  locale: Locale;
}) {
  switch (block.t) {
    case "p":
      return (
        <p className="mb-4 text-lg leading-relaxed text-slate-500">
          {prose(block.text, "underline", locale)}
        </p>
      );

    case "h3":
      return (
        <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-900">{block.text}</h3>
      );

    case "callout":
      return (
        <div className="mt-8 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl p-5">
          <p className="font-semibold text-slate-900">{block.title}</p>
          <p className="mt-2 text-slate-500">{prose(block.text, "underline", locale)}</p>
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-blue-50">
                {block.head.map((cell, i) => (
                  <th key={i} className="px-4 py-3 font-semibold text-slate-900">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-500">
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={
                        c === 0 ? "px-4 py-3 font-medium text-slate-900" : "px-4 py-3"
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "list":
      return (
        <ul className="mb-6 space-y-2 text-lg text-slate-500">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
              <span>{prose(item, "underline", locale)}</span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="mb-8 space-y-4 text-lg text-slate-500">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                {i + 1}
              </span>
              <span>{prose(item, "underline", locale)}</span>
            </li>
          ))}
        </ol>
      );

    case "phases":
      return (
        <>
          {block.items.map((phase, i) => (
            <div key={i} className="mb-8 card-static p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{phase.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{phase.duration}</p>
                  <p className="mt-3 text-slate-500">{phase.text}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      );

    default: {
      // Exhaustive: a new block type is a type error here rather than a blank
      // space on the page.
      const never: never = block;
      void never;
      void index;
      return null;
    }
  }
}

/**
 * The compliance guide, in one language.
 *
 * ContentGate slices its direct children: the first one is the preview, the
 * rest sit behind the lead form. So the nine sections must be nine direct
 * children of the gate, which is why the sections are mapped here rather than
 * wrapped in a fragment.
 */
export default function GuidePage({ locale }: { locale: Locale }) {
  const t = GUIDE_CONTENT[locale];
  const ui = UI[locale];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.hero.h1,
    description: t.meta.description,
    inLanguage: LOCALE_TAGS[locale],
    datePublished: "2025-06-15",
    dateModified: "2025-12-10",
    author: { "@type": "Organization", name: "eIDAS 2.0 Readiness", url: SITE_URL },
    publisher: { "@type": "Organization", name: "eIDAS 2.0 Readiness", url: SITE_URL },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${localePath(locale, GUIDE_PATH)}`,
    },
    // Registration-wall markup: tells Google the section behind ContentGate is
    // intentionally gated, so serving it in the DOM is not treated as cloaking.
    // https://developers.google.com/search/docs/appearance/structured-data/paywalled-content
    isAccessibleForFree: false,
    hasPart: {
      "@type": "WebPageElement",
      isAccessibleForFree: false,
      cssSelector: ".gated-content",
    },
    wordCount: 3500,
    articleSection: "Compliance Guides",
  };

  // The HowTo steps are the roadmap phases, read off the content rather than
  // written out a second time. They drifted apart in the English original:
  // the schema said "Define Your Compliance Strategy" where the page said
  // "Strategy and Planning".
  const roadmap = t.sections.find((s) => s.id === "implementation-roadmap");
  const phases = roadmap?.blocks.find(
    (b): b is Extract<GuideBlock, { t: "phases" }> => b.t === "phases"
  );

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: roadmap?.heading ?? t.hero.h1,
    inLanguage: LOCALE_TAGS[locale],
    step: (phases?.items ?? []).map((phase, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: phase.title,
      text: phase.text,
      url: `${SITE_URL}${localePath(locale, GUIDE_PATH)}#implementation-roadmap`,
    })),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchema} />
      {locale !== DEFAULT_LOCALE && <HtmlLang lang={LOCALE_TAGS[locale]} />}

      <Breadcrumbs items={[{ label: ui.breadcrumb.guide, href: "/guide" }, { label: t.breadcrumb }]} />

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: "#62718d" }}>
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            {t.hero.h1}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm" style={{ color: "#62718d" }}>
            <time dateTime="2025-06-15">{t.hero.published}</time>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>{t.hero.updated}</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>{t.hero.readTime}</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "#62718d" }}>
            {prose(t.hero.standfirst, "plain", locale)}
          </p>
          <div className="mt-6">
            <LocaleSwitcher current={locale} path={GUIDE_PATH} label={ui.language} />
          </div>
          <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              alt="Digital networks and data infrastructure"
              width={800}
              height={320}
              className="w-full max-h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <SidebarLayout
          shareTitle={t.breadcrumb}
          sections={t.sections.map((s) => ({ id: s.id, label: s.label }))}
        >
          <ContentGate previewSections={1}>
            {t.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="font-display mt-16 mb-6 text-2xl sm:text-3xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} index={i} locale={locale} />
                ))}
              </section>
            ))}
          </ContentGate>

          {/* Related Resources */}
          <div className="mt-16 -mx-6 px-6 py-10 sm:-mx-0 sm:px-8 sm:py-12" style={{ backgroundColor: "#f0f4ff", borderRadius: "2px" }}>
            <RelatedResources title={t.related.heading} resources={t.related.items} locale={locale} />
          </div>

          {/* CTA */}
          <div className="mt-16">
            <CtaBlock
              variant="primary"
              headline={t.cta.headline}
              description={t.cta.description}
              buttonText={t.cta.button}
              buttonHref="/assessment"
            />
          </div>
        </SidebarLayout>
      </section>
    </>
  );
}

/** Metadata for the guide in one language. */
export function guideMetadata(locale: Locale) {
  const t = GUIDE_CONTENT[locale];
  return {
    // absolute: the root layout appends "| eIDAS 2.0 Readiness", which pushes
    // this one past the ~60 characters Google shows. The suffix is the part
    // worth losing.
    title: { absolute: t.meta.title },
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "article" as const,
      url: localePath(locale, GUIDE_PATH),
      locale: LOCALE_TAGS[locale],
    },
  };
}
