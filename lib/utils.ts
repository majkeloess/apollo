import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ObjectSets(reps: number[], weights: number[], sets: number) {
  const objectSets = [];

  for (let i = 0; i < sets; i++) {
    const temp = {
      index: i + 1,
      weights: weights[i],
      reps: reps[i],
    };

    objectSets.push(temp);
  }

  return objectSets;
}
