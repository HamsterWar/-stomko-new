"use client";

import { Phone, CalendarPlus } from "lucide-react";
import { useBookingModal } from "@/components/conversion/BookingModalContext";

export function StickyMobileBar() {
  const { openBooking } = useBookingModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 safe-bottom md:hidden">
      <div className="mx-3 mb-3 grid grid-cols-2 gap-2 rounded-2xl glass-strong p-2 shadow-[var(--shadow-glass-lg)]">
        <a
          href="tel:+74991588471"
          className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-brand-deep border border-[rgba(38,128,179,0.18)] cursor-pointer"
        >
          <Phone className="h-4 w-4 text-brand-primary" />
          Позвонить
        </a>
        <button
          type="button"
          onClick={() => openBooking()}
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#8DCB5A] via-[#6CB33F] to-[#4F8A2C] py-3 text-sm font-semibold text-white cursor-pointer"
        >
          <CalendarPlus className="h-4 w-4" />
          Записаться
        </button>
      </div>
    </div>
  );
}
