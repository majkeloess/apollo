import MusicCard from "@/components/MusicCard";
import { fetchMusic } from "@/lib/fetch";

export default async function MusicGenerator() {
  const musicData = await fetchMusic();

  return (
    <div className="grid grid-cols-2 gap-6 items-center mx-6 mt-10 mb-32">
      {musicData.map((playlist) => (
        <MusicCard
          key={playlist.musicId}
          name={playlist.musicName}
          genre={playlist.genre}
          link={playlist.musicLink}
        />
      ))}
    </div>
  );
}
