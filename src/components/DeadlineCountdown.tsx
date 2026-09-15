"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Days remaining until every member state must offer a wallet.
 *
 * The date is not a round guess. Article 5a(1) of Regulation (EU) 2024/1183
 * gives member states 24 months from the entry into force of the implementing
 * acts adopted under it. The first of those, Implementing Regulations (EU)
 * 2024/2977, 2978, 2979, 2981 and 2982, adopted 28 November 2024, were
 * published in the Official Journal on 4 December 2024 and entered into force
 * on the twentieth day following publication, 24 December 2024. Twenty-four
 * months from that is the date below.
 *
 *   https://eur-lex.europa.eu/eli/reg_impl/2024/2977/oj
 *   https://eur-lex.europa.eu/eli/reg/2024/1183/oj  (Art. 5a(1))
 *
 * Counted in the browser rather than at build time: a number baked into static
 * HTML is wrong the next morning, and re-deploying daily to keep it honest
 * would churn the sitemap's lastmod for no content change.
 */
const DEADLINE = Date.UTC(2026, 11, 24); // 24 December 2026

function daysLeft(): number {
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.max(0, Math.round((DEADLINE - today) / 86_400_000));
}

export default function DeadlineCountdown() {
  // Null on the server and on first paint, so the server HTML and the first
  // client render agree. The sentence reads correctly either way.
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => setDays(daysLeft()), []);

  return (
    <aside
      className="rounded-lg px-6 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6"
      style={{ backgroundColor: "#010f62" }}
      aria-label="Wallet availability deadline"
    >
      <div>
        <p
          className="text-xs font-medium uppercase tracking-wider"
          style={{ color: "#8fa0e8" }}
        >
          Wallet availability deadline
        </p>
        <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
          {days === null ? (
            <>24 December 2026</>
          ) : days === 0 ? (
            <>The deadline is today, 24 December 2026</>
          ) : (
            <>
              <span className="tabular-nums">{days}</span>
              {days === 1 ? " day left" : " days left"}
              <span className="font-normal" style={{ color: "#c3cdf5" }}>
                {" "}· 24 December 2026
              </span>
            </>
          )}
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed" style={{ color: "#c3cdf5" }}>
          Every member state must offer at least one European Digital Identity
          Wallet to its citizens and residents by this date, under Article 5a(1)
          of Regulation (EU) 2024/1183.
        </p>
      </div>

      <Link
        href="/assessment/quick-check"
        className="mt-4 inline-block flex-shrink-0 rounded-md px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 sm:mt-0"
        style={{ backgroundColor: "#ffffff", color: "#010f62" }}
      >
        Check your readiness
      </Link>
    </aside>
  );
}
