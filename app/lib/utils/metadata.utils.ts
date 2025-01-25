import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
  alternates?: { [key: string]: string };
}

export async function generatePageMetadata(
  locale: string,
  options: GenerateMetadataOptions = {}
): Promise<Metadata> {
  const t = await getTranslations({ locale });

  // Generate language alternates
  const alternates: { [key: string]: string } = {};
  routing.locales.forEach((loc) => {
    alternates[loc] = loc === "de" ? "/" : `/${loc}`;
  });

  // Override alternates if provided
  if (options.alternates) {
    Object.assign(alternates, options.alternates);
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    metadataBase: new URL(baseUrl),
    title: options.title
      ? {
          template: `%s | ${t("common.meta.appName")}`,
          default: `${options.title} | ${t("common.meta.appName")}`,
        }
      : {
          template: `%s | ${t("common.meta.appName")}`,
          default: t("common.meta.appName"),
        },
    description: options.description || t("common.meta.description"),
    keywords: options.keywords || t("common.meta.keywords"),
    applicationName: t("common.meta.appName"),
    authors: [{ name: t("common.meta.author") }],
    creator: t("common.meta.creator"),
    publisher: t("common.meta.publisher"),
    robots: {
      index: !options.noIndex,
      follow: !options.noIndex,
      googleBot: {
        index: !options.noIndex,
        follow: !options.noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
      languages: alternates,
    },
    openGraph: {
      title: options.title || t("common.meta.ogTitle"),
      description: options.description || t("common.meta.ogDescription"),
      url: baseUrl,
      siteName: t("common.meta.appName"),
      locale: locale,
      alternateLocale: routing.locales.filter((loc) => loc !== locale),
      type: "website",
      ...(options.ogImage && {
        images: [
          {
            url: options.ogImage,
            width: 1200,
            height: 630,
            alt: options.title || t("common.meta.ogTitle"),
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: options.title || t("common.meta.twitterTitle"),
      description: options.description || t("common.meta.twitterDescription"),
      creator: "@yourtwitterhandle",
      ...(options.ogImage && {
        images: [options.ogImage],
      }),
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    verification: {
      google: "your-google-site-verification",
      yandex: "your-yandex-verification",
      yahoo: "your-yahoo-verification",
      other: {
        "msvalidate.01": "your-bing-verification",
      },
    },
    category: "technology",
  };
}
