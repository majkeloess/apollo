import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { fetchExerciseInfo, fetchWorkoutDetails } from "@/lib/fetch";
import WorkoutSetsTable from "./WorkoutSetsTable";
import TrainingSummary from "./TrainingSummary";

export default async function WorkoutTable({
  workoutId,
}: {
  workoutId: string;
}) {
  const workoutDetailsData = await fetchWorkoutDetails(workoutId);

  const groups: string[] = [];
  let totalLoad = 0;
  return (
    <div className="w-full flex flex-col justify-center">
      {/* <TrainingSummary groups={groups} totalLoad={totalLoad} /> */}
      <Table>
        <TableBody>
          {workoutDetailsData.map(async (details, index) => {
            const exerciseInfo = await fetchExerciseInfo(details.exerciseId);
            if (!groups.includes(exerciseInfo.muscleGroup)) {
              groups.push(exerciseInfo.muscleGroup);
            }

            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{exerciseInfo.exerciseName}</TableCell>
                <TableCell>{exerciseInfo.muscleGroup}</TableCell>
                <TableCell>
                  <WorkoutSetsTable
                    sets={details.sets}
                    reps={details.repetitions}
                    weights={details.weights}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
