import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

export default function ProgressCard() {
  return (
    <div className="w-[350px] lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <CardTitle>Your weekly goals</CardTitle>
            <CardDescription>2/4 workouts</CardDescription>
          </div>
          <Progress value={50} />
        </CardHeader>
      </Card>
    </div>
  );
}
