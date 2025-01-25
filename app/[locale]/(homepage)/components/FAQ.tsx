"use client";

import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("home.faq");

  const FAQ_ITEMS = [
    {
      question: t("items.what.question"),
      answer: t("items.what.answer"),
    },
    {
      question: t("items.real.question"),
      answer: t("items.real.answer"),
    },
    {
      question: t("items.cost.question"),
      answer: t("items.cost.answer"),
    },
    {
      question: t("items.certified.question"),
      answer: t("items.certified.answer"),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-[var(--main-darker)] mb-12">
          {t("title")}
        </h2>
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-[var(--main-dark)] mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </script>
    </section>
  );
};

export default FAQ;
