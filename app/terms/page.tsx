import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of CalcNest.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12">
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />
      <h1 className="mt-4 text-3xl font-bold text-ink-900">Terms of Service</h1>
      <div className="prose prose-ink mt-6 max-w-none text-ink-600">
        <p>
          By using CalcNest, you agree to use the calculators and content for informational purposes only.
          CalcNest is provided "as is" without warranties of any kind, express or implied.
        </p>
        <p>
          You may not scrape, republish, or resell CalcNest's calculators or content without written permission.
          We may update these terms from time to time; continued use of the site constitutes acceptance.
        </p>
        <p>This is placeholder legal content for demo purposes — replace with counsel-reviewed text before launch.</p>
      </div>
    </div>
  );
}
