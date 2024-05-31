import z from "zod";

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

const PlaylistFormSchema = z.object({
  musicName: z.string(),
  musicLink: z.string(),
  genre: z.string(),
});

const ArticleFormSchema = z.object({
  articlesName: z.string(),
  articlesLink: z.string(),
  note: z.string(),
});

const ExerciseFormSchema = z.object({
  exerciseName: z.string(),
  muscleGroup: z.string(),
});

const WorkoutDetailsSchema = z.object({
  workoutId: z.string(),
  exerciseId: z.string(),
  sets: z.number(),
  repetitions: z.array(z.number()),
  weights: z.array(z.number()),
});

const WorkoutSchema = z.object({
  note: z.string(),
});
const ExerciseIdSchema = z.array(z.string());
const SetsSchema = z.array(z.number());
const RepsSchema = z.array(z.array(z.number()));
const WeightSchema = z.array(z.array(z.number()));

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
  image: z.union([z.string(), z.null()]),
  createdAt: z.date(),
  updatedAt: z.date(),
});
const ExerciseDataSchema = z.object({
  exerciseId: z.string(),
  exerciseName: z.string(),
  muscleGroup: z.string(),
});

const ArticlesDataSchema = z.array(
  z.object({
    articleId: z.string(),
    articlesName: z.string(),
    articlesLink: z.string(),
    note: z.string(),
    createdAt: z.date(),
    createdBy: z.string(),
  })
);
const OneWorkoutDataSchema = z.object({
  workoutId: z.string(),
  workoutNote: z.string(),
  createdAt: z.date(),
  createdBy: z.string(),
  workoutLoad: z.number(),
});

const WorkoutsDataSchema = z.array(
  z.object({
    workoutId: z.string(),
    workoutNote: z.string(),
    createdAt: z.date(),
    createdBy: z.string(),
    workoutLoad: z.number(),
  })
);
const MusicDataSchema = z.array(
  z.object({
    musicId: z.string(),
    musicName: z.string(),
    musicLink: z.string(),
    genre: z.string(),
    createdAt: z.date(),
    createdBy: z.string(),
  })
);

const CommentDataSchema = z.object({
  workoutId: z.string(),
  createdBy: z.string(),
  commentContent: z.string(),
});

const CommentFetchSchema = z.array(
  z.object({
    commentId: z.string(),
    workoutId: z.string(),
    createdAt: z.date(),
    createdBy: z.string(),
    commentContent: z.string(),
  })
);

const LikeDataSchema = z.array(
  z.object({
    likeId: z.string(),
    workoutId: z.string(),
    createdAt: z.date(),
    createdBy: z.string(),
  })
);

const FollowDataSchema = z.array(
  z.object({
    followId: z.string(),
    followerId: z.string(),
    followingId: z.string(),
    createdAt: z.date(),
  })
);

const OneFollowDataSchema = z.object({
  followId: z.string(),
  followerId: z.string(),
  followingId: z.string(),
  createdAt: z.date(),
});

const OneLikeDataSchema = z.object({
  likeId: z.string(),
  workoutId: z.string(),
  createdAt: z.date(),
  createdBy: z.string(),
});

export {
  SessionUserSchema,
  UserDataSchema,
  ExerciseDataSchema,
  ArticlesDataSchema,
  WorkoutsDataSchema,
  MusicDataSchema,
  WorkoutSchema,
  ExerciseIdSchema,
  SetsSchema,
  WeightSchema,
  RepsSchema,
  PlaylistFormSchema,
  ExerciseFormSchema,
  ArticleFormSchema,
  OneWorkoutDataSchema,
  CommentDataSchema,
  CommentFetchSchema,
  LikeDataSchema,
  OneLikeDataSchema,
  OneFollowDataSchema,
  FollowDataSchema,
};
