import * as React from "react";
import Sets from "./Sets";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Exercises } from "@prisma/client";

export function Exercise({
  exercises,
  name,
  index,
}: {
  exercises: Exercises[];
  name: string;
  index: number;
}) {
  const data = exercises.map((exercise) => ({
    value: exercise.exerciseName,
    label: exercise.exerciseName,
  }));
  return (
    <div>
      <Select name={name} required>
        <SelectTrigger className="w-full my-2">
          <SelectValue placeholder="Select an exercise" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel></SelectLabel>
            {exercises.map((exercise) => (
              <SelectItem value={exercise.exerciseId} key={exercise.exerciseId}>
                {exercise.exerciseName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Sets index={index} />
    </div>
  );
}
