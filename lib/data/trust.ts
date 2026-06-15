export type TrustPoint = {
  icon: "shield" | "spark" | "wallet" | "syringe" | "clock";
  title: string;
  caption: string;
};

export const trustPoints: TrustPoint[] = [
  {
    icon: "shield",
    title: "Гарантия 5 лет",
    caption: "Письменная гарантия на каждую работу",
  },
  {
    icon: "spark",
    title: "Стерилизация EN ISO",
    caption: "Полный 6-этапный цикл по европейскому стандарту",
  },
  {
    icon: "wallet",
    title: "Рассрочка 0%",
    caption: "До 12 месяцев без переплат — за 15 минут",
  },
  {
    icon: "syringe",
    title: "Без боли",
    caption: "Современная анестезия и седация закисью",
  },
  {
    icon: "clock",
    title: "Работаем до 21:00",
    caption: "Удобный график для занятых",
  },
];

export const heroStats = [
  { value: "30", suffix: "лет", label: "опыт работы с 1995 года" },
  { value: "9", suffix: "врачей", label: "стоматологов-экспертов" },
  { value: "487", suffix: "отзывов", label: "средняя оценка 4.9★" },
  { value: "0%", suffix: "", label: "рассрочка до 12 месяцев" },
];

export const whyUsItems = [
  {
    title: "30 лет в Москве",
    description:
      "С 1995 года помогли 28 000+ пациентов. Знаем, как работать с любыми клиническими случаями.",
    icon: "history",
    accent: "from-cyan-400 to-teal-500",
  },
  {
    title: "Технологии нового поколения",
    description:
      "3D-томограф, цифровой протокол CAD/CAM, лечение под микроскопом, навигационная имплантация.",
    icon: "tech",
    accent: "from-fuchsia-400 to-cyan-500",
  },
  {
    title: "Стандарт безопасности",
    description:
      "Стерилизация по EN ISO 17665, одноразовые инструменты, контроль каждого цикла, регулярный аудит.",
    icon: "shield",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Работаем со страхами",
    description:
      "Седация закисью азота, медикаментозный сон, психологический подход к взрослым и детям.",
    icon: "heart",
    accent: "from-rose-400 to-orange-400",
  },
];
