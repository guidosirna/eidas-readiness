"use client";

import React, { useState, useEffect, useRef } from "react";
import { submitNetlifyForm, currentPagePath } from "@/lib/netlify-forms";
import { checkWorkEmail } from "@/lib/work-email";
import {
  trackGateView,
  trackGateUnlock,
  trackGuideView,
  trackLeadSubmit,
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

const roleOptions = ["CTO / Technical Lead", "Compliance Officer", "Product Manager", "Legal Team", "Other"];
const industryOptions = ["Financial Services", "Healthcare", "Government", "Telecommunications", "E-Commerce", "Travel & Transport", "Other"];

export default function ContentGate({
  children,
  previewSections = 3,
}: ContentGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);
  const [form, setForm] = useState({ email: "", company: "", role: "", industry: "", country: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const gateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = currentPagePath();
    trackGuideView(page);

    let alreadyUnlocked = false;
    try {
      alreadyUnlocked =
        localStorage.getItem(storageKey(page)) === "true" ||
        localStorage.getItem(LEGACY_KEY) === "true";
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
      trackGateView(page);
    }
    setChecking(false);
  }, []);

  const childArray = React.Children.toArray(children);
  const previewChildren = childArray.slice(0, previewSections);
  const gatedChildren = childArray.slice(previewSections);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const check = checkWorkEmail(form.email);
    if (!check.ok) {
      setStatus("error");
      setErrorMessage(check.message);
      return;
    }

    const missing = (
      [
        ["company", "your company"],
        ["country", "your country"],
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
      await submitNetlifyForm("content-gate", {
        email: form.email,
        company: form.company,
        role: form.role,
        industry: form.industry,
        country: form.country,
        source: "content_gate",
        page: currentPagePath(),
      });
    } catch (err) {
      console.error("Content gate submission failed:", err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      return;
    }

    try {
      localStorage.setItem(storageKey(currentPagePath()), "true");
    } catch {
      // localStorage unavailable: unlock for this page view only
    }
    setUnlocked(true);
    setStatus("success");
    trackLeadSubmit("content_gate", currentPagePath());
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
      {/* This form is registered in public/__forms.html, Netlify's build-time
          parser cannot see client-rendered markup, so declaring it here would
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
              Unlock the full guide
            </h3>
            <p className="mt-2 text-base" style={{ color: "#62718d" }}>
              Tell us about yourself. You keep reading here, and a copy lands
              in your inbox.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 text-left space-y-3">
              <input
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Work email *"
                className={inputClass}
                style={inputStyle}
                disabled={status === "loading"}
                required
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Company *"
                  className={inputClass}
                  style={inputStyle}
                  disabled={status === "loading"}
                  required
                />
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  placeholder="Country *"
                  className={inputClass}
                  style={inputStyle}
                  disabled={status === "loading"}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className={selectClass}
                  style={{ ...inputStyle, color: form.role ? "#010f62" : "#94a3b8" }}
                  disabled={status === "loading"}
                  required
                >
                  <option value="" disabled>Role *</option>
                  {roleOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <select
                  value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })}
                  className={selectClass}
                  style={{ ...inputStyle, color: form.industry ? "#010f62" : "#94a3b8" }}
                  disabled={status === "loading"}
                  required
                >
                  <option value="" disabled>Industry *</option>
                  {industryOptions.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 disabled:opacity-60"
                style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
              >
                {status === "loading" ? "Unlocking..." : "Get Full Access"}
              </button>
            </form>

            {status === "error" && (
              <p className="mt-3 text-sm text-red-500">{errorMessage}</p>
            )}

            <p className="mt-4 text-sm" style={{ color: "#62718d" }}>
              Free, no spam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
