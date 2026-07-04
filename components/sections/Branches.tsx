"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { branches } from "@/lib/data/branches";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useBookingModal } from "@/components/conversion/BookingModalContext";
import { cn } from "@/lib/utils/cn";

export function Branches() {
  const reduced = useReducedMotion();
  const { openBooking } = useBookingModal();

  return (
    <section id="filialy" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Где мы"
          title="Два филиала в Москве — |Сокол и Беломорская|"
          subtitle="Обе клиники у метро, с парковкой, работают до 21:00. Выберите ближайший."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {branches.map((b, i) => (
            <motion.article
              key={b.slug}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-[#e3edf5] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(20,66,100,0.1)]"
            >
              <div className={cn("relative h-36 bg-gradient-to-br overflow-hidden", b.gradient)}>
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.35) 0%, transparent 55%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between">
                  <div className="text-white">
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-80">
                      Филиал
                    </div>
                    <div className="font-display text-3xl font-bold leading-none">
                      м. {b.metro}
                    </div>
                  </div>
                  <div className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/30">
                    {b.district}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3.5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                  <div className="text-[15px] text-brand-deep font-medium">{b.address}</div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                  <div className="flex flex-col gap-0.5 text-[15px] text-brand-deep font-medium">
                    {b.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/[^\d+]/g, "")}`} className="hover:text-brand-primary cursor-pointer">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                  <div className="text-sm text-text-body">
                    <div>{b.hours.weekdays}</div>
                    <div>{b.hours.saturday}</div>
                    <div className="text-text-muted">{b.hours.sunday}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[rgba(38,128,179,0.08)]">
                  <Button
                    variant="accent"
                    size="sm"
                    onClick={() => openBooking({ branchSlug: b.slug })}
                    className="flex-1"
                  >
                    Записаться
                  </Button>
                  <a href={b.whatsapp} target="_blank" rel="noopener" className="flex-1">
                    <Button variant="ghost" size="sm" className="w-full">
                      <MessageCircle className="h-4 w-4 text-emerald-500" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
