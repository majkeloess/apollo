"use client";
import { Button } from "./ui/button";
import { IconBolt, IconMessage, IconShare } from "@tabler/icons-react";
import { CommentSection } from "./CommentSection";
import Link from "next/link";
import { useState } from "react";
import { Comment } from "@prisma/client";

export default function FooterCardSection({
  workoutId,
  id,
  commentData,
}: {
  workoutId: string;
  id: string;
  commentData: Comment[];
}) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-row justify-between w-full my-2">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Paweł and 3 other people liked
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {commentData.length ? `${commentData.length} comments` : ""}
        </p>
      </div>
      <ul className="flex flex-row w-full justify-center gap-4">
        <li className="w-1/3">
          <Button className="w-full" variant="outline">
            <div className="flex flex-row items-center">
              <p className="text-xl font-medium">4</p>
              <IconBolt />
            </div>
          </Button>
        </li>
        <li className="w-1/3">
          <Button
            className="w-full"
            variant="outline"
            onClick={() => setShow(!show)}
          >
            <IconMessage />
          </Button>
        </li>
        <li className="w-1/3">
          <Link href={`/workout/${workoutId}`} target="_blank">
            <Button className="w-full" variant="outline">
              <IconShare />
            </Button>
          </Link>
        </li>
      </ul>
      <CommentSection
        show={show}
        workoutId={workoutId}
        id={id}
        commentData={commentData}
      />
    </>
  );
}
