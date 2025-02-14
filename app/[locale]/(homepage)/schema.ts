// TODO: Change these with real data

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["JewelryStore", "Organization", "Brand"],
  name: "DiamantenKlotz",
  alternateName: "DiamantenKlotz Lab-Grown Diamonds",
  description:
    "Premium lab-grown diamonds crafted with cutting-edge technology and German engineering excellence. Sustainable, ethical, and environmentally conscious diamond creation for modern jewelry.",
  url: "https://diamantenklotz.com", // TODO: Change this with real data
  telephone: "+49-123-456789", // TODO: Change this with real data
  email: "contact@diamantenklotz.com", // TODO: Change this with real data
  foundingDate: "2024", // TODO: Change this with real data
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gilching",
      addressCountry: "DE",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Friedrichshafener Str. 2",
    addressLocality: "Gilching",
    postalCode: "82205",
    addressCountry: "DE",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.0949",
    longitude: "11.6064",
  },

  openingHoursSpecification: {
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
  sameAs: [
    "https://www.facebook.com/diamantenklotz", // TODO: Change this with real data
    "https://www.instagram.com/diamantenklotz", // TODO: Change this with real data
    "https://twitter.com/diamantenklotz", // TODO: Change this with real data
    "https://www.linkedin.com/company/diamantenklotz", // TODO: Change this with real data
    "https://pinterest.com/diamantenklotz", // TODO: Change this with real data
    "https://www.youtube.com/@diamantenklotz", // TODO: Change this with real data
  ],
  priceRange: "€€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "750",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    offerCount: "100+",
    highPrice: "50000",
    lowPrice: "500",
    description:
      "Wide range of lab-grown diamonds from engagement rings to fine jewelry",
    availability: "https://schema.org/InStock", // TODO: Change this with real data
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Lab-Grown Diamond Engagement Rings",
        description:
          "Sustainable and ethical lab-grown diamond engagement rings",
        brand: {
          "@type": "Brand",
          name: "DiamantenKlotz",
        },
        material: ["Lab-Grown Diamond", "Gold", "Platinum", "Silver"],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: "1500",
          highPrice: "25000",
          offerCount: "50+",
        },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Custom Lab Diamond Jewelry",
        description: "Bespoke jewelry featuring premium lab-created diamonds",
        brand: {
          "@type": "Brand",
          name: "DiamantenKlotz",
        },
        material: ["Lab-Grown Diamond", "Gold", "Platinum", "Silver"],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: "500",
          highPrice: "50000",
          offerCount: "100+",
        },
      },
    },
  ],
  slogan: "Sustainable Luxury, Created by Science",
  knowsAbout: [
    "Lab-Grown Diamonds",
    "Sustainable Jewelry",
    "Diamond Manufacturing",
    "Chemical Vapor Deposition",
    "High Pressure High Temperature Diamond Creation",
    "Diamond Certification",
    "Diamond Grading",
    "Jewelry Design",
    "Custom Jewelry Manufacturing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lab-Grown Diamond Collections",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Engagement Rings",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Classic Solitaire Lab Diamond Rings",
              description:
                "Timeless solitaire engagement rings with lab-grown diamonds",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Halo Lab Diamond Rings",
              description:
                "Stunning halo-style engagement rings with lab-grown diamonds",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Fine Jewelry",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Lab Diamond Necklaces",
              description: "Elegant necklaces featuring lab-grown diamonds",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Lab Diamond Earrings",
              description: "Beautiful earrings with lab-grown diamonds",
            },
          },
        ],
      },
    ],
  },
  specialty: "Lab-Created Diamond Manufacturing and Retail",
  keywords:
    "lab-grown diamonds, sustainable diamonds, ethical jewelry, diamond manufacturing, engagement rings, lab-created diamonds, synthetic diamonds, cultured diamonds, eco-friendly jewelry, diamond certification, custom jewelry, German engineering",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "48.0949",
      longitude: "11.6064",
    },
    geoRadius: "1000",
  },
};
