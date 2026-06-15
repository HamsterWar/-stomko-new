import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans } from "next/font/google";
import { BookingModalProvider } from "@/components/conversion/BookingModalContext";
import { BookingModal } from "@/components/conversion/BookingModal";
import { CallbackWidget } from "@/components/conversion/CallbackWidget";
import { MessengersFloat } from "@/components/conversion/MessengersFloat";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { clinicLd } from "@/lib/schema-ld";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2680B3",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stomko.ru"),
  title: {
    default: "Стоматология «Оптимальный выбор» — м. Сокол и Беломорская | С 1995 года",
    template: "%s — Стоматология «Оптимальный выбор»",
  },
  description:
    "Сеть стоматологических клиник в Москве с 1995 года. Имплантация, лечение, протезирование, детская стоматология у метро Сокол и Беломорская. Гарантия 5 лет, рассрочка 0%.",
  keywords: [
    "стоматология Москва",
    "стоматология Сокол",
    "стоматология Беломорская",
    "имплантация зубов",
    "лечение зубов без боли",
    "протезирование",
    "детская стоматология",
    "Оптимальный выбор",
  ],
  authors: [{ name: "ООО «Дента Престиж»" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Стоматология «Оптимальный выбор» — м. Сокол и Беломорская | С 1995 года",
    description:
      "Имплантация, лечение, протезирование, детская стоматология. Гарантия 5 лет, рассрочка 0%. Бесплатная консультация.",
    siteName: "Оптимальный выбор",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${notoSans.variable}`}>
      <body className="bg-white text-text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicLd()) }}
        />
        <BookingModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyMobileBar />
          <MessengersFloat />
          <CallbackWidget />
          <BookingModal />
        </BookingModalProvider>
      </body>
    </html>
  );
}
