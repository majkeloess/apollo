"use client";
import testimonials from "@/lib/testimonals";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMoving() {
  return (
    <div className="h-[20rem] w-full rounded-md flex flex-col antialiased bg-white dark:bg-slay dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
