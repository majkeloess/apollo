import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import prisma from "@/lib/prisma";
export default async function ExploreCard({
  name,
  id,
  image,
}: {
  name: string;
  id: string;
  image: string | null;
}) {
  return (
    <Card className="hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50">
      <CardContent className="flex flex-col justify-center items-center gap-4 mt-6">
        <p className="font-bold text-xl text-center">{name}</p>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link href={`/dashboard/profile/${id}`} target="_blank">
            <Image
              src={image ? image : "/A_logo.png"}
              width={50}
              height={50}
              className="rounded-full "
              alt="profile-image"
            />
          </Link>
          <Button variant="default">Follow</Button>
        </div>
      </CardContent>
    </Card>
  );
}
