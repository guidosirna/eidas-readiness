import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-display font-bold mb-4" style={{ color: "#0033ff" }}>404</p>
        <h1 className="text-2xl font-display font-bold mb-3" style={{ color: "#010f62" }}>
          Page not found
        </h1>
        <p className="text-base mb-8" style={{ color: "#62718d" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          Back to home <ArrowUpRight className="h-4 w-4 arrow-animate" />
        </Link>
      </div>
    </div>
  );
}
