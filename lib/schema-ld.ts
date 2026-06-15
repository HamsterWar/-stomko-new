import { branches } from "@/lib/data/branches";
import { doctors } from "@/lib/data/doctors";
import { faq } from "@/lib/data/faq";
import { reviewStats } from "@/lib/data/reviews";

const SITE_URL = "https://stomko.ru";
const CLINIC_NAME = "Стоматология «Оптимальный выбор»";

export function clinicLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    name: CLINIC_NAME,
    legalName: "ООО «Дента Престиж»",
    description:
      "Сеть стоматологических клиник в Москве с 1995 года. Имплантация, лечение, протезирование, детская стоматология у метро Сокол и Беломорская.",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.svg`,
    image: `${SITE_URL}/og.jpg`,
    priceRange: "₽₽",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats.averageRating,
      reviewCount: reviewStats.total,
      bestRating: 5,
      worstRating: 1,
    },
    location: branches.map((b) => ({
      "@type": "Place",
      name: `${CLINIC_NAME} — м. ${b.metro}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: "Москва",
        addressRegion: b.district,
        addressCountry: "RU",
      },
      telephone: b.phones[0],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "18:00",
        },
      ],
    })),
    employee: doctors.map((d) => ({
      "@type": "Physician",
      name: d.name,
      jobTitle: d.role,
      medicalSpecialty: d.specialty,
    })),
  };
}

export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
