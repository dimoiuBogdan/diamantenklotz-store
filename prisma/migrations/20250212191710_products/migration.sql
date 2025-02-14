/*
  Warnings:

  - You are about to drop the `Text` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Text";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "amt" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "goldLoss" DOUBLE PRECISION NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "itemNumber" TEXT NOT NULL,
    "metalId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "styleCode" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "labourId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Labour" (
    "id" SERIAL NOT NULL,
    "amt" DOUBLE PRECISION NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Labour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metal" (
    "id" SERIAL NOT NULL,
    "amt" DOUBLE PRECISION NOT NULL,
    "grWt" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,
    "netWt" DOUBLE PRECISION NOT NULL,
    "qly" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Metal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stone" (
    "id" SERIAL NOT NULL,
    "amt" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "pcs" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,
    "wts" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Stone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diamond" (
    "id" SERIAL NOT NULL,
    "amt" INTEGER NOT NULL,
    "batchNo" TEXT NOT NULL,
    "certificateNo" TEXT,
    "clarity" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "gSize" TEXT,
    "mm" TEXT,
    "pcs" INTEGER NOT NULL,
    "pointer" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,
    "raw" TEXT NOT NULL,
    "shape" TEXT NOT NULL,
    "sizeName" TEXT,
    "totDiaAmt" INTEGER NOT NULL,
    "wts" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Diamond_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_labourId_fkey" FOREIGN KEY ("labourId") REFERENCES "Labour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_metalId_fkey" FOREIGN KEY ("metalId") REFERENCES "Metal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stone" ADD CONSTRAINT "Stone_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diamond" ADD CONSTRAINT "Diamond_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
