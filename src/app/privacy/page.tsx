import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Privacy Policy | eIDAS 2.0 Readiness",
  description: "Privacy policy for eIDAS 2.0 Readiness. How we collect, use, and protect your data when using our compliance tools.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#62718d" }}>
              <li><a href="/" className="hover:opacity-70 transition-opacity">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium" style={{ color: "#010f62" }}>Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg" style={{ color: "#62718d" }}>Last updated: February 2026</p>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-10">
          <div>
            <h2 className="text-2xl mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              We collect information you voluntarily provide, such as your email address when subscribing to our newsletter or unlocking gated content, and your name, email, and company when using the readiness assessment. We also collect standard web analytics data (page views, browser type, referring pages) through privacy-respecting analytics.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              We use collected information to deliver the services you request (assessment results, guide access), to improve our content and tools, and to send relevant updates about eIDAS 2.0 compliance if you have opted in. We do not sell your personal data to third parties.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">3. Data Storage and Security</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              Your data is stored securely within the European Economic Area (EEA). We implement industry-standard security measures including encryption in transit and at rest. We retain your data only as long as necessary to provide our services or as required by law.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">4. Your Rights Under GDPR</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              As a data subject under the General Data Protection Regulation, you have the right to access, rectify, erase, restrict processing of, and port your personal data. You may also object to processing and withdraw consent at any time. To exercise these rights, contact us at privacy@eidasreadiness.com.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">5. Cookies</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              We use essential cookies required for the site to function (e.g., session management) and optional analytics cookies. You can manage your cookie preferences at any time through your browser settings.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4">6. Contact</h2>
            <p className="leading-relaxed" style={{ color: "#62718d" }}>
              For privacy-related inquiries, please contact us at privacy@eidasreadiness.com.
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
