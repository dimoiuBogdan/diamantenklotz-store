const fs = require("fs").promises;
const path = require("path");

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://diamantenklotz.de";
const BATCH_SIZE = 100; // Process products in batches

async function fetchProducts() {
  // In a real application, you would fetch this from your database
  // Example using prisma:
  // return prisma.product.findMany({
  //   select: {
  //     id: true,
  //     category: true,
  //     updatedAt: true,
  //     images: { select: { url: true }, take: 1 },
  //   },
  //   where: { status: 'PUBLISHED' },
  // });

  // Mock data for example
  return [];
}

async function generateSitemapXML(products) {
  const urlset = products
    .map(
      (product) => `
    <url>
      <loc>${SITE_URL}/products/${product.category}/${product.id}</loc>
      <lastmod>${product.updatedAt.toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
      <image:image>
        <image:loc>${SITE_URL}${product.images[0].url}</image:loc>
        <image:title>${product.id.replace(/-/g, " ")}</image:title>
        <image:caption>Lab-grown ${product.id.replace(/-/g, " ")}</image:caption>
      </image:image>
      <xhtml:link 
        rel="alternate" 
        hreflang="en-US" 
        href="${SITE_URL}/en-US/products/${product.category}/${product.id}"
      />
      <xhtml:link 
        rel="alternate" 
        hreflang="de-DE" 
        href="${SITE_URL}/de-DE/products/${product.category}/${product.id}"
      />
    </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${urlset}
</urlset>`;
}

async function writeFile(filename, content) {
  const publicDir = path.join(process.cwd(), "public");
  await fs.mkdir(publicDir, { recursive: true });
  await fs.writeFile(path.join(publicDir, filename), content.trim());
}

async function generateProductSitemap() {
  try {
    console.log("Fetching products...");
    const allProducts = await fetchProducts();

    // Process products in batches to handle large catalogs
    for (let i = 0; i < allProducts.length; i += BATCH_SIZE) {
      const batch = allProducts.slice(i, i + BATCH_SIZE);
      const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
      const isSingleBatch = allProducts.length <= BATCH_SIZE;

      const sitemap = await generateSitemapXML(batch);
      const filename = isSingleBatch
        ? "products-sitemap.xml"
        : `products-sitemap-${batchNumber}.xml`;

      await writeFile(filename, sitemap);
      console.log(`Generated ${filename}`);
    }

    // If we have multiple batches, create an index sitemap
    if (allProducts.length > BATCH_SIZE) {
      const batchCount = Math.ceil(allProducts.length / BATCH_SIZE);
      const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Array.from(
    { length: batchCount },
    (_, i) => `
    <sitemap>
      <loc>${SITE_URL}/products-sitemap-${i + 1}.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>`
  ).join("")}
</sitemapindex>`;

      await writeFile("products-sitemap-index.xml", sitemapIndex);
      console.log("Generated products sitemap index");
    }

    console.log("Product sitemap generation completed successfully!");
  } catch (error) {
    console.error("Error generating product sitemap:", error);
    process.exit(1);
  }
}

// Run the generator
generateProductSitemap();
