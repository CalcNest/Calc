import { BadgeCheck } from "lucide-react";

export default function AuthorCard({
  name = "CalcNest Editorial Team",
  role = "Reviewed for accuracy",
  bio = "Our calculators are built and reviewed by finance and health professionals, then tested against known reference values before publishing.",
  updated,
}: {
  name?: string;
  role?: string;
  bio?: string;
  updated?: string;
}) {
  return (
    <div className="card-surface flex items-start gap-4 p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-base font-bold text-white">
        {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
      </div>
      <div>
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
          {name} <BadgeCheck className="h-4 w-4 text-brand-500" />
        </p>
        <p className="text-xs font-medium text-brand-600">{role}</p>
        <p className="mt-2 text-sm text-ink-400">{bio}</p>
        {updated && <p className="mt-2 text-xs text-ink-400">Last updated: {updated}</p>}
      </div>
    </div>
  );
}
