"use client";

import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { calculators } from "@/lib/data";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return calculators.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 rounded-full border border-ink-100 bg-white px-5 py-3.5 shadow-soft transition-all focus-within:border-brand-300 focus-within:shadow-lift">
        <Search className="h-5 w-5 shrink-0 text-brand-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search 300+ calculators (e.g. BMI, Mortgage, ROI)"
          aria-label="Search calculators"
          className="w-full bg-transparent text-sm text-ink-800 outline-none placeholder:text-ink-400"
        />
      </div>

      {focused && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-ink-100 bg-white text-left shadow-lift animate-fade-in">
          {results.map((r) => (
            <Link
              key={r.slug}
              href={`/calculators/${r.slug}`}
              className="flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-brand-50"
            >
              <span>
                <span className="font-medium text-ink-800">{r.name}</span>
                <span className="ml-2 text-xs text-ink-400 capitalize">{r.category}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-brand-500" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
