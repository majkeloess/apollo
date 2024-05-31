"use client";
import { IconEraser, IconPlus } from "@tabler/icons-react";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
export function Erased() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          description: "Content erased succesfully.",
        });
      }}
    >
      <IconEraser />
    </Button>
  );
}

export function Added() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Content added succesfully.",
        });
      }}
    >
      <IconPlus />
    </Button>
  );
}

export function Followed() {
  const { toast } = useToast();

  return (
    <Button
      className="font-bold w-full"
      variant="outline"
      onClick={() => {
        toast({
          description: "User followed succesfully.",
        });
      }}
    >
      Follow
    </Button>
  );
}

export function Unfollowed() {
  const { toast } = useToast();

  return (
    <Button
      className="font-bold w-full"
      variant="outline"
      onClick={() => {
        toast({
          description: "User unfollowed succesfully.",
        });
      }}
    >
      Unfollow
    </Button>
  );
}

export function Commented() {
  const { toast } = useToast();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        toast({
          description: "Added comment succesfully.",
        });
      }}
    >
      <IconPlus />
    </Button>
  );
}
