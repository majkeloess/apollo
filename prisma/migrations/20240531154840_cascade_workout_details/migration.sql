-- DropForeignKey
ALTER TABLE "WorkoutDetails" DROP CONSTRAINT "WorkoutDetails_workoutId_fkey";

-- AddForeignKey
ALTER TABLE "WorkoutDetails" ADD CONSTRAINT "WorkoutDetails_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("workoutId") ON DELETE CASCADE ON UPDATE CASCADE;
