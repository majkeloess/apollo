export interface Exercises {
  name: string;
  group:
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
