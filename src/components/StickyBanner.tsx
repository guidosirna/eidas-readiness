"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X, Star } from "lucide-react";
import { trackBannerClick, trackBannerDismiss } from "@/lib/analytics";
import Image from "next/image";

export default function StickyBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const hidden =
    pathname?.startsWith("/assessment") ||
    pathname?.startsWith("/eidas-2-compliance-checklist") ||
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
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-6">
        {/* Close */}
        <button
          type="button"
          onClick={() => {
            setDismissed(true);
            trackBannerDismiss();
            window.dispatchEvent(new CustomEvent("banner-dismissed"));
          }}
          className="shrink-0 p-2 transition-colors hover:bg-gray-100"
          style={{ borderRadius: "2px" }}
          aria-label="Dismiss banner"
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
        <div className="min-w-0">
          <p className="text-base font-semibold sm:text-lg" style={{ color: "#010f62" }}>
            Free eIDAS 2.0 Readiness Assessment
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm" style={{ color: "#62718d" }}>
              Trusted by 2,000+ organisations
            </span>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <a
          href="/assessment"
          className="shrink-0 inline-flex items-center gap-2 text-base font-semibold text-white transition-colors"
          style={{
            backgroundColor: "#010f62",
            padding: "12px 28px",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#021089")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#010f62")}
          onClick={() => trackBannerClick()}
        >
          Take the Quick Check <ArrowUpRight className="h-4 w-4 arrow-animate" />
        </a>
      </div>
    </div>
  );
}
