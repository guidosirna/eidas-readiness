"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { faqItems, faqCategories, getFaqsByCategory } from "@/lib/faq-data";
import FaqAccordion from "@/components/FaqAccordion";
import FilterPills from "@/components/FilterPills";

const categorySlug = (cat: string) =>
  cat.toLowerCase().replace(/\s+/g, "-");

export default function FaqPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSidebarCat, setActiveSidebarCat] = useState(faqCategories[0]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filteredByCategory = useMemo(() => {
    if (!activeCategory) return faqItems;
    return getFaqsByCategory(activeCategory);
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    if (!search.trim()) return filteredByCategory;
    const q = search.toLowerCase();
    return filteredByCategory.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [search, filteredByCategory]);

  const groupedByCategory = useMemo(() => {
    const categoriesToShow = activeCategory
      ? [activeCategory]
      : faqCategories;
    return categoriesToShow
      .map((cat) => ({
        category: cat,
        items: filteredItems.filter((item) => item.category === cat),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredItems, activeCategory]);

  const countPerCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of faqCategories) {
      if (!search.trim()) {
        counts[cat] = getFaqsByCategory(cat).length;
      } else {
        const q = search.toLowerCase();
        counts[cat] = getFaqsByCategory(cat).filter(
          (item) =>
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        ).length;
      }
    }
    return counts;
  }, [search]);

  const totalFiltered = useMemo(
    () => Object.values(countPerCategory).reduce((a, b) => a + b, 0),
    [countPerCategory]
  );

  // IntersectionObserver for sidebar active state
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topEntry = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          // Reverse the slug to get category name
          const id = topEntry.target.id;
          const cat = faqCategories.find((c) => categorySlug(c) === id);
          if (cat) setActiveSidebarCat(cat);
        }
      },
      { rootMargin: "-110px 0px -60% 0px", threshold: 0 }
    );

    const elements = faqCategories
      .map((cat) => document.getElementById(categorySlug(cat)))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [groupedByCategory]);

  const handleSidebarClick = (cat: string) => {
    const el = document.getElementById(categorySlug(cat));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* Search — full width above the grid */}
      <div className="mt-8 max-w-2xl">
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
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-12 pr-4 text-base placeholder:text-slate-400 transition-colors focus:outline-none"
            style={{ borderRadius: "2px", border: "1px solid #e8e8e8", color: "#010f62", backgroundColor: "#fff" }}
          />
        </div>
      </div>

      {/* Mobile: filter pills */}
      <div className="mt-6 lg:hidden">
        <FilterPills
          categories={faqCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          counts={countPerCategory}
          totalCount={totalFiltered}
        />
      </div>

      {/* Desktop grid: sidebar + content */}
      <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 py-12 sm:py-16">
        {/* Sidebar — desktop only */}
        <aside className="hidden lg:block">
          <nav className="sticky top-[124px]">
            <ul className="space-y-1">
              {faqCategories.map((cat) => {
                const count = countPerCategory[cat] ?? 0;
                const isActive = activeCategory ? activeCategory === cat : activeSidebarCat === cat;
                return (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory(null);
                        handleSidebarClick(cat);
                      }}
                      className="w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between"
                      style={{
                        color: isActive ? "#0033ff" : "#62718d",
                        borderLeft: isActive ? "2px solid #0033ff" : "2px solid transparent",
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      <span>{cat}</span>
                      <span className="text-xs" style={{ color: isActive ? "#0033ff" : "#a0aec0" }}>{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0">
          {groupedByCategory.length === 0 && (
            <p className="text-center text-lg" style={{ color: "#62718d" }}>
              No FAQs match your search. Try a different keyword.
            </p>
          )}
          {groupedByCategory.map((group) => (
            <section
              key={group.category}
              id={categorySlug(group.category)}
              className="mb-12 scroll-mt-32 last:mb-0"
            >
              <h2 className="font-display mb-4 text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: "#010f62" }}>
                {group.category}
              </h2>
              <div style={{ border: "1px solid #e8e8e8", borderRadius: "2px", backgroundColor: "#fff" }} className="p-5 sm:p-6">
                <FaqAccordion
                  items={group.items.map((i) => ({
                    question: i.question,
                    answer: i.answer,
                  }))}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
