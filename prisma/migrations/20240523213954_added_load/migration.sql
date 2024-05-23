/*
  Warnings:

  - Added the required column `workoutLoad` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "workoutLoad" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "WorkoutDetails" ALTER COLUMN "weights" SET DATA TYPE DOUBLE PRECISION[];
