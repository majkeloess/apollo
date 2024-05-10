import MusicCard from "@/components/MusicCard";
import { fetchMusic } from "@/lib/fetch";
export default async function MusicPage() {
  const musicData = await fetchMusic();

  return (
    <div className="w-full flex justify-center">
      <div className="mt-24">
        <div className="text-4xl text-center mb-6">Music</div>
        <div className="grid grid-cols-2 gap-6 items-center mx-6">
          {musicData.map((playlist) => (
            <MusicCard
              name={playlist.name}
              genre={playlist.genre}
              link={playlist.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
