// TODO: Change these with real data

export const generateProductJsonLd = (product: {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  cut?: string;
  carat?: number;
  color?: string;
  clarity?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  sku: product.id,
  image: [product.image],
  category: product.category,
  url: `https://www.lab-grown-diamonds.com/products/${product.category}/${product.id}`,
  brand: {
    "@type": "Brand",
    name: "Lab-Grown Diamonds GmbH",
    slogan: "German Engineering Meets Sustainable Luxury",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Lab-Grown Diamonds GmbH",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
    },
  },
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: product.currency,
    availability: "https://schema.org/InStock",
    priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    url: `https://www.lab-grown-diamonds.com/products/${product.category}/${product.id}`,
    seller: {
      "@type": "Organization",
      name: "Lab-Grown Diamonds GmbH",
    },
  },
  additionalProperty: [
    ...(product.cut
      ? [
          {
            "@type": "PropertyValue",
            name: "cut",
            value: product.cut,
          },
        ]
      : []),
    ...(product.carat
      ? [
          {
            "@type": "PropertyValue",
            name: "carat",
            value: product.carat,
          },
        ]
      : []),
    ...(product.color
      ? [
          {
            "@type": "PropertyValue",
            name: "color",
            value: product.color,
          },
        ]
      : []),
    ...(product.clarity
      ? [
          {
            "@type": "PropertyValue",
            name: "clarity",
            value: product.clarity,
          },
        ]
      : []),
    {
      "@type": "PropertyValue",
      name: "type",
      value: "Lab-Grown Diamond",
    },
    {
      "@type": "PropertyValue",
      name: "certification",
      value: "IGI Certified",
    },
  ],
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: "IGI (International Gemological Institute)",
    },
  },
});
