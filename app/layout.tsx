import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AboveNavbar from "./common/components/AboveNavbar/AboveNavbar";
import Footer from "./common/components/Footer/Footer";
import Navbar from "./common/components/Navbar/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Change this with real data
const SITE_URL = "https://www.lab-grown-diamonds.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lab-Grown Diamonds | Sustainable & Ethical German Engineering",
    template: "%s | Lab-Grown Diamonds",
  },
  description:
    "Discover premium lab-grown diamonds crafted with German engineering. Sustainable, ethical, and affordable diamond jewelry with expert craftsmanship.",
  keywords: [
    "lab-grown diamonds",
    "sustainable diamonds",
    "ethical diamonds",
    "German engineering",
    "diamond jewelry",
    "lab-created diamonds",
    "synthetic diamonds",
    "eco-friendly diamonds",
    "conflict-free diamonds",
    "affordable luxury diamonds",
  ],
  authors: [{ name: "Lab-Grown Diamonds GmbH", url: SITE_URL }],
  creator: "Lab-Grown Diamonds GmbH",
  publisher: "Lab-Grown Diamonds GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": `${SITE_URL}/en-US`,
      "de-DE": `${SITE_URL}/de-DE`,
    },
  },
  openGraph: {
    title: "Lab-Grown Diamonds | Sustainable & Ethical German Engineering",
    description:
      "Discover premium lab-grown diamonds crafted with German engineering. Sustainable, ethical, and affordable diamond jewelry.",
    url: SITE_URL,
    siteName: "Lab-Grown Diamonds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lab-Grown Diamonds Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lab-Grown Diamonds | Sustainable & Ethical German Engineering",
    description:
      "Discover premium lab-grown diamonds crafted with German engineering. Sustainable, ethical, and affordable diamond jewelry.",
    site: "@labgrowndiamonds",
    creator: "@labgrowndiamonds",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Jewelry & Diamonds",
  classification: "Sustainable Luxury",
  other: {
    "google-site-verification": "YOUR_VERIFICATION_CODE",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    "facebook-domain-verification": "YOUR_FB_VERIFICATION_CODE",
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE",
    yandex: "YOUR_VERIFICATION_CODE",
    me: ["YOUR_PERSONAL_WEBSITE"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <AboveNavbar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
