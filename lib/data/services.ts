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
    short: "Импланты под ключ за 1 день",
    description:
      "Восстанавливаем один зуб или всю челюсть. Работаем с системами Straumann, Astra Tech, Nobel Biocare — пожизненная гарантия от производителя.",
    priceFrom: 35000,
    icon: "implant",
    gradient: "from-cyan-400/30 to-teal-500/20",
    benefits: ["Гарантия на работу 5 лет", "Рассрочка 0%", "3D-планирование"],
  },
  {
    slug: "lechenie-zubov",
    title: "Лечение зубов",
    short: "Без боли и страха",
    description:
      "Лечение кариеса любой сложности, эндодонтия (каналы) под микроскопом, реставрация передних зубов. Используем композиты последнего поколения.",
    priceFrom: 3800,
    icon: "tooth",
    gradient: "from-cyan-300/30 to-cyan-500/20",
    benefits: ["Лечение под микроскопом", "Гарантия 2 года", "Без боли"],
  },
  {
    slug: "hirurgiya",
    title: "Хирургия",
    short: "Удаление зубов мудрости",
    description:
      "Атравматичное удаление зубов мудрости, в том числе сложных и дистопированных. Костная пластика, синус-лифтинг при подготовке к имплантации.",
    priceFrom: 4500,
    icon: "scalpel",
    gradient: "from-rose-300/25 to-orange-400/20",
    benefits: ["Седация по показаниям", "Заживление за 5–7 дней", "Опытные хирурги"],
  },
  {
    slug: "protezirovanie",
    title: "Протезирование",
    short: "Коронки, виниры, мосты",
    description:
      "Эстетическое восстановление зубного ряда — циркониевые коронки, керамические виниры E.max, бюгельные и съёмные протезы. CAD/CAM моделирование.",
    priceFrom: 18000,
    icon: "crown",
    gradient: "from-amber-300/25 to-orange-300/15",
    benefits: ["CAD/CAM-точность", "Естественный вид", "Гарантия 3 года"],
  },
  {
    slug: "ortodontiya",
    title: "Ортодонтия",
    short: "Брекеты и элайнеры",
    description:
      "Исправление прикуса в любом возрасте — современные металлические, керамические, лингвальные брекеты, элайнеры Invisalign и Star Smile.",
    priceFrom: 45000,
    icon: "braces",
    gradient: "from-fuchsia-300/20 to-cyan-400/20",
    benefits: ["Невидимые элайнеры", "Контроль 1 раз в месяц", "Беспроцентная рассрочка"],
  },
  {
    slug: "gigiena-otbelivanie",
    title: "Гигиена и отбеливание",
    short: "Профчистка + Zoom 4",
    description:
      "Air Flow, ультразвук, полировка и фторирование. Отбеливание Zoom 4 — до 8 тонов за 1 визит без вреда для эмали.",
    priceFrom: 4500,
    icon: "sparkle",
    gradient: "from-cyan-200/40 to-emerald-200/30",
    benefits: ["Air Flow Pro", "Отбеливание Zoom 4", "Без боли"],
  },
  {
    slug: "detskaya-stomatologiya",
    title: "Детская стоматология",
    short: "Лечим без слёз",
    description:
      "Детские стоматологи с подходом к самым маленьким. Серебрение, ICON, лечение в игровой форме, седация закисью азота при необходимости.",
    priceFrom: 1800,
    icon: "child",
    gradient: "from-sky-300/30 to-cyan-300/25",
    benefits: ["Адаптация к врачу", "ICON и серебрение", "Седация закисью"],
  },
  {
    slug: "diagnostika",
    title: "Диагностика",
    short: "КТ, рентген, осмотр",
    description:
      "Компьютерная томография (3D-снимок челюсти), прицельные снимки, осмотр и план лечения. Первичная консультация — бесплатно.",
    priceFrom: 0,
    icon: "scan",
    gradient: "from-teal-300/30 to-cyan-300/25",
    benefits: ["Консультация бесплатно", "КТ за 3 минуты", "План лечения сразу"],
  },
];

export const priceTeasers = [
  { title: "Имплант под ключ", price: "от 45 000 ₽" },
  { title: "Профчистка Air Flow", price: "от 4 500 ₽" },
  { title: "Лечение кариеса", price: "от 3 800 ₽" },
  { title: "Циркониевая коронка", price: "от 22 000 ₽" },
  { title: "Отбеливание Zoom 4", price: "от 18 000 ₽" },
  { title: "Удаление зуба", price: "от 2 500 ₽" },
];
