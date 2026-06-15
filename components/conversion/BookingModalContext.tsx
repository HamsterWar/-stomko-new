"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type BookingContext = {
  isOpen: boolean;
  preset: { serviceSlug?: string; doctorSlug?: string; branchSlug?: string };
  openBooking: (preset?: BookingContext["preset"]) => void;
  closeBooking: () => void;
};

const Ctx = createContext<BookingContext | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<BookingContext["preset"]>({});

  const openBooking = useCallback((p: BookingContext["preset"] = {}) => {
    setPreset(p);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ isOpen, preset, openBooking, closeBooking }}>{children}</Ctx.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBookingModal must be used inside BookingModalProvider");
  return ctx;
}
