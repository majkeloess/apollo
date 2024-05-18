import Feed from "@/components/Feed";
import { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <div>
      <Feed />
    </div>
  );
}
