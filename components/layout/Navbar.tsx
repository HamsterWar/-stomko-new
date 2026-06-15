"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { useBookingModal } from "@/components/conversion/BookingModalContext";
import { cn } from "@/lib/utils/cn";

const navItems = [
  { href: "#uslugi", label: "Услуги" },
  { href: "#vrachi", label: "Врачи" },
  { href: "#tseny", label: "Цены" },
  { href: "#otzyvy", label: "Отзывы" },
  { href: "#filialy", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBookingModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-3 top-3 z-50 mx-auto max-w-7xl transition-all duration-300 sm:inset-x-4 sm:top-4",
        scrolled && "sm:top-3"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-4 rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3 transition-all duration-300",
          scrolled
            ? "glass-strong shadow-[var(--shadow-glass-md)]"
            : "glass shadow-[var(--shadow-glass-sm)]"
        )}
      >
        <Link href="/" aria-label="На главную">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-text-body transition-colors hover:bg-[rgba(38,128,179,0.06)] hover:text-brand-primary cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+74991588471"
            className="hidden md:flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-brand-deep hover:bg-[rgba(38,128,179,0.06)] transition-colors cursor-pointer"
          >
            <Phone className="h-4 w-4 text-brand-primary" />
            <span className="hidden xl:inline">+7 (499) 158-84-71</span>
          </a>

          <Button
            variant="accent"
            size="sm"
            onClick={() => openBooking()}
            className="hidden sm:inline-flex"
          >
            Записаться
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 border border-[rgba(38,128,179,0.18)] text-brand-deep cursor-pointer"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-2 rounded-2xl glass-strong p-3 lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-text-body hover:bg-[rgba(38,128,179,0.06)] cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+74991588471"
              className="mt-1 rounded-xl px-4 py-3 text-base font-semibold text-brand-primary flex items-center gap-2 cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              +7 (499) 158-84-71
            </a>
            <Button
              variant="accent"
              size="md"
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
            >
              Записаться онлайн
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
