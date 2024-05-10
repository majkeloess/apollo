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

export interface Playlists {
  name: string;
  link: string;
  genre: string;
}

export interface Articles {
  name: string;
  link: string;
  note: string;
}
