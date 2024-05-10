const { db } = require('@vercel/postgres');
const { exercises } = require("../lib/data.js");


async function seedExercises(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS exercises(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL, 
      muscleGroup VARCHAR(255) NOT NULL 
      );
    `;

    console.log("Created exercises table!");

    const insertExercises = await Promise.all(
      exercises.map(
        (exercise) => client.sql`
        INSERT INTO exercises (name, muscleGroup)
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
