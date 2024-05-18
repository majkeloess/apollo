-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_createdBy_fkey";

-- AlterTable
ALTER TABLE "Workout" ALTER COLUMN "workoutNote" DROP NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
