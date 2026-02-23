"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import { trackBannerClick, trackBannerDismiss } from "@/lib/analytics";

export default function StickyBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Hide on interactive tool pages
  if (pathname?.startsWith("/assessment")) return null;
  if (pathname?.includes("/interactive")) return null;
  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #e8e8e8",
        boxShadow: "0 -4px 30px rgba(0,0,0,0.08)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-lg sm:text-xl font-semibold" style={{ color: "#010f62" }}>
            Is your organisation ready for eIDAS 2.0?
          </p>
          <p className="text-base mt-1 hidden sm:block" style={{ color: "#62718d" }}>
            Answer 12 questions and get your free compliance readiness score.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/assessment"
            className="btn-primary shrink-0"
            style={{ padding: "14px 32px" }}
            onClick={() => trackBannerClick()}
          >
            Take the Quick Check <ArrowRight className="h-4 w-4" />
          </a>
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
        </div>
      </div>
    </div>
  );
}
