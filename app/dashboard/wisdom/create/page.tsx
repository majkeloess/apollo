import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

import { IconArrowBack } from "@tabler/icons-react";
export default function CreateWisdom() {
  return (
    <MotionDiv
      className="w-full h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add an article</CardTitle>
          <CardDescription>Give us more knowledge.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name of the article"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="link">Link</Label>
                <Input
                  id="link"
                  name="link"
                  placeholder="example.com/example-article"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="note">Note</Label>
                <Textarea
                  id="note"
                  name="note"
                  placeholder="Short article description"
                />
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <Link href="/dashboard/wisdom">
                <Button variant="outline">
                  <IconArrowBack />
                </Button>
              </Link>
              <Button>Add</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}
