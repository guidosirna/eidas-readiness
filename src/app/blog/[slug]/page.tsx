import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SidebarLayout from "@/components/SidebarLayout";
import RelatedResources from "@/components/RelatedResources";
import CtaBlock from "@/components/CtaBlock";
import { getPostBySlug, posts, formatPostDate } from "@/lib/blog-data";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    // absolute: the root layout appends "| eIDAS 2.0 Readiness", which pushes
    // a headline past the ~60 characters Google shows.
    title: { absolute: post.metaTitle ?? post.title },
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "eIDAS Readiness" },
    publisher: { "@type": "Organization", name: "eIDAS Readiness" },
  };

  const sections = post.sections.map((s) => ({ id: s.id, label: s.heading }));

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      {/* Hero */}
      <section
        className="px-6 py-14 sm:py-20"
        style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <time
              dateTime={post.date}
              className="font-medium uppercase tracking-wider"
              style={{ color: "#a0a8bd" }}
            >
              {formatPostDate(post.date)}
            </time>
            {post.series && (
              <span
                className="px-2 py-0.5 font-medium"
                style={{ backgroundColor: "#e6ecff", color: "#0033ff", borderRadius: "2px" }}
              >
                {post.series}
              </span>
            )}
          </div>
          <h1
            className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#010f62" }}
          >
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            {post.standfirst}
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ borderBottom: "1px solid #e8e8e8" }}>
        <SidebarLayout shareTitle={post.title} sections={sections}>
          <div className="space-y-12">
            {post.sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="text-2xl sm:text-3xl mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed sm:text-lg" style={{ color: "#62718d" }}>
                      {p}
                    </p>
                  ))}
                </div>
                {section.callout && (
                  <div className="mt-8 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl p-5">
                    <p className="font-semibold text-slate-900">{section.callout.label}</p>
                    <p className="mt-2 text-slate-500">{section.callout.text}</p>
                  </div>
                )}
              </div>
            ))}

            {post.sources && post.sources.length > 0 && (
              <div className="pt-8" style={{ borderTop: "1px solid #e8e8e8" }}>
                <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#a0a8bd" }}>
                  Sources
                </h2>
                <ul className="space-y-2">
                  {post.sources.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:opacity-70"
                        style={{ color: "#0033ff" }}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-sm">
              <Link href="/blog" className="font-semibold hover:opacity-70" style={{ color: "#0033ff" }}>
                All briefs
              </Link>
            </p>

            {/* Same block the timeline and the two guides carry: this is
                long-form content, and it is the other route into the leaf
                pages Google has not been crawling. */}
            <div
              className="-mx-6 px-6 py-10 sm:-mx-0 sm:px-8 sm:py-12"
              style={{ backgroundColor: "#f0f4ff", borderRadius: "2px" }}
            >
              <RelatedResources
                resources={[
                  {
                    href: "/eidas-2-timeline",
                    label: "eIDAS 2.0 Timeline",
                    desc: "Every date, with a live countdown to the wallet deadline.",
                  },
                  {
                    href: "/assessment",
                    label: "Readiness Assessment",
                    desc: "Find out where your organisation stands today.",
                  },
                  {
                    href: "/guide/eidas-2-compliance",
                    label: "eIDAS 2.0 Compliance Guide",
                    desc: "Requirements, deadlines and an implementation roadmap.",
                  },
                ]}
              />
            </div>
          </div>
        </SidebarLayout>
      </section>

      {/* Every content page on this site closes with this. */}
      <section style={{ backgroundColor: "#f9f9fa" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CtaBlock
            headline="Know where you stand before the deadline"
            description="The free readiness assessment scores your organisation across six compliance areas and shows you the gaps that matter most."
            buttonText="Check your readiness"
            buttonHref="/assessment"
          />
        </div>
      </section>
    </>
  );
}
