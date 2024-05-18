import { Metadata } from "next";
import { Suspense } from "react";
import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";
import ProfilePage from "@/components/ProfilePage";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfilePage id={id} />
    </Suspense>
  );
}
