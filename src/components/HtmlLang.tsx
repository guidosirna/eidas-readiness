"use client";

import { useEffect } from "react";

/**
 * Corrects the document language on a translated page.
 *
 * Only a root layout can render <html>, and a root layout cannot read route
 * params, so the static HTML for /de/... still says lang="en". Moving all 59
 * routes under a [[...locale]] segment would fix it properly and is a far
 * larger change than the translation itself, so this closes the gap where it
 * actually costs something: screen readers announcing German with an English
 * voice, and browsers offering to translate a page into its own language.
 *
 * Search targeting does not depend on it. Google states it ignores the lang
 * attribute and reads the visible text; the hreflang set, which is the signal
 * it does use, is in the static head and correct.
 */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
