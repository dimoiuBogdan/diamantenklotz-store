import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";

// Define the base URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diamantenklotz.de";

// Define the main routes that should be in the sitemap
const routes = [
  {
    path: "/",
    changefreq: "daily",
    priority: 1,
  },
  {
    path: "/about",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/products",
    changefreq: "daily",
    priority: 0.9,
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: 0.7,
  },
] as const;

// Generate sitemap entries for all routes and locales
export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add entries for each route
  routes.forEach((route) => {
    // For SEO routes, we don't add locale prefix
    sitemapEntries.push({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changefreq,
      priority: route.priority,
    });

    // Add localized versions (except for default paths which are handled above)
    routing.locales.forEach((locale) => {
      // Skip the default locale as it's handled in the non-prefixed routes above
      if (locale !== routing.defaultLocale) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}${route.path}`,
          lastModified: new Date(),
          changeFrequency: route.changefreq,
          priority: route.priority * 0.9, // Slightly lower priority for localized versions
        });
      }
    });
  });

  return sitemapEntries;
}
