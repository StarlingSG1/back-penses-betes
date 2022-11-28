/*
  Warnings:

  - You are about to drop the column `language` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `word` on the `Word` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Language` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Language_language_key";

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "language",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "word",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Language_name_key" ON "Language"("name");
