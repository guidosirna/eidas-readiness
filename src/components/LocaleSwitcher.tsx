"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import {
  LOCALES,
  LOCALE_NAMES,
  LOCALE_TAGS,
  hasTranslation,
  localeFromPathname,
  switchLocale,
} from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";

/**
 * The language switcher, in the header, on every page.
 *
 * It reads the current language and the target for each other language off the
 * pathname, so it works on pages that know nothing about translation, which is
 * most of the site. On a page that exists in the target language it links to
 * that page; on one that does not it links to that language's homepage, which
 * is the honest thing to offer rather than a link that does nothing.
 *
 * hrefLang on the anchors tells a crawler what it is following before it
 * follows it, and rel="alternate" says it is the same page rather than a new
 * one. It is dropped on the fallback links, because the German homepage is not
 * an alternate of the English blog.
 */
export default function LocaleSwitcher({
  tone = "dark",
}: {
  /** "dark" for the header's navy utility bar, "light" for the mobile menu. */
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);
  const sameHere = hasTranslation(pathname);

  const colors =
    tone === "dark"
      ? { current: "#ffffff", link: "rgba(255,255,255,0.5)", sep: "rgba(255,255,255,0.2)" }
      : { current: "#010f62", link: "#62718d", sep: "#d4d8e3" };

  return (
    <nav aria-label={UI[current].language} className="flex items-center gap-1.5 text-sm">
      <Globe className="h-3.5 w-3.5 shrink-0" style={{ color: colors.link }} aria-hidden="true" />
      <ul className="flex flex-wrap items-center gap-x-1">
        {LOCALES.map((locale, i) => (
          <li key={locale} className="flex items-center gap-x-1">
            {i > 0 && (
              <span aria-hidden="true" style={{ color: colors.sep }}>
                ·
              </span>
            )}
            {locale === current ? (
              <span style={{ color: colors.current }} aria-current="true">
                {LOCALE_NAMES[locale]}
              </span>
            ) : (
              <Link
                href={switchLocale(locale, pathname)}
                {...(sameHere ? { hrefLang: LOCALE_TAGS[locale], rel: "alternate" } : {})}
                className="transition-colors hover:opacity-100"
                style={{ color: colors.link }}
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
