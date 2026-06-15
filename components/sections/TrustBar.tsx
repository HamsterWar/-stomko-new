"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trustPoints } from "@/lib/data/trust";
import { trustIcons } from "@/components/ui/TrustIcon";

export function TrustBar() {
  const reduced = useReducedMotion();

  return (
    <section className="relative -mt-8 sm:-mt-12 z-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-3 rounded-3xl glass-strong p-4 shadow-[var(--shadow-glass-lg)] sm:grid-cols-2 lg:grid-cols-5"
        >
          {trustPoints.map((p) => {
            const Icon = trustIcons[p.icon];
            return (
              <div
                key={p.title}
                className="flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-white/60"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4BA9D9]/15 to-[#2680B3]/10 text-brand-primary">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-sm font-bold leading-tight text-brand-deep">
                    {p.title}
                  </div>
                  <div className="mt-0.5 text-xs leading-tight text-text-muted">{p.caption}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
