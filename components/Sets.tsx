"use client";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { IconMinus, IconPlus } from "@tabler/icons-react";
export default function Sets() {
  const [sets, setSets] = React.useState(1);
  const setsElements = Array.from({ length: sets }, (_, index) => (
    <div
      key={index}
      className="flex flex-row justify-end items-center gap-3 my-2"
    >
      <Label key={index} htmlFor="Set">
        Set #{index + 1}
      </Label>
      <div className="flex flex-row gap-2">
        <Input
          className="w-[60px]"
          placeholder="kg"
          id={`weight${index + 1}`}
          name={`weight${index + 1}`}
        />
        <Input
          className="w-[60px]"
          placeholder="reps"
          id={`reps${index + 1}`}
          name={`reps${index + 1}`}
        />
      </div>
    </div>
  ));

  return (
    <div className="my-4">
      {setsElements}
      <div className="flex justify-end gap-2">
        <Button
          className="w-[100px]"
          type="button"
          variant="secondary"
          onClick={() => {
            setSets((e) => e + 1);
          }}
        >
          <div className="flex flex-row gap-1 justify-center items-center">
            <p>Set</p>
            <IconPlus />
          </div>
        </Button>
        <Button
          className="w-[50px]"
          type="button"
          variant="secondary"
          onClick={() => {
            if (sets > 1) {
              setSets((e) => e - 1);
            }
          }}
        >
          <div className="flex flex-row gap-1 justify-center items-center">
            <IconMinus />
          </div>
        </Button>
      </div>
    </div>
  );
}
