import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { ProfileCard } from "@/components/UserAddedData";
import {
  fetchUserArticles,
  fetchUserData,
  fetchUserWorkouts,
  fetchUserMusic,
  fetchFollowers,
  fetchFollowing,
} from "@/lib/fetch";
import CalendarCard from "./CalendarCard";
import FollowButton from "./FollowButton";
import { getIdFromSession, isFollowing, isOwner } from "@/lib/utils";
import ChartCard from "./ChartCard";

export default async function ProfilePage({ id }: { id: string }) {
  const idSession = await getIdFromSession();

  //check whether it's owner
  const owner = isOwner(idSession, id);
  const follow = await isFollowing(idSession, id);

  const followersDataPre = fetchFollowers(id);
  const followingDataPre = fetchFollowing(id);
  const profileDataPre = fetchUserData(id);
  const articlesDataPre = fetchUserArticles(id);
  const musicDataPre = fetchUserMusic(id);
  const workoutsDataPre = fetchUserWorkouts(id);
  const [
    profileData,
    articlesData,
    musicData,
    workoutsData,
    followersData,
    followingData,
  ] = await Promise.all([
    profileDataPre,
    articlesDataPre,
    musicDataPre,
    workoutsDataPre,
    followersDataPre,
    followingDataPre,
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
            <AvatarImage
              src={profileData.image ? profileData.image : "/A_logo.png"}
              alt="profile image"
            />
          </Avatar>

          <div className="flex flex-col gap-5">
            <div>
              <p className="text-2xl font-medium">
                <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </p>
              <p>{profileData.createdAt.toDateString()}</p>
            </div>
            {!owner && (
              <FollowButton follow={follow} idSession={idSession} id={id} />
            )}
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
            <li className="font-bold text-md text-end">
              {followersData.length}
            </li>
          </ul>
          <ul>
            <li className="dark:text-gray-400 text-gray-500 text-md">
              Following
            </li>
            <li className="font-bold text-md text-end">
              {followingData.length}
            </li>
          </ul>
        </div>
        {/* <div className="h-0.5 my-2 dark:bg-gray-800 bg-gray-200"></div> */}
        <div className="mt-10 mx-8 flex flex-col justify-center gap-10 mb-28">
          <CalendarCard name={profileData.name} workouts={workoutsData} />
          {workoutsData.length != 0 && (
            <ChartCard name={profileData.name} workouts={workoutsData} />
          )}
          {workoutsData.length != 0 && (
            <ProfileCard
              name={profileData.name}
              data={workoutsData}
              type="workouts"
              owner={owner}
            />
          )}
          {articlesData.length != 0 && (
            <ProfileCard
              name={profileData.name}
              data={articlesData}
              type="articles"
              owner={owner}
            />
          )}
          {musicData.length != 0 && (
            <ProfileCard
              name={profileData.name}
              data={musicData}
              type="music"
              owner={owner}
            />
          )}
        </div>
      </div>
    </MotionDiv>
  );
}
