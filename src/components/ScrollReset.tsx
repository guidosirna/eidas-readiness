"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReset() {
  const pathname = usePathname();

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
