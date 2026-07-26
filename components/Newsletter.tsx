"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});
type FormValues = z.infer<typeof schema>;

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  }

  return (
    <section className="container py-20">
      <div className="relative overflow-hidden rounded-card bg-brand-gradient p-10 text-center sm:p-16">
        <div className="absolute inset-0 keypad-grid opacity-20" />
        <div className="relative mx-auto max-w-xl">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Get new calculators &amp; money tips in your inbox
          </h2>
          <p className="mt-3 text-white/85">No spam. Unsubscribe anytime. One email a month, max.</p>

          {submitted ? (
            <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-3 text-white">
              <CheckCircle2 className="h-5 w-5" /> You're subscribed — welcome aboard!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              noValidate
            >
              <div className="flex-1 text-left">
                <input
                  type="email"
                  placeholder="you@example.com"
                  aria-label="Email address"
                  {...register("email")}
                  className="w-full rounded-full border-0 bg-white px-5 py-3.5 text-sm text-ink-800 outline-none ring-2 ring-transparent placeholder:text-ink-400 focus:ring-white"
                />
                {errors.email && (
                  <p className="mt-1.5 pl-2 text-xs font-medium text-white">{errors.email.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="!bg-ink-900 !shadow-none hover:!-translate-y-0.5"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
