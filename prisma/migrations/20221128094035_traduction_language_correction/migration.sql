/*
  Warnings:

  - You are about to drop the column `tradution` on the `Language` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[traduction]` on the table `Language` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `traduction` to the `Language` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Language_tradution_key";

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "tradution",
ADD COLUMN     "traduction" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Language_traduction_key" ON "Language"("traduction");
