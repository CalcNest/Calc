"use client";

import { useMemo, useState } from "react";

type Mode = "basic" | "change" | "of-total";

export default function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("basic");

  return (
    <div className="card-surface p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap gap-1 rounded-full bg-ink-50 p-1">
        <TabButton active={mode === "basic"} onClick={() => setMode("basic")}>X% of Y</TabButton>
        <TabButton active={mode === "of-total"} onClick={() => setMode("of-total")}>X is what % of Y</TabButton>
        <TabButton active={mode === "change"} onClick={() => setMode("change")}>% Increase/Decrease</TabButton>
      </div>

      {mode === "basic" && <BasicMode />}
      {mode === "of-total" && <OfTotalMode />}
      {mode === "change" && <ChangeMode />}
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active ? "bg-white text-brand-600 shadow-soft" : "text-ink-400"
      }`}
    >
      {children}
    </button>
  );
}

function ResultBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 animate-fade-in">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{label}</p>
      <p className="mt-1 text-3xl font-bold text-brand-600">{value}</p>
    </div>
  );
}

function Input({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full rounded-xl border border-ink-100 px-4 py-2.5 text-sm text-ink-800 outline-none focus:border-brand-300"
    />
  );
}

function BasicMode() {
  const [x, setX] = useState(15);
  const [y, setY] = useState(200);
  const result = useMemo(() => (x / 100) * y, [x, y]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-end">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-600">Percentage (%)</span>
          <Input value={x} onChange={setX} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-600">Of number</span>
          <Input value={y} onChange={setY} />
        </label>
      </div>
      <ResultBox label={`${x}% of ${y} is`} value={result.toLocaleString("en-US", { maximumFractionDigits: 2 })} />
    </div>
  );
}

function OfTotalMode() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(200);
  const result = useMemo(() => (y > 0 ? (x / y) * 100 : 0), [x, y]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-end">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-600">Value</span>
          <Input value={x} onChange={setX} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-600">Total</span>
          <Input value={y} onChange={setY} />
        </label>
      </div>
      <ResultBox label={`${x} is what percent of ${y}`} value={`${result.toFixed(2)}%`} />
    </div>
  );
}

function ChangeMode() {
  const [from, setFrom] = useState(80);
  const [to, setTo] = useState(100);
  const result = useMemo(() => (from > 0 ? ((to - from) / from) * 100 : 0), [from, to]);
  const isIncrease = result >= 0;

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-end">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-600">From value</span>
          <Input value={from} onChange={setFrom} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-600">To value</span>
          <Input value={to} onChange={setTo} />
        </label>
      </div>
      <ResultBox
        label={isIncrease ? "Percentage increase" : "Percentage decrease"}
        value={`${Math.abs(result).toFixed(2)}%`}
      />
    </div>
  );
}
