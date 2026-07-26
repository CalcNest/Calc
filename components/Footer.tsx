import Link from "next/link";
import { Calculator, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import { categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-ink-100 bg-ink-50/50">
      <div className="container grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient">
              <Calculator className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="text-lg font-bold text-ink-900">
              Calc<span className="text-brand-500">Nest</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-ink-400">
            CalcNest builds fast, accurate, and genuinely free calculators for everyday finance,
            health, business and construction decisions — no sign-up, no clutter.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 text-ink-400 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Categories">
          {categories.slice(0, 5).map((c) => (
            <FooterLink key={c.slug} href={`/category/${c.slug}`}>{c.name}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Quick Links">
          <FooterLink href="/#featured">Featured Calculators</FooterLink>
          <FooterLink href="/#categories">All Categories</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/#contact">Contact Us</FooterLink>
        </FooterCol>

        <FooterCol title="Legal">
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
          <FooterLink href="/disclaimer">Disclaimer</FooterLink>
        </FooterCol>
      </div>

      <div className="border-t border-ink-100">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} CalcNest. All rights reserved.</p>
          <p>Results are estimates for informational purposes only, not financial or medical advice.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink-900">{title}</h4>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-ink-400 hover:text-brand-600 transition-colors">
      {children}
    </Link>
  );
}
