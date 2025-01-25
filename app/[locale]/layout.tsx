import { Locale } from "@/config/i18n.config";
import { routing } from "@/i18n/routing";
import { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import type { JSX } from "react";
import AboveNavbar from "../common/components/AboveNavbar/AboveNavbar";
import CookieConsent from "../common/components/CookieConsent/CookieConsent";
import Footer from "../common/components/Footer/Footer";
import Navbar from "../common/components/Navbar/Navbar";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

async function getMetadata(locale: Locale): Promise<Metadata> {
  const t = await getTranslations({ locale });

  const alternates: { [key: string]: string } = {};
  routing.locales.forEach((loc) => {
    alternates[loc] = loc === "de" ? "/" : `/${loc}`;
  });

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    title: {
      template: `%s | ${t("common.navigation.home")}`,
      default: t("common.navigation.home"),
    },
    description: t("common.meta.description"),
    applicationName: t("common.meta.appName"),
    keywords: t("common.meta.keywords"),
    authors: [{ name: t("common.meta.author") }],
    creator: t("common.meta.creator"),
    publisher: t("common.meta.publisher"),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
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
      title: t("common.meta.ogTitle"),
      description: t("common.meta.ogDescription"),
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: t("common.meta.appName"),
      locale: locale,
      alternateLocale: routing.locales.filter((loc) => loc !== locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("common.meta.twitterTitle"),
      description: t("common.meta.twitterDescription"),
      creator: "@yourtwitterhandle",
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

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  return getMetadata(locale as Locale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps): Promise<JSX.Element> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale as Locale}>
      <AboveNavbar />
      <Navbar />
      {children}
      <Footer />
      <CookieConsent />
    </NextIntlClientProvider>
  );
}
