import { Follow } from "@prisma/client";
import { Button } from "./ui/button";
import { followAction } from "@/lib/actions";

export default function FollowButton({
  follow,
  idSession,
  id,
}: {
  follow: Follow | null;
  idSession: string;
  id: string;
}) {
  return (
    <form
      action={async () => {
        "use server";
        await followAction(idSession, id);
      }}
    >
      <Button className="font-bold w-full" variant="outline">
        {!follow ? "Follow" : "Unfollow"}
      </Button>
    </form>
  );
}
