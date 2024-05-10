import { sql } from "@vercel/postgres";
import { Music, Articles, Exercises } from "@/definitions";
import { unstable_noStore } from "next/cache";

export async function fetchMusic() {
  unstable_noStore();
  const musicData = await sql<Music>`SELECT * FROM playlists`;

  return musicData.rows;
  // try {
  // } catch (error) {
  //   console.log("Failed to fetch Music: ", error);
  // }
}

export async function fetchArticles() {
  unstable_noStore();
  const articlesData = await sql<Articles>`SELECT * FROM articles`;

  return articlesData.rows;
}
