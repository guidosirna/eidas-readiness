"use client";

import { ArrowUpRight } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

/**
 * A primary CTA that records its own click.
 *
 * The home page is a server component, so its CTAs were plain anchors and
 * cta_click never fired for them. Over 90 days GA recorded 15 cta_click events
 * across the whole site, all on a single day from two users: a test. The event
 * only ever existed in CtaBlock and on /services, which 8 people visited. So
 * there was no way to tell whether the home hero worked — "nobody clicks it"
 * would have been an absence of measurement, not a measurement.
 *
 * This exists rather than a "use client" on HomePage because that would ship the
 * whole indexed home page as client JavaScript to record two clicks.
 */
export default function CtaLink({
  href,
  label,
  children,
  className = "btn-primary inline-flex",
}: {
  href: string;
  /** Kept stable across locales on purpose: a translated label would split the
   *  GA breakdown into one row per language. */
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className} onClick={() => trackCtaClick(label)}>
      {children} <ArrowUpRight className="h-4 w-4 arrow-animate" />
    </a>
  );
}
