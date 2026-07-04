export type Branch = {
  slug: string;
  metro: string;
  district: string;
  address: string;
  phones: string[];
  whatsapp: string;
  telegram: string;
  hours: { weekdays: string; saturday: string; sunday?: string };
  yandexMaps: string;
  gradient: string;
};

export const branches: Branch[] = [
  {
    slug: "sokol",
    metro: "Сокол",
    district: "САО, Аэропорт",
    address: "Ленинградский проспект, 77, корп. 4",
    phones: ["+7 (499) 158-84-71", "+7 (495) 451-97-10"],
    whatsapp: "https://wa.me/74991588471",
    telegram: "https://t.me/optimalniyvybor_sokol",
    hours: { weekdays: "Пн–Пт 09:00–21:00", saturday: "Сб 09:00–18:00", sunday: "Вс — выходной" },
    yandexMaps: "https://yandex.ru/maps/?text=Ленинградский+проспект+77+к4",
    gradient: "from-[#4BA9D9] to-[#2680B3]",
  },
  {
    slug: "belomorskaya",
    metro: "Беломорская",
    district: "САО, Левобережный",
    address: "ул. Беломорская, 26",
    phones: ["+7 (495) 451-82-38", "+7 (916) 204-02-00"],
    whatsapp: "https://wa.me/74954518238",
    telegram: "https://t.me/optimalniyvybor_belom",
    hours: { weekdays: "Пн–Пт 09:00–21:00", saturday: "Сб 09:00–18:00", sunday: "Вс — выходной" },
    yandexMaps: "https://yandex.ru/maps/?text=Беломорская+26",
    gradient: "from-[#2680B3] to-[#144264]",
  },
];
