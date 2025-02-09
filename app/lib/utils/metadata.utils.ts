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
  productSchema?: any;
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

  const defaultKeywords = [
    "lab-grown diamonds",
    "sustainable diamonds",
    "ethical jewelry",
    "lab-created diamonds",
    "synthetic diamonds",
    "cultured diamonds",
    "eco-friendly jewelry",
    "engagement rings",
    "diamond manufacturing",
    "sustainable luxury",
    "German engineering",
    "diamond technology",
    "CVD diamonds",
    "HPHT diamonds",
    "conflict-free diamonds",
    "custom diamond jewelry",
    "diamond certification",
    "diamond quality",
    "diamond clarity",
    "diamond cut",
    "sustainable engagement rings",
    "eco-friendly diamond rings",
    "affordable lab diamonds",
    "custom engagement rings",
    "diamond alternatives",
    "ethical diamond jewelry",
    "sustainable wedding rings",
    "modern engagement rings",
    "IGI certified diamonds",
    "GCAL certified diamonds",
    "diamond grading",
    "diamond price comparison",
    "diamond education",
    "diamond investment",
    "diamond warranty",
  ].join(", ");

  return {
    metadataBase: new URL(baseUrl),
    title: options.title
      ? {
          template: `%s | DiamantenKlotz - Lab-Grown Diamond Experts`,
          default: `${options.title} | DiamantenKlotz - Lab-Grown Diamond Experts`,
        }
      : {
          template: `%s | DiamantenKlotz - Lab-Grown Diamond Experts`,
          default: `DiamantenKlotz - Premium Lab-Grown Diamonds | Sustainable & Ethical Jewelry`,
        },
    description:
      options.description ||
      "Experience the future of diamonds with DiamantenKlotz's premium lab-grown stones. Our German engineering excellence combines with sustainable practices to create ethical, environmentally conscious diamonds that match the quality and beauty of mined diamonds at better value. IGI & GCAL certified.",
    keywords: options.keywords || defaultKeywords,
    applicationName: "DiamantenKlotz",
    authors: [{ name: "DiamantenKlotz GmbH" }],
    creator: "DiamantenKlotz GmbH",
    publisher: "DiamantenKlotz GmbH",
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
      title:
        options.title ||
        "DiamantenKlotz - Premium Lab-Grown Diamonds | Sustainable Luxury Created by Science",
      description:
        options.description ||
        "Discover our collection of certified lab-grown diamonds. German-engineered excellence meets environmental consciousness for modern luxury jewelry. IGI & GCAL certified diamonds.",
      url: baseUrl,
      siteName: "DiamantenKlotz",
      locale: locale,
      alternateLocale: routing.locales.filter((loc) => loc !== locale),
      type: "website",
      ...(options.ogImage && {
        images: [
          {
            url: options.ogImage,
            width: 1200,
            height: 630,
            alt: options.title || "DiamantenKlotz Lab-Grown Diamond Showcase",
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title:
        options.title ||
        "DiamantenKlotz: The Future of Sustainable Luxury Diamonds",
      description:
        options.description ||
        "Experience premium lab-grown diamonds: sustainable, ethical, and crafted with German engineering excellence. IGI & GCAL certified.",
      creator: "@diamantenklotz",
      site: "@diamantenklotz",
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
    category: "jewelry",
    other: {
      "fb:app_id": "YOUR_FACEBOOK_APP_ID", // TODO: Change this with real data
      "og:price:currency": "EUR",
      "og:price:amount": "500-50000",
      "business:contact_data:street_address": "Friedrichshafener Str. 2",
      "business:contact_data:locality": "Gilching",
      "business:contact_data:postal_code": "82205",
      "business:contact_data:country_name": "Germany",
      "business:contact_data:email": "contact@diamantenklotz.com", // TODO: Change this with real data
      "business:contact_data:phone_number": "+49-123-456789", // TODO: Change this with real data
    },
  };
}
