"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workout } from "@prisma/client";

export default function ChartCard({
  workouts,
  name,
}: {
  workouts: Workout[];
  name: string;
}) {
  const chartData = workouts.map((el) => {
    const retObj = {
      date:
        el.createdAt.toDateString().split(" ")[1] +
        " " +
        el.createdAt.toDateString().split(" ")[2],
      load: el.workoutLoad,
    };
    console.log(retObj);
    return retObj;
  });

  return (
    <div className="w-[350px] md:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>{name.split(" ")[0]} load chart</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 "></CardContent>
      </Card>
    </div>
  );
}
