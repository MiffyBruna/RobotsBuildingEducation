You're going to need to learn how to set up a firebase project and openAI project in order to do this.
My crash course can help you break it down, but you will still need to learn how to do it. If you haven't watched it, watch Fireship's 100 second preview:
https://www.youtube.com/watch?v=vAoB4VbhRzM&ab_channel=Fireship

I will show you important files here.

This project uses the following firebase projects:

1. Hosting
2. Firestore
3. Authentication
4. Analytics
5. Functions

In the future, it may use Storage and Cloud Messaging.

Observe how Firebase is implemented:

- Setting up database: https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/blob/main/app/src/database/firebaseResources.tsx

- Implementing Cloud Functions with OpenAI: [https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/tree/main/app/functions](https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/blob/main/app/functions/index.js)




Here are the environment variables I use. Typically speaking, environment variables are kept in a safe place 
since it stores dangerous data to expose like access to your database.

If you search the keyword `import.meta.env.`, you'll find these variables being used in the code.

If you notice here, this file says "ignore this vfile when you push it up to github" https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/blob/main/app/.gitignore#L25-L26

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
