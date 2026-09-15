import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import { sortedPosts, formatPostDate } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: { absolute: "eIDAS 2.0 Blog: Regulatory Briefs and Analysis" },
  description:
    "What changes in eIDAS 2.0 and the EU Digital Identity Wallet, what it means for a relying party, and what to do about it. Sourced, dated, and written for people with an implementation to run.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "eIDAS 2.0 Blog: Regulatory Briefs and Analysis",
    description:
      "What changes in eIDAS 2.0 and the EU Digital Identity Wallet, and what it means for a relying party.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "eIDAS Readiness",
    description:
      "Regulatory briefs and analysis on eIDAS 2.0 and the EU Digital Identity Wallet.",
    url: `${SITE_URL}/blog`,
    blogPost: sortedPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${SITE_URL}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section
        className="px-6 py-14 sm:py-20"
        style={{ backgroundColor: "#f9f9fa", borderBottom: "1px solid #e8e8e8" }}
      >
        <div className="mx-auto max-w-4xl">
          <h1
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#010f62" }}
          >
            Regulatory briefs and analysis
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "#62718d" }}>
            What changed, what it means for an organisation that has to accept
            the wallet, and what to do about it. Every date traced to the text
            it comes from.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <ul className="divide-y" style={{ borderColor: "#e8e8e8" }}>
            {sortedPosts.map((post) => (
              <li key={post.slug} className="py-8 first:pt-0">
                <Link href={`/blog/${post.slug}`} className="group block">
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
                        style={{ backgroundColor: "#f0f4ff", color: "#0033ff", borderRadius: "2px" }}
                      >
                        {post.series}
                      </span>
                    )}
                  </div>
                  <h2
                    className="font-display mt-3 text-xl font-semibold sm:text-2xl group-hover:opacity-80"
                    style={{ color: "#010f62" }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed" style={{ color: "#62718d" }}>
                    {post.standfirst}
                  </p>
                  <span
                    className="mt-3 inline-block text-sm font-semibold"
                    style={{ color: "#0033ff" }}
                  >
                    Read it
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Every content page on this site closes with this. */}
      <section style={{ backgroundColor: "#f9f9fa", borderTop: "1px solid #e8e8e8" }}>
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
