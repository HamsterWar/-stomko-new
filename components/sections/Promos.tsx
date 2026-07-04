"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgePercent, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useBookingModal } from "@/components/conversion/BookingModalContext";
import { promos } from "@/lib/data/promos";
import { cn } from "@/lib/utils/cn";

export function Promos() {
  const reduced = useReducedMotion();
  const { openBooking } = useBookingModal();

  return (
    <section id="akcii" className="relative py-16 sm:py-24 bg-section-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Специальные предложения"
          title="Акции |клиники|"
          subtitle="Действующие предложения для наших пациентов — без мелкого шрифта и скрытых условий."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {promos.map((promo, i) => (
            <motion.article
              key={promo.slug}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 border transition-all duration-300 hover:-translate-y-1",
                promo.featured
                  ? "border-brand-primary/35 shadow-[0_20px_48px_rgba(20,66,100,0.1)]"
                  : "border-[#e3edf5] hover:border-brand-primary/30 hover:shadow-[0_20px_48px_rgba(20,66,100,0.1)]"
              )}
            >
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#6CB33F] to-[#4F8A2C] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  <BadgePercent className="h-3.5 w-3.5" />
                  {promo.badge}
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-brand-deep leading-snug">
                  {promo.title}
                </h3>

                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-brand-deep sm:text-5xl">
                    {promo.price}
                  </span>
                  {promo.oldPrice && (
                    <span className="text-lg text-text-soft line-through">{promo.oldPrice}</span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-muted">{promo.description}</p>

                <div className="mt-3 text-xs font-semibold text-brand-primary">{promo.condition}</div>
              </div>

              <div className="relative mt-auto pt-6">
                <Button
                  variant={promo.featured ? "primary" : "ghost"}
                  size="md"
                  className="w-full"
                  onClick={() => openBooking()}
                >
                  Записаться
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
