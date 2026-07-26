import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorCard from "@/components/CalculatorCard";
import { categories, getCalculatorsByCategory, getCategory, siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const title = `${category.name} Calculators — Free & Accurate`;
  const description = `Browse all free ${category.name.toLowerCase()} calculators on CalcNest. ${category.description}.`;
  return {
    title,
    description,
    alternates: { canonical: `/category/${category.slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/category/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getCalculatorsByCategory(category.slug);
  const Icon = category.icon;

  return (
    <div className="bg-white">
      <div className="border-b border-ink-100 bg-ink-50/40 py-6">
        <div className="container">
          <Breadcrumbs items={[{ label: category.name, href: `/category/${category.slug}` }]} />
        </div>
      </div>

      <div className="container py-12">
        <div className="flex items-center gap-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lift`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">{category.name} Calculators</h1>
            <p className="mt-1 text-ink-400">{category.description} — {items.length} calculators</p>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((calc) => (
              <CalculatorCard key={calc.slug} calc={calc} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-ink-400">New calculators for this category are coming soon.</p>
        )}
      </div>
    </div>
  );
}
