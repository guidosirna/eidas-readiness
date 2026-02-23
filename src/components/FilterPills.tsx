"use client";

interface FilterPillsProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  counts?: Record<string, number>;
  totalCount?: number;
  allLabel?: string;
}

export default function FilterPills({
  categories,
  activeCategory,
  onCategoryChange,
  counts,
  totalCount,
  allLabel = "All",
}: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className="flex-shrink-0 px-4 py-2 text-base font-medium transition-all"
        style={{
          borderRadius: "2px",
          backgroundColor: activeCategory === null ? "#0033ff" : "#fff",
          color: activeCategory === null ? "#fff" : "#62718d",
          border: activeCategory === null ? "1px solid #0033ff" : "1px solid #e8e8e8",
        }}
      >
        {allLabel}{totalCount !== undefined ? ` (${totalCount})` : ""}
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(activeCategory === cat ? null : cat)}
          className="flex-shrink-0 px-4 py-2 text-base font-medium transition-all"
          style={{
            borderRadius: "2px",
            backgroundColor: activeCategory === cat ? "#0033ff" : "#fff",
            color: activeCategory === cat ? "#fff" : "#62718d",
            border: activeCategory === cat ? "1px solid #0033ff" : "1px solid #e8e8e8",
          }}
        >
          {cat}{counts?.[cat] !== undefined ? ` (${counts[cat]})` : ""}
        </button>
      ))}
    </div>
  );
}
