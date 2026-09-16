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

/**
 * The path a page lives at in a given language. English keeps the bare path.
 *
 * The root needs its own case: naive concatenation gives "/de/", which is a
 * second URL for the same page and exactly the kind of duplicate that ends up
 * in Search Console next to the canonical one.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * The `alternates` block for one language version of a page.
 *
 * hreflang has to be reciprocal to be believed: each version points at all of
 * them including itself, and x-default names the one to serve when no language
 * matches. Emitting it from one helper is the only way it stays that way.
 *
 * `available` is for the pages that are not translated everywhere. Only eight
 * pages carry 86% of this site's impressions and only those are being
 * translated, so a glossary term that exists in German and not in Italian must
 * not claim an Italian version: a hreflang pointing at a 404 is worse than no
 * hreflang, because it invites the crawler to fetch a page that is not there.
 * Defaults to every language.
 */
export function alternatesFor(
  locale: Locale,
  path: string,
  available: readonly Locale[] = LOCALES
) {
  // A page in one language has nothing to declare. A self-referencing
  // hreflang with a single entry is not wrong, it is just noise in the head.
  if (available.length < 2) {
    return { canonical: localePath(locale, path) };
  }

  const languages: Record<string, string> = {};
  for (const l of available) {
    languages[LOCALE_TAGS[l]] = localePath(l, path);
  }
  // English is the x-default whenever it exists, which on this site is always:
  // there is no page that has a translation and no English original.
  if (available.includes(DEFAULT_LOCALE)) {
    languages["x-default"] = localePath(DEFAULT_LOCALE, path);
  }

  return {
    canonical: localePath(locale, path),
    languages,
  };
}

/**
 * The paths that exist in every translated language.
 *
 * This is the guard against the mistake that is very easy to make once pages
 * start carrying a locale prefix: writing localePath(locale, "/assessment")
 * inside a German page and linking every reader to a URL that 404s, because
 * the assessment was never translated. Use `linkPath` for any link whose
 * target might not be translated; it prefixes only when the page is here.
 *
 * Sector pages and glossary terms are deliberately absent: they are
 * translated per slug, so their own modules decide, and a link to one of them
 * should go through the bare path.
 */
const FULLY_TRANSLATED_PATHS: readonly string[] = [
  "/",
  "/eidas-2-timeline",
  "/guide/eidas-2-compliance",
  "/faq",
];

/** The href for a link from a page in `locale`, English when untranslated. */
export function linkPath(locale: Locale, path: string): string {
  return FULLY_TRANSLATED_PATHS.includes(path) ? localePath(locale, path) : path;
}

/**
 * Every path that exists in a translated language.
 *
 * Written out rather than derived, because the header is a client component
 * and importing the translation modules to read their keys would ship every
 * German, Italian and Spanish sentence on the site into the browser bundle of
 * every page. Strings only here.
 *
 * The obvious risk is drift. sitemap.ts asserts this list against the actual
 * translation modules at build time, so a page added there and forgotten here
 * fails the build instead of quietly producing a switcher link to a 404.
 */
const PER_SLUG_TRANSLATED = [
  "/industries/financial-services",
  "/industries/healthcare",
  "/glossary/pid",
  "/glossary/etimestamp",
] as const;

export const TRANSLATED_ROUTES: readonly string[] = [
  ...FULLY_TRANSLATED_PATHS,
  ...PER_SLUG_TRANSLATED,
];

/** The English path of a URL, whatever language it is currently in. */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (!isTranslatedLocale(first)) return pathname === "" ? "/" : pathname;
  const bare = "/" + rest.join("/");
  return bare === "/" ? "/" : bare.replace(/\/$/, "");
}

/**
 * Where the language switcher should send someone.
 *
 * On a page that has the target language, the same page. On one that does not,
 * that language's homepage: a switcher that silently does nothing, or worse
 * points at a 404, is more annoying than one that admits this page has no
 * German version and offers the German site instead.
 */
export function switchLocale(target: Locale, pathname: string): string {
  const bare = stripLocale(pathname);
  if (target === DEFAULT_LOCALE) return bare;
  return TRANSLATED_ROUTES.includes(bare) ? localePath(target, bare) : localePath(target, "/");
}

/** True when `pathname` exists in the target language, for the switcher. */
export function hasTranslation(pathname: string): boolean {
  return TRANSLATED_ROUTES.includes(stripLocale(pathname));
}

/**
 * The language a URL is in, read from its first path segment.
 *
 * For the header, which is a client component in the root layout and so has
 * no route params to read. Without this, a German reader who uses the nav
 * instead of a link in the page body is dropped back into English on pages
 * that do have a German version.
 */
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1] ?? "";
  return isTranslatedLocale(first) ? first : DEFAULT_LOCALE;
}
