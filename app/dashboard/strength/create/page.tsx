import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MotionDiv } from "@/components/ui/MotionDiv";
import Link from "next/link";
import { IconArrowBack } from "@tabler/icons-react";
import { ExerciseBox } from "@/components/ExerciseForm";
import { fetchExercises } from "@/lib/fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strength Create",
};

export default async function CreateStrength() {
  const exercises = await fetchExercises();
  return (
    <MotionDiv
      className="w-full h-screen flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="my-24">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Add workout</CardTitle>
            <CardDescription>Unleash the beast.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Note">Note</Label>
                  <Input id="Note" placeholder="Your feelings from workout" />
                </div>
                <div className="h-0.5 my-4 dark:bg-gray-800 bg-gray-200"></div>

                <div className="flex flex-col space-y-1.5">
                  <ExerciseBox exercises={exercises} />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Link href="/dashboard/strength">
                  <Button variant="outline">
                    <IconArrowBack />
                  </Button>
                </Link>
                <Button>Add </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </MotionDiv>
  );
}
