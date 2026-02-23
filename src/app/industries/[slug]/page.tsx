import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CreditCard, Heart, Landmark, Wifi, ShoppingCart, Plane, Check, ArrowRight, ChevronRight, Clock } from "lucide-react";
import { industries, getIndustryBySlug } from "@/lib/industries-data";
import { getRoleBySlug } from "@/lib/roles-data";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import SidebarLayout from "@/components/SidebarLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

const industryIcons: Record<string, React.ElementType> = {
  "financial-services": CreditCard, healthcare: Heart, "government-public-sector": Landmark,
  telecommunications: Wifi, "ecommerce-platforms": ShoppingCart, "travel-transport": Plane,
};

const industryImages: Record<string, string> = {
  "financial-services": "/images/financial-services.jpg",
  healthcare: "/images/healthcare.jpg",
  "government-public-sector": "/images/government.jpg",
  telecommunications: "/images/telecommunications.jpg",
  "ecommerce-platforms": "/images/ecommerce.jpg",
  "travel-transport": "/images/travel.jpg",
};

const useCaseImages: Record<string, string[]> = {
  "financial-services": [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&q=80",
  ],
  healthcare: [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
    "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  ],
  "government-public-sector": [
    "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=600&q=80",
    "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80",
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&q=80",
    "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=600&q=80",
    "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=600&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  ],
  telecommunications: [
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  ],
  "ecommerce-platforms": [
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
    "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  ],
  "travel-transport": [
    "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80",
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  ],
};

interface PageProps { params: { slug: string } }

export function generateStaticParams() { return industries.map((ind) => ({ slug: ind.slug })); }

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: "article",
      url: `/industries/${industry.slug}`,
      images: industryImages[industry.slug] ? [{ url: industryImages[industry.slug], width: 1200, height: 630, alt: industry.title }] : undefined,
    },
  };
}

export default function IndustryPage({ params }: PageProps) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();
  const Icon = industryIcons[industry.slug] ?? Landmark;
  const heroImage = industryImages[industry.slug] ?? "/images/office-meeting.jpg";
  const ucImages = useCaseImages[industry.slug] ?? [];
  const relatedIndustries = industry.relatedIndustries.map((slug) => getIndustryBySlug(slug)).filter(Boolean) as NonNullable<ReturnType<typeof getIndustryBySlug>>[];
  const relatedRoles = industry.relatedRoles.map((slug) => getRoleBySlug(slug)).filter(Boolean) as NonNullable<ReturnType<typeof getRoleBySlug>>[];
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: industry.title, description: industry.metaDescription, url: `https://eidas-readiness.eu/industries/${industry.slug}` };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: industry.title }]} />
      {/* Hero with background photo */}
      <section className="relative" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(1,15,98,0.88)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center text-white" style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "2px" }}>
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#fff" }}>{industry.title}</h1>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>{industry.heroTagline}</p>
        </div>
      </section>

      {/* Article content with sidebar — everything in one flow */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <SidebarLayout sections={[
          ...industry.sections.map((s, i) => ({ id: `section-${i}`, label: s.heading })),
          ...(industry.keyRequirements.length > 0 ? [{ id: "key-requirements", label: "Key Requirements" }] : []),
          ...(industry.useCases.length > 0 ? [{ id: "use-cases", label: "Use Cases" }] : []),
        ]}>
          <div className="space-y-12">
            {/* Article sections */}
            {industry.sections.map((section, i) => {
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

            {/* Key Requirements — inline */}
            {industry.keyRequirements.length > 0 && (
              <div id="key-requirements">
                <h2 className="text-2xl sm:text-3xl mb-6">Key Requirements</h2>
                <div className="space-y-3">
                  {industry.keyRequirements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#0033ff" }} />
                      <span className="text-base leading-relaxed" style={{ color: "#62718d" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Clock className="h-4 w-4" style={{ color: "#0033ff" }} />
                  <a href="/eidas-2-timeline" className="text-sm font-semibold hover:underline" style={{ color: "#0033ff" }}>
                    View the full eIDAS 2.0 compliance timeline
                  </a>
                  <ArrowRight className="h-3.5 w-3.5" style={{ color: "#0033ff" }} />
                </div>
              </div>
            )}

            {/* Use Cases — inline */}
            {industry.useCases.length > 0 && (
              <div id="use-cases">
                <h2 className="text-2xl sm:text-3xl mb-6">Use Cases</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {industry.useCases.map((useCase, i) => (
                    <div key={i} className="card-static overflow-hidden">
                      {ucImages[i] && (
                        <div className="relative h-36">
                          <Image src={ucImages[i]} alt={useCase} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" {...(i === 0 ? { priority: true } : {})} />
                        </div>
                      )}
                      <div className="p-4">
                        <p className="text-sm font-medium leading-snug" style={{ color: "#010f62" }}>{useCase}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SidebarLayout>
      </section>

      {/* Related Industries & Roles — compact */}
      {(relatedIndustries.length > 0 || relatedRoles.length > 0) && (
        <section style={{ backgroundColor: "#f0f4ff", borderBottom: "1px solid #e8e8e8" }}>
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid lg:grid-cols-2 gap-10">
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
            </div>
          </div>
        </section>
      )}

      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock headline="Assess Your Industry Readiness" description="Take our free eIDAS 2.0 readiness assessment to understand how the regulation impacts your sector." buttonText="Get your readiness score" />
        </div>
      </section>
    </>
  );
}
