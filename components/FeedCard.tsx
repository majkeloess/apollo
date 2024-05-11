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
    <div className="w-[300px] xl:w-[600px]">
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
          <p className="text-lg">{description}</p>
          <div className="flex flex-row w-full justify-between py-4">
            <ul>
              <li className="text-gray-400 text-sm">Total load</li>
              <li className="font-bold">{load} kg</li>
            </ul>
            <ul>
              <li className="text-gray-400 text-sm">Sets/Reps</li>
              <li className="font-bold">
                {sets}/{reps}
              </li>
            </ul>
            <ul>
              <li className="text-gray-400 text-sm">Time</li>
              <li className="font-bold">{time}</li>
            </ul>
          </div>
          <p className="text-lg"></p>
          <div className="w-full flex justify-center">
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
          <ul className="flex flex-row w-full justify-evenly">
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
