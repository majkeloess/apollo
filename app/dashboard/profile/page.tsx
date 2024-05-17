import { Metadata } from "next";
import { Suspense } from "react";
import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";
import ProfilePage from "@/components/ProfilePage";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function Page() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfilePage />
    </Suspense>
  );
}
