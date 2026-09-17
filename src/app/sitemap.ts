import { SITE_URL } from "@/lib/site";
import { MetadataRoute } from 'next'
import { glossaryTerms } from '@/lib/glossary-data'
import { roles } from '@/lib/roles-data'
import { industries } from '@/lib/industries-data'
import { sortedPosts } from '@/lib/blog-data'
import { LOCALES, LOCALE_TAGS, TRANSLATED_LOCALES, TRANSLATED_ROUTES, localePath, type Locale } from '@/lib/i18n/config'
import { industryLocales, translatedIndustrySlugs } from '@/lib/i18n/industries'
import { termLocales, translatedTermSlugs } from '@/lib/i18n/glossary'

const BASE_URL = SITE_URL

// Use a fixed date that only changes when content actually changes.
// Using new Date() makes every build emit new <lastmod>, triggering
// unnecessary re-crawling and "Discovered - currently not indexed" issues.
const LAST_UPDATED = '2026-02-23'

// Pages that exist in German, Italian and Spanish as well as English. Each
// entry, in every language, must list all of them: a one-way hreflang is not
// believed. Adding a page to this array is all it takes, which is the point.
const TRANSLATED_PATHS = ['/', '/eidas-2-timeline', '/guide/eidas-2-compliance', '/faq']

function alternateLanguages(path: string, available: readonly Locale[] = LOCALES) {
  const languages: Record<string, string> = {}
  for (const locale of available) {
    languages[LOCALE_TAGS[locale]] = `${BASE_URL}${localePath(locale, path)}`
  }
  return { languages }
}

/**
 * Keeps config's TRANSLATED_ROUTES honest.
 *
 * That list is what the language switcher in the header reads, and it has to
 * be plain strings because the header is a client component. So it is
 * hand-written, and this is the thing that stops it drifting: a translated
 * page added to industries.ts or glossary.ts and forgotten in config fails the
 * build here, rather than shipping a switcher link to a 404.
 *
 * This file already imports every translation module to build the sitemap, so
 * the check is free and it runs on every build.
 */
function assertRoutesMatchTranslations() {
  const actual: string[] = ['/', '/eidas-2-timeline', '/guide/eidas-2-compliance', '/faq']
  for (const locale of TRANSLATED_LOCALES) {
    for (const slug of translatedIndustrySlugs(locale)) actual.push(`/industries/${slug}`)
    for (const slug of translatedTermSlugs(locale)) actual.push(`/glossary/${slug}`)
  }

  const missing = actual.filter((p) => !TRANSLATED_ROUTES.includes(p))
  const stale = TRANSLATED_ROUTES.filter((p) => actual.indexOf(p) === -1)

  if (missing.length || stale.length) {
    throw new Error(
      'TRANSLATED_ROUTES in src/lib/i18n/config.ts is out of date. ' +
        (missing.length ? `Add: ${missing.filter((p, i) => missing.indexOf(p) === i).join(', ')}. ` : '') +
        (stale.length ? `Remove: ${stale.join(', ')}.` : '')
    )
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  assertRoutesMatchTranslations()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: sortedPosts[0]?.date ?? LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: alternateLanguages('/'),
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/assessment`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guide/eidas-2-compliance`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: alternateLanguages('/guide/eidas-2-compliance'),
    },
    {
      url: `${BASE_URL}/guide/eudiw-preparation`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: alternateLanguages('/faq'),
    },
    {
      url: `${BASE_URL}/glossary`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/eidas-2-timeline`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: alternateLanguages('/eidas-2-timeline'),
    },
    {
      url: `${BASE_URL}/eidas-2-compliance-checklist`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/roles`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/guide`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Exclude /terms and /privacy — thin legal pages that waste crawl budget

  const glossaryPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => {
    const path = `/glossary/${term.slug}`
    const locales = termLocales(term.slug)
    return {
      url: `${BASE_URL}${path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      ...(locales.length > 1 ? { alternates: alternateLanguages(path, locales) } : {}),
    }
  })

  const translatedTermPages: MetadataRoute.Sitemap = TRANSLATED_LOCALES.flatMap((locale) =>
    translatedTermSlugs(locale).map((slug) => ({
      url: `${BASE_URL}${localePath(locale, `/glossary/${slug}`)}`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
      alternates: alternateLanguages(`/glossary/${slug}`, termLocales(slug)),
    }))
  )

  const rolePages: MetadataRoute.Sitemap = roles.map((role) => ({
    url: `${BASE_URL}/roles/${role.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Two of the six sectors are translated, so hreflang is emitted per slug
  // rather than for the set: claiming a German version of a sector that has
  // none would point the crawler at a 404.
  const industryPages: MetadataRoute.Sitemap = industries.flatMap((industry) => {
    const path = `/industries/${industry.slug}`
    const locales = industryLocales(industry.slug)
    const alternates = locales.length > 1 ? { alternates: alternateLanguages(path, locales) } : {}
    return [{
      url: `${BASE_URL}${path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      ...alternates,
    }]
  })

  const translatedIndustryPages: MetadataRoute.Sitemap = TRANSLATED_LOCALES.flatMap((locale) =>
    translatedIndustrySlugs(locale).map((slug) => ({
      url: `${BASE_URL}${localePath(locale, `/industries/${slug}`)}`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: alternateLanguages(`/industries/${slug}`, industryLocales(slug)),
    }))
  )

  // Each post carries its own date, so lastmod is real here rather than the
  // site-wide constant.
  const blogPages: MetadataRoute.Sitemap = sortedPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  // The translations are listed too, each with the same reciprocal set. A
  // translated URL that only appears as an alternate of the English one tends
  // to be treated as a duplicate rather than as a page of its own.
  const translatedPages: MetadataRoute.Sitemap = TRANSLATED_PATHS.flatMap((path) =>
    TRANSLATED_LOCALES.map((locale) => ({
      url: `${BASE_URL}${localePath(locale, path)}`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: alternateLanguages(path),
    }))
  )

  return [
    ...staticPages,
    ...translatedPages,
    ...blogPages,
    ...glossaryPages,
    ...translatedTermPages,
    ...rolePages,
    ...industryPages,
    ...translatedIndustryPages,
  ]
}
