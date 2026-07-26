import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import ActionBar from "@/components/ActionBar";
import AuthorCard from "@/components/AuthorCard";
import Faq from "@/components/Faq";
import RelatedCalculators from "@/components/RelatedCalculators";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";
import { getRelatedCalculators, siteConfig } from "@/lib/data";

const title = "Percentage Calculator — Find % of a Number, Increase & Decrease";
const description =
  "Solve any percentage problem: find X% of a number, what percent one number is of another, or the percent increase or decrease between two values.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/calculators/percentage-calculator" },
  openGraph: { title, description, url: `${siteConfig.url}/calculators/percentage-calculator` },
};

const toc = [
  { id: "calculator", label: "Calculator" },
  { id: "formula", label: "Formulas" },
  { id: "steps", label: "Step-by-Step" },
  { id: "examples", label: "Examples" },
  { id: "faq", label: "FAQs" },
  { id: "related", label: "Related Calculators" },
];

const faqItems = [
  { question: "How do I calculate a percentage increase?", answer: "Subtract the original value from the new value, divide by the original value, then multiply by 100. A negative result means a decrease." },
  { question: "What's the quickest way to find X% of a number?", answer: "Convert the percentage to a decimal by dividing by 100, then multiply by the number. For example, 15% of 200 is 0.15 × 200 = 30." },
  { question: "How do I find what percent one number is of another?", answer: "Divide the part by the whole, then multiply by 100. For example, 50 out of 200 is (50 ÷ 200) × 100 = 25%." },
  { question: "Can percentages be negative?", answer: "Yes — a negative percentage typically represents a decrease, loss, or decline, such as a -12% change in revenue." },
];

export default function PercentageCalculatorPage() {
  const related = getRelatedCalculators("percentage-calculator");

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Percentage Calculator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: `${siteConfig.url}/calculators/percentage-calculator`,
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />

      <div className="border-b border-ink-100 bg-ink-50/40 py-6">
        <div className="container">
          <Breadcrumbs items={[{ label: "Math", href: "/category/math" }, { label: "Percentage Calculator", href: "/calculators/percentage-calculator" }]} />
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="badge-category">Math</span>
            <h1 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">Percentage Calculator</h1>
            <p className="mt-2 max-w-xl text-ink-400">
              Three calculators in one: basic percentage, percent of total, and percent change.
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
              <PercentageCalculator />
            </section>

            <section id="formula" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">Formulas</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-5 font-mono text-sm text-ink-800">
                  X% of Y = (X ÷ 100) × Y
                </div>
                <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-5 font-mono text-sm text-ink-800">
                  X is what % of Y = (X ÷ Y) × 100
                </div>
                <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-5 font-mono text-sm text-ink-800">
                  % change = [(New − Old) ÷ Old] × 100
                </div>
              </div>
            </section>

            <section id="steps" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">Step-by-Step Explanation</h2>
              <ol className="mt-4 space-y-3">
                {[
                  "Choose the type of percentage problem you're solving using the tabs above.",
                  "Enter the two known numbers into the input fields.",
                  "The result updates instantly as you type — no submit button needed.",
                  "For percent change, a positive result means an increase and a negative result means a decrease.",
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
                      <th className="py-2 pr-4">Problem</th>
                      <th className="py-2">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-ink-50">
                      <td className="py-2.5 pr-4 text-ink-600">15% of 200</td>
                      <td className="py-2.5 font-semibold text-ink-900">30</td>
                    </tr>
                    <tr className="border-b border-ink-50">
                      <td className="py-2.5 pr-4 text-ink-600">50 is what % of 200</td>
                      <td className="py-2.5 font-semibold text-ink-900">25%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-ink-600">Change from 80 to 100</td>
                      <td className="py-2.5 font-semibold text-ink-900">+25%</td>
                    </tr>
                  </tbody>
                </table>
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
