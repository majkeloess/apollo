import Image from "next/image";
import { ModeToggle } from "./ui/darktoggle";
import Link from "next/link";
import { MotionDiv } from "./ui/MotionDiv";
import animations from "@/lib/animations";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SignOut } from "./SignOut";
import { auth } from "@/auth";
import { fetchIdFromSession } from "@/lib/fetch";
import { SessionUserSchema } from "@/definitions";

export default async function NavbarDashboard() {
  const session = await auth();
  const { name, image, email } = SessionUserSchema.parse(session?.user);

  const id = await fetchIdFromSession(name);
  return (
    <MotionDiv
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slay border-b border-gray-200 bg-dark-slay dark:border-gray-800"
      variants={animations.navVariants}
      initial="hidden"
      whileInView="show"
    >
      <ul className="flex flex-row  justify-center items-center gap-12 lg:gap-6 my-5">
        <div className="xl:flex gap-10 items-center text-xl">
          <li className="dark:block hidden">
            <Link href="/dashboard">
              <Image
                src="/a_main_black.png"
                alt="Apollo"
                width={45}
                height={45}
              />
            </Link>
          </li>
          <li className="dark:hidden">
            <Link href="/dashboard">
              <Image src="/a_main.png" alt="Apollo" width={45} height={45} />
            </Link>
          </li>
        </div>
        <li>
          <Link href={`/dashboard/profile/${id}`}>
            {session?.user?.image && (
              <Avatar className="w-[45px] h-[45px]">
                <AvatarImage src={session.user.image} alt="profileimage" />
              </Avatar>
            )}
          </Link>
        </li>
        <li className="xl:w-1/3 flex xl:justify-end items-center gap-4">
          <SignOut />
          <ModeToggle />
        </li>
      </ul>
    </MotionDiv>
  );
}
