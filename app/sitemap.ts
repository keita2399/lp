import { MetadataRoute } from "next";
import { projects, legacyProjects } from "@/data/projects";

const BASE_URL = "https://lp-keita.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages = [...projects, ...legacyProjects].map((p) => ({
    url: `${BASE_URL}/works/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...workPages,
  ];
}
