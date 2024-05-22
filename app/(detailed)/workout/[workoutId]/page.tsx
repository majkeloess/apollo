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
import {
  fetchUserByWorkout,
  fetchUserData,
  fetchWorkoutDetails,
} from "@/lib/fetch";
import { IconEdit, IconEraser } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export default async function ({ params }: { params: { workoutId: string } }) {
  const sessionPre = auth(); //jeżeli jest pusta to jest po prostu null
  const workoutDataPre = fetchUserByWorkout(params.workoutId);
  const [session, workoutData] = await Promise.all([
    sessionPre,
    workoutDataPre,
  ]);
  const userData = await fetchUserData(workoutData.createdBy);

  return (
    <div className="w-screen">
      <div className="flex flex-row">
        <div className="dark:block hidden">
          <Link href="/dashboard">
            <Image
              src="/a_main_black.png"
              alt="Apollo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="dark:hidden">
          <Link href="/dashboard">
            <Image src="/a_main.png" alt="Apollo" width={80} height={80} />
          </Link>
        </div>
        <div>
          <p>{userData.name}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <WorkoutTable workoutId={params.workoutId} />
        <div>
          {session == null && (
            <Card className="mt-12 mb-8">
              <CardHeader>
                <CardTitle>New to Apollo?</CardTitle>
                <CardDescription>
                  Join our community and become unstopabble.
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
            <Card className="mt-12 mb-8 mx-2">
              <div className="flex flex-row items-center">
                <CardHeader>
                  <CardTitle>Problems with workout?</CardTitle>
                  <CardDescription>
                    Edit or delete your workout data.
                  </CardDescription>
                </CardHeader>
                <div className="flex flex-col gap-4 mx-6 my-6">
                  <Button>
                    <IconEdit />
                  </Button>
                  <Button>
                    <IconEraser />
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
