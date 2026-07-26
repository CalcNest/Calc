"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";

const FREQUENCIES = [
  { label: "Annually", value: 1 },
  { label: "Semi-annually", value: 2 },
  { label: "Quarterly", value: 4 },
  { label: "Monthly", value: 12 },
  { label: "Daily", value: 365 },
];

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);
  const [freq, setFreq] = useState(12);

  const { futureValue, totalContributions, totalInterest, schedule } = useMemo(() => {
    const r = rate / 100;
    const n = freq;
    let balance = principal;
    const contributionsPerYear = 12;
    const schedule: { year: number; balance: number; contributions: number; interest: number }[] = [];
    let totalContrib = principal;

    for (let y = 1; y <= years; y++) {
      for (let period = 0; period < n; period++) {
        const periodsPerYear = n;
        const monthsPerPeriod = 12 / periodsPerYear;
        balance *= 1 + r / n;
        const contribThisPeriod = monthly * monthsPerPeriod;
        balance += contribThisPeriod;
        totalContrib += contribThisPeriod;
      }
      schedule.push({
        year: y,
        balance,
        contributions: totalContrib,
        interest: balance - totalContrib,
      });
    }

    const fv = balance;
    return {
      futureValue: fv,
      totalContributions: totalContrib,
      totalInterest: fv - totalContrib,
      schedule,
    };
  }, [principal, monthly, rate, years, freq]);

  const interestPct = totalContributions > 0 ? (totalInterest / futureValue) * 100 : 0;

  return (
    <div className="card-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <SliderField label="Initial deposit" value={principal} onChange={setPrincipal} min={0} max={200000} step={500} format={(v) => formatCurrency(v)} />
        <SliderField label="Monthly contribution" value={monthly} onChange={setMonthly} min={0} max={5000} step={25} format={(v) => formatCurrency(v)} />
        <SliderField label="Annual interest rate" value={rate} onChange={setRate} min={0} max={20} step={0.1} format={(v) => `${v.toFixed(1)}%`} />
        <SliderField label="Time horizon" value={years} onChange={setYears} min={1} max={50} step={1} format={(v) => `${v} yrs`} />
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-ink-600">Compounding frequency</span>
        <select
          value={freq}
          onChange={(e) => setFreq(Number(e.target.value))}
          className="w-full rounded-xl border border-ink-100 px-4 py-2.5 text-sm text-ink-800 outline-none focus:border-brand-300"
        >
          {FREQUENCIES.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
      </label>

      <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 sm:grid-cols-3">
        <Stat label="Future Value" value={formatCurrency(futureValue)} highlight />
        <Stat label="Total Contributions" value={formatCurrency(totalContributions)} />
        <Stat label="Total Interest Earned" value={formatCurrency(totalInterest)} />
      </div>

      <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-ink-100">
        <div className="h-full bg-brand-gradient transition-all" style={{ width: `${interestPct}%` }} />
      </div>
      <p className="mt-2 text-xs text-ink-400">
        Interest makes up {interestPct.toFixed(0)}% of your final balance.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs font-semibold uppercase tracking-wider text-ink-400">
              <th className="py-2 pr-4">Year</th>
              <th className="py-2 pr-4">Contributions</th>
              <th className="py-2 pr-4">Interest</th>
              <th className="py-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule
              .filter((_, i) => (i + 1) % Math.ceil(years / 8 || 1) === 0 || i === schedule.length - 1)
              .map((row) => (
                <tr key={row.year} className="border-b border-ink-50">
                  <td className="py-2.5 pr-4 font-medium text-ink-700">{row.year}</td>
                  <td className="py-2.5 pr-4 text-ink-500">{formatCurrency(row.contributions)}</td>
                  <td className="py-2.5 pr-4 text-ink-500">{formatCurrency(row.interest)}</td>
                  <td className="py-2.5 font-semibold text-ink-900">{formatCurrency(row.balance)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SliderField({
  label, value, onChange, min, max, step, format,
}: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number; format: (v: number) => string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-sm font-medium text-ink-600">
        {label} <span className="font-semibold text-brand-600">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand-500"
      />
    </label>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{label}</p>
      <p className={`mt-1 text-xl font-bold ${highlight ? "text-brand-600" : "text-ink-900"}`}>{value}</p>
    </div>
  );
}
