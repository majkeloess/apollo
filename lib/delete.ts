import { unstable_noStore } from "next/cache";
import prisma from "./prisma";

export async function deleteData() {
  unstable_noStore();
  await prisma.workoutDetails.deleteMany();
  await prisma.workout.deleteMany();
  await prisma.exercises.deleteMany();
  //await prisma.music.deleteMany();
  //await prisma.articles.deleteMany();
}

export async function deleteMusic(musicId: string) {
  unstable_noStore();
  await prisma.music.delete({
    where: {
      musicId: musicId,
    },
  });
}

export async function deleteArticle(articleId: string) {
  unstable_noStore();
  await prisma.articles.delete({
    where: {
      articleId: articleId,
    },
  });
}

export async function deleteWorkout(workoutId: string) {
  unstable_noStore();
  await prisma.workout.delete({
    where: {
      workoutId: workoutId,
    },
  });
}
