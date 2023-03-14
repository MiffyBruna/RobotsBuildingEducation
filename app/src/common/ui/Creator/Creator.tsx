import { ultimateEffeciencyJutsu } from "../ui";


import uiux from "../../videos/uiux.mp4";
import philosophy from "../../videos/philosophy.mp4";


export const Creator = {
  "Lessons Learned & Insights": {
    "Creating Purpose": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Creating Purpose, Meaning & Life`, // may not need - `name`
      header: `Creating Purpose`,
      fileSource: await import("../../markdowns/creatingPurpose.md?raw"), // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
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
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Creating Purpose`
          )}?`,
          response: `\n\nPurposeful problem solving and journey taking can involve a few steps:\n\n1) Identify a problem that needs to be solved and a journey that needs to be taken. This could be a social issue, a health issue, or any issue that you feel passionate about.\n\n2) Research the issue further to gain a clear understanding of the root cause of the problem.\n\n3) Create an action plan or outline that outlines the key steps needed to solve the problem or take the journey.\n\n4) Ask for feedback from those in the community affected and those who have knowledge of the problem.\n\n5) Implement the action plan and adjust it as needed throughout the process.\n\n6) Measure progress and evaluate the success of the effort.\n\n7) Celebrate successes and strive towards further progress and improvement.`,
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Creating Purpose`
          )} with one sentence answers?`,
          response: `\n\n1. How do I know what problem to solve? - Focus on an area of need that is important to you.\n\n2. How do I choose what journey to take? - Experiment with different approaches to see which best meets your needs and achieves your objectives.\n\n3. How can I make sure I'm creating purpose? - Develop a vision of the future you want to create and think of ways to move toward it.`,
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Creating Purpose`
          )}?`,
          response: `\n\n1. Brainstorm potential problems to solve. Ask questions like, “What are some current problems in the world today? What are some problems that affect the people around me?”\n\n2. Identify the root cause of each problem. Look at the big picture and determine what is causing each problem, so that you can develop an effective solution.\n\n3. Think holistically and come up with creative solutions. Try to incorporate multiple elements (ethical, legal, etc.) into one holistic solution.\n\n4. Research each problem to gain better understanding. Research a variety of sources (books, magazines, websites, etc.), so that you can gain perspective and background information.\n\n5. Define objectives and goals for each problem. Ask questions such as, “What do I want to accomplish with this project? How can I measure success?”\n\n6. Identify a team to work on the problem and its solution. Make sure the team has the skills, expertise, and access that is needed for the project.\n\n7. Develop a plan of action that covers the timeline, budget, progress, guidelines and resources.\n\n8. Implement the solution. Take the necessary steps and put the plan into action.\n\n9. Monitor progress. Establish entry and exit criteria to measure progress and determine efficacy of the solution.\n\n10. Evaluate the solution. Have the team look at the results and assess whether the solution was successful. Use the experience and results to make future improvements.`,
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🧿`,
          request: `ms. roxana, can you please show me an example of creating meaning out of life by creating journies with purpose?`,
          response: `\n\nOne example of creating meaning out of life by creating journeys with purpose is through setting goals and working towards achieving them. For example, if your purpose is to make a difference in the world, you can set a goal to volunteer in your community, or to create a non-profit organization to help a cause you're passionate about. Or if your purpose is to become an expert in a certain field, you can set goals to further your education by attending classes, reading books, and networking. By setting and achieving goals, you are actively creating meaningful journeys that enrich your life and the lives of others.`,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `👾`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Creating Purpose`
          )} in exactly one sentence?`,
          response: `\n\nCreating purpose is setting out meaningful goals and developing strategies to achieve them.`,
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Creating Purpose`
          )} without any answers?`,
          response: `\n\n1. What is the connection between Critical Race Theory and machine learning algorithms?\n2. How have Critical Race Theory and machine learning algorithms been used to further social justice causes?\n3. What are the potential risks and drawbacks of artificial intelligence systems built on machine learning algorithms and Critical Race Theory?`,
          spanish: ``,
          tooltip: ``,
        },
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
    Philosophy: {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Philosophy @ RO.B.E`, // may not need - `name`
      header: `Philosophy @ RO.B.E`,
      fileSource: philosophy, // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Philosophy`
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
            `Philosophy`
          )}?`,
          response: `\n\nOne inspiring story of Critical Race Theory and machine learning algorithms comes from an organization in the U.S. called “The Aequitas Project”. Aequitas is an automated system that performs risk assessments during criminal trial proceedings. Their goal is to help reduce the disparate impact of the criminal justice system on people of color, survivors of domestic abuse, and other vulnerable communities.\n\nAequitas utilizes machine learning algorithms to automatically detect and analyze data regarding the demographics of the parties involved in trial proceedings (e.g., race and gender). This data is then used in tandem with Critical Race Theory to flag any instances of bias. It is hoped that this system can ultimately be used to racial disparities in the criminal justice system and ensure a more equitable system for all its participants.`,
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize Professor Ruha Benjamin's work with the intersection of ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: `\n\nProfessor Ruha Benjamin's work with the intersection of Critical Race Theory and machine learning algorithms focuses on how algorithms embedded in artificial intelligence technologies can reproduce and amplify racial injustice due to existing inequities in society. She argues that biases built into machine learning algorithms reflect existing societal definitions of who is desirable, dangerous and more, reinforcing existing racial hierarchies and deepening societal divides. Benjamin seeks to challenge and address these algorithms and their implications, developing strategies to make them more fair and equitable.`,
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} with one sentence answers?`,
          response: `\n\n1. What is Critical Race Theory? Answer: Critical Race Theory is an interdisciplinary framework of analysis that looks at the impacts of racism and race-relations on societies and individuals. \n\n2. How can machine learning algorithms help to identify racism? Answer: Machine learning algorithms can help to identify racism by analyzing data sets of race-related, and other, factors to uncover systematic racial disparities. \n\n3. What role do data sets play in using machine learning algorithms? Answer: Data sets provide the input to machine learning algorithms and are critical to their ability to identify patterns and analyze complex problems.`,
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: `\n\n1. Understand the foundations of Critical Race Theory (CRT) and its uses in analyzing how racism and racial disparities influence law, education and politics.\n\n2. Gain an understanding of how machine learning algorithms utilize data and generate models to inform decision-making in various fields.\n\n3. Learn the principles of CRT-based machine learning, as well as its benefits and potential limitations.\n\n4. Become familiar with case studies where CRT-based machine learning had a positive impact on race-based decisions.\n\n5. Develop an understanding of the ethical considerations of design, implementation and use of CRT-influenced machine learning algorithms.\n\n6. Analyze whether particular historical or contemporary situations call for a CRT-based machine learning approach.\n\n7. Understand the preprocessing steps required to develop useful, valid and accurate machine learning models.\n\n8. Evaluate how to accurately label and represent data for CRT-based machine learning.\n\n9. Understand how to determine appropriate metrics for evaluating the effectiveness of CRT-based machine learning algorithms and models.\n\n10. Model legal issues arising from CRT applications of machine learning algorithms.`,
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🧿`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}`,
          response: `\n\nA simple example of Critical Race Theory and machine learning algorithms implemented is a sentiment analysis program that uses supervised learning algorithms such as Naive Bayes or decision trees to identify and classify text as either positive or negative, based on its semantic content. The system can also be trained to identify and put an emphasis on specific racial or cultural words, phrases or sentiments. This type of analysis can be useful for detecting bias in social media posts and other digital content.`,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `👾`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} in exactly one sentence?`,
          response: `\n\nCritical Race Theory is an academic framework that examines the intersections of race and power, while Machine Learning algorithms are a set of self-improvement rules used by systems to solve problems.`,
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} without any answers?`,
          response: `\n\n1. What is the connection between Critical Race Theory and machine learning algorithms?\n2. How have Critical Race Theory and machine learning algorithms been used to further social justice causes?\n3. What are the potential risks and drawbacks of artificial intelligence systems built on machine learning algorithms and Critical Race Theory?`,
          spanish: ``,
          tooltip: ``,
        },
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
    "UI/UX": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: true,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `User Experiences`, // may not need - `name`
      header: `Human Computer Interaction`,
      fileSource: uiux, // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `UI/UX`
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
            `UI/UX`
          )}?`,
          response: `\n\nOne inspiring story that comes to mind is that of the story of how NASA designed the graphical user interface (GUI) for its space shuttle mission control system. While PCs were relatively new at the time, the mission itself was decades in the making, and so a GUI was needed to help control the advanced system. NASA turned to computer scientist, Dr. Larry Tesler, and his team to design a user-friendly interface. After multiple iterations of new design concepts, they finally landed on a design that combined simple built-in tools and a system of transparency to display and manipulate data. Through this design, the team developed a completely novel user experience and provided an unprecedented level of control over the spacecraft’s functions. This would eventually aid in the successful development of the space shuttle and is considered to be one of the first major successes of user experience (UX) and human computer interaction (HCI) in modern user interface design.`,
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `UI/UX`
          )}?`,
          response: `\n\nHuman Computer Interaction (HCI) is the area of study that focuses on how humans and computers interact with each other. Through its research, HCI aims to make computer interfaces more efficient and user-friendly. User Centered Design (UCD) is an approach to software design that puts the user at the center of the process rather than the technology. This involves focusing on the needs and desires of the user to ensure the best design for them. UI/UX (User Interface/User Experience) is the practice of designing software and websites that are aesthetically pleasing, usable, interactive, and accessible to users. The UI/UX designer is responsible for creating a positive user experience.`,
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `UI/UX`
          )} with one sentence answers?`,
          response: `\n\n1. What is Human Computer Interaction (HCI)? - HCI is the study of how people interact with computers to complete tasks.\n\n2. What is User Centered Design (UCD)? - UCD is the practice of designing products and services around the needs of users.\n\n3. What is User Interface/User Experience (UI/UX)? - UI/UX is the study of how users interact with digital interfaces to best accomplish their goals.`,
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `UI/UX`
          )}?`,
          response: `\n\n1. Understand the basics of Human Computer Interaction (HCI), User Centered Design (UCD), and UI/UX\n2. Understand the differences between the three approaches\n3. Learn the principles of UCD and the user experience\n4. Develop user research and usability testing plans\n5. Learn strategies to identify user needs and goals\n6. Identify appropriate UI/UX design approaches to meet user needs\n7. Apply the principles of HCI, UCD, and UI/UX design throughout the design process\n8. Design effective visual, auditory, and tactile interfaces\n9. Develop an understanding of accessibility and internationalization/localization design considerations\n10. Analyze real-life examples of successful HCI, UCD, and UI/UX projects.`,
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🧿`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `UI/UX`
          )}?`,
          response: `\n\nSure! \n\nHuman Computer Interaction (HCI): HCI is a field of study that focuses on the interaction between humans and computers to create better user experiences. For example, if a user is presented with a list of items on an online store, the interface should be intuitive and easy to understand, allowing the user to quickly and easily find the items they need. \n\nUser Centered Design (UCD): UCD is a design process that focuses on the user and their needs. Designers must understand the user’s motivations and goals to develop solutions tailored to their requirements. This could come in the form of running A/B tests on a website to see which layout works best, or carrying out user feedback studies and surveys to validate a product before its launch.\n\nUI/UX Design: UI/UX design refers to the user interface and user experience of a product. A good UI/UX design should be aesthetically pleasing but also logical, intuitive, and easy to use. Examples include a shopping app that's optimized for touch screens and guides users through the product checkout workflow, or a website that makes navigation easy with a simple design and well thought out navigation structure.`,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `👾`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `UI/UX`
          )} in exactly one sentence?`,
          response: `\n\nHuman Computer Interaction: Interaction between people and technology systems to create meaningful experiences.\nUser Centered Design: A design process that considers user needs and goals throughout each stage of the design process. \nUI/UX: The practice of creating user experiences to optimize customer satisfaction, accessibility and pleasure.`,
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `UI/UX`
          )} without any answers?`,
          response: `\n\n1. What is the difference between user experience design and user interface design?\n\n2. What are the primary elements of effective user-centered design?\n\n3. What is the importance of user research when creating a new product or service?`,
          spanish: ``,
          tooltip: ``,
        },
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
    "Content Review": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Content Review (20M+ views)`, // may not need - `name`
      header: `Content Review (20M+ views)`,
      fileSource: await import(
        "../../markdowns/socialMediaGrowthAnnotations.md?raw"
      ), // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`,
          request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
            `Content Review`
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
            `Content Review`
          )}?`,
          response: `\n\nOne inspiring story about reviewing content to grow on social media is that of Canadian travel blogger Gwenlyn Cumyn. As a full-time entrepreneur, Gwenlyn found herself in need of more efficient ways to manage her online presence. To save time, she began curating tweets and creating shareable content for her followers. After months of trial and error, Gwenlyn was able to refine her content curation process, and as a result, she saw an increase in followers, engagement, and revenue. Gwenlyn's experience shows the power of taking time to carefully review your content and ensure that it adds value to your followers.`,
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Content Review`
          )}?`,
          response: `\n\n1. Find Relevant Content : Locate relevant content that your followers will actually find useful.\n2. Customize Content : Take the content you find and customize it for your own social media accounts.\n3. Share Consistently : Make sure to consistently post content to maintain your presence and build a following.\n4. Repurpose Content : Find ways to repurpose content you already have in different ways to maximize its value.\n5. Monitor, Track and Analyze : Monitor your content to see what works, what needs improving and where you should focus more efforts.`,
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Content Review`
          )} with one sentence answers?`,
          response: `\n\n1. What is the best way to review content on social media? Answer: Analyze engagement metrics and user feedback to determine what content resonates and tweak your strategy accordingly.\n\n2. How often should I review content on social media? Answer: Regularly review your performance to stay on top of trends and adjust your strategy as needed.\n\n3. How do I use data to review content on social media? Answer: Look for patterns in content performance and engagement analytics to inform and guide your decisions.`,
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Content Review`
          )}?`,
          response: `\n\n1. Identify your target audience and create content tailored to meet their needs.\n2. Utilize visuals such as images, videos and infographics to increase engagement.\n3. Stay up-to-date on the latest trends and use relevant hashtags to connect with a larger audience.\n4. Be mindful of the time of day when you are posting content to maximize reach.\n5. Mix up the type of content you post, from instructional and educational to fun and entertaining.\n6. Help build relationships and engage with followers by replying to comments and messages.\n7. Use analytics and insights to track progress and learn what strategies are working best.\n8. Utilize paid ads, campaigns and influencers to expand your reach.\n9. Analyze competitor content to understand what works and what you can do better.\n10. Establish an all-inclusive social media strategy and stick to it.`,
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🧿`,
          request: `ms. roxana, can you please show me a single successful viral example of ${ultimateEffeciencyJutsu(
            `Content Review`
          )}?`,
          response: `\n\nOne successful example of reviewing content to grow on social media is Dollar Shave Club. In 2012, they launched their YouTube video promoting their subscription service, which went viral and attracted 12,000 customers in just 48 hours. It now has over 25 million views and the company has become a major player in the grooming industry.`,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `👾`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Content Review`
          )} in exactly one sentence?`,
          response: `\n\nReviewing content to grow on social media is the process of analyzing and adapting content to optimize engagement and increase followers.`,
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Content Review`
          )} without any answers?`,
          response: `\n\n1. What is the value of an active, engaged social media community?\n2. How can you use targeted content to build relationships and create a lasting brand impression?\n3. How can you maximize the reach, visibility and engagement of your content?`,
          spanish: ``,
          tooltip: ``,
        },
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
    "Influence & Expression": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      rare: true,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Influence & Expression`, // may not need - `name`
      header: `Influence & Expression`,
      fileSource: await import("../../markdowns/influenceAndExpression.md?raw"), // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`,
          request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
            `Influence & Expression`
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
          request: `ms. roxana, can you please share an inspiring story about Kanye West, ${ultimateEffeciencyJutsu(
            `Influence & Expression`
          )}?`,
          response: `\n\nKanye West's story of success is an inspiring example of how expression, no matter how controversial, can help shape culture and influence social media.\n\nIn 2011, when West dropped his album, My Beautiful Dark Twisted Fantasy, which contained a dark, abrasive sound and daring lyrics, it became an instant success. The song \"All of the Lights,\" featuring Rihanna and Kid Cudi, quickly broke records, becoming West's most popular single of his career. Its impact was astonishing, charting in more than 10 countries, and climbing all the way to the number one position on the US Billboard, despite its competition from popular female singers like Katy Perry, who was at the peak of her career.\n\nThat same year, West appeared on VH1's Storytellers, a show which gives musicians the chance to explain the inspiration and implications behind their music. West spoke openly and oratorically about his vision, what he wanted to say, and how he hoped it would create a conversation with the public so they could think and discuss the issues he was addressing.\n\nWest's openness, frankness, and expression rung throughout the entire show and had an incredible impact on his fans. His words were so inspiring that social media exploded with conversations around his opinions and messages. West had given them an insight into his life and thoughts not found on any other medium or platform.\n\nThe audience walked away from the show feeling empowered, challenged, and inspired. They had been invited to go along on a journey with West as he explained his passion and vision for the future and this created a lifelong connection that continues to thrive today.\n\nKanye West is a perfect example of how expression can have a powerful impact on society and how it can be used to influence and reach people on a larger scale. Through his straight-forward and honest approach, he has managed to open up discussions and create conversations on a range of topics. West’s work continues to inspire millions today, and it is a sure testament to the power of expression.`,
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Influence & Expression`
          )}?`,
          response: `\n\nExpression through social media is the act of conveying your thoughts, feelings, and opinions to a wider audience of peers. It can take many forms, from creative expression seen through music and images to more structured posts or comments made on social media networks. Expression has the power to influence people’s opinions and shape the conversations you have with them. It’s important to have a clear and authentic message that doesn’t come off as being salesy or pushy. Having an active and engaged presence on social media can help people learn more about you, your interests and experiences, allowing you to share advice, experiences, and more. It can also help you connect and network with a broad variety of people who share similar interests and experiences.`,
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Influence & Expression`
          )} with one sentence answers?`,
          response: `\n\n1. What is the impact of expression on influence in social media? - Expression has the power to create and shape opinion on social media, enabling individuals to have an impact on the opinions of others.\n\n2. How do I effectively express myself on social media? - Establishing an authentic, consistent, and creative expression on social media platforms is key to creating effective influence. \n\n3. How can I use expression to better engage my followers? - Utilize effective ways of expression, like visuals, humor, callouts, stories, and more, to create an engaging experience for your followers.`,
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Influence & Expression`
          )}?`,
          response: `\n\n1. Identify the major types of expressions used in social media\n2. Analyze the different ways expressions impact influence \n3. Explore the implications of expression for social media users\n4. Explain the relationships between expression and influence in social media\n5. Discover how expression in social media can be used to generate social change\n6. Compare and contrast the effects of message framing and self-expression in social media\n7. Examine the role of emotion in the expressions used on social media\n8. Assessment how the language, tone, and framing of expressions convey information and persuade audiences\n9. Investigate different strategies of effectively incorporating expressions into social media content\n10. Develop an understanding of how and why expression on social media can change opinions and become viral`,
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🧿`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Influence & Expression`
          )}`,
          response: `\n\nExpression has the power to influence social media in many ways. For example, a popular artist might express their opinion on a current event, posting it on Instagram. This can have a ripple effect, with followers voicing their own opinions and sparking conversations or debates on the subject. Expression can also foster relationships and connections through sharing values, beliefs, and perspectives, creating even wider reach in a digital landscape.`,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `👾`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Influence & Expression`
          )} in exactly one sentence?`,
          response: `\n\nExpression in social media can have a significant impact on how others perceive and interact with a user, empowering them to influence their audience.`,
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Influence & Expression`
          )}?`,
          response: `\n\n1. What is one way having a unique and recognizable online presence helps in influencing social media?\n\n2. Name one way someone can engage others on social media by expressing their true views or ideas?\n\n3. What is an example of using expression to influence an audience on social media to take a specific action?`,
          spanish: ``,
          tooltip: ``,
        },
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
    "Abraham Lincoln": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      rare: true,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Abraham Lincoln`, // may not need - `name`
      header: `Abraham Lincoln`,
      fileSource: await import("../../markdowns/abrahamLincoln.md?raw"), // may not need

      prompts: {
        patreon: {
          robotTouch: true,
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`,
          request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
            `Abraham Lincoln`
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
            `Abraham Lincoln`
          )}?`,
          response: `\n\nOne story of Abraham Lincoln's faith in divine providence is told in his Second Inaugural Address. After four years of a brutal Civil War, Lincoln declared:\n\"Neither party expected for the war the magnitude or the duration which it has already attained. Each looked for an easier triumph, and a result less fundamental and astounding. Both read the same Bible, and pray to the same God; and each invokes His aid against the other. It may seem strange that any men should dare to ask a just God’s assistance in wringing their bread from the sweat of other men’s faces; but let us judge not, that we be not judged. The prayers of both could not be answered. That of neither has been answered fully. The Almighty has His own purposes.\"\n\nBy acknowledging that both sides of the war asked God for help, Lincoln's speech acknowledges the power of divine providence. He also understood that the war was a divine trial, with both sides facing great suffering. He also made sure to point out that men are not to judge one another, and that only God knows the reason behind His purpose and His plan.`,
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Abraham Lincoln`
          )}?`,
          response: `\n\nAbraham Lincoln (1809 - 1865) was the 16th president of the United States. He was known for leading the country through the Civil War and ending slavery in the US. He was also a strong believer in divine providence, which is the belief that God is in control of all things and will bring righteousness to all that is done in life. His faith in divine providence was so strong that he credited it with his success in leading the country during a perilous time. He believed that it was God's will that guided his decisions and ultimately put him in the right place at the right time to make necessary changes.`,
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Abraham Lincoln`
          )} with one sentence answers?`,
          response: `\n\n1. Did Abraham Lincoln believe in divine providence? Yes, he believed that God had a hand in guiding the course of history. \n\n2. What was Abraham Lincoln's view on how divine providence could be seen in history? Lincoln believed that every event in history was part of God's larger plan, and that this could be seen in retrospect as God guiding the course of history.\n\n3. How did Abraham Lincoln's belief in divine providence shape his political beliefs? Lincoln believed that human decisions were made by God's will, and thus his political beliefs were shaped by his religious beliefs.`,
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Abraham Lincoln`
          )}?`,
          response: `\n\n1. Abraham Lincoln firmly believed in the concept of divine providence.\n2. He often attributed his successes to God's will and grace.\n3. He protested against violence for fear of offending God and His purpose.\n4. Three famous quotes from Lincoln on divine providence are “I know that the Lord is always on the side of the right”, “The ways of providence are often inscrutable”, and “humbly acknowledged His divine goodness”.\n5. Lincoln believed in divine guidance allowing individual liberty while protecting the weak.\n6. He was a strong proponent of religious freedom and tolerance.\n7. Lincoln often viewed himself as a humble servant of God working to preserve the Union.\n8. He often called on God to forgive the transgressions of the people, not punish them.\n9. Lincoln viewed the Civil War as an act of divine judgment on the nation.\n10. He believed in a day of final reconciliation and peace – when God's will is fully acknowledged.`,
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          robotTouch: true,
          impact: 100,
          action: `demonstrate`,
          icon: `🧿`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Abraham Lincoln`
          )}`,
          response: `?\n\nSure. In an 1862 speech, Abraham Lincoln said: \n\n"We have been the recipients of the choicest bounties of Heaven; we have been preserved, these many years, in peace and prosperity; we have grown in numbers, wealth and power as no other nation has ever grown. But we have forgotten God. We have forgotten the gracious hand which preserved us in peace, and multiplied and enriched and strengthened us; and we have vainly imagined, in the deceitfulness of our hearts, that all these blessings were produced by some superior wisdom and virtue of our own.... Intoxicated with unbroken success, we have become too self-sufficient to feel the necessity of redeeming and preserving grace, too proud to pray to the God that made us." \n\nThis speech made it clear that Lincoln believed in the concept of divine providence, the notion that God works in human events to achieve his objectives. He was not just a believer, but he also acknowledged that blessings come from God and that the nation should rely on him for guidance and protection.`,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `👾`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Abraham Lincoln`
          )} in exactly one sentence?`,
          response: `\n\nAbraham Lincoln believed in divine providence as a guiding force in life, helping to guide history and individuals towards a greater good.`,
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Abraham Lincoln`
          )} without any answers?`,
          response: `\n\n1. What year did Abraham Lincoln deliver the Gettysburg Address and why was the speech historic?\n\n2. Name three specific references to “divine providence” in the Gettysburg Address, and explain how Lincoln uses each reference.\n\n3. In what ways did Abraham Lincoln’s views on divine providence shape his leadership as President of the United States?`,
          spanish: ``,
          tooltip: ``,
        },
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
