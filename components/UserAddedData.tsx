import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Articles, Music, Workout } from "@prisma/client";
import { PaginatedTable } from "./PaginatedTable";

export function ProfileCard({
  name,
  data,
  type,
}: {
  name: string;
  data?: Workout[] | Articles[] | Music[];
  type: string;
}) {
  const nameSplit = name.split(" ");
  return (
    <div className="w-full lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>
              {nameSplit[0] ? `${nameSplit[0]} ${type}` : ""}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 ">
          <PaginatedTable data={data} type={type} />
        </CardContent>
      </Card>
    </div>
  );
}
