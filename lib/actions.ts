"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";

const PlaylistFormSchema = z.object({
  musicName: z.string(),
  musicLink: z.string(),
  genre: z.string(),
});

const ArticleFormSchema = z.object({
  articlesName: z.string(),
  articlesLink: z.string(),
  note: z.string(),
});

const WorkoutSchema = z.object({
  note: z.string(),
});

const WorkoutDetailsSchema = z.object({
  workoutId: z.string(),
  exerciseId: z.string(),
  sets: z.number(),
  repetitions: z.array(z.number()),
  weights: z.array(z.number()),
});

export async function createWorkout(note: string) {
  try {
    const createdWorkout = await prisma.workout.create({
      data: { workoutNote: note, creator: {} },
    });

    return createdWorkout.workoutId;
  } catch (error) {
    throw new Error("Error creating workout!");
  } finally {
    await prisma.$disconnect();
  }
}

export async function createWorkoutDetails(formData: FormData) {
  const { note } = WorkoutSchema.parse({
    note: formData.get("note"),
  });
  const workoutId = await createWorkout(note);

  let exercisesNumber = 0;
  //TODO: Get exer number
  const exerciseIdArr = [];
  const setsArr = [];
  const weightsArr = [];
  const repetitionsArr = [];
  for (let i = 0; i < exercisesNumber; i++) {
    //TODO: Update arrays
  }
  try {
    for (let i = 0; i < exercisesNumber; i++) {
      await prisma.workoutDetails.create({
        data: {
          workoutId: workoutId,
          exerciseId: exerciseIdArr[i],
          sets: setsArr[i],
          weights: weightsArr[i],
          repetitions: repetitionsArr[i],
        },
      });
    }
  } catch (error) {
    throw new Error("Error with creating workout details!");
  } finally {
    await prisma.$disconnect();
  }
  revalidatePath("/dashboard/strength");
  redirect("/dashboard/strength");
}

export async function createPlaylist(formData: FormData) {
  const { musicName, musicLink, genre } = PlaylistFormSchema.parse({
    musicName: formData.get("name"),
    musicLink: formData.get("link"),
    genre: formData.get("genre"),
  });

  try {
    await prisma.music.create({
      data: {
        musicName: musicName,
        musicLink: musicLink,
        genre: genre,
      },
    });
  } catch (error) {
    throw new Error("Error with creating playlist!");
  } finally {
    await prisma.$disconnect();
  }

  revalidatePath("/dashboard/music");
  redirect("/dashboard/music");
}

export async function createArticle(formData: FormData) {
  const { articlesName, articlesLink, note } = ArticleFormSchema.parse({
    articlesName: formData.get("name"),
    articlesLink: formData.get("link"),
    note: formData.get("note"),
  });

  try {
    await prisma.articles.create({
      data: {
        articlesName: articlesName,
        articlesLink: articlesLink,
        note: note,
      },
    });
  } catch (error) {
    throw new Error("Error with creating article!");
  } finally {
    await prisma.$disconnect();
  }
}
