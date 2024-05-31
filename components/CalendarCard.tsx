import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workout } from "@prisma/client";

import { CalendarStrength } from "@/components/Calendar";

export default function CalendarCard({
  workouts,
  name,
}: {
  workouts: Workout[];
  name: string;
}) {
  return (
    <div className="w-[350px] md:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>{name.split(" ")[0]} monthly training logs</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 ">
          <CalendarStrength workouts={workouts} />
        </CardContent>
      </Card>
    </div>
  );
}
