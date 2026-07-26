"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type Unit = "imperial" | "metric";

function classify(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "text-sky-600 bg-sky-50" };
  if (bmi < 25) return { label: "Healthy weight", color: "text-emerald-600 bg-emerald-50" };
  if (bmi < 30) return { label: "Overweight", color: "text-amber-600 bg-amber-50" };
  return { label: "Obesity", color: "text-rose-600 bg-rose-50" };
}

export default function BmiCalculator() {
  const [unit, setUnit] = useState<Unit>("imperial");
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(8);
  const [weightLb, setWeightLb] = useState(160);
  const [heightCm, setHeightCm] = useState(173);
  const [weightKg, setWeightKg] = useState(72);
  const [submitted, setSubmitted] = useState(true);

  const bmi = useMemo(() => {
    if (unit === "imperial") {
      const totalInches = heightFt * 12 + heightIn;
      if (totalInches <= 0) return 0;
      return (703 * weightLb) / (totalInches * totalInches);
    }
    if (heightCm <= 0) return 0;
    const heightM = heightCm / 100;
    return weightKg / (heightM * heightM);
  }, [unit, heightFt, heightIn, weightLb, heightCm, weightKg]);

  const result = classify(bmi);
  const clampedPercent = Math.min(Math.max(((bmi - 15) / (35 - 15)) * 100, 2), 98);

  return (
    <div className="card-surface p-6 sm:p-8">
      <div className="mb-6 inline-flex rounded-full bg-ink-50 p-1">
        {(["imperial", "metric"] as Unit[]).map((u) => (
          <button
            key={u}
            onClick={() => setUnit(u)}
            className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition-colors ${
              unit === u ? "bg-white text-brand-600 shadow-soft" : "text-ink-400"
            }`}
          >
            {u === "imperial" ? "Imperial (ft/lb)" : "Metric (cm/kg)"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {unit === "imperial" ? (
          <>
            <Field label="Height">
              <div className="flex gap-2">
                <NumberInput value={heightFt} onChange={setHeightFt} suffix="ft" min={0} max={8} />
                <NumberInput value={heightIn} onChange={setHeightIn} suffix="in" min={0} max={11} />
              </div>
            </Field>
            <Field label="Weight">
              <NumberInput value={weightLb} onChange={setWeightLb} suffix="lb" min={0} max={700} />
            </Field>
          </>
        ) : (
          <>
            <Field label="Height">
              <NumberInput value={heightCm} onChange={setHeightCm} suffix="cm" min={0} max={250} />
            </Field>
            <Field label="Weight">
              <NumberInput value={weightKg} onChange={setWeightKg} suffix="kg" min={0} max={300} />
            </Field>
          </>
        )}
      </div>

      <Button className="mt-6 w-full sm:w-auto" onClick={() => setSubmitted(true)}>
        Calculate BMI
      </Button>

      {submitted && bmi > 0 && (
        <div className="mt-8 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 animate-fade-in">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Your BMI</p>
              <p className="text-4xl font-bold text-ink-900">{bmi.toFixed(1)}</p>
            </div>
            <span className={`rounded-full px-4 py-1.5 text-sm font-semibold ${result.color}`}>
              {result.label}
            </span>
          </div>

          <div className="relative mt-6 h-2.5 rounded-full bg-gradient-to-r from-sky-300 via-emerald-300 via-40% to-rose-400">
            <div
              className="absolute -top-1.5 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-brand-500 shadow-lift transition-all"
              style={{ left: `${clampedPercent}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[11px] font-medium text-ink-400">
            <span>15</span><span>18.5</span><span>25</span><span>30</span><span>35+</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-600">{label}</span>
      {children}
    </label>
  );
}

function NumberInput({
  value, onChange, suffix, min, max,
}: {
  value: number; onChange: (v: number) => void; suffix: string; min: number; max: number;
}) {
  return (
    <div className="flex flex-1 items-center gap-2 rounded-xl border border-ink-100 px-4 py-2.5 focus-within:border-brand-300">
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-transparent text-sm text-ink-800 outline-none"
      />
      <span className="text-xs font-medium text-ink-400">{suffix}</span>
    </div>
  );
}
