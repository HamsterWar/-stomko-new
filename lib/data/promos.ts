export type Promo = {
  slug: string;
  badge: string;
  title: string;
  price: string;
  oldPrice?: string;
  description: string;
  condition: string;
  featured?: boolean;
};

export const promos: Promo[] = [
  {
    slug: "gigiena",
    badge: "Постоянная акция",
    title: "Профессиональная гигиена полости рта",
    price: "6 000 ₽",
    oldPrice: "7 800 ₽",
    description:
      "Удаление твёрдого зубного налёта при помощи ультразвука, полировка зубов.",
    condition: "Для всех пациентов клиники",
    featured: true,
  },
  {
    slug: "otbelivanie-ponedelnik",
    badge: "Только по понедельникам",
    title: "Отбеливание зубов",
    price: "12 000 ₽",
    oldPrice: "14 000 ₽",
    description:
      "Безопасное отбеливание зубов по специальной цене. В понедельник профгигиена — также 6 000 ₽.",
    condition: "Акция действует по понедельникам",
  },
  {
    slug: "skidka-10",
    badge: "Постоянным пациентам",
    title: "Скидка 10% на все услуги",
    price: "−10%",
    description:
      "Скидка распространяется на весь спектр услуг клиники — от лечения до протезирования.",
    condition: "Со второго визита; пенсионерам — с первого визита",
  },
];
