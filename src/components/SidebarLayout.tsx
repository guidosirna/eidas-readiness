"use client";

import { useEffect, useRef, useState } from "react";

interface SidebarSection {
  id: string;
  label: string;
}

interface SidebarLayoutProps {
  sections: SidebarSection[];
  children: React.ReactNode;
  sidebarFooter?: React.ReactNode;
}

export default function SidebarLayout({ sections, children, sidebarFooter }: SidebarLayoutProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topEntry = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topEntry.target.id);
        }
      },
      { rootMargin: "-110px 0px -60% 0px", threshold: 0 }
    );

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* Mobile pill bar */}
      <div className="lg:hidden sticky top-[100px] z-30 -mx-6 px-6 py-3 bg-white overflow-x-auto" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="flex gap-2 min-w-max">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleClick(s.id)}
              className="whitespace-nowrap px-3 py-1.5 text-xs font-medium transition-colors"
              style={{
                borderRadius: "2px",
                backgroundColor: activeId === s.id ? "#0033ff" : "#f0f0f0",
                color: activeId === s.id ? "#fff" : "#62718d",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 py-20">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-[124px]">
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(s.id)}
                    className="w-full text-left px-3 py-2 text-sm transition-colors"
                    style={{
                      color: activeId === s.id ? "#0033ff" : "#62718d",
                      borderLeft: activeId === s.id ? "2px solid #0033ff" : "2px solid transparent",
                      fontWeight: activeId === s.id ? 600 : 400,
                    }}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
            {sidebarFooter && <div className="mt-6">{sidebarFooter}</div>}
          </nav>
        </aside>

        {/* Content */}
        <div className="max-w-none min-w-0">{children}</div>
      </div>
    </div>
  );
}
