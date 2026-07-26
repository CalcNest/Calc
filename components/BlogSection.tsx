import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/CategoryGrid";

export default function BlogSection() {
  return (
    <section className="container py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="From the Blog"
          title="Learn the math behind the money"
          subtitle="Short, practical reads that make each calculator easier to trust."
          center={false}
        />
        <Link href="/blog" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:flex">
          Visit blog <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card-surface card-hover group flex flex-col overflow-hidden"
          >
            <div className="flex h-36 items-center justify-center bg-brand-gradient-radial bg-brand-50">
              <span className="badge-category bg-white">{post.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-semibold leading-snug text-ink-900 group-hover:text-brand-600">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-400">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                <span>{post.author}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
