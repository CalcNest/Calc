import {
  Calculator, HeartPulse, Briefcase, HardHat, Sigma, FlaskConical,
  TrendingUp, GraduationCap, Sparkles, type LucideIcon,
} from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

export const categories: Category[] = [
  { slug: "finance", name: "Finance", description: "Loans, mortgages, taxes & budgeting", icon: Calculator, color: "from-brand-500 to-brand-400" },
  { slug: "health", name: "Health", description: "BMI, calories, fitness & wellness", icon: HeartPulse, color: "from-rose-500 to-brand-400" },
  { slug: "business", name: "Business", description: "Break-even, margins & ROI", icon: Briefcase, color: "from-amber-500 to-brand-400" },
  { slug: "construction", name: "Construction", description: "Materials, area & concrete", icon: HardHat, color: "from-orange-600 to-brand-400" },
  { slug: "math", name: "Math", description: "Percentages, algebra & geometry", icon: Sigma, color: "from-brand-600 to-brand-400" },
  { slug: "science", name: "Science", description: "Physics, chemistry & conversions", icon: FlaskConical, color: "from-teal-500 to-brand-400" },
  { slug: "investment", name: "Investment", description: "Compound interest, ROI & retirement", icon: TrendingUp, color: "from-emerald-500 to-brand-400" },
  { slug: "education", name: "Education", description: "GPA, grades & study tools", icon: GraduationCap, color: "from-indigo-500 to-brand-400" },
  { slug: "lifestyle", name: "Lifestyle", description: "Age, date, time & everyday tools", icon: Sparkles, color: "from-pink-500 to-brand-400" },
];

export type CalcMeta = {
  slug: string;
  name: string;
  description: string;
  category: string; // category slug
  featured?: boolean;
  popular?: boolean;
  latest?: boolean;
  live?: boolean; // has a real working page in this build
};

export const calculators: CalcMeta[] = [
  { slug: "bmi-calculator", name: "BMI Calculator", description: "Check your Body Mass Index and healthy weight range.", category: "health", featured: true, popular: true, live: true },
  { slug: "compound-interest-calculator", name: "Compound Interest Calculator", description: "See how your investment grows with compounding.", category: "investment", featured: true, popular: true, live: true },
  { slug: "percentage-calculator", name: "Percentage Calculator", description: "Solve any percentage, increase or decrease problem.", category: "math", featured: true, popular: true, live: true },
  { slug: "mortgage-calculator", name: "Mortgage Calculator", description: "Estimate your monthly mortgage payment.", category: "finance", featured: true, popular: true },
  { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Estimate your US federal income tax.", category: "finance", popular: true },
  { slug: "loan-calculator", name: "Loan Calculator", description: "Calculate monthly loan payments and interest.", category: "finance", popular: true },
  { slug: "retirement-calculator", name: "Retirement Calculator", description: "Plan how much you need to retire comfortably.", category: "investment", popular: true },
  { slug: "calorie-calculator", name: "Calorie Calculator", description: "Find your daily calorie needs (TDEE).", category: "health", popular: true },
  { slug: "inflation-calculator", name: "Inflation Calculator", description: "See how inflation affects purchasing power.", category: "finance", latest: true },
  { slug: "capital-gains-calculator", name: "Capital Gains Calculator", description: "Estimate tax owed on investment gains.", category: "investment", latest: true },
  { slug: "debt-to-income-calculator", name: "Debt-to-Income Ratio Calculator", description: "Check your DTI ratio for loan eligibility.", category: "finance", latest: true },
  { slug: "water-intake-calculator", name: "Water Intake Calculator", description: "Find your ideal daily water intake.", category: "health", latest: true },
  { slug: "concrete-calculator", name: "Concrete Calculator", description: "Estimate concrete volume needed for a project.", category: "construction", latest: true },
  { slug: "break-even-calculator", name: "Break-Even Calculator", description: "Find the point where revenue covers costs.", category: "business", latest: true },
  { slug: "roi-calculator", name: "ROI Calculator", description: "Measure return on your investment.", category: "business", latest: true },
  { slug: "profit-margin-calculator", name: "Profit Margin Calculator", description: "Calculate gross and net profit margin.", category: "business" },
  { slug: "age-calculator", name: "Age Calculator", description: "Find exact age in years, months and days.", category: "lifestyle" },
  { slug: "date-calculator", name: "Date Calculator", description: "Add, subtract or find the difference between dates.", category: "lifestyle" },
  { slug: "time-calculator", name: "Time Calculator", description: "Add or subtract hours, minutes and seconds.", category: "lifestyle" },
  { slug: "unit-converter", name: "Unit Converter", description: "Convert length, weight, volume and more.", category: "science" },
  { slug: "currency-converter", name: "Currency Converter", description: "Convert between world currencies.", category: "finance" },
];

export function getCalculatorsByCategory(slug: string) {
  return calculators.filter((c) => c.category === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCalculator(slug: string) {
  return calculators.find((c) => c.slug === slug);
}

export function getRelatedCalculators(slug: string, count = 4) {
  const current = getCalculator(slug);
  if (!current) return [];
  return calculators
    .filter((c) => c.slug !== slug && c.category === current.category)
    .slice(0, count)
    .concat(
      calculators.filter((c) => c.slug !== slug && c.category !== current.category).slice(0, count)
    )
    .slice(0, count);
}

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  { slug: "mortgage-rates-2026", title: "How 2026 Mortgage Rates Affect Your Monthly Payment", excerpt: "A practical look at how small rate changes move your payment more than you'd expect.", category: "Finance", readTime: "6 min read", date: "2026-07-10", author: "Sarah Mitchell" },
  { slug: "compound-interest-explained", title: "Compound Interest Explained With Real Numbers", excerpt: "Why starting early beats contributing more later, illustrated with simple math.", category: "Investment", readTime: "5 min read", date: "2026-06-28", author: "David Chen" },
  { slug: "bmi-limitations", title: "What BMI Doesn't Tell You About Your Health", excerpt: "BMI is a useful screening tool, not a diagnosis. Here's what to pair it with.", category: "Health", readTime: "4 min read", date: "2026-06-15", author: "Dr. Amara Okafor" },
];

export const siteConfig = {
  name: "CalcNest",
  tagline: "Free Online Calculators for Finance, Health, Business, Construction & More",
  description:
    "CalcNest offers fast, accurate, and free online calculators for finance, health, business, construction, math, science and more.",
  url: "https://calcnest.com",
};
