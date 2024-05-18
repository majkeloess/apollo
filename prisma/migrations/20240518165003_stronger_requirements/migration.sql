/*
  Warnings:

  - Made the column `createdBy` on table `Articles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdBy` on table `Music` required. This step will fail if there are existing NULL values in that column.
  - Made the column `workoutNote` on table `Workout` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdBy` on table `Workout` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Music" DROP CONSTRAINT "Music_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_createdBy_fkey";

-- AlterTable
ALTER TABLE "Articles" ALTER COLUMN "createdBy" SET NOT NULL;

-- AlterTable
ALTER TABLE "Music" ALTER COLUMN "createdBy" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "nickname" TEXT;

-- AlterTable
ALTER TABLE "Workout" ALTER COLUMN "workoutNote" SET NOT NULL,
ALTER COLUMN "createdBy" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
