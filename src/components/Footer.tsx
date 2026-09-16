"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import NewsletterForm from "./NewsletterForm";
import { linkPath, localeFromPathname } from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";

const assessmentLinks = [
  { href: "/assessment", label: "eIDAS 2.0 Readiness Assessment" },
  { href: "/eidas-2-compliance-checklist", label: "eIDAS 2.0 Compliance Checklist" },
  { href: "/eidas-2-timeline", label: "eIDAS 2.0 Timeline & Key Dates" },
  { href: "/services", label: "Consulting Services" },
];

const industryLinks = [
  { href: "/industries/financial-services", label: "eIDAS 2.0 for Financial Services" },
  { href: "/industries/healthcare", label: "eIDAS 2.0 for Healthcare" },
  { href: "/industries/government-public-sector", label: "eIDAS 2.0 for Government" },
  { href: "/industries/telecommunications", label: "eIDAS 2.0 for Telecom" },
  { href: "/industries/ecommerce-platforms", label: "eIDAS 2.0 for E-Commerce" },
  { href: "/industries/travel-transport", label: "eIDAS 2.0 for Travel & Transport" },
];

const roleLinks = [
  { href: "/roles/cto-technical-lead", label: "eIDAS 2.0 for CTOs" },
  { href: "/roles/compliance-officer", label: "eIDAS 2.0 for Compliance Officers" },
  { href: "/roles/product-manager", label: "eIDAS 2.0 for Product Managers" },
  { href: "/roles/legal-team", label: "eIDAS 2.0 for Legal Teams" },
];

const learnLinks = [
  { href: "/guide/eidas-2-compliance", label: "eIDAS 2.0 Compliance Guide" },
  { href: "/guide/eudiw-preparation", label: "EU Digital Identity Wallet Guide" },
  { href: "/faq", label: "eIDAS 2.0 FAQ" },
  { href: "/glossary", label: "eIDAS 2.0 Glossary" },
];

const resourceLinks = [
  { href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1183", label: "eIDAS 2.0 Regulation Text" },
  { href: "https://ec.europa.eu/digital-building-blocks/sites/display/EUDIGITALIDENTITYWALLET", label: "EUDIW Reference" },
  { href: "https://github.com/eu-digital-identity-wallet", label: "EUDIW GitHub" },
];


/**
 * A client component only so it can read the pathname.
 *
 * The chrome here was English on every page, including the German ones: the
 * tagline, the column headings and the newsletter block. The link labels stay
 * English on purpose, because they are the titles of English pages, the same
 * rule the rest of the site follows.
 */
export default function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = UI[locale].footer;
  const legalLinks = [
    { href: "/privacy", label: t.privacy },
    { href: "/terms", label: t.terms },
  ];

  return (
    <footer style={{ backgroundColor: "#010f62" }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top row: Brand + Assessment + Learn */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href={linkPath(locale, "/")} className="inline-flex items-center gap-2.5">
              <Image src="/logos/eu-flag.svg" alt="EU" width={28} height={20} className="h-5 w-auto" />
              <span className="flex items-baseline gap-1">
                <span className="font-display text-base font-bold tracking-tight text-white">eIDAS</span>
                <span className="font-display text-base font-normal tracking-tight text-white/60">Readiness</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              {t.tagline}
            </p>
          </div>

          {/* Assessment & Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white">{t.assessment}</h3>
            <ul className="mt-4 space-y-2.5">
              {assessmentLinks.map((link) => (
                <li key={link.href}>
                  <a href={linkPath(locale, link.href)} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-white">{t.learn}</h3>
            <ul className="mt-4 space-y-2.5">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <a href={linkPath(locale, link.href)} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* EU Resources + Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">{t.resources}</h3>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={linkPath(locale, link.href)} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO link rows: By Industry + By Role */}
        <div className="mt-10 pt-8 grid grid-cols-2 gap-8 lg:grid-cols-2" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <div>
            <h3 className="text-sm font-semibold text-white">{t.byIndustry}</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <a href={linkPath(locale, link.href)} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{t.byRole}</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {roleLinks.map((link) => (
                <li key={link.href}>
                  <a href={linkPath(locale, link.href)} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <NewsletterForm
            variant="inline"
            headline={t.newsletterHeadline}
            description={t.newsletterDescription}
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <p className="text-sm text-white/40">
            {t.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
        </div>
      </div>
    </footer>
  );
}
