"use client";

import { useState } from "react";
import { Copy, Check, Printer, Share2 } from "lucide-react";

export default function ActionBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(typeof window !== "undefined" ? window.location.href : "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      handleCopy();
    }
  }

  return (
    <div className="no-print flex items-center gap-2">
      <button
        onClick={handleCopy}
        className="flex h-9 items-center gap-1.5 rounded-full border border-ink-100 px-3.5 text-xs font-medium text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600"
        aria-label="Copy link"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-brand-500" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy Link"}
      </button>
      <button
        onClick={() => window.print()}
        className="flex h-9 items-center gap-1.5 rounded-full border border-ink-100 px-3.5 text-xs font-medium text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600"
        aria-label="Print this page"
      >
        <Printer className="h-3.5 w-3.5" /> Print
      </button>
      <button
        onClick={handleShare}
        className="flex h-9 items-center gap-1.5 rounded-full border border-ink-100 px-3.5 text-xs font-medium text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600"
        aria-label="Share this calculator"
      >
        <Share2 className="h-3.5 w-3.5" /> Share
      </button>
    </div>
  );
}
