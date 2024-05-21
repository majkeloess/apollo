import { AboutHighlightComponent2 } from "@/components/AboutHighlight";
import AppleButton from "@/components/AppleButton";
import GooglePlayButton from "@/components/GooglePlayButton";
import Image from "next/image";
import { MotionDiv } from "./ui/MotionDiv";

export default function HeroSection() {
  return (
    <div className="xl:my-40 my-16 xl:mx-48 flex flex-row">
      <div className="flex flex-col items-center xl:w-1/2 gap-24">
        <div className="mt-20">
          <AboutHighlightComponent2 />
          <MotionDiv
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 1.5,
            }}
          >
            <p className="w-screen xl:w-full xl:text-xl text-center px-8 xl:p-8">
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
          </MotionDiv>
        </div>
        {/* <MotionDiv
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            delay: 2.2,
          }}
          className="w-screen flex flex-col items-center gap-4 xl:mt-12 xl:hidden"
        >
          <p className="xl:text-xl">
            Download for{" "}
            <span className="font-bold dark:text-gray-400 text-gray-600">
              free
            </span>{" "}
            with:
          </p>
          <div className="flex flex-row gap-6">
            <AppleButton />
            <GooglePlayButton />
          </div>
        </MotionDiv> */}
        {/* <MotionDiv
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            delay: 3.2,
          }}
          className="w-screen xl:flex flex-col items-center gap-4 xl:mt-12 hidden"
        >
          <p className="xl:text-xl">
            Download for{" "}
            <span className="font-bold dark:text-gray-400 text-gray-600">
              free
            </span>{" "}
            with:
          </p>
          <div className="flex flex-row gap-6">
            <AppleButton />
            <GooglePlayButton />
          </div>
        </MotionDiv> */}
      </div>
      <MotionDiv
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 2.5, duration: 1 }}
        className="xl:w-1/2 xl:flex xl:items-center xl:justify-center"
      >
        <div className="bg-black dark:bg-gray-200 w-[270px] h-[536px]  rounded-[40px] xl:flex items-center justify-center dark:shadow-gray-400 shadow-phone hidden">
          <div className="bg-slay  w-[252px] h-[520px] rounded-[32px] flex justify-center items-center">
            <Image
              src="/watermark.png"
              width={159}
              height={81}
              alt="her"
              priority
            />
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
