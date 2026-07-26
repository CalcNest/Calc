import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import ActionBar from "@/components/ActionBar";
import AuthorCard from "@/components/AuthorCard";
import Faq from "@/components/Faq";
import RelatedCalculators from "@/components/RelatedCalculators";
import BmiCalculator from "@/components/calculators/BmiCalculator";
import { getRelatedCalculators, siteConfig } from "@/lib/data";

const title = "BMI Calculator — Free Body Mass Index Calculator";
const description =
  "Calculate your Body Mass Index (BMI) instantly using imperial or metric units. Understand your weight category and what BMI does and doesn't measure.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/calculators/bmi-calculator" },
  openGraph: { title, description, url: `${siteConfig.url}/calculators/bmi-calculator` },
};

const toc = [
  { id: "calculator", label: "Calculator" },
  { id: "formula", label: "Formula" },
  { id: "steps", label: "Step-by-Step" },
  { id: "examples", label: "Examples" },
  { id: "categories", label: "BMI Categories" },
  { id: "faq", label: "FAQs" },
  { id: "related", label: "Related Calculators" },
];

const faqItems = [
  { question: "What is a healthy BMI range?", answer: "For most adults, a BMI between 18.5 and 24.9 is considered a healthy weight range, according to CDC and WHO guidelines." },
  { question: "Is BMI accurate for everyone?", answer: "BMI is a useful screening tool but doesn't distinguish muscle from fat. It can overestimate body fat in athletes and underestimate it in older adults who've lost muscle mass." },
  { question: "How is BMI different for children?", answer: "Children and teens are assessed using age- and sex-specific BMI percentiles rather than the fixed adult categories, since body composition changes as kids grow." },
  { question: "Should I use BMI alone to judge my health?", answer: "No. Waist circumference, body composition, activity level, and lab markers give a fuller picture. BMI is best used as a starting point, then discussed with a healthcare provider." },
];

export default function BmiCalculatorPage() {
  const related = getRelatedCalculators("bmi-calculator");

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BMI Calculator",
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: `${siteConfig.url}/calculators/bmi-calculator`,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Organization", name: "CalcNest Editorial Team" },
    publisher: { "@type": "Organization", name: "CalcNest" },
    datePublished: "2025-01-10",
    dateModified: "2026-07-01",
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="border-b border-ink-100 bg-ink-50/40 py-6">
        <div className="container">
          <Breadcrumbs items={[{ label: "Health", href: "/category/health" }, { label: "BMI Calculator", href: "/calculators/bmi-calculator" }]} />
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="badge-category">Health</span>
            <h1 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">BMI Calculator</h1>
            <p className="mt-2 max-w-xl text-ink-400">
              Calculate your Body Mass Index in seconds and see where it falls on the standard adult scale.
            </p>
          </div>
          <ActionBar title={title} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <TableOfContents items={toc} />
          </aside>

          <div className="min-w-0 space-y-16">
            <section id="calculator" className="scroll-mt-24">
              <BmiCalculator />
            </section>

            <section id="formula" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">Formula</h2>
              <p className="mt-3 text-ink-500">CalcNest uses the standard adult BMI formula recommended by the CDC and WHO:</p>
              <div className="mt-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 font-mono text-sm text-ink-800">
                <p>Metric: BMI = weight (kg) ÷ [height (m)]²</p>
                <p className="mt-2">Imperial: BMI = 703 × weight (lb) ÷ [height (in)]²</p>
              </div>
            </section>

            <section id="steps" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">Step-by-Step Explanation</h2>
              <ol className="mt-4 space-y-3">
                {[
                  "Measure your height in inches (or meters) and your current weight in pounds (or kilograms).",
                  "Square your height value (multiply it by itself).",
                  "Divide your weight by the squared height.",
                  "If using imperial units, multiply the result by 703 to complete the conversion.",
                  "Compare your final number against the BMI category table below.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 rounded-xl border border-ink-100 p-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink-600">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="examples" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">Examples</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-ink-100 text-xs font-semibold uppercase tracking-wider text-ink-400">
                      <th className="py-2 pr-4">Height</th>
                      <th className="py-2 pr-4">Weight</th>
                      <th className="py-2">BMI Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-ink-50">
                      <td className="py-2.5 pr-4 text-ink-600">5'4" (163 cm)</td>
                      <td className="py-2.5 pr-4 text-ink-600">130 lb (59 kg)</td>
                      <td className="py-2.5 font-semibold text-ink-900">22.3 — Healthy weight</td>
                    </tr>
                    <tr className="border-b border-ink-50">
                      <td className="py-2.5 pr-4 text-ink-600">5'10" (178 cm)</td>
                      <td className="py-2.5 pr-4 text-ink-600">200 lb (91 kg)</td>
                      <td className="py-2.5 font-semibold text-ink-900">28.7 — Overweight</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-ink-600">6'0" (183 cm)</td>
                      <td className="py-2.5 pr-4 text-ink-600">170 lb (77 kg)</td>
                      <td className="py-2.5 font-semibold text-ink-900">23.0 — Healthy weight</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="categories" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">BMI Categories</h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { range: "Below 18.5", label: "Underweight", color: "bg-sky-50 text-sky-600" },
                  { range: "18.5 – 24.9", label: "Healthy weight", color: "bg-emerald-50 text-emerald-600" },
                  { range: "25.0 – 29.9", label: "Overweight", color: "bg-amber-50 text-amber-600" },
                  { range: "30.0 and above", label: "Obesity", color: "bg-rose-50 text-rose-600" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center justify-between rounded-xl border border-ink-100 p-4">
                    <span className="text-sm text-ink-600">{c.range}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.color}`}>{c.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">Frequently Asked Questions</h2>
              <div className="mt-4">
                <Faq items={faqItems} />
              </div>
            </section>

            <AuthorCard updated="July 1, 2026" />

            <section id="related" className="scroll-mt-24">
              <RelatedCalculators items={related} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
