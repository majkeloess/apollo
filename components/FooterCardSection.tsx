"use client";
import { Button } from "./ui/button";
import { IconMessage, IconShare } from "@tabler/icons-react";
import { CommentSection } from "./CommentSection";
import Link from "next/link";
import { useState } from "react";
import { Comment, Like } from "@prisma/client";
import LikeButton from "./LikeButton";

export default function FooterCardSection({
  workoutId,
  id,
  commentData,
  likesData,
  liked,
}: {
  workoutId: string;
  id: string;
  commentData: Comment[];
  likesData: Like[];
  liked: Like | null;
}) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-row justify-end w-full my-2">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {commentData.length ? `${commentData.length} comments` : ""}
        </p>
      </div>
      <ul className="flex flex-row w-full justify-center gap-4">
        <li className="w-1/3">
          <LikeButton
            workoutId={workoutId}
            id={id}
            liked={liked}
            likesData={likesData}
          />
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
