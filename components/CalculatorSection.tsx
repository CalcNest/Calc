import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CalcMeta } from "@/lib/data";
import CalculatorCard from "@/components/CalculatorCard";
import { SectionHeading } from "@/components/CategoryGrid";

export default function CalculatorSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  tone = "white",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: CalcMeta[];
  tone?: "white" | "tint";
}) {
  return (
    <section id={id} className={tone === "tint" ? "bg-ink-50/60 py-20" : "py-20"}>
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} center={false} />
          <Link href="/#categories" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((calc) => (
            <CalculatorCard key={calc.slug} calc={calc} />
          ))}
        </div>
      </div>
    </section>
  );
}
