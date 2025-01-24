/*
  Warnings:

  - A unique constraint covering the columns `[displayId]` on the table `Text` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `displayId` to the `Text` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Text" ADD COLUMN     "displayId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Text_displayId_key" ON "Text"("displayId");
