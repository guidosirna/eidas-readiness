"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { glossaryTerms, getTermsByCategory } from "@/lib/glossary-data";
import FilterPills from "@/components/FilterPills";

const categories = Array.from(
  new Set(glossaryTerms.map((t) => t.category))
).sort();

export default function GlossaryPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredByCategory = useMemo(() => {
    if (!activeCategory) return glossaryTerms;
    return getTermsByCategory(activeCategory);
  }, [activeCategory]);

  const filteredTerms = useMemo(() => {
    if (!search.trim()) return filteredByCategory;
    const q = search.toLowerCase();
    return filteredByCategory.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.shortDefinition.toLowerCase().includes(q)
    );
  }, [search, filteredByCategory]);

  const groupedByCategory = useMemo(() => {
    const categoriesToShow = activeCategory ? [activeCategory] : categories;
    return categoriesToShow
      .map((cat) => ({
        category: cat,
        terms: filteredTerms
          .filter((t) => t.category === cat)
          .sort((a, b) => a.term.localeCompare(b.term)),
      }))
      .filter((group) => group.terms.length > 0);
  }, [filteredTerms, activeCategory]);

  const countPerCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of categories) {
      if (!search.trim()) {
        counts[cat] = getTermsByCategory(cat).length;
      } else {
        const q = search.toLowerCase();
        counts[cat] = getTermsByCategory(cat).filter(
          (t) =>
            t.term.toLowerCase().includes(q) ||
            t.shortDefinition.toLowerCase().includes(q)
        ).length;
      }
    }
    return counts;
  }, [search]);

  const totalFiltered = useMemo(
    () => Object.values(countPerCategory).reduce((a, b) => a + b, 0),
    [countPerCategory]
  );

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Search */}
      <div className="mt-8">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
            style={{ color: "#62718d" }}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search glossary terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-12 pr-4 text-base placeholder:text-slate-400 transition-colors focus:outline-none"
            style={{ borderRadius: "2px", border: "1px solid #e8e8e8", color: "#010f62", backgroundColor: "#fff" }}
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-6">
        <FilterPills
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          counts={countPerCategory}
          totalCount={totalFiltered}
        />
      </div>

      {/* Terms grouped by category */}
      <div className="py-12 sm:py-16">
        {groupedByCategory.length === 0 && (
          <p className="text-center text-lg" style={{ color: "#62718d" }}>
            No terms match your search. Try a different keyword.
          </p>
        )}
        {groupedByCategory.map((group) => (
          <section key={group.category} className="mb-12 scroll-mt-32 last:mb-0">
            <h2 className="font-display mb-6 text-xl font-semibold tracking-tight sm:text-2xl flex items-center gap-3" style={{ color: "#010f62" }}>
              {group.category}
              <span className="text-base font-normal" style={{ color: "#62718d" }}>
                {group.terms.length} {group.terms.length === 1 ? "term" : "terms"}
              </span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {group.terms.map((t) => (
                <Link
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className="group block card-blue-hover p-5"
                >
                  <h3 className="text-base font-semibold" style={{ color: "#010f62" }}>
                    {t.term}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed line-clamp-3" style={{ color: "#62718d" }}>
                    {t.shortDefinition}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
