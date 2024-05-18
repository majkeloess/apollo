import { unstable_noStore } from "next/cache";
import prisma from "./prisma";
import { UserDataSchema } from "@/definitions";

export async function fetchUserData(id: string) {
  unstable_noStore();
  const profileData = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  const validatedProfileData = UserDataSchema.parse(profileData);
  return validatedProfileData;
}

export async function fetchExercises() {
  unstable_noStore();
  const exerciseData = await prisma.exercises.findMany();

  return exerciseData;
}

export async function fetchMusic() {
  unstable_noStore();

  const musicData = await prisma.music.findMany();

  return musicData;
}

export async function fetchArticles() {
  unstable_noStore();
  const articlesData = await prisma.articles.findMany();

  return articlesData;
}

export async function fetchIdFromSession(name: string) {
  unstable_noStore();
  const userData = await prisma.user.findFirst({
    where: {
      name: name,
    },
  });
  const validatedData = UserDataSchema.parse(userData);

  return validatedData.id;
}

export async function deleteData() {
  unstable_noStore();
  await prisma.workoutDetails.deleteMany();
  await prisma.workout.deleteMany();
  await prisma.music.deleteMany();
  await prisma.articles.deleteMany();
}
