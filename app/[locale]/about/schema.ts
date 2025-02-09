export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "AboutPage"],
  name: "Lab-Grown Diamonds GmbH",
  description:
    "Pioneering lab-grown diamonds with German engineering excellence. Sustainable, ethical, and innovative diamond manufacturing.",
  url: "https://project-alpha-sable.vercel.app/about",
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gilching",
      addressCountry: "DE",
    },
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "48.0949",
      longitude: "11.6064",
    },
  },
  knowsAbout: [
    "Lab-grown diamonds",
    "Diamond manufacturing",
    "German engineering",
    "Sustainable jewelry",
    "Ethical diamonds",
  ],
  slogan: "Pioneering the Future of Diamonds",
  award: [
    "German Innovation Award 2023",
    "Sustainable Manufacturing Excellence",
  ],
  hasCredential: ["IGI Certified", "ISO 9001:2015"],
  memberOf: [
    "International Grown Diamond Association",
    "German Diamond Association",
  ],
  ethicsPolicy: {
    "@type": "CreativeWork",
    name: "Lab-Grown Diamonds Ethics Policy",
    text: "Committed to sustainable and ethical diamond production through advanced German engineering and eco-friendly practices.",
  },
};
