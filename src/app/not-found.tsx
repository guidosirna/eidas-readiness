import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Page not found
        </h2>
        <p className="text-slate-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
