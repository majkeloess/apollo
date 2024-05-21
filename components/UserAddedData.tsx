import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "./ui/table";
import { Articles, Music, Workout } from "@prisma/client";
import { IconLink } from "@tabler/icons-react";
import Link from "next/link";
function isWorkout(item: any): item is Workout {
  return (item as Workout).workoutNote !== undefined;
}

function isArticle(item: any): item is Articles {
  return (item as Articles).articlesName !== undefined;
}

function isMusic(item: any): item is Music {
  return (item as Music).musicName !== undefined;
}

export function ProfileCard({
  name,
  data,
  type,
}: {
  name: string;
  data?: Workout[] | Articles[] | Music[];
  type: string;
}) {
  const nameSplit = name.split(" ");
  return (
    <div className="w-full lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>
              {nameSplit[0] ? `${nameSplit[0]} ${type}` : ""}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 ">
          {data && (
            <Table>
              <TableBody>
                {type == "workouts" &&
                  data.filter(isWorkout).map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data.workoutNote}</TableCell>
                      <TableCell>{data.createdAt.toDateString()}</TableCell>
                      <TableCell>
                        <Link href={`/workout/${data.workoutId}`}>
                          <IconLink />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                {type == "articles" &&
                  data.filter(isArticle).map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data.articlesName}</TableCell>
                      <TableCell>{data.createdAt.toDateString()}</TableCell>
                      <TableCell>
                        <Link href={`/articles/${data.articleId}`}>
                          <IconLink />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                {type == "music" &&
                  data.filter(isMusic).map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data.musicName}</TableCell>
                      <TableCell>{data.createdAt.toDateString()}</TableCell>
                      <TableCell>{data.genre}</TableCell>
                      <TableCell>
                        <Link href={`/music/${data.musicId}`}>
                          <IconLink />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
