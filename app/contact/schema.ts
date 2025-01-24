// TODO: Change these with real data

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "JewelryStore"],
  name: "Lab-Grown Diamonds GmbH",
  description:
    "Expert consultation for lab-grown diamonds in Berlin. Visit our showroom or schedule a virtual appointment.",
  url: "https://www.lab-grown-diamonds.com/contact",
  telephone: "+49-123-456789",
  email: "contact@lab-grown-diamonds.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Diamond Street",
    addressLocality: "Berlin",
    postalCode: "10115",
    addressCountry: "DE",
    addressRegion: "Berlin",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.520008",
    longitude: "13.404954",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+49-123-456789",
    email: "support@lab-grown-diamonds.com",
    availableLanguage: ["English", "German"],
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Diamond Consultation",
      description: "Expert guidance on selecting the perfect lab-grown diamond",
    },
  },
};
