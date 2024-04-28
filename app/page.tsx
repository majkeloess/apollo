import {
  AboutHighlightComponent,
  AboutHighlightComponent2,
} from "@/components/AboutHighlight";
import AppleButton from "@/components/AppleButton";
import Footer from "@/components/Footer";
import GooglePlayButton from "@/components/GooglePlayButton";
import NavbarAbout from "@/components/NavbarAbout";
import Image from "next/image";
import { InfiniteMoving } from "@/components/MovingCards";
export default function HomePage() {
  return (
    <div className="relative">
      <NavbarAbout />
      <div className="xl:my-40 my-16 xl:mx-48 flex flex-row">
        <div className="flex flex-col items-center xl:w-1/2 gap-24">
          <div className="mt-20">
            <AboutHighlightComponent2 />
            <p className="w-screen xl:w-full text-xl text-center p-8">
              Join the community of winners and discover a{" "}
              <span className="font-bold dark:text-gray-400 text-gray-600">
                smarter
              </span>
              ,{" "}
              <span className="font-bold dark:text-gray-400 text-gray-600">
                stronger
              </span>{" "}
              you.
            </p>
          </div>
          <div className="w-screen flex flex-col items-center gap-4 xl:mt-12">
            <p className="text-xl">
              Enroll for{" "}
              <span className="font-bold dark:text-gray-400 text-gray-600">
                free
              </span>{" "}
              with:
            </p>
            <div className="flex flex-row gap-6">
              <AppleButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 xl:flex xl:items-center xl:justify-center">
          <div className="bg-black dark:bg-gray-200 w-[270px] h-[536px]  rounded-[40px] xl:flex items-center justify-center dark:shadow-gray-400 shadow-phone hidden">
            <div className="bg-slay  w-[252px] h-[520px] rounded-[32px] flex justify-center items-center">
              <Image src="/watermark.png" width={159} height={81} alt="her" />
            </div>
          </div>
        </div>
      </div>
      <InfiniteMoving />

      <div className="flex flex-row justify-center">
        <Image src="/her.png" width={464} height={538} alt="her" />
      </div>
      <div className="absolute bottom-0 right-0 m-40 hidden xl:block">
        <Footer />
      </div>
    </div>
  );
}
