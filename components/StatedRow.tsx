import { TableRow, TableCell } from "./ui/table";
import { Button } from "./ui/button";
import Link from "next/link";
import { IconEraser, IconLink } from "@tabler/icons-react";
import { Articles, Music, Workout } from "@prisma/client";
import { deleteArticle, deleteMusic } from "@/lib/delete";

export function StatedArticleRow({
  index,
  data,
  owner,
}: {
  index: number;
  data: Articles;
  owner: boolean;
}) {
  return (
    <>
      <TableRow key={index}>
        <TableCell className="font-medium">
          <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            {data.articlesName}
          </span>
        </TableCell>
        <TableCell className="flex justify-end">
          <Link href={data.articlesLink} target="_blank">
            <Button variant="ghost" size="icon">
              <IconLink size={24} />
            </Button>
          </Link>
          {owner && (
            <form
              action={async () => {
                "use server";
                await deleteArticle(data.articleId, data.createdBy);
              }}
            >
              <Button variant="ghost" size="icon">
                <IconEraser size={24} />
              </Button>
            </form>
          )}
        </TableCell>
      </TableRow>
    </>
  );
}

export async function StatedMusicRow({
  index,
  data,
  owner,
}: {
  index: number;
  data: Music;
  owner: boolean;
}) {
  return (
    <>
      <TableRow key={index}>
        <TableCell className="font-bold">
          <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            {data.musicName}
          </span>
        </TableCell>
        <TableCell>{data.genre}</TableCell>
        <TableCell className="flex justify-end">
          <Link href={data.musicLink} target="_blank">
            <Button variant="ghost" size="icon">
              <IconLink size={24} />
            </Button>
          </Link>
          {owner && (
            <form
              action={async () => {
                "use server";
                await deleteMusic(data.musicId, data.createdBy);
              }}
            >
              <Button variant="ghost" size="icon">
                <IconEraser size={24} />
              </Button>
            </form>
          )}
        </TableCell>
      </TableRow>
    </>
  );
}

export function StatedWorkoutRow({
  index,
  data,
}: {
  index: number;
  data: Workout;
}) {
  return (
    <>
      <TableRow key={index}>
        <TableCell className="font-bold">
          <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            {data.workoutNote}
          </span>
        </TableCell>
        <TableCell>{data.createdAt.toDateString()}</TableCell>
        <TableCell className="flex justify-end items-center">
          <Link href={`/workout/${data.workoutId}`} target="_blank">
            <IconLink />
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
}
