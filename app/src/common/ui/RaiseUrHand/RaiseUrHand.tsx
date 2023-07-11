import { ultimateEffeciencyJutsu } from "../ui";

// this needs to be a new schema maybe idk shits kinds crazy
export const RaiseUrHand = {
  RaiseUrHand: {
    RaiseUrHand: {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: false,
      completed: false,
      rare: false,
      needsImprovement: false,
      isBossMode: true,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `RaiseUrHand`, // may not need - `name`
      header: `RaiseUrHand`,
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1680951339/IMG_7398_ordghe.mov", // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 250,
          action: `generate`,
          icon: `✍️`, //`✍️`
          request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
            `Creating Purpose`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Creating Purpose`
          )}?`,
          response: `\n\nSure! Here's a story about a young girl named Surya Vadlamani from India. She was only 11-years-old when she founded a company called SV Robotics. Her company creates innovative robots and have won awards for their designs. What makes her story so inspiring is that she chose to focus on improving technologies in her home country, understanding the need for better robotics in India. She created a space for herself in a male-dominated field at a young age, inspiring the lives of many young girls in the process. Surya is an inspiring example of someone with a clear purpose who chose a problem she wanted to solve, and took a journey to use her skills, creativity and ambition to make real changes.`,
          spanish: ``,
          tooltip: ``,
        },
        // summarize: {
        //   completed: false,
        //   impact: 100,
        //   action: `summarize`,
        //   icon: `📚`,
        //   request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
        //     `Creating Purpose`
        //   )}?`,
        //   response: `\n\nPurposeful problem solving and journey taking can involve a few steps:\n\n1) Identify a problem that needs to be solved and a journey that needs to be taken. This could be a social issue, a health issue, or any issue that you feel passionate about.\n\n2) Research the issue further to gain a clear understanding of the root cause of the problem.\n\n3) Create an action plan or outline that outlines the key steps needed to solve the problem or take the journey.\n\n4) Ask for feedback from those in the community affected and those who have knowledge of the problem.\n\n5) Implement the action plan and adjust it as needed throughout the process.\n\n6) Measure progress and evaluate the success of the effort.\n\n7) Celebrate successes and strive towards further progress and improvement.`,
        //   spanish: ``,
        //   tooltip: ``,
        // },
        // ask: {
        //   completed: false,
        //   impact: 100,
        //   action: `ask`,
        //   icon: `🔮`,
        //   request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
        //     `Creating Purpose`
        //   )} with one sentence answers?`,
        //   response: `\n\n1. How do I know what problem to solve? - Focus on an area of need that is important to you.\n\n2. How do I choose what journey to take? - Experiment with different approaches to see which best meets your needs and achieves your objectives.\n\n3. How can I make sure I'm creating purpose? - Develop a vision of the future you want to create and think of ways to move toward it.`,
        //   spanish: ``,
        //   tooltip: ``,
        // },
        // guide: {
        //   completed: false,
        //   impact: 100,
        //   action: `guide`,
        //   icon: `🤝`,
        //   request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
        //     `Creating Purpose`
        //   )}?`,
        //   response: `\n\n1. Brainstorm potential problems to solve. Ask questions like, “What are some current problems in the world today? What are some problems that affect the people around me?”\n\n2. Identify the root cause of each problem. Look at the big picture and determine what is causing each problem, so that you can develop an effective solution.\n\n3. Think holistically and come up with creative solutions. Try to incorporate multiple elements (ethical, legal, etc.) into one holistic solution.\n\n4. Research each problem to gain better understanding. Research a variety of sources (books, magazines, websites, etc.), so that you can gain perspective and background information.\n\n5. Define objectives and goals for each problem. Ask questions such as, “What do I want to accomplish with this project? How can I measure success?”\n\n6. Identify a team to work on the problem and its solution. Make sure the team has the skills, expertise, and access that is needed for the project.\n\n7. Develop a plan of action that covers the timeline, budget, progress, guidelines and resources.\n\n8. Implement the solution. Take the necessary steps and put the plan into action.\n\n9. Monitor progress. Establish entry and exit criteria to measure progress and determine efficacy of the solution.\n\n10. Evaluate the solution. Have the team look at the results and assess whether the solution was successful. Use the experience and results to make future improvements.`,
        //   spanish: ``,
        //   tooltip: ``,
        // },
        // demonstrate: {
        //   completed: false,
        //   impact: 100,
        //   action: `demonstrate`,
        //   icon: `🎨`,
        //   request: `ms. roxana, can you please show me an example of creating meaning out of life by creating journies with purpose?`,
        //   response: `\n\nOne example of creating meaning out of life by creating journeys with purpose is through setting goals and working towards achieving them. For example, if your purpose is to make a difference in the world, you can set a goal to volunteer in your community, or to create a non-profit organization to help a cause you're passionate about. Or if your purpose is to become an expert in a certain field, you can set goals to further your education by attending classes, reading books, and networking. By setting and achieving goals, you are actively creating meaningful journeys that enrich your life and the lives of others.`,
        //   spanish: ``,
        //   tooltip: ``,
        // },
        // define: {
        //   completed: false,
        //   impact: 100,
        //   action: `define`, // may not need
        //   icon: `🧿`, // may not need
        //   request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
        //     `Creating Purpose`
        //   )} in exactly one sentence?`,
        //   response: `\n\nCreating purpose is setting out meaningful goals and developing strategies to achieve them.`,
        //   spanish: ``,
        //   tooltip: ``,
        // },

        // quiz: {
        //   completed: false,
        //   impact: 100,
        //   action: `quiz`,
        //   icon: `🧪`,
        //   request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
        //     `Creating Purpose`
        //   )} without any answers?`,
        //   response: `\n\n1. What is the connection between Critical Race Theory and machine learning algorithms?\n2. How have Critical Race Theory and machine learning algorithms been used to further social justice causes?\n3. What are the potential risks and drawbacks of artificial intelligence systems built on machine learning algorithms and Critical Race Theory?`,
        //   spanish: ``,
        //   tooltip: ``,
        // },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
  },
};
