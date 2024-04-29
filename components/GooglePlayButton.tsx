import Link from "next/link";
import { IconBrandGooglePlay } from "@tabler/icons-react";

export default function GooglePlayButton() {
  return (
    <Link href="https://play.google.com/">
      <button
        className="shadow-md shadow-black inline-flex  animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        disabled
      >
        <div className="flex flex-row justify-center items-center m-1 gap-1">
          <IconBrandGooglePlay size={36} />
          <div>
            <p className="xl:text-xs text-[0.6rem]">GET IT ON</p>
            <p className="xl:text-xl">Google Play</p>
          </div>
        </div>
      </button>
    </Link>
  );
}
