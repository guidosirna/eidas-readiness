import Link from "next/link";
import TimelineVisual from "@/components/TimelineVisual";
import JsonLd from "@/components/JsonLd";
import DeadlineCountdown from "@/components/DeadlineCountdown";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import HtmlLang from "@/components/HtmlLang";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedResources from "@/components/RelatedResources";
import SidebarLayout from "@/components/SidebarLayout";
import { industries } from "@/lib/industries-data";
import { roles } from "@/lib/roles-data";
import { getTermBySlug } from "@/lib/glossary-data";
import { TIMELINE_CONTENT } from "@/lib/i18n/timeline";
import { prose } from "@/lib/i18n/prose";
import { DEFAULT_LOCALE, LOCALE_TAGS, localePath, type Locale } from "@/lib/i18n/config";
import { CreditCard, Landmark, Wifi } from "lucide-react";

export const TIMELINE_PATH = "/eidas-2-timeline";

// Google has 31 of this site's 59 URLs indexed and 47 "discovered, currently
// not indexed", which is almost exactly the leaf pages. A leaf stays out of
// the index when nothing links to it from a page the crawler visits often,
// and this page is the one it visits most: 48% of the site's search clicks.
// So the block below is a route in, and it is contextual on purpose, since
// every sector and role here carries an obligation the timeline dates.
// "European Digital Identity Wallet (EUDIW)" is the right label on its own
// page and far too long in a row of inline links, so take the abbreviation
// where the term declares one.
function shortLabel(term: string): string {
  // Leading form first: "mdoc (ISO 18013-5)" is known as mdoc, and taking the
  // parenthesis would label it with the standard number instead.
  const lead = term.match(/^([A-Za-z0-9-]{2,12})\s*\(/);
  if (lead) return lead[1];
  const abbr = term.match(/\(([^)]{2,12})\)\s*$/);
  return abbr ? abbr[1] : term;
}

const TIMELINE_TERMS = [
  "eudiw", "arf", "pid", "qeaa", "eaa", "relying-party",
  "trust-framework", "openid4vc", "sd-jwt", "mdoc", "lsp", "qtsp",
];

const CARD_ICONS = [CreditCard, Landmark, Wifi];

/**
 * The timeline page, in one language.
 *
 * The English route and the three translated routes both render this. The
 * alternative was three more copies of 380 lines of JSX, which is how the
 * prose and the markup would drift apart within a month.
 *
 * Links out of here stay English, because the pages they point at are English.
 * A German sentence linking to an English glossary entry is honest about where
 * it goes; a German label on an English page would not be.
 */
export default function TimelinePage({ locale }: { locale: Locale }) {
  const t = TIMELINE_CONTENT[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.hero.h1,
    description: t.meta.description,
    inLanguage: LOCALE_TAGS[locale],
    author: {
      "@type": "Organization",
      name: "eIDAS Readiness",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      {locale !== DEFAULT_LOCALE && <HtmlLang lang={LOCALE_TAGS[locale]} />}

      <Breadcrumbs items={[{ label: t.breadcrumb }]} />

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            {t.hero.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            {t.hero.standfirst}
          </p>
          <div className="mt-6">
            <LocaleSwitcher current={locale} path={TIMELINE_PATH} />
          </div>
        </div>
      </section>

      {/* Body with sidebar */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <SidebarLayout shareTitle={t.hero.h1} sections={[
          { id: "overview", label: t.nav.overview },
          { id: "implementation-timeline", label: t.nav.timeline },
          { id: "what-this-means", label: t.nav.whatThisMeans },
          { id: "related-resources", label: t.nav.related },
        ]}>
          <div className="space-y-12">
            <DeadlineCountdown copy={t.countdown} />

            {/* Overview */}
            <div id="overview">
              <h2 className="text-2xl sm:text-3xl mb-4">{t.overview.heading}</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#62718d" }}>
                {t.overview.paragraphs.map((p, i) => (
                  <p key={i}>{prose(p)}</p>
                ))}
              </div>
            </div>

            {/* Implementation Timeline */}
            <div id="implementation-timeline">
              <h2 className="text-2xl sm:text-3xl mb-8">{t.milestones.heading}</h2>
              <TimelineVisual events={t.milestones.items} />
            </div>

            {/* What This Means For Your Organisation */}
            <div id="what-this-means">
              <h2 className="text-2xl sm:text-3xl mb-6">{t.whatThisMeans.heading}</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {t.whatThisMeans.cards.map((item, i) => {
                  const Icon = CARD_ICONS[i] ?? CreditCard;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 px-4 py-4 group transition-colors hover:bg-white/60 card-static"
                    >
                      <Icon className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#0033ff" }} />
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold" style={{ color: "#010f62" }}>{item.title}</h3>
                        <p className="text-sm mt-1 leading-relaxed" style={{ color: "#62718d" }}>{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Who this affects.
                Three rows of inline links rather than a grid of stacked
                columns: the job here is to give the crawler a route into the
                leaf pages, and a reader a way across, not to open a new
                chapter. No explanatory paragraph either, the labels carry it. */}
            <div id="who-this-affects" className="pt-2">
              <dl className="space-y-3 text-sm">
                {[
                  {
                    label: t.whoThisAffects.sectors,
                    links: industries.map((i) => ({ href: `/industries/${i.slug}`, text: i.title })),
                  },
                  {
                    label: t.whoThisAffects.roles,
                    links: roles.map((r) => ({ href: `/roles/${r.slug}`, text: r.title })),
                  },
                  {
                    label: t.whoThisAffects.terms,
                    links: [
                      ...TIMELINE_TERMS.map((slug) => getTermBySlug(slug))
                        .filter(Boolean)
                        .map((term) => ({ href: `/glossary/${term!.slug}`, text: shortLabel(term!.term) })),
                      { href: "/glossary", text: t.whoThisAffects.allTerms },
                    ],
                  },
                ].map((row) => (
                  <div key={row.label} className="sm:flex sm:gap-4">
                    <dt
                      className="shrink-0 text-xs font-semibold uppercase tracking-wider sm:w-20 sm:pt-0.5"
                      style={{ color: "#a0a8bd" }}
                    >
                      {row.label}
                    </dt>
                    <dd className="mt-1 leading-relaxed sm:mt-0">
                      {row.links.map((l, i) => (
                        <span key={l.href}>
                          {i > 0 && <span style={{ color: "#d4d8e3" }}>{" · "}</span>}
                          <Link href={l.href} className="hover:opacity-70" style={{ color: "#010f62" }}>
                            {l.text}
                          </Link>
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Related Resources */}
            <div id="related-resources" className="-mx-6 px-6 py-10 sm:-mx-0 sm:px-8 sm:py-12" style={{ backgroundColor: "#f0f4ff", borderRadius: "2px" }}>
              <RelatedResources title={t.related.heading} resources={t.related.items} />
            </div>
          </div>
        </SidebarLayout>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock
            headline={t.cta.headline}
            description={t.cta.description}
            buttonText={t.cta.button}
            buttonHref="/assessment"
          />
        </div>
      </section>
    </>
  );
}

/** Metadata for the timeline in one language, used by both routes. */
export function timelineMetadata(locale: Locale) {
  const t = TIMELINE_CONTENT[locale];
  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "article" as const,
      url: localePath(locale, TIMELINE_PATH),
      locale: LOCALE_TAGS[locale],
    },
  };
}
