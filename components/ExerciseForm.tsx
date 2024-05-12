"use client";
import { Label } from "./ui/label";
import { IconPlus } from "@tabler/icons-react";
import { Button } from "./ui/button";
import React from "react";
import { Exercise } from "./SelectExercise";
export function ExerciseBox() {
  const [exercise, setExercise] = React.useState(0);
  const exerciseElements = Array.from({ length: exercise }, (_, index) => (
    <div key={index}>
      <Label key={index} htmlFor={`exersise${index + 1}`}>
        Exercise #{index + 1}
      </Label>
      <Exercise />
    </div>
  ));
  return (
    <div className="flex flex-col">
      {exerciseElements}
      <Button
        className="w-full"
        type="button"
        variant="secondary"
        onClick={() => {
          setExercise((e) => e + 1);
          console.log(exercise);
        }}
      >
        <div className="flex flex-row gap-1 justify-center items-center">
          <p>Exercise</p>
          <IconPlus />
        </div>
      </Button>
    </div>
  );
}
