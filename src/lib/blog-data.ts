/**
 * Blog posts, as data rather than a page per post.
 *
 * Every other body of content on this site lives in a file like this one
 * (glossary-data, roles-data, industries-data) and the guides are the
 * exception: hand-written TSX, which is why there are two of them and no
 * third. A blog only works on a cadence, and a cadence only survives if
 * publishing means adding an object here. The sitemap is generated from this
 * array too, so a new post is indexable without anyone remembering.
 *
 * `series` is what makes the monthly regulatory brief a series inside the blog
 * instead of a separate section with its own routes and its own index to keep
 * alive.
 */
export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  /** A single pulled-out line. One per section at most, or it stops landing. */
  callout?: { label: string; text: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Search title, when it should differ from the one on the page. */
  metaTitle?: string;
  description: string;
  /** ISO date. Drives ordering, the visible date and the sitemap lastmod. */
  date: string;
  series?: string;
  standfirst: string;
  sections: BlogSection[];
  /**
   * Where each claim comes from. On a compliance site this is not decoration:
   * a date a reader cannot check is a date they have to verify themselves,
   * and then they may as well have started somewhere else.
   */
  sources?: { label: string; href: string }[];
}

export const REGULATORY_BRIEF = "Regulatory brief";

export const posts: BlogPost[] = [
  {
    slug: "wallet-deadline-24-december-2026",
    title: "The wallet deadline is 24 December 2026",
    metaTitle: "When Is the EUDI Wallet Deadline? 24 December 2026",
    description:
      "Most summaries put the EU Digital Identity Wallet deadline somewhere in 2026. The date follows from Article 5a(1) and the implementing acts, and it is 24 December 2026.",
    date: "2026-09-15",
    series: REGULATORY_BRIEF,
    // No countdown anywhere in the prose: a number written here is wrong the
    // next morning and nobody comes back for it. The live counter on the
    // timeline is where a day count belongs.
    standfirst:
      "Most summaries say member states must offer a wallet “sometime in 2026”. The regulation is more precise than that: the date follows from Article 5a(1) and the implementing acts, and it does not move.",
    sections: [
      {
        id: "where-the-date-comes-from",
        heading: "Where the date comes from",
        paragraphs: [
          "Article 5a(1) of Regulation (EU) 2024/1183 does not name a date. It gives member states twenty-four months from the entry into force of the implementing acts adopted under that article, which means the deadline is a calculation rather than a line you can look up.",
          "The first of those implementing acts were adopted on 28 November 2024: Implementing Regulations (EU) 2024/2977, 2024/2978, 2024/2979, 2024/2981 and 2024/2982, covering person identification data and attestations, wallet certification, and relying party registration. They were published in the Official Journal on 4 December 2024 and, following the usual formula, entered into force on the twentieth day after publication.",
          "That puts entry into force at 24 December 2024, and twenty-four months from there at 24 December 2026. Not the first quarter, not the end of the year in the loose sense, and not a date that slides if a later implementing act is adopted, because the clock started with the first ones.",
        ],
        callout: {
          label: "The date",
          text: "24 December 2026. Twenty-four months from 24 December 2024, when the first implementing acts entered into force.",
        },
      },
      {
        id: "what-the-obligation-actually-is",
        heading: "What the obligation actually is",
        paragraphs: [
          "The obligation on that date falls on member states, not on private organisations. Each one must offer at least one European Digital Identity Wallet to its citizens and residents, backed by a notified electronic identification scheme and interoperable with the wallets of the other twenty-six.",
          "This is worth being precise about, because it is routinely reported as the date every business has to accept the wallet. It is not. It is the date the wallet has to exist and be available to a citizen who asks for it. The acceptance obligations on regulated sectors follow, and they follow at their own pace.",
          "For an organisation planning work, the distinction matters in one direction only. The wallet becoming generally available is what turns every acceptance requirement from a specification exercise into something a real user can walk in with, and that is why the date belongs on a roadmap even for organisations whose own deadline is later.",
        ],
      },
      {
        id: "where-to-start",
        heading: "Where to start",
        paragraphs: [
          "Relying party registration is the part most often left until the technical work is finished, and it is the part that involves another organisation's timetable. Registration is with the national supervisory body, declaring which attributes you intend to request, and it is not something to discover the shape of in the week you want to go live.",
          "The other piece worth starting early is the credential formats. A verifier that handles only one of SD-JWT and mdoc handles only some of the wallets it will meet, and finding that out against a reference wallet is considerably cheaper than finding it out against a citizen's.",
        ],
      },
    ],
    sources: [
      {
        label: "Regulation (EU) 2024/1183, Article 5a",
        href: "https://eur-lex.europa.eu/eli/reg/2024/1183/oj",
      },
      {
        label: "Implementing Regulation (EU) 2024/2977, Official Journal 4 December 2024",
        href: "https://eur-lex.europa.eu/eli/reg_impl/2024/2977/oj",
      },
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
