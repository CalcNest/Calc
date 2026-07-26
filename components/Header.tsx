"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown, Calculator } from "lucide-react";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel">
      <div className="container flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient shadow-lift">
            <Calculator className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="text-xl font-bold text-ink-900">
            Calc<span className="text-brand-500">Nest</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
              Categories <ChevronDown className="h-4 w-4" />
            </button>
            {categoriesOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-3 gap-1 rounded-card border border-ink-100 bg-white p-3 shadow-lift">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="flex items-start gap-2 rounded-xl px-3 py-2.5 hover:bg-brand-50 transition-colors"
                    >
                      <cat.icon className="h-4 w-4 mt-0.5 text-brand-500 shrink-0" />
                      <span>
                        <span className="block text-sm font-semibold text-ink-800">{cat.name}</span>
                        <span className="block text-xs text-ink-400">{cat.description}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/#featured" className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
            Featured
          </Link>
          <Link href="/blog" className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
            Blog
          </Link>
          <Link href="/#about" className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            aria-label="Search calculators"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 text-ink-600 hover:border-brand-300 hover:text-brand-600 transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link href="/#categories">
            <Button variant="primary" size="md">Browse Calculators</Button>
          </Link>
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white px-5 py-4 animate-slide-up">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-ink-100 px-4 py-2.5">
            <Search className="h-4 w-4 text-ink-400" />
            <input
              type="text"
              placeholder="Search calculators..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-ink-400"
            />
          </div>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-ink-400">Categories</p>
          <div className="grid grid-cols-2 gap-1 mb-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-ink-700 hover:bg-brand-50"
              >
                <cat.icon className="h-4 w-4 text-brand-500" />
                {cat.name}
              </Link>
            ))}
          </div>
          <Link href="/blog" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-brand-50">
            Blog
          </Link>
          <Link href="/#featured" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-brand-50">
            Featured Calculators
          </Link>
          <div className="mt-3">
            <Link href="/#categories" onClick={() => setOpen(false)}>
              <Button variant="primary" className="w-full">Browse Calculators</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
