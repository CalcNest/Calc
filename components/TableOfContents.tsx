"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

export type TocItem = { id: string; label: string };

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="card-surface sticky top-24 p-5">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
        <List className="h-3.5 w-3.5" /> On this page
      </p>
      <ul className="mt-3 space-y-1 border-l border-ink-100">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block border-l-2 py-1.5 pl-4 text-sm transition-colors -ml-px ${
                active === item.id
                  ? "border-brand-500 font-semibold text-brand-600"
                  : "border-transparent text-ink-400 hover:text-brand-600"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
