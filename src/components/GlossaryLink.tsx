import Link from "next/link";
import { getTermBySlug } from "@/lib/glossary-data";

interface GlossaryLinkProps {
  term: string;
  children?: React.ReactNode;
}

export default function GlossaryLink({ term, children }: GlossaryLinkProps) {
  const glossaryTerm = getTermBySlug(term);

  if (!glossaryTerm) {
    return <>{children ?? term}</>;
  }

  return (
    <Link
      href={`/glossary/${term}`}
      className="text-blue-600 underline decoration-dashed underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-solid"
    >
      {children ?? glossaryTerm.term}
    </Link>
  );
}
