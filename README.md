# The Original AI Tutor & Mentor In Your Pocket

## Contact

- Please join this Discord community for more casual & information conversation about this app: [Discord](https://discord.gg/9kguaaDRmt)
- Consider contributing to the Patreon that helps this platform grow [Patreon](https://patreon.com/RobotsBuildingEducation)

# 1. Welcome To RO.B.E
As is tradition, we're going to start with a draft and move quickly. 
You're encouraged to read first and ask questions later. Zoom out and think outside of the box when reading this.
Here are some philosophies I follow:

1. Education is sensitive. If not disruptive, technology is interruptive. Better to wait for the right technology.
2. View software as a digital twin of the real-world.
3. How customers use an app informs its direction.
4. If you change the incentive, you change the behavior.
5. People empowered by machines rather than machines empowered by people.
6. Build to have people focus on more important things like their family, community or goals.
7. Overrepresent ideals unaligned with reality. 



---

# 2.  Current Project: Refactor

Right now the code is a mess, in part so that I have an excuse to build something quicker and in part so that I can make valuable starter material. Refactoring, to put it simply, means to make code neater and easier to work with. It's a great way to understand and define code. As a software engineer I suggest to do it when you know that it will provide operational value long-term.

So that's it for now, that's all the instruction. Please read the issues section and the pull request section to understand more. At this point in time, I'm assuming that you've watched the material I've created about Github in the app and you've learned a thing or two on Google, Youtube or ChatGPT.

## too long; didn't read
The current project that I'm directing is a revision of the code. The goal of the new revision is to make the code more "forkable" which is a process that allows engineers or entrepeneurs to copy the code to their own Github profile. So in a nutshell, we want to make this codebase feel like an easy to use template.

Please visit the issues, pull requests & contact me on Discord or Patreon


## The product

The application is pretty small so we want to be pretty intentional about our choices. It contains unplanned code that has upgraded several times but needs to be reduced.

<img width="599" alt="image" src="https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/assets/65219666/cf390511-b8da-40fd-acf0-3611b426459e">


Here's a brief overview of the product:

- The app
  - The app has collections of modules.
    - Modules contains an Content Task Manager


There are some other features currently implemented as collections or tasks. These are the RO.B.E, Boss Mode and Impact features.
I don't believe they should be collections.
It's likely more appropriate to be global features elsewhere, like a command bar at the bottom.

 So the next version of the app will look like:

- The app
  - The app can activate boss mode
  - The app can activates RO.B.E
  - The app can activate your Impact Wallet
  - The app has collections of content modules.
    - Modules contains a Content Task Manager


  ## The database

  The database right now is very simple. It's written very sloppily inside of the code.
  <img width="1279" alt="image" src="https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/assets/65219666/bf12f1b9-0aa6-43a1-abaa-74317781a5a9">


  ```
  Collection "global"
    Document "impact" -> { total: number } 
    Document "reserve" -> { amount: string }
  Collection users
    Documents[] UserDocumentIDs -> { impact: number }
  Collection modules
    Documents[] ModuleDocumentIDs -> { AI Content Task Manager UI } 
      
  ```
<img width="1284" alt="image" src="https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/assets/65219666/5c4ddb57-6506-4479-832e-7782e8f3f456">

 ## Future products

 There are plenty of things we can do in the future to grow this product and make it interesting with AI tutors or AI mentors. But for now, we need to make this code simple.
 It will be much easier to develop new products with the more intentional approach.


 ## Todo

 Help people get the app started, with their own database and OpenAI environment



