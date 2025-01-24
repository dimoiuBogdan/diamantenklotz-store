// TODO: Change these with real data

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Lab-Grown Diamonds GmbH",
  description:
    "Premium lab-grown diamonds crafted with German engineering excellence",
  url: "https://www.lab-grown-diamonds.com",
  telephone: "+49-123-456789",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Diamond Street",
    addressLocality: "Berlin",
    postalCode: "10115",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.520008",
    longitude: "13.404954",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/labgrowndiamonds",
    "https://www.instagram.com/labgrowndiamonds",
    "https://twitter.com/labgrowndiamonds",
  ],
  priceRange: "€€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "750",
  },
};
