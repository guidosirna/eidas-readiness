import Link from "next/link";
import { LOCALES, LOCALE_NAMES, LOCALE_TAGS, localePath, type Locale } from "@/lib/i18n/config";

/**
 * The links between the language versions of one page.
 *
 * This is not decoration. The glossary taught the lesson already: 35 term
 * pages sat in Search Console as "discovered, currently not indexed" because
 * the sitemap named them and no page linked to them. A translated page with
 * hreflang and no visible link in is the same page in the same hole, so every
 * localised route carries this block and each version links to all the others.
 *
 * hrefLang on the anchors tells a crawler what it is following before it
 * follows it, and rel="alternate" says these are the same page, not new ones.
 */
export default function LocaleSwitcher({
  current,
  path,
}: {
  current: Locale;
  path: string;
}) {
  return (
    <nav aria-label="Language" className="text-sm">
      <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
        {LOCALES.map((locale, i) => (
          <li key={locale} className="flex items-center gap-x-1">
            {i > 0 && <span aria-hidden="true" style={{ color: "#d4d8e3" }}>·</span>}
            {locale === current ? (
              <span className="font-semibold" style={{ color: "#010f62" }} aria-current="true">
                {LOCALE_NAMES[locale]}
              </span>
            ) : (
              <Link
                href={localePath(locale, path)}
                hrefLang={LOCALE_TAGS[locale]}
                rel="alternate"
                className="hover:opacity-70"
                style={{ color: "#62718d" }}
              >
                {LOCALE_NAMES[locale]}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
