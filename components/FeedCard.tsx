import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { IconBolt, IconMessage, IconShare } from "@tabler/icons-react";

export default function FeedCard({
  username,
  date,
  description,
  load,
  sets,
  reps,
  time,
  photo,
}: {
  username: string;
  date: string;
  description: string;
  load: number;
  sets: number;
  reps: number;
  time: string;
  photo: string;
}) {
  return (
    <div className="w-[350px] lg:w-[500px]">
      <Card>
        <CardHeader className="flex flex-row gap-3 items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/majkeloess.png"
              alt="@shadcn"
            />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle>{username}</CardTitle>
            <CardDescription>{date}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium">{description}</p>
          <p>
            <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Chest, Shoulders, Triceps, Abs
            </span>
          </p>
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
          <div className="flex flex-row w-full lg:justify-evenly justify-between">
            <ul>
              <li
                className="dark:text-gray-400 text-gray-500
               text-sm"
              >
                Total load
              </li>
              <li className="font-bold">{load} kg</li>
            </ul>
            <ul>
              <li
                className="dark:text-gray-400 text-gray-500
               text-sm"
              >
                Sets/Reps
              </li>
              <li className="font-bold">
                {sets}/{reps}
              </li>
            </ul>
            <ul>
              <li
                className="dark:text-gray-400 text-gray-500
               text-sm"
              >
                Time
              </li>
              <li className="font-bold">{time}</li>
            </ul>
          </div>
          <p className="text-lg"></p>
          <div className="w-full flex justify-center pt-6">
            <Image
              src={photo}
              width={280}
              height={500}
              alt="trainingPhoto"
              style={{ overflow: "hidden", borderRadius: "20px" }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <ul className="flex flex-row w-full lg:justify-center lg:gap-10 justify-evenly">
            <li>
              <Button variant="outline">
                <IconBolt />
              </Button>
            </li>
            <li>
              <Button variant="outline">
                <IconMessage />
              </Button>
            </li>
            <li>
              <Button variant="outline">
                <IconShare />
              </Button>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
}
