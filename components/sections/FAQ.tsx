"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "@/lib/data/faq";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils/cn";

export function FAQ() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Частые вопросы |наших пациентов|"
          subtitle="Не нашли ответ? Позвоните или напишите в WhatsApp — администратор ответит за 5 минут."
        />

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.question}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: (i % 4) * 0.04 }}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300",
                  isOpen
                    ? "border-brand-primary/40 bg-white shadow-[var(--shadow-glass-md)]"
                    : "border-[rgba(38,128,179,0.12)] bg-white/60 hover:bg-white"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-brand-deep sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                      isOpen
                        ? "bg-gradient-to-br from-[#4BA9D9] to-[#2680B3] text-white rotate-45"
                        : "bg-[rgba(38,128,179,0.08)] text-brand-primary"
                    )}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="px-5 pb-5 -mt-1 text-[15px] text-text-body leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
