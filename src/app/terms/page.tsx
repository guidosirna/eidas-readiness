import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Terms of Use | eIDAS 2.0 Readiness",
  description: "Terms of use governing access to eIDAS 2.0 Readiness tools, assessment, and compliance resources.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <section style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#62718d" }}>
              <li><a href="/" className="hover:opacity-70 transition-opacity">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium" style={{ color: "#010f62" }}>Terms of Use</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-lg" style={{ color: "#62718d" }}>Last updated: February 2026</p>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-10">
          <div>
            <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              By accessing and using eIDAS 2.0 Readiness (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">2. Use of the Site</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              The Site provides informational content about eIDAS 2.0 compliance, readiness assessments, and related guidance. This content is for general informational purposes only and does not constitute legal, regulatory, or professional advice. You should consult qualified professionals for advice specific to your situation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              All content on the Site, including text, graphics, logos, and software, is the property of eIDAS 2.0 Readiness or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">4. Disclaimer of Warranties</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. Assessment results and compliance guidance are indicative only.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              To the fullest extent permitted by law, eIDAS 2.0 Readiness shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or reliance on any information provided.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">6. Governing Law</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              These Terms shall be governed by and construed in accordance with the laws of the European Union and the applicable Member State where the operator is established.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <CtaBlock variant="secondary" headline="Check Your eIDAS 2.0 Readiness" description="Take our free assessment to understand your compliance gaps." />
        </div>
      </section>
    </>
  );
}
