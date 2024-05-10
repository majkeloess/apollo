const { db } = require('@vercel/postgres');
const { exercises } = require("../lib/exercises.js");


// interface Exercises {
//   name: string;
//   muscleGroup:
//   | "Abdominals"
//   | "Biceps"
//   | "Shoulders"
//   | "Middle Back"
//   | "Quadriceps"
//   | "Lower Back"
//   | "Hamstrings"
//   | "Adductors"
//   | "Triceps"
//   | "Chest"
//   | "Glutes"
//   | "Traps"
//   | "Calves"
//   | "Abductors"
//   | "Lats"
//   | "Forearms"
//   | "Neck";
// }

async function seedExercises(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE exercises(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(120) NOT NULL, 
      group VARCHAR(120) NOT NULL 
      );
    `;

    console.log("Created exercises table!");

    const insertExercises = await Promise.all(
      exercises.map(
        (exercise) => client.sql`
        INSERT INTO exercises (name, group)
        VALUES(${exercise.name}, ${exercise.group})
        `
      ),
    );

    console.log("Inserted data into exercises table!");


  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();


  await seedExercises(client);
  console.log("Test");

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
