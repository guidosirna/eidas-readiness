import Link from "next/link";
import { glossaryTerms } from "@/lib/glossary-data";

/**
 * Every glossary term, as plain server-rendered links.
 *
 * This is the Suspense fallback for GlossaryPageClient, and it exists because
 * of a specific Next.js behaviour with a costly consequence. The interactive
 * list reads useSearchParams, which makes Next bail out of prerendering that
 * subtree; the Suspense boundary had no fallback, so the static HTML for
 * /glossary contained zero links to the 36 term pages. Search Console had 47
 * URLs as "discovered, currently not indexed" and 35 of them were glossary
 * terms: found via the sitemap, with no link anywhere for a crawler to follow.
 *
 * A fallback is the right place for it rather than a hidden block, because
 * this is also what a reader without JavaScript should get: the same terms,
 * the same links, just without search and filters.
 */
export default function GlossaryTermList() {
  const categories = glossaryTerms
    .map((t) => t.category)
    .filter((c, i, all) => all.indexOf(c) === i);

  return (
    <section className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        {categories.map((category) => (
          <div key={category} className="mb-10 last:mb-0">
            <h2
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#8b95a9" }}
            >
              {category}
            </h2>
            <ul className="mt-4 divide-y" style={{ borderColor: "#f0f0f2" }}>
              {glossaryTerms
                .filter((t) => t.category === category)
                .map((term) => (
                  <li key={term.slug} className="py-3">
                    <Link
                      href={`/glossary/${term.slug}`}
                      className="group block hover:opacity-70"
                    >
                      <span className="text-base font-semibold" style={{ color: "#010f62" }}>
                        {term.term}
                      </span>
                      <span className="mt-0.5 block text-sm leading-relaxed" style={{ color: "#62718d" }}>
                        {term.shortDefinition}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
