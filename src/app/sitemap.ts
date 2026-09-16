import { SITE_URL } from "@/lib/site";
import { MetadataRoute } from 'next'
import { glossaryTerms } from '@/lib/glossary-data'
import { roles } from '@/lib/roles-data'
import { industries } from '@/lib/industries-data'
import { sortedPosts } from '@/lib/blog-data'
import { LOCALES, LOCALE_TAGS, TRANSLATED_LOCALES, localePath } from '@/lib/i18n/config'

const BASE_URL = SITE_URL

// Use a fixed date that only changes when content actually changes.
// Using new Date() makes every build emit new <lastmod>, triggering
// unnecessary re-crawling and "Discovered - currently not indexed" issues.
const LAST_UPDATED = '2026-02-23'

// Pages that exist in German, Italian and Spanish as well as English. Each
// entry, in every language, must list all of them: a one-way hreflang is not
// believed. Adding a page to this array is all it takes, which is the point.
const TRANSLATED_PATHS = ['/eidas-2-timeline']

function alternateLanguages(path: string) {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) {
    languages[LOCALE_TAGS[locale]] = `${BASE_URL}${localePath(locale, path)}`
  }
  return { languages }
}

export default function sitemap(): MetadataRoute.Sitemap {
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
      url: `${BASE_URL}/assessment/quick-check`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guide/eidas-2-compliance`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
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
      url: `${BASE_URL}/eidas-timestamp`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guide`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Exclude /terms and /privacy — thin legal pages that waste crawl budget

  const glossaryPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${BASE_URL}/glossary/${term.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const rolePages: MetadataRoute.Sitemap = roles.map((role) => ({
    url: `${BASE_URL}/roles/${role.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

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

  return [...staticPages, ...translatedPages, ...blogPages, ...glossaryPages, ...rolePages, ...industryPages]
}
