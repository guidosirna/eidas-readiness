import Link from "next/link";
import ShareButton from "@/components/ShareButton";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  // Use the last item's label as the share title
  const shareTitle = items[items.length - 1]?.label ?? "eIDAS Readiness";

  return (
    <nav aria-label="Breadcrumb" className="sticky top-[64px] md:top-[96px] z-40 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <ol className="flex items-center gap-2 text-sm min-w-0" style={{ color: "#62718d" }}>
          <li>
            <Link href="/" className="hover:underline transition-colors" style={{ color: "#62718d" }}>
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 min-w-0">
              <span aria-hidden="true" style={{ color: "#ccc" }}>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:underline transition-colors" style={{ color: "#62718d" }}>
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium truncate" style={{ color: "#010f62" }}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
        <ShareButton title={shareTitle} variant="icon" />
      </div>
    </nav>
  );
}
