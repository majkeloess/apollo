import { Avatar, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { TableBody, Table, TableRow, TableCell } from "./ui/table";
import { Commented } from "./Toast";
import { createComment } from "@/lib/actions";
import { Comment } from "@prisma/client";
import Link from "next/link";
export function CommentSection({
  show,
  id,
  workoutId,
  commentData,
}: {
  show: boolean;
  id: string;
  workoutId: string;
  commentData: Comment[];
}) {
  const data = {
    id: id,
    workoutId: workoutId,
  };
  const bindedComment = createComment.bind(null, data);

  return (
    <div className="w-full my-2">
      {show && (
        <>
          <Table className="my-2">
            <TableBody>
              {commentData.map((comment) => (
                <TableRow className="flex gap-2 items-center">
                  <TableCell>
                    <Avatar>
                      <Link href={`dashboard/profile/${comment.createdBy}`}>
                        <AvatarImage src="/A_logo.png" />
                      </Link>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {comment.createdAt.toString().split("G")[0]}
                      </p>
                      <p>{comment.commentContent}</p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <form action={bindedComment}>
            <div className="w-full flex flex-row items-center gap-6">
              <Input
                placeholder="Add comment ..."
                id="comment"
                name="comment"
              />
              <Commented />
            </div>
          </form>
        </>
      )}
    </div>
  );
}
