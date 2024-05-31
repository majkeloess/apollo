import { Follow } from "@prisma/client";
import { followAction } from "@/lib/actions";
import { Followed, Unfollowed } from "./Toast";

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
      {!follow ? <Followed /> : <Unfollowed />}
    </form>
  );
}
