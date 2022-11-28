/*
  Warnings:

  - A unique constraint covering the columns `[tradution]` on the table `Language` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tradution` to the `Language` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "tradution" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Language_tradution_key" ON "Language"("tradution");
