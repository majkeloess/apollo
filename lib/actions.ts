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

const WorkoutDetailsSchema = z.object({
  workoutId: z.string(),
  exerciseId: z.string(),
  sets: z.number(),
  repetitions: z.array(z.number()),
  weights: z.array(z.number()),
});

const WorkoutSchema = z.object({
  note: z.string(),
});
const ExerciseIdSchema = z.array(z.string());
const SetsSchema = z.array(z.number());
const RepsSchema = z.array(z.array(z.number()));
const WeightSchema = z.array(z.array(z.number()));

export async function createWorkout(note: string) {
  try {
    const createdWorkout = await prisma.workout.create({
      data: { workoutNote: note },
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

  const exerKeyArr = Array.from(formData.keys()).filter((el) =>
    el.includes("exercise")
  );

  const exerciseIdArr = [];
  const setsArr = [];
  const weightsArr = [];
  const repetitionsArr = [];

  for (let i = 0; i < exerKeyArr.length; i++) {
    const repsExer = [];
    const weightsExer = [];

    const setsKeyArr = Array.from(formData.keys()).filter((el) =>
      el.includes(`${i + 1}reps`)
    );

    for (let set = 0; set < setsKeyArr.length; set++) {
      repsExer.push(Number(formData.get(`${i + 1}reps${set + 1}`)));
      weightsExer.push(Number(formData.get(`${i + 1}weight${set + 1}`)));
    }

    exerciseIdArr.push(formData.get(`exercise${i + 1}`));
    setsArr.push(setsKeyArr.length);
    weightsArr.push(weightsExer);
    repetitionsArr.push(repsExer);
  }

  console.log(exerciseIdArr);
  console.log(setsArr);
  console.log(weightsArr);
  console.log(repetitionsArr);
  const exerciseIdValid = ExerciseIdSchema.parse(exerciseIdArr);
  const setsValid = SetsSchema.parse(setsArr);
  const weightsValid = WeightSchema.parse(weightsArr);
  const repsValid = RepsSchema.parse(repetitionsArr);

  try {
    for (let i = 0; i < exerKeyArr.length; i++) {
      await prisma.workoutDetails.create({
        data: {
          workoutId: workoutId,
          exerciseId: exerciseIdValid[i],
          sets: setsValid[i],
          repetitions: repsValid[i],
          weights: weightsValid[i],
        },
      });
    }
  } catch (error) {
    throw error;
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
