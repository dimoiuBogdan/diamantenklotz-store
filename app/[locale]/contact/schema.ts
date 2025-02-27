import { CONTACT } from "@/app/common/constants";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "JewelryStore"],
  name: "DiamantenKlotz | Premium Lab-Grown Diamonds",
  description:
    "Expert consultation for lab-grown diamonds in Germany. Visit our showroom or schedule a virtual appointment.",
  url: "https://diamantenklotz.de/de/contact",
  telephone: CONTACT.PHONE,
  email: CONTACT.EMAIL,
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: CONTACT.PHONE,
    email: CONTACT.EMAIL,
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
