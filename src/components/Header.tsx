"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowUpRight, ChevronDown, Shield, CreditCard, BookOpen, Building, Scale, Landmark, Heart, Wifi, ShoppingCart, Plane, Code2, Globe, ClipboardCheck, Clock, Mail } from "lucide-react";
import Image from "next/image";

const learnFeatured = [
  { href: "/guide/eidas-2-compliance", label: "eIDAS 2.0 Compliance Guide", description: "Everything you need to know about the regulation, requirements, and implementation steps", icon: BookOpen },
  { href: "/guide/eudiw-preparation", label: "EU Digital Identity Wallet Guide", description: "Technical preparation guide for the EUDIW: architecture, protocols, and integration", icon: Shield },
];

const learnSecondary = [
  { href: "/faq", label: "FAQ", description: "Answers to common eIDAS 2.0 questions" },
  { href: "/glossary", label: "Glossary", description: "Key terms and definitions explained" },
  { href: "/eidas-2-timeline", label: "Timeline", description: "Key dates and regulatory milestones" },
  { href: "/eidas-2-compliance-checklist", label: "Compliance Checklist", description: "Step-by-step compliance tracker" },
  { href: "/eidas-timestamp", label: "Timestamp Tool", description: "Trusted timestamping for documents" },
];

const prepareByRole = [
  { href: "/roles/cto-technical-lead", label: "CTOs & Technical Leads", icon: Code2 },
  { href: "/roles/compliance-officer", label: "Compliance Officers", icon: Scale },
  { href: "/roles/product-manager", label: "Product Managers", icon: Shield },
  { href: "/roles/legal-team", label: "Legal Teams", icon: Building },
];

const prepareByIndustry = [
  { href: "/industries/financial-services", label: "Financial Services", icon: CreditCard },
  { href: "/industries/healthcare", label: "Healthcare", icon: Heart },
  { href: "/industries/government-public-sector", label: "Government", icon: Landmark },
  { href: "/industries/telecommunications", label: "Telecom", icon: Wifi },
  { href: "/industries/ecommerce-platforms", label: "E-Commerce", icon: ShoppingCart },
  { href: "/industries/travel-transport", label: "Travel & Transport", icon: Plane },
];

type ActiveMenu = "learn" | "prepare" | null;

function LearnMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="grid grid-cols-5 gap-0">
      {/* Featured guides — 3 cols */}
      <div className="col-span-3 p-6" style={{ borderRight: "1px solid #e8e8e8" }}>
        <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#62718d" }}>Guides</p>
        <div className="space-y-1">
          {learnFeatured.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-start gap-4 p-3 transition-colors hover:bg-gray-50 group"
                style={{ borderRadius: "2px" }}
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center" style={{ backgroundColor: "#f0f3ff", borderRadius: "2px" }}>
                  <Icon className="h-5 w-5" style={{ color: "#0033ff" }} />
                </div>
                <div>
                  <span className="block text-[15px] font-semibold group-hover:opacity-80" style={{ color: "#010f62" }}>{link.label}</span>
                  <span className="block text-sm mt-1 leading-relaxed" style={{ color: "#62718d" }}>{link.description}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Secondary links — 2 cols */}
      <div className="col-span-2 p-6">
        <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#62718d" }}>Resources</p>
        <div className="space-y-1">
          {learnSecondary.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block p-2.5 transition-colors hover:bg-gray-50 group"
              style={{ borderRadius: "2px" }}
            >
              <span className="block text-sm font-semibold group-hover:opacity-80" style={{ color: "#010f62" }}>{link.label}</span>
              <span className="block text-sm mt-0.5" style={{ color: "#62718d" }}>{link.description}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrepareMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="grid grid-cols-2 gap-0">
      {/* By Role */}
      <div className="p-6" style={{ borderRight: "1px solid #e8e8e8" }}>
        <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#62718d" }}>By Role</p>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {prepareByRole.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-2 px-2 py-2.5 transition-colors hover:bg-gray-50 group"
                style={{ borderRadius: "2px" }}
              >
                <Icon className="h-4 w-4 shrink-0" style={{ color: "#0033ff" }} />
                <span className="text-sm font-medium whitespace-nowrap group-hover:opacity-80" style={{ color: "#010f62" }}>{link.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mt-4 pt-3" style={{ borderTop: "1px solid #e8e8e8" }}>
          <a href="/roles" onClick={onClose} className="text-sm font-semibold" style={{ color: "#0033ff" }}>View all roles &rarr;</a>
        </div>
      </div>

      {/* By Industry */}
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#62718d" }}>By Industry</p>
        <div className="grid grid-cols-2 gap-1">
          {prepareByIndustry.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-2.5 p-2.5 transition-colors hover:bg-gray-50 group"
                style={{ borderRadius: "2px" }}
              >
                <Icon className="h-4 w-4 shrink-0" style={{ color: "#0033ff" }} />
                <span className="text-sm font-medium group-hover:opacity-80" style={{ color: "#010f62" }}>{link.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mt-4 pt-3" style={{ borderTop: "1px solid #e8e8e8" }}>
          <a href="/industries" onClick={onClose} className="text-sm font-semibold" style={{ color: "#0033ff" }}>View all industries &rarr;</a>
        </div>
      </div>
    </div>
  );
}

function MegaMenu({
  active,
  onClose,
}: {
  active: ActiveMenu;
  onClose: () => void;
}) {
  if (!active) return null;

  return (
    <div className="absolute top-full left-0 right-0 z-50">
      <div
        className="relative bg-white shadow-xl overflow-hidden"
        style={{ borderTop: "3px solid #0033ff", borderBottom: "1px solid #e8e8e8" }}
        onMouseLeave={onClose}
      >
        {/* Gray bg that extends from CTA sidebar to right viewport edge */}
        <div className="absolute top-0 right-0 bottom-0 w-1/2" style={{ backgroundColor: "#f9f9fa" }} />

        <div className="relative mx-auto max-w-7xl pl-6 flex">
          <div className="flex-1 min-w-0 bg-white">
            {active === "learn" ? <LearnMenu onClose={onClose} /> : <PrepareMenu onClose={onClose} />}
          </div>

          {/* CTA sidebar */}
          <div className="w-64 shrink-0 p-6 flex flex-col justify-center" style={{ backgroundColor: "#f9f9fa", borderLeft: "1px solid #e8e8e8" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "#010f62" }}>Ready to check your compliance?</p>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "#62718d" }}>Answer 12 questions and get a personalised readiness score.</p>
            <a
              href="/assessment"
              onClick={onClose}
              className="btn-primary justify-center text-sm"
              style={{ padding: "10px 16px" }}
            >
              eIDAS Quick Check <ArrowUpRight className="h-4 w-4 arrow-animate" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout>>();

  const openMenu = (menu: ActiveMenu) => {
    clearTimeout(closeTimeout.current);
    setActiveMenu(menu);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 250);
  };

  const cancelClose = () => {
    clearTimeout(closeTimeout.current);
  };

  useEffect(() => () => clearTimeout(closeTimeout.current), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Utility bar ─────────────────────────────────── */}
      <div className="hidden md:block" style={{ backgroundColor: "#010f62" }}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            A free resource for EU digital identity compliance
          </p>
          <div className="flex items-center gap-5">
            <a href="/faq" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>FAQ</a>
            <a href="/glossary" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>Glossary</a>
            <span className="w-px h-3.5" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <Globe className="h-3.5 w-3.5" /> English
            </span>
          </div>
        </div>
      </div>

      {/* ── Main header bar ─────────────────────────────── */}
      <div className="bg-white" style={{ borderBottom: "1px solid #e8e8e8" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <Image src="/logos/eu-flag.svg" alt="EU" width={28} height={20} className="h-5 w-auto" />
            <span className="flex items-baseline gap-1">
              <span className="font-display text-lg font-bold tracking-tight" style={{ color: "#010f62" }}>eIDAS</span>
              <span className="font-display text-lg font-normal tracking-tight" style={{ color: "#010f62" }}>Readiness</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center h-full">
            <div className="flex items-center gap-1 h-full">
              {/* Learn button */}
              <button
                type="button"
                className="inline-flex items-center gap-1 px-4 h-full text-[15px] font-medium hover:opacity-70 transition-opacity"
                style={{ color: "#010f62" }}
                onMouseEnter={() => openMenu("learn")}
                onMouseLeave={scheduleClose}
                onClick={() => setActiveMenu(activeMenu === "learn" ? null : "learn")}
              >
                Learn
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === "learn" ? "rotate-180" : ""}`} />
              </button>

              {/* Prepare button */}
              <button
                type="button"
                className="inline-flex items-center gap-1 px-4 h-full text-[15px] font-medium hover:opacity-70 transition-opacity"
                style={{ color: "#010f62" }}
                onMouseEnter={() => openMenu("prepare")}
                onMouseLeave={scheduleClose}
                onClick={() => setActiveMenu(activeMenu === "prepare" ? null : "prepare")}
              >
                Prepare
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === "prepare" ? "rotate-180" : ""}`} />
              </button>

              {/* Direct links */}
              <span className="w-px h-5 mx-1" style={{ backgroundColor: "#e8e8e8" }} />
              <a href="/eidas-2-timeline" className="inline-flex items-center gap-1.5 px-3 h-full text-[15px] font-medium hover:opacity-70 transition-opacity" style={{ color: "#010f62" }}>
                Timeline
              </a>
              <a href="/eidas-2-compliance-checklist" className="inline-flex items-center gap-1.5 px-3 h-full text-[15px] font-medium hover:opacity-70 transition-opacity" style={{ color: "#010f62" }}>
                Checklist
              </a>
            </div>

            {/* Assessment CTA */}
            <a
              href="/assessment"
              className="ml-4 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "#0033ff", borderRadius: "2px" }}
            >
              Assessment <ArrowUpRight className="h-3.5 w-3.5 arrow-animate" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: "#010f62" }}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mega menu dropdown */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <MegaMenu active={activeMenu} onClose={() => setActiveMenu(null)} />
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white" style={{ borderTop: "1px solid #e8e8e8" }}>
          <div className="px-6 py-6 space-y-2">
            {/* Learn accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAccordion(mobileAccordion === "learn" ? null : "learn")}
                className="flex w-full items-center justify-between py-3 text-sm font-semibold"
                style={{ color: "#010f62" }}
              >
                Learn
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileAccordion === "learn" ? "rotate-180" : ""}`} style={{ color: "#62718d" }} />
              </button>
              {mobileAccordion === "learn" && (
                <div className="pb-2 pl-2 space-y-1">
                  {[...learnFeatured, ...learnSecondary].map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm" style={{ color: "#62718d" }}>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Prepare accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAccordion(mobileAccordion === "prepare" ? null : "prepare")}
                className="flex w-full items-center justify-between py-3 text-sm font-semibold"
                style={{ color: "#010f62" }}
              >
                Prepare
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileAccordion === "prepare" ? "rotate-180" : ""}`} style={{ color: "#62718d" }} />
              </button>
              {mobileAccordion === "prepare" && (
                <div className="pb-2 pl-2 space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-widest mt-1 mb-2" style={{ color: "#62718d" }}>By Role</p>
                  {prepareByRole.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm" style={{ color: "#62718d" }}>
                      {link.label}
                    </a>
                  ))}
                  <p className="text-sm font-semibold uppercase tracking-widest mt-3 mb-2" style={{ color: "#62718d" }}>By Industry</p>
                  {prepareByIndustry.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm" style={{ color: "#62718d" }}>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Direct links */}
            <div className="pt-4 space-y-1" style={{ borderTop: "1px solid #e8e8e8" }}>
              <a href="/eidas-2-timeline" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium" style={{ color: "#010f62" }}>
                Timeline
              </a>
              <a href="/eidas-2-compliance-checklist" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium" style={{ color: "#010f62" }}>
                Checklist
              </a>
            </div>

            <div className="pt-4" style={{ borderTop: "1px solid #e8e8e8" }}>
              <a href="/assessment" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm font-semibold" style={{ color: "#0033ff" }}>
                eIDAS Quick Check &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
