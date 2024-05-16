import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import MusicCard from "@/components/MusicCard";
import { fetchMusic } from "@/lib/fetch";
import { MotionDiv } from "@/components/ui/MotionDiv";
export default async function MusicPage() {
  const musicData = await fetchMusic();

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex justify-center"
    >
      <div className="mt-24">
        <div className="flex flex-row justify-center gap-16 items-center font-bold my-4">
          <div className="text-5xl text-center">
            <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Music
            </span>
          </div>
          <Link href="/dashboard/music/create">
            <Button variant="outline">
              <IconPlus />
            </Button>
          </Link>
        </div>
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
      </div>
    </MotionDiv>
  );
}
