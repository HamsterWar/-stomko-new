"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Phone, ShieldCheck, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useBookingModal } from "@/components/conversion/BookingModalContext";
import { heroStats } from "@/lib/data/trust";

export function Hero() {
  const reduced = useReducedMotion();
  const { openBooking } = useBookingModal();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 16 });
  const sy = useSpring(my, { stiffness: 60, damping: 16 });

  const photoX = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const photoY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const discX = useTransform(sx, [-0.5, 0.5], [6, -6]);
  const discY = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const chipNearX = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const chipNearY = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const chipFarX = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const chipFarY = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const glowX = useTransform(sx, [-0.5, 0.5], [-14, 14]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f8fc] via-white to-white pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              <span className="block h-px w-8 bg-brand-primary/50" aria-hidden="true" />
              Стоматология в Москве с 1995 года
            </div>

            <h1 className="mt-6 font-display text-[38px] leading-[1.05] font-bold tracking-tight text-brand-deep sm:text-5xl lg:text-[64px]">
              30 лет заботы
              <br />о вашей{" "}
              <span className="text-gradient-brand">улыбке</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-text-muted leading-relaxed sm:text-lg">
              Имплантация, лечение и протезирование зубов у метро{" "}
              <span className="font-semibold text-brand-deep">Сокол</span> и{" "}
              <span className="font-semibold text-brand-deep">Беломорская</span>.
              Опытные врачи, честные цены и первая консультация — бесплатно.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                className="btn-sheen-auto"
                onClick={() => openBooking()}
              >
                Записаться на приём
              </Button>
              <a href="tel:+74991588471">
                <Button variant="ghost" size="lg">
                  <Phone className="h-5 w-5 text-brand-primary" />
                  +7 (499) 158-84-71
                </Button>
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-text-muted">
              <ShieldCheck className="h-4 w-4 text-brand-green" />
              Осмотр, план лечения и цены — без обязательств
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-[#e3edf5] pt-8 sm:grid-cols-4">
              {heroStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className={
                    i > 0
                      ? "sm:border-l sm:border-[#e3edf5] sm:pl-6"
                      : undefined
                  }
                >
                  <dt className="font-display text-[34px] leading-none font-bold text-brand-deep sm:text-4xl">
                    {s.value}
                    <span className="ml-1 text-base font-bold text-brand-primary align-baseline">
                      {s.suffix}
                    </span>
                  </dt>
                  <dd className="mt-2 max-w-[150px] text-xs leading-snug text-text-soft">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="relative mx-auto w-full max-w-[440px]"
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="absolute -inset-10 rounded-full opacity-60 blur-3xl"
              style={{
                x: glowX,
                background:
                  "radial-gradient(circle at 55% 40%, rgba(75,169,217,0.28) 0%, rgba(108,179,63,0.1) 55%, transparent 75%)",
              }}
              aria-hidden="true"
            />

            <div className="relative aspect-[3/4] w-full">
              <motion.div
                style={reduced ? undefined : { x: discX, y: discY }}
                className="absolute inset-x-[3%] bottom-[6%] aspect-square rounded-full bg-[radial-gradient(circle_at_50%_32%,#e3f2fb_0%,#c2e2f4_55%,#a3d1ec_100%)] shadow-[inset_0_-24px_60px_rgba(38,128,179,0.18)] will-change-transform"
                aria-hidden="true"
              />
              <motion.div
                style={reduced ? undefined : { x: photoX, y: photoY }}
                className="absolute inset-0 will-change-transform [filter:drop-shadow(0_34px_54px_rgba(20,66,100,0.3))]"
              >
                <Image
                  src="/doctors/markov-hero.png"
                  alt="Марков Юрий Сергеевич — главный врач клиники «Оптимальный выбор»"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_93%,transparent_100%)]"
                />
              </motion.div>
              <div className="absolute -bottom-5 left-1/2 w-max max-w-full -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-3 text-center shadow-[0_16px_40px_rgba(20,66,100,0.16)] backdrop-blur-sm">
                <div className="font-display text-base font-bold leading-tight text-brand-deep">
                  Марков Юрий Сергеевич
                </div>
                <div className="mt-0.5 text-xs text-text-soft">
                  Главный врач · стоматолог-ортопед, хирург
                </div>
              </div>
            </div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={reduced ? undefined : { x: chipNearX, y: chipNearY }}
              className="absolute -left-6 top-10 hidden sm:block"
            >
              <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(20,66,100,0.16)] backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8DCB5A] to-[#4F8A2C] text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-base font-bold text-brand-deep">30 лет</div>
                  <div className="text-[11px] text-text-soft">опыта клиники</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              style={reduced ? undefined : { x: chipFarX, y: chipFarY }}
              className="absolute -right-7 top-1/3 hidden sm:block"
            >
              <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(20,66,100,0.16)] backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4BA9D9] to-[#2680B3] text-white">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-base font-bold text-brand-deep">4.9 / 5</div>
                  <div className="text-[11px] text-text-soft">487 отзывов</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={reduced ? undefined : { x: chipNearX, y: chipFarY }}
              className="absolute -left-4 bottom-24 hidden sm:block"
            >
              <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(20,66,100,0.16)] backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4BA9D9] to-[#2680B3] text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-base font-bold text-brand-deep">2 филиала</div>
                  <div className="text-[11px] text-text-soft">Сокол · Беломорская</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
