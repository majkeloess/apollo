"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarStrength() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className=" flex items-center justify-center"
    />
  );
}
