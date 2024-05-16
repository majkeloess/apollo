/*
  Warnings:

  - You are about to drop the column `link` on the `Articles` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Articles` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Music` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Music` table. All the data in the column will be lost.
  - Added the required column `articlesLink` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articlesName` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `musicLink` to the `Music` table without a default value. This is not possible if the table is not empty.
  - Added the required column `musicName` to the `Music` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Music" DROP CONSTRAINT "Music_createdBy_fkey";

-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "link",
DROP COLUMN "name",
ADD COLUMN     "articlesLink" TEXT NOT NULL,
ADD COLUMN     "articlesName" TEXT NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Music" DROP COLUMN "link",
DROP COLUMN "name",
ADD COLUMN     "musicLink" TEXT NOT NULL,
ADD COLUMN     "musicName" TEXT NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
