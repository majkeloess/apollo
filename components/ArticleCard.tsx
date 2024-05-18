import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { fetchUserData } from "@/lib/fetch";

export default async function ArticlesCard({
  name,
  link,
  note,
  createdAt,
  createdBy,
}: {
  name: string;
  link: string;
  note: string;
  createdAt: string;
  createdBy: string;
}) {
  const userData = await fetchUserData(createdBy);

  return (
    <div className="w-[90%] xl:w-[600px]">
      <Link href={link} target="_blank">
        <Card className="hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{note}</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-row gap-2 w-full justify-end">
            <Link href={`/dashboard/profile/${userData.id}`} target="_blank">
              <Image
                width={25}
                height={25}
                src={userData.image}
                className="rounded-full"
                alt="badge"
              />
            </Link>
            <p className="text-sm dark:text-gray-400">
              {userData.name.split(" ")[0]}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
