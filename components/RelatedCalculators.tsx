import type { CalcMeta } from "@/lib/data";
import CalculatorCard from "@/components/CalculatorCard";

export default function RelatedCalculators({ items }: { items: CalcMeta[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h2 className="text-2xl font-bold text-ink-900">Related Calculators</h2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((calc) => (
          <CalculatorCard key={calc.slug} calc={calc} />
        ))}
      </div>
    </div>
  );
}
