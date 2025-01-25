const FAQ_ITEMS = [
  {
    question: "What are lab-grown diamonds?",
    answer:
      "Lab-grown diamonds are real diamonds created using advanced technological processes that replicate the natural diamond growing process. They have identical physical, chemical, and optical properties to mined diamonds.",
  },
  {
    question: "Are lab-grown diamonds real diamonds?",
    answer:
      "Yes, lab-grown diamonds are chemically, physically, and optically identical to mined diamonds. They are certified by the same institutions and graded using the same criteria as natural diamonds.",
  },
  {
    question: "How much do lab-grown diamonds cost?",
    answer:
      "Lab-grown diamonds typically cost 30-40% less than mined diamonds of equivalent quality. This makes them an excellent value while maintaining the same beauty and quality.",
  },
  {
    question: "Are lab-grown diamonds certified?",
    answer:
      "Yes, our lab-grown diamonds are certified by the International Gemological Institute (IGI), ensuring their quality and authenticity through rigorous testing and grading.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-[var(--main-darker)] mb-12">
          Frequently Asked Questions About Lab-Grown Diamonds
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
