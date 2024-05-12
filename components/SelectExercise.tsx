import * as React from "react";
import Sets from "./Sets";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Exercise() {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full my-2">
          <SelectValue placeholder="Select an exercise" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel></SelectLabel>
            <SelectItem value="apple">Bench press</SelectItem>
            <SelectItem value="banana">Squat</SelectItem>
            <SelectItem value="blueberry">Shoulder press</SelectItem>
            <SelectItem value="grapes">Deadlift</SelectItem>
            <SelectItem value="pineapple">Lateral raise</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Sets />
    </div>
  );
}
