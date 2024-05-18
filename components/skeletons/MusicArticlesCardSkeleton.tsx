import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export default function MusicArticlesCardSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader>
        <Skeleton className="w-full h-6" />
        <Skeleton className="lg:w-48 w-20 h-4" />
      </CardHeader>
    </Card>
  );
}
