import { AboutHighlightComponent2 } from "@/components/AboutHighlight";
import Image from "next/image";
import { MainCard } from "./MainCard";
import { MotionDiv } from "./ui/MotionDiv";

export default function HeroSectionRemastered() {
  return (
    <div className="xl:my-40 my-20 flex flex-row">
      <div className="flex items-center flex-col xl:flex-row justify-center gap-12  xl:gap-16 w-full">
        <div className="flex flex-col xl:gap-10">
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
            className="xl:block hidden"
          >
            <p className="p-4 texl text-xl font-medium">
              Join the community of winners and{" "}
              <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                discover{" "}
              </span>
            </p>
            <div className="flex flex-row w-full">
              <MainCard imageUrl="/musicc.png" typeText="smarter you" />
              <MainCard imageUrl="/strength.png" typeText="stronger you" />
              <MainCard imageUrl="/endurance.png" typeText="healthier you" />
            </div>
          </MotionDiv>
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
            <p className="xl:hidden text-center xl:text-xl font-medium">
              Join the community of winners and discover{" "}
              <span className="bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                smarter, stronger, organized{" "}
              </span>
              you.
            </p>
          </MotionDiv>
        </div>
        <MotionDiv
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 2.5, duration: 1 }}
          className="flex xl:flex-row flex-col gap-12"
        >
          <div className="bg-black dark:bg-gray-200 w-[270px] h-[536px]  rounded-[40px] flex items-center justify-center dark:shadow-gray-400 shadow-phone">
            <div className="bg-slay  w-[252px] h-[520px] rounded-[32px] flex justify-center items-center">
              <Image
                src="/card1.png"
                alt="her"
                width={250}
                height={482}
                className="rounded-[32px]"
              />
            </div>
          </div>
          <div className="bg-black dark:bg-gray-200 w-[270px] h-[536px]  rounded-[40px] flex items-center justify-center dark:shadow-gray-400 shadow-phone">
            <div className="bg-slay  w-[252px] h-[520px] rounded-[32px] flex justify-center items-center">
              <Image
                src="/card2.png"
                alt="her"
                width={252}
                height={520}
                className="rounded-[32px] object-cover"
              />
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
