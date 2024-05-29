import { MotionDiv } from "@/components/ui/MotionDiv";
import { Suspense } from "react";
import MusicSkeleton from "@/components/skeletons/MusicSkeleton";
import { ExploreGenerator } from "@/components/ExploreGenerator";
export default function ExplorePage() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex justify-center"
    >
      <div className="mt-24">
        <Suspense fallback={<MusicSkeleton />}>
          <ExploreGenerator />
        </Suspense>
      </div>
    </MotionDiv>
  );
}
