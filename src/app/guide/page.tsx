import type { Metadata } from "next";
import { ArrowRight, BookOpen, Shield } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Compliance Guides | eIDAS 2.0 Readiness",
  description: "In-depth guides to help your organisation prepare for eIDAS 2.0 and the European Digital Identity Wallet.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "eIDAS 2.0 Compliance Guides",
    description: "In-depth guides to help your organisation prepare for eIDAS 2.0 and the European Digital Identity Wallet.",
    type: "website",
    url: "/guide",
  },
};

const guides = [
  {
    href: "/guide/eidas-2-compliance",
    title: "eIDAS 2.0 Compliance Guide",
    description: "Everything you need to know about eIDAS 2.0 requirements, deadlines, and a step-by-step implementation roadmap for your organisation.",
    readTime: "15 min read",
    icon: BookOpen,
  },
  {
    href: "/guide/eudiw-preparation",
    title: "EUDIW Preparation Guide",
    description: "Complete preparation guide for relying parties covering EU Digital Identity Wallet architecture, technical integration, credential formats, and a 6-month readiness roadmap.",
    readTime: "12 min read",
    icon: Shield,
  },
];

export default function GuidesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Compliance Guides" }]} />

      <section className="px-6 py-14 sm:py-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>Compliance Guides</h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "#62718d" }}>
            In-depth guides to help your organisation navigate eIDAS 2.0 compliance and prepare for the European Digital Identity Wallet.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="grid gap-6">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <a key={guide.href} href={guide.href} className="card-blue-hover p-8 group">
                  <div className="flex items-start gap-5">
                    <div className="card-icon-box w-12 h-12 shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,51,255,0.08)", borderRadius: "2px" }}>
                      <Icon className="card-icon h-6 w-6" style={{ color: "#0033ff" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold mb-2" style={{ color: "#010f62" }}>{guide.title}</h2>
                      <p className="text-base leading-relaxed mb-3" style={{ color: "#62718d" }}>{guide.description}</p>
                      <span className="inline-flex items-center gap-1 text-base font-semibold group-hover:gap-2 transition-all" style={{ color: "#0033ff" }}>
                        Read guide <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <CtaBlock variant="secondary" headline="Check Your eIDAS 2.0 Readiness" description="Take our free assessment to understand your compliance gaps and get an actionable plan." />
        </div>
      </section>
    </>
  );
}
