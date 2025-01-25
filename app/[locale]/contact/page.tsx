import { generatePageMetadata } from "@/app/lib/utils/metadata.utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "./components/ContactForm";
import { jsonLd } from "./schema";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return generatePageMetadata(locale, {
    title: t("contact.title"),
    description: t("contact.meta.description"),
    keywords: t("contact.meta.keywords"),
    alternates: {
      [locale]: locale === "de" ? "/contact" : `/${locale}/contact`,
    },
  });
}

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
    details: [
      "info@project-alpha-sable.vercel.app",
      "support@project-alpha-sable.vercel.app",
    ],
  },
];

export default function ContactPage() {
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
}
