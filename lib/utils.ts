import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./prisma";

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

function getWeekDates(date = new Date()) {
  const dayOfWeek = date.getDay();
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  return [startOfWeek, endOfWeek];
}

export function isOwner(idFromSession: string, idOfCurrentPage: string) {
  return idFromSession == idOfCurrentPage;
}

export async function isFollowing(followerId: string, followingId: string) {
  const isExistingFollow = await prisma.follow.findFirst({
    where: {
      followerId: followerId,
      followingId: followingId,
    },
  });
  return isExistingFollow;
}

export async function isLiked(workoutId: string, id: string) {
  const isExistingLike = await prisma.like.findFirst({
    where: {
      workoutId: workoutId,
      createdBy: id,
    },
  });
  return isExistingLike;
}
