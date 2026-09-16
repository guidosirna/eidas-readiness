/**
 * The one origin every outward-facing URL is built from: canonical tags,
 * og:url, JSON-LD @id/url, the sitemap and the robots.txt Sitemap line.
 *
 * It is the apex, without www, because that is the form Netlify serves: the
 * site's custom domain is `eidasreadiness.com` with no aliases, so www 301s
 * here. Every one of those signals used to be hardcoded as `www.` in fifteen
 * files, which pointed all of them at a URL that redirects — the exact failure
 * the SEO pillar's first rule is about. Import this instead of writing the
 * origin again.
 */
export const SITE_URL = "https://eidasreadiness.com";
