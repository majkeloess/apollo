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

export function Exercise({ exercises }: { exercises: Exercises[] }) {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full my-2">
          <SelectValue placeholder="Select an exercise" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel></SelectLabel>
            {exercises.map((exercise) => (
              <SelectItem value={exercise.exerciseId}>
                {exercise.exerciseName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Sets />
    </div>
  );
}
