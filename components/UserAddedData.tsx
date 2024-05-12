import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AddedWorkouts() {
  return (
    <div className="w-[350px] lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>User's Workouts</CardTitle>
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

export function AddedArticles() {
  return (
    <div className="w-[350px] lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>User's Articles</CardTitle>
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

export function AddedMusic() {
  return (
    <div className="w-[350px] lg:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>User's Music</CardTitle>
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
