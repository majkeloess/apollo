import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ArticlesCard({
  name,
  link,
  note,
}: {
  name: string;
  link: string;
  note: string;
}) {
  return (
    <div className="w-[90%] xl:w-[600px]">
      <Link href={link} target="_blank">
        <Card className="hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{note}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
