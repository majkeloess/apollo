"use client";
import { ObjectSets } from "@/lib/utils";
import { Table, TableBody, TableRow, TableCell } from "./ui/table";
import { useState } from "react";
import { Button } from "./ui/button";
import { IconAlignRight, IconArrowLeft, IconDots } from "@tabler/icons-react";

export default function WorkoutSetsTable({
  sets,
  reps,
  weights,
}: {
  sets: number;
  reps: number[];
  weights: number[];
}) {
  const [hidden, setHidden] = useState<boolean>(true);
  const tableRows = ObjectSets(reps, weights, sets);

  return hidden ? (
    <Button
      variant="ghost"
      className="pl-8 pr-0"
      onClick={() => setHidden(false)}
    >
      <IconAlignRight />
    </Button>
  ) : (
    <Table className="flex flex-col items-center">
      <TableBody>
        {tableRows.map((data) => (
          <TableRow key={data.index}>
            <TableCell>{data.weights}</TableCell>
            <TableCell>{data.reps}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Button variant="ghost" onClick={() => setHidden(true)}>
        <IconArrowLeft />
      </Button>
    </Table>
  );
}
