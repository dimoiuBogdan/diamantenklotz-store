/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://project-alpha-sable.vercel.app",
  generateRobotsTxt: false,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    "/admin*",
    "/api/*",
    "/backend*",
    "/internal*",
    "/checkout*",
    "/user*",
    "/cart",
    "/account*",
    "/auth/*",
    "/_*",
    "/404",
    "/500",
  ],
  generateIndexSitemap: true,
  outDir: "public",
  transform: async (config, path) => {
    // Improved path matching with more specific patterns
    const pathPatterns = {
      exact: {
        "/": { priority: 1.0, changefreq: "daily" },
        "/products": { priority: 0.9, changefreq: "daily" },
        "/about": { priority: 0.8, changefreq: "monthly" },
        "/contact": { priority: 0.8, changefreq: "monthly" },
        "/technology": { priority: 0.8, changefreq: "weekly" },
        "/sustainability": { priority: 0.8, changefreq: "weekly" },
        "/engineering": { priority: 0.8, changefreq: "weekly" },
      },
      startsWith: {
        "/products/": { priority: 0.9, changefreq: "daily" },
        "/blog/": { priority: 0.8, changefreq: "weekly" },
        "/guide/": { priority: 0.7, changefreq: "monthly" },
      },
      contains: {
        certification: { priority: 0.8, changefreq: "monthly" },
        compare: { priority: 0.7, changefreq: "weekly" },
      },
    };

    // Find the matching pattern
    const exactMatch = pathPatterns.exact[path];
    const startsWithMatch = Object.entries(pathPatterns.startsWith).find(
      ([key]) => path.startsWith(key)
    )?.[1];
    const containsMatch = Object.entries(pathPatterns.contains).find(([key]) =>
      path.includes(key)
    )?.[1];

    const matchedPattern = exactMatch ||
      startsWithMatch ||
      containsMatch || {
        priority: config.priority,
        changefreq: config.changefreq,
      };

    // Get language code from path
    const langMatch = path.match(/^\/(en-US|de-DE)/);
    const langCode = langMatch ? langMatch[1] : null;
    const pathWithoutLang = langCode ? path.replace(`/${langCode}`, "") : path;

    // Generate alternate refs
    const alternateRefs = [
      {
        href: `${config.siteUrl}${pathWithoutLang}`,
        hreflang: "x-default",
      },
      {
        href: `${config.siteUrl}/en-US${pathWithoutLang}`,
        hreflang: "en-US",
      },
      {
        href: `${config.siteUrl}/de-DE${pathWithoutLang}`,
        hreflang: "de-DE",
      },
    ];

    return {
      loc: path,
      changefreq: matchedPattern.changefreq,
      priority: matchedPattern.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: alternateRefs,
      ...(process.env.NODE_ENV === "production" && {
        // Additional production-only attributes
        "mobile:mobile": true,
        "image:image": path.startsWith("/products/")
          ? {
              "image:loc": `${config.siteUrl}/images/products${pathWithoutLang}.webp`,
              "image:title": path.split("/").pop()?.replace(/-/g, " "),
            }
          : undefined,
      }),
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add dynamic paths that aren't automatically detected
    if (process.env.NODE_ENV === "production") {
      // Add pagination paths
      for (let i = 1; i <= 10; i++) {
        result.push({
          loc: `/products/page/${i}`,
          priority: 0.8,
          changefreq: "daily",
        });
      }

      // Add category paths
      const categories = [
        "round-cut",
        "princess-cut",
        "oval-cut",
        "cushion-cut",
      ];
      categories.forEach((category) => {
        result.push({
          loc: `/products/category/${category}`,
          priority: 0.8,
          changefreq: "daily",
        });
      });
    }

    return result;
  },
};

module.exports = config;
