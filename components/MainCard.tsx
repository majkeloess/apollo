import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function MainCard({
  imageUrl,
  typeText,
}: {
  imageUrl: string;
  typeText?: string;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-3xl">{typeText}</p>
      </DirectionAwareHover>
    </div>
  );
}
