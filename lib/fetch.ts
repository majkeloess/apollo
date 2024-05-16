import { unstable_noStore } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
