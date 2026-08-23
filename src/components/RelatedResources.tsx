"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { trackResourceClick } from "@/lib/analytics";

export interface RelatedResource {
  href: string;
  label: string;
  desc: string;
}

/**
 * The related-resources block that sits at the foot of the long-form pages.
 * Client-side so the outbound clicks register in GA, this is how we see which
 * internal routes actually earn attention.
 */
export default function RelatedResources({
  resources,
  title = "Related resources",
}: {
  resources: RelatedResource[];
  title?: string;
}) {
  return (
    <>
      <p
        className="text-sm font-semibold uppercase tracking-widest mb-4"
        style={{ color: "#62718d" }}
      >
        {title}
      </p>
      <div className="space-y-1.5">
        {resources.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => trackResourceClick(link.href)}
            className="flex items-center gap-3 px-4 py-3 group transition-colors hover:bg-white/60"
            style={{ borderRadius: "2px" }}
          >
            <ChevronRight
              className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
              style={{ color: "#0033ff" }}
            />
            <div className="min-w-0">
              <h3 className="text-sm font-semibold" style={{ color: "#010f62" }}>
                {link.label}
              </h3>
              <p className="text-sm line-clamp-1 mt-0.5" style={{ color: "#62718d" }}>
                {link.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
