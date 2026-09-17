"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X, Star } from "lucide-react";
import { trackBannerClick, trackBannerDismiss } from "@/lib/analytics";
import { linkPath, localeFromPathname, stripLocale } from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";
import Image from "next/image";

export default function StickyBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const locale = localeFromPathname(pathname ?? "/");
  const t = UI[locale].banner;

  // Where the banner does not appear.
  //
  // /assessment and the checklist are the pages it advertises, so it has nothing
  // to offer there. The guides earn their place on the list by measurement: over
  // 90 days 35 people closed the banner on /guide/eidas-2-compliance and not one
  // clicked it, while the content gate on that same page converted 3 of the 18
  // who saw it. The banner was competing with the thing that works. Every click
  // the banner does get, six of seven, comes from the timeline.
  //
  // stripLocale so the suppression holds in German, Italian and Spanish too:
  // /de/guide/eidas-2-compliance would otherwise show what /guide/… hides.
  const bare = stripLocale(pathname ?? "/");
  const hidden =
    bare.startsWith("/assessment") ||
    bare.startsWith("/eidas-2-compliance-checklist") ||
    bare.startsWith("/guide/") ||
    dismissed;

  useEffect(() => {
    if (hidden) return;
    const timer = setTimeout(() => {
      setVisible(true);
      window.dispatchEvent(new CustomEvent("banner-visible"));
    }, 3000);
    return () => clearTimeout(timer);
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      data-sticky-banner
      data-visible={visible ? "true" : "false"}
      className="fixed bottom-0 left-0 right-0 z-40"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #e8e8e8",
        boxShadow: "0 -6px 30px rgba(0,0,0,0.08)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        {/* Close */}
        <button
          type="button"
          onClick={() => {
            setDismissed(true);
            trackBannerDismiss();
            window.dispatchEvent(new CustomEvent("banner-dismissed"));
          }}
          className="absolute right-2 top-2 p-2 transition-colors hover:bg-gray-100 sm:static sm:shrink-0"
          style={{ borderRadius: "2px" }}
          aria-label={t.dismiss}
        >
          <X className="h-5 w-5" style={{ color: "#62718d" }} />
        </button>

        {/* EU flag */}
        <Image
          src="/logos/eu-flag.svg"
          alt="EU"
          width={36}
          height={24}
          className="shrink-0 opacity-70 hidden sm:block"
        />

        {/* Title + stars */}
        <div className="min-w-0 pr-10 sm:pr-0">
          <p className="text-sm font-semibold sm:text-lg" style={{ color: "#010f62" }}>
            {t.headline}
          </p>
          {/* The stars and the trust line are the first thing to go on a
              phone: they are reassurance, the headline and the button are the
              message. */}
          <div className="hidden items-center gap-2 mt-0.5 sm:flex">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm" style={{ color: "#62718d" }}>
              {t.trust}
            </span>
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden flex-1 sm:block" />

        {/* CTA */}
        <a
          href={linkPath(locale, "/assessment")}
          className="inline-flex shrink-0 items-center justify-center gap-2 text-sm font-semibold text-white transition-colors sm:text-base"
          style={{
            backgroundColor: "#010f62",
            padding: "11px 20px",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#021089")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#010f62")}
          onClick={() => trackBannerClick()}
        >
          {t.cta} <ArrowUpRight className="h-4 w-4 arrow-animate" />
        </a>
      </div>
    </div>
  );
}
