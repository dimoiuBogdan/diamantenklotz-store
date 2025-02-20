import { MetadataRoute } from "next";

// Define the base URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diamantenklotz.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/static/",
        "/*.json$",
        "/*.xml$",
        "/cookie-preferences",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
