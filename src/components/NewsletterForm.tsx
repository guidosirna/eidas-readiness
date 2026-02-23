"use client";

import { useState } from "react";

interface NewsletterFormProps {
  variant: "inline" | "banner";
  headline?: string;
  description?: string;
}

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function NewsletterForm({ variant, headline, description }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "newsletter",
          email,
          source: "newsletter",
        }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "banner") {
    return (
      <div className="py-12 sm:py-16">
        {/* Hidden Netlify form */}
        <form name="newsletter" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="newsletter" />
          <input name="email" />
          <input name="source" />
        </form>

        <div className="mx-auto max-w-md text-center">
          {headline && <h3 className="text-xl font-semibold sm:text-2xl" style={{ color: "#010f62" }}>{headline}</h3>}
          {description && <p className="mt-2 text-sm" style={{ color: "#62718d" }}>{description}</p>}
          {status === "success" ? (
            <p className="mt-6 text-sm font-medium text-emerald-600">You&apos;re subscribed!</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }} placeholder="Enter your email" className="w-full px-4 py-3 text-sm" style={{ border: "1px solid #ddd", borderRadius: "2px", color: "#010f62" }} disabled={status === "loading"} />
              <button type="submit" disabled={status === "loading"} className="btn-primary w-full mt-3 disabled:opacity-60">
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
          <p className="mt-3 text-xs" style={{ color: "#62718d" }}>We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    );
  }

  // Inline variant (for dark footer)
  return (
    <div className="max-w-md">
      {/* Hidden Netlify form */}
      <form name="newsletter" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="newsletter" />
        <input name="email" />
        <input name="source" />
      </form>

      {headline && <h3 className="text-base font-semibold text-white">{headline}</h3>}
      {description && <p className="text-sm text-white/60 mt-1">{description}</p>}
      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-400 mt-4">You&apos;re subscribed!</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }} placeholder="Enter your email" className="flex-1 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px" }} disabled={status === "loading"} />
          <button type="submit" disabled={status === "loading"} className="bg-white font-semibold transition-colors hover:bg-gray-100 disabled:opacity-60" style={{ color: "#010f62", padding: "10px 20px", borderRadius: "2px", fontSize: "14px" }}>
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && <p className="mt-2 text-sm text-red-400">{errorMessage}</p>}
      <p className="text-xs text-white/40 mt-3">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  );
}
