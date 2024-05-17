import { Skeleton } from "../ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeedCardSkeleton() {
  return (
    <div className="w-[350px] lg:w-[500px]">
      <Card>
        <CardHeader className="flex flex-row gap-3 items-center">
          <Skeleton className="rounded-full w-[48px] h-[48px]" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-48" />
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full  h-4" />
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
          <div className="flex flex-row w-full lg:justify-evenly justify-between"></div>
          <p className="text-lg"></p>
          <div className="w-full flex justify-center py-6">
            <Skeleton className="w-full lg:w-[280px] h-[400px] rounded-lg" />
          </div>
          <div className="flex justify-center">
            <Skeleton className="w-full lg:w-[280px] h-10 " />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
