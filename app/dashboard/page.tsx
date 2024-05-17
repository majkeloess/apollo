import Feed from "@/components/Feed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <div>
      {" "}
      <Feed />{" "}
    </div>
  );
}
