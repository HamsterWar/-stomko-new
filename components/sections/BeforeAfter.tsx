"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils/cn";

const cases = [
  {
    title: "Восстановление улыбки коронками",
    doctor: "Роман Марков",
    duration: "3 визита · 2 недели",
    accent: "from-[#4BA9D9] to-[#2680B3]",
    beforeColor: "#9CA3AF",
    afterColor: "#FAFAFA",
  },
  {
    title: "Имплантация двух жевательных зубов",
    doctor: "Антон Егоров",
    duration: "4 месяца",
    accent: "from-[#2680B3] to-[#144264]",
    beforeColor: "#94A3B8",
    afterColor: "#F1F5F9",
  },
  {
    title: "Профессиональная чистка и отбеливание",
    doctor: "Юлия Кибенко",
    duration: "1 визит · 90 минут",
    accent: "from-[#8DCB5A] to-[#4F8A2C]",
    beforeColor: "#D1B583",
    afterColor: "#FEFEFA",
  },
];

function ToothMockup({ tone, smile }: { tone: string; smile: number }) {
  const teeth = Array.from({ length: 7 });
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full">
      <rect width="320" height="200" fill="url(#mouthBg)" />
      <defs>
        <linearGradient id="mouthBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe9f2" />
          <stop offset="100%" stopColor="#c3d5e4" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="100" rx="120" ry="50" fill="#b0c6d9" opacity="0.35" />
      {teeth.map((_, i) => {
        const x = 50 + i * 32;
        return (
          <rect
            key={i}
            x={x}
            y={80 + Math.abs(i - 3) * smile}
            width="26"
            height={40 + Math.abs(i - 3) * smile * 0.5}
            rx="6"
            fill={tone}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

export function BeforeAfter() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);

  const current = cases[active];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Работы наших врачей"
          title="Реальные кейсы — |до и после|"
          subtitle="Передвиньте ползунок — и увидите результат лечения наших пациентов. Все работы проведены в клинике «Оптимальный выбор»."
        />

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#e3edf5] shadow-[0_20px_48px_rgba(20,66,100,0.12)] aspect-[16/10] bg-[#dfe9f2] select-none">
            <div className="absolute inset-0">
              <ToothMockup tone={current.afterColor} smile={current.title.includes("импланта") ? 2 : 0} />
            </div>
            <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}>
              <ToothMockup tone={current.beforeColor} smile={current.title.includes("импланта") ? 8 : 5} />
            </div>

            <input
              type="range"
              min="2"
              max="98"
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Сравнение до и после"
              className="absolute inset-0 cursor-ew-resize opacity-0"
              style={{ width: "100%", height: "100%" }}
            />
            <div
              className="pointer-events-none absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border-2 border-brand-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-primary" fill="currentColor">
                  <path d="M8 5l-7 7 7 7v-4h8v4l7-7-7-7v4H8z" />
                </svg>
              </div>
            </div>

            <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#144264]/85 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
              ДО
            </div>
            <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#6CB33F]/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
              ПОСЛЕ
            </div>
            <p className="absolute bottom-3 left-3 right-3 text-center text-[11px] text-white/80 bg-brand-deep/40 backdrop-blur-sm rounded-full py-1.5">
              * Иллюстрация результата. Реальные фото — в кабинете врача
            </p>
          </div>

          <div className="space-y-3">
            {cases.map((c, i) => (
              <button
                type="button"
                key={c.title}
                onClick={() => {
                  setActive(i);
                  setPos(50);
                }}
                className={cn(
                  "group block w-full rounded-2xl border-2 p-5 text-left transition-all cursor-pointer",
                  active === i
                    ? "border-brand-primary bg-white shadow-[var(--shadow-glass-md)]"
                    : "border-[rgba(38,128,179,0.12)] bg-white/60 hover:border-brand-primary/50"
                )}
              >
                <div className="flex items-start gap-3">
                  <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white font-display text-base font-bold", c.accent)}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base font-bold leading-tight text-brand-deep">
                      {c.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-text-muted">
                      <span>Врач: {c.doctor}</span>
                      <span>·</span>
                      <span>{c.duration}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
