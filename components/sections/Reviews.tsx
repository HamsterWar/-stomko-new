"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews, reviewStats } from "@/lib/data/reviews";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils/cn";

export function Reviews() {
  const reduced = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="otzyvy" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-96 bg-mesh-aqua opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
          <SectionTitle
            eyebrow="Доверие пациентов"
            title="487 отзывов · |4.9 из 5|"
            subtitle="Реальные отзывы наших пациентов на независимых площадках. Мы не публикуем выборочно — показываем всё."
            align="left"
            className="!mx-0"
          />

          <div className="grid grid-cols-3 gap-3">
            {reviewStats.sources.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl glass-strong p-4 text-center"
              >
                <div className="flex items-center justify-center gap-0.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-display text-lg font-bold text-brand-deep">{s.rating}</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-brand-primary">{s.name}</div>
                <div className="text-[11px] text-text-muted">{s.count} отзывов</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-end gap-2">
          <button
            type="button"
            aria-label="Назад"
            onClick={() => scroll(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-xl glass-strong border border-[rgba(38,128,179,0.18)] text-brand-deep hover:bg-white cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            onClick={() => scroll(1)}
            className="flex h-11 w-11 items-center justify-center rounded-xl glass-strong border border-[rgba(38,128,179,0.18)] text-brand-deep hover:bg-white cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="mt-4 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8"
        >
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
              className="relative w-[320px] shrink-0 snap-start rounded-3xl bg-white border border-[rgba(38,128,179,0.1)] p-6 shadow-[var(--shadow-glass-sm)] sm:w-[380px]"
            >
              <div className="flex items-center gap-3">
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-white font-display font-bold", r.accent)}>
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-brand-deep truncate">{r.name}</div>
                  <div className="text-xs text-text-muted">{r.service}</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <blockquote className="mt-4 text-sm text-text-body leading-relaxed">
                «{r.text}»
              </blockquote>

              <figcaption className="mt-5 flex items-center justify-between text-xs text-text-muted">
                <span>{r.date}</span>
                <span className="rounded-full bg-[rgba(38,128,179,0.08)] px-2.5 py-1 font-medium text-brand-primary">
                  {r.source}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
