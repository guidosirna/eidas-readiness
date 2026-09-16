"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
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
 * one. Both are dropped on the fallback links, because the German homepage is
 * not an alternate of the English blog.
 */
export default function LocaleSwitcher({
  variant = "dropdown",
}: {
  /**
   * "dropdown" for the header's navy utility bar. "inline" for the mobile
   * menu, where a dropdown inside an already-open panel is a second layer to
   * fight with for no gain.
   */
  variant?: "dropdown" | "inline";
}) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);
  const sameHere = hasTranslation(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on a click anywhere else and on Escape. Without the first one the
  // panel stays open behind whatever the reader clicks next.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkProps = (locale: (typeof LOCALES)[number]) => ({
    href: switchLocale(locale, pathname),
    ...(sameHere ? { hrefLang: LOCALE_TAGS[locale], rel: "alternate" } : {}),
  });

  if (variant === "inline") {
    return (
      <nav aria-label={UI[current].language} className="flex items-center gap-1.5 text-sm">
        <Globe className="h-3.5 w-3.5 shrink-0" style={{ color: "#62718d" }} aria-hidden="true" />
        <ul className="flex flex-wrap items-center gap-x-1">
          {LOCALES.map((locale, i) => (
            <li key={locale} className="flex items-center gap-x-1">
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "#d4d8e3" }}>
                  ·
                </span>
              )}
              {locale === current ? (
                <span className="font-semibold" style={{ color: "#010f62" }} aria-current="true">
                  {LOCALE_NAMES[locale]}
                </span>
              ) : (
                <Link {...linkProps(locale)} className="hover:opacity-70" style={{ color: "#62718d" }}>
                  {LOCALE_NAMES[locale]}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={UI[current].language}
        className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
        style={{ color: open ? "#ffffff" : "rgba(255,255,255,0.5)" }}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        {LOCALE_NAMES[current]}
        <ChevronDown
          className="h-3 w-3 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-[150px] bg-white py-1"
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "2px",
            boxShadow: "0 8px 24px rgba(1,15,98,0.12)",
          }}
        >
          {LOCALES.map((locale) =>
            locale === current ? (
              <span
                key={locale}
                role="menuitem"
                aria-current="true"
                className="flex items-center justify-between gap-3 px-3 py-2 text-sm font-semibold"
                style={{ color: "#010f62" }}
              >
                {LOCALE_NAMES[locale]}
                <Check className="h-3.5 w-3.5 shrink-0" style={{ color: "#0033ff" }} aria-hidden="true" />
              </span>
            ) : (
              <Link
                key={locale}
                role="menuitem"
                {...linkProps(locale)}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm transition-colors hover:bg-gray-50"
                style={{ color: "#62718d" }}
              >
                {LOCALE_NAMES[locale]}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
