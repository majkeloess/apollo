import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { fetchExercises, fetchIdFromSession } from "@/lib/fetch";
import { Metadata } from "next";
import FormExercises from "@/components/FormExercises";
import { auth } from "@/auth";
import { SessionUserSchema } from "@/definitions";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Strength ",
};

export default async function StrengthPage() {
  const exercises = await fetchExercises();
  const session = await auth();
  const { image, email, name } = SessionUserSchema.parse(session?.user);
  const id = await fetchIdFromSession(name);

  return (
    <MotionDiv
      className="w-full h-screen flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="my-24 ">
        <Card className="w-[350px] mt-8">
          <CardHeader>
            <CardTitle>Add workout</CardTitle>
            <CardDescription>Unleash the beast.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormExercises exercises={exercises} id={id} />
          </CardContent>
        </Card>
        <Card className="w-[350px] mt-12 mb-8">
          <div className="flex flex-row items-center gap-8">
            <CardHeader>
              <CardTitle>Missing an exercise?</CardTitle>
              <CardDescription>You can add one easily.</CardDescription>
            </CardHeader>
            <Link href="/dashboard/exercise/create">
              <Button variant="secondary">
                <IconPlus />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </MotionDiv>
  );
}
