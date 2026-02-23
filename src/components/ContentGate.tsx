"use client";

import React, { useState, useEffect, useRef } from "react";

interface ContentGateProps {
  children: React.ReactNode;
  previewSections?: number;
}

const STORAGE_KEY = "content_unlocked";

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContentGate({
  children,
  previewSections = 3,
}: ContentGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const gateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "true") {
        setUnlocked(true);
      }
    } catch {
      // localStorage unavailable
    }
    setChecking(false);
  }, []);

  const childArray = React.Children.toArray(children);
  const previewChildren = childArray.slice(0, previewSections);
  const gatedChildren = childArray.slice(previewSections);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      // Submit to Netlify Forms
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "content-gate",
          email,
          source: "content_gate",
          page: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  // While checking localStorage, show preview content only (no flash)
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

  return (
    <div>
      {/* Hidden Netlify form for bot detection */}
      <form name="content-gate" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="content-gate" />
        <input name="email" />
        <input name="source" />
        <input name="page" />
      </form>

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
          <div>{gatedChildren}</div>
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
              Get the full guide delivered to your inbox
            </h3>
            <p className="mt-2 text-base" style={{ color: "#62718d" }}>
              Enter your email to unlock the complete guide instantly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 max-w-sm mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="you@company.com"
                className="w-full bg-white px-5 py-3.5 text-base placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10"
                style={{ borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" }}
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 disabled:opacity-60 mt-3"
                style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
              >
                {status === "loading" ? "Unlocking..." : "Get Full Access"}
              </button>
            </form>

            {status === "error" && (
              <p className="mt-3 text-sm text-red-500">{errorMessage}</p>
            )}

            <p className="mt-4 text-sm" style={{ color: "#62718d" }}>
              Free, no spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
