import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "CalcNest calculators are for informational purposes only.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="container max-w-3xl py-12">
      <Breadcrumbs items={[{ label: "Disclaimer", href: "/disclaimer" }]} />
      <h1 className="mt-4 text-3xl font-bold text-ink-900">Disclaimer</h1>
      <div className="prose prose-ink mt-6 max-w-none text-ink-600">
        <p>
          CalcNest's calculators provide estimates for general informational purposes only. They are not a
          substitute for professional financial, medical, tax, legal, or engineering advice.
        </p>
        <p>
          Always consult a qualified professional before making financial, health, or construction decisions
          based on results from this site. CalcNest is not liable for decisions made using our calculators.
        </p>
      </div>
    </div>
  );
}
