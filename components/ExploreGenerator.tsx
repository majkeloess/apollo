import { fetchUsers } from "@/lib/fetch";
import ExploreCard from "./ExploreCard";
export async function ExploreGenerator() {
  const userData = await fetchUsers();

  return (
    <div className="grid grid-cols-2 gap-6 items-center mx-6 mt-10 mb-32">
      {userData.map((user) => (
        <ExploreCard id={user.id} name={user.name} image={user.image} />
      ))}
    </div>
  );
}
