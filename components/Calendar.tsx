"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Workout } from "@prisma/client";

export function CalendarStrength({ workouts }: { workouts: Workout[] }) {
  const date = workouts.map((workout) => workout.createdAt);
  return (
    <Calendar
      mode="multiple"
      selected={date}
      className=" flex items-center justify-center"
    />
  );
}
