import { isEmpty } from "@firebase/util";
import { ultimateEffeciencyJutsu } from "../ui";

import L1 from "../../videos/l1.mp4";
import compSciLib from "../../media/images/compSciLib.jpeg";
import metaphysicalMuse from "../../media/images/metaphysicalMuse.jpeg";

export const LittleVillage = (
  globalUserModulesFromDB = []
) =>  {
  // console.log("data run it")
  if(!isEmpty(globalUserModulesFromDB)){
    
    let fill = {}

    globalUserModulesFromDB.forEach((module, index) => {
      fill = {
        ...fill,
        ...globalUserModulesFromDB[index],
      }
    })  

    return { 
      "26th Street Labz":  fill
     } 
      
    
  }else{

    // console.log("global mods is empty...", globalUserModulesFromDB); 
    // console.log("its empty here")
  
  return {
  "26th Street Labz": {
    "Lesson 1": {
      documentID: `Lesson 1 - Crash Course`,
      filler: ``,
      hasCode: true,
      new: true,
      highValue: false,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `1. Coding & Logic`, // may not need - `name`
      header: `Foundations: Coding & Logic`,

      fileSource: L1,
      prompts: {
        patreon: {
          premiumContent: false,
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
          humanTouch: false,
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
          dynamicContent: false,
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
          response: `\n\n1. What is an example of a Boolean expression?\n2. What is an algorithm used for?\n3. How can a programmer effectively debug a code?`,
          spanish: ``,
          tooltip: ``,
        },
        intro: {
          completed: false,
          sponsoredContent: false,
          impact: 250,
          action: `intro`,
          icon: `🛍️`,
          request: `let's learn!`,
          response: `CompSciLib`,
          advertisementPitch: "Computer Science theory education for students",
          spanish: ``,
          tooltip: ``,
          backgroundStyles: {
            boxShadow: "0 10px 20px rgba(0,0,0,1), 0 6px 6px rgba(0,0,0,1)",
            height: 150,
            width: 150,
            marginTop: 12,
            borderRadius: "50%",
          },
          advertisementLink: "https://www.compscilib.com/",
          advertisementImageSrc: compSciLib,
        },
        shop: {
          completed: false,
          sponsoredContent: false,
          impact: 250,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: `Drops of Nova`,
          advertisementPitch: "@rosiovargas - Metaphysics || Abstract",
          spanish: ``,
          tooltip: ``,
          backgroundStyles: {
            boxShadow: "0 10px 20px rgba(0,0,0,1), 0 6px 6px rgba(0,0,0,1)",
            height: 150,
            width: 150,
            borderRadius: "12px",
            marginTop: 12,
          },
          advertisementLink: "https://linktr.ee/rosiovargas",
          advertisementImageSrc: metaphysicalMuse,
        },
      },
    },
  },
}
}
};

// let data = {
//   "patreon": {
//     "request": "ms. roxana, can you please generate a short essay on the relationship between bitcoin, automation, universal basic income and the drug war in up to a maximum of 10 sentences?",
//     "response": ""
//   },
//   "inspire": {
//     "request": "ms. roxana, can you please share a brief inspiring story about the relationship between bitcoin, automation, universal basic income and the drug war?",
//     "response": ""
//   },
//   "summarize": {
//     "request": "ms. roxana, can you please quickly summarize the basics of the relationship between bitcoin, automation, universal basic income and the drug war in a 3 sentence paragraph?",
//     "response": ""
//   },
//   "ask": {
//     "request": "ms. roxana, can you please show me three frequently asked beginner questions about the relationship between bitcoin, automation, universal basic income and the drug war with one sentence answers?",
//     "response": ""
//   },
//   "guide": {
//     "request": "ms. roxana, can you please create a 5 point study study guide for the relationship between bitcoin, automation, universal basic income and the drug war?",
//     "response": ""
//   },
//   "demonstrate": {
//     "request": "ms. roxana, what's an example of the relationship between bitcoin, automation, universal basic income and the drug war?",
//     "response": ""
//   },
//   "define": {
//     "request": "ms. roxana, can you please define the relationship between bitcoin, automation, universal basic income and the drug war in exactly one sentence?",
//     "response": ""
//   },
//   "quiz": {
//     "request": "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about the relationship between bitcoin, automation, universal basic income and the drug war?",
//     "response": ""
//   }
// }

