import { generatePageMetadata } from "@/app/lib/utils/metadata.utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
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

interface ContactInfo {
  icon: typeof MapPin | typeof Phone | typeof Mail;
  title: string;
  details: string[];
}

const ContactPage = async () => {
  const t = await getTranslations("contact");

  const CONTACT_INFO: ContactInfo[] = [
    {
      icon: MapPin,
      title: t("info.visit.title"),
      details: [t("info.visit.address.street"), t("info.visit.address.city")],
    },
    {
      icon: Phone,
      title: t("info.call.title"),
      details: [t("info.call.phone"), t("info.call.hours")],
    },
    {
      icon: Mail,
      title: t("info.email.title"),
      details: [t("info.email.addresses")],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto px-4 md:px-6 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--main-darker)] sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--main-dark)]">
            {t("hero.description")}
          </p>
        </div>

        {/* Contact Info Section */}
        <section className="mb-12 grid gap-8 md:grid-cols-3">
          {CONTACT_INFO.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-4 rounded-full bg-[var(--main-lightest)] p-4">
                <info.icon className="h-6 w-6 text-[var(--main-darker)]" />
              </div>
              <h2 className="mb-4 text-xl font-semibold text-[var(--main-darker)]">
                {info.title}
              </h2>
              <div className="space-y-2">
                {info.details.map((detail: string, idx: number) => (
                  <p key={idx} className="text-gray-600">
                    {detail.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < detail.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
