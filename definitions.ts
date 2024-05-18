import z from "zod";
export interface Exercises {
  exerciseId: string;
  exerciseName: string;
  muscleGroup:
    | "Abdominals"
    | "Biceps"
    | "Shoulders"
    | "Middle Back"
    | "Quadriceps"
    | "Lower Back"
    | "Hamstrings"
    | "Adductors"
    | "Triceps"
    | "Chest"
    | "Glutes"
    | "Traps"
    | "Calves"
    | "Abductors"
    | "Lats"
    | "Forearms"
    | "Neck";
}

export interface ExerciseBoxProps {
  exercises: Exercises[];
}

export interface Music {
  id: string;
  name: string;
  link: string;
  genre: string;
}

export interface Articles {
  id: string;
  name: string;
  link: string;
  note: string;
}

const SessionUserSchema = z.object({
  name: z.string(),
  image: z.string(),
  email: z.string(),
});

const UserDataSchema = z.object({
  id: z.string(),
  name: z.string(),
  //nickname: z.string(),
  email: z.string(),
  //emailVerified: z.date(),
  image: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export { SessionUserSchema, UserDataSchema };
