"use client";

import React, { useState, useEffect, useRef } from "react";
import { submitNetlifyForm, currentPagePath } from "@/lib/netlify-forms";
import { usePathname } from "next/navigation";
import { checkWorkEmail } from "@/lib/work-email";
import { localeFromPathname } from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";
import {
  trackGateView,
  trackGateUnlock,
  trackGuideView,
  trackLeadSubmit,
  trackLeadEnriched,
} from "@/lib/analytics";

interface ContentGateProps {
  children: React.ReactNode;
  previewSections?: number;
}

/**
 * One key per guide, so each one is unlocked on its own and each one sends its
 * own email. The old single key stays honoured for reading, never written
 * again: whoever already gave us their address should not be asked twice for a
 * guide they had already unlocked.
 */
const storageKey = (page: string) => `content_unlocked:${page}`;
const LEGACY_KEY = "content_unlocked";
/**
 * The address given on step one, kept so that whoever leaves between the two
 * steps comes back to the second and is not asked for it again. It is already
 * a lead by then; asking twice would only lose it.
 */
const EMAIL_KEY = "content_gate_email";

/**
 * These are the values that reach the lead, so they stay English in every
 * language: translating them would deliver the same role under four different
 * spellings and make the leads impossible to group. Only the labels the reader
 * sees come from UI.
 */
const roleOptions = ["CTO / Technical Lead", "Compliance Officer", "Product Manager", "Legal Team", "Other"];
const industryOptions = ["Financial Services", "Healthcare", "Government", "Telecommunications", "E-Commerce", "Travel & Transport", "Other"];

export default function ContentGate({
  children,
  previewSections = 3,
}: ContentGateProps) {
  // The guide this gate sits on is translated; the gate was not, so a German
  // reader read the guide in German and hit an English form at the one step
  // that produces a lead.
  const pathname = usePathname();
  const locale = localeFromPathname(pathname ?? "/");
  const t = UI[locale].gate;

  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({ email: "", company: "", role: "", industry: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const gateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = currentPagePath();
    trackGuideView(page);

    let alreadyUnlocked = false;
    let storedEmail = "";
    try {
      alreadyUnlocked =
        localStorage.getItem(storageKey(page)) === "true" ||
        localStorage.getItem(LEGACY_KEY) === "true";
      storedEmail = localStorage.getItem(EMAIL_KEY) || "";
    } catch {
      // localStorage unavailable
    }

    // A personal link from the guide email. Not enforcement, the page is open
    // either way, but the key identifies whose link was used, so a link doing
    // the rounds shows up as one key across many visitors.
    const key = new URLSearchParams(window.location.search).get("k");

    if (key) {
      try {
        localStorage.setItem(storageKey(page), "true");
      } catch {
        // localStorage unavailable: unlocked for this page view only
      }
      setUnlocked(true);
      trackGateUnlock(`${page}?k=${key}`, "link");
    } else if (alreadyUnlocked) {
      setUnlocked(true);
      trackGateUnlock(page, "returning");
    } else {
      if (storedEmail) {
        setForm((f) => ({ ...f, email: storedEmail }));
        setStep(2);
      }
      trackGateView(page);
    }
    setChecking(false);
  }, []);

  const childArray = React.Children.toArray(children);
  const previewChildren = childArray.slice(0, previewSections);
  const gatedChildren = childArray.slice(previewSections);

  /**
   * Step one: the email, and nothing else. It is submitted and stored here, on
   * its own, because a lead only written once the second step is finished is a
   * lead lost every time somebody stops at the first. The guide stays shut.
   */
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const check = checkWorkEmail(form.email, "content_gate", UI[locale].emailCheck);
    if (!check.ok) {
      setStatus("error");
      setErrorMessage(check.message);
      return;
    }

    setStatus("loading");

    try {
      await submitNetlifyForm("content-gate", {
        email: form.email,
        source: "content_gate",
        page: currentPagePath(),
      });
    } catch (err) {
      console.error("Content gate submission failed:", err);
      setStatus("error");
      setErrorMessage(t.error);
      return;
    }

    try {
      localStorage.setItem(EMAIL_KEY, form.email);
    } catch {
      // localStorage unavailable: leaving now means starting over
    }

    trackLeadSubmit("content_gate", currentPagePath());
    setStatus("idle");
    setStep(2);
  };

  /**
   * Step two: a second submission, keyed by the same address. This is the one
   * that opens the guide.
   */
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const missing = (
      [
        ["company", "your company"],
        ["role", "your role"],
        ["industry", "your industry"],
      ] as const
    ).filter(([field]) => !form[field].trim());

    if (missing.length > 0) {
      setStatus("error");
      setErrorMessage(
        missing.length === 1
          ? `Please add ${missing[0][1]}.`
          : "Please complete every field."
      );
      return;
    }

    setStatus("loading");

    try {
      await submitNetlifyForm("content-gate-profile", {
        email: form.email,
        company: form.company,
        role: form.role,
        industry: form.industry,
        source: "content_gate_profile",
        page: currentPagePath(),
      });
    } catch (err) {
      console.error("Content gate profile submission failed:", err);
      setStatus("error");
      setErrorMessage(t.error);
      return;
    }

    try {
      localStorage.setItem(storageKey(currentPagePath()), "true");
    } catch {
      // localStorage unavailable: unlock for this page view only
    }
    setUnlocked(true);
    setStatus("success");
    trackLeadEnriched("content_gate", currentPagePath());
    trackGateUnlock(currentPagePath(), "form");
  };

  if (checking) {
    return <div>{previewChildren}</div>;
  }

  if (unlocked || gatedChildren.length === 0) {
    return (
      <div
        className="transition-all duration-700 ease-out"
        style={{ opacity: 1 }}
      >
        {children}
      </div>
    );
  }

  const inputClass = "w-full bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/10";
  const inputStyle = { borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" };
  const selectClass = `${inputClass} appearance-none`;

  return (
    <div>
      {/* Both forms are registered in public/__forms.html, Netlify's build-time
          parser cannot see client-rendered markup, so declaring them here would
          have no effect. */}

      {/* Preview content */}
      {previewChildren}

      {/* Gated content with fade overlay */}
      <div className="relative" ref={gateRef}>
        {/* Faded content preview */}
        <div
          className="overflow-hidden relative"
          style={{ maxHeight: "300px" }}
          aria-hidden="true"
        >
          <div className="gated-content">{gatedChildren}</div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 20%, white 95%)",
            }}
          />
        </div>

        {/* Gate overlay card */}
        <div className="relative -mt-8 mx-auto max-w-xl">
          <div className="bg-white p-8 sm:p-10 shadow-lg text-center" style={{ borderRadius: "2px", border: "1px solid #e8e8e8" }}>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center" style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-display font-semibold sm:text-2xl" style={{ color: "#010f62" }}>
              {t.heading}
            </h3>
            <p className="mt-2 text-base" style={{ color: "#62718d" }}>
              {step === 1
                ? t.step1
                : t.step2}
            </p>
            <p className="mt-2 text-sm" style={{ color: "#62718d" }}>
              {t.stepOf(step)}
            </p>

            {step === 1 ? (
              <form onSubmit={handleEmailSubmit} className="mt-6 text-left space-y-3">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder={t.email}
                  className={inputClass}
                  style={inputStyle}
                  disabled={status === "loading"}
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 disabled:opacity-60"
                  style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
                >
                  {status === "loading" ? t.continueLoading : t.continueLabel}
                </button>
              </form>
            ) : (
              <form onSubmit={handleProfileSubmit} className="mt-6 text-left space-y-3">
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => {
                    setForm({ ...form, company: e.target.value });
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder={t.company}
                  className={inputClass}
                  style={inputStyle}
                  disabled={status === "loading"}
                  required
                />
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={form.role}
                    onChange={(e) => {
                      setForm({ ...form, role: e.target.value });
                      if (status === "error") setStatus("idle");
                    }}
                    className={selectClass}
                    style={{ ...inputStyle, color: form.role ? "#010f62" : "#94a3b8" }}
                    disabled={status === "loading"}
                    required
                  >
                    <option value="" disabled>{t.role}</option>
                    {roleOptions.map((r) => (
                      <option key={r} value={r}>{t.roles[r] ?? r}</option>
                    ))}
                  </select>
                  <select
                    value={form.industry}
                    onChange={(e) => {
                      setForm({ ...form, industry: e.target.value });
                      if (status === "error") setStatus("idle");
                    }}
                    className={selectClass}
                    style={{ ...inputStyle, color: form.industry ? "#010f62" : "#94a3b8" }}
                    disabled={status === "loading"}
                    required
                  >
                    <option value="" disabled>{t.industry}</option>
                    {industryOptions.map((ind) => (
                      <option key={ind} value={ind}>{t.industries[ind] ?? ind}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 disabled:opacity-60"
                  style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
                >
                  {status === "loading" ? t.openLoading : t.open}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-500">{errorMessage}</p>
            )}

            <p className="mt-4 text-sm" style={{ color: "#62718d" }}>
              {t.reassurance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
