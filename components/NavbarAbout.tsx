import Image from "next/image";
import { ModeToggle } from "./ui/darktoggle";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AboutNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slay border-b border-gray-200 bg-dark-slay dark:border-gray-800">
      <ul className="flex flex-row xl:justify-between justify-center items-center gap-10 my-5 xl:mx-32">
        <div className="xl:flex gap-10 items-center text-xl">
          <li className="dark:block hidden">
            <Link href="/">
              <Image src="/watermark.png" alt="A" width={80} height={40} />
            </Link>
          </li>
          <li className="dark:hidden">
            <Link href="/">
              <Image src="/watermark_w.png" alt="A" width={80} height={40} />
            </Link>
          </li>
        </div>
        <li className="xl:w-1/3 flex xl:justify-end items-center gap-4">
          {/* <Link href="/login"> */}
          <Button variant="secondary" disabled>
            Log in
          </Button>
          {/* </Link> */}
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
