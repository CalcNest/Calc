import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CalcNest collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-12">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
      <h1 className="mt-4 text-3xl font-bold text-ink-900">Privacy Policy</h1>
      <div className="prose prose-ink mt-6 max-w-none text-ink-600">
        <p>
          CalcNest does not require an account to use any calculator. Inputs you enter into a calculator are
          processed in your browser and are not stored on our servers unless explicitly noted on that page.
        </p>
        <p>
          We use privacy-respecting analytics to understand aggregate traffic patterns and improve the site.
          If you subscribe to our newsletter, we store your email address solely to send the updates you signed
          up for, and you can unsubscribe at any time.
        </p>
        <p>This is placeholder legal content for demo purposes — replace with counsel-reviewed text before launch.</p>
      </div>
    </div>
  );
}
