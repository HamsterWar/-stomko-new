export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  priceFrom: number;
  icon: string;
  gradient: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "implantatsiya",
    title: "Имплантация зубов",
    short: "Dentium и Astra Tech",
    description:
      "Восстанавливаем один зуб или весь зубной ряд. Работаем с проверенными системами Dentium и Astra Tech, выполняем синус-лифтинг при недостатке костной ткани.",
    priceFrom: 38000,
    icon: "implant",
    gradient: "from-[#4BA9D9]/15 to-[#2680B3]/10",
    benefits: ["Импланты Dentium и Astra", "Синус-лифтинг", "Коронки на имплантах"],
  },
  {
    slug: "lechenie-zubov",
    title: "Лечение зубов",
    short: "Без боли и страха",
    description:
      "Лечение кариеса любой сложности, лечение корневых каналов, эстетическая реставрация передних зубов. Используем композиты последнего поколения.",
    priceFrom: 3700,
    icon: "tooth",
    gradient: "from-[#4BA9D9]/15 to-[#1C5F87]/10",
    benefits: ["Современная анестезия", "Эстетическая реставрация", "Лечение каналов"],
  },
  {
    slug: "hirurgiya",
    title: "Хирургия",
    short: "Удаление любой сложности",
    description:
      "Атравматичное удаление зубов, в том числе сложных зубов мудрости. Удаление корней и кист, резекция верхушки корня.",
    priceFrom: 2500,
    icon: "scalpel",
    gradient: "from-[#2680B3]/12 to-[#144264]/8",
    benefits: ["Атравматичное удаление", "Опытные хирурги", "Быстрое заживление"],
  },
  {
    slug: "protezirovanie",
    title: "Протезирование",
    short: "Коронки, мосты, протезы",
    description:
      "Металлокерамика, безметалловая керамика, коронки из диоксида циркония. Съёмные, полные и бюгельные протезы, протезы без нёба.",
    priceFrom: 9500,
    icon: "crown",
    gradient: "from-[#6CB33F]/12 to-[#4F8A2C]/8",
    benefits: ["Диоксид циркония", "Протезы без нёба", "Естественный вид"],
  },
  {
    slug: "gigiena-otbelivanie",
    title: "Гигиена и отбеливание",
    short: "Профчистка от 6 000 ₽",
    description:
      "Профессиональная гигиена полости рта: снятие твёрдого зубного налёта ультразвуком, полировка. Безопасное отбеливание зубов.",
    priceFrom: 6000,
    icon: "sparkle",
    gradient: "from-[#6CB33F]/15 to-[#8DCB5A]/10",
    benefits: ["Ультразвуковая чистка", "Отбеливание", "Акция по понедельникам"],
  },
  {
    slug: "diagnostika",
    title: "Диагностика",
    short: "Снимки, осмотр, план",
    description:
      "Прицельные снимки, визиография, панорамные снимки. Осмотр, диагностика и подробный план лечения. Первичная консультация — бесплатно.",
    priceFrom: 0,
    icon: "scan",
    gradient: "from-[#4BA9D9]/15 to-[#2680B3]/10",
    benefits: ["Консультация бесплатно", "Визиография", "План лечения сразу"],
  },
];

export const priceTeasers = [
  { title: "Первичная консультация", price: "бесплатно" },
  { title: "Имплант Dentium", price: "38 000 ₽" },
  { title: "Профессиональная гигиена", price: "от 6 000 ₽" },
  { title: "Лечение кариеса", price: "от 3 700 ₽" },
  { title: "Коронка металлокерамическая", price: "от 9 500 ₽" },
  { title: "Коронка из диоксида циркония", price: "35 500 ₽" },
  { title: "Отбеливание зубов", price: "14 000 ₽" },
  { title: "Удаление зуба", price: "от 2 500 ₽" },
];
