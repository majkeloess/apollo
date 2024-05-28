import { MotionDiv } from "@/components/ui/MotionDiv";
import FeedCard from "./FeedCard";
import { fetchWorkouts, fetchIdFromSession } from "@/lib/fetch";
import { auth } from "@/auth";
import { SessionUserSchema } from "@/definitions";

export default async function Feed() {
  const session = await auth();
  const { image, email, name } = SessionUserSchema.parse(session?.user);
  const id = await fetchIdFromSession(name);
  const workoutData = await fetchWorkouts();
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
          {workoutData.map((workout) => (
            <FeedCard
              workoutNote={workout.workoutNote}
              workoutId={workout.workoutId}
              createdAt={workout.createdAt.toString().split("G")[0]}
              createdBy={workout.createdBy}
              workoutLoad={workout.workoutLoad}
              key={workout.workoutId}
              id={id}
            />
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}
