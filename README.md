[![Apollo banner](https://github.com/majkeloess/ApolloApp/assets/118011581/4365a805-816c-4250-94b7-8dc637355c0c)](https://apollo.majkeloess.dev)

# 👋 Introduction 
**Apollo** is the largest project I'm currently working on. The idea behind Apollo is simple: it's a platform where you can connect with your friends and view their daily gym or endurance training activities on your feed. 

Current version: *1.0*
# ⚙️ Tech stack
- Next.js
- React.js
- TypeScript
- TailwindCSS
- Prisma
- Auth.js
- Framer motion
- Chart.js
- zod
# 🛠️ Features 
![Apollo_feature](https://github.com/majkeloess/ApolloApp/assets/118011581/9695addd-d25e-431a-88ec-d439fd3480cb)
🔋 **Authentication:** Securely authenticate users through Google OAuth.

🔋 **Authorization**:  Implement role-based access control to manage user permissions.

🔋 **JWT Token Strategy**:  Streamline user access by leveraging JSON Web Tokens (JWT) for authentication and authorization, eliminating the need for traditional account creation.

🔋 **Workout Tracking**:  Enable users to easily add and track workouts, including the number of sets and load for each exercise.

🔋 **Data Collection & Storage**: The platform securely stores and maintains all data provided by users.

🔋 **Social Features (SSR)**: Enhance user engagement with server-side rendered (SSR) social features like following, liking, commenting on posts, and a personalized feed.

🔋 **Performance Charts**:  Visualize training progress and data through interactive charts and graphs.

🔋 **Additional Content**:  Incorporate relevant music playlists and articles to enhance the user experience.

🔋 **Responsive Design**: Ensure the platform adapts seamlessly to different screen sizes and devices for optimal viewing.

🔋 **Light/Dark Mode**: Provide users with the option to switch between light and dark themes for visual comfort.



and many more ...

# Installation
To run application locally you need to have `git`, `node.js` and `npm` installed locally on your machine.

## Cloning the repo and installing dependencies
```bash
git clone https://github.com/majkeloess/ApolloApp
cd ApolloApp
npm i 
```
## Setting up environmentt variables
Change name of the `.env.example` file, into `.env` or `.env.local` .
```env
POSTGRES_URL=
DATABASE_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

AUTH_SECRET=

AUTH_GOOGLE_ID=-
AUTH_GOOGLE_SECRET=
```
You can get the first segment of environment variables from [Vercel](https://vercel.com). Log in -> Storage -> Create Database -> Postgres (Serverless SQL). On quickstart to your database you will have option to see your `.env.local`, just copy and paste.

Second segment stands for [Auth.js](https://authjs.dev) secret. To generate it, run the following command in your terminal:
```bash
openssl rand -base64 33
```
Then copy and paste the output into your file. 

The final part involves connecting to your [Google console](https://console.cloud.google.com/). You'll need to create a new application that utilizes the Google OAuth API. This process is more involved than the previous steps, so please refer to this [YouTube video](https://www.youtube.com/watch?v=ot9yuKg15iA) for guidance.
## Connecting to prisma
```bash
npx prisma migrate dev
```
## Running the project
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. 


# 🔥 Future improvements
⚡ Modals for following, followers

⚡ Infinite scroll (SSR) for Feed

⚡ Pagination (SSR) for ProfileCard

⚡ Edit profile page, including: adding nickname, changing profile photo

⚡ Edit training

⚡ Leaderboards

⚡ Cooking recipes

⚡ Adding photos to training, recipe

⚡ Form validation (checking provided value, eg. link is link etc.)

⚡ Credentials and new providers

⚡ React Native app:) 

# License 

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
