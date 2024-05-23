import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link href="https://majkeloess.dev" target="_blank">
        <p className="text-lg font-bold">&copy;2024 Apollo, Inc.</p>
      </Link>
      <Link href="/privacy-policy" target="_blank">
        <Button variant="secondary">Privacy policy</Button>
      </Link>
    </div>
  );
}
