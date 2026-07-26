import { ArrowRight } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden keypad-grid">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl animate-float" />
      <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-brand-100/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow mx-auto mb-5 w-fit rounded-full bg-white/80 px-4 py-1.5 shadow-soft animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            300+ Free Calculators, No Sign-up Required
          </span>

          <h1 className="text-[2.1rem] font-bold leading-[1.15] text-ink-900 sm:text-5xl md:text-6xl animate-slide-up">
            Free Online Calculators for{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Finance, Health, Business
            </span>
            , Construction & More
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-400 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Fast, accurate and free calculators designed for everyone.
          </p>

          <div className="mx-auto mt-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <SearchBar />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link href="#categories" className="btn-brand">
              Browse Calculators <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#featured" className="btn-outline">
              View Featured
            </Link>
          </div>

          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-ink-100 pt-8">
            <Stat value={300} suffix="+" label="Calculators" />
            <Stat value={2} decimals={1} suffix="M+" label="Monthly Users" />
            <Stat value={95} suffix="+" label="Lighthouse Score" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix = "",
  decimals = 0,
  label,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  return (
    <div>
      <div className="text-2xl font-bold text-ink-900 sm:text-3xl">
        <AnimatedCounter value={value} decimals={decimals} />
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium text-ink-400 sm:text-sm">{label}</div>
    </div>
  );
}
