import { group } from "console";

export default function TrainingSummary({
  groups,
  totalLoad,
}: {
  groups: string[];
  totalLoad: number;
}) {
  return (
    <div className="flex flex-row w-full lg:justify-evenly justify-between">
      <ul>
        <li
          className="dark:text-gray-400 text-gray-500
               text-sm"
        >
          Muscle groups
        </li>
        <li className="font-bold">
          <ul>
            {groups.map((muscleGroup) => (
              <li>{muscleGroup}</li>
            ))}
          </ul>
        </li>
      </ul>
      <ul>
        <li
          className="dark:text-gray-400 text-gray-500
               text-sm"
        >
          Total load
        </li>
        <li className="font-bold">{totalLoad}</li>
      </ul>
    </div>
  );
}
