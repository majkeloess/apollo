import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { fetchExercises } from "@/lib/fetch";
import { Metadata } from "next";
import FormExercises from "@/components/FormExercises";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { getIdFromSession } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Strength ",
};

export default async function StrengthPage() {
  const exercises = await fetchExercises();
  const id = await getIdFromSession();

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
