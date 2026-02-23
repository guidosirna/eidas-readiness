"use client";

import { useState, useCallback } from "react";
import { Share2, Check, Link2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  variant?: "icon" | "button";
}

export default function ShareButton({ title, variant = "button" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const url = window.location.href;

    // Try native share API first (mobile, some desktop)
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User cancelled or API failed — fall through to clipboard
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Final fallback
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [title]);

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center justify-center w-9 h-9 transition-colors hover:bg-gray-100"
        style={{ borderRadius: "2px", border: "1px solid #e8e8e8" }}
        aria-label="Share this page"
        title={copied ? "Link copied!" : "Share this page"}
      >
        {copied ? (
          <Check className="h-4 w-4" style={{ color: "#22c55e" }} />
        ) : (
          <Share2 className="h-4 w-4" style={{ color: "#62718d" }} />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100"
      style={{ borderRadius: "2px", border: "1px solid #e8e8e8", color: "#62718d" }}
      aria-label="Share this page"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" style={{ color: "#22c55e" }} />
          <span style={{ color: "#22c55e" }}>Copied!</span>
        </>
      ) : (
        <>
          <Link2 className="h-3.5 w-3.5" />
          Share
        </>
      )}
    </button>
  );
}
