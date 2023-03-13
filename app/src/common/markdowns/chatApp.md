# Part 1 - Setting Up App

Hi. I recently restored my computer and will be building a small app. I figured it would be a good idea to document this process. Let me know if it's helpful or would like further elaborations/improvements. The point of this document is to be as plain as possible.

As always, as an engineer, depend on your ability to be curious and take initiative to understand information that is unknown to you.

This document will tell you how to public an app to the internet with a database a github account from scratch.
React App (tapdm3.web.app)

1. Download and install visual studio code: Download Visual Studio Code - Mac, Linux, Windows
   This app will let you write code.

2. Install Node.js: Download | Node.js (nodejs.org)
   I experienced a problem here.
   If you're stuck at this part, just Google what you're experiencing and dig around. This is where code sucks but you'll be surprised how most problems are actually kind of silly to solve. Especially annoying configs or setups

3. Install NPM: Downloading and installing Node.js and npm | npm Docs (npmjs.com)
   I experienced a problem here. I searched Node.js command prompt in the windows menu to run this command.
   This will allow you to store and retrieve code from other systems outside of your computer. You will need to not be afraid to use basic command lines. A command line is really just your computer the way you use it, but instead of clicking icons, you write out commands to make your computer do stuff.

4. Create a Github account: GitHub
   This lets you store your code away on an app and allows other people to work on it. Basically it's Google Drive but for code. It does more stuff as well, but we'll look into that later.

5. Create a github repository: Create a New Repository (github.com)
   A repository is where you store and get your app code from the Github app. Basically Google Drive again, just instead of a folder with a name on it, it's a repository or "repo". The name doesn't matter but it's probably a good idea to just keep naming in consistent. So think of an app name. Add a README when you create it. This is a intro file where you talk about stuff called "documentation". My app will be called tapDM.

---

6. Install a basic react app with create-react app: Getting Started | Create React App (create-react-app.dev).
   This will use NPM to build a super basic react app. Basically it just scaffolds an environment for you to create stuff. The next steps go into how to use NPM and the VS Code command line to do this.

6.1. Create a folder in your desktop with your app name.

6.2. Go to VS Code and open the folder you created in step 6.2. This is the same thing as opening a folder in Microsoft word or whatever.

6.3. Click the icons on the bottom left. These are symbols for errors and warnings. It will open up this box on the bottom right with labels like "Problem, Output, Debug, and Terminal". Select the terminal.
The terminal is just the command line that you used earlier, but is kinda just convenient to interface with the app you're building. There should be something that says "C:\Users\Mayra\Desktop\tapDM" that shows where you're located in the computer. This is really no different than your desktop and the icons you're used to - represented with text and commands instead of a mouse and icons.

6.4. Use NPM to create a react app. Getting Started | Create React App (create-react-app.dev). Note: I use "app" instead of "my-app"
I experienced a problem here. I followed this advice: Running npm command within Visual Studio Code - Stack Overflow

6.5. Follow the instructions. Basically it just asks you if it's okay to install stuff. Type y or yes or whatever and it will start installing stuff.

6.6. After installation is complete, type "cd app" or whatever your named the folder when you can create-react-app.
6.7. Run 'npm run start'. This will open up a window in the internet. Congrats, that's what your app looks like. Jesus christ this took long.

---

7. Create a firebase project: Sign into your google account and select "Get Started" Firebase (google.com)
   Follow the basic instructions. Create a project. Submit the name of the project. When you're done, you'll be sent to a dashboard with a bunch of options.

8. Go back to your codebase in VSCode. You should be able to access the folders of your react project on the left side. Go to App > src and create a folder called "database". Then create a file called "firebase.js" under it.

9. Go back to your Firebase dashboard. Select the settings cog icon next to "Project Overview" on the left side and select "Project Settings". It'll take you to a page with a bunch of tabs and options. Go to the "General" tab and scroll down to the "your apps" section. It should say you don't have anything set up. Select the "</>" icon which is for general web applications.

10. Setup your app. Include "Firebase Hosting" as well. This lets your have a website.

10.1 Continue to follow the instructions. use npm in your codebase to install firebase with
"npm install firebase"

To exit the react app, press Ctrl+C. Protip: open Node.js Command Prompt to have two terminals so that one can run your app while other stuff can install without having to close and startup again. I don't do this but I'm also a degenerate.

10.2. Copy the code they provide you with the "firebase.js" file we created earlier. This is used to have your app communicate with the firebase cloud.

10.3. Follow the next step and install what they tell you with the command line. "npm install -g firebase-tools". This lets you run those communication commands mentioned in 10.2.

10.4. Follow the next step. Try to log into firebase using the command. If you're using windows, it will probably complain about some obscure policy related shit.

Go to "C:\Users\Mayra\AppData\Roaming\npm" in some folder. Use the icons or whatever. Delete the "firebase" file with the "PowerShell Source" filetype.
"Firebase cannot be loading because running scripts is disabled on this system", VSCode on Windows - Stack Overflow

10.5.

10.5. Run "firebase login" in the command prompt again. Say yes. You'll now have your computer connected to firebase.

10.6. Run "firebase init". It will give you a series of questions.

A) Are you ready to proceed? Y

B) Which features do you want to set up? Select Firestore, Hosting, Hosting with Github Deploys, Storage. Then press Enter.

C) Select a project. Choose the existing project. It'll give you a warning probably. So go to the firebase dashboard again and selec the products to activate them. Create Firestore, select test mode and US-central. Go to authentication. Do press the button too.

D) repeat the "firebase init" process. I fucked up. It's been a while. It'll work this time.
What files should be used for Firestore Rules? Just press enter.

E) What files should be used for Firestore indexes? Just press enter.

F) What do you want to use as your public directory? Just press enter.

G) Configure as a single page app? Select yes.

H) Setup automatic builds with Github? Select yes.

I) File public/index.html already exists. Overwrite? Select no. You'll be sent to Github to link firebase and your repository. Authorize it.

J) For which Github repository would you like to setup Github workflow (format: user/repository). For me i'm entering "Sheilf/tapDM"

K) Setup the workflow to run a build script before every deploy? Yes.

L) What script should be run before every deploy? (npm ci && npm run build) Press enter.

M) Set up automatic deployment to your site's live channel when a PR is merged? Select yes.

N) What is the name of the GitHub branch associated with your site's live channel?(main) Press enter.

O) What file should be used for Storage Rules? Press enter.

10.7. I fucked up again. Go to your app code base on VS Code. Go to app > firebase.json
Change "hosting.public" from "public" to "build"
My website is not showing after deploy in firebase how to solve this - Stack Overflow

10.7. Run "npm run build". This does some shit that computers need to do to update your code for the internet. Run "firebase deploy" in the command line. Your app should now be live. This may take a few minutes because Google to basically tell the world that this app exists.
React App (tapdm3.web.app)

Notes: There are more procedures for building apps, like storing your code to github. Using github wisely. Adding authentication and users. Adding code. This will be covered later. Your project is now live and the goal of this post is complete.

# Part 2 - Creating Real Users

Update. This code has seen new updates. So if you want to learn how to use github, it's a good time to examine commit history and learn what commits are. In a nutshell, it's just the record of updates and history that a code file has seen. Very similar to Google Drive.

Old version:

https://github.com/Sheilf/tapDM/blob/e26b8253d01bbf7d6e7cbc48e41aa1b79fbefc9c/src/components/UserProfile.js

New version:

https://github.com/Sheilf/tapDM/blob/main/src/components/UserProfile/UserProfile.js

New version contains information for Part 3: Creating a feature

---

This guide will give you the process of creating, authenticating, and storing users to a database so that you can actually have a real application.

This guide will be a little more challenging because it will require you to write code, install things, and wire them up together. You will likely come across weird problems, but this is normal and it's a good practice to use Google to figure out how to fix them.

Here are some key notes if you run across problems:

1. If you come across issues installing products that are incompatible with versions, use what the error log tells you. adding --legacy-peer-deps to your commands will help you.

2. remove the .github/workflows folder. It's a thing called continuous integration that we installed when we created the firebase app. TBH it's not really needed since it's a personal project and requires you to understand system configs. You can keep it if you want an extra challenge but for now, building an app is more important than writing code for a team.

3. Create a "users" collection in firestore with a test document. It doesn't matter what you call the document, but it's useful to have a test document to test out different ideas manually. For now, I set the document to have a boolean value called firstVisit and I set it to true.

React App (tapdm3.web.app)

Key files to understand

1. index.js tapDM/index.js at main · Sheilf/tapDM (github.com)

This is the root of the app, where the app begins to render content. You will need to install react-router dom and understand basic app routing so that a user can navigate to different pages or products.

2. App.js tapDM/App.js at main · Sheilf/tapDM (github.com)

This is essentially the landing page of the application, where users can begin to interface with the app.

3. firebase.js tapDM/firebase.js at main · Sheilf/tapDM (github.com)

This is where you setup the login component. You need to install react-firebaseui and firebaseui in order to do this. This also demonstrates how powerful React can be when it comes to using features out of the box with minimal configuration.

4. UserProfile.js tapDM/UserProfile.js at main · Sheilf/tapDM (github.com)

This is the page a user sees after logging in/creating an account with Google. Given that user data is now available, we're able to create a profile and features associated with the user as a result. So that's what we do here.

# Part 3 - Creating Real Features

So this feature will focus on connecting the frontend and backend to create chatroom. The chatroom won't have any features, but you the focus will be to create the following:

https://tapdm3.web.app/

A) the ability to create a chatroom

B) a way to view the chats created by a user
C) a possible way to have chats publicly available for search or matching.
Truthfully, I haven't thought about the code much. So there are some things I could do better. Right now I don't care about correctness as much as I do just putting up ideas together and writing information about it. This also serves as a way to show what software development is like. You:

- have ideas
- talk about it
- plan and create it
- comment about it in code
- clean it up reasonably
- review it/talk it, repeat until completion.
  Side note: I know this documentation can be improved. The Patreon text editor is not good and I'll likely rewrite these notes in a more informative manner via github's markdown text. If you don't know what markdown is, they're .md files. They're just like more powerful text files.
  I can use Github's pull request features so we can see changes in the code and generally be more friendly with the tool since it's important to understand for professional work.

---

UserProfile sees changes by rendering list of chats created and ability to go to where you can create a chat
https://github.com/Sheilf/tapDM/blob/main/src/components/UserProfile/UserProfile.js

CreateChat is implemented to allow a user to create a chat with a name and some selected topics. Topics are categorized in their own database to make chats searchable by topic. Chats are categorized into their own database and Users also add a set of chats to their dataset.
https://github.com/Sheilf/tapDM/blob/main/src/components/CreateChat/CreateChat.js

View the chat created by a user
https://github.com/Sheilf/tapDM/blob/main/src/components/Chat/Chat.js

# Part 4 - Real-time direct messages

This lesson will be short, but we will take a look into how a software engineer creates a product and the work that comes up with it. At this point, we can create an account, a chatroom, and send/receives DMs to that chat.
https://github.com/Sheilf/tapDM/blob/main/src/components/Chat/Chat.js  
https://tapdm2.web.app/

This was accomplished by a few things:

1. The power of react to create components
2. The power of firebase to create accounts and store data
3. The ability to organize data

So far, as engineers, it becomes a question of choosing the right tools for the job and having a good understanding of how to organize data. Ultimately, software engineering is just the design of messages or information. So how do we create users and link chats or messages in a way that makes it a social experience? Here are some questions and requirements I'm looking at now that there are some basic functionalities:

A) How do you limit subscribers to only view messages in a public chat, but not write them?

B) How do you allow users to subscribe? How do I make it social?

C) How do you order the messages by date created?

D) How do you edit messages?

E) How do I store additional chat features like voicemails or photos?

D) How do I create invite to chat features with writer privileges?

# Part 5 - Subscribing to chats

There is another feature that I would like to add that is similar to Snapchat Maps. In a nutshell, imagine you're chatting with crypto folk and you're at an airport - the intention seeks that you can strike up conversation offline. Basically, using this feature would say, "im open to talking IRL if you catch me around".

Why this feature? I really hate seeing a train full of people or college campuses with necks bent down over their phones in their own echo-chamber experiences. I feel like casual conversations are dying and it's unironically harmful to society for many reasons.

This part is short, as it will typically be from now on. So I'm going to talk about software at the product level. We have the main components that we need and we can start looking at something called "refactoring" to move components or variables to reasonable places.

What's nice about React is that it handles this object oriented concepted called "encapsulation" very well, meaning that a lot of code is contained in easily-moved. places like functions orJSX blocks, and it's just a matter of moving some property or state values usually.

---

Subscribe event
https://github.com/Sheilf/tapDM/blob/main/src/components/Chat/Chat.js#L81-L92

View public and subscribed chatrooms in your profile
https://github.com/Sheilf/tapDM/blob/main/src/components/UserProfile/UserProfile.js#L81-L99
