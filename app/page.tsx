import Footer from "@/components/Footer";
import NavbarAbout from "@/components/NavbarAbout";
import Image from "next/image";
import { InfiniteMoving } from "@/components/MovingCards";
import HeroSectionRemastered from "@/components/HeroSectionRemastered";
export default async function HomePage() {
  return (
    <div className="relative w-full">
      <NavbarAbout />
      <HeroSectionRemastered />
      <InfiniteMoving />
      {/* <div className="flex w-full items-center justify-center">
        <p className="text-4xl xl:text-6xl font-bold m-10 ">
          June{" "}
          <span className="bg-gradient-to-tl from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent">
            2024
          </span>
        </p>
      </div> */}
      <div className="flex flex-row justify-center">
        <Image src="/her.png" width={464} height={538} alt="her" />
      </div>
      <div className="absolute bottom-0 right-0 m-40 hidden xl:block">
        <Footer />
      </div>
      <div className="absolute bottom-0 xl:hidden w-full my-10">
        <Footer />
      </div>
    </div>
  );
}
