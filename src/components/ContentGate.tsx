"use client";

import React, { useState, useEffect, useRef } from "react";

interface ContentGateProps {
  children: React.ReactNode;
  previewSections?: number;
}

const STORAGE_KEY = "content_unlocked";

const roleOptions = ["CTO / Technical Lead", "Compliance Officer", "Product Manager", "Legal Team", "Other"];
const industryOptions = ["Financial Services", "Healthcare", "Government", "Telecommunications", "E-Commerce", "Travel & Transport", "Other"];

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
  const [form, setForm] = useState({ email: "", company: "", role: "", industry: "", country: "" });
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

    if (!validateEmail(form.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "content-gate",
          email: form.email,
          company: form.company,
          role: form.role,
          industry: form.industry,
          country: form.country,
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
      {/* Hidden Netlify form for bot detection */}
      <form name="content-gate" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="content-gate" />
        <input name="email" />
        <input name="company" />
        <input name="role" />
        <input name="industry" />
        <input name="country" />
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
              Tell us a bit about yourself to unlock the complete guide.
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
                  placeholder="Company"
                  className={inputClass}
                  style={inputStyle}
                  disabled={status === "loading"}
                />
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  placeholder="Country"
                  className={inputClass}
                  style={inputStyle}
                  disabled={status === "loading"}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className={selectClass}
                  style={{ ...inputStyle, color: form.role ? "#010f62" : "#94a3b8" }}
                  disabled={status === "loading"}
                >
                  <option value="" disabled>Role</option>
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
                >
                  <option value="" disabled>Industry</option>
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
              Free, no spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
