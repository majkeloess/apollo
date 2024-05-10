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
    <Link href={link} target="_blank">
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{note}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
