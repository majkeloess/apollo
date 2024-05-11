import Image from "next/image";
import { ModeToggle } from "./ui/darktoggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { MotionDiv } from "./ui/MotionDiv";
import animations from "@/lib/animations";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavbarDashboard() {
  return (
    <MotionDiv
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slay border-b border-gray-200 bg-dark-slay dark:border-gray-800"
      variants={animations.navVariants}
      initial="hidden"
      whileInView="show"
    >
      <ul className="flex flex-row  justify-center items-center gap-10 my-5">
        <div className="xl:flex gap-10 items-center text-xl">
          <li className="dark:block hidden">
            <Link href="/dashboard">
              <Image src="/watermark.png" alt="Apollo" width={80} height={40} />
            </Link>
          </li>
          <li className="dark:hidden">
            <Link href="/">
              <Image
                src="/watermark_w.png"
                alt="Apollo"
                width={80}
                height={40}
              />
            </Link>
          </li>
        </div>
        <li>
          <Link href="/dashboard/profile">
            <Avatar>
              <AvatarImage
                src="https://github.com/majkeloess.png"
                alt="@shadcn"
              />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </Link>
        </li>
        <li className="xl:w-1/3 flex xl:justify-end items-center gap-4">
          <Link href="/">
            <Button variant="secondary">Log out</Button>
          </Link>
          <ModeToggle />
        </li>
      </ul>
    </MotionDiv>
  );
}
