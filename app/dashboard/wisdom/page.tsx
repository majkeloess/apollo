import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { Metadata } from "next";
import { Suspense } from "react";
import WisdomGenerator from "@/components/WisdomGenerator";
import WisdomSkeleton from "@/components/skeletons/WisdomSkeleton";

export const metadata: Metadata = {
  title: "Wisdom",
};

export default function WisdomPage() {
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
              Wisdom
            </span>
          </div>
          <Link href="/dashboard/wisdom/create">
            <Button variant="outline">
              <IconPlus />
            </Button>
          </Link>
        </div>
        <Suspense fallback={<WisdomSkeleton />}>
          <WisdomGenerator />
        </Suspense>
      </div>
    </MotionDiv>
  );
}
