export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "JewelryStore"],
  name: "Lab-Grown Diamonds GmbH",
  description:
    "Expert consultation for lab-grown diamonds in Germany. Visit our showroom or schedule a virtual appointment.",
  url: "https://project-alpha-sable.vercel.app/contact",
  telephone: "+49-123-456789",
  email: "contact@project-alpha-sable.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Friedrichshafener Str. 2",
    addressLocality: "Gilching",
    postalCode: "82205",
    addressCountry: "DE",
    addressRegion: "Bayern",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.0949",
    longitude: "11.6064",
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
    telephone: "+49-123-456789", // TODO: Change this with real data
    email: "support@project-alpha-sable.vercel.app", // TODO: Change this with real data
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
