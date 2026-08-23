"use client";

import { useState } from "react";
import { Check, FileText, ArrowUpRight } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";
import { trackCtaClick } from "@/lib/analytics";

interface Service {
  name: string;
  tagline: string;
  description: string;
  included: string[];
  duration: string;
  deliverable: string;
  price: string;
  bestFor: string;
  cta: string;
}

const services: Service[] = [
  {
    name: "Readiness Audit",
    tagline: "For organisations that need clarity on where they stand.",
    description:
      "A comprehensive evaluation of your current compliance posture across legal obligations, technical infrastructure, privacy alignment, and organisational readiness.",
    included: [
      "In-depth assessment across 6 compliance areas (beyond the free quick check)",
      "Stakeholder interviews with legal, technical, and product teams",
      "Gap analysis mapped against current implementing acts and ARF specifications",
      "Prioritised action plan with effort estimates and dependencies",
      "Executive summary for leadership and board reporting",
    ],
    duration: "2–3 weeks",
    deliverable:
      "Detailed readiness report of 40–60 pages, an executive summary, and a 90-minute walkthrough session",
    price: "Starting at €5,000",
    bestFor:
      "Best for organisations in early stages that need a clear picture before committing resources.",
    cta: "Start your audit",
  },
  {
    name: "Implementation Roadmap",
    tagline: "For organisations that know their gaps and need a plan.",
    description:
      "A tailored technical and organisational roadmap that takes you from current state to eIDAS 2.0 compliance, designed for your specific sector, systems, and constraints.",
    included: [
      "Everything in the Readiness Audit",
      "Architecture recommendations for wallet integration and credential verification",
      "Protocol specifications (OpenID4VC, selective disclosure, trust framework alignment)",
      "Phased implementation plan with milestones and resource requirements",
      "Vendor evaluation framework for trust service providers and wallet solutions",
      "Risk assessment and mitigation strategies",
    ],
    duration: "4–6 weeks",
    deliverable:
      "Implementation roadmap document, technical specifications, and two review sessions",
    price: "Price on request",
    bestFor:
      "Best for organisations with a mandate to implement. Includes the Readiness Audit.",
    cta: "Get a quote",
  },
  {
    name: "Advisory Programme",
    tagline: "For organisations actively implementing.",
    description:
      "Hands-on support while you implement. Regulatory monitoring, technical guidance, and strategic alignment as the landscape shifts.",
    included: [
      "Monthly regulatory briefing on implementing acts, ARF updates, and pilot outcomes",
      "Technical review sessions (architecture, integration approach, protocol compliance)",
      "Stakeholder alignment support (bridging legal, technical, and product teams)",
      "Access to our network of implementation specialists and trust service providers",
      "Priority response on emerging regulatory questions",
      "Quarterly progress assessment against compliance milestones",
    ],
    duration: "3 months minimum",
    deliverable:
      "Monthly briefings, two advisory sessions a month, and async support throughout",
    price: "Price on request",
    bestFor:
      "Best for organisations already in active implementation.",
    cta: "Get a quote",
  },
];

export default function ServicesPage() {
  const [enquiry, setEnquiry] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        className="px-6 py-14 sm:py-20"
        style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}
      >
        <div className="mx-auto max-w-7xl">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ color: "#010f62" }}
          >
            Structured support for your eIDAS 2.0 implementation
          </h1>
          <p className="mt-4 text-lg max-w-3xl" style={{ color: "#62718d" }}>
            From readiness assessment to full implementation guidance. We help
            European organisations prepare for the EU Digital Identity Wallet
            with confidence.
          </p>
        </div>
      </section>

      {/* Pricing grid */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-10 max-w-3xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            Three levels of engagement. Take the one that matches where you
            are. The Implementation Roadmap includes the Readiness Audit.
          </p>
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {services.map((service, i) => {
              // The middle tier carries the visual weight, as on any pricing page.
              const featured = i === 1;
              return (
                <article
                  key={service.name}
                  className="flex flex-col bg-white p-8"
                  style={{
                    borderRadius: "2px",
                    border: featured ? "2px solid #0033ff" : "1px solid #e8e8e8",
                  }}
                >
                  {/* Identity */}
                  <div style={{ minHeight: "7rem" }}>
                    <h2
                      className="text-xl font-semibold sm:text-2xl"
                      style={{ color: "#010f62" }}
                    >
                      {service.name}
                    </h2>
                    <p
                      className="mt-2 text-base font-semibold"
                      style={{ color: "#0033ff" }}
                    >
                      {service.tagline}
                    </p>
                  </div>

                  {/* Price sits with the duration as one quiet line: this is
                      consulting, not a subscription tier. */}
                  <div className="mt-5 flex flex-col justify-end" style={{ minHeight: "3.5rem" }}>
                    <p className="text-lg font-semibold" style={{ color: "#010f62" }}>
                      {service.price}
                    </p>
                    <p className="mt-0.5 text-sm" style={{ color: "#62718d" }}>
                      {service.duration}
                    </p>
                  </div>

                  {/* CTA up top, where a pricing page puts it */}
                  <button
                    type="button"
                    onClick={() => {
                      trackCtaClick(`services: ${service.name}`);
                      setEnquiry(service.name);
                    }}
                    className={`mt-5 w-full ${featured ? "btn-primary" : "btn-secondary"}`}
                  >
                    {service.cta} <ArrowUpRight className="h-4 w-4 arrow-animate" />
                  </button>

                  <p
                    className="mt-6 text-base leading-relaxed"
                    style={{ color: "#62718d", minHeight: "10rem" }}
                  >
                    {service.description}
                  </p>

                  {/* What's included */}
                  <div className="mt-6 pt-6" style={{ borderTop: "1px solid #e8e8e8" }}>
                    <h3
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "#010f62" }}
                    >
                      What&apos;s included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.included.map((item) => (
                        <li key={item} className="flex gap-3">
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0"
                            style={{ color: "#0033ff" }}
                          />
                          <span
                            className="text-base leading-relaxed"
                            style={{ color: "#62718d" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverable and fit sit at the foot so the cards line up */}
                  <div
                    className="mt-6 pt-6"
                    style={{ borderTop: "1px solid #e8e8e8" }}
                  >
                    <dl>
                      <dt
                        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
                        style={{ color: "#62718d" }}
                      >
                        <FileText className="h-4 w-4" />
                        Deliverable
                      </dt>
                      <dd
                        className="mt-2 text-base leading-relaxed"
                        style={{ color: "#010f62" }}
                      >
                        {service.deliverable}
                      </dd>
                    </dl>
                  </div>

                  {/* mt-auto pins this to the foot so the three cards line up
                      even though their feature lists differ in length. */}
                  <div className="mt-auto pt-6">
                    <p
                      className="px-4 py-3 text-sm leading-relaxed"
                      style={{
                        backgroundColor: "#f0f4ff",
                        color: "#010f62",
                        borderRadius: "2px",
                      }}
                    >
                      {service.bestFor}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div
            className="pattern-pixels px-8 py-14 text-center sm:px-14 sm:py-16"
            style={{ backgroundColor: "#010f62", borderRadius: "2px" }}
          >
            <h2 className="relative text-2xl font-semibold text-white sm:text-3xl">
              Ready to discuss your eIDAS 2.0 preparation?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              Tell us where you are in your implementation and we will point you
              to the engagement that fits.
            </p>
            <div className="relative mt-8">
              <button
                type="button"
                onClick={() => {
                  trackCtaClick("services: General consultation");
                  setEnquiry("General consultation");
                }}
                className="inline-flex items-center gap-2 bg-white font-semibold transition-colors hover:bg-gray-100"
                style={{
                  color: "#010f62",
                  padding: "12px 28px",
                  borderRadius: "2px",
                  fontSize: "16px",
                }}
              >
                Book a consultation <ArrowUpRight className="h-4 w-4 arrow-animate" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        open={enquiry !== null}
        onClose={() => setEnquiry(null)}
        service={enquiry ?? undefined}
      />
    </>
  );
}
