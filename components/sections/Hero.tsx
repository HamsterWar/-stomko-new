"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Tooth3D } from "@/components/brand/Tooth3D";
import { useBookingModal } from "@/components/conversion/BookingModalContext";
import { heroStats } from "@/lib/data/trust";

export function Hero() {
  const reduced = useReducedMotion();
  const { openBooking } = useBookingModal();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 bg-mesh-aqua-strong" aria-hidden="true" />
      <div className="absolute inset-0 noise opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-20 h-[460px] w-[460px] rounded-full opacity-50 motion-safe:animate-[blob_18s_ease-in-out_infinite] blur-3xl"
        style={{ background: "radial-gradient(circle, #4BA9D9 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/3 h-[380px] w-[380px] rounded-full opacity-30 motion-safe:animate-[blob_22s_ease-in-out_infinite] blur-3xl"
        style={{ background: "radial-gradient(circle, #6CB33F 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
              Стоматология с 1995 года
            </div>

            <h1 className="mt-5 font-display text-[34px] leading-[1.05] font-bold tracking-tight text-brand-deep sm:text-5xl lg:text-[58px]">
              Стоматология
              <br />
              в Москве —{" "}
              <span className="text-gradient-brand">забота о вашей улыбке</span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-text-body leading-relaxed sm:text-lg">
              Имплантация, лечение и протезирование зубов у{" "}
              <span className="font-semibold text-brand-deep">метро Сокол</span> и{" "}
              <span className="font-semibold text-brand-deep">Беломорская</span>. Технологии
              нового поколения, опытные врачи и гарантия 5 лет — клиника «Оптимальный выбор».
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="accent" size="lg" onClick={() => openBooking()}>
                Записаться онлайн
              </Button>
              <a href="tel:+74991588471">
                <Button variant="glass" size="lg">
                  <Phone className="h-5 w-5 text-brand-primary" />
                  +7 (499) 158-84-71
                </Button>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl glass px-4 py-3 sm:max-w-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4BA9D9] to-[#2680B3] text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-xs leading-snug text-text-body">
                <span className="font-semibold text-brand-deep">Первая консультация бесплатно.</span>{" "}
                Осмотр, план лечения и цены — без обязательств.
              </div>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  className="rounded-2xl glass-strong p-4"
                >
                  <dt className="font-display text-2xl font-bold text-gradient-brand sm:text-3xl">
                    {s.value}
                    <span className="ml-1 text-sm font-semibold text-brand-deep">{s.suffix}</span>
                  </dt>
                  <dd className="mt-1 text-[11px] leading-tight text-text-muted">{s.label}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-[480px]"
          >
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4BA9D9]/30 via-[#2680B3]/15 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <Tooth3D className="relative h-full w-full" />

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-2 top-12 hidden sm:block"
            >
              <div className="glass-strong rounded-2xl px-3.5 py-2.5 shadow-[var(--shadow-glass-md)] flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8DCB5A] to-[#6CB33F] text-white">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-primary">Гарантия</div>
                  <div className="text-sm font-bold text-brand-deep">5 лет</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="absolute -right-2 top-1/3 hidden sm:block"
            >
              <div className="glass-strong rounded-2xl px-3.5 py-2.5 shadow-[var(--shadow-glass-md)] flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 text-white">
                  <span className="font-display text-base font-bold">★</span>
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-primary">Отзывы</div>
                  <div className="text-sm font-bold text-brand-deep">4.9 / 5</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute bottom-12 -left-4 hidden sm:block"
            >
              <div className="glass-strong rounded-2xl px-3.5 py-2.5 shadow-[var(--shadow-glass-md)] flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4BA9D9] to-[#2680B3] text-white">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-primary">2 филиала</div>
                  <div className="text-sm font-bold text-brand-deep">Сокол · Беломорская</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
