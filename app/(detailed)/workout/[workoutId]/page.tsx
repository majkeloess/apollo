import { auth } from "@/auth";
import { SignIn } from "@/components/SignIn";
import WorkoutTable from "@/components/WorkoutTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchUserByWorkout, fetchUserData } from "@/lib/fetch";
import { IconEdit, IconEraser } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { deleteWorkout } from "@/lib/delete";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ({ params }: { params: { workoutId: string } }) {
  const sessionPre = auth();
  const workoutDataPre = fetchUserByWorkout(params.workoutId);
  const [session, workoutData] = await Promise.all([
    sessionPre,
    workoutDataPre,
  ]);
  const userData = await fetchUserData(workoutData.createdBy);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-row gap-4 m-8 justify-center items-center">
        <div className="dark:block hidden">
          <Link href="/dashboard">
            <Image
              src="/a_main_black.png"
              alt="Apollo"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div className="dark:hidden">
          <Link href="/dashboard">
            <Image src="/a_main.png" alt="Apollo" width={70} height={70} />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link href={`/dashboard/profile/${userData.id}`}>
            <Image
              src={userData.image}
              width={60}
              height={60}
              alt="profile-image"
              className="rounded-full"
            />
          </Link>
          <div>
            <p className="text-xl">
              <span className="bg-gradient-to-tl font-bold from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                {workoutData.workoutNote}
              </span>
            </p>
            <p className="text-sm">
              from {workoutData.createdAt.toDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[600px] mx-10 lg:m-0">
        <WorkoutTable workoutId={params.workoutId} />
        <p className="w-full my-10 text-center text-xl">
          Workout total load:{" "}
          <span className="bg-gradient-to-tl text-2xl font-bold from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            {workoutData.workoutLoad}
          </span>{" "}
          kg
        </p>
        <div>
          {session == null && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>New to Apollo?</CardTitle>
                <CardDescription>
                  Join our community and become unstoppable.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <SignIn />
              </CardContent>
            </Card>
          )}
        </div>
        <div>
          {session != null && (
            <Card className="mb-8 mx-2">
              <div className="flex flex-row items-center">
                <CardHeader>
                  <CardTitle>Problems with workout?</CardTitle>
                  <CardDescription>
                    Edit or delete your workout data.
                  </CardDescription>
                </CardHeader>
                <div className="flex flex-col gap-4 mx-6 my-6">
                  {/* <Link href={`/workout/${params.workoutId}/edit`}>  */}
                  <Button>
                    <IconEdit />
                  </Button>
                  {/* </Link>  zrobię to raczej modalem już*/}
                  <Button>
                    <IconEraser
                      onClick={async () => {
                        "use server";
                        await deleteWorkout(params.workoutId);
                        revalidatePath("/dashboard");
                        redirect("/dashboard");
                      }}
                    />
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
