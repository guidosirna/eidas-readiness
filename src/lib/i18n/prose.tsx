import Link from "next/link";

/**
 * Renders a translated paragraph that contains inline markup.
 *
 * The prose used to live in the JSX with <Link> elements spliced through it,
 * which is exactly why it could not be translated: the sentence and its markup
 * were the same object. Written as `[text](/path)` in the content module, a
 * translator can move the link anywhere the grammar needs it, and German word
 * order stops being a code change.
 *
 * Deliberately not a markdown parser. It handles three things, because that is
 * what the prose on this site contains:
 *
 *   [text](/internal)          an internal link
 *   [text](https://external)   opens in a new tab, rel noopener
 *   **text**                   bold, for the regulation numbers
 */
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

/**
 * Two link looks exist on this site and both are load-bearing. The guide has
 * underlined links inside long prose, where an unmarked colour change is easy
 * to miss at that line length; everywhere else they are plain blue. Passing
 * the style in keeps the translated pages looking like the ones they replace.
 */
const LINK_STYLE = {
  plain: { className: "font-medium hover:opacity-70", style: { color: "#0033ff" } },
  underline: {
    className: "text-blue-600 underline decoration-blue-300 hover:decoration-blue-600",
    style: undefined as React.CSSProperties | undefined,
  },
} as const;

export function prose(
  text: string,
  variant: keyof typeof LINK_STYLE = "plain"
): React.ReactNode[] {
  const link = LINK_STYLE[variant];
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;

  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));

    if (m[3] !== undefined) {
      out.push(
        <strong key={`b-${m.index}`} className="font-semibold text-slate-900">
          {m[3]}
        </strong>
      );
    } else {
      const [, label, href] = m;
      const external = /^https?:\/\//.test(href);
      out.push(
        external ? (
          <a
            key={`${href}-${m.index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={link.className}
            style={link.style}
          >
            {label}
          </a>
        ) : (
          <Link key={`${href}-${m.index}`} href={href} className={link.className} style={link.style}>
            {label}
          </Link>
        )
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
