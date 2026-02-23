"use client";

import { useState, useCallback } from "react";
import { Check, Link2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  variant?: "inline" | "compact";
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function ShareButton({ title, variant = "inline" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => typeof window !== "undefined" ? window.location.href : "";

  const copyLink = useCallback(async () => {
    const url = getUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const shareToX = () => {
    const url = getUrl();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer,width=600,height=400"
    );
  };

  const shareToLinkedIn = () => {
    const url = getUrl();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer,width=600,height=600"
    );
  };

  const shareToFacebook = () => {
    const url = getUrl();
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer,width=600,height=400"
    );
  };

  const shareViaEmail = () => {
    const url = getUrl();
    window.open(
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\n${url}`)}`,
      "_self"
    );
  };

  const buttonBase = "inline-flex items-center justify-center w-9 h-9 transition-colors hover:bg-gray-100";
  const buttonStyle: React.CSSProperties = { borderRadius: "2px", border: "1px solid #e8e8e8", color: "#62718d" };

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest mr-1" style={{ color: "#62718d" }}>Share</span>
        <button type="button" onClick={shareToX} className={buttonBase} style={buttonStyle} aria-label="Share on X" title="Share on X">
          <XIcon className="h-3.5 w-3.5" />
        </button>
        <button type="button" onClick={shareToLinkedIn} className={buttonBase} style={buttonStyle} aria-label="Share on LinkedIn" title="Share on LinkedIn">
          <LinkedInIcon className="h-3.5 w-3.5" />
        </button>
        <button type="button" onClick={shareToFacebook} className={buttonBase} style={buttonStyle} aria-label="Share on Facebook" title="Share on Facebook">
          <FacebookIcon className="h-3.5 w-3.5" />
        </button>
        <button type="button" onClick={shareViaEmail} className={buttonBase} style={buttonStyle} aria-label="Share via Email" title="Share via Email">
          <EmailIcon className="h-3.5 w-3.5" />
        </button>
        <button type="button" onClick={copyLink} className={buttonBase} style={buttonStyle} aria-label={copied ? "Link copied!" : "Copy link"} title={copied ? "Link copied!" : "Copy link"}>
          {copied ? (
            <Check className="h-3.5 w-3.5" style={{ color: "#22c55e" }} />
          ) : (
            <Link2 className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#62718d" }}>Share this page</p>
      <div className="flex items-center gap-2">
        <button type="button" onClick={shareToX} className={buttonBase} style={buttonStyle} aria-label="Share on X" title="Share on X">
          <XIcon className="h-4 w-4" />
        </button>
        <button type="button" onClick={shareToLinkedIn} className={buttonBase} style={buttonStyle} aria-label="Share on LinkedIn" title="Share on LinkedIn">
          <LinkedInIcon className="h-4 w-4" />
        </button>
        <button type="button" onClick={shareToFacebook} className={buttonBase} style={buttonStyle} aria-label="Share on Facebook" title="Share on Facebook">
          <FacebookIcon className="h-4 w-4" />
        </button>
        <button type="button" onClick={shareViaEmail} className={buttonBase} style={buttonStyle} aria-label="Share via Email" title="Share via Email">
          <EmailIcon className="h-4 w-4" />
        </button>
        <button type="button" onClick={copyLink} className={buttonBase} style={buttonStyle} aria-label={copied ? "Link copied!" : "Copy link"} title={copied ? "Link copied!" : "Copy link"}>
          {copied ? (
            <Check className="h-4 w-4" style={{ color: "#22c55e" }} />
          ) : (
            <Link2 className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
