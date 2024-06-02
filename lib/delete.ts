import { revalidatePath, unstable_noStore } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export async function deleteData() {
  unstable_noStore();
  //await prisma.workoutDetails.deleteMany();
  //await prisma.workout.deleteMany();
  //await prisma.exercises.deleteMany();
  //await prisma.music.deleteMany();
  //await prisma.articles.deleteMany();
  await prisma.comment.deleteMany();
}

export async function deleteMusic(musicId: string, id: string) {
  unstable_noStore();
  await prisma.music.delete({
    where: {
      musicId: musicId,
    },
  });

  revalidatePath(`/dashboard/profile/${id}`);
}

export async function deleteArticle(articleId: string, id: string) {
  unstable_noStore();
  await prisma.articles.delete({
    where: {
      articleId: articleId,
    },
  });
  revalidatePath(`/dashboard/profile/${id}`);
}

export async function deleteWorkout(workoutId: string) {
  unstable_noStore();
  await prisma.workout.delete({
    where: {
      workoutId: workoutId,
    },
  });

  revalidatePath("/dashboard/strength");
  redirect("/dashboard");
}

export async function deleteLike(workoutId: string, id: string) {
  unstable_noStore();
  const like = await prisma.like.findFirst({
    where: {
      createdBy: id,
      workoutId: workoutId,
    },
  });

  if (like) {
    await prisma.like.delete({
      where: {
        likeId: like.likeId,
      },
    });
  } else {
    throw new Error("Like not found");
  }
}
