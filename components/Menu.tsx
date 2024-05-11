import { MotionDiv } from "./ui/MotionDiv";
import animations from "@/lib/animations";
import { Button } from "./ui/button";
import { IconBarbell } from "@tabler/icons-react";
import Link from "next/link";

export default function MenuDashboard() {
  return (
    <MotionDiv
      className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-slay border-t
    border-gray-200 bg-dark-slay dark:border-gray-800"
      variants={animations.menuVariants}
      initial="hidden"
      whileInView="show"
    >
      <ul className="flex flex-row justify-evenly m-5">
        <li>
          <Link href="/dashboard/strength">
            <Button variant="secondary">
              <IconBarbell />
            </Button>
          </Link>
        </li>
        <li className="flex flex-row gap-4">
          <Link href="/dashboard/music">
            <Button variant="secondary">Music</Button>
          </Link>
          <Link href="/dashboard/wisdom">
            <Button variant="secondary">Wisdom</Button>
          </Link>
        </li>
      </ul>
    </MotionDiv>
  );
}
