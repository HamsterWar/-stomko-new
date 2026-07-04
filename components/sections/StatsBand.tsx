"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { keyStats } from "@/lib/data/trust";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to]);

  return (
    <span ref={ref}>
      {value}
      <span className="ml-1 text-[0.45em] font-bold align-baseline">{suffix}</span>
    </span>
  );
}

export function StatsBand() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#144264] via-[#1C5F87] to-[#2680B3]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 noise opacity-30" aria-hidden="true" />
      <div
        className="absolute -top-24 right-1/4 h-[320px] w-[320px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #4BA9D9 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {keyStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center sm:text-left"
            >
              <div className="font-display text-6xl font-bold text-white sm:text-7xl lg:text-8xl tracking-tight">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 font-display text-lg font-bold text-[#8DCB5A] uppercase tracking-wide">
                {stat.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70 max-w-xs mx-auto sm:mx-0">
                {stat.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
