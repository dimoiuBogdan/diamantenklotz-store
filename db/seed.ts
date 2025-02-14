import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  // First, clean up all tables in reverse order of dependencies
  // Delete child tables first (ones with foreign keys)
  await prisma.productImage.deleteMany();
  await prisma.stone.deleteMany();
  await prisma.diamond.deleteMany();
  await prisma.product.deleteMany();
  // Then delete parent tables
  await prisma.labour.deleteMany();
  await prisma.metal.deleteMany();
  await prisma.productCategory.deleteMany();

  // Then, create records in order of dependencies
  // First, create independent tables (ones with no foreign keys)
  await prisma.productCategory.createMany({
    data: sampleData.productCategories,
  });
  await prisma.labour.createMany({ data: sampleData.labours });
  await prisma.metal.createMany({ data: sampleData.metals });

  // Create products which depend on categories, labour, and metals
  await prisma.product.createMany({ data: sampleData.products });

  // Finally, create records that depend on products
  await prisma.stone.createMany({ data: sampleData.stones });
  await prisma.diamond.createMany({ data: sampleData.diamonds });
  await prisma.productImage.createMany({ data: sampleData.productImages });

  console.log("Database seeded successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
