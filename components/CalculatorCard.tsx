import Link from "next/link";
import { ArrowRight, Calculator as CalcIcon } from "lucide-react";
import type { CalcMeta } from "@/lib/data";
import { getCategory } from "@/lib/data";

export default function CalculatorCard({ calc }: { calc: CalcMeta }) {
  const category = getCategory(calc.category);

  return (
    <div className="card-surface card-hover group flex flex-col p-6">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
          <CalcIcon className="h-5 w-5" />
        </div>
        {category && <span className="badge-category">{category.name}</span>}
      </div>

      <h3 className="mt-4 text-base font-semibold text-ink-900">{calc.name}</h3>
      <p className="mt-1.5 flex-1 text-sm text-ink-400">{calc.description}</p>

      <Link
        href={`/calculators/${calc.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
      >
        Open Calculator <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
