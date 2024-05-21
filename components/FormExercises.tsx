"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ExerciseBox } from "@/components/ExerciseForm";
import { IconArrowBack } from "@tabler/icons-react";
import { Exercises } from "@prisma/client";
import React from "react";
import { createWorkoutDetails } from "@/lib/actions";

export default function FormExercises({
  exercises,
  id,
}: {
  exercises: Exercises[];
  id: string;
}) {
  const bindedWorkoutDetails = createWorkoutDetails.bind(null, id);
  return (
    <form action={bindedWorkoutDetails}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="Note">Note</Label>
          <Input
            id="Note"
            name="note"
            placeholder="Your feelings from workout"
            required
          />
        </div>
        <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>

        <div className="flex flex-col space-y-1.5">
          <ExerciseBox exercises={exercises} />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Button>Add </Button>
      </div>
    </form>
  );
}
