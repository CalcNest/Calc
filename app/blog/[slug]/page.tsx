import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorCard from "@/components/AuthorCard";
import ActionBar from "@/components/ActionBar";
import { blogPosts, siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `${siteConfig.url}/blog/${post.slug}`, type: "article" },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "CalcNest" },
    datePublished: post.date,
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-ink-100 bg-ink-50/40 py-6">
        <div className="container">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
        </div>
      </div>

      <article className="container max-w-3xl py-12">
        <span className="badge-category">{post.category}</span>
        <h1 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">{post.title}</h1>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-ink-400">
            By {post.author} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
          </p>
          <ActionBar title={post.title} />
        </div>

        <div className="prose prose-ink mt-8 max-w-none text-ink-600">
          <p>{post.excerpt}</p>
          <p>
            This article breaks the topic down into plain, practical steps so you can apply it immediately —
            no finance degree required. We keep the explanations grounded in real numbers rather than jargon,
            and link out to the relevant CalcNest calculator wherever it can save you the mental math.
          </p>
          <p>
            As with all CalcNest content, this piece is reviewed for accuracy and updated periodically to reflect
            current guidance. If you spot something that looks outdated, let us know through the contact form.
          </p>
        </div>

        <div className="mt-12">
          <AuthorCard name={post.author} updated={post.date} />
        </div>
      </article>
    </div>
  );
}
