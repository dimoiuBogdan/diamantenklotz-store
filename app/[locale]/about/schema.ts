// TODO: Change these with real data

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "AboutPage"],
  name: "Lab-Grown Diamonds GmbH",
  description:
    "Pioneering lab-grown diamonds with German engineering excellence. Sustainable, ethical, and innovative diamond manufacturing.",
  url: "https://project-alpha-sable.vercel.app/about",
  foundingDate: "2019",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "52.520008",
      longitude: "13.404954",
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
