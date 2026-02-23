import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shield, Code2, Scale, LayoutGrid, Check, ArrowRight, ChevronRight } from "lucide-react";
import { roles, getRoleBySlug } from "@/lib/roles-data";
import { getIndustryBySlug } from "@/lib/industries-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import SidebarLayout from "@/components/SidebarLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

const roleIcons: Record<string, React.ElementType> = {
  "compliance-officer": Shield, "cto-technical-lead": Code2, "legal-team": Scale, "product-manager": LayoutGrid,
};

const roleImages: Record<string, string> = {
  "cto-technical-lead": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
  "compliance-officer": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  "legal-team": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  "product-manager": "https://images.unsplash.com/photo-1531538606174-e1ed0c0da388?w=1200&q=80",
};

interface PageProps { params: { slug: string } }

export function generateStaticParams() { return roles.map((r) => ({ slug: r.slug })); }

export function generateMetadata({ params }: PageProps): Metadata {
  const role = getRoleBySlug(params.slug);
  if (!role) return { title: "Role Not Found" };
  return {
    title: role.metaTitle,
    description: role.metaDescription,
    alternates: { canonical: `/roles/${role.slug}` },
    openGraph: {
      title: role.metaTitle,
      description: role.metaDescription,
      type: "article",
      url: `/roles/${role.slug}`,
      images: roleImages[role.slug] ? [{ url: roleImages[role.slug], width: 1200, height: 630, alt: role.title }] : undefined,
    },
  };
}

export default function RolePage({ params }: PageProps) {
  const role = getRoleBySlug(params.slug);
  if (!role) notFound();
  const Icon = roleIcons[role.slug] ?? Shield;
  const heroImage = roleImages[role.slug] ?? "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80";
  const relatedRoles = role.relatedRoles.map((slug) => getRoleBySlug(slug)).filter(Boolean) as NonNullable<ReturnType<typeof getRoleBySlug>>[];
  const relatedIndustries = role.relatedIndustries.map((slug) => getIndustryBySlug(slug)).filter(Boolean) as NonNullable<ReturnType<typeof getIndustryBySlug>>[];
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: role.title, description: role.metaDescription, url: `https://eidas-readiness.eu/roles/${role.slug}` };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "Roles", href: "/roles" }, { label: role.title }]} />

      {/* Hero with background photo — same pattern as industries */}
      <section className="relative" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(1,15,98,0.88)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center text-white" style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "2px" }}>
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#fff" }}>{role.title}</h1>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>{role.heroTagline}</p>
        </div>
      </section>

      {/* Article content with sidebar — everything in one flow */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <SidebarLayout sections={[
          ...role.sections.map((s, i) => ({ id: `section-${i}`, label: s.heading })),
          ...(role.keyResponsibilities.length > 0 ? [{ id: "key-responsibilities", label: "Key Responsibilities" }] : []),
          ...(role.complianceActions.length > 0 ? [{ id: "action-plan", label: "Action Plan" }] : []),
        ]}>
          <div className="space-y-12">
            {/* Article sections */}
            {role.sections.map((section, i) => {
              const paragraphs = section.content.split(/\n\n+/).filter((p) => p.trim().length > 0);
              return (
                <div key={i} id={`section-${i}`}>
                  <h2 className="text-2xl sm:text-3xl mb-4">{section.heading}</h2>
                  <div className="space-y-4">
                    {paragraphs.map((paragraph, j) => (
                      <p key={j} className="text-base leading-relaxed" style={{ color: "#62718d" }}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Key Responsibilities — inline */}
            {role.keyResponsibilities.length > 0 && (
              <div id="key-responsibilities">
                <h2 className="text-2xl sm:text-3xl mb-6">Key Responsibilities</h2>
                <div className="space-y-3">
                  {role.keyResponsibilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#0033ff" }} />
                      <span className="text-base leading-relaxed" style={{ color: "#62718d" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compliance Action Plan — inline */}
            {role.complianceActions.length > 0 && (
              <div id="action-plan">
                <h2 className="text-2xl sm:text-3xl mb-6">Compliance Action Plan</h2>
                <div className="space-y-4">
                  {role.complianceActions.map((action, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-7 h-7 flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ backgroundColor: "#010f62", borderRadius: "2px" }}>{i + 1}</span>
                      <p className="text-base leading-relaxed pt-0.5" style={{ color: "#62718d" }}>{action}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SidebarLayout>
      </section>

      {/* Related Roles & Industries — compact */}
      {(relatedRoles.length > 0 || relatedIndustries.length > 0) && (
        <section style={{ backgroundColor: "#f0f4ff", borderBottom: "1px solid #e8e8e8" }}>
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid lg:grid-cols-2 gap-10">
              {relatedRoles.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Related roles</p>
                  <div className="space-y-1.5">
                    {relatedRoles.map((r) => (
                      <a key={r.slug} href={`/roles/${r.slug}`} className="flex items-center gap-3 px-4 py-3 group transition-colors hover:bg-white/60" style={{ borderRadius: "2px" }}>
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: "#0033ff" }} />
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold" style={{ color: "#010f62" }}>{r.title}</h3>
                          <p className="text-sm line-clamp-1 mt-0.5" style={{ color: "#62718d" }}>{r.shortDescription}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {relatedIndustries.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#62718d" }}>Related industries</p>
                  <div className="space-y-1.5">
                    {relatedIndustries.map((ind) => (
                      <a key={ind.slug} href={`/industries/${ind.slug}`} className="flex items-center gap-3 px-4 py-3 group transition-colors hover:bg-white/60" style={{ borderRadius: "2px" }}>
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: "#0033ff" }} />
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold" style={{ color: "#010f62" }}>{ind.title}</h3>
                          <p className="text-sm line-clamp-1 mt-0.5" style={{ color: "#62718d" }}>{ind.shortDescription}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock headline="See How eIDAS 2.0 Affects Your Organisation" description="Take our free readiness assessment to understand your compliance gaps and get actionable recommendations." buttonText="Check your readiness" />
        </div>
      </section>
    </>
  );
}
