"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whyUsItems } from "@/lib/data/trust";
import { trustIcons } from "@/components/ui/TrustIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils/cn";

export function WhyUs() {
  const reduced = useReducedMotion();

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-transparent via-[#EEF7FC]/60 to-transparent">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Почему мы"
          title="4 причины выбрать |«Оптимальный выбор»|"
          subtitle="Мы помогли 28 000+ пациентам с 1995 года. Вот что отличает нас от других клиник."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {whyUsItems.map((item, i) => {
            const Icon = trustIcons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-[rgba(38,128,179,0.1)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glass-lg)]"
              >
                <div
                  className={cn(
                    "absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-25 blur-3xl bg-gradient-to-br transition-opacity duration-300 group-hover:opacity-50",
                    item.accent
                  )}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[var(--shadow-glass-md)]",
                      item.accent
                    )}
                  >
                    {Icon && <Icon className="h-7 w-7" />}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold leading-tight text-brand-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
