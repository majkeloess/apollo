import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { MotionDiv } from "@/components/ui/MotionDiv";
import ProgressCard from "@/components/ProgressCard";
import CalendarCard from "@/components/CalendarCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strength",
};
export default async function StrengthPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex justify-center"
    >
      <div className="mt-24">
        <div className="flex flex-row justify-center gap-16 items-center font-bold my-4">
          <div className="text-5xl text-center">
            <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Strength
            </span>
          </div>
          <Link href="/dashboard/strength/create">
            <Button variant="outline">
              <IconPlus />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center mt-10 mb-32">
          <ProgressCard />
          <CalendarCard />
        </div>
      </div>
    </MotionDiv>
  );
}
