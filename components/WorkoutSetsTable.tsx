import { ObjectSets } from "@/lib/utils";
import { Table, TableBody, TableRow, TableCell } from "./ui/table";

export default function WorkoutSetsTable({
  sets,
  reps,
  weights,
}: {
  sets: number;
  reps: number[];
  weights: number[];
}) {
  const tableRows = ObjectSets(reps, weights, sets);

  return (
    <Table>
      <TableBody>
        {tableRows.map((data) => (
          <TableRow key={data.index}>
            <TableCell>{data.weights}</TableCell>
            <TableCell>{data.reps}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
