export type Doctor = {
  slug: string;
  name: string;
  role: string;
  specialty: string[];
  experience: number;
  initials: string;
  photo: string;
  bio: string;
  accent: string;
};

export const doctors: Doctor[] = [
  {
    slug: "markov-yu-s",
    name: "Юрий Сергеевич Марков",
    role: "Главный врач, стоматолог-ортопед, хирург",
    specialty: ["Протезирование", "Хирургия", "Имплантация"],
    experience: 30,
    initials: "ЮМ",
    photo: "/doctors/markov-yu-s.jpg",
    bio: "Основатель клиники. Специализируется на полной реабилитации зубного ряда, сложном протезировании и хирургии.",
    accent: "from-[#4BA9D9] to-[#2680B3]",
  },
  {
    slug: "darina-v-n",
    name: "Валерия Николаевна Дарьина",
    role: "Стоматолог-терапевт",
    specialty: ["Терапия", "Эндодонтия"],
    experience: 18,
    initials: "ВД",
    photo: "/doctors/darina-v-n.jpg",
    bio: "Лечение кариеса и корневых каналов любой сложности. Эстетическая реставрация передней группы зубов.",
    accent: "from-[#4BA9D9] to-[#1C5F87]",
  },
  {
    slug: "devitsky-m-a",
    name: "Михаил Александрович Девицкий",
    role: "Стоматолог-ортопед, хирург",
    specialty: ["Протезирование", "Хирургия"],
    experience: 15,
    initials: "МД",
    photo: "/doctors/devitsky-m-a.jpg",
    bio: "Атравматичное удаление зубов, в том числе зубов мудрости. Протезирование коронками и мостовидными протезами.",
    accent: "from-[#2680B3] to-[#144264]",
  },
  {
    slug: "kibenko-yu-d",
    name: "Юлия Дмитриевна Кибенко",
    role: "Стоматолог-терапевт",
    specialty: ["Терапия", "Гигиена"],
    experience: 12,
    initials: "ЮК",
    photo: "/doctors/kibenko-yu-d.jpg",
    bio: "Лечение кариеса, профессиональная гигиена полости рта. Внимательно работает с пациентами со страхом стоматолога.",
    accent: "from-[#6CB33F] to-[#4F8A2C]",
  },
  {
    slug: "egorov-a-m",
    name: "Антон Михайлович Егоров",
    role: "Стоматолог-имплантолог",
    specialty: ["Имплантация"],
    experience: 14,
    initials: "АЕ",
    photo: "/doctors/egorov-a-m.jpg",
    bio: "Имплантация систем Dentium и Astra Tech: от одиночных имплантов до восстановления всего зубного ряда.",
    accent: "from-[#4BA9D9] to-[#2680B3]",
  },
  {
    slug: "markov-r-yu",
    name: "Роман Юрьевич Марков",
    role: "Стоматолог-ортопед",
    specialty: ["Протезирование"],
    experience: 10,
    initials: "РМ",
    photo: "/doctors/markov-r-yu.jpg",
    bio: "Коронки из металлокерамики и диоксида циркония, съёмные и бюгельные протезы, протезирование на имплантах.",
    accent: "from-[#2680B3] to-[#1C5F87]",
  },
  {
    slug: "ryazantseva-p-a",
    name: "Полина Алексеевна Рязанцева",
    role: "Стоматолог-терапевт",
    specialty: ["Терапия"],
    experience: 9,
    initials: "ПР",
    photo: "/doctors/ryazantseva-p-a.jpg",
    bio: "Лечение кариеса и его осложнений, эстетические реставрации, профессиональная гигиена полости рта.",
    accent: "from-[#4BA9D9] to-[#1C5F87]",
  },
  {
    slug: "golodnova-m-a",
    name: "Мария Александровна Голоднова",
    role: "Стоматолог-терапевт",
    specialty: ["Терапия"],
    experience: 11,
    initials: "МГ",
    photo: "/doctors/golodnova-m-a.jpg",
    bio: "Лечение кариеса и пульпита, восстановление зубов пломбировочными материалами последнего поколения.",
    accent: "from-[#6CB33F] to-[#4F8A2C]",
  },
];
