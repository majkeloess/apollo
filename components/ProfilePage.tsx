import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { ProfileCard } from "@/components/UserAddedData";
import {
  fetchUserArticles,
  fetchUserData,
  fetchUserWorkouts,
  fetchUserMusic,
} from "@/lib/fetch";
import CalendarCard from "./CalendarCard";

export default async function ProfilePage({ id }: { id: string }) {
  const profileDataPre = fetchUserData(id);
  const articlesDataPre = fetchUserArticles(id);
  const musicDataPre = fetchUserMusic(id);
  const workoutsDataPre = fetchUserWorkouts(id);
  const [profileData, articlesData, musicData, workoutsData] =
    await Promise.all([
      profileDataPre,
      articlesDataPre,
      musicDataPre,
      workoutsDataPre,
    ]);
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex justify-center"
    >
      <div className="mt-28 flex flex-col justify-center">
        <div className="flex flex-row w-full gap-6 items-center justify-center">
          <Avatar className="w-[80px] h-[80px]">
            <AvatarImage src={profileData.image} alt="profile image" />
          </Avatar>

          <div>
            <h1 className="text-2xl font-medium">
              <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>
            <p>{profileData.createdAt.toDateString()}</p>
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-center mt-8">
          <ul>
            <li className="dark:text-gray-400 text-gray-500 text-md">
              Trainings
            </li>
            <li className="font-bold text-md text-end">
              {workoutsData.length}
            </li>
          </ul>
          <ul>
            <li className="dark:text-gray-400 text-gray-500 text-md">
              Followers
            </li>
            <li className="font-bold text-md text-end">[TODO]</li>
          </ul>
          <ul>
            <li className="dark:text-gray-400 text-gray-500 text-md">
              Following
            </li>
            <li className="font-bold text-md text-end">[TODO]</li>
          </ul>
        </div>
        {/* <div className="h-0.5 my-2 dark:bg-gray-800 bg-gray-200"></div> */}
        <div className="mt-10 mx-8 flex flex-col justify-center gap-10 mb-28">
          <CalendarCard name={profileData.name} workouts={workoutsData} />

          <ProfileCard
            name={profileData.name}
            data={workoutsData}
            type="workouts"
          />
          <ProfileCard
            name={profileData.name}
            data={articlesData}
            type="articles"
          />
          <ProfileCard name={profileData.name} data={musicData} type="music" />
        </div>
      </div>
    </MotionDiv>
  );
}
