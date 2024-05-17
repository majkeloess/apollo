import MusicArticlesCardSkeleton from "./MusicArticlesCardSkeleton";

export default function WisdomSkeleton() {
  const skeletetonArr = Array.from({ length: 8 }, (index: number) => (
    <MusicArticlesCardSkeleton key={index} />
  ));

  return (
    <div className="flex flex-col gap-6 items-center justify-center mt-10 mb-32">
      {skeletetonArr}
    </div>
  );
}
