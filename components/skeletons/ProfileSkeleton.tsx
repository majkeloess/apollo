import { Skeleton } from "../ui/skeleton";

export default async function ProfileSkeleton() {
  return (
    <div className="w-full">
      <div className="mt-28">
        <div className="flex flex-row w-full gap-6 items-center justify-center">
          <Skeleton className="w-[100px] h-[100px] rounded-full" />

          <div className="flex gap-2 flex-col">
            <Skeleton className="w-64 h-4" />
            <Skeleton className="w-48 h-4" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-0.5 my-6 w-full lg:w-[600px] dark:bg-gray-800 bg-gray-200"></div>
        </div>

        <div className="mt-6 flex flex-col gap-10 justify-center items-center mb-28">
          <Skeleton className="w-[350px] h-[100px] lg:w-[600px]" />
          <Skeleton className="w-[350px] h-[100px] lg:w-[600px]" />
          <Skeleton className="w-[350px] h-[100px] lg:w-[600px]" />
        </div>
      </div>
    </div>
  );
}
