import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MotionDiv } from "@/components/ui/MotionDiv";
import Link from "next/link";
import { IconArrowBack } from "@tabler/icons-react";
import { Metadata } from "next";
import { createExercise } from "@/lib/actions";

export const metadata: Metadata = {
  title: "Exercise Create",
};

export default async function CreateExercise() {
  return (
    <MotionDiv
      className="w-full h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add an playlist</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createExercise}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name of the exercise"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="link">Group</Label>
                <Input
                  id="group"
                  name="group"
                  placeholder="Muscle group of the exercise"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <Link href="/dashboard/strength">
                <Button variant="outline">
                  <IconArrowBack />
                </Button>
              </Link>
              <Button type="submit">Add</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}
