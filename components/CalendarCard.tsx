import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CalendarStrength } from "@/components/Calendar";

export default function CalendarCard() {
  return (
    <div className="w-[350px] lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>Your monthly training logs</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 ">
          <CalendarStrength />
        </CardContent>
      </Card>
    </div>
  );
}
