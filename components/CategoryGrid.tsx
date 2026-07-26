import Link from "next/link";
import { categories, getCalculatorsByCategory } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function CategoryGrid() {
  return (
    <section id="categories" className="container py-20">
      <SectionHeading
        eyebrow="Browse by Category"
        title="Find the right calculator, instantly"
        subtitle="Nine categories covering everything from your mortgage to your macros."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {categories.map((cat) => {
          const count = getCalculatorsByCategory(cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="card-surface card-hover group relative overflow-hidden p-6"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} shadow-lift`}>
                <cat.icon className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="mt-4 flex items-center justify-between text-lg font-semibold text-ink-900">
                {cat.name}
                <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
              </h3>
              <p className="mt-1.5 text-sm text-ink-400">{cat.description}</p>
              <p className="mt-4 text-xs font-semibold text-brand-500">{count} calculators</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : ""}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-ink-400">{subtitle}</p>}
    </div>
  );
}
