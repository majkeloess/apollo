"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";
import {
  WorkoutSchema,
  ExerciseIdSchema,
  SetsSchema,
  WeightSchema,
  RepsSchema,
  PlaylistFormSchema,
  ExerciseFormSchema,
  ArticleFormSchema,
} from "@/definitions";

export async function createWorkout(note: string, id: string) {
  try {
    const createdWorkout = await prisma.workout.create({
      data: { workoutNote: note, createdBy: id },
    });

    return createdWorkout.workoutId;
  } catch (error) {
    throw new Error("Error creating workout!");
  } finally {
    await prisma.$disconnect();
  }
}

export async function createWorkoutDetails(id: string, formData: FormData) {
  const { note } = WorkoutSchema.parse({
    note: formData.get("note"),
  });
  const workoutId = await createWorkout(note, id);

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
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function createPlaylist(id: string, formData: FormData) {
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
        createdBy: id,
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

export async function createExercise(formData: FormData) {
  const { exerciseName, muscleGroup } = ExerciseFormSchema.parse({
    exerciseName: formData.get("name"),
    muscleGroup: formData.get("muscle"),
  });

  try {
    await prisma.exercises.create({
      data: {
        exerciseName: exerciseName,
        muscleGroup: muscleGroup,
      },
    });
  } catch (error) {
    throw new Error("Problem with adding an exercise!");
  } finally {
    prisma.$disconnect();
  }
  revalidatePath("/dashboard/strength");
  redirect("/dashboard/strength");
}

export async function createArticle(id: string, formData: FormData) {
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
        createdBy: id,
      },
    });
  } catch (error) {
    throw new Error("Error with creating article!");
  } finally {
    await prisma.$disconnect();
  }
  revalidatePath("/dashboard/wisdom");
  redirect("/dashboard/wisdom");
}
