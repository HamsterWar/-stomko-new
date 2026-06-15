"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall, X, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CallbackWidget() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPulse(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const submit = async () => {
    if (!/^\+?[\d\s()-]{10,18}$/.test(phone)) return;
    await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ callback: true, phone }),
    });
    setSent(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setPulse(false);
        }}
        aria-label="Заказать обратный звонок"
        className="fixed bottom-20 right-4 z-40 md:bottom-6 md:right-6 group cursor-pointer"
      >
        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#FF8C6B] to-[#EA5A3A] ${pulse ? "motion-safe:animate-ping" : ""}`}
          style={{ animationDuration: "1.6s" }}
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C6B] to-[#EA5A3A] text-white shadow-[0_12px_32px_rgba(255,122,89,0.42)] transition-transform group-hover:scale-105">
          <PhoneCall className="h-6 w-6" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-end justify-end p-4 sm:items-center sm:justify-end sm:p-6"
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-brand-deep/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 22, stiffness: 220 }}
              className="relative w-full max-w-sm glass-strong rounded-3xl shadow-[var(--shadow-glass-xl)] p-6"
            >
              <button
                type="button"
                aria-label="Закрыть"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-text-muted hover:text-brand-deep border border-[rgba(38,128,179,0.12)] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {!sent ? (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8C6B] to-[#EA5A3A] text-white shadow-[0_8px_22px_rgba(255,122,89,0.32)]">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-deep">
                    Перезвоним за 30 секунд
                  </h3>
                  <p className="mt-1.5 text-sm text-text-muted">
                    Оставьте номер — администратор Анна перезвонит и ответит на все вопросы.
                  </p>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    inputMode="tel"
                    className="mt-4 w-full rounded-xl border-2 border-[rgba(38,128,179,0.16)] bg-white px-4 py-3 text-base text-brand-deep placeholder:text-text-soft focus:border-brand-primary focus:outline-none"
                  />
                  <Button variant="accent" size="md" className="mt-3 w-full" onClick={submit}>
                    Жду звонка
                  </Button>
                  <p className="mt-3 text-[11px] text-text-soft">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                  </p>
                </>
              ) : (
                <div className="text-center py-2">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#4BA9D9] to-[#2680B3] text-white">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-deep">
                    Заявка принята
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    Перезвоним в течение 30 секунд по номеру{" "}
                    <span className="font-semibold text-brand-deep">{phone}</span>.
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4" onClick={() => setOpen(false)}>
                    Закрыть
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
