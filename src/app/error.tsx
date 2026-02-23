"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-slate-500 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
