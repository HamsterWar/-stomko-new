import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { branches } from "@/lib/data/branches";

const BASE = "https://stomko.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/uslugi`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/vrachi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tseny`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/aktsii`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/otzyvy`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/o-klinike`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/kontakty`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...services.map((s) => ({
      url: `${BASE}/uslugi/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...doctors.map((d) => ({
      url: `${BASE}/vrachi/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...branches.map((b) => ({
      url: `${BASE}/filialy/${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
