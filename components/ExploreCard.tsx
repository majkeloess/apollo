import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { followAction } from "@/lib/actions";
export default async function ExploreCard({
  name,
  id,
  image,
  idSession,
}: {
  name: string;
  id: string;
  image: string | null;
  idSession: string;
}) {
  return (
    <Card className=" hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950  ">
      <CardContent className="flex flex-col justify-center items-center gap-4 mt-6">
        <Link href={`/dashboard/profile/${id}`}>
          <p className="font-bold text-xl text-center">{name}</p>
        </Link>
        <div className="flex flex-row justify-center items-center gap-4">
          <div className=" lg:block hidden">
            <Link href={`/dashboard/profile/${id}`}>
              <Image
                src={image ? image : "/A_logo.png"}
                width={50}
                height={50}
                className="rounded-full"
                alt="profile-image"
              />
            </Link>
          </div>
          <form
            action={async () => {
              "use server";
              await followAction(idSession, id);
            }}
          >
            <Button className="font-bold w-full" variant="outline">
              Follow
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
