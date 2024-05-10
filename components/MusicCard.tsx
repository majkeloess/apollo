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
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{genre}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
