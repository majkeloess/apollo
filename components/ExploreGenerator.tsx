import { fetchUsersNotFollowed } from "@/lib/fetch";
import ExploreCard from "./ExploreCard";
import { getIdFromSession } from "@/lib/utils";

export async function ExploreGenerator() {
  const idSession = await getIdFromSession();
  const userData = await fetchUsersNotFollowed(idSession);
  return (
    <div className="grid grid-cols-2 gap-6 items-center mx-6 mt-10 mb-32">
      {userData.map((user) => (
        <ExploreCard
          idSession={idSession}
          id={user.id}
          name={user.name}
          image={user.image}
        />
      ))}
    </div>
  );
}
