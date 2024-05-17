import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { MotionDiv } from "@/components/ui/MotionDiv";
import FeedCard from "./FeedCard";
import FeedCardSkeleton from "./skeletons/FeedSkeleton";

export default async function Feed() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex justify-center"
    >
      <div className="mt-24">
        <div className="flex flex-col gap-6 items-center justify-center mt-10 mb-32">
          <FeedCard
            username="Michał Saturczak"
            date="May 9, 2024 at 8:33PM"
            description="Good"
            load={5800}
            sets={20}
            reps={209}
            time="1h41m"
            photo="/wielki.png"
          />
          <FeedCard
            username="Michał Saturczak"
            date="May 7, 2024 at 5:15PM"
            description="Dzisiaj ciężary dobre"
            load={5800}
            sets={19}
            reps={209}
            time="1h41m"
            photo="/spel.png"
          />
          <FeedCard
            username="Michał Saturczak"
            date="May 1, 2024 at 4:12PM"
            description="Dobra noga jest"
            load={5800}
            sets={18}
            reps={209}
            time="1h41m"
            photo="/nozka.png"
          />
          <FeedCard
            username="Michał Saturczak"
            date="April 30, 2024 at 3:10PM"
            description="Zakrety sa ostre"
            load={5800}
            sets={7}
            reps={209}
            time="1h41m"
            photo="/dl.png"
          />
        </div>
      </div>
    </MotionDiv>
  );
}
