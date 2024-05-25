"use client";
import { Articles, Music, Workout } from "@prisma/client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  StatedArticleRow,
  StatedMusicRow,
  StatedWorkoutRow,
} from "./StatedRow";
import { Table, TableBody } from "./ui/table";

function isWorkout(item: any): item is Workout {
  return (item as Workout).workoutNote !== undefined;
}

function isArticle(item: any): item is Articles {
  return (item as Articles).articlesName !== undefined;
}

function isMusic(item: any): item is Music {
  return (item as Music).musicName !== undefined;
}

export function PaginatedTable({
  data,
  type,
}: {
  data?: Workout[] | Articles[] | Music[];
  type: string;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dataPerPage = 5;

  const indexOfLast = currentPage * dataPerPage;
  const indexOfFirst = indexOfLast - dataPerPage;

  const currentData = data?.slice(indexOfFirst, indexOfLast);

  const maxPages = data ? Math.ceil(data?.length / dataPerPage) : 1;

  return (
    <>
      {currentData && (
        <div className="flex flex-col justify-center items-center gap-1">
          <Table>
            <TableBody>
              {type == "workouts" &&
                currentData
                  .filter(isWorkout)
                  .map((data, index) => (
                    <StatedWorkoutRow index={index} data={data} />
                  ))}

              {type == "articles" &&
                currentData
                  .filter(isArticle)
                  .map((data, index) => (
                    <StatedArticleRow index={index} data={data} />
                  ))}
              {type == "music" &&
                currentData
                  .filter(isMusic)
                  .map((data, index) => (
                    <StatedMusicRow index={index} data={data} />
                  ))}
            </TableBody>
          </Table>
          <div className="flex flex-row">
            {maxPages > 1 && currentPage != 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentPage((page) => page - 1)}
              >
                <ChevronLeftIcon width={30} height={30} />
              </Button>
            )}
            {currentPage < maxPages && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentPage((page) => page + 1)}
              >
                <ChevronRightIcon width={30} height={30} />
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
