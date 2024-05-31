import { likeAction } from "@/lib/actions";
import { Button } from "./ui/button";
import { Like } from "@prisma/client";
import { IconBolt } from "@tabler/icons-react";

export default function LikeButton({
  liked,
  likesData,
  workoutId,
  id,
}: {
  likesData: Like[];
  liked: Like | null;
  workoutId: string;
  id: string;
}) {
  return (
    <form
      action={async () => {
        await likeAction(workoutId, id);
      }}
    >
      <Button className="w-full" variant="outline">
        <div className="flex flex-row items-center">
          <p
            className={`text-xl font-medium ${
              !liked ? "text-[#A9A9A9]" : "text-[#FFD700]"
            }`}
          >
            {likesData.length}
          </p>
          <IconBolt color={!liked ? "#A9A9A9" : "#FFD700"} />
        </div>
      </Button>
    </form>
  );
}
