import Link from "next/link";
import { IconBrandApple } from "@tabler/icons-react";

export default function AppleButton() {
  return (
    <Link href="https://www.apple.com/">
      <button
        className="shadow-md shadow-black  inline-flex  animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        disabled
      >
        <div className="flex flex-row justify-center items-center m-1 gap-1">
          <IconBrandApple size={36} />
          <div>
            <p className="text-xs">Download on the</p>
            <p className="xl:text-xl">App Store</p>
          </div>
        </div>
      </button>
    </Link>
  );
}
