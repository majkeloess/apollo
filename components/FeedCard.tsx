import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { IconBolt, IconMessage, IconShare } from "@tabler/icons-react";
import { fetchUserData } from "@/lib/fetch";
import WorkoutTable from "./WorkoutTable";
import Link from "next/link";
import CopyButton from "./CopyButton";

export default async function FeedCard({
  workoutId,
  workoutNote,
  createdAt,
  createdBy,
  workoutLoad,
}: {
  workoutId: string;
  workoutNote: string;
  createdAt: string;
  createdBy: string;
  workoutLoad: number;
}) {
  const userData = await fetchUserData(createdBy);
  return (
    <div className="w-[350px] lg:w-[500px]">
      <Card>
        <CardHeader className="flex flex-row gap-3 items-center">
          <Link href={`/dashboard/profile/${userData.id}`}>
            <Avatar>
              <AvatarImage src={userData.image} />
            </Avatar>
          </Link>
          <div className="flex flex-col gap-1">
            <CardTitle>{userData.name}</CardTitle>
            <CardDescription>{createdAt}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-between w-full">
            <p className="text-lg font-medium">{workoutNote}</p>
            <p className="text-lg font-medium ">{workoutLoad.toString()} kg</p>
          </div>

          <div className="h-0.5 my-2 dark:bg-gray-800 bg-gray-200"></div>

          <WorkoutTable workoutId={workoutId} />
        </CardContent>
        <CardFooter>
          <ul className="flex flex-row w-full justify-center gap-4">
            <li className="w-1/3">
              <Button className="w-full" variant="outline">
                <IconBolt />
              </Button>
            </li>
            <li className="w-1/3">
              <Button className="w-full" variant="outline">
                <IconMessage />
              </Button>
            </li>
            <li className="w-1/3">
              <CopyButton link={`localhost:3000/workout/${workoutId}`} />
            </li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
}
