import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import CalculatorSection from "@/components/CalculatorSection";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import { calculators } from "@/lib/data";

export default function HomePage() {
  const featured = calculators.filter((c) => c.featured);
  const popular = calculators.filter((c) => c.popular);
  const latest = calculators.filter((c) => c.latest);

  return (
    <>
      <Hero />
      <CategoryGrid />
      <CalculatorSection
        id="featured"
        eyebrow="Featured"
        title="Featured Calculators"
        subtitle="Our most polished, highest-accuracy tools."
        items={featured}
      />
      <CalculatorSection
        eyebrow="Trending"
        title="Popular Calculators"
        subtitle="What most visitors are using this week."
        items={popular}
        tone="tint"
      />
      <CalculatorSection
        eyebrow="Just Added"
        title="Latest Calculators"
        subtitle="Newest tools added to the CalcNest library."
        items={latest}
      />
      <BlogSection />
      <Newsletter />
    </>
  );
}
