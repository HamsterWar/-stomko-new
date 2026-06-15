import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { branches } from "@/lib/data/branches";
import { services } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-[#144264] via-[#1C5F87] to-[#2680B3] text-white">
      <div
        aria-hidden="true"
        className="absolute -top-20 right-0 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #4BA9D9 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-10 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #6CB33F 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="onDark" />
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-sm">
              Сеть стоматологических клиник «Оптимальный выбор» в Москве с 1995 года. Имплантация,
              лечение, протезирование, детская стоматология у метро Сокол и Беломорская.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Лицензия ЛО-77-01</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">EN ISO 17665</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">30 лет опыта</span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Услуги
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/uslugi/${s.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Информация
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/o-klinike" className="text-sm text-white/70 hover:text-white cursor-pointer">О клинике</Link></li>
              <li><Link href="/vrachi" className="text-sm text-white/70 hover:text-white cursor-pointer">Врачи</Link></li>
              <li><Link href="/tseny" className="text-sm text-white/70 hover:text-white cursor-pointer">Цены</Link></li>
              <li><Link href="/aktsii" className="text-sm text-white/70 hover:text-white cursor-pointer">Акции</Link></li>
              <li><Link href="/otzyvy" className="text-sm text-white/70 hover:text-white cursor-pointer">Отзывы</Link></li>
              <li><Link href="/kontakty" className="text-sm text-white/70 hover:text-white cursor-pointer">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Филиалы
            </h3>
            <div className="mt-4 space-y-5">
              {branches.map((b) => (
                <div key={b.slug} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-sm font-semibold">м. {b.metro}</div>
                  <div className="mt-2 space-y-1.5 text-sm text-white/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{b.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <a href={`tel:${b.phones[0].replace(/[^\d+]/g, "")}`} className="hover:text-white cursor-pointer">
                        {b.phones[0]}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{b.hours.weekdays}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © 1995–{new Date().getFullYear()} ООО «Дента Престиж». Все права защищены. Имеются
            противопоказания, необходима консультация специалиста.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/55">
            <Link href="/politika" className="hover:text-white cursor-pointer">Политика конфиденциальности</Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/dokumenty" className="hover:text-white cursor-pointer">Лицензии</Link>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:info@stomko.ru" className="flex items-center gap-1.5 hover:text-white cursor-pointer">
              <Mail className="h-3.5 w-3.5" />
              info@stomko.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
