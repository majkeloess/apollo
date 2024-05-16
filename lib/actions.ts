"use server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

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

export async function createWorkout(formData: FormData) {}
