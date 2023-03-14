import { ultimateEffeciencyJutsu } from "../ui";

export const LittleVillage = {
  "26th Street": {
    "Little Village": {
      documentID: ``,
      filler: ``,
      new: true,
      highValue: false,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Little Village`, // may not need - `name`
      header: `Little Village`,
      fileSource: ``, // may not need

      prompts: {
        patreon: {
          premiumContent: true,
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Lesson 1`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
        },
        inspire: {
          humanTouch: true,
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Lesson 1`
          )}?`,
          response: `\n\nOne inspiring story about coding and logic is the story of Ada Lovelace. Ada Lovelace was a mathematician and writer in the 1800s who is widely considered to be the first computer programmer. She wrote the first algorithm for a machine that could calculate Bernoulli numbers, and her work laid the foundation for modern computing. Her story is inspiring because it shows that women have been making important contributions to the field of computer science for centuries.`,
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Lesson 1`
          )}?`,
          response: `\n\nCoding is the process of writing instructions in a programming language to create a program that can be executed by a computer. Computer logic is the set of rules and principles that govern the operation of a computer system. It is the basis for the design of algorithms and the development of software.`,
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Lesson 1`
          )} with one sentence answers?`,
          response: `\n\n1. What is coding? - Coding is the process of creating instructions for a computer to execute.\n2. What is logic? - Logic is the process of reasoning and making decisions based on facts and evidence.\n3. What is a programming language? - A programming language is a set of instructions that can be used to create a program.`,
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Lesson 1`
          )}?`,
          response: `\n\n1. Understand the fundamentals of coding and computer logic\n2. Learn the basics of programming languages such as HTML, CSS, JavaScript, and Python\n3. Familiarize yourself with the different types of data structures and algorithms\n4. Understand the principles of object-oriented programming\n5. Learn how to debug and troubleshoot code\n6. Develop an understanding of the principles of software engineering\n7. Learn how to use version control systems such as Git\n8. Understand the basics of databases and SQL\n9. Develop an understanding of web development frameworks such as React and Angular\n10. Learn how to use development tools such as IDEs and text editors`,
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🧿`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Lesson 1`
          )} with no other text in javascript?`,
          response:
            "// Example of basic coding logic in JavaScript\nlet x = 5;\nlet y = 10;\n\nif (x < y) {\n  console.log(`x is less than y`);\n} else {\n  console.log(`x is greater than or equal to y`);\n}",
          spanish: ``,
          tooltip: ``,
          dynamicContent: true,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `👾`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Lesson 1`
          )} in exactly one sentence?`,
          response: `\n\nCoding is the process of creating instructions for a computer to execute, while computer logic is the process of using algorithms to solve problems.`,
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Lesson 1`
          )}?`,
          response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          sponsoredContent: true,
          impact: 250,
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
