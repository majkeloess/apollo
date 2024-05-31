import { unstable_noStore } from "next/cache";
import prisma from "./prisma";
import {
  UserDataSchema,
  ExerciseDataSchema,
  ArticlesDataSchema,
  MusicDataSchema,
  WorkoutsDataSchema,
  OneWorkoutDataSchema,
  CommentFetchSchema,
  LikeDataSchema,
  FollowDataSchema,
} from "@/definitions";

export async function fetchExercises() {
  unstable_noStore();
  const exerciseData = await prisma.exercises.findMany({
    orderBy: {
      exerciseName: "asc",
    },
  });

  return exerciseData;
}

export async function fetchMusic() {
  unstable_noStore();

  const musicData = await prisma.music.findMany();
  return musicData;
}

export async function fetchArticles() {
  unstable_noStore();
  const articlesData = await prisma.articles.findMany();

  return articlesData;
}

export async function fetchExerciseInfo(exerciseId: string) {
  unstable_noStore();
  const exerciseData = await prisma.exercises.findUnique({
    where: {
      exerciseId: exerciseId,
    },
  });
  const validatedExerciseData = ExerciseDataSchema.parse(exerciseData);

  return validatedExerciseData;
}

export async function fetchIdFromSession(name: string) {
  unstable_noStore();
  const userData = await prisma.user.findFirst({
    where: {
      name: name,
    },
  });
  const validatedData = UserDataSchema.parse(userData);

  return validatedData.id;
}

export async function fetchWorkouts() {
  unstable_noStore();

  const workoutData = await prisma.workout.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return workoutData;
}

export async function fetchWorkoutDetails(workoutId: string) {
  unstable_noStore();

  const workoutDetailsData = await prisma.workoutDetails.findMany({
    where: {
      workoutId: workoutId,
    },
  });

  return workoutDetailsData;
}

export async function fetchCountUserWorkouts(id: string) {
  unstable_noStore();
  const userTrainingsCount = await prisma.workout.count({
    where: {
      createdBy: id,
    },
  });

  return userTrainingsCount;
}

export async function fetchUserData(id: string) {
  unstable_noStore();
  const profileData = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  const validatedProfileData = UserDataSchema.parse(profileData);
  return validatedProfileData;
}
export async function fetchUserArticles(id: string) {
  const articlesData = await prisma.articles.findMany({
    where: {
      createdBy: id,
    },
  });
  const validatedArticlesData = ArticlesDataSchema.parse(articlesData);

  return validatedArticlesData;
}

export async function fetchUserMusic(id: string) {
  const musicData = await prisma.music.findMany({
    where: {
      createdBy: id,
    },
  });

  const validatedMusicData = MusicDataSchema.parse(musicData);

  return validatedMusicData;
}

export async function fetchUserWorkouts(id: string) {
  const workoutsData = await prisma.workout.findMany({
    where: {
      createdBy: id,
    },
  });
  const validatedWorkoutData = WorkoutsDataSchema.parse(workoutsData);

  return validatedWorkoutData;
}
export async function fetchUserByWorkout(workoutId: string) {
  const workoutsData = await prisma.workout.findFirst({
    where: {
      workoutId: workoutId,
    },
  });
  const validatedWorkoutData = OneWorkoutDataSchema.parse(workoutsData);

  return validatedWorkoutData;
}

export async function fetchComments(workoutId: string) {
  unstable_noStore();
  const commentData = await prisma.comment.findMany({
    where: {
      workoutId: workoutId,
    },
  });

  const validatedCommentData = CommentFetchSchema.parse(commentData);
  return validatedCommentData;
}

export async function fetchLikes(workoutId: string) {
  unstable_noStore();
  const likeData = await prisma.like.findMany({
    where: {
      workoutId: workoutId,
    },
  });

  const validatedLikeData = LikeDataSchema.parse(likeData);

  return validatedLikeData;
}

export async function fetchUsers() {
  unstable_noStore;
  const userData = await prisma.user.findMany();

  return userData;
}

export async function fetchFollowers(id: string) {
  unstable_noStore();
  const followData = await prisma.follow.findMany({
    where: {
      followingId: id,
    },
  });
  const validatedFollowData = FollowDataSchema.parse(followData);
  return validatedFollowData;
}

export async function fetchFollowing(id: string) {
  unstable_noStore();
  const followData = await prisma.follow.findMany({
    where: {
      followerId: id,
    },
  });
  const validatedFollowData = FollowDataSchema.parse(followData);
  return validatedFollowData;
}

//more complex fetches

export async function fetchUsersNotFollowed(id: string) {
  const followingIds = await prisma.follow
    .findMany({
      where: { followerId: id },
      select: { followingId: true },
    })
    .then((follows) => follows.map((follow) => follow.followingId));

  return await prisma.user.findMany({
    where: {
      NOT: {
        id: { in: followingIds },
      },
      AND: {
        id: { not: id }, //you
      },
    },
  });
}

export async function fetchFollowedWorkouts(id: string) {
  const followingIds = await prisma.follow
    .findMany({
      where: { followerId: id },
      select: { followingId: true },
    })
    .then((follows) => follows.map((follow) => follow.followingId));

  followingIds.push(id);

  return await prisma.workout.findMany({
    where: {
      createdBy: { in: followingIds },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
