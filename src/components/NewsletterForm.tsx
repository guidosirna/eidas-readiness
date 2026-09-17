"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { submitNetlifyForm } from "@/lib/netlify-forms";
import { trackLeadSubmit } from "@/lib/analytics";
import { localeFromPathname } from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";

interface NewsletterFormProps {
  variant: "inline" | "banner";
  headline?: string;
  description?: string;
  /**
   * Where the address was given. The Netlify form is the same one in every
   * placement — one list, one unsubscribe — so this is what tells the footer's
   * signups apart from the timeline's, both in the submission and in GA.
   */
  source?: string;
  /** Overrides "Subscribe" where the offer is not a newsletter. */
  submitLabel?: string;
}

export default function NewsletterForm({ variant, headline, description, source = "newsletter", submitLabel }: NewsletterFormProps) {
  // The footer renders on every page, so this form already appeared in German,
  // Italian and Spanish with an English button and an English error.
  const pathname = usePathname();
  const t = UI[localeFromPathname(pathname ?? "/")].newsletter;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage(t.invalid);
      return;
    }
    setStatus("loading");
    try {
      await submitNetlifyForm("newsletter", {
        email,
        source,
      });
      setStatus("success");
      setEmail("");
      trackLeadSubmit(source, variant);
    } catch (err) {
      console.error("Newsletter submission failed:", err);
      setStatus("error");
      setErrorMessage(t.error);
    }
  };

  if (variant === "banner") {
    return (
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-md text-center">
          {headline && <h3 className="text-xl font-semibold sm:text-2xl" style={{ color: "#010f62" }}>{headline}</h3>}
          {description && <p className="mt-2 text-sm" style={{ color: "#62718d" }}>{description}</p>}
          {status === "success" ? (
            <p className="mt-6 text-sm font-medium text-emerald-600">{t.success}</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }} placeholder={t.placeholder} className="w-full px-4 py-3 text-sm" style={{ border: "1px solid #ddd", borderRadius: "2px", color: "#010f62" }} disabled={status === "loading"} />
              <button type="submit" disabled={status === "loading"} className="btn-primary w-full mt-3 disabled:opacity-60">
                {status === "loading" ? t.subscribing : submitLabel ?? t.subscribe}
              </button>
            </form>
          )}
          {status === "error" && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
          <p className="mt-3 text-sm" style={{ color: "#62718d" }}>{t.privacy}</p>
        </div>
      </div>
    );
  }

  // Inline variant (for dark footer)
  return (
    <div className="max-w-md">
      {headline && <h3 className="text-base font-semibold text-white">{headline}</h3>}
      {description && <p className="text-sm text-white/60 mt-1">{description}</p>}
      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-400 mt-4">{t.success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }} placeholder={t.placeholder} className="flex-1 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px" }} disabled={status === "loading"} />
          <button type="submit" disabled={status === "loading"} className="bg-white font-semibold transition-colors hover:bg-gray-100 disabled:opacity-60" style={{ color: "#010f62", padding: "10px 20px", borderRadius: "2px", fontSize: "14px" }}>
            {status === "loading" ? "..." : t.subscribe}
          </button>
        </form>
      )}
      {status === "error" && <p className="mt-2 text-sm text-red-400">{errorMessage}</p>}
      <p className="text-sm text-white/40 mt-3">{t.privacy}</p>
    </div>
  );
}
