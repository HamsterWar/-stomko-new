"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PreFooterCTA() {
  const reduced = useReducedMotion();
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\+?[\d\s()-]{10,18}$/.test(phone)) return;
    await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "pre-footer", phone }),
    });
    setSent(true);
  };

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2680B3] via-[#1C5F87] to-[#144264] p-8 sm:p-12 text-white shadow-[var(--shadow-glass-xl)]"
        >
          <div
            className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full opacity-35 blur-3xl motion-safe:animate-[blob_20s_ease-in-out_infinite]"
            style={{ background: "radial-gradient(circle, #4BA9D9 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-20 h-[380px] w-[380px] rounded-full opacity-30 blur-3xl motion-safe:animate-[blob_24s_ease-in-out_infinite]"
            style={{ background: "radial-gradient(circle, #6CB33F 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 backdrop-blur-sm border border-white/15">
                <Sparkles className="h-3.5 w-3.5" />
                Бесплатная консультация
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
                Запишитесь на осмотр
                <br /> и план лечения — <span className="text-sky-200">бесплатно</span>
              </h2>
              <p className="mt-4 text-base text-white/80 max-w-lg leading-relaxed">
                Оставьте телефон — администратор клиники перезвонит за 5 минут, подберёт удобное
                время и напомнит за день до визита.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <div className="flex items-center gap-2 text-white/85">
                  <ShieldCheck className="h-4 w-4 text-sky-200" />
                  30 лет опыта
                </div>
                <div className="flex items-center gap-2 text-white/85">
                  <ShieldCheck className="h-4 w-4 text-sky-200" />
                  Скидка 10% постоянным пациентам
                </div>
                <div className="flex items-center gap-2 text-white/85">
                  <ShieldCheck className="h-4 w-4 text-sky-200" />
                  Без боли
                </div>
              </div>
            </div>

            <form onSubmit={submit} className="rounded-3xl bg-white/12 backdrop-blur-md p-5 sm:p-7 border border-white/20 shadow-[0_24px_56px_rgba(0,0,0,0.2)]">
              {!sent ? (
                <>
                  <label className="text-sm font-semibold text-white">Ваш телефон</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    inputMode="tel"
                    className="mt-2 w-full rounded-xl border-2 border-white/25 bg-white/95 px-4 py-3 text-base text-brand-deep placeholder:text-text-soft focus:border-white focus:outline-none transition-colors"
                  />
                  <Button variant="accent" size="lg" type="submit" className="mt-3 w-full">
                    <Phone className="h-4 w-4" />
                    Получить консультацию
                  </Button>
                  <p className="mt-3 text-[11px] text-white/60 leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных. Никакого
                    спама — только подтверждение записи.
                  </p>
                </>
              ) : (
                <div className="py-4 text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-primary">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Заявка принята!</h3>
                  <p className="mt-1.5 text-sm text-white/80">
                    Перезвоним в течение 5 минут на номер{" "}
                    <span className="font-semibold">{phone}</span>.
                  </p>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
