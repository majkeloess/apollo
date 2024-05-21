"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { IconShare } from "@tabler/icons-react";

export default function CopyButton({ link }: { link: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  async function copyToClipboard() {
    await navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  }
  return (
    <Button onClick={copyToClipboard} className="w-full" variant="outline">
      {isCopied ? "Copied!" : <IconShare />}
    </Button>
  );
}
