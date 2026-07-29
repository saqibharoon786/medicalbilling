import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import {
  industryPages,
  locationPages,
  resourcePages,
  servicePages,
  specialtyPages,
} from "@/lib/pages-catalog";
import { PILLAR_SERVICE_PATHS, SITE_URL } from "@/lib/site-config";

/** Specialty marketing URL rewrites (public path → kept in sitemap as public URL) */
const specialtyMarketingPaths = [
  "/specialties/mental-health-billing",
  "/specialties/behavioral-health-billing",
  "/specialties/psychiatry-billing",
  "/specialties/dental-billing",
  "/specialties/cardiology-billing",
  "/specialties/orthopedic-billing",
  "/specialties/family-practice-billing",
  "/specialties/urgent-care-billing",
];

const resourceMarketingPaths = ["/resources/icd-10", "/resources/denial-management-guides"];

/**
 * Walks src/app for page.tsx files so new static routes are auto-included.
 * Dynamic [slug] folders are expanded from pages-catalog.
 */
function discoverStaticAppRoutes(): string[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes = new Set<string>();

  function walk(dir: string, urlPath: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.name === "api" || entry.name.startsWith("_")) continue;
      const full = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Skip dynamic segments — expanded from catalogs
        if (entry.name.startsWith("[") && entry.name.endsWith("]")) continue;
        walk(full, `${urlPath}/${entry.name}`);
        continue;
      }

      if (/^page\.(t|j)sx?$/.test(entry.name)) {
        routes.add(urlPath || "/");
      }
    }
  }

  walk(appDir, "");
  return [...routes];
}

function entry(pathname: string, priority = 0.7, changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "weekly"): MetadataRoute.Sitemap[0] {
  const clean = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return {
    url: `${SITE_URL}${clean === "/" ? "" : clean}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const discovered = discoverStaticAppRoutes();
  const paths = new Set<string>([
    ...discovered,
    ...PILLAR_SERVICE_PATHS,
    ...specialtyMarketingPaths,
    ...resourceMarketingPaths,
    ...servicePages.map((p) => `/services/${p.slug}`),
    ...specialtyPages.map((p) => `/specialties/${p.slug}`),
    ...resourcePages.map((p) => `/resources/${p.slug}`),
    ...locationPages.map((p) => `/locations/${p.slug}`),
    ...industryPages.map((p) => `/industries/${p.slug}`),
  ]);

  // Prefer marketing URLs for known pillars; keep /services/* too for coverage
  const prioritized = [...paths].map((p) => {
    if (p === "/") return entry(p, 1, "daily");
    if ((PILLAR_SERVICE_PATHS as readonly string[]).includes(p)) return entry(p, 0.95, "weekly");
    if (p.startsWith("/specialties/")) return entry(p, 0.8, "weekly");
    if (p.startsWith("/services/")) return entry(p, 0.75, "weekly");
    if (p === "/contact" || p === "/faq") return entry(p, 0.85, "monthly");
    return entry(p, 0.65, "monthly");
  });

  prioritized.sort((a, b) => a.url.localeCompare(b.url));
  return prioritized;
}
