import { faqItems, faqCategories } from "@/lib/faq-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqPageClient from "@/components/FaqPageClient";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import HtmlLang from "@/components/HtmlLang";
import { UI } from "@/lib/i18n/ui";
import { prose } from "@/lib/i18n/prose";
import { faqLocales, translateFaq } from "@/lib/i18n/faq";
import { DEFAULT_LOCALE, LOCALE_TAGS, localePath, type Locale } from "@/lib/i18n/config";

export const FAQ_PATH = "/faq";

const FAQ_IDS = faqItems.map((f) => f.id);

/**
 * The FAQ, in one language.
 *
 * FaqPageClient is a client component but Next still renders it on the server,
 * so all 28 questions are in the static HTML. That matters here more than
 * usual: the FAQPage structured data claims those questions, and a claim about
 * content a crawler cannot see is the kind of mismatch that costs a rich
 * result.
 */
export default function FaqPageView({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const items = faqItems.map((item) => ({
    id: item.id,
    category: item.category,
    ...translateFaq(locale, item),
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LOCALE_TAGS[locale],
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      {locale !== DEFAULT_LOCALE && <HtmlLang lang={LOCALE_TAGS[locale]} />}

      <Breadcrumbs items={[{ label: t.faq.h1 }]} />

      {/* Hero */}
      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>
            {t.faq.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            {prose(t.faq.standfirst, "underline", locale)}
          </p>
          <div className="mt-6">
            <LocaleSwitcher
              current={locale}
              path={FAQ_PATH}
              available={faqLocales(FAQ_IDS)}
              label={t.language}
            />
          </div>
        </div>
      </section>

      {/* Interactive FAQ content with sidebar */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <FaqPageClient
          faqItems={items}
          faqCategories={faqCategories}
          labels={{
            categories: t.faq.categories,
            searchPlaceholder: t.faq.searchPlaceholder,
            noResults: t.faq.noResults,
            all: t.faq.all,
          }}
        />
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <CtaBlock
          variant="primary"
          headline={t.faq.ctaHeadline}
          description={t.faq.ctaDescription}
          buttonText={t.faq.ctaButton}
          buttonHref="/assessment"
        />
      </div>
    </>
  );
}

export function faqMetadata(locale: Locale) {
  const t = UI[locale];
  const title = t.faq.metaTitle;
  const description = t.faq.metaDescription;
  return {
    // The English title and description are unchanged from the page this
    // replaces. It ranks on them; the refactor was not the moment to rewrite
    // them.
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      type: "website" as const,
      url: localePath(locale, FAQ_PATH),
      locale: LOCALE_TAGS[locale],
    },
  };
}

export { FAQ_IDS };
