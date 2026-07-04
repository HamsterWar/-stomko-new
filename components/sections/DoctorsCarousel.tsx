"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Stethoscope } from "lucide-react";
import { doctors } from "@/lib/data/doctors";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useBookingModal } from "@/components/conversion/BookingModalContext";

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
            title="8 врачей с опытом |от 9 до 30 лет|"
            subtitle="Каждый — эксперт в своём направлении. Профессиональную гигиену в нашей клинике проводят врачи-стоматологи."
            align="left"
            className="!mx-0"
          />
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Назад"
              onClick={() => scroll(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#e3edf5] text-brand-deep hover:border-brand-primary/40 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Вперёд"
              onClick={() => scroll(1)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#e3edf5] text-brand-deep hover:border-brand-primary/40 cursor-pointer"
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
              className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl bg-white border border-[#e3edf5] transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[0_20px_48px_rgba(20,66,100,0.1)] sm:w-[320px]"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#eef7fc] to-[#dcedf7]">
                <Image
                  src={d.photo}
                  alt={d.name}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-brand-deep shadow-sm">
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
