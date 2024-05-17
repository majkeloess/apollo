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

export const metadata: Metadata = {
  title: "Strength Create",
};

export default async function CreateStrength() {
  const exercises = await fetchExercises();
  return (
    <MotionDiv
      className="w-full h-screen flex justify-center mb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="my-24 ">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Add workout</CardTitle>
            <CardDescription>Unleash the beast.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormExercises exercises={exercises} />
          </CardContent>
        </Card>
      </div>
    </MotionDiv>
  );
}
