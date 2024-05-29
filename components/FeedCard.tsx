import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarImage } from "./ui/avatar";
import { fetchComments, fetchLikes, fetchUserData } from "@/lib/fetch";
import WorkoutTable from "./WorkoutTable";
import Link from "next/link";
import FooterCardSection from "./FooterCardSection";
export default async function FeedCard({
  workoutId,
  workoutNote,
  createdAt,
  createdBy,
  workoutLoad,
  id,
}: {
  workoutId: string;
  workoutNote: string;
  createdAt: string;
  createdBy: string;
  workoutLoad: number;
  id: string;
}) {
  const userData = await fetchUserData(createdBy);
  const commentData = await fetchComments(workoutId);
  const likesData = await fetchLikes(workoutId);
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
        <CardFooter className="flex flex-col">
          <FooterCardSection
            likesData={likesData}
            workoutId={workoutId}
            id={id}
            commentData={commentData}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
