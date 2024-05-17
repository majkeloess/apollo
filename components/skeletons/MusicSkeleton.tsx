import MusicArticlesCardSkeleton from "./MusicArticlesCardSkeleton";

export default function MusicSkeleton() {
  const skeletetonArr = Array.from({ length: 8 }, (index: number) => (
    <MusicArticlesCardSkeleton key={index} />
  ));

  return (
    <div className="grid grid-cols-2 gap-6 items-center mx-6 mt-10 mb-32">
      {skeletetonArr}
    </div>
  );
}
