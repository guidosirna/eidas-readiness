import { SITE_URL } from "@/lib/site";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import HtmlLang from "@/components/HtmlLang";
import { faqItems } from "@/lib/faq-data";
import { translateFaq } from "@/lib/i18n/faq";
import { HOME_CONTENT } from "@/lib/i18n/home";
import { UI } from "@/lib/i18n/ui";
import { DEFAULT_LOCALE, LOCALE_TAGS, linkPath, localePath, type Locale } from "@/lib/i18n/config";
import {
  Shield, CreditCard, Wifi, ArrowUpRight, Code2, Scale, Building, Landmark,
  Heart, ShoppingCart, Plane, FileText, Users, Globe, Lock, Smartphone, ChevronRight,
} from "lucide-react";

export const HOME_PATH = "/";

const STEP_ICONS = [FileText, Shield, ChevronRight];
const STAT_ICONS = [Users, Globe, Smartphone, Lock];

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  "financial-services": CreditCard,
  healthcare: Heart,
  "government-public-sector": Landmark,
  telecommunications: Wifi,
  "ecommerce-platforms": ShoppingCart,
  "travel-transport": Plane,
};

const ROLE_ICONS: Record<string, React.ElementType> = {
  "cto-technical-lead": Shield,
  "compliance-officer": Scale,
  "product-manager": Code2,
  "legal-team": Building,
};

/**
 * The homepage, in one language.
 *
 * The four FAQ answers shown here come from the same translations as /faq, so
 * a question cannot be worded one way on the homepage and another on the FAQ.
 * The FAQPage markup below covers exactly those four, which is what a crawler
 * can see on this page.
 */
export default function HomePage({ locale }: { locale: Locale }) {
  const t = HOME_CONTENT[locale];
  const ui = UI[locale];
  const homepageFaqs = faqItems.slice(0, 4).map((item) => translateFaq(locale, item));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LOCALE_TAGS[locale],
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "eIDAS 2.0 Readiness",
    url: SITE_URL,
    description:
      "Free eIDAS 2.0 readiness assessment helping organizations prepare for EU Digital Identity Wallet compliance.",
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "eIDAS 2.0 Readiness",
    url: SITE_URL,
    description:
      "Assess your organization's readiness for eIDAS 2.0 and the European Digital Identity Wallet.",
    publisher: { "@type": "Organization", name: "eIDAS 2.0 Readiness" },
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webSiteSchema} />
      {locale !== DEFAULT_LOCALE && <HtmlLang lang={LOCALE_TAGS[locale]} />}

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/office-meeting.jpg')" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(1,15,98,0.92)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-white mx-auto max-w-4xl">
            {t.hero.h1}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.hero.lead}
            <span className="font-semibold text-white">{t.hero.leadStrong}</span>{" "}
            {t.hero.sub}
          </p>
          <div className="mt-10">
            <a href={linkPath(locale, "/assessment")} className="btn-primary inline-flex">
              {t.hero.cta} <ArrowUpRight className="h-4 w-4 arrow-animate" />
            </a>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>{t.how.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl mb-4">{t.how.heading}</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#62718d" }}>{t.how.note}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-0">
            {t.how.steps.map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center px-8 py-10">
                {/* Connecting line — hidden on mobile, hidden on last item */}
                {i < 2 && (
                  <div className="hidden sm:block absolute top-16 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px" style={{ backgroundColor: "#e8e8e8" }} />
                )}
                <div
                  className="relative w-14 h-14 flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
                >
                  <span className="text-xl font-bold text-white">{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "#010f62" }}>{item.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#62718d" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href={linkPath(locale, "/assessment")} className="btn-primary">
              {t.how.cta} <ArrowUpRight className="h-4 w-4 arrow-animate" />
            </a>
          </div>
        </div>
      </section>

      {/* ── What is eIDAS 2.0 ─────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-start">
            <div className="relative lg:-ml-6 lg:-mr-6">
              <div className="relative overflow-hidden" style={{ borderRadius: "2px" }}>
                <Image
                  src="/images/eu-parliament.jpg"
                  alt="European Parliament"
                  width={720}
                  height={540}
                  className="w-full h-auto object-cover"
                  style={{ minHeight: "480px" }}
                />
              </div>
            </div>

            <div className="flex flex-col lg:pl-12">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6" style={{ color: "#010f62" }}>
                  {t.what.heading}
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#62718d" }}>
                  {t.what.text}
                  <a href="/glossary/eudiw" className="btn-ghost font-medium">{t.what.walletTerm}</a>
                  {t.what.textAfter}
                </p>
              </div>

              <div className="p-8 sm:p-10 flex flex-col" style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}>
                <div className="space-y-4">
                  {t.what.stats.map((item, i) => {
                    const Icon = STAT_ICONS[i] ?? Users;
                    return (
                      <a
                        key={i}
                        href={linkPath(locale, "/guide/eidas-2-compliance")}
                        className="flex items-center gap-4 p-4 transition-colors group"
                        style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "2px" }}
                      >
                        <div className="w-10 h-10 shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "2px" }}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xl font-bold text-white">{item.number}</p>
                          <p className="text-sm text-white/70 leading-snug">{item.label}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-white/40 shrink-0 transition-transform group-hover:translate-x-1" />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-6">
                  <a href={linkPath(locale, "/guide/eidas-2-compliance")} className="inline-flex items-center gap-2 text-white font-semibold text-base hover:opacity-80 transition-opacity">
                    <FileText className="h-4 w-4" /> {t.what.cta} <ArrowUpRight className="h-4 w-4 arrow-animate" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries.
           The cards name the sector in the reader's language and land on the
           English sector page, because only two of the six are translated. ── */}
      <section style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>{t.industries.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl mb-4">{t.industries.heading}</h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "#62718d" }}>{t.industries.note}</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.industries.cards.map((item) => {
              const Icon = INDUSTRY_ICONS[item.slug] ?? Landmark;
              return (
                <a key={item.slug} href={`/industries/${item.slug}`} className="card-blue-hover p-6 group">
                  <div className="card-icon mb-5" style={{ color: "#0033ff" }}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: "#010f62" }}>{item.title}</h4>
                  <p className="text-base leading-relaxed mb-3" style={{ color: "#62718d" }}>{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-base font-semibold group-hover:gap-2" style={{ color: "#0033ff" }}>
                    {t.industries.learnMore} <ArrowUpRight className="h-3.5 w-3.5 arrow-animate" />
                  </span>
                </a>
              );
            })}
          </div>
          <div className="mt-8">
            <a href="/industries" className="btn-secondary">{t.industries.cta}</a>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ─────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock
            headline={t.midCta.headline}
            description={t.midCta.description}
            buttonText={t.midCta.button}
            buttonHref="/assessment"
          />
        </div>
      </section>

      {/* ── Key roles ────────────────────────────────────────── */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>{t.roles.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl mb-4">{t.roles.heading}</h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "#62718d" }}>{t.roles.note}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.roles.cards.map((item) => {
              const Icon = ROLE_ICONS[item.slug] ?? Shield;
              return (
                <a key={item.slug} href={`/roles/${item.slug}`} className="card-blue-hover p-6 group">
                  <div className="card-icon mb-5" style={{ color: "#0033ff" }}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: "#010f62" }}>{item.title}</h4>
                  <p className="text-base leading-relaxed mb-3" style={{ color: "#62718d" }}>{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-base font-semibold group-hover:gap-2" style={{ color: "#0033ff" }}>
                    {t.roles.learnMore} <ArrowUpRight className="h-3.5 w-3.5 arrow-animate" />
                  </span>
                </a>
              );
            })}
          </div>
          <div className="mt-8">
            <a href="/roles" className="btn-secondary">{t.roles.cta}</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>{t.faq.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl mb-4">{t.faq.heading}</h2>
              <p className="text-lg mb-8" style={{ color: "#62718d" }}>{t.faq.note}</p>
              <a href={linkPath(locale, "/faq")} className="btn-secondary">
                <FileText className="h-4 w-4" /> {t.faq.seeAll}
              </a>
            </div>
            <div>
              <FaqAccordion items={homepageFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock
            headline={t.finalCta.headline}
            description={t.finalCta.description}
            buttonText={t.finalCta.button}
            buttonHref="/assessment"
          />
        </div>
      </section>
    </>
  );
}

export function homeMetadata(locale: Locale) {
  const t = HOME_CONTENT[locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website" as const,
      url: localePath(locale, HOME_PATH),
      locale: LOCALE_TAGS[locale],
    },
  };
}
