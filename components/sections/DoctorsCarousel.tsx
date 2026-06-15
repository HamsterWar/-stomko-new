"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Stethoscope } from "lucide-react";
import { doctors } from "@/lib/data/doctors";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useBookingModal } from "@/components/conversion/BookingModalContext";
import { cn } from "@/lib/utils/cn";

export function DoctorsCarousel() {
  const reduced = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { openBooking } = useBookingModal();

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="vrachi" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Команда"
            title="9 врачей с опытом |от 8 до 30 лет|"
            subtitle="Каждый — эксперт в своём направлении. Регулярная аттестация, международные курсы, регулярный контроль качества."
            align="left"
            className="!mx-0"
          />
          <div className="hidden gap-2 sm:flex">
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
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8"
        >
          {doctors.map((d, i) => (
            <motion.article
              key={d.slug}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
              className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl bg-white border border-[rgba(38,128,179,0.1)] shadow-[var(--shadow-glass-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glass-lg)] sm:w-[320px]"
            >
              <div className={cn("relative h-56 bg-gradient-to-br overflow-hidden", d.accent)}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 50%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl font-bold text-white/85 drop-shadow-lg">
                    {d.initials}
                  </span>
                </div>
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-brand-deep">
                  <Stethoscope className="h-3 w-3 text-brand-primary" />
                  {d.experience}+ лет опыта
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold leading-tight text-brand-deep">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-brand-primary font-medium">{d.role}</p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed line-clamp-3">
                  {d.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.specialty.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-[rgba(38,128,179,0.08)] px-2.5 py-0.5 text-[11px] font-medium text-brand-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-5 w-full"
                  onClick={() => openBooking({ doctorSlug: d.slug })}
                >
                  Записаться к врачу
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
