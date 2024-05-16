"use client";
import { Label } from "./ui/label";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { Button } from "./ui/button";
import React from "react";
import { Exercise } from "./SelectExercise";
import { Exercises } from "@prisma/client";
export function ExerciseBox({ exercises }: { exercises: Exercises[] }) {
  const [exercise, setExercise] = React.useState(0);
  const exerciseElements = Array.from({ length: exercise }, (_, index) => (
    <div key={index}>
      <Label key={index} htmlFor={`exersise${index + 1}`}>
        Exercise #{index + 1}
      </Label>
      <Exercise exercises={exercises} name={`exersise${index + 1}`} />
    </div>
  ));
  return (
    <div className="flex flex-col">
      {exerciseElements}
      <div className="flex flex-row gap-2">
        <Button
          className="w-full"
          type="button"
          variant="secondary"
          onClick={() => {
            setExercise((e) => e + 1);
          }}
        >
          <div className="flex flex-row gap-1 justify-center items-center">
            <p>Exercise</p>
            <IconPlus />
          </div>
        </Button>
        {exercise != 0 && (
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              if (exercise > 0) {
                setExercise((e) => e - 1);
              }
            }}
          >
            <IconMinus />
          </Button>
        )}
      </div>
    </div>
  );
}
