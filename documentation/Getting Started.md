# Getting Started with Firebase and OpenAI

To start, you'll need to set up  a Firebase project and a OpenAI project.  Don't worry 🧘, I've got a crash course to help you break it down!  All you need to do is the learning. But before we begin, I highly recommend watching Fireship's 100-second preview video on Firebase. It's a fantastic overview that makes it easy to understand the basics.

<p align="center">
  <a href="https://www.youtube.com/watch?v=vAoB4VbhRzM&ab_channel=Fireship">
    <img src="https://i.imgur.com/biAB4Mt.png" alt="Watch the video">
  </a>
</p>

## IMPORTANT FILES

I will show you important files here.

This project uses the following firebase projects:

1. Hosting
2. Firestore
3. Authentication
4. Analytics
5. Functions

In the future, it may use Storage and Cloud Messaging.

Let's take a look at how Firebase is implemented in the project:
- **Setting up database:** [firebaseResources.tsx](https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/blob/main/app/src/database/firebaseResources.tsx)

- **Implementing Cloud Functions with OpenAI:** [index.js](https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/blob/main/app/functions/index.js)



## ENVIRONMENT VARIABLES
Here are the environment variables used in this project. It's important to keep these variables safe since they contain sensitive data, such as access to your database. 

You'll notice these variables being used in the code when you search the keyword `import.meta.env.`.


✏️ **NOTE:** In the project's [.gitignore](https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/blob/main/app/.gitignore#L25-L26)
 file, you'll notice that the .env file is ignored. This ensures that **sensitive data is not exposed** when pushing to GitHub.

To ensure all environment variables are secure,  we have the following files:

Create app/.env
```
VITE_FREE_PROMO_PASSCODE=NOT_IN_USE
VITE_PATREON_PASSCODE=NIKE
VITE_INFINITE_KNOWLEDGE_PASSCODE=DRAKE
VITE_COURSE_ADMIN_PASSCODE=NARUTO
VITE_FIREBASE_API_KEY=key_given_by_firebase
VITE_SHEILF=NAPO
VITE_FOREVER_FREE=NOT_IN_USE
```

Create app/functions/.env
```
OPENAI_API_KEY=key_given_by_openAI
```

