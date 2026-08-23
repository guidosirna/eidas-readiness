"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";
import { submitNetlifyForm, currentPagePath } from "@/lib/netlify-forms";
import { trackLeadSubmit } from "@/lib/analytics";
import { checkWorkEmail } from "@/lib/work-email";

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
  /** Name of the engagement the enquiry came from, recorded with the lead. */
  service?: string;
}

export default function ContactFormModal({ open, onClose, service }: ContactFormModalProps) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  // The modal stays mounted between openings, so a previous success screen would
  // greet the next enquiry. Reset whenever it opens, or when it reopens for a
  // different engagement.
  useEffect(() => {
    if (!open) return;
    setForm({ name: "", email: "", company: "", message: "" });
    setStatus("idle");
    setErrorMessage("");
  }, [open, service]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const check = checkWorkEmail(form.email);
    if (!check.ok) {
      setStatus("error");
      setErrorMessage(check.message);
      return;
    }
    setStatus("loading");
    try {
      await submitNetlifyForm("contact-expert", {
        ...form,
        source: "contact_expert",
        service: service ?? "",
        page: currentPagePath(),
      });
      setStatus("success");
      trackLeadSubmit("contact_expert", service);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[60] flex items-center justify-center px-4"
        style={{ backgroundColor: "rgba(1,15,98,0.5)" }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      >
        <div
          className="relative w-full max-w-lg bg-white shadow-2xl"
          style={{ borderRadius: "2px" }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1 transition-colors hover:bg-gray-100"
            style={{ borderRadius: "2px" }}
            aria-label="Close"
          >
            <X className="h-5 w-5" style={{ color: "#62718d" }} />
          </button>

          <div className="p-8 sm:p-10">
            {status === "success" ? (
              <div className="text-center py-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center" style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}>
                  <Send className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold" style={{ color: "#010f62" }}>
                  Message sent
                </h3>
                <p className="mt-2 text-base" style={{ color: "#62718d" }}>
                  Our team will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 btn-primary"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {service && (
                  <p
                    className="mb-2 text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "#0033ff" }}
                  >
                    {service}
                  </p>
                )}
                <h3 className="text-xl font-display font-semibold sm:text-2xl" style={{ color: "#010f62" }}>
                  Talk to an expert
                </h3>
                <p className="mt-2 text-base" style={{ color: "#62718d" }}>
                  {service
                    ? "Leave your details and we will come back with scope, timing, and a quote."
                    : "Leave your details and our eIDAS 2.0 specialists will reach out."}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/10"
                      style={{ borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" }}
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/10"
                      style={{ borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" }}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Work email *"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); if (status === "error") setStatus("idle"); }}
                    className="w-full bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/10"
                    style={{ borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" }}
                    required
                  />
                  <textarea
                    placeholder="How can we help? (optional)"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/10 resize-none"
                    style={{ borderRadius: "2px", border: "1px solid #ddd", color: "#010f62" }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 disabled:opacity-60"
                    style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
                  >
                    {status === "loading" ? "Sending..." : "Send message"}
                  </button>
                </form>

                {status === "error" && (
                  <p className="mt-3 text-sm text-red-500">{errorMessage}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
