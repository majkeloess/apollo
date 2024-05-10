const { db } = require('@vercel/postgres');
const { exercises, articles, playlists } = require("../lib/data.js");

async function seedArticles(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS articles(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        link TEXT NOT NULL,
        note TEXT NOT NULL
      )
    `;

    console.log("Created articles table!");

    const insertArticles = await Promise.all(
      articles.map(
        (article) => client.sql`
          INSERT INTO articles (name, link, note)
          VALUES(${article.name}, ${article.link}, ${article.note})
          `
      )
    );

    console.log("Inserted into articles!");

  } catch (error) {
    console.error('Error seeding articles:', error);
    throw error;
  }
}



async function seedPlaylist(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = client.sql`
    CREATE TABLE IF NOT EXISTS playlists(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name TEXT NOT NULL, 
      link TEXT NOT NULL, 
      genre VARCHAR(255)
    )
    `;

    console.log("Created playlist table!");

    const insertPlaylist = await Promise.all(
      playlists.map(
        (playlist) => client.sql`
        INSERT INTO playlists (name, link, genre)
        VALUES (${playlist.name}, ${playlist.link}, ${playlist.genre})
        `
      )
    );

    console.log("Inserted into playlist!")

  } catch (error) {
    console.error('Error seeding playlists:', error);
    throw error;
  }
}

async function insertExer(client) {
  const insertExercises = await Promise.all(
    exercises.map(
      (exercise) => client.sql`
        INSERT INTO exercises (name, muscleGroup)
        VALUES(${exercise.name}, ${exercise.group})
        `
    ),
  );
}


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

  await seedPlaylist(client);
  await seedArticles(client);
  await seedExercises(client);
  await insertExer(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
