"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgePercent } from "lucide-react";
import { priceTeasers } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { useBookingModal } from "@/components/conversion/BookingModalContext";

export function PricingTeaser() {
  const reduced = useReducedMotion();
  const { openBooking } = useBookingModal();

  return (
    <section id="tseny" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#144264] via-[#1C5F87] to-[#2680B3] p-7 sm:p-10 text-white shadow-[var(--shadow-glass-xl)]"
        >
          <div
            className="absolute -top-20 -right-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #4BA9D9 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #6CB33F 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-7 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
                <BadgePercent className="h-3.5 w-3.5" />
                Прозрачные цены
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] sm:text-4xl">
                Честные цены —<br /> без скрытых платежей
              </h2>
              <p className="mt-3 text-sm text-white/75 max-w-md sm:text-base">
                План лечения с фиксированной стоимостью утверждается до начала. Возможна рассрочка
                0% до 12 месяцев.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="accent" size="md" onClick={() => openBooking()}>
                  Узнать стоимость лечения
                </Button>
                <Link href="/tseny">
                  <Button variant="glass" size="md">
                    Полный прайс
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {priceTeasers.map((p) => (
                <div
                  key={p.title}
                  className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-sm px-4 py-3.5 border border-white/15 transition-colors hover:bg-white/15"
                >
                  <span className="text-sm font-medium text-white/85">{p.title}</span>
                  <span className="font-display text-base font-bold text-white whitespace-nowrap">
                    {p.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
