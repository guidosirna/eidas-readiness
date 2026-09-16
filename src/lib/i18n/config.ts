/**
 * Languages this site serves, and the rules around them.
 *
 * English lives at the root and always will: every URL Google has indexed is
 * an English one, and moving them to /en/ to make the shape symmetrical would
 * be a migration with nothing to gain. Translations sit under a prefix.
 *
 * The three were chosen from measured interest rather than taste. On the
 * Wikipedia article for eIDAS over thirteen months, German drew 10,932 views
 * against English's 30,084, which is 49% of all non-English interest;
 * Italian 2,421 and Spanish 1,962 follow. Spanish is in the set partly
 * because it is the only one Guido can audit, which is the sole quality
 * control there is on a machine translation.
 */
export const DEFAULT_LOCALE = "en" as const;

export const TRANSLATED_LOCALES = ["de", "it", "es"] as const;

export type TranslatedLocale = (typeof TRANSLATED_LOCALES)[number];
export type Locale = typeof DEFAULT_LOCALE | TranslatedLocale;

export const LOCALES: Locale[] = [DEFAULT_LOCALE, ...TRANSLATED_LOCALES];

/** What a language is called in its own language, for the switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  it: "Italiano",
  es: "Español",
};

/** The BCP 47 tag for `lang` and for hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en",
  de: "de",
  it: "it",
  es: "es",
};

export function isTranslatedLocale(value: string): value is TranslatedLocale {
  return (TRANSLATED_LOCALES as readonly string[]).includes(value);
}

/** The path a page lives at in a given language. English keeps the bare path. */
export function localePath(locale: Locale, path: string): string {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}

/**
 * The `alternates` block for a page that exists in every language.
 *
 * hreflang has to be reciprocal to be believed: each version points at all of
 * them including itself, and x-default names the one to serve when no language
 * matches. Emitting it from one helper is the only way it stays that way.
 */
export function alternatesFor(locale: Locale, path: string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[LOCALE_TAGS[l]] = localePath(l, path);
  }
  languages["x-default"] = localePath(DEFAULT_LOCALE, path);

  return {
    canonical: localePath(locale, path),
    languages,
  };
}
