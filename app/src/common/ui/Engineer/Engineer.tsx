import { ultimateEffeciencyJutsu } from "../ui";

import compSciLib from "../../media/images/compSciLib.jpeg";
import metaphysicalMuse from "../../media/images/metaphysicalMuse.jpeg";
import { japaneseThemePalette, textBlock } from "../../../styles/lazyStyles";
import { MessageBlock } from "../MessageBlock/MessageBlock";
import { CodeBlock } from "../Displays/CodeBlock/CodeBlock";
import { CuteGradient } from "../Displays/CuteGradient/CuteGradient";

export const Engineer = {
  "Coding Crash Course Version 3": {
    "Learning Mindset & Perspective": {
      documentID: ``,
      backgroundImgSrc:
        "https://res.cloudinary.com/dtkeyccga/image/upload/v1691640391/ROBE_assets/Module_Buttons_1_ixnitr_scjfyk.gif",
      hasCode: true,
      hasCustomIntro: true,
      filler: ``,
      new: true,
      highValue: false,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Learning Mindset & Perspective`, // may not need - `name`
      header: `Learning Mindset & Perspective`,
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1693469705/ROBE_INTRO_COMPRESSED_t3r8vt_qxmuvn.mov", // may not need
      prompts: {
        // should we add impact to selecting a course? adding it to "welcome" would achieve this.
        welcome: {
          response: (
            // <MessageBlock>
            <div>
              Dear Innovators &amp; Bright Minds 🌟,
              <br />
              <br />
              🌱 Welcome to your journey through the dynamic world of computer
              science! I'm Ms. Roxana, your guide on this path of discovery.
              Computer science is not just coding, it's a universe where
              creativity, problem-solving, and a multitude of disciplines
              collide.
              <br />
              <br />
              By exploring this field, you're gaining a new perspective, a tool
              that can help you make a difference, no matter where your passions
              lie. As we traverse this adventure together, remember that every
              mistake is an opportunity to grow. Here's to unearthing potential,
              to embracing curiosity, and stepping into a world where anything
              is possible 🚀.
              <br />
              <br />
              Yours in exploration ❤️,
              <br />
              Ms. Roxana
            </div>
            // </MessageBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Learn Coding`
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
            `Learn Coding`
          )}?`,
          response: (
            <div>
              Meet Kismet, a robot developed by Cynthia Breazeal at the MIT
              Media Lab back in the late 1990s 🤖. Kismet wasn't just any robot;
              it was designed to engage in social interaction with humans. The
              fascinating thing about Kismet is it could recognize and respond
              to human emotions through facial and voice cues, mimicking the
              interactions of a human baby 👶. This was an extraordinary
              milestone in human-computer interaction and affective computing!
              <br />
              <br />
              Fast forward to today, and machine learning algorithms play an
              enormous role in enhancing our interaction with technology, even
              beyond what Kismet was capable of 🚀. From voice assistants like
              Siri and Alexa that understand our spoken commands, to
              recommendation systems like those on Netflix and YouTube that
              learn our preferences over time, machine learning is bridging the
              gap between humans and computers 💻❤️.
              <br />
              <br />
              The most inspiring part is that these technologies are not built
              by magic, but by people like you, who are willing to learn and
              innovate 🎓✨. The field is wide open, inviting you to make your
              own contributions. No matter how daunting the challenges might
              seem, remember: every expert was once a beginner. Just like
              Cynthia Breazeal, who combined her understanding of machine
              learning and human-computer interaction to create Kismet, you too
              can make a significant impact in the world of technology 👏🌎. So,
              keep learning, keep creating, and who knows? The next big
              breakthrough might just be yours to discover! 🌟
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Learn Coding`
          )}?`,
          response: (
            <div>
              <h2>
                Let's delve into the dynamic relationship between computer
                science, its interdisciplinary applications, and human-computer
                interaction (HCI).
              </h2>
              <br />
              <br />
              Computer science is not a siloed field; rather, it's a
              multi-faceted discipline with the potential to branch out and
              integrate with various other domains. Its power lies in its
              flexibility and adaptability, its ability to mold itself to
              enhance and innovate within any field it intersects with. 🌐
              <br />
              <br />
              For instance, in healthcare, computer science lends its power to
              decode complex biological data, making strides in personalized
              medicine and early diagnosis of diseases. In environmental
              studies, it contributes to data modeling and simulation, essential
              for understanding and mitigating the impacts of climate change. 🍃
              <br />
              <br />
              Similarly, the educational field is being redefined by the
              infusion of computer science, which aids in creating dynamic,
              interactive, and personalized learning experiences. 📚 The world
              of arts is also touched, where digital tools, backed by computer
              science, have introduced new forms of creative expression. 🎨
              <br />
              <br />
              This synergy of computer science with various disciplines is
              enriched further by HCI. As the bridge between humans and the
              complex world of technology, HCI focuses on making technology more
              user-friendly, making the interaction between users and computers
              more intuitive, efficient, and enjoyable. 🤝
              <br />
              <br />
              From smart home devices that understand your spoken commands, to
              adaptive learning platforms that mold themselves to individual
              learning styles, HCI has made technology an integral part of our
              lives, a reliable companion that understands and caters to our
              needs. 🏠🎧
              <br />
              <br />
              Ultimately, the story of computer science isn't just about coding
              and algorithms. It's about how these tools can be harnessed to
              create positive impacts in diverse fields, to improve lives, and
              to make the world a better place. It's a thrilling journey of
              continuous learning, creativity, and innovation, with countless
              opportunities for you to make a difference. 🚀🌟
              <br />
              <br />
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three freq   uently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Learn Coding`
          )} with one sentence answers?`,
          response: (
            <div>
              <div>
                <h3>
                  Embarking on a journey to learn computer science can bring up
                  some intriguing and challenging questions. Here are three
                  common ones, spruced up with a friendly touch. 🌟
                </h3>
              </div>
              <br />
              <br />
              <b>
                Question 1: How can I think more like a computer scientist? 👩‍💻
              </b>
              <br />
              <br />
              This question arises as learners navigate the transition from
              learning the syntax of a programming language to effectively
              solving problems using it. It involves the development of
              computational thinking skills – the ability to break down complex
              problems into smaller, manageable parts, and thinking logically.
              <br />
              <br />
              <br />
              <br />
              <b>
                Question 2: How important is math in computer science, and how
                can I get better at it? 🧮
              </b>
              <br />
              <br />
              While not every aspect of computer science requires advanced
              mathematics, certain areas like algorithms and machine learning do
              use mathematical concepts. Many learners question how deeply they
              need to understand math and how to improve their skills in it.
              <br />
              <br />
              <br />
              <br />
              <b>
                Question 3: How do I stay updated and continue learning in such
                a rapidly evolving field? 🚀{" "}
              </b>
              <br />
              <br />
              Computer science is a dynamic field, with new languages,
              technologies, and concepts emerging regularly. Learners often
              wonder how they can keep up with the pace of change, stay
              relevant, and continue learning throughout their careers.
              <br />
              <br />
              <br />
              Remember, every question is a stepping stone to deeper
              understanding and growth. Embrace them as exciting challenges on
              your path of discovery in computer science! 🌈📘
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Learn Coding`
          )}?`,
          response: (
            <div>
              <h3>
                Let's break down this process into five stages, taking you from
                the basics to professional expertise in intersectional research,
                human-computer interaction (HCI), and computer science.
              </h3>
              <br />
              <br />
              <br />
              <br />
              🌱Beginner: Introduction to the foundations.
              <br />
              <br />
              <ol>
                <li>
                  Start with the basics of computer science. Familiarize
                  yourself with a programming language like Python.
                </li>
                <li>
                  Read introductory books on HCI, such as "Designing the User
                  Interface" by Ben Shneiderman and Catherine Plaisant.{" "}
                </li>
                <li>
                  Learn about intersectionality theory from foundational texts
                  like Kimberlé Crenshaw's papers.
                </li>
              </ol>
              <br />
              <br />
              🌿Intermediate: Building on the basics.
              <br />
              <br />
              <ol>
                <li>
                  Develop your skills in another programming language, such as
                  Java or JavaScript.
                </li>
                <li>
                  Start with some basic UX/UI design courses to understand
                  principles of HCI.
                </li>
                <li>
                  Explore the intersectionality in depth, focusing on the
                  overlapping social categories that contribute to systemic
                  injustice and social inequality.
                </li>
              </ol>{" "}
              <br />
              <br />
              🌴Advanced: Deepening your knowledge and specialization.
              <br />
              <br />
              <ol>
                <li>
                  Familiarize yourself with advanced HCI concepts like
                  user-centered design and heuristic evaluation.
                </li>
                <li>
                  Delve into intersectional research literature. Look at case
                  studies that apply intersectionality to technology.
                </li>
                <li>
                  Learn about data structures and algorithms to enhance your
                  computer science foundation.
                </li>
              </ol>{" "}
              <br />
              <br />
              🌳Professional: Practice and real-world experience. <br />
              <br />
              <ol>
                <li>
                  Begin to work on projects that incorporate all three areas.
                  Perhaps a software project that requires user-centered design
                  and considers intersectionality.
                </li>
                <li>Contribute to open source projects related to HCI.</li>
                <li>
                  Attend webinars and seminars related to intersectional tech
                  research.
                </li>
              </ol>{" "}
              <br />
              <br />
              🎓Continued Learning: Staying up-to-date and never stop learning.{" "}
              <br />
              <br />
              <ol>
                <li>
                  Participate in ongoing discussions and debates about
                  intersectionality in tech. This could be in online forums or
                  academic conferences.
                </li>
                <li>
                  Regularly read recent HCI research papers to keep up with the
                  latest developments.
                </li>
                <li>
                  Continuously refine your programming skills with new languages
                  and technologies.
                </li>
              </ol>
              <br />
              <br />
              🔥 Leading: Conducting Original research and advancing the field{" "}
              <br />
              <br />
              <ol>
                <li>
                  Identify research questions or challenges in the
                  intersectionality of computer science and your chosen domain.
                </li>
                <li>
                  Develop and execute research projects, collaborating with
                  experts from different disciplines when necessary.
                </li>
                <li>
                  Publish your research findings in peer-reviewed journals,
                  conference proceedings, and other relevant outlets.
                </li>
                <li>
                  Share your expertise by mentoring, teaching, or consulting in
                  your area of specialization.
                </li>
              </ol>
              <br />
              <br />
              Remember, growth and learning are processes that happen step by
              step. Keep going, stay curious, and embrace the journey. Every
              expert was once a beginner, and you have the capacity to reach
              your goals. 😊👩‍💻🌟
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Learn Coding`
          )} in javascript?`,
          response: `

// This is ultimately all you need to understand in order to build an app with OpenAI or ChatGPT in Javascript. 
// You might be surprised how simple it seems. That's a sign of great engineering. 
// If this makes no sense to you, try your best to make some sense out of it. I believe in you :)

const functions = require("firebase-functions");
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");



const configuration = new Configuration({ apiKey: OPENAI_API_KEY });

const openai = new OpenAIApi(configuration);

const app = express();


app.post("/task", async (request, response) => {

  try {

    const task = request.body.task;

    const answer = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant teaching beginners as Steve Jobs."},
        { role: "user", content: task }
      ],
    });

    response.status(200).send({
      bot: answer.data.choices[0].message,
    });

  } catch (error) {

  }

});

exports.app = functions.https.onRequest(app);
          `,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Learn Coding`
          )} in exactly one sentence?`,
          response:
            "\n\n The intersectionality of computer science refers to the application of computational principles and techniques to solve problems, generate insights, and drive innovation across diverse disciplines and fields of study.",
          spanish: ``,
          tooltip: ``,
        },
        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Learn Coding`
          )}?`,
          response: (
            <MessageBlock>
              🌐Geography & Computer Science: How can computer science and GIS
              (Geographic Information System) technologies be combined to help
              combat climate change?
              <br />
              <br />
              🧬Biology & Computer Science: In what ways can computer science
              accelerate research and discoveries in the field of genomics?
              <br />
              <br />
              🎨Art & Computer Science: How does understanding the principles of
              computer science contribute to the evolution of digital art and
              animation?
              <br />
              <br />
              📚Literature & Computer Science: How might machine learning and
              natural language processing transform the future of literary
              analysis or linguistics?
              <br />
              <br />
              ⚖️Law & Computer Science: How do you envision the role of computer
              science in the future of law enforcement and crime investigation,
              especially in light of privacy concerns?
              <br />
              <br />
              These questions encourage the exploration of the
              multi-disciplinary applications of computer science, sparking
              creativity and stimulating critical thinking. 💡🚀
            </MessageBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: (
            <div>
              This shopping slot is not being utilized yet. Please contact me in
              Patreon to qualify. In the meantime, lets talk about the
              socioeconomic state of Latinos in tech.
              <br />
              <br />
              <p>
                The underrepresentation of Latinos as founders of major tech
                companies is a multifaceted issue that can be attributed to
                various factors, including socioeconomic, educational, and
                cultural barriers, as well as systemic biases and
                discrimination. Here are some reasons that contribute to this
                underrepresentation:
              </p>
              <br />
              <ol>
                <li>
                  Educational barriers: Access to quality education is essential
                  for success in the technology industry. However, Latinos may
                  face challenges in accessing high-quality education due to
                  factors such as socioeconomic status, underfunded schools, or
                  living in areas with fewer educational resources. These
                  challenges can limit their exposure to computer science and
                  other STEM subjects, reducing the likelihood of pursuing
                  careers in technology. <br />
                </li>
                <li>
                  Socioeconomic factors: Socioeconomic status plays a
                  significant role in shaping career opportunities and
                  aspirations. Latinos, as a group, have historically faced
                  economic disparities, which can impact their access to
                  resources, networking opportunities, and the ability to take
                  risks associated with entrepreneurship. <br />
                </li>

                <li>
                  Lack of representation and role models: The technology
                  industry has long been dominated by individuals from certain
                  racial and ethnic backgrounds. The lack of Latino
                  representation in leadership roles and as founders of major
                  tech companies can make it challenging for aspiring Latino
                  entrepreneurs to find role models and mentors, which is
                  crucial for professional development and success. <br />
                </li>
                <li>
                  Limited access to funding and resources: Starting a tech
                  company often requires substantial financial investment and
                  access to resources, such as networking opportunities,
                  mentorship, and technical support. Latinos may face challenges
                  in securing funding from investors due to unconscious bias,
                  discrimination, or lack of connections within the industry.{" "}
                  <br />
                </li>
                <li>
                  Cultural factors: Cultural factors, such as family
                  expectations and community norms, can also influence career
                  choices and aspirations. In some cases, Latinos may face
                  pressure to prioritize more traditional or stable career paths
                  over the risks associated with entrepreneurship or founding a
                  tech company. <br />
                </li>
                <li>
                  Systemic biases and discrimination: The technology industry,
                  like many other sectors, is not immune to systemic biases and
                  discrimination that can create barriers for underrepresented
                  groups, including Latinos. This can manifest in various forms,
                  such as biased hiring practices, limited access to mentorship
                  and resources, or unequal treatment within the workplace.
                </li>
              </ol>
              <br />
              <br />
              Addressing these challenges and promoting diversity in the
              technology industry requires concerted efforts from various
              stakeholders, including educational institutions, policymakers,
              investors, and tech companies themselves. By fostering inclusive
              environments, providing equal opportunities, and breaking down
              barriers for underrepresented groups, the tech industry can
              benefit from the wealth of talent, perspectives, and ideas that
              diverse founders bring to the table.
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Lesson 1 Coding Fundamentals": {
      documentID: ``,
      backgroundImgSrc:
        "https://res.cloudinary.com/dtkeyccga/image/upload/v1691640402/ROBE_assets/Module_Buttons_8_yzjtoj_muwgiv.gif",
      hasCode: true,
      hasCustomIntro: true,
      filler: ``,
      highValue: false,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      new: true,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Lesson 1 Coding Fundamentals`, // may not need - `name`
      header: `Lesson 1 Coding Fundamentals`,
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1693470075/CODING_LESSON_1_OOP_COMPRESSED_rnyagi_jalk2h.mov", // may not need

      prompts: {
        welcome: {
          response: (
            // <MessageBlock>
            <div>
              ¡Hola, estudiantes! 🌸
              <br />
              <br />
              I'm Ms. Roxana, your guide through the enchanting garden of
              Object-Oriented Programming (OOP). In this garden, we plant
              'objects', each a unique flower with its own color and fragrance,
              or in programming terms, attributes and methods. 🌹 Navigating
              this garden might feel challenging initially, but remember, every
              bloom takes time and patience, and I'm here to support you through
              it all. 🌱 We'll explore vibrant concepts like classes, objects,
              inheritance, and much more. Ready to blossom into brilliant
              programmers? Let's start this magical journey together! 🦋
              <br />
              <br />
              With all my warmth and support,
              <br />
              Ms. Roxana 🌟
            </div>
            // </MessageBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Lesson 1 Coding Fundamentals`
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
            `Lesson 1 Coding Fundamentals`
          )}?`,
          response: (
            <div>
              Queridos estudiantes! 🌟
              <br />
              <br />
              Object-oriented programming (OOP) is a very special type of
              programming, and it's full of wonder! Here are some inspiring
              facts about it:
              <br />
              <br />
              <b> You're in good company! 🌍: </b>
              OOP is one of the most widely-used programming paradigms in the
              world. It's used by tech giants like Google, Facebook, and Amazon.
              Even if you're just starting, remember that every great developer
              started where you are right now.
              <br />
              <br />
              <b> Building blocks for the digital world! 🏗️: </b>
              Think of OOP like building with blocks. Each object you create is
              like a building block with its own properties and behaviors. You
              can reuse these blocks as much as you want! The real world is full
              of objects that interact with each other, right? Well, OOP allows
              us to model these real-world objects and interactions in our code,
              making it more intuitive and relatable.
              <br />
              <br />
              <b> Teamwork makes the dream work! 🤝: </b>
              OOP is perfect for team projects. You can work on one class or
              object while your teammate works on another. It's all about
              collaboration and working together, just like in real life.
              <br />
              <br />
              <b>Forever learning, forever growing! 🌱:</b>
              One of the beautiful aspects of OOP is that there is always more
              to learn. As you grow as a programmer, so too will your
              understanding and application of OOP. It's like a journey that
              never ends, and it's all part of the adventure of learning!
              <br />
              <br />
              Remember, it's not about being the best from the start, it's about
              growth, determination, and resilience. I believe in your abilities
              and potential. Keep pushing forward, and you'll be amazed at what
              you can achieve! 💖💪🏽🚀
              <br />
              <br />
              Remember that your heritage, your struggles, and your dreams give
              you a unique perspective that is valuable in the world of coding.
              Let's embrace the journey and keep on coding! 💻🌟
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Lesson 1 Coding Fundamentals`
          )}?`,
          response: (
            <div>
              ¡Hola estudiantes! 🌞
              <br /> <br />
              It's Ms. Roxana here again, ready to deepen our understanding of
              Object-Oriented Programming (OOP) with you! 🚀🎓
              <br /> <br />
              Remember, it's completely okay if things seem challenging at
              first. We're here to learn, and every learning journey has its
              hills to climb. Let's dive a bit deeper into OOP today and
              understand it better with some JavaScript code examples. We will
              also discuss two additional concepts: encapsulation and
              abstraction. 💡🌈
              <br />
              <br />
              <b> Objects and Classes 🍏🏫:</b>
              In OOP, objects and classes are two sides of the same coin. A
              class is like a blueprint, defining what an object of that class
              should have and what it can do. In JavaScript, we can define a
              "Student" class with attributes like name, age, and grade, and
              behaviors like studying. Then, an object is like an individual
              instance created from that class or blueprint. So if we create an
              object named "Maria" from the "Student" class, Maria would have
              her own specific name, age, and grade and could perform actions
              like studying or taking an exam.
              <CodeBlock
                code={`
class Student {
  constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
  }

  study() {
      console.log("$\{this.name} is studying.");
  }
}

// An object is an individual instance created from that class.
let maria = new Student("Maria", 12, "7th Grade");
maria.study();  // Outputs: "Maria is studying."`}
              />
              <br />
              <br />
              <b> Inheritance 🌳: </b>
              This allows one class (the child, or subclass) to inherit features
              from another class (the parent, or superclass). This is great for
              reusing code.
              <CodeBlock
                code={`
class Athlete extends Student {
  constructor(name, age, grade, sport) {
      super(name, age, grade);
      this.sport = sport;
  }

  play() {
      console.log("$\{this.name} is playing $\{this.sport}.");
  }
}

let juan = new Athlete("Juan", 15, "10th Grade", "Soccer");
juan.study();  // Outputs: "Juan is studying."
juan.play();   // Outputs: "Juan is playing Soccer."`}
              />
              <br />
              <br />
              <b> Polymorphism 🐾: </b>
              This term means "many shapes". It allows one object to take on
              many forms. In code, it allows a child class to behave uniquely,
              even when using attributes inherited from a parent class.
              <CodeBlock
                code={`
class Artist extends Student {
  constructor(name, age, grade, artForm) {
      super(name, age, grade);
      this.artForm = artForm;
  }

  study() {
      console.log("$\{this.name} is studying $\{this.artForm}.");
  }
}

let sofia = new Artist("Sofia", 17, "12th Grade", "painting");
sofia.study();  // Outputs: "Sofia is studying painting."
`}
              />
              <br />
              <br />
              <b> Encapsulation 📦: </b>
              Think of encapsulation like a protective bubble that wraps around
              our data (attributes) and code (behaviors) to keep them safe. It
              controls access to an object's internal state, meaning we can
              limit how and when its data is modified. This way, we keep our
              code neat and prevent bugs.
              <CodeBlock
                code={`
class Student {
  constructor(name, age, grade) {
      this._name = name; // "_" indicates it should not be accessed directly
      this._age = age;
      this._grade = grade;
  }

  // getter
  get name() {
      return this._name;
  }

  // setter
  set name(newName) {
      this._name = newName;
  }
}

let luis = new Student("Luis", 14, "9th Grade");
luis.name = "Luis Miguel";  // We can safely change the name
console.log(luis.name);  // Outputs: "Luis Miguel"
`}
              />
              <br />
              <br />
              <b> Abstraction 🖼️: </b>
              Abstraction is like an artist's impression of a landscape. They
              don't need to include every little detail—only what's important.
              Similarly, abstraction in OOP allows us to hide complex details
              and show only essential features. This helps make our code easier
              to understand and work with.
              <CodeBlock
                code={`
class Student {
  constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
      this._attendance = [];  // Private attribute not directly accessible
  }

  // Public method that abstracts away the complexity
  markAttendance(status) {
      this._attendance.push(status);
  }
}

let ana = new Student("Ana", 16, "11th Grade");
ana.markAttendance("Present");  // We don't deal with the _attendance array directly
        
          `}
              />
              <br />
              <br />
              You're doing amazing! 💖 Remember, every step you take, even if it
              feels small, is progress. You are capable of understanding and
              mastering these concepts. So, let's keep going, keep questioning,
              and keep growing together! 🌱💫
              <br />
              <br />
              You got this! I believe in you! 🔥🌟
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Lesson 1 Coding Fundamentals`
          )} with one sentence answers?`,
          response: (
            <div>
              What exactly is an 'object' in OOP? 🤔
              <br />
              <br />
              Objects are fundamental components in OOP. You can think of an
              object as a 'thing' that can perform a set of related activities.
              An object can represent a person, a place, a bank account, a table
              of data or any item that the program has to handle. Importantly,
              an object packages both data and the procedures that manipulate
              that data.
              <CodeBlock
                code={`
let student = {
  name: 'Juan',
  age: 18,
  greet: function() {
    console.log("Hello, my name is $\{this.name}!");
  }
};

student.greet();  // Outputs: Hello, my name is Juan!`}
              />
              How do 'classes' and 'objects' relate to each other? 🧐
              <br />
              <br />
              Think of a class as a blueprint or a mold, and objects are the
              things made from this blueprint. So, a class defines the
              properties (attributes) and methods (actions) that an object can
              have. For example, if we have a class 'Dog', it may define
              properties like breed, color, age, and methods like bark, eat,
              sleep. Then, each 'Dog' object we create from this class can have
              different breeds, colors, and ages, but all will be capable of
              barking, eating, and sleeping.
              <CodeBlock
                code={`
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is $\{this.name}!");
  }
}

let juan = new Student('Juan', 18);
juan.greet();  // Outputs: Hello, my name is Juan!       
                `}
              />
              What is 'inheritance' and why is it useful? 💰
              <br />
              <br />
              Inheritance is a mechanism where you can to derive a class from
              another class for a hierarchy of classes that share a set of
              attributes and methods. It allows classes to inherit commonly used
              state and behavior from other classes. In OOP, this helps to
              promote code re-usability and makes your code more organized and
              easier to manage.
              <CodeBlock
                code={`
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, my name is $\{this.name}!");
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  study() {
    console.log("$\{this.name} is studying.");
  }
}

let juan = new Student('Juan', 10);
juan.greet();  // Outputs: Hello, my name is Juan!
juan.study();  // Outputs: Juan is studying.  
                `}
              />
              Remember, it's perfectly okay if you don't understand these
              concepts right away. Keep practicing and asking questions, and it
              will all start making sense. You've got this! 💪
              <br />
              <br />
              With all my support,
              <br />
              Ms. Roxana 🌟
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Lesson 1 Coding Fundamentals`
          )}?`,
          response: (
            <div>
              Dear students! 😊 Here is a roadmap to help you navigate your
              journey from beginner to pro in Object-Oriented Programming (OOP):{" "}
              <br />
              <br />
              <br />
              <br />
              <b>Understanding the Basics of Programming 🌱</b>
              <br />
              <br />
              <ol>
                <li>
                  Begin with the basics of programming concepts, such as
                  variables, data types, control structures (loops, if-else
                  conditions), and functions.
                </li>
                <li>
                  Practice writing simple programs that use these concepts.
                </li>
              </ol>
              <br />
              <br />
              <b>Introduction to OOP 📘</b>
              <br />
              <br />
              <ol>
                <li>
                  Learn about the fundamental concepts of OOP: Objects, Classes,
                  Attributes, and Methods.
                </li>
                <li>Practice creating simple classes and objects.</li>
              </ol>{" "}
              <br />
              <br />
              <b>Diving Deeper into OOP 🌊</b>
              <br />
              <br />
              <ol>
                <li>
                  Understand the core principles of OOP: Encapsulation,
                  Inheritance, Abstraction, and Polymorphism.
                </li>
                <li>
                  Write programs that demonstrate each of these principles.
                </li>
              </ol>{" "}
              <br />
              <br />
              <b>Advanced OOP Concepts 🚀</b>
              <br />
              <br />
              <ol>
                <li>
                  Learn about interfaces, method overloading and overriding,
                  composition, access modifiers (public, private, protected).
                </li>
                <li>
                  Write more complex programs that incorporate these advanced
                  concepts.
                </li>
              </ol>{" "}
              <br />
              <br />
              <b>Design Patterns in OOP 💡</b>
              <br />
              <br />
              <ol>
                <li>
                  Study common design patterns in OOP (such as Singleton,
                  Factory, Observer, and Strategy patterns). These patterns are
                  proven solutions to common programming challenges.
                </li>
                <li>Implement these design patterns in your programs.</li>
              </ol>{" "}
              <br />
              <br />
              <b>Real-world Projects 🏗️</b>
              <br />
              <br />
              <ol>
                <li>
                  Apply your knowledge in real-world projects. This could be
                  anything from a simple calculator app to a more complex game
                  or even a mini database system.
                </li>
                <li>
                  Collaborate with others on projects to learn about using OOP
                  in a team setting.
                </li>
              </ol>{" "}
              <br />
              <br />
              <b>Reading and Understanding Others' Code 🧩</b>
              <br />
              <br />
              <ol>
                <li>
                  Reading others' code is a great way to learn. Look at
                  open-source projects or other people's code on platforms like
                  GitHub.
                </li>
                <li>
                  Try to understand how they have used OOP principles and how
                  you might approach it differently.
                </li>
              </ol>{" "}
              <br />
              <br />
              <b>Continuous Learning and Practice 🎯</b>
              <br />
              <br />
              <ol>
                <li>
                  Keep up to date with the latest trends and practices in OOP.
                </li>
                <li>
                  Regularly practice your skills with coding problems and
                  projects.
                </li>
              </ol>{" "}
              <br />
              <br />
              This is a journey, and every programmer learns at their own pace.
              It's perfectly fine if some concepts take a while to sink in. The
              key is to never stop learning and practicing. Be patient with
              yourself, keep your curiosity alive, and celebrate every victory,
              no matter how small. You're doing an amazing job! 💪🌟
              <br /> <br />
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Lesson 1 Coding Fundamentals`
          )} in python?`,
          response: `
'''

In Python, we can use classes and objects to model real-world entities. Let's model a simple Rihanna class. 
For this example, we'll assume that Rihanna has attributes like name, profession, and nationality, 
and methods such as sing and perform.

In the Rihanna class above, __init__ is a special method that's called 
when an object is created from the class. This is also known as a constructor. 
The self keyword represents the instance state (or object) of the class and is used to 
access the class attributes.

'''


class Rihanna:
    def __init__(self, name, profession, nationality):
        self.name = name
        self.profession = profession
        self.nationality = nationality

    def sing(self, song):
        return f"{self.name} is singing {song}."

    def perform(self, performance):
        return f"{self.name} is performing {performance}."


rihanna = Rihanna("Rihanna", "Singer", "Barbadian")
print(rihanna.sing("Love On The Brain"))
print(rihanna.perform("at the Grammy Awards"))
          `,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Lesson 1 Coding Fundamentals`
          )} in exactly one sentence?`,
          response: `Object-Oriented Programming is a programming paradigm that organizes data into objects and behavior into classes, promoting code reuse through inheritance, encapsulation of data and functions together, and enabling polymorphism to allow a single interface for a general class of actions.`,
          spanish: ``,
          tooltip: ``,
        },
        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Lesson 1 Coding Fundamentals`
          )}?`,
          response: (
            <div>
              Object Oriented Programming is a beautiful world filled with
              abstract concepts and logical relationships. Let's dive in and
              explore this together, there's no need to worry - remember, there
              are no wrong answers, only learning experiences! 😊
              <br />
              <br />
              Imagine you're explaining it to a friend who's never heard of it:
              what is Object-Oriented Programming (OOP) and how is it different
              from other programming paradigms? 🤔
              <br />
              <br />
              In OOP, we often talk about classes and objects. Can you describe
              the relationship between them, as if they were elements in a story
              you're telling? 📖💡
              <br />
              <br />
              Let's imagine a real-world scenario: a public library system. What
              might be some of the classes you'd design, and what attributes and
              methods would they have? Don't forget to include the relationships
              between these classes too! 📚
              <br />
              <br />
              You've likely heard of the principles of OOP: encapsulation,
              inheritance, and polymorphism. Can you give an example of each,
              using a context that interests you, perhaps a favorite hobby or
              passion? ⚽
              <br />
              <br />
              Often in programming, we encounter problems that require a nuanced
              understanding of OOP. Let's say you have a class Bird and a class
              Airplane. Both can fly, but they're quite different in other
              respects. How might you use OOP principles to handle this
              situation without code duplication? 🐝
              <br />
              <br />
              <div>
                Remember, each question is an opportunity to explore, learn, and
                understand better. Take your time, dig deep into your
                creativity, and most importantly, have fun with it! You're all
                capable of brilliant things, I have faith in you! ✨
              </div>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: (
            <div>
              This shopping slot is not being utilized yet. Please contact me in
              Patreon to qualify. In the meantime, lets talk about the
              socioeconomic state of Latinos in tech.
              <br />
              <br />
              <p>
                The underrepresentation of Latinos as founders of major tech
                companies is a multifaceted issue that can be attributed to
                various factors, including socioeconomic, educational, and
                cultural barriers, as well as systemic biases and
                discrimination. Here are some reasons that contribute to this
                underrepresentation:
              </p>
              <br />
              <ol>
                <li>
                  Educational barriers: Access to quality education is essential
                  for success in the technology industry. However, Latinos may
                  face challenges in accessing high-quality education due to
                  factors such as socioeconomic status, underfunded schools, or
                  living in areas with fewer educational resources. These
                  challenges can limit their exposure to computer science and
                  other STEM subjects, reducing the likelihood of pursuing
                  careers in technology. <br />
                </li>
                <li>
                  Socioeconomic factors: Socioeconomic status plays a
                  significant role in shaping career opportunities and
                  aspirations. Latinos, as a group, have historically faced
                  economic disparities, which can impact their access to
                  resources, networking opportunities, and the ability to take
                  risks associated with entrepreneurship. <br />
                </li>

                <li>
                  Lack of representation and role models: The technology
                  industry has long been dominated by individuals from certain
                  racial and ethnic backgrounds. The lack of Latino
                  representation in leadership roles and as founders of major
                  tech companies can make it challenging for aspiring Latino
                  entrepreneurs to find role models and mentors, which is
                  crucial for professional development and success. <br />
                </li>
                <li>
                  Limited access to funding and resources: Starting a tech
                  company often requires substantial financial investment and
                  access to resources, such as networking opportunities,
                  mentorship, and technical support. Latinos may face challenges
                  in securing funding from investors due to unconscious bias,
                  discrimination, or lack of connections within the industry.{" "}
                  <br />
                </li>
                <li>
                  Cultural factors: Cultural factors, such as family
                  expectations and community norms, can also influence career
                  choices and aspirations. In some cases, Latinos may face
                  pressure to prioritize more traditional or stable career paths
                  over the risks associated with entrepreneurship or founding a
                  tech company. <br />
                </li>
                <li>
                  Systemic biases and discrimination: The technology industry,
                  like many other sectors, is not immune to systemic biases and
                  discrimination that can create barriers for underrepresented
                  groups, including Latinos. This can manifest in various forms,
                  such as biased hiring practices, limited access to mentorship
                  and resources, or unequal treatment within the workplace.
                </li>
              </ol>
              <br />
              <br />
              Addressing these challenges and promoting diversity in the
              technology industry requires concerted efforts from various
              stakeholders, including educational institutions, policymakers,
              investors, and tech companies themselves. By fostering inclusive
              environments, providing equal opportunities, and breaking down
              barriers for underrepresented groups, the tech industry can
              benefit from the wealth of talent, perspectives, and ideas that
              diverse founders bring to the table.
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        practice: {
          completed: false,
          impact: 750,
          action: `practice`,
          icon: `🥋`,
          request: `Let's practice!`,
          context: `We're going to practice defining a class and create an object.`,
          displayCode: `require axios from 'axios'

class ChatGPTAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.endpoint =
      'https://api.openai.com/v1/' +
      'engines/davinci-codex/' +
      'completions';
    this.headers = {
      'Content-Type': 'application/'
      +'json',
      'Authorization':
        \`Bearer \${this.apiKey}\`
    };
  }

  async query(prompt) {
    const payload = {
      prompt,
    }
    const headers = {
      headers: this.headers
    }
    try {
      const response = await axios
      .post(
        this.endpoint,
        payload,
        headers
      );

      let result = response
      .data
      .choices[0]
      .text
      .trim()

      return result
    } catch (err) {
      throw new Error(
        \`Failed: \${err}\`
      );
    }
  }
}`,
          input: `require axios from 'axios'
class ChatGPTAPI {
constructor(apiKey) {
this.apiKey = apiKey;
this.endpoint =
'https://api.openai.com/v1/' +
'engines/davinci-codex/' +
completions';
this.headers = {
'Content-Type': 'application/'
+'json',
'Authorization':
\`Bearer \${this.apiKey}\`
};
}
async query(prompt) {
const payload = {
prompt,
}
const headers = {
headers: this.headers
}
try {
const response = await axios
.post(
this.endpoint,
payload,
headers
);
let result = response
.data
.choices[0]
.text
.trim()
return result
}catch (err) {
throw new Error(
\`Failed: \${err}\`
);
}
}
}`,
          response: <div>good job grasshopper!</div>,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Lesson 2 Frontend Programming": {
      documentID: ``,
      backgroundImgSrc:
        "https://res.cloudinary.com/dtkeyccga/image/upload/v1691640338/ROBE_assets/Module_Buttons_4_n2grll_xqtadc.gif",
      hasCode: true,
      filler: ``,
      highValue: false,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      new: true,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Lesson 2 Frontend Programming`, // may not need - `name`
      header: `Lesson 2 Frontend Programming`,
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1691637324/v3/CODING_LESSON_2_FRONTEND_COMPRESSED_lc7u4p.mov", // may not need

      prompts: {
        welcome: {
          response: (
            // <MessageBlock>
            <div>
              Exceptional students! 🌟
              <br />
              <br />
              I extend a warm welcome to you as you embark on the exciting
              journey of learning event-driven programming and user-centered
              design. 🚀🎉 Event-driven programming is like a captivating dance
              where your users or system events set the rhythm. It offers a
              unique approach to crafting software that is truly responsive and
              interactive, providing an enriching experience for your users and
              making your applications feel alive! 💃💻
              <br />
              <br />
              On the other hand, user-centered design places the users at the
              heart of the entire design process, making you empathetic
              storytellers. It encourages you to walk in your users' shoes,
              understand their needs, preferences, and values, and design
              solutions that truly resonate with them. 🎨💖 Welcome to this
              vibrant voyage of learning and exploration.
              <br /> <br />
              As you acquire these skills and knowledge, may you be inspired and
              empowered to create digital experiences that are truly
              extraordinary. So, get ready, let your creativity bloom, and let
              your brilliance light up the world! 🌼🌟
            </div>
            // </MessageBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Lesson 2 Frontend Event-Driven Programming`
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
            `Lesson 2 Frontend Event-Driven Programming`
          )}?`,
          response: (
            <div>
              My dear students! 🌟 Let's dive right in!
              <br />
              <br />
              Event-driven programming is truly a magical realm. Picture
              yourself at the helm of a ship 🚢, and all around you are buttons,
              knobs, and levers. Each of these represents an event in your
              program. When you, the captain, decide to press a button or turn a
              knob, you're creating an event. It's like your ship responds to
              you, and that's the heart of event-driven programming. You're not
              just a passenger, you're the captain, steering your program in the
              direction you choose! So, in each line of code you write,
              remember: you are the captain, full of power and ability. 💪🌟{" "}
              <br />
              <br />
              Now, let's talk about user-centered design. Imagine you are a
              sculptor 🗿, but instead of chiseling away at marble without any
              guidance, you have your audience right there with you, telling you
              exactly what they want to see in the sculpture. That's
              user-centered design! You are creating something specifically to
              make people's lives easier and better. How beautiful it is to have
              such a direct impact, right? You're not only a sculptor but also a
              creator of joy and utility. And that's something truly special. ✨
              <br />
              <br />
              Lastly, the metaverse. Close your eyes and imagine being able to
              step into any world you can think of, being anyone you wish to be
              🌌. That's the promise of the metaverse. It's not just a new
              technology; it's a new universe, a digital home where the rules of
              reality can be bent. The metaverse is like the ultimate sandbox.
              You're not just a player; you're also a creator. It's a place
              where everyone can create, share, and experience together. It's
              full of potential for education, creativity, and connection. It’s
              like a dream that we all can share and explore together. So
              exciting, right? 😃
              <br />
              <br />
              Remember, the beauty of these concepts lies not just in their
              technology, but also in their power to create, to connect, and to
              transform. You have the power to change the world with your ideas
              and innovations. Always remember that, and let it guide you in
              your journey. Let's conquer this together! 🚀💖
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Lesson 2 Frontend Event-Driven Programming`
          )}?`,
          response: (
            <div>
              Let's recap
              <br />
              <br />
              <b>Event-driven programming</b> is like a lively dance 💃. The
              code doesn't just follow a strict routine, instead it waits and
              responds to the rhythm of user input or system events, making our
              applications interactive and dynamic.
              <br />
              <br />
              Next up, <b>user-centered design</b>is like being an attentive
              architect 🏡. Instead of creating based solely on your own ideas,
              you take into account the needs, habits, and desires of the people
              who will use the product, making it not just functional but
              comfortable and truly delightful.
              <br />
              <br />
              Lastly, <b>component architecture</b> in frameworks like React is
              like using a set of building blocks 🧱. Each block, or component,
              is self-contained with its own functionality, simplifying
              development and making our code more efficient, maintainable, and
              reusable.
              <br />
              <br />
              Combined, these concepts enable us to create applications that are
              responsive, user-friendly, and efficient. They are our trusty
              tools in the wonderful journey of coding and innovation. Let's
              cherish and utilize them in our exciting quest! 🚀💫
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Lesson 2 Frontend Event-Driven Programming`
          )} with one sentence answers?`,
          response: (
            <div>
              Let's explore these interesting questions together.
              <br />
              <br />
              <b>1️⃣ Event-Driven Programming</b>
              <br />
              Question: How does event-driven programming make a difference in
              application development?
              <br />
              <br />
              Answer: Event-driven programming makes your application more
              responsive and user-friendly. It allows your program to react to
              user inputs or system events, creating an interactive experience.
              Instead of the program controlling the user, the user controls the
              program, which leads to a more intuitive and engaging user
              experience. 🎮💡
              <br />
              <br />
              <b>2️⃣ User-Centered Design</b>
              <br />
              Question: Why is user-centered design important?
              <br />
              <br />
              Answer: User-centered design ensures that the product you're
              creating truly meets the needs and preferences of your users. By
              involving users throughout the design process, you can create a
              product that is not just functional, but also intuitive,
              enjoyable, and tailored to your users' needs. This not only
              enhances user satisfaction, but can also lead to increased usage
              and success of your product. 🎯🌈
              <br />
              <br />
              <b>3️⃣ Component Architecture</b>
              <br />
              Question: How does component architecture benefit our coding
              process?
              <br />
              <br />
              Answer: Component architecture, like what we see in React, allows
              for modularity in your code. Each component is self-contained,
              managing its own state and properties, which makes your code more
              organized and easier to maintain. Components can be reused across
              your application, saving you time and effort. Also, by breaking
              down the application into components, it's easier to isolate bugs
              and make updates without disrupting the entire system. It's like
              having a well-organized toolbox, making your coding process more
              efficient and enjoyable! 🔧💫
              <br />
              <br />
              Remember, there's no such thing as a silly question. Each question
              takes you one step further on your journey of learning. Keep
              exploring, keep asking, and keep growing! 🚀💖
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Lesson 1 Coding Fundamentals`
          )}?`,
          response: (
            <div>
              Hola, brilliant stars of the future! 🌟 I'm here to guide you on
              your journey to become professional frontend software engineers.
              Remember, every single one of you can shine brightly in the world
              of tech, even if it seems challenging at first. Just like learning
              a new language or a musical instrument, mastering a skill like
              React will take time and practice. Don't worry, you'll get there
              step by step, just like climbing a mountain. 🏔️
              <br /> <br />
              Here's a roadmap to help you navigate through your learning
              journey:
              <br />
              <br />
              <ol>
                <li>
                  <b>Fundamentals of Web Development 🌐</b>
                  <div>
                    Before diving into React, it's essential to understand the
                    basic building blocks of the web:
                    <ul>
                      <li>HTML: The skeleton of a web page</li>
                      <li>CSS: The styling and design aspect of a web page</li>
                      <li>
                        JavaScript: The behavior and interactivity of a web page
                      </li>
                    </ul>
                  </div>
                </li>
                <br />
                <li>
                  <b>JavaScript (Advanced) 💡</b>
                  <div>
                    Dive deeper into JavaScript to understand concepts such as
                    promises, async/await, ES6 features like arrow functions,
                    and so on. This will help you truly harness the power of
                    React later on.
                  </div>
                </li>
                <br />
                <li>
                  <b>Version Control/Git ⚙️</b>
                  <div>
                    Git helps you manage different versions of your code, and
                    it's essential in any developer's toolkit. Spend some time
                    learning about repositories, commits, branches, and the
                    like.
                  </div>
                </li>
                <br />
                <li>
                  <b>Responsive Design 🖥️ 📱</b>
                  <div>
                    Web pages need to look good and function well on all
                    devices, not just desktop computers. Learn about media
                    queries, flexbox, and grid systems.
                  </div>
                </li>
                <br />
                <li>
                  <b>React Basics ⚛️</b>
                  <div>
                    Now we're getting to the exciting part! Start by
                    understanding what React is and why it's used. Then learn
                    about components, props, and state.
                  </div>
                </li>
                <br />
                <li>
                  <b>React Advanced Concepts ⚛️💡</b>
                  <div>
                    Now that you're comfortable with the basics, explore more
                    advanced topics like hooks and routing with React Router.{" "}
                  </div>
                </li>
                <br />
                <li>
                  <b>State Management 🗄️</b>
                  <div>
                    Learn about managing complex state with tools like Redux
                    although hooks and context can be enough for many
                    applications.
                  </div>
                </li>
                <br />
                <li>
                  <b>Testing 🧪</b>
                  <div>
                    Learn how to write tests for your React applications to
                    ensure they work as expected. Tools like Jest and React
                    Testing Library are widely used.
                  </div>
                  <br />
                </li>

                <li>
                  <b>Build a Full Project 🏗️</b>
                  <div>
                    Nothing reinforces learning like building a complete
                    application from scratch. Choose a project that excites you
                    - it could be a personal blog, a task manager app, or
                    anything else you can dream of!
                  </div>
                  <br />
                </li>

                <li>
                  <b>Continue Learning 📚</b>
                  <div>
                    Technology is always evolving, and so should you. Learn
                    about related tools, libraries, and frameworks, like
                    Next.js, Gatsby, TypeScript, and so on.
                  </div>
                  <br />
                </li>
              </ol>
              <br />
              Every step of the way is an achievement to celebrate. 🎉 Feel
              proud of your progress, no matter how small, and don't forget to
              help and support each other on this journey. Your future as tech
              wizards is bright and promising. Let's embrace this adventure
              together! 🚀
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Lesson 2 Frontend Event-Driven Programming`
          )} in javascript?`,
          response: `
/*

 In order to log in a user with Firebase in a React application, you'd have to install Firebase in your project first. If you haven't done this, you can add Firebase by running npm install firebase or yarn add firebase in your terminal.

In this example, we have a LoginForm component that maintains its own local state for the user's email and password, as well as any error messages. The handleChange function updates this state when the user types into the form inputs, and the handleSubmit function is called when the user submits the form.

In the handleSubmit function, we call Firebase's signInWithEmailAndPassword method, passing the email and password the user entered. If there's an error - for instance, if the user entered an incorrect password - we catch it and update our component's state with the error message.

This is a very basic example and a real-world application would likely involve more complexities such as form validation, handling loading states, and more. But it should serve as a good starting point. Remember, you should have already initialized Firebase in your project for this to work, and the email-password authentication method should be enabled on your Firebase project's authentication settings.
*/


import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={handleChange}
                required
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={handleChange}
                required
            />
            {error && <p>{error}</p>}
            <button type='submit'>Log in</button>
        </form>
    );
};

export default LoginForm;

          `,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Lesson 2 Frontend Event-Driven Programming`
          )} in exactly one sentence?`,
          response: `Event-driven programming is about writing code that responds to user actions or system events, user-centered design focuses on tailoring the design based on user needs and feedback, and component architecture involves building a system from separate parts, each encapsulating a specific functionality, that work together seamlessly.`,
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Lesson 2 Frontend Event-Driven Programming`
          )}?`,
          response: (
            <div>
              Dear explorers of the digital universe! 🌌 The best way to learn
              is by questioning and digging deeper. Let's see how you engage
              with these challenging open-ended questions. Remember, there are
              no wrong answers here. This is all about your understanding and
              perspective! 🧠🎈
              <br />
              <br />
              <ol>
                <li>
                  <b>Event-Driven Programming: ✨</b>

                  <div>
                    Describe a real-world situation or system that functions
                    similarly to an event-driven programming model. How does
                    this system react to different "events"? How might
                    understanding this real-world example help someone new to
                    event-driven programming grasp the concept?
                  </div>
                  <br />
                </li>
                <li>
                  <b>User-Centered Design: 🎨</b>

                  <div>
                    If you were tasked with designing an educational app for
                    your fellow students, what would be some key considerations
                    you'd keep in mind? How would you ensure the design is truly
                    user-centered?
                  </div>
                  <br />
                </li>
                <li>
                  <b>Component Architecture: 🏗️</b>

                  <div>
                    Imagine you are explaining the concept of component
                    architecture to a child. How would you describe what it is
                    and why it is important in software development?
                  </div>
                  <br />
                </li>
                <li>
                  <b>Synthesizing Concepts: 🌟</b>

                  <div>
                    How can concepts from event-driven programming and component
                    architecture be used to improve the user experience in a web
                    application? Can you think of an example?
                  </div>
                  <br />
                </li>
                <li>
                  <b>Looking Ahead: 🚀</b>

                  <div>
                    As you learn about these different aspects of programming
                    and design, how do you see them influencing the future of
                    how we interact with digital spaces, especially with the
                    emergence of technologies like virtual reality (VR) and
                    augmented reality (AR)?
                  </div>
                  <br />
                </li>
              </ol>
              <br />
              These questions are meant to stretch your thinking and enhance
              your understanding. I can't wait to hear your answers and engage
              in some enlightening discussions! The journey of learning is
              filled with challenges, but those challenges are what make it
              exciting and rewarding. Stay curious, keep questioning, and above
              all, believe in your incredible potential. 🎈💡🌈
              <br />
              <br />
              Warmly,
              <br />
              Ms. Roxana
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: (
            <div>
              This shopping slot is not being utilized yet. Please contact me in
              Patreon to qualify. In the meantime, lets talk about the
              socioeconomic state of Latinos in tech.
              <br />
              <br />
              <p>
                The underrepresentation of Latinos as founders of major tech
                companies is a multifaceted issue that can be attributed to
                various factors, including socioeconomic, educational, and
                cultural barriers, as well as systemic biases and
                discrimination. Here are some reasons that contribute to this
                underrepresentation:
              </p>
              <br />
              <ol>
                <li>
                  Educational barriers: Access to quality education is essential
                  for success in the technology industry. However, Latinos may
                  face challenges in accessing high-quality education due to
                  factors such as socioeconomic status, underfunded schools, or
                  living in areas with fewer educational resources. These
                  challenges can limit their exposure to computer science and
                  other STEM subjects, reducing the likelihood of pursuing
                  careers in technology. <br />
                </li>
                <li>
                  Socioeconomic factors: Socioeconomic status plays a
                  significant role in shaping career opportunities and
                  aspirations. Latinos, as a group, have historically faced
                  economic disparities, which can impact their access to
                  resources, networking opportunities, and the ability to take
                  risks associated with entrepreneurship. <br />
                </li>

                <li>
                  Lack of representation and role models: The technology
                  industry has long been dominated by individuals from certain
                  racial and ethnic backgrounds. The lack of Latino
                  representation in leadership roles and as founders of major
                  tech companies can make it challenging for aspiring Latino
                  entrepreneurs to find role models and mentors, which is
                  crucial for professional development and success. <br />
                </li>
                <li>
                  Limited access to funding and resources: Starting a tech
                  company often requires substantial financial investment and
                  access to resources, such as networking opportunities,
                  mentorship, and technical support. Latinos may face challenges
                  in securing funding from investors due to unconscious bias,
                  discrimination, or lack of connections within the industry.{" "}
                  <br />
                </li>
                <li>
                  Cultural factors: Cultural factors, such as family
                  expectations and community norms, can also influence career
                  choices and aspirations. In some cases, Latinos may face
                  pressure to prioritize more traditional or stable career paths
                  over the risks associated with entrepreneurship or founding a
                  tech company. <br />
                </li>
                <li>
                  Systemic biases and discrimination: The technology industry,
                  like many other sectors, is not immune to systemic biases and
                  discrimination that can create barriers for underrepresented
                  groups, including Latinos. This can manifest in various forms,
                  such as biased hiring practices, limited access to mentorship
                  and resources, or unequal treatment within the workplace.
                </li>
              </ol>
              <br />
              <br />
              Addressing these challenges and promoting diversity in the
              technology industry requires concerted efforts from various
              stakeholders, including educational institutions, policymakers,
              investors, and tech companies themselves. By fostering inclusive
              environments, providing equal opportunities, and breaking down
              barriers for underrepresented groups, the tech industry can
              benefit from the wealth of talent, perspectives, and ideas that
              diverse founders bring to the table.
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        practice: {
          completed: false,
          impact: 750,
          action: `practice`,
          icon: `🥋`,
          request: `Let's practice!`,
          context: `Let's create a cool background.`,
          reward: <CuteGradient />,
          displayCode: `import { useState, useEffect } 
  from "react";

export const CuteGradient = () => {
  const [offsetX, setOffsetX] = 
    useState(0);
  const [offsetY, setOffsetY] = 
    useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const animateGradient = () => {
      const elapsedTime = 
        Date.now() - startTime;
      setOffsetX(
        50 + 25 * 
        Math.sin(elapsedTime * 0.001)
      );
      setOffsetY(
        50 + 25 * 
        Math.cos(elapsedTime * 0.0015)
      );
      requestAnimationFrame(
        animateGradient
      );
    };

    requestAnimationFrame(animateGradient);
  }, []);

  const gradientStyle = {
    background: \`radial-gradient(
      circle at \${offsetX}% \${offsetY}%,
      pink, lightpink, hotpink, 
      deepPink
    )\`,
    width: "600px",
    height: "400px",
  };

  return <div style={gradientStyle}></div>
};`,
          input: `import { useState, useEffect }
from "react";
export const CuteGradient = () => {
const [offsetX, setOffsetX] =
useState(0);
const [offsetY, setOffsetY] =
useState(0);
useEffect(() => {
const startTime = Date.now();
const animateGradient = () => {
const elapsedTime =
Date.now() - startTime;
setOffsetX(
50 + 25 *
Math.sin(elapsedTime * 0.001)
);
setOffsetY(
50 + 25 *
Math.cos(elapsedTime * 0.0015)
);
requestAnimationFrame(
animateGradient
);
};
requestAnimationFrame(
animateGradient
);
}, []);
const gradientStyle = {
background: \`radial-gradient(
circle at
\${offsetX}%
\${offsetY}%,
pink, lightpink, hotpink,
deepPink
)\`,
width: "600px",
height: "400px",
};
return <div style={gradientStyle}>
</div>;
};`,
          response: <div>good job grasshopper!</div>,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Lesson 3 Backend Engineering": {
      documentID: ``,
      backgroundImgSrc:
        "https://res.cloudinary.com/dtkeyccga/image/upload/v1691640379/ROBE_assets/Module_Buttons_5_vulvwr_oymbfb.gif",
      hasCode: true,
      filler: ``,
      highValue: false,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      new: true,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Lesson 3 Backend Engineering`, // may not need - `name`
      header: `Lesson 3 Backend Engineering`,
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1691637319/v3/CODING_LESSON_3_BACKEND_COMPRESSED_qzpnwg.mov", // may not need

      prompts: {
        welcome: {
          response: (
            // <MessageBlock>
            <div>
              Hello my wonderful students! 😊
              <br />
              <br />
              Welcome to our thrilling exploration of backend engineering, cloud
              computing, and big data! Just like a forest relies on its unseen
              roots, our digital world relies on backend engineering to keep
              things running smoothly. And much like a cloud can drift anywhere
              across the sky, our data can be accessed anytime, anywhere thanks
              to cloud computing. Big data? It's like the leaves of a forest
              whispering stories, sharing knowledge, and predicting the future.
              🌳☁️🍃
              <br />
              <br />
              So let's embark on this adventure together. Remember, every
              question is a step forward, and every mistake, a lesson learned.
              Si se puede! Let's dive into the wonderful world of technology
              together. 🚀💖🌈
            </div>
            // </MessageBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Lesson 3 Understanding Backend Engineering`
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
            `Lesson 3 Understanding Backend Engineering`
          )}?`,
          response: (
            <div>
              Hola queridos estudiantes, 😊
              <br /> <br />
              I'm delighted to share some inspiring facts about cloud
              engineering and big data! These are fields that can open up
              tremendous opportunities for you, and they're becoming more
              important than ever in our increasingly digital world.
              <br />
              <br />
              <ol>
                <li>
                  <b>Cloud is Everywhere:</b>
                  ☁️ You know how you can access your photos, files, and even
                  some of your favorite games from any device? That's the magic
                  of cloud engineering! The cloud is transforming how we store
                  information and how we access it.
                </li>
                <br />
                <li>
                  <b>Empowering Innovation:</b>
                  🚀 Cloud engineering allows companies, small and large alike,
                  to innovate faster. It allows you to launch new applications,
                  improve existing ones, and deliver software faster than ever
                  before. Think about how quickly we see new features on apps
                  like Instagram or TikTok - that's the power of the cloud.
                </li>
                <br />
                <li>
                  <b>Big Data is Big Business:</b>
                  💼 Companies all over the world are using big data to make
                  better decisions. From figuring out what products to sell, to
                  predicting the hottest new music hits, big data plays a
                  crucial role. In fact, the big data market is expected to
                  reach $274.3 billion by 2022!
                </li>
                <br />
                <li>
                  <b>Predicting the Future: </b>
                  🔮 Big data can be used to predict trends and make decisions.
                  This can be anything from predicting the outcome of an
                  election, to determining what product a company should launch
                  next. It's like having a crystal ball!
                </li>
                <br />
                <li>
                  <b>Solving Real Problems:</b>
                  🌍 With cloud engineering and big data, we can tackle some of
                  the world's most pressing problems. For example, scientists
                  are using big data to track and predict climate change, and
                  cloud computing is helping to provide digital education to
                  students around the world.
                </li>
                <br />
              </ol>
              <div>
                Even if these fields seem challenging or distant, don't let that
                discourage you. You are capable of amazing things and your
                unique perspective is valuable and needed. Don't forget the
                importance of your dreams and aspirations, as they are your
                guiding star towards success. 🌟
                <br />
                <br />
                Learning is a journey, and every step, no matter how small,
                brings you closer to your goals. Si se puede! 💪💖
              </div>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Lesson 3 Understanding Backend Engineering`
          )}?`,
          response: (
            <div>
              <h3>
                The Trio Powering Our Digital Age: Backend Engineering, Cloud
                Computing, and Big Data 🚀🌐🔮
              </h3>
              <br />
              <br />
              In the grand canvas of our digital age, three unseen forces are
              artistically at work, quietly painting the picture of our lives:
              backend engineering, cloud computing, and big data. 🎨 These
              aren't just technical terms, they're magic keys 🔑 that open doors
              to a world where technology dances with imagination. 💃🌟
              <br />
              <br />
              The first key is backend engineering. Like a puppet master pulling
              the strings behind the curtain, backend engineering powers the
              applications and websites we interact with daily. 🎭💻 It's the
              heartbeat 💗 that keeps our digital world alive and functioning.
              In essence, backend engineering is the backstage hero, unseen, yet
              holding the show together.
              <br />
              <br />
              (she's really hallucinating here lol - sheilf)
              <br />
              Next, enter the realm of cloud computing. ☁️ Imagine your data as
              birds, once confined to a single tree, but now free to fly across
              the sky, landing where you need them. That's the freedom cloud
              computing has given us – data that's as free as a bird, accessible
              from any device, anytime, anywhere. 🐦💼
              <br />
              <br />
              Finally, let's dive into the vast ocean of big data. 🌊 It's about
              uncovering the tales whispered by billions of data points, each a
              drop in the digital sea. Studying these whispers reveals patterns,
              trends, and insights, much like how listening to the rustling
              leaves 🍃 can tell us about the changing seasons. Big data is our
              digital crystal ball, helping us analyze, predict, and navigate
              our way through the digital world. 🔮🗺️
              <br />
              <br />
              In conclusion, backend engineering, cloud computing, and big data
              are like three companions on our digital journey. 🛤️ They're
              shaping our present and lighting up the path to a future that's
              more interconnected and insightful. As we embrace and understand
              these forces, we step into a world where we can use technology to
              create, to solve, and to dream. Let's keep exploring and learning
              together, my dear students. Remember, si se puede! We're on this
              journey together. 🚀💖🌈
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Lesson 3 Understanding Backend Engineering`
          )} with one sentence answers?`,
          response: (
            <div>
              Here are three common questions beginners often ask about these
              fascinating fields, and some expert answers to help guide your
              understanding. 🧠🌟
              <br />
              <br />
              <ol>
                <li>
                  <b>What exactly is backend engineering? 🤔</b>
                  <div>
                    Expert Answer: "Backend engineering, my dear students, is
                    like the backstage crew at a concert. 🎬🎸 While you might
                    not see them, they ensure everything runs smoothly. In
                    digital terms, they develop and maintain the technology
                    needed to power the components which enable the user-facing
                    side of websites to exist. Their work includes server-side
                    programming, database creation and management, and even data
                    analysis." 🖥️🌐
                  </div>
                </li>
                <br />
                <li>
                  <b>How does cloud computing work? ☁️</b>
                  <div>
                    Expert Answer: "Imagine having a superpower where you can
                    store anything you want in a magical box and access it
                    anytime, anywhere. 🎁✨ That's cloud computing in a
                    nutshell. Instead of storing data on your own computer or
                    server, it's stored on a network of servers on the internet.
                    Not only can you store data, but you can also use the cloud
                    to run applications, similar to how you would run them on
                    your own computer. It's like having a powerful computer
                    right at your fingertips, no matter where you are!" 💻🌍
                  </div>
                </li>
                <br />
                <li>
                  <b>Why is big data important? 📊</b>
                  <div>
                    Expert Answer: "Big data is like a treasure trove of secrets
                    waiting to be unlocked. 🔐💎 It refers to the enormous
                    volume of data that is collected every day from various
                    digital sources. But the real value of big data isn't just
                    in the quantity, but in what we can learn from it. By
                    analyzing big data, we can uncover patterns and trends that
                    can help businesses make better decisions, scientists make
                    discoveries, and even predict future trends. It's like
                    having a digital crystal ball." 🔮🌠
                  </div>
                </li>
                <br />
              </ol>
              <div>
                Every question you ask is a step forward in your learning
                journey. Keep being curious and never stop learning, my dear
                students. Si se puede! 🦐💖🌈
              </div>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Lesson 3 Understanding Backend Engineering`
          )}?`,
          response: (
            <div>
              Dear students! 😊 Here's a roadmap to guide your journey from
              beginner to professional in backend engineering, cloud computing,
              and big data. Remember, everyone's path may look a bit different,
              and that's perfectly okay. Your journey is unique to you! 🗺️🌟
              <br />
              <br />
              <h4>Backend Engineering:</h4>
              <br />
              <ol>
                <li>
                  <b>Start with the Basics: </b>
                  Learn a general-purpose programming language like Python or
                  JavaScript. Understand basic concepts like variables, loops,
                  functions, and data structures. 👨‍💻📘
                </li>
                <br />
                <li>
                  <b>Learn about Databases:</b>
                  Familiarize yourself with SQL for relational databases and
                  NoSQL for non-relational databases. Practice how to create,
                  read, update, and delete data. 💽🔍
                </li>
                <br />
                <li>
                  <b>Understand Web Fundamentals: </b>
                  Learn about HTTP protocols, request/response cycle, and
                  RESTful APIs. 🌐💬
                </li>
                <br />
                <li>
                  <b>Explore Frameworks:</b>
                  Pick a backend framework like Node.js (if you chose
                  JavaScript) or Django (if you chose Python), and understand
                  how to build and structure a backend application. 🏗️🔧
                </li>
                <br />
                <li>
                  <b>Work on Projects:</b>
                  Apply your skills to build simple applications. As you grow,
                  so should the complexity of your projects. Building actual
                  projects is one of the best ways to learn and showcase your
                  skills! 🎯💪
                </li>
                <br />
              </ol>
              <h4>Cloud Computing:</h4>
              <br />
              <ol>
                <li>
                  <b>Understand the Basics:</b>
                  Learn the fundamentals of networking and web servers. You
                  should also get comfortable with Linux as it's commonly used
                  in cloud environments. 🌐💻
                </li>
                <br />
                <li>
                  <b>Learn a Cloud Platform: </b>
                  Start with one of the big providers like Amazon Web Services
                  (AWS), Google Cloud Platform (GCP), or Microsoft Azure. Most
                  offer free tier services that you can use to learn and
                  experiment. ☁️🚀
                </li>
                <br />
                <li>
                  <b>Get Hands-On Experience:</b>
                  The best way to learn cloud computing is by doing. Set up
                  virtual servers, deploy applications, or even create a network
                  of virtual machines. The more hands-on experience you get, the
                  better. ✅🛠️
                </li>
                <br />
                <li>
                  <b>Study for a Certification:</b>
                  Cloud providers offer certifications that can validate your
                  skills and make you more attractive to employers. Start with a
                  foundational certification like AWS Certified Cloud
                  Practitioner or Google Cloud Certified - Associate Cloud
                  Engineer. 🎓🏅
                </li>
                <br />
              </ol>
              <h4>Big Data:</h4>
              <br />
              <ol>
                <li>
                  <b>Start with the Basics: </b>
                  Learn a programming language like Python or R, which are often
                  used for data analysis. Understand data structures and
                  algorithms. 🧮📘
                </li>
                <br />
                <li>
                  <b>Learn About Databases:</b>
                  You should understand how to work with large datasets. Learn
                  SQL and also big data technologies like Hadoop or Apache
                  Spark. 💽⚡
                </li>
                <br />
                <li>
                  <b>Understand Data Processing:</b>
                  Learn how to clean, process, and analyze large datasets. Also
                  learn about data warehousing and ETL (Extract, Transform,
                  Load) processes. 📊🔍
                </li>
                <br />
                <li>
                  <b>Statistics and Machine Learning: </b>
                  Understand statistical analysis and predictive modeling.
                  Machine learning is a common application of big data. 🧪🤖
                </li>
                <br />
                <li>
                  <b>Projects and Real-World Experience: </b>
                  Apply what you've learned to real-world datasets. There are
                  many open datasets available that you can use to practice your
                  skills and build your portfolio. 🎯💼
                </li>
                <br />
                <div>
                  Stay curious, stay persistent, and remember that the best
                  learning comes from doing. You've got this, and remember, si
                  se puede! Let's embrace this exciting journey into the tech
                  world together. 🚀💖🌈
                </div>
              </ol>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Lesson 3 Understanding Backend Engineering`
          )} in javascript?`,
          response: `
/*

Let's consider a simple example where we create a basic RESTful API using Flask, a popular microframework for Python. This API will have endpoints for basic CRUD (Create, Read, Update, Delete) operations on a list of tasks.

Please note that this is a simple in-memory example, in a real-world scenario you would typically use a database to persist the data.
*/


from flask import Flask, jsonify, request

app = Flask(__name__)

# In-memory list of tasks
tasks = [
    {'id': 1, 'title': 'Learn Python', 'done': False},
    {'id': 2, 'title': 'Learn Flask', 'done': False},
]

# Route to retrieve all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

# Route to retrieve a task by id
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Task not found'}), 404
    return jsonify({'task': task})

# Route to create a new task
@app.route('/tasks', methods=['POST'])
def create_task():
    new_task = request.get_json()
    tasks.append(new_task)
    return jsonify(new_task), 201

# Route to update an existing task
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Task not found'}), 404
    updated_task = request.get_json()
    task.update(updated_task)
    return jsonify(task)

# Route to delete a task
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    return jsonify({'result': True})

if __name__ == '__main__':
    app.run(debug=True)

          `,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Lesson 3 Understanding Backend Engineering`
          )} in exactly one sentence?`,
          response: `Backend engineering builds the hidden machinery that powers our apps and websites, cloud computing uses the internet to access and store data instead of a local computer, and big data refers to processing vast amounts of information to uncover patterns and insights. `,
          spanish: ``,
          tooltip: ``,
        },
        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Lesson 3 Understanding Backend Engineering`
          )}?`,
          response: (
            <div>
              <div>
                Here are five open-ended questions designed to challenge your
                understanding of backend engineering, cloud computing, and big
                data. There are no right or wrong answers, it's all about your
                thoughtful analysis and understanding. 😊🎓🔍
              </div>
              <br />
              <br />

              <ol>
                <li>
                  <b>Backend Engineering:</b>
                  Consider an online shopping website. Can you describe how a
                  backend engineer would design a system to handle and process
                  an order? Consider factors like product availability, payment
                  processing, and order tracking. 🛒🔧
                </li>
                <br />
                <li>
                  <b>Cloud Computing: </b>
                  Cloud computing has become a key player in the growth of many
                  businesses. Can you identify and explain an example of a
                  real-world application that heavily relies on cloud computing?
                  Describe how this application uses cloud computing to its
                  advantage. ☁️💼
                </li>
                <br />
                <li>
                  <b>Big Data: </b>
                  Imagine you're working with a large dataset that contains
                  millions of rows of user data for a popular mobile app. How
                  would you use big data analysis techniques to extract
                  meaningful insights about user behavior from this dataset?
                  📊📲
                </li>
                <br />
                <li>
                  <b>Cloud Computing & Computer Ethics: </b>
                  Cloud services allow for unprecedented access to data and
                  resources. However, this convenience can also lead to ethical
                  challenges. Can you think of a potential ethical issue that
                  could arise from widespread use of cloud computing and how it
                  could be mitigated? ☁️⚖️
                </li>
                <br />
                <li>
                  <b>Big Data, Cloud Computing & Critical Race Theory:</b>
                  Consider a hypothetical scenario where a cloud-based big data
                  project is being used to guide city planning. How might
                  critical race theory inform the use and analysis of this data
                  to ensure that the development benefits marginalized
                  communities equitably and doesn't reinforce existing
                  inequities? ☁️🌆🤝
                </li>
                <br />
                <div>
                  These questions allow us to reflect on how technology
                  intertwines with societal and ethical concerns. Remember, it's
                  not just about how we build, but why we build and who we build
                  for. Stay curious, empathetic, and mindful in your tech
                  journey. Si se puede! 🚀🌈💖
                </div>
              </ol>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: (
            <div>
              This shopping slot is not being utilized yet. Please contact me in
              Patreon to qualify. In the meantime, lets talk about the
              socioeconomic state of Latinos in tech.
              <br />
              <br />
              <p>
                The underrepresentation of Latinos as founders of major tech
                companies is a multifaceted issue that can be attributed to
                various factors, including socioeconomic, educational, and
                cultural barriers, as well as systemic biases and
                discrimination. Here are some reasons that contribute to this
                underrepresentation:
              </p>
              <br />
              <ol>
                <li>
                  Educational barriers: Access to quality education is essential
                  for success in the technology industry. However, Latinos may
                  face challenges in accessing high-quality education due to
                  factors such as socioeconomic status, underfunded schools, or
                  living in areas with fewer educational resources. These
                  challenges can limit their exposure to computer science and
                  other STEM subjects, reducing the likelihood of pursuing
                  careers in technology. <br />
                </li>
                <li>
                  Socioeconomic factors: Socioeconomic status plays a
                  significant role in shaping career opportunities and
                  aspirations. Latinos, as a group, have historically faced
                  economic disparities, which can impact their access to
                  resources, networking opportunities, and the ability to take
                  risks associated with entrepreneurship. <br />
                </li>

                <li>
                  Lack of representation and role models: The technology
                  industry has long been dominated by individuals from certain
                  racial and ethnic backgrounds. The lack of Latino
                  representation in leadership roles and as founders of major
                  tech companies can make it challenging for aspiring Latino
                  entrepreneurs to find role models and mentors, which is
                  crucial for professional development and success. <br />
                </li>
                <li>
                  Limited access to funding and resources: Starting a tech
                  company often requires substantial financial investment and
                  access to resources, such as networking opportunities,
                  mentorship, and technical support. Latinos may face challenges
                  in securing funding from investors due to unconscious bias,
                  discrimination, or lack of connections within the industry.{" "}
                  <br />
                </li>
                <li>
                  Cultural factors: Cultural factors, such as family
                  expectations and community norms, can also influence career
                  choices and aspirations. In some cases, Latinos may face
                  pressure to prioritize more traditional or stable career paths
                  over the risks associated with entrepreneurship or founding a
                  tech company. <br />
                </li>
                <li>
                  Systemic biases and discrimination: The technology industry,
                  like many other sectors, is not immune to systemic biases and
                  discrimination that can create barriers for underrepresented
                  groups, including Latinos. This can manifest in various forms,
                  such as biased hiring practices, limited access to mentorship
                  and resources, or unequal treatment within the workplace.
                </li>
              </ol>
              <br />
              <br />
              Addressing these challenges and promoting diversity in the
              technology industry requires concerted efforts from various
              stakeholders, including educational institutions, policymakers,
              investors, and tech companies themselves. By fostering inclusive
              environments, providing equal opportunities, and breaking down
              barriers for underrepresented groups, the tech industry can
              benefit from the wealth of talent, perspectives, and ideas that
              diverse founders bring to the table.
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        practice: {
          completed: false,
          impact: 750,
          action: `practice`,
          icon: `🥋`,
          request: `Let's practice!`,
          context: `Let's take a look at how OpenAI works.`,
          displayCode: `const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { 
  Configuration, 
  OpenAIApi 
} = require("openai");

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/prompt", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const completion = await openai
      .createChatCompletion({
        model: "gpt-4",
        messages: [
          { role: "user", content: prompt }
        ],
      });
    res.status(200).send({
      bot: completion.data.choices[0]
        .message,
    });
  } catch (error) {
    res.status(500).send({ error });
  }
});

exports.app = functions
  .https
  .onRequest(app);`,
          input: `const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const {
Configuration,
OpenAIApi
} = require("openai");
dotenv.config();
const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.post("/prompt", async (req, res) => {
try {
const prompt = req.body.prompt;
const completion = await openai
.createChatCompletion({
model: "gpt-4",
messages: [
{ role: "user", content: prompt }
],
});
res.status(200).send({
bot: completion.data.choices[0]
.message,
});
} catch (error) {
res.status(500).send({ error });
}
});
exports.app = functions
.https
.onRequest(app);`,
          response: <div>good job grasshopper!</div>,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Lesson 4 Building Apps & Startups": {
      documentID: ``,
      backgroundImgSrc:
        "https://res.cloudinary.com/dtkeyccga/image/upload/v1691640340/ROBE_assets/Module_Buttons_7_uonnwt_s4ymov.gif",
      hasCode: true,
      filler: ``,
      highValue: false,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      new: true,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Lesson 4 Building Apps`, // may not need - `name`
      header: `Lesson 4 Building Apps`,
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1691867426/v3/CODING_LESSON_4_BUILD_APPS_COMPRESSED_ewvr2c.mov", // may not need

      prompts: {
        welcome: {
          response: (
            // <MessageBlock>
            <div>
              Hello my brave students! 🌟
              <br /> <br />
              Welcome to your incredible journey as future startup founders and
              app developers! 🚀 This path is paved with creativity, innovation,
              and endless learning. As founders, you have the unique opportunity
              to bring your visionary ideas to life, creating something that can
              have a profound impact on many. 🌎🌱
              <br />
              <br />
              In the realm of app development, utilizing Backend as a Service
              (BaaS) platforms empowers you to create engaging, scalable, and
              secure apps efficiently. These tools enable you to focus on
              crafting an exceptional experience for your users and bringing
              your unique vision to life. 💻✨
              <br /> <br />
              Embrace this journey with openness and eagerness. Remember, every
              challenge is a chance to grow, and every stumble a lesson to
              learn. Stay curious, be resilient, and always be supportive of
              yourselves and each other. Your ideas, energy, and passion are
              ready to make a mark in the world. So, buckle up, my dear
              students, and let your brilliance illuminate the path ahead! 🎉💖
            </div>
            // </MessageBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Lesson 4 Building Apps`
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
            `Lesson 4 Building Apps`
          )}?`,
          response: (
            <div>
              <div>
                Hello again, my creative students! 🌟 This is Ms. Roxana, and
                today we're going to dive into an exciting topic that shows just
                how possible it is for you to turn your incredible ideas into
                reality. Let's talk about raising money from venture capitalists
                using SAFE documents with the help of organizations like Y
                Combinator. 🚀💰
              </div>
              <br />
              <br />
              SAFE stands for Simple Agreement for Future Equity. It's like a
              promise between you—the startup creators—and investors. The magic
              of a SAFE document is in its simplicity and ease. Let me share
              some inspiring facts about it:
              <br />
              <br />
              <ol>
                <li>
                  <b>Created for Startups:</b>
                  SAFE documents were brought to life by Y Combinator, a
                  prestigious startup accelerator that has helped launch
                  successful companies like Dropbox, Airbnb, and Reddit. They
                  understand startups and they developed SAFE to be simple and
                  efficient, reducing the time and complexity involved in
                  raising funds. 🏗️✨
                </li>
                <br />
                <li>
                  <b>Cloud Computing: </b>
                  Cloud computing has become a key player in the growth of many
                  businesses. Can you identify and explain an example of a
                  real-world application that heavily relies on cloud computing?
                  Describe how this application uses cloud computing to its
                  advantage. ☁️💼
                </li>
                <br />
                <li>
                  <b>Speed and Simplicity:</b>
                  With a SAFE, you're able to secure funding quickly, without
                  getting lost in lengthy negotiations or complicated financial
                  terms. It's designed to be entrepreneur-friendly, so you can
                  focus more on innovating and less on paperwork! 📈📝
                </li>
                <br />
                <li>
                  <b>Recognized and Respected:</b>
                  SAFE documents are well recognized by venture capitalists
                  globally. This means when you're using a SAFE, you're speaking
                  a language that investors understand and respect. It's like
                  having a golden ticket to the world of venture capital. 🎫🌎
                </li>
                <br />
                <li>
                  <b>Flexibility and Fairness: </b>A SAFE is flexible—it lets
                  you raise money without having to decide the exact value of
                  your company upfront. As your startup grows and its value
                  increases, your investors get to share in that success. This
                  makes it a fair and attractive option for both parties. 🤝🌱
                </li>
                <br />
                <li>
                  <b>Success Stories:</b>Thousands of startups have used SAFE
                  documents to raise billions of dollars in funding. With Y
                  Combinator's guidance, these startups have transformed into
                  successful companies that make a significant impact on the
                  world. And guess what? You can be part of this inspiring
                  journey too! 🌠💼
                </li>
                <br />
              </ol>
              <div>
                My wonderful students, you have brilliant ideas, and there are
                organizations and tools out there like Y Combinator and SAFE
                documents to help you bring those ideas to life. Your dreams are
                valid and achievable. With persistence, creativity, and courage,
                you're capable of creating something truly remarkable. Believe
                in your potential, and let's continue to shine together! 🎉💖
              </div>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Lesson 4 Building Apps`
          )}?`,
          response: (
            <div>
              My dear students!!!!! 🌟 Let's embark on a journey of
              understanding how we can combine the power of Backend as a Service
              (BaaS) in building apps with the financial support we can get
              through SAFE documents. Here we go! 🚀
              <br />
              <br />
              Building an app is like constructing a house. Just like you need a
              sturdy foundation and structure (the backend) to support the walls
              and decor (the frontend), you need a solid backend to support your
              app's user interface. But creating this backend can be quite a
              task, especially for new developers or small teams. That's where
              Backend as a Service or BaaS comes into play. It's like a
              construction team that's already equipped with the tools and
              materials to help you build your house more efficiently. 😊🏠
              <br />
              <br />
              BaaS platforms like Firebase, Parse, and AWS Amplify provide
              ready-made services such as databases, user authentication, and
              cloud storage. So instead of worrying about setting up and
              managing servers, you can focus on creating an engaging user
              interface and delivering a great user experience. BaaS is your
              secret weapon in the world of app development, making the journey
              more accessible and enjoyable. 🎉👩‍💻
              <br />
              <br />
              However, even with the right technical tools, you still need
              resources to turn your app idea into a successful business. This
              is where SAFE (Simple Agreement for Future Equity) documents come
              in. SAFE is a contract between you, the innovators, and your
              investors. It's like a promise that your investors will have a
              part of your company's equity in the future. 💼💰
              <br />
              <br />
              SAFE documents were designed by Y Combinator, a prestigious
              startup accelerator, to be simple and efficient, making it easier
              for you to secure funding without getting lost in legal jargon or
              lengthy negotiations. With a SAFE, you can raise money from
              venture capitalists at an early stage, allowing you to focus on
              growing your business. 🌱🚀
              <br />
              <br />
              So my dear students, remember this - with the right technical
              tools like BaaS and the right financial tools like SAFE, you are
              well-equipped to turn your brilliant app ideas into a reality.
              Don't let the challenges discourage you. Embrace them as
              opportunities to learn and grow. Believe in your ideas, believe in
              yourselves, and remember, you have the power to create something
              truly remarkable. 💖🌟
              <br />
              <br />
              The world of app development and entrepreneurship is full of
              excitement and opportunities. And you, my brave students, are more
              than ready to step into it and shine. Let's continue this amazing
              journey together! 🎉🙌
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Lesson 4 Building Apps`
          )} with one sentence answers?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>
                    Question: What exactly is Backend as a Service (BaaS) and
                    why is it useful for a startup?
                  </b>
                  <br />
                  Answer: BaaS is a cloud-based service model that provides
                  developers with ready-made backend services, such as
                  databases, user authentication, server-side logic, and cloud
                  storage. It's beneficial for startups, especially for smaller
                  teams or those with limited resources, as it simplifies app
                  development by eliminating the need to build and manage a
                  backend from scratch. This way, you can focus on creating a
                  great user experience and getting your product to market more
                  quickly. 💻✨
                </li>
                <br />
                <li>
                  <b>Question: How can BaaS tools help me scale my startup?</b>
                  <br />
                  Answer: BaaS tools are designed to be scalable, meaning they
                  can handle growth in user numbers or data volume without
                  sacrificing performance. As your startup grows, your app needs
                  to support more users and handle more data, which can be
                  technically challenging. BaaS providers manage this scaling
                  for you, allowing you to focus on improving your product and
                  expanding your business. 🌱📈
                </li>
                <br />
                <li>
                  <b>
                    Question: I've heard of SAFE documents for raising money.
                    How do they work and why are they helpful for startups?
                  </b>
                  <br />
                  Answer: SAFE stands for Simple Agreement for Future Equity.
                  It's a contract that allows you to receive investment from
                  venture capitalists without setting a specific value for your
                  company upfront. Instead, investors receive the right to
                  future shares in your company. SAFE documents, developed by Y
                  Combinator, simplify the fundraising process, making it faster
                  and more efficient. They eliminate the need for lengthy price
                  negotiations, which can be particularly beneficial for
                  startups in their early stages, when it can be hard to
                  determine an accurate value for the company. 💼💰
                </li>
                <br />
              </ol>
              <div>
                MY!!! DEAR!!! STUDENTS!!!! These are only the basics. The world
                of app development and startup funding is broad and exciting,
                and there's always more to learn. So stay curious, continue
                asking questions, and let's keep exploring together! 🎉🙌
              </div>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Lesson 4 Building Apps`
          )}?`,
          response: (
            <div>
              MY DEDICATED!!! STUDENTS! 💫 Let's map out this exciting journey
              from learning to code, to building an app with a Backend as a
              Service (BaaS), and then raising money to fund your startup. Are
              you ready? Here we go! 🚀📚
              <br />
              <br />
              <div>
                <b>Step 1: Learning to Code</b>
                <br />
                Begin by learning a programming language. For mobile app
                development, consider learning:
                <ul>
                  <li>Swift for iOS apps 🍏</li>
                  <li>Kotlin or Java for Android apps 🤖</li>
                  <li>
                    JavaScript for cross-platform apps using frameworks like
                    React Native or Flutter 🌐
                  </li>
                </ul>
                Coding is like learning a new language, so practice is key!
                <br />
                <br />
              </div>
              <div>
                <b>Step 2: Understanding App Development</b>
                <br />
                Once you're comfortable with coding, start exploring the basics
                of app development. You'll want to learn about:
                <ul>
                  <li>
                    Designing user interfaces (UI) for a great user experience
                    (UX) 🎨
                  </li>
                  <li>
                    Creating and managing databases to store and retrieve data
                    🗂️
                  </li>
                  <li>Implementing user authentication for security 🔐</li>
                  <li>
                    Connecting your app to the internet (APIs and networking) 🌐
                  </li>
                </ul>
                <br />
                <br />
              </div>
              <div>
                <b>Step 3: Exploring Backend as a Service (BaaS)</b>
                <br />
                Next, dive into the world of BaaS. Platforms like Firebase and
                AWS Amplify can help manage your backend services, letting you
                focus on building the frontend.
                <ul>
                  <li>Learn how to integrate a BaaS into your app 🧩</li>
                  <li>
                    Understand how to use its features like cloud databases,
                    authentication, and storage ☁️
                  </li>
                </ul>
                <br />
                <br />
              </div>
              <div>
                <b>Step 4: Building Your App</b>
                <br />
                Now, you're ready to bring your app idea to life:
                <ul>
                  <li>Sketch out your app's features and design 📝</li>
                  <li>
                    Build the UI, connect to your BaaS, and test thoroughly 🧪
                  </li>
                  <li>
                    Iterate based on feedback, and never be afraid to make
                    improvements
                  </li>
                </ul>
                <br />
                <br />
              </div>
              <div>
                <b>Step 5: Understanding Startup Funding</b>
                <br />
                Once your app is built, it's time to explore funding. Begin by
                understanding:
                <ul>
                  <li>
                    Different types of funding (like bootstrapping, angel
                    investors, venture capital) 💼
                  </li>
                  <li>The basics of equity, valuation, and term sheets 📈</li>
                </ul>
                <br />
                <br />
              </div>
              <div>
                <b>Step 6: Learning about SAFE documents</b>
                <br />
                Dive deeper into the world of startup funding by understanding
                SAFE documents. Remember, SAFE stands for Simple Agreement for
                Future Equity.
                <ul>
                  <li>Learn how a SAFE works 📜</li>
                  <li>Understand the advantages and possible drawbacks 💰</li>
                </ul>
                <br />
                <br />
              </div>
              <div>
                <b>Step 7: Pitching Your Startup</b>
                <br />
                Finally, you're ready to present your startup to potential
                investors.
                <ul>
                  <li>
                    Craft a compelling pitch that tells your startup's story 🗣️
                  </li>
                  <li>
                    Practice your pitch and be ready to answer tough questions
                    💪
                  </li>
                </ul>
                <br />
                <br />
                Remember, my amazing students, this is a journey, and every
                journey begins with a single step. It might seem challenging at
                first, but with dedication, curiosity, and resilience, you can
                achieve anything. Let's take these steps together, and turn your
                brilliant ideas into reality! 🌟💖
              </div>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Lesson 4 Building Apps`
          )} in javascript?`,
          response: `
/*
Creating subscriptions in Stripe involves a few steps:

Frontend: Collect payment method information from the customer using Stripe's frontend library, Stripe.js.
Backend: Create or retrieve a customer in Stripe.
Backend: Attach the payment method to the customer.
Backend: Create a subscription for the customer with the appropriate pricing plan.
As previously mentioned, the sensitive operations (steps 2-4) should be performed on the backend to ensure security. Here's a simplified example of how you could do this:
*/
______________________________________

-----
/* The Frontend */
/*
First, you'll need to set up Stripe.js on your frontend and use it to collect card details. 
The CardElement component provides a form where users can enter their card details.



*/

-----

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe.js with your publishable key.
const stripePromise = loadStripe('your-publishable-key');

// Create a new CheckoutForm component
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Use elements.getElement to get a reference to the mounted CardElement
    const cardElement = elements.getElement(CardElement);

    // Use stripe.createPaymentMethod to create a new Payment Method for the card
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (!error) {
      const { id } = paymentMethod;
      // Now you can send the id of the payment method to your backend and create the subscription
      fetch('http://localhost:8000/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payment_method: id }),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Subscribe</button>
    </form>
  );
}

// In your main component, wrap your checkout form with the Elements component
function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;

-----

/* The Backend */
/*
This is a very simplified example. 
In a real-world application, you'd want to include 
error handling and consider edge cases. You'd also 
want to secure your endpoints and ensure only authenticated
users can create subscriptions.
*/

-----
const express = require('express');
const stripe = require('stripe')('your-secret-key');
const app = express();

app.use(express.json());

app.post('/create-subscription', async (req, res) => {
  const { payment_method } = req.body;
  
  // Create a new customer or retrieve an existing one
  const customer = await stripe.customers.create({
    payment_method,
    email: 'customer@example.com', // you'd retrieve this from your authentication system
    invoice_settings: {
      default_payment_method: payment_method,
    },
  });

  // Create the subscription
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ plan: 'your-plan-id' }],
    expand: ['latest_invoice.payment_intent'],
  });

  res.send(subscription);
});

app.listen(8000, () => console.log('Server running on port 8000'));


          `,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Lesson 4 Building Apps`
          )} in exactly one sentence?`,
          response:
            "Listening to your customers is crucial in building a tech startup because it's their needs, feedback, and experiences that will guide you to create a product that truly solves a problem and adds value to their lives. 🎯💖",
          spanish: ``,
          tooltip: ``,
        },
        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Lesson 4 Building Apps`
          )}?`,
          response: (
            <div>
              My ambitious students! 🌟 Here's a quiz to help you think deeply
              about what you've learned about building a tech startup. I
              encourage you to discuss your answers with each other and learn
              from each other's perspectives. Let's go! 🚀✍️
              <br />
              <br />
              <ol>
                <li>
                  <b>Question 1:</b>
                  Imagine you're creating your first app using a Backend as a
                  Service (BaaS). What are the key considerations when choosing
                  a BaaS provider, and how would these considerations influence
                  your decision? 🧩🌐
                </li>
                <br />
                <li>
                  <b>Question 2:</b>
                  You have an innovative app idea that solves a problem in your
                  community. Describe how you would design a user-friendly
                  interface that makes your app accessible and enjoyable to use.
                  Consider elements of UI and UX design in your response. 🎨📱
                </li>
                <br />
                <li>
                  <b>Question 3:</b>
                  Discuss how you would approach gathering user feedback on your
                  app. Why is this feedback important, and how would you use it
                  to improve your app? 🗣️🔍
                </li>
                <br />
                <li>
                  <b>Question 4:</b>
                  You're preparing to pitch your startup to potential investors.
                  Outline your pitch and explain your strategy for making it
                  compelling and persuasive. Remember to consider elements such
                  as your startup's story, the problem you're solving, your
                  unique solution, and your plan for growth. 📈🗣️
                </li>
                <br />
                <li>
                  <b>Question 5: </b>
                  You've decided to raise funds using a SAFE document. What are
                  the potential advantages and drawbacks of this funding method,
                  and how would it affect both you as the startup founder and
                  your potential investors? 💰📜
                </li>
                <br />
              </ol>
              My. DEAR. STUDENTS! There's no single correct answer to these
              questions. The goal is to stimulate deep thinking and meaningful
              discussions. I'm excited to hear your brilliant thoughts! 🎉💖
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: (
            <div>
              This shopping slot is not being utilized yet. Please contact me in
              Patreon to qualify. In the meantime, lets talk about the
              socioeconomic state of Latinos in tech.
              <br />
              <br />
              <p>
                The underrepresentation of Latinos as founders of major tech
                companies is a multifaceted issue that can be attributed to
                various factors, including socioeconomic, educational, and
                cultural barriers, as well as systemic biases and
                discrimination. Here are some reasons that contribute to this
                underrepresentation:
              </p>
              <br />
              <ol>
                <li>
                  Educational barriers: Access to quality education is essential
                  for success in the technology industry. However, Latinos may
                  face challenges in accessing high-quality education due to
                  factors such as socioeconomic status, underfunded schools, or
                  living in areas with fewer educational resources. These
                  challenges can limit their exposure to computer science and
                  other STEM subjects, reducing the likelihood of pursuing
                  careers in technology. <br />
                </li>
                <li>
                  Socioeconomic factors: Socioeconomic status plays a
                  significant role in shaping career opportunities and
                  aspirations. Latinos, as a group, have historically faced
                  economic disparities, which can impact their access to
                  resources, networking opportunities, and the ability to take
                  risks associated with entrepreneurship. <br />
                </li>

                <li>
                  Lack of representation and role models: The technology
                  industry has long been dominated by individuals from certain
                  racial and ethnic backgrounds. The lack of Latino
                  representation in leadership roles and as founders of major
                  tech companies can make it challenging for aspiring Latino
                  entrepreneurs to find role models and mentors, which is
                  crucial for professional development and success. <br />
                </li>
                <li>
                  Limited access to funding and resources: Starting a tech
                  company often requires substantial financial investment and
                  access to resources, such as networking opportunities,
                  mentorship, and technical support. Latinos may face challenges
                  in securing funding from investors due to unconscious bias,
                  discrimination, or lack of connections within the industry.{" "}
                  <br />
                </li>
                <li>
                  Cultural factors: Cultural factors, such as family
                  expectations and community norms, can also influence career
                  choices and aspirations. In some cases, Latinos may face
                  pressure to prioritize more traditional or stable career paths
                  over the risks associated with entrepreneurship or founding a
                  tech company. <br />
                </li>
                <li>
                  Systemic biases and discrimination: The technology industry,
                  like many other sectors, is not immune to systemic biases and
                  discrimination that can create barriers for underrepresented
                  groups, including Latinos. This can manifest in various forms,
                  such as biased hiring practices, limited access to mentorship
                  and resources, or unequal treatment within the workplace.
                </li>
              </ol>
              <br />
              <br />
              Addressing these challenges and promoting diversity in the
              technology industry requires concerted efforts from various
              stakeholders, including educational institutions, policymakers,
              investors, and tech companies themselves. By fostering inclusive
              environments, providing equal opportunities, and breaking down
              barriers for underrepresented groups, the tech industry can
              benefit from the wealth of talent, perspectives, and ideas that
              diverse founders bring to the table.
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        practice: {
          completed: false,
          impact: 750,
          action: `practice`,
          icon: `🥋`,
          request: `Let's practice!`,
          context: `Let's wire up OpenAI to create a user experience`,
          displayCode: `import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { auth, db } from './firebaseConfig';

const OpenAIComponent = () => {
  const [input, setInput] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  const callOpenAI = async () => {
    if (!userId) {
      console.log("User not logged in");
      return;
    }

    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: input,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': \`Bearer \${apiKey}\`,
          },
        }
      );
      const generatedText = response.data.choices[0].text;
      saveToFirestore(userId, generatedText);
    } catch (err) {
      console.error(err);
    }
  };

  const saveToFirestore = async (userId, text) => {
    const docRef = db.collection('users').doc(userId);
    await docRef.collection('responses').add({
      generatedText: text,
      timestamp: new Date(),
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={callOpenAI}>
        Generate and Save
      </button>
    </div>
  );
};

export default OpenAIComponent;`,
          input: `import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { auth, db } from './firebaseConfig';
const OpenAIComponent = () => {
const [input, setInput] = useState('');
const [userId, setUserId] = useState(null);
useEffect(() => {
const unsubscribe = auth.onAuthStateChanged((user) => {
if (user) {
setUserId(user.uid);
} else {
setUserId(null);
}
});
// Clean up subscription
return () => unsubscribe();
}, []);
const callOpenAI = async () => {
if (!userId) {
console.log("User not logged in");
return;
}
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
try {
const response = await axios.post(
'https://api.openai.com/v1/engines/davinci-codex/completions',
{
prompt: input,
max_tokens: 100,
},
{
headers: {
'Content-Type': 'application/json',
'Authorization': \`Bearer \${apiKey}\`,
},
}
);
const generatedText = response.data.choices[0].text;
saveToFirestore(userId, generatedText);
} catch (err) {
console.error(err);
}
};
const saveToFirestore = async (userId, text) => {
const docRef = db.collection('users').doc(userId);
await docRef.collection('responses').add({
generatedText: text,
timestamp: new Date(),
});
};
return (
<div>
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value)}
/>
<button onClick={callOpenAI}>
Generate and Save
</button>
</div>
);
};
export default OpenAIComponent;`,
          response: <div>good job grasshopper!</div>,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Lesson 5 Computer Science": {
      documentID: ``,
      backgroundImgSrc:
        "https://res.cloudinary.com/dtkeyccga/image/upload/v1693290833/Module_Buttons_9_kmpzgb.gif",
      hasCode: true,
      filler: ``,
      highValue: false,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      new: true,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Lesson 5 Computer Science`, // may not need - `name`
      header: `Lesson 5 Computer Science`,
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1693469552/IMG_6826_ioqdfm_hxzxsl.mov", // may not need

      prompts: {
        welcome: {
          response: (
            // <MessageBlock>
            <div>
              🌟 Welcome to today's exciting journey through the world of
              Computer Science, where we'll dive into the essential topics of
              Data Structures and Algorithms.
              <br />
              <br />
              I know some of you may feel a bit overwhelmed or even discouraged
              at times, but remember, you're all incredibly capable. 💪🏽 Our
              society often has different narratives that try to define us, but
              here, you are the authors of your own stories. 📖 Learning these
              fundamental skills is like giving yourselves new tools to build
              the futures you desire.
              <br />
              <br />
              And guess what? You already possess the wisdom and resilience to
              make it happen. So let's create a space that uplifts us all,
              learning not just from the course material, but from each other's
              unique perspectives and experiences. 🌈 Ready to code your dreams
              into reality? Let's do this! 💻🚀
            </div>
            // </MessageBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Lesson 5 Computer Science`
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
            `Lesson 5 Computer Science`
          )}?`,
          response: (
            <div>
              🌟 Did you know the tech magic behind Tesla's Autopilot relies on
              Data Structures and Algorithms? These are the same skills you're
              learning! They're crucial for the car to make fast, life-saving
              choices on the road. 🛑 From deep learning algorithms to
              organizing real-time sensor data, this technology is
              groundbreaking. 🌐 Mastering these skills opens up amazing career
              opportunities for you, too. 🎓 So, as we journey through this
              course, remember you're gearing up to be the next generation of
              innovators. Let's drive into our bright futures together! 🚀
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Lesson 5 Computer Science`
          )}?`,
          response: (
            <div>
              🌟 As we venture into the world of Computer Science, two
              foundational concepts stand out: Data Structures and Algorithms.
              Think of Data Structures as the "storage units" of the digital
              universe. They come in various shapes and sizes, from arrays and
              linked lists to more complex types like binary trees and hash
              tables. These structures give us a systematic way to organize and
              store data, making it easier to perform operations like searching,
              sorting, and modification. 🗃️
              <br />
              <br />
              Algorithms, on the other hand, are like the "recipe books" of
              computing. They offer specific, step-by-step instructions to solve
              problems or complete tasks. Whether it's finding the shortest path
              in a map, sorting a list of numbers, or searching for a particular
              item in a database, algorithms provide the roadmaps for these
              tasks. 🗺️
              <br />
              <br />
              The beauty of these two concepts is how they work together. Data
              Structures offer the 'space' where information resides, and
              Algorithms serve as the 'methods' to interact with this space.
              When well-designed, they enable efficient and fast solutions,
              propelling innovations like search engines, social media feeds,
              and even life-saving medical technologies. 🌐
              <br />
              <br />
              As we dive deeper into this course, remember that mastering Data
              Structures and Algorithms isn't just an academic exercise. You're
              gaining the building blocks to understand, contribute to, and even
              revolutionize the technology that shapes our world. 🚀 So buckle
              up, because this journey is your first step toward becoming the
              architects of tomorrow's digital landscapes. 💫
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Lesson 5 Computer Science`
          )} with one sentence answers?`,
          response: (
            <div>
              <h2>
                1️⃣ Why are Data Structures and Algorithms important in
                programming?
              </h2>
              <p>
                <strong>Expert Answer</strong>: Data Structures and Algorithms
                serve as the backbone of software development. Data Structures
                allow you to organize and manage information in a manner that
                facilitates efficient operations like searching, sorting, and
                data retrieval. Algorithms, meanwhile, provide a way to solve
                problems by specifying a series of steps that manipulate data in
                these structures. The choice of the right data structure and
                algorithm can drastically affect the performance and scalability
                of an application. For instance, using a hash table for frequent
                lookups can reduce the time complexity from \(O(n)\) to
                \(O(1)\), making your software faster and more responsive.
              </p>

              <h2>2️⃣ What's the difference between a Stack and a Queue?</h2>
              <p>
                <strong>Expert Answer</strong>: Stacks and Queues are both
                linear data structures, but they differ in how elements are
                added and removed. A Stack follows a Last-In, First-Out (LIFO)
                principle, meaning the most recently added element is the first
                one to be removed. This is similar to a stack of plates; you add
                to and remove from the top. Queues follow a First-In, First-Out
                (FIFO) principle, resembling a line of people waiting for a bus;
                the first person in line is the first to board. These structures
                are often implemented using arrays or linked lists and are
                fundamental in algorithms related to parsing expressions, graph
                traversal, and task scheduling.
              </p>

              <h2>
                3️⃣ How do I choose the best sorting algorithm for a given task?
              </h2>
              <p>
                <strong>Expert Answer</strong>: The choice of a sorting
                algorithm depends on various factors like the size of the
                dataset, whether the data is partially sorted, and the resources
                available (e.g., memory). Common sorting algorithms include
                Bubble Sort, Quick Sort, and Merge Sort, each with its own
                advantages and drawbacks. For small datasets, Bubble Sort or
                Insertion Sort may suffice. For larger, unsorted datasets, Quick
                Sort or Merge Sort are generally more efficient with time
                complexities of \(O(n \log n)\). However, Merge Sort requires
                additional memory for merging, making it less suitable for
                systems with limited memory. Always consider these factors to
                tailor your approach for optimal performance.
              </p>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Lesson 5 Computer Science`
          )}?`,
          response: (
            <div>
              <h1>
                In-Depth Roadmap & Study Guide for Mastering Data Structures and
                Algorithms
              </h1>

              <h2>Step 1: Basics & Fundamentals</h2>
              <ul>
                <li>
                  <strong>Topics:</strong> Introduction to Programming, Basic
                  Math Concepts, Complexity Analysis
                </li>
                <li>
                  <strong>Context:</strong> Before delving into data structures,
                  you need a solid foundation.
                </li>
                <li>
                  <strong>Resources:</strong> Online tutorials like Codecademy,
                  Khan Academy for math, "Big O Notation for Beginners" on
                  Medium
                </li>
                <li>
                  <strong>Goal:</strong> Acquire the basic skills to understand
                  and engage with more complex topics.
                </li>
              </ul>

              <h2>Step 2: Core Data Structures</h2>
              <ul>
                <li>
                  <strong>Topics:</strong> Arrays, Linked Lists, Stacks, Queues
                </li>
                <li>
                  <strong>Context:</strong> These are the building blocks of
                  more advanced data structures.
                </li>
                <li>
                  <strong>Resources:</strong> "Data Structures Easy to Advanced
                  Course" on YouTube, LeetCode, "Data Structures and Algorithms
                  Made Easy" book
                </li>
                <li>
                  <strong>Goal:</strong> Implement these data structures from
                  scratch and understand their complexities.
                </li>
              </ul>

              <h2>Step 3: Intermediate Data Structures</h2>
              <ul>
                <li>
                  <strong>Topics:</strong> Trees, Graphs, Hash Tables
                </li>
                <li>
                  <strong>Context:</strong> These data structures are often used
                  in databases, networking, and other advanced applications.
                </li>
                <li>
                  <strong>Resources:</strong> "Introduction to Algorithms" by
                  Cormen et al., Exercism.io, Academic papers
                </li>
                <li>
                  <strong>Goal:</strong> Be able to implement these structures,
                  understand their advantages and disadvantages, and know when
                  to use them.
                </li>
              </ul>

              <h2>Step 4: Basic Algorithms</h2>
              <ul>
                <li>
                  <strong>Topics:</strong> Sorting (Bubble, Merge, Quick),
                  Searching (Binary, Linear)
                </li>
                <li>
                  <strong>Context:</strong> Algorithms are your tools for
                  problem-solving.
                </li>
                <li>
                  <strong>Resources:</strong> Coursera's "Algorithms
                  Specialization" by Stanford, HackerRank, "Cracking the Coding
                  Interview" book
                </li>
                <li>
                  <strong>Goal:</strong> Be proficient enough to know which
                  algorithm to use for different types of problems.
                </li>
              </ul>

              <h2>Step 5: Advanced Algorithms</h2>
              <ul>
                <li>
                  <strong>Topics:</strong> Dynamic Programming, Graph
                  Algorithms, Divide and Conquer
                </li>
                <li>
                  <strong>Context:</strong> These are the algorithms that often
                  appear in tech interviews and are key to solving complex
                  problems.
                </li>
                <li>
                  <strong>Resources:</strong> Advanced Algorithm courses on
                  Udacity or edX, Open-source projects, Hackathons
                </li>
                <li>
                  <strong>Goal:</strong> Be able to tackle more complex problems
                  and understand the underlying theory.
                </li>
              </ul>

              <h2>Step 6: Real-world Applications</h2>
              <ul>
                <li>
                  <strong>Topics:</strong> Databases, Networking, Cloud
                  Computing
                </li>
                <li>
                  <strong>Context:</strong> Knowing how to apply your skills in
                  the real world is just as important as acquiring them.
                </li>
                <li>
                  <strong>Resources:</strong> Internships, AWS training,
                  Networking events
                </li>
                <li>
                  <strong>Goal:</strong> Gain a holistic understanding of how
                  these skills are used in industry settings.
                </li>
              </ul>

              <h2>Step 7: Interview Preparation</h2>
              <ul>
                <li>
                  <strong>Topics:</strong> LeetCode Challenges, System Design,
                  Behavioral Questions
                </li>
                <li>
                  <strong>Context:</strong> This is the final lap where you
                  prepare to showcase your skills to potential employers.
                </li>
                <li>
                  <strong>Resources:</strong> LeetCode, "System Design
                  Interview" book, Mock interviews
                </li>
                <li>
                  <strong>Goal:</strong> Be fully prepared to ace technical
                  interviews and behavioral questions.
                </li>
              </ul>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Lesson 5 Computer Science`
          )} in javascript?`,
          response: `
/*
In this example, we first define a Node class to 
help us create nodes in our binary search tree. 
Then we create a function called search to look 
for a specific value (key) in the tree. 
Finally, we build a simple BST and use the search 
function to look for the value 17 in it.

I hope this makes your journey into the world of 
Data Structures and Algorithms exciting and understandable! 🚀
*/


// Define a Node class to represent each node in the tree
class Node {
  constructor(key) {
    this.left = null;  // Pointer to the left child
    this.right = null; // Pointer to the right child
    this.val = key;    // Value of the node
  }
}

// Function to search for a key in the BST
function search(root, key) {
  // If the root is null or the key is found at the root, return the root
  if (root === null || root.val === key) {
    return root;
  }

  // If the key is greater than the root's value, search the right subtree
  if (root.val < key) {
    return search(root.right, key);
  }

  // If the key is smaller than the root's value, search the left subtree
  return search(root.left, key);
}

// Create the root node
const root = new Node(15);

// Create left and right children of the root
root.left = new Node(10);
root.right = new Node(20);

// Create left and right children for the nodes we've just added
root.left.left = new Node(8);
root.left.right = new Node(12);
root.right.left = new Node(17);
root.right.right = new Node(25);

// Perform a search in the BST
const result = search(root, 17);

// Output the result
if (result !== null) {
  console.log("Value found!");
} else {
  console.log("Value not found.");
}
          `,
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Lesson 5 Computer Science`
          )} in exactly one sentence?`,
          response:
            "Data structures are ways to organize and store data, while algorithms are step-by-step instructions for solving specific problems or performing tasks.",
          spanish: ``,
          tooltip: ``,
        },
        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Lesson 5 Computer Science`
          )}?`,
          response: (
            <div>
              <h2>Question 1: Arrays vs Linked Lists</h2>
              <p>
                Why might you choose an array over a linked list when
                implementing a certain data structure? Provide at least two
                reasons and discuss the trade-offs.
              </p>

              <h2>Question 2: Importance of Big O Notation</h2>
              <p>
                Explain the importance of Big O notation in algorithm analysis.
                How does it help software engineers make decisions about which
                algorithms to use?
              </p>

              <h2>Question 3: Hash Tables</h2>
              <p>
                Hash tables can experience collisions. What are collisions in
                the context of hash tables, and what are some strategies to
                resolve them?
              </p>

              <h2>Question 4: Graph Algorithms</h2>
              <p>
                Discuss a real-world application where graph algorithms like
                Dijkstra's or A* would be particularly useful. Explain why you
                would choose one algorithm over the other for this specific
                application.
              </p>

              <h2>Question 5: Dynamic Programming</h2>
              <p>
                What is dynamic programming, and how does it differ from a
                regular divide-and-conquer approach? Can you think of a
                real-world problem that can be efficiently solved using dynamic
                programming?
              </p>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: (
            <div>
              This shopping slot is not being utilized yet. Please contact me in
              Patreon to qualify. In the meantime, lets talk about the
              socioeconomic state of Latinos in tech.
              <br />
              <br />
              <p>
                The underrepresentation of Latinos as founders of major tech
                companies is a multifaceted issue that can be attributed to
                various factors, including socioeconomic, educational, and
                cultural barriers, as well as systemic biases and
                discrimination. Here are some reasons that contribute to this
                underrepresentation:
              </p>
              <br />
              <ol>
                <li>
                  Educational barriers: Access to quality education is essential
                  for success in the technology industry. However, Latinos may
                  face challenges in accessing high-quality education due to
                  factors such as socioeconomic status, underfunded schools, or
                  living in areas with fewer educational resources. These
                  challenges can limit their exposure to computer science and
                  other STEM subjects, reducing the likelihood of pursuing
                  careers in technology. <br />
                </li>
                <li>
                  Socioeconomic factors: Socioeconomic status plays a
                  significant role in shaping career opportunities and
                  aspirations. Latinos, as a group, have historically faced
                  economic disparities, which can impact their access to
                  resources, networking opportunities, and the ability to take
                  risks associated with entrepreneurship. <br />
                </li>

                <li>
                  Lack of representation and role models: The technology
                  industry has long been dominated by individuals from certain
                  racial and ethnic backgrounds. The lack of Latino
                  representation in leadership roles and as founders of major
                  tech companies can make it challenging for aspiring Latino
                  entrepreneurs to find role models and mentors, which is
                  crucial for professional development and success. <br />
                </li>
                <li>
                  Limited access to funding and resources: Starting a tech
                  company often requires substantial financial investment and
                  access to resources, such as networking opportunities,
                  mentorship, and technical support. Latinos may face challenges
                  in securing funding from investors due to unconscious bias,
                  discrimination, or lack of connections within the industry.{" "}
                  <br />
                </li>
                <li>
                  Cultural factors: Cultural factors, such as family
                  expectations and community norms, can also influence career
                  choices and aspirations. In some cases, Latinos may face
                  pressure to prioritize more traditional or stable career paths
                  over the risks associated with entrepreneurship or founding a
                  tech company. <br />
                </li>
                <li>
                  Systemic biases and discrimination: The technology industry,
                  like many other sectors, is not immune to systemic biases and
                  discrimination that can create barriers for underrepresented
                  groups, including Latinos. This can manifest in various forms,
                  such as biased hiring practices, limited access to mentorship
                  and resources, or unequal treatment within the workplace.
                </li>
              </ol>
              <br />
              <br />
              Addressing these challenges and promoting diversity in the
              technology industry requires concerted efforts from various
              stakeholders, including educational institutions, policymakers,
              investors, and tech companies themselves. By fostering inclusive
              environments, providing equal opportunities, and breaking down
              barriers for underrepresented groups, the tech industry can
              benefit from the wealth of talent, perspectives, and ideas that
              diverse founders bring to the table.
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        practice: {
          completed: false,
          impact: 750,
          action: `practice`,
          icon: `🥋`,
          request: `Let's practice!`,
          context: `Let's write an algorithm a lot of computer science are challenged by`,
          displayCode: `function dijkstra(graph, start) {
const visited = new Set();
const dist = {};

for (let node in graph) {
  dist[node] = Infinity;
}

dist[start] = 0;

while (visited.size < 
        Object.keys(graph).length) {
  let minNode = getMinNode(
    dist, visited
  );
  
  visited.add(minNode);

  for (let n in graph[minNode]) {
    let alt = dist[minNode] + 
              graph[minNode][n];

    if (alt < dist[n]) {
      dist[n] = alt;
    }
  }
}

return dist;
}

function getMinNode(dist, visited) {
let min = Infinity;
let minNode = null;

for (let node in dist) {
  if (dist[node] < min && 
      !visited.has(node)) {
    min = dist[node];
    minNode = node;
  }
}

return minNode;
}

const graph = {
A: { B: 1, C: 4 },
B: { A: 1, C: 2, D: 5 },
C: { A: 4, B: 2, D: 1 },
D: { B: 5, C: 1 }
};

const dist = dijkstra(graph, 'A');
console.log(dist);`,
          input: `function dijkstra(graph, start) {
const visited = new Set();
const dist = {};
for (let node in graph) {
  dist[node] = Infinity;
}
dist[start] = 0;
while (visited.size <
        Object.keys(graph).length) {
  let minNode = getMinNode(
    dist, visited
  );
  visited.add(minNode);
  for (let n in graph[minNode]) {
    let alt = dist[minNode] +
              graph[minNode][n];
    if (alt < dist[n]) {
      dist[n] = alt;
    }
  }
}
return dist;
}
function getMinNode(dist, visited) {
let min = Infinity;
let minNode = null;
for (let node in dist) {
  if (dist[node] < min &&
      !visited.has(node)) {
    min = dist[node];
    minNode = node;
  }
}
return minNode;
}
const graph = {
A: { B: 1, C: 4 },
B: { A: 1, C: 2, D: 5 },
C: { A: 4, B: 2, D: 1 },
D: { B: 5, C: 1 }
};
const dist = dijkstra(graph, 'A');
console.log(dist);`,
          response: <div>good job grasshopper!</div>,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
  },
};
