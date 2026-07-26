import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — Finance, Health & Math Explained",
  description: "Practical, easy-to-read articles that explain the math behind CalcNest's calculators.",
  alternates: { canonical: "/blog" },
  openGraph: { url: `${siteConfig.url}/blog` },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-ink-100 bg-ink-50/40 py-6">
        <div className="container">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
        </div>
      </div>

      <div className="container py-12">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">CalcNest Blog</h1>
        <p className="mt-2 max-w-xl text-ink-400">Short, practical reads that make each calculator easier to trust.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-surface card-hover group flex flex-col overflow-hidden">
              <div className="flex h-36 items-center justify-center bg-brand-50">
                <span className="badge-category bg-white">{post.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-base font-semibold leading-snug text-ink-900 group-hover:text-brand-600">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-ink-400">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
