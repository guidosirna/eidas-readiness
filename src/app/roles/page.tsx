import type { Metadata } from "next";
import { Shield, Code2, Scale, LayoutGrid, ArrowRight } from "lucide-react";
import { roles } from "@/lib/roles-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "eIDAS 2.0 by Role | Who Needs to Prepare",
  description: "How eIDAS 2.0 affects CTOs, compliance officers, product managers, and legal teams. Role-specific guidance for wallet readiness.",
  alternates: { canonical: "/roles" },
  openGraph: {
    title: "eIDAS 2.0 by Role: Who Needs to Prepare",
    description: "How eIDAS 2.0 affects CTOs, compliance officers, product managers, and legal teams. Role-specific guidance.",
    type: "website",
    url: "/roles",
  },
};

const roleMeta: Record<string, { icon: React.ElementType }> = {
  "cto-technical-lead": { icon: Code2 },
  "compliance-officer": { icon: Shield },
  "product-manager": { icon: LayoutGrid },
  "legal-team": { icon: Scale },
};

export default function RolesIndexPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "eIDAS 2.0 Readiness by Role", description: "Role-specific eIDAS 2.0 compliance guidance.", url: "https://eidas-readiness.eu/roles" };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "eIDAS 2.0 by Role" }]} />
      <section className="px-6 pt-12 pb-14 sm:pt-16 sm:pb-20" style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#010f62" }}>eIDAS 2.0 Readiness by Role</h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "#62718d" }}>Different roles carry different responsibilities under eIDAS 2.0. Find the guidance tailored to your position.</p>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {roles.map((role) => {
              const meta = roleMeta[role.slug] ?? { icon: Shield };
              const Icon = meta.icon;
              return (
                <a key={role.slug} href={`/roles/${role.slug}`} className="card-blue-hover p-6 group">
                  <div className="card-icon mb-5" style={{ color: "#0033ff" }}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: "#010f62" }}>{role.title}</h2>
                  <p className="text-base line-clamp-3 mb-3" style={{ color: "#62718d" }}>{role.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-base font-semibold group-hover:gap-2" style={{ color: "#0033ff" }}>
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock variant="secondary" headline="Find Out Where Your Organisation Stands" description="Take our free eIDAS 2.0 readiness assessment to get a personalised compliance report." buttonText="See where you stand" />
        </div>
      </section>
    </>
  );
}
