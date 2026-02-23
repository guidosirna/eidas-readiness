"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { trackChatbotOpen, trackLeadSubmit } from "@/lib/analytics";

type Step = "initial" | "options" | "lead-form" | "submitted" | "assessment";

export default function HelpChatbot() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [badgeDismissed, setBadgeDismissed] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("help-bubble-shown") === "1";
    }
    return false;
  });
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [step, setStep] = useState<Step>("initial");
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const hasPlayedSound = useRef(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Listen for banner dismiss to move bubble down
  useEffect(() => {
    const handler = () => setBannerDismissed(true);
    window.addEventListener("banner-dismissed", handler);
    return () => window.removeEventListener("banner-dismissed", handler);
  }, []);

  // Show notification bubble after 5s, but only once per session
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("help-bubble-shown");
    if (alreadyShown) return;

    const showTimer = setTimeout(() => {
      setShowBubble(true);
      sessionStorage.setItem("help-bubble-shown", "1");
      if (!hasPlayedSound.current) {
        hasPlayedSound.current = true;
        try {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = 880;
          osc.type = "sine";
          gain.gain.value = 0.08;
          osc.start();
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
          osc.stop(ctx.currentTime + 0.3);
        } catch {}
      }
    }, 5000);
    const hideTimer = setTimeout(() => {
      setShowBubble(false);
    }, 13000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  // Close on click outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as Node;
    if (
      open &&
      chatRef.current && !chatRef.current.contains(target) &&
      buttonRef.current && !buttonRef.current.contains(target)
    ) {
      setOpen(false);
    }
    if (
      showBubble &&
      bubbleRef.current && !bubbleRef.current.contains(target) &&
      buttonRef.current && !buttonRef.current.contains(target)
    ) {
      setShowBubble(false);
    }
  }, [open, showBubble]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleOpen = () => {
    setOpen(true);
    setShowBubble(false);
    setBadgeDismissed(true);
    setStep("options");
    trackChatbotOpen();
  };

  const handleToggle = () => {
    if (!open) {
      handleOpen();
    } else {
      setOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "chatbot" }),
      });
      if (!res.ok) throw new Error();
      setStep("submitted");
      trackLeadSubmit("chatbot");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Notification bubble */}
      <div
        ref={bubbleRef}
        className="fixed right-6 z-50 max-w-xs"
        style={{
          bottom: "100px",
          opacity: showBubble && !open ? 1 : 0,
          transform: showBubble && !open ? "translateY(0)" : "translateY(8px)",
          transition: "bottom 0.4s ease, opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: showBubble && !open ? "auto" : "none",
        }}
      >
        <div className="bg-white shadow-lg p-4 relative" style={{ borderRadius: "2px", border: "1px solid #e8e8e8" }}>
          <button
            type="button"
            onClick={() => setShowBubble(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-sm font-medium pr-6" style={{ color: "#010f62" }}>
            Need help preparing for eIDAS 2.0?
          </p>
          <button
            type="button"
            onClick={handleOpen}
            className="mt-2 text-sm font-semibold"
            style={{ color: "#0033ff" }}
          >
            Chat with us
          </button>
        </div>
      </div>

      {/* Chat window */}
      <div
        ref={chatRef}
        className="fixed right-6 z-50 w-80 bg-white shadow-xl"
        style={{
          bottom: "100px",
          borderRadius: "2px",
          border: "1px solid #e8e8e8",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
          transition: "bottom 0.4s ease, opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "#010f62" }}>
          <span className="text-sm font-semibold text-white">eIDAS Readiness Help</span>
          <button type="button" onClick={() => setOpen(false)} className="text-white/70 hover:text-white" aria-label="Close chat">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
          {/* Bot message */}
          <div className="flex gap-2">
            <div className="w-7 h-7 shrink-0 flex items-center justify-center" style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}>
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="bg-gray-50 px-3 py-2 text-sm" style={{ borderRadius: "2px", color: "#62718d" }}>
              {step === "submitted"
                ? "Thanks! We'll be in touch soon. In the meantime, check out our resources."
                : "Need help preparing for eIDAS 2.0? I can point you in the right direction."}
            </div>
          </div>

          {/* Options */}
          {step === "options" && (
            <div className="space-y-2 pl-9">
              <button
                type="button"
                onClick={() => setStep("assessment")}
                className="w-full text-left px-3 py-2 text-sm font-medium bg-white transition-colors hover:bg-gray-50"
                style={{ borderRadius: "2px", border: "1px solid #e8e8e8", color: "#010f62" }}
              >
                Check my readiness
              </button>
              <button
                type="button"
                onClick={() => setStep("lead-form")}
                className="w-full text-left px-3 py-2 text-sm font-medium bg-white transition-colors hover:bg-gray-50"
                style={{ borderRadius: "2px", border: "1px solid #e8e8e8", color: "#010f62" }}
              >
                Talk to an expert
              </button>
            </div>
          )}

          {/* Assessment redirect */}
          {step === "assessment" && (
            <div className="pl-9 space-y-3">
              <p className="text-sm" style={{ color: "#62718d" }}>
                Let me help you check your readiness with our quick assessment.
              </p>
              <a
                href="/assessment"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
              >
                eIDAS Quick Check
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          )}

          {/* Lead form */}
          {step === "lead-form" && (
            <form onSubmit={handleSubmit} className="pl-9 space-y-3">
              <p className="text-sm" style={{ color: "#62718d" }}>
                Leave your details and our team will reach out.
              </p>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/10"
                style={{ borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" }}
              />
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => { setForm({ ...form, email: e.target.value }); setError(""); }}
                className="w-full px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/10"
                style={{ borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" }}
                required
              />
              <input
                type="text"
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/10"
                style={{ borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" }}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-4 py-2 text-sm font-semibold text-white transition-colors disabled:opacity-60"
                style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
              >
                {submitting ? "Sending..." : "Get in Touch"}
              </button>
              {error && <p className="text-xs text-red-500">{error}</p>}
            </form>
          )}

          {/* Submitted */}
          {step === "submitted" && (
            <div className="pl-9 space-y-2">
              <a href="/guide/eidas-2-compliance" className="block text-sm font-medium" style={{ color: "#0033ff" }}>
                Read the Compliance Guide
              </a>
              <a href="/assessment" className="block text-sm font-medium" style={{ color: "#0033ff" }}>
                Take the Assessment
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Floating button — always visible */}
      <button
        ref={buttonRef}
        type="button"
        onClick={handleToggle}
        className="fixed right-6 z-50 w-14 h-14 flex items-center justify-center shadow-lg"
        style={{
          bottom: "24px",
          backgroundColor: "#0033ff",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.3)",
          transition: "bottom 0.4s ease, transform 0.2s ease",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
        }}
        aria-label={open ? "Close help chat" : "Open help chat"}
      >
        {open ? (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {/* Notification badge — dismissed once chat is opened */}
        {!badgeDismissed && (
          <span
            className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[11px] font-bold text-white"
            style={{
              backgroundColor: "#ff3b30",
              borderRadius: "50%",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            1
          </span>
        )}
      </button>
    </>
  );
}
