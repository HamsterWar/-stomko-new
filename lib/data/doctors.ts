export type Doctor = {
  slug: string;
  name: string;
  role: string;
  specialty: string[];
  experience: number;
  initials: string;
  bio: string;
  accent: string;
};

export const doctors: Doctor[] = [
  {
    slug: "markov-yu-s",
    name: "Юрий Сергеевич Марков",
    role: "Главный врач, стоматолог-ортопед",
    specialty: ["Протезирование", "Имплантация"],
    experience: 30,
    initials: "ЮМ",
    bio: "Основатель клиники. Специализируется на полной реабилитации зубного ряда, имплантации и сложном протезировании.",
    accent: "from-cyan-400 to-teal-500",
  },
  {
    slug: "darina-v-n",
    name: "Валерия Николаевна Дарьина",
    role: "Стоматолог-терапевт",
    specialty: ["Терапия", "Эндодонтия"],
    experience: 18,
    initials: "ВД",
    bio: "Лечение зубов и каналов под микроскопом. Эстетическая реставрация передней группы зубов.",
    accent: "from-cyan-300 to-sky-500",
  },
  {
    slug: "devitsky-m-a",
    name: "Михаил Александрович Девицкий",
    role: "Стоматолог-хирург, имплантолог",
    specialty: ["Хирургия", "Имплантация"],
    experience: 15,
    initials: "МД",
    bio: "Атравматичное удаление зубов мудрости, синус-лифтинг, имплантация по протоколу All-on-4 и All-on-6.",
    accent: "from-teal-400 to-cyan-600",
  },
  {
    slug: "kibenko-yu-d",
    name: "Юлия Дмитриевна Кибенко",
    role: "Стоматолог-терапевт, пародонтолог",
    specialty: ["Терапия", "Пародонтология"],
    experience: 12,
    initials: "ЮК",
    bio: "Лечение кариеса, профессиональная гигиена, лечение дёсен. Внимательно работает с пациентами со страхом.",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    slug: "egorov-a-m",
    name: "Антон Михайлович Егоров",
    role: "Стоматолог-ортопед",
    specialty: ["Протезирование"],
    experience: 14,
    initials: "АЕ",
    bio: "Циркониевые коронки, виниры E.max, полная реставрация улыбки. Цифровая стоматология CAD/CAM.",
    accent: "from-amber-400 to-orange-400",
  },
  {
    slug: "markov-r-yu",
    name: "Роман Юрьевич Марков",
    role: "Стоматолог-хирург, имплантолог",
    specialty: ["Хирургия", "Имплантация"],
    experience: 10,
    initials: "РМ",
    bio: "Имплантация Straumann и Astra Tech. Костная пластика, навигационная хирургия по 3D-шаблонам.",
    accent: "from-cyan-500 to-teal-600",
  },
  {
    slug: "ryazantseva-p-a",
    name: "Полина Алексеевна Рязанцева",
    role: "Стоматолог-ортодонт",
    specialty: ["Ортодонтия"],
    experience: 9,
    initials: "ПР",
    bio: "Брекеты, элайнеры Invisalign и Star Smile. Исправление прикуса у подростков и взрослых.",
    accent: "from-fuchsia-400 to-cyan-400",
  },
  {
    slug: "golodnova-m-a",
    name: "Мария Александровна Голоднова",
    role: "Детский стоматолог",
    specialty: ["Детская стоматология"],
    experience: 11,
    initials: "МГ",
    bio: "Лечит детей от 1 года. Адаптация к креслу, лечение в игровой форме, седация закисью азота.",
    accent: "from-sky-400 to-cyan-300",
  },
  {
    slug: "bashkirova-yu",
    name: "Юлия Башкирова",
    role: "Гигиенист стоматологический",
    specialty: ["Гигиена"],
    experience: 8,
    initials: "ЮБ",
    bio: "Профессиональная чистка Air Flow и ультразвуком. Обучение домашней гигиене, реминерализация.",
    accent: "from-teal-300 to-emerald-400",
  },
];
