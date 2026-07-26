"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="divide-y divide-ink-100 rounded-card border border-ink-100 bg-white">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={open}
              >
                <span className="text-sm font-semibold text-ink-800">{item.question}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-brand-500 transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <div className="px-6 pb-4 text-sm text-ink-400 animate-fade-in">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
