import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AddedWorkouts({ name }: { name: string | null | undefined }) {
  const nameSplit = name?.split(" ");

  return (
    <div className="w-[350px] lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>
              {nameSplit && nameSplit[0] ? `${nameSplit[0]}'s Workouts` : ""}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 ">
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
        </CardContent>
      </Card>
    </div>
  );
}

export function AddedArticles({ name }: { name: string | null | undefined }) {
  const nameSplit = name?.split(" ");

  return (
    <div className="w-[350px] lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>
              {nameSplit && nameSplit[0] ? `${nameSplit[0]}'s Articles` : ""}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 ">
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
        </CardContent>
      </Card>
    </div>
  );
}

export function AddedMusic({ name }: { name: string | null | undefined }) {
  const nameSplit = name?.split(" ");

  return (
    <div className="w-[350px] lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>
              {nameSplit && nameSplit[0] ? `${nameSplit[0]}'s Music` : ""}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 ">
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
          <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>
        </CardContent>
      </Card>
    </div>
  );
}
