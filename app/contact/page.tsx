import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "./components/ContactForm";
import { jsonLd } from "./schema";

const SITE_URL = "https://www.lab-grown-diamonds.com";

export const metadata: Metadata = {
  title: "Contact Us - Expert Lab-Grown Diamond Consultation",
  description:
    "Get in touch with our diamond experts in Berlin. Schedule a consultation, learn about our lab-grown diamonds, or visit our showroom. Expert guidance for your perfect sustainable diamond.",
  keywords: [
    "contact lab-grown diamonds",
    "diamond consultation",
    "diamond experts Berlin",
    "sustainable diamond showroom",
    "diamond appointment",
    "ethical diamond consultation",
    "German diamond manufacturer",
    "diamond expert advice",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us - Expert Lab-Grown Diamond Consultation",
    description:
      "Get in touch with our diamond experts in Berlin. Schedule a consultation or visit our showroom for personalized guidance on sustainable diamonds.",
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: "/images/contact-hero.webp",
        width: 1200,
        height: 630,
        alt: "Lab-Grown Diamonds Consultation Center in Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Expert Lab-Grown Diamond Consultation",
    description:
      "Get in touch with our diamond experts in Berlin. Expert guidance for your perfect sustainable diamond.",
    images: ["/images/contact-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Diamond Street", "Berlin, Germany 10115"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+49 (30) 1234-5678", "Mon-Fri: 9:00 AM - 6:00 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@lab-grown-diamonds.com", "support@lab-grown-diamonds.com"],
  },
];

const ContactPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--main-darker)] sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--main-dark)]">
            Have questions about our lab-grown diamonds? We're here to help you
            find the perfect stone for your needs.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_INFO.map((info) => (
            <div
              key={info.title}
              className="rounded-lg bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--main-lighter)]">
                <info.icon className="h-6 w-6 text-[var(--main-darker)]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--main-darker)]">
                {info.title}
              </h3>
              {info.details.map((detail) => (
                <p key={detail} className="text-[var(--main-dark)]">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
