import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { fetchExerciseInfo, fetchWorkoutDetails } from "@/lib/fetch";
import WorkoutSetsTable from "./WorkoutSetsTable";

export default async function WorkoutTable({
  workoutId,
}: {
  workoutId: string;
}) {
  const workoutDetailsData = await fetchWorkoutDetails(workoutId);

  return (
    <div className="w-full flex flex-col justify-center">
      <Table>
        <TableBody>
          {workoutDetailsData.map(async (details, index) => {
            const exerciseInfo = await fetchExerciseInfo(details.exerciseId);

            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  {" "}
                  <span className="font-medium bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                    {exerciseInfo.exerciseName}
                  </span>
                </TableCell>
                <TableCell>{exerciseInfo.muscleGroup}</TableCell>
                <TableCell className="flex justify-end items-center w-full">
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
