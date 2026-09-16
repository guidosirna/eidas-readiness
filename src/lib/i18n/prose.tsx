import Link from "next/link";

/**
 * Renders a translated paragraph that contains inline links.
 *
 * The prose used to live in the JSX with <Link> elements spliced through it,
 * which is exactly why it could not be translated: the sentence and its markup
 * were the same object. Written as `[text](/path)` in the content module, a
 * translator can move the link anywhere the grammar needs it, and German word
 * order stops being a code change.
 *
 * Deliberately not a markdown parser. It handles links and nothing else,
 * because links are the only markup the prose has.
 */
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

export function prose(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK.lastIndex = 0;

  while ((m = LINK.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <Link
        key={`${m[2]}-${m.index}`}
        href={m[2]}
        className="font-medium hover:opacity-70"
        style={{ color: "#0033ff" }}
      >
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
