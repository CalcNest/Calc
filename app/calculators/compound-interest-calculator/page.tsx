import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import ActionBar from "@/components/ActionBar";
import AuthorCard from "@/components/AuthorCard";
import Faq from "@/components/Faq";
import RelatedCalculators from "@/components/RelatedCalculators";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import { getRelatedCalculators, siteConfig } from "@/lib/data";

const title = "Compound Interest Calculator — Free Investment Growth Calculator";
const description =
  "Calculate how your savings or investments grow over time with compound interest. Add monthly contributions and compare compounding frequencies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/calculators/compound-interest-calculator" },
  openGraph: { title, description, url: `${siteConfig.url}/calculators/compound-interest-calculator` },
};

const toc = [
  { id: "calculator", label: "Calculator" },
  { id: "formula", label: "Formula" },
  { id: "steps", label: "Step-by-Step" },
  { id: "examples", label: "Examples" },
  { id: "faq", label: "FAQs" },
  { id: "related", label: "Related Calculators" },
];

const faqItems = [
  { question: "What's the difference between simple and compound interest?", answer: "Simple interest is earned only on your original principal. Compound interest is earned on the principal plus any interest already accumulated, so growth accelerates over time." },
  { question: "How does compounding frequency affect returns?", answer: "More frequent compounding (daily vs. annually) produces slightly higher returns because interest is added to the balance sooner and starts earning its own interest earlier." },
  { question: "Does this calculator account for taxes or inflation?", answer: "No. This tool shows nominal growth before taxes and inflation. Use our Inflation Calculator alongside this one to estimate real, inflation-adjusted purchasing power." },
  { question: "Is 7% a realistic annual return to assume?", answer: "7% is a commonly cited long-run average for diversified U.S. stock portfolios after inflation is roughly factored out, but actual annual returns vary significantly and are never guaranteed." },
];

export default function CompoundInterestPage() {
  const related = getRelatedCalculators("compound-interest-calculator");

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Compound Interest Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: `${siteConfig.url}/calculators/compound-interest-calculator`,
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />

      <div className="border-b border-ink-100 bg-ink-50/40 py-6">
        <div className="container">
          <Breadcrumbs items={[{ label: "Investment", href: "/category/investment" }, { label: "Compound Interest Calculator", href: "/calculators/compound-interest-calculator" }]} />
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="badge-category">Investment</span>
            <h1 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">Compound Interest Calculator</h1>
            <p className="mt-2 max-w-xl text-ink-400">
              See exactly how your money grows with regular contributions and compounding returns.
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
              <CompoundInterestCalculator />
            </section>

            <section id="formula" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">Formula</h2>
              <p className="mt-3 text-ink-500">The core compound interest formula, extended for recurring contributions:</p>
              <div className="mt-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 font-mono text-sm text-ink-800">
                <p>A = P × (1 + r/n)^(n×t)</p>
                <p className="mt-2 text-ink-500">A = future value · P = principal · r = annual rate · n = compounding periods/year · t = years</p>
                <p className="mt-3">Contributions are added each compounding period and grow for the remaining time in the schedule.</p>
              </div>
            </section>

            <section id="steps" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink-900">Step-by-Step Explanation</h2>
              <ol className="mt-4 space-y-3">
                {[
                  "Enter your starting balance (principal) and any regular monthly contribution.",
                  "Set your expected annual interest rate as a percentage.",
                  "Choose how often interest compounds — monthly and daily produce marginally faster growth than annually.",
                  "Set your time horizon in years.",
                  "Review the projected future value, total contributions, and total interest earned.",
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
                <table className="w-full min-w-[500px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-ink-100 text-xs font-semibold uppercase tracking-wider text-ink-400">
                      <th className="py-2 pr-4">Starting Balance</th>
                      <th className="py-2 pr-4">Monthly</th>
                      <th className="py-2 pr-4">Rate / Years</th>
                      <th className="py-2">Future Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-ink-50">
                      <td className="py-2.5 pr-4 text-ink-600">$5,000</td>
                      <td className="py-2.5 pr-4 text-ink-600">$100</td>
                      <td className="py-2.5 pr-4 text-ink-600">6% / 10 yrs</td>
                      <td className="py-2.5 font-semibold text-ink-900">≈ $25,900</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-ink-600">$10,000</td>
                      <td className="py-2.5 pr-4 text-ink-600">$200</td>
                      <td className="py-2.5 pr-4 text-ink-600">7% / 20 yrs</td>
                      <td className="py-2.5 font-semibold text-ink-900">≈ $147,400</td>
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
