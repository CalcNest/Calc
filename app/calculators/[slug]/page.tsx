import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Wrench } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorCard from "@/components/AuthorCard";
import RelatedCalculators from "@/components/RelatedCalculators";
import { calculators, getCalculator, getCategory, getRelatedCalculators, siteConfig } from "@/lib/data";

export function generateStaticParams() {
  // Only pre-render the calculators that don't already have a dedicated live page.
  return calculators.filter((c) => !c.live).map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) return {};
  const title = `${calc.name} — Free Online Calculator`;
  return {
    title,
    description: calc.description,
    alternates: { canonical: `/calculators/${calc.slug}` },
    openGraph: { title, description: calc.description, url: `${siteConfig.url}/calculators/${calc.slug}` },
  };
}

export default async function CalculatorFallbackPage({ params }: Props) {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) notFound();

  const category = getCategory(calc.category);
  const related = getRelatedCalculators(calc.slug);

  return (
    <div className="bg-white">
      <div className="border-b border-ink-100 bg-ink-50/40 py-6">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: category?.name ?? "Calculators", href: `/category/${calc.category}` },
              { label: calc.name, href: `/calculators/${calc.slug}` },
            ]}
          />
        </div>
      </div>

      <div className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient shadow-lift">
            <Wrench className="h-6 w-6 text-white" />
          </div>
          <h1 className="mt-5 text-3xl font-bold text-ink-900">{calc.name}</h1>
          <p className="mt-3 text-ink-400">{calc.description}</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600">
            This calculator's interactive tool is being finalized — full formula, steps and FAQ coming soon.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <AuthorCard updated="July 1, 2026" />
        </div>

        <div className="mt-16">
          <RelatedCalculators items={related} />
        </div>
      </div>
    </div>
  );
}
