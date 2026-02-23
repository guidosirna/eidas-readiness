import { ArrowRight } from "lucide-react";

interface CtaBlockProps {
  headline: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "primary" | "secondary" | "compact";
}

export default function CtaBlock({
  headline,
  description,
  buttonText = "eIDAS Quick Check",
  buttonHref = "/assessment",
  variant = "primary",
}: CtaBlockProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
        <div className="min-w-0">
          <p className="text-base font-semibold truncate" style={{ color: "#010f62" }}>{headline}</p>
          <p className="text-sm truncate" style={{ color: "#62718d" }}>{description}</p>
        </div>
        <a href={buttonHref} className="shrink-0 btn-primary">
          {buttonText} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="pattern-pixels px-8 py-14 sm:px-14 sm:py-16 text-center" style={{ backgroundColor: "#010f62", borderRadius: "2px" }}>
      <h2 className="relative text-2xl sm:text-3xl font-semibold text-white">{headline}</h2>
      <p className="relative mt-4 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">{description}</p>
      <div className="relative mt-8">
        <a
          href={buttonHref}
          className="inline-flex items-center gap-2 bg-white font-semibold transition-colors hover:bg-gray-100"
          style={{ color: "#010f62", padding: "12px 28px", borderRadius: "2px", fontSize: "16px" }}
        >
          {buttonText} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
