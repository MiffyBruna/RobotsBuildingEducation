## Cut to the chase
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



   

 
