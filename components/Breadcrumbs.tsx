import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/lib/data";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Link href="/" className="flex items-center gap-1 hover:text-brand-600">
        <Home className="h-3.5 w-3.5" /> Home
      </Link>
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" />
          {i === items.length - 1 ? (
            <span className="font-medium text-ink-700">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-brand-600">{item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
