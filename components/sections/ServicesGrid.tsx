"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { serviceIcons } from "@/components/ui/ServiceIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useBookingModal } from "@/components/conversion/BookingModalContext";
import { cn } from "@/lib/utils/cn";

export function ServicesGrid() {
  const reduced = useReducedMotion();
  const { openBooking } = useBookingModal();

  return (
    <section id="uslugi" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Направления"
          title="Услуги нашей |стоматологии| на одной странице"
          subtitle="От профчистки до полной имплантации — единая команда, прозрачные цены и гарантия на каждую работу."
        />

        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            const isLarge = i === 0 || i === 3;
            return (
              <motion.button
                type="button"
                key={s.slug}
                onClick={() => openBooking({ serviceSlug: s.slug })}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl bg-white border border-[#e3edf5] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/35 hover:shadow-[0_20px_48px_rgba(20,66,100,0.1)] cursor-pointer",
                  isLarge && "lg:col-span-2 lg:row-span-1"
                )}
              >
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4fa] text-brand-primary transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#4BA9D9] group-hover:to-[#2680B3] group-hover:text-white">
                    {Icon && <Icon className="h-7 w-7" />}
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold leading-tight text-brand-deep">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-muted line-clamp-2">{s.short}</p>

                  {isLarge && (
                    <p className="mt-3 text-sm text-text-body leading-relaxed line-clamp-3 hidden lg:block">
                      {s.description}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {s.benefits.slice(0, isLarge ? 3 : 2).map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-[rgba(38,128,179,0.08)] px-2.5 py-1 text-[11px] font-medium text-brand-primary"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-xs text-text-muted">
                      {s.priceFrom > 0 ? (
                        <span className="font-semibold text-brand-deep text-base">
                          от {s.priceFrom.toLocaleString("ru-RU")} ₽
                        </span>
                      ) : (
                        <span className="font-semibold text-brand-green-deep text-base">Бесплатно</span>
                      )}
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf4fa] text-brand-primary transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
