"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whyUsItems } from "@/lib/data/trust";
import { trustIcons } from "@/components/ui/TrustIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils/cn";

export function WhyUs() {
  const reduced = useReducedMotion();

  return (
    <section className="relative py-20 sm:py-28 bg-section-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Почему мы"
          title="4 причины выбрать |«Оптимальный выбор»|"
          subtitle="Мы работаем с 1995 года, и 85% пациентов приходят к нам по рекомендации. Вот что отличает нас от других клиник."
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
                className="group relative overflow-hidden rounded-3xl bg-white border border-[#e3edf5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[0_20px_48px_rgba(20,66,100,0.1)]"
              >
                <div className="relative">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
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
