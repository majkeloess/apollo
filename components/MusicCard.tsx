import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function MusicCard({
  name,
  link,
  genre,
}: {
  name: string;
  link: string;
  genre: string;
}) {
  return (
    <Link href={link} target="_blank">
      <Card className="hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{genre}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
