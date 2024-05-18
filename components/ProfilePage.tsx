import { auth } from "@/auth";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MotionDiv } from "@/components/ui/MotionDiv";
import {
  AddedArticles,
  AddedMusic,
  AddedWorkouts,
} from "@/components/UserAddedData";
import { fetchUserData } from "@/lib/fetch";

export default async function ProfilePage({ id }: { id: string }) {
  const profileData = await fetchUserData(id);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex justify-center"
    >
      <div className="mt-28">
        <div className="flex flex-row w-full gap-6 items-center justify-center">
          {profileData?.image && (
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage src={profileData.image} alt="profile image" />
            </Avatar>
          )}
          <div>
            <h1 className="text-3xl font-medium">
              <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                {profileData?.name}
              </span>
            </h1>
            <p>{profileData?.createdAt.toString().split("G")[0]}</p>
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-center mt-8">
          <ul>
            <li className="dark:text-gray-400 text-gray-500 text-xl">
              Trainings
            </li>
            <li className="font-bold text-xl text-end">121</li>
          </ul>
          <ul>
            <li className="dark:text-gray-400 text-gray-500 text-xl">
              Followers
            </li>
            <li className="font-bold text-xl text-end">23</li>
          </ul>
          <ul>
            <li className="dark:text-gray-400 text-gray-500 text-xl">
              Following
            </li>
            <li className="font-bold text-xl text-end">11</li>
          </ul>
        </div>
        <div className="h-0.5 my-2 dark:bg-gray-800 bg-gray-200"></div>
        <div className="mt-10 flex flex-col gap-10 justify-center mb-28">
          <AddedWorkouts name={profileData?.name} />
          <AddedArticles name={profileData?.name} />
          <AddedMusic name={profileData?.name} />
        </div>
      </div>
    </MotionDiv>
  );
}
