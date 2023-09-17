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
  // "Get Experience": {
  //   "Robots Building Education": {
  //     documentID: ``,
  //     filler: ``,
  //     new: true,
  //     highValue: false,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     rare: false,
  //     tooltip: ``,
  //     sourceType: `markdown`, // may not need
  //     button: `Robots Building Education`, // may not need - `name`
  //     header: `Robots Building Education`,
  //     fileSource: await import("../../markdowns/learn.md?raw"), // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `✍️`,
  //         request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
  //           `Build For Community`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please share a potential future with the ${ultimateEffeciencyJutsu(
  //           `Build For Community`
  //         )}?`,
  //         response: `\n\nSure! In the future, it's possible that bitcoin, automation, and universal basic income could all converge to create a new form of financial system. Under this system, individuals could receive an automated universal basic income that is denominated in a uniform cryptocurrency, such as Bitcoin, giving individuals the freedom to purchase goods and services instantly and securely using a digital payment method. In addition, individuals would have access to a multitude of automated tools to manage their finances, such as automated savings and investments tools that maximize returns and minimize risk. This system could also help to reduce poverty and inequality, as it would make it easy for everyone to access basic financial services, regardless of location or class.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Build For Community`
  //         )}?`,
  //         response: `\n\nBitcoin relies heavily on automation. Automation is the integration of technology in the process of completing certain tasks, and it helps to reduce the need for human labor. Bitcoin transactions are almost entirely automated, and this automation creates a strong case for the implementation of universal basic income (UBI). UBI is a system whereby citizens of a state receive a regular monthly allowance from the government, regardless of their economic standing or whether or not they are currently employed. Automation and the increasing presence of cryptocurrencies like Bitcoin can provide the economic mechanisms for implementing a UBI system, and so it can be seen that the two are linked.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Build For Community`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. How does Bitcoin interact with automation? Answer: Bitcoin is used to facilitate instantaneous payment transfers, enabling automated transactions between two parties.\n2. What is the relationship between Bitcoin and Universal Basic Income? Answer: Universal Basic Income is a policy concept which can be supported through the use of Bitcoin, due to its transparency and low transaction costs.\n3. How does automation impact the use of Bitcoin? Answer: Automation can be used to simplify the process of transactting with Bitcoin, such as through digital wallets and automated trading bots.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Build For Community`
  //         )}?`,
  //         response: `\n\n1. Definition of Bitcoin – what it is, key features and how it works\n2. Impact of Automation on Employment and its related implications\n3. Potential Benefits of Universal Basic Income\n4. Possibility of Bitcoin and Automation to Enhance UBI\n5. Challenges and Obstacles in Implementing Bitcoin and Automation for UBI\n6. Prospects of Bitcoin as a Potential Solution to Enhance UBI\n7. Relationship between Bitcoin, Automation and UBI in Terms of Asset Distribution\n8. Advantages of UBI in the Context of Bitcoin and Automation\n9. Regulatory Issues Surrounding the Deployment of a UBI Scheme Using Bitcoin and/or Automation\n10. The Social and Economic Implications of Bitcoin, Automation and UBI`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of how proof of work can work in education?`,
  //         response: `\n\nAn example of how proof of work can work in education is through the utilization of advanced testing techniques. For example, if a student must complete an online course, they must first complete a assignment or test. After they complete the initial assignment or test, they must then provide proof of their progress by working to answer harder questions, or taking a more advanced course. By utilizing challenges that only certain students can complete, the instructor will have proof that the student actually completed the coursework.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Build For Community`
  //         )} in exactly one sentence?`,
  //         response: `\n\nThe combination of automation and Bitcoin technologies could theoretically provide a Universal Basic Income to all individuals.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Build For Community`
  //         )}?`,
  //         response: `\n\n1. What is the connection between Bitcoin, Automation, and Universal Basic Income (UBI)?\n\n2. In what ways could Automation lead to the implementation of UBI?\n\n3. How could decentralized digital currencies such as Bitcoin be used to fund a UBI system?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Undocumented Building": {
  //     documentID: ``,
  //     filler: ``,
  //     new: true,
  //     highValue: false,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     hasCode: true,
  //     rare: false,
  //     tooltip: ``,
  //     sourceType: `markdown`, // may not need
  //     button: `Indocumentadofy`, // may not need - `name`
  //     header: `Indocumentadofy`,
  //     fileSource: await import("../../markdowns/indocumentadofy.md?raw"), // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generar`,
  //         icon: `✍️`,
  //         request: `em. roxana, ¿puedes generar un ensayo que cubra las oportunidades de consulta como inmigrante indocumentado con el marco Hydrogen de Shopify?`,
  //         response: `null`,
  //         spanish: true,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         dynamicContent: true,
  //         completed: false,
  //         impact: 100,
  //         action: `inspirar`,
  //         icon: `⚡`,
  //         request: `Roxana, ¿puedes compartir cómo los inmigrantes indocumentados pueden aprender a construir cosas con herramientas como Hydrogen de Shopify para ganarse la vida en español?`,
  //         response: `\n\nEn primer lugar, recomendaría a los inmigrantes indocumentados que investiguen y familiaricen con el software Hydrogen de Shopify que es una herramienta de creación de sitios web que le permite a los usuarios crear hermosas tiendas de comercio electrónico sin tener que aprender lenguajes de programación como HTML o CSS. Descargar el software es fácil y gratuito, y hay mucha documentación en línea disponible para guiarles a través del proceso. Después de descargarlo e iniciar sesión, también pueden encontrar tutorías en línea ofrecidas en español para ayudarles a aprender cómo usarlo y cómo configurar una tienda exitosa. Una vez que han desarrollado el conocimiento y la habilidad necesarios, pueden usar Hydrogen para crear tiendas en línea y vender productos a clientes de todo el mundo. Esta es una excelente oportunidad para aquellos inmigrantes que buscan construir una vida exitosa de manera independiente.`,
  //         spanish: true,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `resumir`,
  //         icon: `📚`,
  //         request: `Roxanita ¿Puedes resumir cómo construir tecnología con el marco de Hydrogen de Shopify?`,
  //         response:
  //           "\n\nEl marco de Hydrogen de Shopify proporciona las herramientas necesarias para construir y gestionar una tienda en línea de manera eficiente. A través de la interfaz de usuario intuitiva, los usuarios pueden configurar los productos, imágenes, páginas y contenidos en cuestión de minutos. Te permite configurar opciones de pago, precios y descuentos para diversos productos. El marco también le permite a los usuarios administrar el inventario, realizar publicaciones de pedidos, recopilar información de clientes y almacenar datos de forma segura. Además, le ofrece protección contra fraudes y herramientas integradas de marketing para impulsar el crecimiento de la tienda.",
  //         spanish: true,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `preguntar`,
  //         icon: `🔮`,
  //         request: `Roxanota, ¿puedes mostrarme tres preguntas frecuentes para principiantes sobre la consultoría como inmigrante indocumentado con el marco Hydrogen de Shopify?`,
  //         response: `\n\n1. ¿Existe un límite específico para las cantidades en las que puedo cobrar como inmigrante indocumentado a través de la plataforma de Shopify Hydrogen? \n2. ¿Cómo puedo conectar mi cuenta de Shopify para comenzar a brindar servicios de consultoría a través de Hydrogen? \n3. ¿Hay alguna forma de proteger mis derechos como inmigrante indocumentado mientras ofrezco servicios de consultoría a través del marco Hydrogen de Shopify?`,
  //         spanish: true,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guía`,
  //         icon: `🤝`,
  //         request: `señorita roxana, ¿puede crear una guía de estudio para consultar como inmigrante indocumentado con el marco Hydrogen de Shopify con 10 viñetas?`,
  //         response: `\n\n1. Investigue Hydrogen de Shopify y familiarícese con las diferentes características y capacidades que ofrece.\n2. Comprenda las implicaciones legales cuando trabaja como inmigrante indocumentado con Hydrogen de Shopify.\n3. Utilice los recursos disponibles, como como tutoriales y materiales de apoyo disponibles.\n4. Adquiera conocimientos sobre las herramientas y técnicas compatibles con Hydrogen de Shopify.\n5. Asegúrese de que su trabajo esté listo para su carpeta de trabajos y pueda ser presentado a posibles empleadores.\n6. Desarrolle una comprensión de cómo se debe estructurar el proyecto, incluidos el cronograma y los objetivos.\n7. Conozca las oportunidades de mercado disponibles para usar Hydrogen de Shopify.\n8. Desarrolle la capacidad de solucionar y resolver cualquier problema técnico que pueda surgir.\n9. Conéctese con varias empresas y redes que usan Hydrogen de Shopify para desarrollar una red de posibles empleadores y socios.\n10. Manténgase actualizado sobre el avance de Hydrogen de Shopify para asegurarse de que puede aprovechar era de todas las nuevas capacidades`,
  //         spanish: true,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demostrar`,
  //         icon: `🎨`,
  //         request: `mama roxana, ¿puedes mostrarme un ejemplo de cómo Shopify construye aplicaciones con el marco Hydrogen de Shopify en español con javascript?`,
  //         response:
  //           "\n\n// Crear un modelo de aplicación\n// Este modelo describirá una entidad de la aplicación\nvar AppModelo = Hydrogen.Modelo.extend({\n  // Definimos los atributos\n  campos: {\n    titulo: String,\n    descripcion: String,\n    precio: Numero\n  }\n});\n\n// Crear una vista de la aplicación\n// Esta vista mostrará la entidad en la aplicación\nvar AppVista = Hydrogen.Vista.extend({\n  // Establecer el modelo de la vista\n  modelo: AppModelo,\n  // Establecer la plantilla \n  plantilla: `\n   <div> \n      <h2>{{ titulo }}</h2>\n      <p>{{ descripcion }}</p>\n      <p>Precio: {{ precio }}</p>\n   </div>\n  `,\n  // Establecer los datos iniciales\n  datosIniciales: {\n    titulo: '',\n    descripcion: '',\n    precio: 0\n  }\n});\n\n// Instanciar el modelo de la aplicación\nvar miModelo = new AppModelo({\n  // Establecer los valores de los atributos\n  titulo: 'Mi Aplicación',\n  descripcion: 'Una aplicación increíble',\n  precio: 999\n});\n\n// Instanciar la vista de la aplicación\nvar miVista = new AppVista({\n  modelo: miModelo\n});\n\n// Renderizar la vista\nmiVista.renderizar();",
  //         spanish: true,

  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `definir`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `roxis, ¿puedes definir oportunidades para consultar como inmigrante indocumentado con el marco Hydrogen de Shopify en exactamente una oración?`,
  //         response: `\n\nLas oportunidades de consulta como inmigrante indocumentado con el marco Hydrogen de Shopify proporcionan recursos y acceso a los servicios pertinentes para apoyar la actividad comercial.`,
  //         spanish: true,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `prueba`,
  //         icon: `🧪`,
  //         request: `mamachota roxana, ¿puedes escribir un cuestionario de 3 preguntas para principiantes que sea desafiante sobre la consultoría como inmigrante indocumentado con el marco Hydrogen de Shopify?`,
  //         response: `\n\n1. ¿Hay políticas o trámites adicionales que deberían completarse cuando se trabaja en el marco Hydrogen de Shopify como inmigrante indocumentado? \n\n2. ¿Cuáles son algunas técnicas aconsejables para respaldar la seguridad y la privacidad de los datos personales al utilizar el marco Hydrogen de Shopify? \n\n3. ¿Cuáles son las consideraciones especiales a tener en cuenta al necesitar colaboradores o asesores para trabajar legalmente como inmigrante indocumentado en el marco Hydrogen de Shopify?`,
  //         spanish: true,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `comercio`,
  //         icon: `🛍️`,
  //         request: `Muy bien hermano, muéstrame lo que tienes. Quiero comprar y apoyar más esta red.`,
  //         response: `¡excelente! Eche un vistazo a nuestros patrocinadores que apoyan el crecimiento de Robots Building Education aquí: un día :)`,
  //         spanish: true,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   // "Build For Community": {
  //   //   documentID: ``,
  //   //   filler: ``,
  //   //   new: true,
  //   //   highValue: false,
  //   //   underConstruction: true,
  //   //   completed: false,
  //   //   needsImprovement: false,
  //   //   rare: true,
  //   //   tooltip: ``,
  //   //   sourceType: `markdown`, // may not need
  //   //   button: `Universal Basic Income`, // may not need - `name`
  //   //   header: `Robots Building Education`,
  //   //   fileSource: await import("../../markdowns/learn.md?raw"), // may not need

  //   //   prompts: {
  //   //     patreon: {
  //   //       completed: false,
  //   //       impact: 1000,
  //   //       action: `generate`,
  //   //       icon: `✍️`,
  //   //       request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
  //   //         `Build For Community`
  //   //       )}?`,
  //   //       response: `null`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     inspire: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `inspire`,
  //   //       icon: `⚡`,
  //   //       request: `ms. roxana, can you please share a potential future with the ${ultimateEffeciencyJutsu(
  //   //         `Build For Community`
  //   //       )}?`,
  //   //       response: `\n\nSure! In the future, it's possible that bitcoin, automation, and universal basic income could all converge to create a new form of financial system. Under this system, individuals could receive an automated universal basic income that is denominated in a uniform cryptocurrency, such as Bitcoin, giving individuals the freedom to purchase goods and services instantly and securely using a digital payment method. In addition, individuals would have access to a multitude of automated tools to manage their finances, such as automated savings and investments tools that maximize returns and minimize risk. This system could also help to reduce poverty and inequality, as it would make it easy for everyone to access basic financial services, regardless of location or class.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     summarize: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `summarize`,
  //   //       icon: `📚`,
  //   //       request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //   //         `Build For Community`
  //   //       )}?`,
  //   //       response: `\n\nBitcoin relies heavily on automation. Automation is the integration of technology in the process of completing certain tasks, and it helps to reduce the need for human labor. Bitcoin transactions are almost entirely automated, and this automation creates a strong case for the implementation of universal basic income (UBI). UBI is a system whereby citizens of a state receive a regular monthly allowance from the government, regardless of their economic standing or whether or not they are currently employed. Automation and the increasing presence of cryptocurrencies like Bitcoin can provide the economic mechanisms for implementing a UBI system, and so it can be seen that the two are linked.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     ask: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `ask`,
  //   //       icon: `🔮`,
  //   //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //   //         `Build For Community`
  //   //       )} with one sentence answers?`,
  //   //       response: `\n\n1. How does Bitcoin interact with automation? Answer: Bitcoin is used to facilitate instantaneous payment transfers, enabling automated transactions between two parties.\n2. What is the relationship between Bitcoin and Universal Basic Income? Answer: Universal Basic Income is a policy concept which can be supported through the use of Bitcoin, due to its transparency and low transaction costs.\n3. How does automation impact the use of Bitcoin? Answer: Automation can be used to simplify the process of transactting with Bitcoin, such as through digital wallets and automated trading bots.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     guide: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `guide`,
  //   //       icon: `🤝`,
  //   //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //   //         `Build For Community`
  //   //       )}?`,
  //   //       response: `\n\n1. Definition of Bitcoin – what it is, key features and how it works\n2. Impact of Automation on Employment and its related implications\n3. Potential Benefits of Universal Basic Income\n4. Possibility of Bitcoin and Automation to Enhance UBI\n5. Challenges and Obstacles in Implementing Bitcoin and Automation for UBI\n6. Prospects of Bitcoin as a Potential Solution to Enhance UBI\n7. Relationship between Bitcoin, Automation and UBI in Terms of Asset Distribution\n8. Advantages of UBI in the Context of Bitcoin and Automation\n9. Regulatory Issues Surrounding the Deployment of a UBI Scheme Using Bitcoin and/or Automation\n10. The Social and Economic Implications of Bitcoin, Automation and UBI`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     demonstrate: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `demonstrate`,
  //   //       icon: `🎨`,
  //   //       request: `ms. roxana, can you please show me an example of how proof of work can work in education?`,
  //   //       response: `\n\nAn example of how proof of work can work in education is through the utilization of advanced testing techniques. For example, if a student must complete an online course, they must first complete a assignment or test. After they complete the initial assignment or test, they must then provide proof of their progress by working to answer harder questions, or taking a more advanced course. By utilizing challenges that only certain students can complete, the instructor will have proof that the student actually completed the coursework.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     define: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `define`, // may not need
  //   //       icon: `🧿`, // may not need
  //   //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //   //         `Build For Community`
  //   //       )} in exactly one sentence?`,
  //   //       response: `\n\nThe combination of automation and Bitcoin technologies could theoretically provide a Universal Basic Income to all individuals.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },

  //   //     quiz: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `quiz`,
  //   //       icon: `🧪`,
  //   //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //   //         `Build For Community`
  //   //       )}?`,
  //   //       response: `\n\n1. What is the connection between Bitcoin, Automation, and Universal Basic Income (UBI)?\n\n2. In what ways could Automation lead to the implementation of UBI?\n\n3. How could decentralized digital currencies such as Bitcoin be used to fund a UBI system?`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     shop: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `shop`,
  //   //       icon: `🛍️`,
  //   //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //   //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //   },
  //   // },
  //   // "Build For Teachers": {
  //   //   documentID: ``,
  //   //   filler: ``,
  //   //   new: true,
  //   //   highValue: false,
  //   //   underConstruction: false,
  //   //   completed: false,
  //   //   needsImprovement: false,
  //   //   tooltip: ``,
  //   //   sourceType: `markdown`, // may not need
  //   //   button: `Pedagogy`, // may not need - `name`
  //   //   header: `Educate`,
  //   //   fileSource: await import("../../markdowns/educate.md?raw"), // may not need

  //   //   prompts: {
  //   //     patreon: {
  //   //       completed: false,
  //   //       impact: 1000,
  //   //       action: `generate`,
  //   //       icon: `✍️`,
  //   //       request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
  //   //         `Build For Teachers`
  //   //       )}?`,
  //   //       response: `null`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     inspire: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `inspire`,
  //   //       icon: `⚡`,
  //   //       request: `ms. roxana, can you please share how an app like ${ultimateEffeciencyJutsu(
  //   //         `Build For Teachers`
  //   //       )} would be useful?`,
  //   //       response: `\n\nGitHub for teachers would be a great way for educators to share resources and collaborate on projects, discuss teaching methods and topics, and generally support each other. Teachers could use it to find, share, and discuss high-quality teaching resources, ranging from lesson plans to instructional materials and activities. Teachers could post questions and look for advice and troubleshooting ideas, or connect with colleagues in different states or countries to gain another perspective. With GitHub for teachers, collaboration would become easier, enabling teachers to collaborate on large projects with fewer IT headaches and time constraints.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     summarize: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `summarize`,
  //   //       icon: `📚`,
  //   //       request: `ms. roxana, can you please summarize the basics of how an app like ${ultimateEffeciencyJutsu(
  //   //         `Build For Teachers`
  //   //       )} would work?`,
  //   //       response: `\n\nGitHub for teachers is an app that makes it easy for teachers to collaborate and share materials with other teachers by using version-control and git repository, which are services that enable users to track changes to files over time. It provides a simple way for teachers to store, share and access lesson plans, worksheets, and other teaching materials with peers. Using GitHub for teachers, teachers can create private, public, and \"organization\" repositories. Repositories are collections of folders and files related to a particular lesson or project. When changes are made to a file, the repository automatically records and stores a version of the file that can be referenced in the future. In addition to collaboration, teachers can also use the app to assess student work, request feedback from other teachers and mentors on lesson plans, and track the progress of their teaching materials over time.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     ask: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `ask`,
  //   //       icon: `🔮`,
  //   //       request: `ms. roxana, can you please show me three frequently asked beginner questions about an app designed like ${ultimateEffeciencyJutsu(
  //   //         `Build For Teachers`
  //   //       )} with one sentence answers?`,
  //   //       response: `\n\n1. How do I create a classroom on the app? - You can create a classroom by registering for your account and following the setup instructions. \n2. How do I invite my students to a classroom? - You can invite your students through the app by clicking the \"Invite Student\" button in the classroom settings.\n3. What can I do with the app? - The app allows teachers to create and manage classrooms, assign tasks and assignments, track student progress, and more.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     guide: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `guide`,
  //   //       icon: `🤝`,
  //   //       request: `ms. roxana, can you please create a study guide for app designed like ${ultimateEffeciencyJutsu(
  //   //         `Build For Teachers`
  //   //       )}?`,
  //   //       response: `\n\n1. Understand the features and functionality of the GitHub app designed for teachers.\n2. Familiarize yourself with the user interface and navigation of the app.\n3. Become familiarized with the different ways that students can submit work via the app.\n4. Set up notifications for new assignments and due dates to ensure students stay on track.\n5. Use the gradebook feature to track student progress and share feedback easily with students.\n6. Explore options for different ways to assess student performance, such as rubrics and PDFs.\n7. Understand how to easily share resources, such as reading material, videos, and worksheets with the entire class or individual students.\n8. Utilize the messaging feature to communicate with other teachers and collaborate on projects.\n9. Familiarize yourself with the app’s security and privacy settings to ensure student data is safe and secure.\n10. Conduct research on best practices for using the app more effectively as a tool for learning.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     demonstrate: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `demonstrate`,
  //   //       icon: `🎨`,
  //   //       request: `ms. roxana, can you please show me an example of how an app like ${ultimateEffeciencyJutsu(
  //   //         `Build For Teachers`
  //   //       )} would work?`,
  //   //       response: `\n\nGitHub for teachers is an app that would allow teachers to store their lesson plans, project ideas, digital materials, student assignments, and other educational documents in the cloud. It would also make it easy for teachers to collaborate with colleagues by sharing these documents or adding comments/feedback to them. With the app, teachers would be able to securely back up their work, track changes to documents over time, and easily collaborate with colleagues. It would also allow teachers to easily search for other educators’ education-related documents or materials, which could help them stay up-to-date on the latest best practices and educational ideas.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     define: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `define`, // may not need
  //   //       icon: `🧿`, // may not need
  //   //       request: `ms. roxana, can you please define an app like ${ultimateEffeciencyJutsu(
  //   //         `Build For Teachers`
  //   //       )} in exactly one sentence?`,
  //   //       response: `\n\nGitHub is a version control platform that helps teachers store, organize, and collaborate on teaching materials.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },

  //   //     quiz: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `quiz`,
  //   //       icon: `🧪`,
  //   //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about an app designed like ${ultimateEffeciencyJutsu(
  //   //         `Build For Teachers`
  //   //       )}?`,
  //   //       response: `\n\n1. What is the main purpose of an app designed like GitHub for teachers?\n2. What type of information can teachers store using an app like GitHub?\n3. What features of GitHub make it particularly useful for teachers?`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     shop: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `shop`,
  //   //       icon: `🛍️`,
  //   //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //   //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //   },
  //   // },
  //   // "Social Chat": {
  //   //   documentID: ``,
  //   //   filler: ``,
  //   //   new: true,
  //   //   highValue: false,
  //   //   underConstruction: false,
  //   //   completed: false,
  //   //   needsImprovement: false,
  //   //   tooltip: ``,
  //   //   sourceType: `markdown`, // may not need
  //   //   button: `Tap In Chat`, // may not need - `name`
  //   //   header: `Subscribe to read DMs`,
  //   //   fileSource: await import("../../markdowns/chatApp.md?raw"), // may not need

  //   //   prompts: {
  //   //     patreon: {
  //   //       completed: false,
  //   //       impact: 1000,
  //   //       action: `generate`,
  //   //       icon: `✍️`,
  //   //       request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
  //   //         `Social Chat`
  //   //       )}?`,
  //   //       response: `null`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     inspire: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `inspire`,
  //   //       icon: `⚡`,
  //   //       request: `ms. roxana, can you please explain how a ${ultimateEffeciencyJutsu(
  //   //         `Social Chat`
  //   //       )} can be useful?`,
  //   //       response:
  //   //         "\n\nChat apps that allow users to subscribe to other people's private chats can be a great way to stay connected and up to date with friends and family. Since these chats are private, they often contain more intimate conversations, giving users a better insight into the people they're subscribing to. Additionally, these chats can be used as an important part of staying in touch with those that are important to you, allowing you to receive regular updates and comments.",
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     summarize: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `summarize`,
  //   //       icon: `📚`,
  //   //       request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //   //         `Social Chat`
  //   //       )}?`,
  //   //       response:
  //   //         "\n\nA chat app with private chat subscriptions allows users to subscribe to private conversations between two people or groups. Users must provide their personal details to verify their identity and be approved as a subscriber. This allows subscribers to message and communicate with the participants involved in the private chat, as well as post comments. Subscribers must be approved by the participants to follow the private conversations.",
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     ask: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `ask`,
  //   //       icon: `🔮`,
  //   //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //   //         `Social Chat`
  //   //       )} with one sentence answers?`,
  //   //       response: `\n\n1. What is a chat app? - A chat app is an application that allows users to send and receive text, audio and/or visual messages. \n\n2. How do I subscribe to someone's private chat? - You can subscribe to someone's private chat by visiting their profile page and selecting the \"Subscribe\" option. \n\n3. How do I start a chat with someone? - You can start a chat with someone by selecting the chat icon in the top navigation bar and selecting the person you'd like to chat with.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     guide: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `guide`,
  //   //       icon: `🤝`,
  //   //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //   //         `Social Chat`
  //   //       )}?`,
  //   //       response: `\n\nStudy Guide for a Chat App: \n1. Understand the concept of private chatting and why users may want to use this feature. \n2. Learn the different types of private chat features available in the app.\n3. Become familiar with the functions available in private chats.\n4. Explore the process for subscribing to someone’s private chat.\n5. Understand the benefits of subscribing to private chats.\n6. Learn about user privacy and security in private chats.\n7. Research the security policy for private chats.\n8. Examine application speed and reliability for private chats.\n9. Learn about the cost associated with private chatting. \n10. Test various private chat features and assess the user experience.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     demonstrate: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `demonstrate`,
  //   //       icon: `🎨`,
  //   //       request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //   //         `Social Chat`
  //   //       )}`,
  //   //       response:
  //   //         "\n\nRather than creating group chats with others, people would network and communicate with one another privately, but publicly allowing their chats to be read by outsiders.",
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     define: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `define`, // may not need
  //   //       icon: `🧿`, // may not need
  //   //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //   //         `Social Chat`
  //   //       )} in exactly one sentence?`,
  //   //       response: `\n\nA chat app that allows users to subscribe to and follow private conversations between individuals.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },

  //   //     quiz: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `quiz`,
  //   //       icon: `🧪`,
  //   //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //   //         `Social Chat`
  //   //       )}?`,
  //   //       response: `\n\n1. What is the most important security feature of a chat app that allows users to subscribe to private chats?\n\n2. How does the chat app appreciate the data privacy of its users who subscribe to private chats?\n\n3. How does the chat app monitor the activities of users who subscribe to private chats to ensure they remain secure and private?`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //     shop: {
  //   //       completed: false,
  //   //       impact: 100,
  //   //       action: `shop`,
  //   //       icon: `🛍️`,
  //   //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //   //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //   //       spanish: ``,
  //   //       tooltip: ``,
  //   //     },
  //   //   },
  //   // },
  // },
  // "Computer Science (older version)": {
  //   "Programming Languages": {
  //     documentID: ``,
  //     filler: ``,

  //     hasCode: false,
  //     highValue: false,
  //     underConstruction: false,
  //     completed: false,
  //     rare: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `Programming Languages`, // may not need - `name`
  //     header: `Programming Languages`,
  //     fileSource:
  //       "https://res.cloudinary.com/dtkeyccga/video/upload/v1691638126/legacy/LEGACY_COMPSCI_PROGRAMMING_LANGUAGES_t2f0yo.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Programming Languages`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
  //           `Programming Languages`
  //         )}?`,
  //         response: `\n\nOne inspiring story that comes to mind is the story of Grace Hopper, an American computer scientist and United States Navy officer. She is widely credited as being the inventor of the first compiler for a computer programming language, making software programming more accessible and easier to complete. She also helped develop the first English-like programming language, COBOL, which is still widely used today. Her work opened up the field of computer programming and she helped create the groundwork for modern programming languages. She was a true pioneer in the world of computer science and is an inspiring role model for anyone considering entering into the field.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Programming Languages`
  //         )}?`,
  //         response: `\n\nThe basics of the theory of programming languages include the concept of a programming language, which is a formal system designed for writing as well as executing a sequence of instructions. This code is then compiled, partially evaluated, or interpreted for a target machine (e.g., a computer), which deploys it for a particular task. Programming language theory examines the design, implementation, and definition of programming languages, as well as their application in the software industry. It looks at the syntax, semantics, formal correctness, and compilation of programming language construction, as well as its application domains, such as programming language design, language processing systems, database systems, operating systems, artificial intelligence, computer graphics, and natural language processing.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Programming Languages`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is a programming language? - A programming language is a structured language used to write programs for a computer.\n2. What is type checking? - Type checking is the process of verifying and enforcing restrictions on the data types used in a program.\n3. What are the common goals of programming language design? - Common goals of programming language design include code readability, modularity, reusability and scalability.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Programming Languages`
  //         )}?`,
  //         response: `\n\n1. Understand the concept of syntax and context-free grammars \n2. Understand the concept of types and type systems\n3. Identify and distinguish different programming paradigms\n4. Understand the principles of denotational and operational semantics\n5. Know the process of compilation of a program \n6. Be familiar with the Pragmatics of language design\n7. Investigate the strengths and weaknesses of language features\n8. Understand how garbage collection and exception handling works\n9. Understand language modularization, abstraction and encapsulation\n10. Understand memory management, references and aliasing`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please explain an example of a pumping lemma in the theory of formal programming languages?`,
  //         response: `\n\nA pumping lemma is a fundamental tool used to prove that certain types of languages are not regular. The pumping lemma states that if a language is regular, then there must exist a certain number, known as the “pumping constant”, such that any string in the language of length greater than the pumping constant may be “pumped”, or divided into three parts, in such a way that when any of those parts are repeated an arbitrary number of times, the resulting string will still be in the language. \n\nFor example, let's say that the language L consists of all strings of a's, b's, and c's where the number of a's, b's, and c's are all the same. If a string in language L has length n and n is greater than the pumping constant, then that string may be divided into three parts consisting of x, y, and z such that xy^iz is still a valid string in language L for any positive integer i. In other words, if we take any string of length n in L, and break it into three parts x, y, and z such that x and z are non-empty, then any string of the form xy^iz (with a positive integer i) will still be a valid string in L. \n\nThus, if there is any language that cannot fulfill this requirement, then that language is not regular. The pumping lemma provides a useful tool in recognizing and determining which languages are and are not regular.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Programming Languages`
  //         )} in exactly one sentence?`,
  //         response: `\n\nThe Theory of Programming Languages is the study of the structure, implementation, and definition of programming languages and systems.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Programming Languages`
  //         )}?`,
  //         response: `\n\n1. What are the four main components of a programming language?\n2. What are the differences between procedural and object-oriented programming?\n3. What is a compiler and why is it important for programming languages?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   Recursion: {
  //     documentID: ``,
  //     filler: ``,

  //     highValue: false,
  //     hasCode: true,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `Recursion`, // may not need - `name`
  //     header: `Recursion`,
  //     fileSource:
  //       "https://res.cloudinary.com/dtkeyccga/video/upload/v1691638107/legacy/LEGACY_COMPSCI_RECURSION_ogmbbm.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Recursion`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
  //           `Recursion`
  //         )}?`,
  //         response: `\n\nOne inspiring story of recursion concerns a man named Jakob Bernoulli (1654–1705), a Swiss mathematician and physicist. He studied the art of recursive patterns in nature, such as the spirals of a nautilus shell, and developed the mathematical foundations for the modern concept of recursion. He even wrote about this topic in 1713: “The is, indeed, an admirable mystery in the altitude of figures which terminate a spiral line, the descent of which slides insensibly from circumference to the centre.” This showed a deep appreciation for recursive patterns, and it inspired mathematicians for centuries to come.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Recursion`
  //         )}?`,
  //         response: `\n\nRecursion is a way of breaking a problem into smaller parts of the same problem and repeating a process, called the recursive step, until the problem is solved. In other words, it’s a method of solving a problem by breaking it down into simpler versions of the same problem until a solution is found. In programming, it's used to solve problems relating to iterations, algorithms and data structures.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Recursion`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is recursion? - Recursion is a programming technique which involves a method calling itself.\n2. How does recursion work? - Recursion works by breaking a problem down into smaller subproblems, each of which is solved using the same algorithm.\n3. What is the base case of a recursive problem? - The base case is the condition which tells the algorithm when to stop recursing, and start returning values up the stack.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Recursion`
  //         )}?`,
  //         response: `\n\n1. Understand what recursion is and how it works. \n2. Describe the advantages and disadvantages of using recursion.\n3. Identify the base case and recursive case of a problem.\n4. Identify tail recursion and understand how it is executed.\n5. Explain the differences between linear recursion and binary recursion. \n6. Understand the relationship between recursion and iteration.\n7. Explain the concept of recursion space complexity.\n8. Design an algorithm using recursion.\n9. Understand how recursion can be used to generate relationships between data sets.\n10. Develop an understanding of how the principles of recursion can be applied in problem solving.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of a fibonacci sequence  done recursively in python?`,
  //         response: `\n\ndef fibonacci(n): \n    if n <= 1: \n        return n \n    else: \n        return(fibonacci(n-1) + fibonacci(n-2)) \n\n# test\nfor n in range(10):\n    print(fibonacci(n))`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Recursion`
  //         )} in exactly one sentence?`,
  //         response: `\n\nRecursion is a process whereby a function calls itself repeatedly until a given condition is satisfied.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Recursion`
  //         )}?`,
  //         response: `\n\n1. What is the definition of recursion?\n2. What is a potential use case of recursion in computer programming?\n3. How can you control the execution of recursion to prevent it from entering an infinite loop?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Linked Lists": {
  //     documentID: ``,
  //     filler: ``,
  //     hasCode: true,
  //     new: true,
  //     highValue: false,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `Linked Lists`, // may not need - `name`
  //     header: `Linked Lists`,
  //     fileSource:
  //       "https://res.cloudinary.com/dtkeyccga/video/upload/v1691638099/legacy/LEGACY_COMPSCI_LINKED_LISTS_plsrhl.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Linked Lists`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
  //           `Linked Lists`
  //         )}?`,
  //         response: `\n\nThere is an inspiring story about a computer science professor who, despite all odds, found a way to use linked-lists in a creative and useful way. The professor was teaching a course on data structures and devoted a considerable amount of time to helping her students understand linked-lists. One student, however, wasn't getting the concept and was failing the course. In desperation, the professor asked the student to come to her for help and began to explain linked-lists again, this time, using everyday examples. After some time, the student finally understood the concept and together, they began brainstorming on how to apply linked-lists to a real life problem. \n\nThe professor asked the student if he was familiar with public transportation schedules, to which the student said yes. The professor continued by asking the student how he would approach the task of creating a complex multi-route journey planner given the data available to him. This is when it clicked for the student. Using linked-lists, he rearranged the data into a tree-like structure and was able to come up with a workable solution to the problem.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Linked Lists`
  //         )}?`,
  //         response: `\n\nLinked lists are a data structure used to store sequences of data elements in a linear fashion. Each element is connected to its neighbor in the sequence with a link (pointer) to the next element. An element in a linked list is known as a node and typically contains two parts; data and the link to the next element. Linked lists can be implemented in almost any language and can be used to store and retrieve objects in a dynamic manner. They are commonly used for sorting, searching and manipulating data.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Linked Lists`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is a linked list? - A linked list is a data structure consisting of a chain of nodes connected by links or pointers.\n2. What is the difference between an array and a linked list? - An array stores data in a contiguous, or sequential, block of memory whereas a linked list stores data in separate nodes connected by links.\n3. How are linked lists useful? - Linked lists are useful because they use memory efficiently and have fast insertion and deletion capabilities.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Linked Lists`
  //         )}?`,
  //         response: `\n\n1. Understand the purpose of a linked list and its nature as a linear, dynamic data structure\n2. Recognize that a linked list is composed of nodes and each node stores a piece of data and reference to another node\n3. Understand the components of a node: data and next, and the role of the dummy node in a linked list\n4. Know the key operations of a linked list: insertion (add new element to start, node at specific location, end of linked list), deletion, search (sequential and binary search)\n5. Be able to differentiate between a singly- and a doubly-linked list\n6. Know how to iterate through a linked list to traverse and access its elements\n7. Know the difference between a linked list and an array, when to choose one over the other\n8. Understand the advantages and disadvantages of using a linked list\n9. Know common applications of linked lists such as stacks, queues and hash tables\n10. Understand the concept of memory management when creating linked list objects`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Linked Lists`
  //         )} with no other text in python?`,
  //         response: `\n\nLinked List in Python:\n\nclass Node: \n    def __init__(self, data): \n        self.data = data \n        self.next = None\n  \nclass LinkedList: \n    def __init__(self): \n        self.head = None\n  \n    def push(self, new_data): \n        # 1 & 2: Allocate the Node & Put in the data \n        new_node = Node(new_data) \n\n        # 3. Make next of new Node as head \n        new_node.next = self.head \n  \n        # 4. Move the head to point to new Node  \n        self.head = new_node \n  \n    def printList(self): \n        temp = self.head \n        while (temp): \n            print (temp.data) \n            temp = temp.next`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Linked Lists`
  //         )} in exactly one sentence?`,
  //         response: `\n\nA linked list is a dynamic data structure of sequentially linked memory elements.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Linked Lists`
  //         )}?`,
  //         response: `\n\n1. What characteristic do linked lists have that differentiates them from other data structures?\n2. What is the purpose of a sentinel node in a linked list?\n3. What are the advantages of using a linked list over an array?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Link Traversal": {
  //     documentID: ``,
  //     filler: ``,
  //     new: true,
  //     hasCode: true,
  //     highValue: false,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `Link Traversal`, // may not need - `name`
  //     header: `Link Traversal`,
  //     fileSource:
  //       "https://res.cloudinary.com/dtkeyccga/video/upload/v1691638092/legacy/LEGACY_COMPSCI_LINK_TRAVERSAL_wr1g5q.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Link Travel`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please share how linked lists work in neural networks?`,
  //         response: `\n\nLinked lists are generally used to represent the layers of a neural network. They can be used to represent how the nodes in each layer is connected to one another. A linked list stores a collection of values, called nodes, and each node contains an associated value as well as a pointer to the address of the next node in the structure. This allows neural networks to quickly retrieve a specific node without having to traverse the entire list.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Link Travel`
  //         )}?`,
  //         response: `\n\nTraversing a linked list means to iterate through all elements in the list. To begin, you'll need to create a variable to store the head of the list. You will then want to iterate through the list until you reach the tail. As you iterate, you'll want to access each element and/or perform some action. When you're done, you'll set the variable to the next element and continue until the tail is reached. \n\nTraversing a tree means to visit each node in the tree, either in a pre-order, in-order, or post-order approach. In a pre-order approach, you would first process the root node, followed by all its left-subtree, and then all its right-subtree. In an in-order approach, you would first process the left-subtree, followed by the root node, and then the right-subtree. In a post-order approach, you would process each left-subtree and right-subtree first, followed by the root node.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Link Travel`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. How do I start traversing a linked list? - Begin the traversal by starting at the head node.\n2. How do I traverse a binary tree? - Traverse a binary tree by recursively visiting the left and right nodes.\n3. What is post-order traversal? - Post-order traversal is when you visit the left and right children of a node before the node itself.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Link Travel`
  //         )}?`,
  //         response: `\n\n1. Understand the differences between a linked list and a tree.\n2. Learn the basic components of a linked list: head node, tail node, and data node.\n3. Understand the purpose of a linked list: to store data in linear order.\n4. Understand the basic components of a tree: root, branch, and leaf.\n5. Learn about the different types of trees: binary search tree, red-black tree, AVL tree, etc.\n6. Learn about traversing trees: pre-order, post-order, and in-order traversal.\n7. Understand the steps involved in a tree traversal: analyze the current node, traverse the left subtree, traverse the right subtree.\n8. Learn how to traverse both linked lists and trees using iterative and recursive techniques.\n9. Practice coding the traversal algorithms.\n10. Understand the Big-O runtime of the traversal algorithms.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Link Travel`
  //         )} with no other text in python?`,
  //         response: `\n\nTraversing a linked list: \n\nclass Node: \n    def __init__(self, data): \n        self.data = data \n        self.next = None\n\nclass LinkedList: \n    def __init__(self): \n        self.head = None\n\n    def traverse(self): \n        current = self.head\n\n        while current is not None: \n            print(current.data)\n            current = current.next \n\n\nTraversing a tree: \n\nclass Node: \n    def __init__(self, data): \n        self.data = data \n        self.left = None \n        self.right = None\n\ndef traverse(root): \n    if root is not None: \n\n        traverse(root.left) \n        print(root.data) \n        traverse(root.right)`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Link Travel`
  //         )} in exactly one sentence?`,
  //         response: `\n\nTraversing linked lists and trees involves systematically visiting each node or item in the structure, usually in a specific order.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Link Travel`
  //         )}?`,
  //         response: `\n\n1. What is the difference between a linked list and a tree?\n2. What is the time complexity of traversing a linked list using a recursive algorithm?\n3. How can memory be saved when traversing a tree using a breadth-first search?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Link Swapping": {
  //     documentID: ``,
  //     filler: ``,
  //     new: true,
  //     hasCode: true,
  //     highValue: false,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `Link Swapping`, // may not need - `name`
  //     header: `Link Swapping`,
  //     fileSource:
  //       "https://res.cloudinary.com/dtkeyccga/video/upload/v1691638080/legacy/LEGACY_COMPSCI_LINK_SWAPPING_slyhbr.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Link Changing`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please social networks and following graphs work?`,
  //         response: `\n\nSocial networks are networks of individuals and organizations that are connected to each other based on a common relationship, usually formed through communication and information exchange. Following graphs describe relationships between entities, such as between two people, organizations, or groups. They are typically visualized as lines or arrows that connect the entities, symbolizing their relationships. Following graphs can be used to represent complex social networks and visualize how relationships between individuals or organizations evolve over time.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Link Changing`
  //         )}?`,
  //         response: `\n\nSwapping nodes in a linked list, tree, or graph involves exchanging two nodes and the elements the nodes contain. In a linked list, two adjacent nodes are usually swapped; in a tree, two child nodes can be swapped; and in a graph, two adjacent nodes can be swapped. The process of swapping involves taking the element in one node and placing it in another node while also moving the connecting pointers and relationships between the nodes to maintain the list/tree/graph structure.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Link Changing`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. How do I swap two nodes in a linked list? - Swap the data stored in the two nodes.\n2. How do I swap two nodes in a tree? - Traverse the tree to find the nodes, then swap their data.\n3. How do I swap two nodes in a graph? - Traverse the graph to find the nodes, then swap their adjacent edges.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Link Changing`
  //         )}?`,
  //         response: `\n\n1. Understand the basic concepts behind linked lists, trees, and graphs\n2. Be familiar with the syntax and the logic that links nodes in these structures\n3. Consider the different kinds of swapping operations available for manipulating nodes (direct swap, data swap, etc.)\n4. Define the elements that need to be exchanged when swapping nodes (pointers, links, or data)\n5. Explore the implications of swapping nodes on the structure (ordering, length, balance, etc.)\n6. Identify the correct sequence of steps when swapping nodes in a linked list, tree, or graph\n7. Develop an understanding of the methods used to traverse and locate nodes within a structure\n8. Compare and contrast the advantages and disadvantages of different node swapping operations\n9. Learn practical strategies for debugging problems encountered when swapping nodes\n10. Practice coding different node swapping operations with different data structures`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Link Changing`
  //         )} with no other text in javascript?`,
  //         response: `\n\nHere is an example of swapping nodes in a linked list in JavaScript: \n\n// Create a Linked List Node \nclass Node { \n  constructor(data) { \n      this.data = data; \n      this.next = null; \n  } \n} \n\n// Create a swapNodes function \nfunction swapNodes(head, p, q) { \n    let current_p = head; \n    let current_q = head; \n    let prev_p = head; \n    let prev_q = head; \n  \n    // Loop until the two nodes are found \n    while (current_p !== null && current_p.data != p.data) { \n        prev_p = current_p; \n        current_p = current_p.next; \n    } \n  \n    while (current_q !== null && current_q.data != q.data) { \n        prev_q = current_q; \n        current_q = current_q.next; \n    } \n  \n    // Check if the nodes were found \n    if (current_p === null || current_q === null) { \n        return; \n    } \n  \n    // If the nodes were found, swap them \n    prev_p.next = current_q; \n    prev_q.next = current_p; \n  \n    // Swap their \"next\" pointers \n    let temp = current_p.next; \n    current_p.next = current_q.next; \n    current_q.next = temp; \n  \n    return head; \n}`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Link Changing`
  //         )} in exactly one sentence?`,
  //         response: `\n\nSwapping nodes in a linked list, tree, or graph is the process of exchanging two nodes' positions in the structure.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Link Changing`
  //         )}?`,
  //         response: `\n\n1. What is the difference between swapping nodes in a linked list, tree, and graph?\n2. What are the steps required to swap two nodes in a linked list?\n3. What algorithm can be used to efficiently swap two nodes in a tree or graph?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   Algorithms: {
  //     documentID: ``,
  //     filler: ``,

  //     hasCode: true,
  //     highValue: false,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `Algorithms`, // may not need - `name`
  //     header: `Algorithms`,
  //     fileSource:
  //       "https://res.cloudinary.com/dtkeyccga/video/upload/v1691638103/legacy/LEGACY_COMPSCI_ALGORITHMS_zuwuit.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Algorithms`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         robotTouch: true,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please share how tree and graph algorithms were used for the COVID outbreak?`,
  //         response: `\n\nTree and graph algorithms are used in COVID outbreak modeling to analyze data and visualize complex networks and connections that exist between different factors, such as individuals, communities, and environmental conditions and events. These algorithms can be used to track the spread of the disease, predict high-risk areas and disease trajectories, and understand the underlying transmission networks to better inform public health interventions and population-level responses. For example, tree algorithms can be used to build predictive models that identify high-risk trends in transmission, such as locations that are at a higher risk for outbreaks and travel-associated risk. Graph algorithms can be used to map and visualize complex spatial networks and connections that influence the spread of the virus, such as how social contact and movement of people can spread the virus or how healthcare access can impact outcomes. They can also be used to assess resource allocation needs and assist with targeted interventions by accurately forecasting the future spread of the virus.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Algorithms`
  //         )}?`,
  //         response: `\n\nTree algorithms are search algorithms for traversing a tree in order to find specific information. These algorithms can be used to maximize the effectiveness of a search by exploring the complete tree to return the most relevant information. Graph algorithms are a subset of tree algorithms and enable efficient searching of paths between two points in a graph. Graph algorithms are a branch of mathematics that focus on finding the shortest path from one node to another in a graph, or finding the most efficient path using the fewest number of edges.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Algorithms`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is the difference between Trees and Graphs? Answer: Trees consist of nodes connected by directed, or unidirectional, edges while Graphs consist of nodes connected by bidirectional edges. \n\n2. What is Depth-First Search? Answer: Depth-First Search is a graph traversal algorithm that begins at the root node and explores as far as possible along each branch before backtracking. \n\n3. What is Breadth-First Search? Answer: Breadth-First Search is a graph traversal algorithm that starts from the root node and explores the neighbor nodes first, before moving to the next level neighbors.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Algorithms`
  //         )}?`,
  //         response: `\n\n1. Understand the key differences between trees and graphs, including the definition of each structure and the differences of their associated algorithms.\n2. Review the various techniques and processes used to traverse a tree or graph structure, such as depth-first search (DFS), breadth-first search (BFS), and topological sorting.\n3. Learn how to implement the AVL tree data structure and its associated algorithms for balancing and searching.\n4. Grasp the concepts of minimum spanning tree (MST) algorithm, such as Prim’s or Kruskal’s algorithm, and how to compute, store and optimize the structure.\n5. Analyze and understand different graph operations, such as finding the shortest path between two vertices, connectivity and connectivity components.\n6. Comprehend Dijkstra’s Algorithm, Bellman-Ford Algorithm, A* Algorithm and Floyd-Warshell Algorithm, and when and how to use each algorithm.\n7. Grasp techniques and algorithms utilized in network flow optimization problems, including the Maximum Flow Problem and the Minimum Cost Flow Problem.\n8. Learn techniques to traverse the structure of a network flow and calculate maximum and minimum flow values.\n9. Identify Hamiltonian Path and Eulerian Path, and both components needed to solve the Traveling Salesman Problem.\n10. Analyze algorithms used to identify and sort connected components, such as Connected Component Labeling and Kosa-Karu Algorithm.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of a common tree or graph algorithm in javascript?`,
  //         response: `\n\nTree Algorithm:\n\nfunction traverse(node) {\n  if (node === null) {\n    return;\n  }\n  console.log(node.data);\n  traverse(node.left);\n  traverse(node.right);\n}\n\nGraph Algorithm:\n\nfunction visit(vertex) {\n  if (visited[vertex]) {\n    return;\n  }\n  visited[vertex] = true;\n  console.log(vertex);\n  for (let neighbor of neighbors[vertex]) {\n    visit(neighbor);\n  }\n}`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Algorithms`
  //         )} in exactly one sentence?`,
  //         response: `\n\nTree algorithms are algorithms which traverse a tree data structure to perform a functional task, while graph algorithms traverse a graph data structure to perform a functional task.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Algorithms`
  //         )}?`,
  //         response: `\n\n1. What is the difference between a breadth-first search and a depth-first search in terms of tree and graph algorithms?\n\n2. How is Kruskal's algorithm used to find the minimum spanning tree in a graph?\n\n3. What is the difference between a directed graph and an undirected graph with respect to tree and graph algorithms?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  // },

  // "Crash Course Version 2 (older version)": {
  //   "Lesson 1": {
  //     documentID: `Lesson 1 - Crash Course`,
  //     filler: ``,
  //     hasCode: true,

  //     highValue: false,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `1. Coding & Logic`, // may not need - `name`
  //     header: `Foundations: Coding & Logic`,

  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220062/download_4_xnineu.mp4",
  //     prompts: {
  //       patreon: {
  //         premiumContent: false,
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 1`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         humanTouch: false,
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
  //           `Lesson 1`
  //         )}?`,
  //         response: `\n\nOne inspiring story about coding and logic is the story of Ada Lovelace. Ada Lovelace was a mathematician and writer in the 1800s who is widely considered to be the first computer programmer. She wrote the first algorithm for a machine that could calculate Bernoulli numbers, and her work laid the foundation for modern computing. Her story is inspiring because it shows that women have been making important contributions to the field of computer science for centuries.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 1`
  //         )}?`,
  //         response: `\n\nCoding is the process of writing instructions in a programming language to create a program that can be executed by a computer. Computer logic is the set of rules and principles that govern the operation of a computer system. It is the basis for the design of algorithms and the development of software.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 1`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is coding? - Coding is the process of creating instructions for a computer to execute.\n2. What is logic? - Logic is the process of reasoning and making decisions based on facts and evidence.\n3. What is a programming language? - A programming language is a set of instructions that can be used to create a program.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 1`
  //         )}?`,
  //         response: `\n\n1. Understand the fundamentals of coding and computer logic\n2. Learn the basics of programming languages such as HTML, CSS, JavaScript, and Python\n3. Familiarize yourself with the different types of data structures and algorithms\n4. Understand the principles of object-oriented programming\n5. Learn how to debug and troubleshoot code\n6. Develop an understanding of the principles of software engineering\n7. Learn how to use version control systems such as Git\n8. Understand the basics of databases and SQL\n9. Develop an understanding of web development frameworks such as React and Angular\n10. Learn how to use development tools such as IDEs and text editors`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 1`
  //         )} with no other text in javascript?`,
  //         response:
  //           "// Example of basic coding logic in JavaScript\nlet x = 5;\nlet y = 10;\n\nif (x < y) {\n  console.log(`x is less than y`);\n} else {\n  (`x is greater than or equal to y`);\n}",
  //         spanish: ``,
  //         tooltip: ``,
  //         dynamicContent: false,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 1`
  //         )} in exactly one sentence?`,
  //         response: `\n\nCoding is the process of creating instructions for a computer to execute, while computer logic is the process of using algorithms to solve problems.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 1`
  //         )}?`,
  //         response: `\n\n1. What is an example of a Boolean expression?\n2. What is an algorithm used for?\n3. How can a programmer effectively debug a code?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       // intro: {
  //       //   completed: false,
  //       //   sponsoredContent: false,
  //       //   impact: 250,
  //       //   action: `intro`,
  //       //   icon: `🛍️`,
  //       //   request: `let's learn!`,
  //       //   response: `CompSciLib`,
  //       //   advertisementPitch: "Computer Science theory education for students",
  //       //   spanish: ``,
  //       //   tooltip: ``,
  //       //   backgroundStyles: {
  //       //     boxShadow: "0 10px 20px rgba(0,0,0,1), 0 6px 6px rgba(0,0,0,1)",
  //       //     height: 150,
  //       //     width: 150,
  //       //     marginTop: 12,
  //       //     borderRadius: "50%",
  //       //   },
  //       //   advertisementLink: "https://www.compscilib.com/",
  //       //   advertisementImageSrc: compSciLib,
  //       // },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `I wanna shop and support this network more. Can you show me some sponsors or local advertisements?`,
  //         response: `This prompt is available for your business. Please reach out to be on Patreon with your interest :)`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 2": {
  //     documentID: ``,
  //     filler: ``,
  //     hasCode: true,

  //     highValue: false,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `2. Data & Functions`, // may not need - `name`
  //     header: `2. Data & Functions`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220121/download_5_q0viph.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 2`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
  //           `Lesson 2`
  //         )}?`,
  //         response: `\n\nOne inspiring story about sets of data and functions in computer programming is the story of Larry Tesler. Larry Tesler was a computer scientist who made important contributions to computer science by inventing the now ubiquitous Cut, Copy and Paste functions. He also pioneered the idea of user-friendly graphical user interfaces, allowing people to interact with computers in an easier way. Tesler was the first to successfully apply the concept of \"modularity\" or divide and conquer approach to the something as complex as a computer program. He not only discovered how to break complex functions into smaller ones, but he also understood how to re-assemble these functions, creating entirely new and novel sets of data and functions. It's stories like his that inspire others to think more deeply about the potential of data and algorithms and dreams of more powerful computer programs.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 2`
  //         )}?`,
  //         response: `\n\nComputer programming uses sets of data and functions to store, interpret, and process information. Data sets are groups of related items, such as numbers or text. Functions are used to manipulate data sets, for example to add, subtract, search for items, sort them into order, or calculate averages. Sets of data and functions are essential for any kind of computer programming, from web development to software engineering.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 2`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is the difference between a set and a function? Answer: A set is a collection of values, while a function is a group of instructions that performs operations on a given set of inputs to generate a specific output.\n\n2. What are the most common operations performed on sets? Answer: Common operations performed on sets include union, intersection, complement, and cross product.\n\n3. How do you access data stored in sets? Answer: Elements stored in sets can be accessed using indexing, slicing, or iteration.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 2`
  //         )}?`,
  //         response: `\n\n1. Define data sets and functions and discuss their roles in computer programming.\n2. Explain the different types of data sets and how to manipulate them in a program.\n3. Analyze different types of programming functions, including user-defined and predefined functions.\n4. Understand and use the syntax of the various programming languages to create functions and manipulate data sets.\n5. Discuss debugging techniques for functions and data sets.\n6. Define input and output parameters and explain how they are used in functions.\n7. Identify the difference between global and local variables and explain the scope of each.\n8. Construct decision structures to work with data sets and functions.\n9. Create loops to organize data sets and functions.\n10. Create programs that can generate and manipulate data sets and functions.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 2`
  //         )} with no other text in python?`,
  //         response: `"\n\n# Sample data set\ndata_set = [2, 4, 6, 8, 10]\n\n# Sample function\ndef add_nums(inp_list):\n    result = 0\n    for elem in inp_list:\n        result += elem\n    return result\n\n# Function call\nprint(add_nums(data_set)) # Output: 30"`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 2`
  //         )} in exactly one sentence?`,
  //         response: `\n\nA set of data is a collection of related information, while a function is a predefined procedure used to transform one value into another.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 2`
  //         )}?`,
  //         response: `\n\n1. Briefly explain the difference between a data set and a function in computer programming.\n2. What is the purpose of creating a function in a programming language?\n3. Describe two common uses of data sets in computer programming.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `I wanna shop and support this network more. Can you show me some sponsors or local advertisements?`,
  //         response: `This prompt is available for your business. Please reach out to be on Patreon with your interest :)`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 3": {
  //     documentID: ``,

  //     filler: ``,

  //     hasCode: true,
  //     highValue: false,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `3. Creating Objects`, // may not need - `name`
  //     header: `3. Creating Objects`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976548/Video_6_cljclp.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 3`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you tell me how important object oriented programming will be in the metaverse?`,
  //         response: `\n\nObject-orientated programming (OOP) is going to be a key component of the metaverse. OOP allows for advanced programming techniques such as abstraction, polymorphisim, inheritance, and encapsulation to be employed and it will be these advanced techniques that allow for the building of complex virtual worlds with a combination of 3D graphics, media, and interactive content. OOP provides the foundation for techniques such as simulation and artificial intelligence that will form the basis of functioning metaverse agents. OOP also provides the ability to build distributed, multi-user systems and security software to protect virtual worlds and the individual participants.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 3`
  //         )}?`,
  //         response: `\n\nObject-Oriented Programming (OOP) is a programming paradigm that uses classes, objects and their associated methods to create applications. It allows developers to create organized and reusable code, making applications easier to maintain and extend.\n\nCRUD applications are those that Create, Read, Update, and Delete data. Examples include content management systems (CMS) and e-commerce storefronts. They allow a user to store data and retrieve data using the 4 basic operations.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 3`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is object-oriented programming? - Object-oriented programming is a programming paradigm that uses objects and classes to structure code.\n\n2. What is a CRUD application? - CRUD stands for “create, read, update, delete” and refers to the operations that can be performed on a database or application.\n\n3. What is the difference between object-oriented programming and procedural programming? - Object-oriented programming focuses on creating objects and classes to organize code, while procedural programming works with functions and commands to execute tasks.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 3`
  //         )}?`,
  //         response: `\n\n1. Understand the overall concept of Object Oriented Programming (OOP) and its components: classes, objects, methods, inheritance, encapsulation, polymorophism.\n2. Understand the concepts of Abstraction, Encapsulation and Modularity, and the role they play in achieving well-crafted software.\n3. Learn the basics of data design and strategy, such as SQL and MongoDB.\n4. Understand basic concepts of CRUD - Create, Read, Update, and Delete.\n5. Be familiar with the libraries and best practices for implementing CRUD operations with multiple languages and technologies.\n6. Understand how to properly store, retrieve and query large amounts of data.\n7. Learn how to diagnose and resolve common errors that arise from applying OOP principles into CRUD operations.\n8. Understand the role of security measures and consider their importance when implementing a CRUD application.\n9. Be familiar with software design patterns such as Model-View-Controller (MVC) and how they apply to CRUD applications.\n10. Learn how to properly test for specific requirements and assumptions when building a CRUD application.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 3`
  //         )} with no other text in Java?`,
  //         response: `\n\nExample of Object Oriented Programming and CRUD Applications in Java:\n\npublic class StudentRecord {\n    private int id;\n    private String name;\n    \n    // Constructor\n    public StudentRecord(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n    \n    // Getters and Setters\n    public int getId() {\n        return id;\n    }\n    public void setId(int id) {\n        this.id = id;\n    }\n    public String getName() {\n        return name;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n    \n    // CRUD methods\n    public void create() {\n        // Code to create a new student record in the database\n    }\n    public void read() {\n        // Code to read an existing student record from the database\n    }\n    public void update() {\n        // Code to update an existing student record in the database\n    }\n    public void delete() {\n        // Code to delete an existing student record from the database\n    }\n}`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 3`
  //         )} in exactly one sentence?`,
  //         response: `\n\nObject Oriented Programming is a programming paradigm that uses abstraction to create objects and classes for improving the program structure. CRUD applications are computer programs designed for basic Create, Read, Update, and Delete operations on data in a database.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 3`
  //         )} without any answers?`,
  //         response: `\n\n1. What is the purpose of object-oriented programming?\n2. In what ways do CRUD applications facilitate data management?\n3. How is object-oriented programming used to create complex applications?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 4": {
  //     documentID: ``,

  //     filler: ``,

  //     hasCode: true,
  //     highValue: false,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `4. Internet Apps`, // may not need - `name`
  //     header: `4. Internet Apps`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976614/Video_7_tr3uts.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 4`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain how the data created by HTTP methods and machine learning algorithms are related?`,
  //         response: `\n\nData created by HTTP methods and machine learning algorithms are related in that both produce data that can be used for analysis. HTTP methods generate data about how users interact with a website; for example, what pages they visit, how long they stay on the page, and what session activation times are. Machine learning algorithms generate data related to how algorithms use data to make predictions or decisions; for example, what data inputs were used to trigger a certain result, how the algorithm learned from past experiences, and what parameters impact the accuracy of models. Both methods can be used to draw insights, create models, and form decisions around data.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 4`
  //         )}?`,
  //         response: `\n\nHTTP methods are the building blocks of how a web application communicates with the server. They instruct the server to take a specific action. The methods are: GET, POST, PUT, PATCH and DELETE. GET requests are used to retrieve a resource from the server. POST requests are used to send data to the server. PUT requests are used to upload or update a resource on the server. PATCH requests are used to partially update a resource on the server. DELETE requests are used to remove a resource from the server.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 4`
  //         )} with one sentence answers?`,
  //         response: `\n\n1.What is the difference between GET and POST methods? - GET is used to request data from a specified source, while POST is used to send data to a specified source. \n2. What is the DELETE method used for? - DELETE is used to delete data on a specified source. \n3. What is the PUT method used for? - PUT is used to update or replace existing data on a specified source.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 4`
  //         )}?`,
  //         response: `\n\n1. GET - allows clients to view and request data from a server. \n2. POST - allows clients to send data to be processed to the server. \n3. HEAD - similar to GET, but only returns metadata or the response headers. \n4. PUT - allows clients to upload a file to the server. \n5. DELETE - requests the server to delete a specified resource. \n6. TRACE - echoes back to the client whatever was sent to the server. \n7. OPTIONS - used to describe the communication options for the request-response pair. \n8. CONNECT - allows the client to establish a connection with the server. \n9. PATCH - used to partially modify an existing resource. \n10. LINK - helps in establishing relationships between multiple web resource requests.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         humanTouch: true,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 4`
  //         )} with no other text in javascript to create a transaction with Stripe?`,
  //         response: `\n\nYes, you can use the following code example to create a transaction with Stripe in JavaScript:\n\n// Create the transaction with Stripe \nconst Stripe = require('stripe');\nconst stripe = new Stripe('<YOUR_STRIPE_SECRET_KEY>'); \n\n//Create the transaction details\nconst transactionDetails = {\n  amount: 10.00,\n  currency: 'usd',\n  source: '<token generated by Stripe.js>'\n};\n\n//Submit the transaction details to Stripe\nstripe.charges.create(transactionDetails, (err, charge) => {\n  if (err) {\n    console.log(err); \n  } else { \n    console.log('Transaction successful');\n  }\n});`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 4`
  //         )} in exactly one sentence?`,
  //         response: `\n\nHTTP methods are commands that a client sends to a server to indicate the desired action to be performed on a provided resource.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 4`
  //         )} without any answers?`,
  //         response: `\n\n1. What common HTTP methods are used in RESTful web services?\n2. What is the main purpose of the OPTIONS method?\n3. What is the HTTP method used to modify an existing resource?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 5": {
  //     documentID: ``,

  //     filler: ``,

  //     hasCode: true,
  //     highValue: false,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `5. Loops & Counting`, // may not need - `name`
  //     header: `5. Loops & Counting`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976614/video_8_t7tvep.mp4", // may not need
  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 5`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain what kind of loops Google or OpenAI  uses in their search algorithms?`,
  //         response: `\n\nGoogle and OpenAI use many different kinds of loops in their search algorithms, including for loops, while loops, recursive loops, and more. For loops are used to iterate through a sequence of items, while while loops are used to continue repeating a set of instructions until a certain condition is met. Recursive loops are used to call a function within itself, allowing for deeper exploration of search queries. Google and OpenAI also use machine learning algorithms in their search algorithms to optimize the looping and increase the efficiency of their search results.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 5`
  //         )}?`,
  //         response: `\n\nComputer programming loops use a statement or set of statements to repeat a block of code. \nLoops allow us to repeat a set of statements for a given number of times or until a certain condition is met. Loops are used to iterate over collections of data or create animations, and come in three main types: for, while, and do-while loops.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 5`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is a loop in programming? -Looping is the ability to repeat a set of instructions until a condition is met. \n2. What is the difference between a while loop and a for loop? -A while loop runs slightly differently than a for loop. A for loop runs for a specific number of iterations, while a while loop runs until a certain condition is met. \n3. What is an infinite loop? -An infinite loop is a loop that runs indefinitely, never reaching a completion point.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 5`
  //         )}?`,
  //         response: `\n\n1. Understand what a loop is and its role in programming.\n2. Know the most common types of loops and their syntax.\n3. Become familiar with iteration and understand how it works in loops.\n4. Understand the concepts of loop control variables.\n5. Learn how to use for and while loops for different tasks.\n6. Know when and how to break out of a loop.\n7. Familiarize yourself with continue and its usage in loops.\n8. Understand nested loops and when they should be used.\n9. Learn how to use recursion as an alternative form of looping.\n10. Familiarize yourself with different debugging tools and how to use them to identify and solve errors related to looping.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 5`
  //         )} with no other text in C#?`,
  //         response: `\n\nfor (int i = 0; i < 10; i++)\n{\n    Console.WriteLine(i);\n}`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 5`
  //         )} in exactly one sentence?`,
  //         response: `\n\nComputer programming loops are a set of instructions that are repeated until a specific condition is met.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 5`
  //         )} without any answers?`,
  //         response: `\n\n1. What type of loop should be used when you want to iterate over a collection of items in the same order that they appear in the collection? \n\n2. What keyword is used in most programming languages to start and end a loop? \n\n3. How do you prevent an infinite loop from running indefinitely in a program?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 6": {
  //     documentID: ``,

  //     filler: ``,

  //     hasCode: true,
  //     highValue: false,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `6. HTML`, // may not need - `name`
  //     header: `6. HTML`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976512/Video_9_uoedla.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 6`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain why Facebook created React, its position in the market, and how it's related to how HTML was coded for myspace pages?`,
  //         response: `\n\nFacebook created React to modernize how webpages are coded. React is a JavaScript library that enables developers to create user interfaces. In the market, React serves as a powerful solution for building modern web, mobile, and desktop applications. It is related to how HTML was coded for MySpace pages in that it is also used to build webpages, but is much more advanced than HTML as it is a JavaScript library, which allows developers to create complex user interfaces, unlike HTML which only provides basic building blocks.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 6`
  //         )}?`,
  //         response: `\n\nHTML (HyperText Markup Language) is the standard language used for designing webpages and web applications. It uses a collection of tags to define the structure and content of webpages. The tags describe the content and arrange it into sections, paragraphs, headings, lists, links, and images. HTML also enables the designer to add styles or scripts to further customize the page's look and functionality.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 6`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is HTML? - HTML is the standard markup language for creating web pages and web applications. \n2. How do I create a link in HTML? - To create a link in HTML, use the <a> tag with the href attribute.\n3. How do I create an HTML table? - Use the <table> tag to create an HTML table.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 6`
  //         )}?`,
  //         response: `\n\n1. Understand the syntax rules for HTML elements and structure\n2. Know the differences between HTML versions, including HTML4, XHTML and HTML5\n3. Be aware of how to structure and divide HTML code into sections for readability\n4. Become familiar with the use of HTML tags, including table, paragraph and list tags\n5. Learn the basics of using hyperlinks and internal/external links\n6. Develop an understanding of the attributes, such as styles and classes, that can be used in HTML document\n7. Comprehend the basics of displaying multimedia like video, audio and Flash content\n8. Understand the structure and arrangement of meta tags and metadata\n9. Learn how to detect and troubleshoot HTML errors and bugs\n10. Grasp the basics of using HTML forms and input fields`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         humanTouch: true,
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of a box with a name centered using flexbox positioning in ${ultimateEffeciencyJutsu(
  //           `Lesson 6`
  //         )} with no other text in HTML?`,
  //         response: `\n\n<div style=\"display: flex; justify-content: center;\"> \n  <div>MyName</div> \n</div>`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 6`
  //         )} in exactly one sentence?`,
  //         response: `\n\nHTML (HyperText Markup Language) is a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 6`
  //         )}?`,
  //         response: `\n\n1. What is the basic syntax of an HTML tag?\n2. What is the purpose of the <head> tag in an HTML document?\n3. How can you reference a custom external stylesheet in an HTML document?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 7": {
  //     documentID: ``,

  //     filler: ``,

  //     hasCode: true,
  //     highValue: false,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `7. CSS`, // may not need - `name`
  //     header: `7. CSS`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976569/video_10_otgaue.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 7`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         humanTouch: true,
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please how designers use tools like Figma and CSS?`,
  //         response: `\n\nDesigners use tools like Figma to create visuals and wireframes; they use CSS to create the design styling, layouts, grid designs, and page layout structure. Figma is used to create a visual representation of the design, such as a color, font and design layout. Then, CSS can be used to bring this design to life by styling the elements and adding animations, transitions, and other interactive features. Additionally, designers use CSS to make sure their designs are responsive and work properly on different devices and browsers.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 7`
  //         )}?`,
  //         response: `\n\nCSS stands for "Cascading Style Sheets" and is a type of language used to create the design, style, and layout of a webpage. It describes the look and formatting of documents written in HTML or XML, and can be used to style webpages, text, images, and even audio and video content. CSS can be used to adjust some basic things like font size, background colors, and border colors, etc., as well as more complex styling and layout configurations.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 7`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What are the benefits of using CSS? - CSS enables designers to create attractive and interactive webpages without writing long lines of code.\n\n2. How do I add a background image to my web page with CSS? - The CSS background-image property is used to set an image as the background of an element.\n\n3. How can I create flexible layouts with CSS? - CSS Flexbox allows developers to build flexible web layouts through shared properties and alignments.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 7`
  //         )}?`,
  //         response: `\n\n1. Understand basic concepts such as HTML elements, selectors, classes and ID attributes.\n\n2. Know the various CSS selectors and their uses, such as element selectors, class selectors and ID selectors.\n\n3. Learn how to apply text-level, block-level and box properties to elements.\n\n4. Practice using shorthand properties to control multiple CSS properties.\n\n5. Master the use of CSS positioning elements to control the flow and order of presentation.\n\n6. Understand the basics of working with forms, including styling form elements.\n\n7. Learn how to create dynamic pages in CSS by understanding hover states, dynamic page selection and page transiting.\n\n8. Familiarize yourself with browser-dependent templates and hacks to ensure consistently appearing pages.\n\n9. Understand the basics of working with layout via the float, clear and display properties.\n\n10. Research cross-browser problems such as box models, table rendering and page elements.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of the box model and flexbox in ${ultimateEffeciencyJutsu(
  //           `Lesson 7`
  //         )} with no other text in CSS?`,
  //         response: `\n\nYes! Here is an example of the box model in CSS:\n\ndiv {\n    width: 100px;\n    height: 100px;\n    border: 1px solid black;\n    padding: 10px;\n    margin: 20px;\n}\n\nAnd here is an example of flexbox in CSS:\n\ndiv {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 7`
  //         )} in exactly one sentence?`,
  //         response: `\n\nCSS is a stylesheet language used to define the presentation of HTML elements on a web page.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 7`
  //         )} without any answers?`,
  //         response: `\n\n1. What's the difference between margin and padding in terms of CSS styling? \n2. What kind of selector would you use to target a div element with an ID of 'container'? \n3. What is the purpose of using float in CSS?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 8": {
  //     documentID: ``,

  //     filler: ``,

  //     hasCode: true,

  //     highValue: false,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `8. React`, // may not need - `name`
  //     header: `8. React`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976543/video_11_j3ce46.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 8`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can React programming be used to code apps with AI or blockchain?`,
  //         response: `\n\nYes, React programming can be used to code apps with AI or blockchain. React Native allows developers to create powerful and robust applications with AI and blockchain capabilities. You can also use tools like Hyperledger or Ethereum to create blockchain-based applications with React.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 8`
  //         )}?`,
  //         response: `\n\nReact is a JavaScript library for building user interfaces. It is a component-based library which allows developers to write components that manage their own state and can be easily combined with other components to make complex user interfaces. React also provides a declarative API for creating UI elements, allowing developers to more easily create dynamic and interactive web applications.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 8`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is React? Ans: React is a JavaScript library for building user interfaces. \n2. How is React different from other JavaScript frameworks? Ans: React is a library, while other frameworks like Angular and Vue are full-fledged frameworks.\n3. What is the virtual DOM? Ans: The virtual DOM is an abstract copy of the actual DOM, which React utilizes to minimize DOM manipulation.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 8`
  //         )}?`,
  //         response: `\n\n1. Become familiar with basic concepts, such as components, props, state, and lifecycle\n2. Understand core features, such as JSX and the Virtual DOM\n3. Learn the basics of the React architecture and how to create React applications\n4. Compare React to other frameworks, such as Angular and Vue\n5. Master the React syntax and writing efficient React components\n6. Learn the best practices when working with React and create scalable applications\n7. Become familiar with popular libraries, such as Redux, React Router, and React Transition Group\n8. Use debugging tools to identify and resolve issues\n9. Understand the best practices for security and performance optimization\n10. Utilize testing frameworks such as Mocha, Chai, and Jest to ensure code quality`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         humanTouch: true,
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of a "login with Google" button in ${ultimateEffeciencyJutsu(
  //           `Lesson 8`
  //         )} with no other text in React?`,
  //         response: `\n\nYes, here is an example of a \"Login with Google\" button in React programming, with no other text:\n\nimport React from \"react\";\nimport { GoogleLogin } from 'react-google-login';\n \nconst LoginComponent = () => {\n  const responseGoogle = (response) => {\n      console.log(response);\n  }\n \n  return (\n    <GoogleLogin\n        clientId=\"YOUR_CLIENT_ID\"\n        buttonText=\"Login with Google\"\n        onSuccess={responseGoogle}\n        onFailure={responseGoogle}\n        cookiePolicy={'single_host_origin'}\n    />\n  );\n}\n \nexport default LoginComponent;`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 8`
  //         )} in exactly one sentence?`,
  //         response: `\n\nReact is an open-source JavaScript library for building user interfaces.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 8`
  //         )}?`,
  //         response: `\n\n1. What is the purpose of React's component lifecycle methods?\n2. What is the fundamental difference between a Class component and a Functional component in React?\n3. What is the purpose of the useState hook in React?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 9": {
  //     documentID: ``,

  //     filler: ``,

  //     highValue: false,
  //     hasCode: true,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `9. Creating Users`, // may not need - `name`
  //     header: `9. Creating Users`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976586/video_12_wii6so.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 9`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain how companies are able to collect data when creating users on their platform?`,
  //         response: `\n\nCompanies are able to collect data from users when they create an account by using a series of registration or sign-up forms where the user is asked to provide information. This information may include name, age, gender, location, email, phone number, and other details. This data is then stored in the company’s database, which is later accessed by data scientists and other team members to gain insights into user behaviour, needs and preferences.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 9`
  //         )}?`,
  //         response: `\n\nOAuth is an open-standard authorization protocol or framework that describes how users can access resources on third-party websites or applications through a secure system. It works by providing access tokens, which are essentially encrypted keys that identify a user and give them access to a restricted resource. Users log in to their accounts and authorise the third-party application to access their data by providing a specific access token. The application then presents the token to the service provider, which the service provider then verifies and allows the access to the user-assigned resource. OAuth promotes secure access to user data through stronger authentication mechanisms, as well as by allowing users to revoke app access rights at any time.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 9`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is OAuth? Answer: OAuth is an open standard authorization framework that allows applications to securely access resources on behalf of a user.\n\n2. What is the difference between OAuth and OpenID? Answer: OAuth is used to authorize third-party applications to access user resources, whereas OpenID is used to authenticate users.\n\n3. What is a Bearer Token? Answer: A Bearer Token is an access token that grants its holder access to a protected resource without additional authentication.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 9`
  //         )}?`,
  //         response: `\n\n1. OAuth is an open-source authorization protocol that allows users to securely access resources without sharing personal credentials.\n\n2. OAuth enables clients to access resources on behalf of a user without having to store or handle the user's credentials.\n\n3. OAuth uses tokens which identify the authenticated user and the scope of access permitted to the resource.\n\n4. OAuth uses an authorization server and a resource server to manage access to resources.\n\n5. OAuth provides various permission-granting options, including authorization codes, implicit grants, resource owner credentials, and client credentials.\n\n6. OAuth is used to authorize access to web services, APIs, and mobile applications.\n\n7. OAuth supports applications built on different operating systems, such as web, mobile, and desktop.\n\n8. OAuth provides support for both the client and the resource server to communicate securely over the internet.\n\n9. OAuth enables applications to access user data on other websites and in the cloud.\n\n10. OAuth is built on the concept of secure delegation and is used in many popular applications, such as Google, Amazon, and Twitter.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of using ${ultimateEffeciencyJutsu(
  //           `Lesson 9`
  //         )} with no other text in ruby?`,
  //         response: `\n\nHere is a basic example of how to implement OAuth in Ruby.\n\nrequire 'base64'\nrequire 'net/https'\nrequire 'uri'\nrequire 'json'\n\n# Client ID and secret\nclient_id = 'yourclientid'\nclient_secret = 'yourclientsecret'\n\n# HTTP request URL \nurl = 'https://example.com/oauth/token'\n\n# Encode credentials\ncredentials = Base64.strict_encode64(\"#{client_id}:#{client_secret}\")\n\n# Create the HTTP objects\nuri = URI.parse(url)\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\n# Create the POST request\nrequest = Net::HTTP::Post.new(uri.request_uri)\n\n# Set headers\nrequest.basic_auth('Basic', credentials)\nrequest.add_field('Content-Type', 'application/x-www-form-urlencoded')\n\n# Set body params\nrequest.body = 'grant_type=client_credentials'\n\n# Send request\nresponse = http.request(request) \n\n# Parse response\ndata = JSON.parse(response.body)\n\n# Extract the access token\naccess_token = data['access_token']`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 9`
  //         )} in exactly one sentence?`,
  //         response: `\n\nOAuth is an open authorization protocol that enables secure API authentication.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 9`
  //         )}?`,
  //         response: `\n\n1. How does OAuth enable secure access to data?\n\n2. What are the different OAuth authorization flows?\n\n3. How does OAuth differ from OpenID Connect?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 10": {
  //     documentID: ``,

  //     filler: ``,

  //     highValue: false,
  //     hasCode: true,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `10. Database Foundations`, // may not need - `name`
  //     header: `10. Database Foundations`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976542/video_13_kz1ogx.mp4", // may not need
  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 10`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain how users in a databases and machine learning are related?`,
  //         response: `\n\nUsers in a database and machine learning are related because having more users in a database provides more data for the machine learning algorithm to analyze. This data can be used to train the machine learning model, as well as to improve the model's accuracy. In other words, the more information available in the database, the better the machine learning model can be trained and the more accurate it can become.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 10`
  //         )}?`,
  //         response: `\n\nDatabase design involves creating a logical and physical structure of a database, using software applications and specialized programming tools. This process involves mapping out the structure of the data, setting up and maintaining the data storage parameters, and creating the necessary rules and regulations to manage the data. Database design also involves setting up the processes needed to manage the flow of data into and out of the system. Finally, it also involves setting up any necessary user access and security protocols.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 10`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is normalization? - Normalization is a process of organizing data in a database to minimize redundancy and dependency.\n\n2. What is a primary key? - A primary key is a unique identifier for a record in a database table.\n\n3. What is the difference between clustered and nonclustered index? - A clustered index stores the data in a sorted format, while a nonclustered index only stores a reference to the data.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 10`
  //         )}?`,
  //         response: `\n\n1. Understand the importance of database design and be familiar with the different ways it is used. \n2. Learn Database Theory and how to use it to organize and manage data. \n3. Understand the basics of database architecture and the different components used.\n4. Learn the role and importance of data modeling and how it relates to database design.\n5. Have an understanding of Normalization techniques used in database design.\n6. Be familiar with different database programming language syntax and tools.\n7. Learn about the different types of keys and how they can be used to maintain data integrity. \n8. Be able to create and maintain database tables, fields, and data relationships. \n9. Understand the different security measures that should be taken when designing and maintaining a database.\n10. Understand the importance of user interaction with databases, incorporating language(s) such as SQL, PL/SQL, AND T-SQL.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         humanTouch: true,
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of noSQL with firebase and SQL and mySQL?`,
  //         response: `\n\nNoSQL example with Firebase:\n\nConsider a Firebase database that stores student records. A NoSQL approach may store data in a document-like structure like this:\n\n{\n  Name: \"John Doe\",\n  Age: 22,\n  Preferences: {\n    Music: \"Classical\",\n    Language: \"English\"\n  },\n  Grades: {\n    Math: \"A+\",\n    Science: \"B\"\n  }\n}\n\nSQL example with MySQL:\n\nConsider a MySQL database that stores student records. A SQL approach may store data in a table-like structure like this:\n\nCREATE TABLE student_records (\n  Name VARCHAR(255),\n  Age INT,\n  Music VARCHAR(255),\n  Language VARCHAR(255),\n  Math CHAR(2),\n  Science CHAR(2)\n);\n\nINSERT INTO student_records (Name, Age, Music, Language, Math, Science) \nVALUES(\"John Doe\", 22, \"Classical\", \"English\", \"A+\", \"B\");`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 10`
  //         )} in exactly one sentence?`,
  //         response: `\n\nDatabase design is the process of creating a logical data structure used to store, manipulate and retrieve data efficiently.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 10`
  //         )}?`,
  //         response: `\n\n1. What is the process of data normalization, and why is it important in database design?\n2. How can data integrity be ensured when designing a database?\n3. What strategies can be employed when designing a database to optimize query performance?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 11": {
  //     documentID: ``,

  //     filler: ``,

  //     highValue: false,
  //     hasCode: true,
  //     underConstruction: true,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `11. Backend Clouds`, // may not need - `name`
  //     header: `11. Backend Clouds`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976562/video_14_xtmdsk.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 11`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain why serverless computing got popular?`,
  //         response: `\n\nServerless computing became popular in recent years thanks to its ability to abstract away the complexities of managing underlying cloud infrastructure, allowing developers to focus more on building the applications themselves. Serverless computing can be used to quickly build and deploy applications at scale, often with more reliability, durability and cost-effectiveness than traditional infrastructure. Additionally, it reduces the amount of manual work involved in setting up and coordinating a server infrastructure, as well as the ongoing operational costs associated with maintaining servers.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 11`
  //         )}?`,
  //         response: `\n\nBackend software engineering is the process of designing the programming and technology that power the web applications, websites, and other web-based products. This work involves using programming languages such as Java, Python, C#, and C++ to create the software’s code, logic, and architecture. It also involves setting up the infrastructure such as databases, web servers, and file systems to store and access the data. Finally, it also involves ensuring that the application product performs correctly and security policies are in place.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 11`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is backend software engineering? - Backend software engineering is the branch of software engineering related to devising, building, and maintaining the underlying architecture of digital applications.\n\n2. What skills are needed for backend software engineering? - Proficiency with software programming languages, database and server management, API development, and system architecture are all necessary skills for a successful backend software engineer.\n\n3. What is the best way to learn backend software engineering? - The best way to learn backend software engineering is to start with basics like HTML, CSS, and JavaScript then progress to more complex enterprise-grade programming languages.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 11`
  //         )}?`,
  //         response: `\n\n1. Understand back-end architectures including MVC, REST, and SOA \n2. Be familiar with popular server-side technologies such as Node.js, Ruby on Rails and Java\n3. Implement authentication and authorization\n4. Design and query databases such as MySQL and Postgres\n5. Understand caching mechanisms such as memcache and Redis\n6. Implement API services using web services such as SOAP and XML-RPC \n7. Utilize version control systems such as git\n8. Have a basic understanding of the command line and shell scripting\n9. Utilize DevOps strategies such as continuous integration, deployment and monitoring\n10. Know principles of security and scalability, such as potential threats and load balancing`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 11`
  //         )} with no other text in python?`,
  //         response: `\n\nA note from RO.B.E. ms. roxana is talking about sockets here. \n\nThey're really cool. \n\n Check out more here: https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/\n\n# Example of backend software engineering with no other text in Python:\n\n#import a necessary module\nimport socket\n\n#create a socket object\nsock = socket.socket()\n\n#Bind the socket to a port\nsock.bind(('', 55555))\n\n#listen for incoming connections\nsock.listen(5)\n\n#accept incoming connection\nconnection, addr = sock.accept()\n\n#receive data from the client\ndata = connection.recv(1024)\n\n#process the data \nresponse = process_data(data)\n\n#send the response to the client\nconnection.send(response)\n\n#close the connection\nconnection.close()`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 11`
  //         )} in exactly one sentence?`,
  //         response: `\n\nBackend software engineering is the development of server-side logic to provide a backend architecture for web applications.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 11`
  //         )} without any answers?`,
  //         response: `\n\n1. What is the purpose of dependency injection in web development?\n2. Describe the roles of models, views, and controllers in a back-end system.\n3. What is the role of object-relational mapping (ORM) in backend software engineering?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 12": {
  //     documentID: ``,

  //     filler: ``,

  //     highValue: false,
  //     hasCode: true,
  //     underConstruction: true,
  //     rare: false,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `12. Operating Systems & Machines`, // may not need - `name`
  //     header: `12. Operating Systems & Machines`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976596/video_15_ripydd.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 12`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain the relationship between ASICs, FPGAs, Tesla's Optimus robot and bitcoin miners?`,
  //         response: `\n\nASICs (application-specific integrated circuits) are specialized chips used to mine crypto-currencies, like bitcoin. They are built specifically to perform cryptocurrency mining calculations at higher speeds and greater efficiency than other chips like GPUs, CPUs, and FPGAs. ASICs are very important in the cryptocurrency market as they enable miners to mine more cryptocurrencies in less time.\n\nFPGAs (Field Programmable Gate Arrays) are microchips that can be programmed to perform specific tasks that ASICs would not be able to. FPGAs are more energy efficient than ASICs and can also be quickly reconfigured to perform different tasks. Although FPGAs are slower than ASICs, they can be used to mine alternative currencies.\n\nTesla's Optimus Robot is a robotic construction tool designed for large-scale projects. This tool can be programmed to build complex structures quickly and efficiently. Optimus Robot can be a powerful tool for large-scale cryptocurrency mining operations.\n\nBitcoin miners use computers and other hardware devices to validate Bitcoin transactions and keep the Bitcoin network secure. Bitcoin miners need specialized hardware to support the processing power and memory required to successfully mine Bitcoins. ASICs, FPGAs, and Radeon GPUs are popular choices for Bitcoin miners due to their excellent speed, efficiency and cost-effectiveness.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 12`
  //         )}?`,
  //         response: `\n\nThe basics of an operating system are: its purpose is to manage the hardware and software components of a computer system; it acts as an intermediary between applications and the computer hardware; it provides basic functions such as memory and process management, input/output device control, file system management, and data management; it also provides an interface for the user to interact with the system.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 12`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is an operating system? Answer: An operating system is software that manages the operation of a computer's hardware components.\n\n2. What are the main features of an operating system? Answer: Operating systems offer features such as memory management, process management, user interface, networking, and device driver support.\n\n3. What is the difference between a Linux-based and a Windows-based system? Answer: A Linux-based system is typically open source and free to use, while a Windows-based system requires a purchased license and is not open source.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 12`
  //         )}?`,
  //         response: `\n\n1. Understand the basic concept of computer operating systems and their components, including hardware and application elements. \n2. Learn about the different types of operating systems and the advantages and disadvantages of each.\n3. Learn how to set up network environments and connect devices to the system.\n4. Learn the process of installing, configuring, and maintaining an operating system.\n5. Learn to customize settings and user options, manage system resources and modify system preferences.\n6. Become familiar with different user interfaces and understand how to interact with them.\n7. Learn how to use command line tools to diagnose and troubleshoot issues.\n8. Learn how to configure security settings, including authentication and access control.\n9. Understand how to keep an operating system patched and up-to-date with available security updates.\n10. Learn how to back up data and restore the operating system after a hardware or software failure.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         humanTouch: true,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of kernel code written in C++?`,
  //         response: `\n\nHere is an example of kernel code written in C++:\n\n// Kernel code in C++ \n__global__ void simple_kernel(int *data) \n{ \n    int tid = threadIdx.x;\n    int i = blockIdx.x * blockDim.x + threadIdx.x;\n\n    // Kernel code here\n    data[i] *= 2; \n}`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 12`
  //         )} in exactly one sentence?`,
  //         response: `\n\nA computer operating system is a software that manages hardware and software resources to provide the necessary services for applications to run on a computer.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 12`
  //         )} without any answers?`,
  //         response: `\n\n1. In an operating system, what is the difference between the kernel and user space processes?\n\n2. What is the purpose of virtualization in an operating system?\n\n3. What is the master boot record and how is it used within an operating system?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 13": {
  //     documentID: ``,
  //     filler: ``,

  //     highValue: false,
  //     hasCode: true,
  //     underConstruction: false,
  //     completed: false,

  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `13. Setting Up An App`, // may not need - `name`
  //     header: `13. Setting Up An App`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976596/video_16_evebis.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 13`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain how things like chatGPT and command lines are similar?`,
  //         response: `\n\nChatGPT and command lines are both ways of interacting with a computer, usually via text-based input. Both involve providing input on a text-based interface, and the computer provides output in a similar way. The main difference is that command line interfaces require the user to type a command into the terminal in order to get the computer to do something, whereas with ChatGPT the user can just type a natural language question or statement and the computer will generate a response.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 13`
  //         )}?`,
  //         response: `\n\nA command line interface (CLI) is a means of interacting with a computer program where the user issues commands to the program in the form of lines of text (i.e. commands and arguments). This is usually done through a command shell, although other programs may also access the same features. In a command line interface, a user types in commands, which can include simple operations such as launching a program, copying or deleting a file, or more complex operations such as searching text files for a certain keyword. The command line interface is a powerful tool as it allows a user to quickly and easily access a vast array of computer programs, tasks, and settings with just a few simple keystrokes.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 13`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is a command line interface? Ans: A command line interface (CLI) is a method of interacting with a computer by typing text-based commands.\n\n2. How do I access a command line interface? Ans: Accessing a command line interface usually requires using a terminal emulator program.\n\n3. What is the difference between a terminal and a shell? Ans: A terminal is the graphical interface to interact with the command line whereas a shell is the program that interprets user commands.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 13`
  //         )}?`,
  //         response: `\n\n1. Understand the concepts and fundamentals of command line interfaces (CLI)\n2. Change the directory (cd)\n3. List and view content in the current directory (ls)\n4. Create new directories (mkdir)\n5. Remove existing directories (rmdir)\n6. Create/edit files (touch/vi)\n7. Copy, move, and rename files (cp/mv/rename)\n8. Find files (find)\n9. Basic commands for system and network administration (ping/ifconfig)\n10. Download files from the internet (wget/curl)`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 13`
  //         )} with basic npm commands?`,
  //         response:
  //           "// Example of basic coding logic in JavaScript\nlet x = 5;\nlet y = 10;\n\nif (x < y) {\n  console.log(`x is less than y`);\n} else {\n  (`x is greater than or equal to y`);\n}",
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 13`
  //         )} in exactly one sentence?`,
  //         response: `\n\nA command line interface is a user interface that allows a user to interact with a computer using text-based command inputs.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 13`
  //         )} without any answers?`,
  //         response: `\n\n1. What is a command line interface?\n2. What are the common commands available when using a command line interface?\n3. How does a command line interface differ from a graphical user interface?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 14": {
  //     documentID: ``,
  //     filler: ``,

  //     highValue: false,
  //     hasCode: true,
  //     underConstruction: false,
  //     completed: false,
  //     rare: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `14. Programming Money`, // may not need - `name`
  //     header: `14. Programming Money`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976632/video_17_weddln.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 14`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         humanTouch: true,
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain how the drug war, bitcoin and the bank secrecy act are related and how it may be problematic for civil liberties?`,
  //         response: `\n\nThe Drug War, Bitcoin and the Bank Secrecy Act are all related in the sense that each can potentially be used to facilitate illegal activity or money laundering. Bitcoin and the Bank Secrecy Act both provide a layer of privacy and anonymity that can be used by drug dealers and other criminals to mask illegal activities. This can be problematic for civil liberties because it allows individuals to commit crimes without fear of being caught, thus undermining the rule of law. Furthermore, the ability to easily move and exchange large amounts of money anonymously through digital currencies like Bitcoin has opened the door for new forms of criminal activity such as money laundering, tax evasion, and terrorism financing. Blockchain based currencies can also be used to circumvent sanctions and regulations, further eroding the legitimacy of legal systems.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 14`
  //         )}?`,
  //         response: `\n\nFinTech APIs are programmatic interfaces used by banks, financial institutions, and businesses to access financial services. They allow users to send, receive, and store digital funds, process payments, track money transfers, and manage financial data in an automated and secure way. These APIs have become increasingly popular as they offer scalability, provide businesses with more control over their payments, and offer a secure way to move money between different accounts. They offer a range of features and services, such as payments processing, digital money transfers, invoicing, fraud prevention, integrated marketing, data analytics, automated payment reconciliation, and more.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 14`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is an API in fintech? - An API in fintech allows third-party developers to access financial data and services.\n\n2. How does a fintech API work? - A fintech API works by providing an interface for developers to access financial data and services, without the need for manual intervention. \n\n3. What’s the benefit of using a fintech API? - By using a fintech API, businesses can quickly integrate powerful financial solutions and save time and money.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 14`
  //         )}?`,
  //         response: `\n\n1. Understand the different types of fintech APIs and their specific use cases \n2. Familiarize yourself with the various technologies used in fintech APIs including REST, SOAP, JSON, and OAUTH2 \n3. Learn how to integrate financial service APIs with third-party applications \n4. Understand how payment gateways and merchant processing APIs enable online and mobile payments \n5. Explore the security considerations around handling financial data \n6. Know the privacy and data protection aspects of financial services APIs \n7. Research the different pricing models for using fintech APIs \n8. Identify which financial services APIs can be used in particular jurisdictions \n9. Learn how to best use the APIs' documentation to create and test applications \n10. Monitor the development of new and emerging fintech APIs for opportunities.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of creating a transaction with Stripe's Javascript SDK?`,
  //         response: `\n\nSure. Here is an example of creating a transaction with Stripe's Javascript SDK.\n\n// Create a stripe instance using your Stripe API keys.\nvar stripe = Stripe('pk_test_your_stripe_key');\n\n// Create a card element and add it to the page.\nvar card = stripe.elements().create('card');\ncard.mount('#card-element');\n\n// Handle real-time validation errors from the card element.\ncard.addEventListener('change', function(event) {\n  var displayError = document.getElementById('card-errors');\n  if (event.error) {\n    displayError.textContent = event.error.message;\n  } else {\n    displayError.textContent = '';\n  }\n});\n\n// Handle form submission.\nvar form = document.getElementById('payment-form');\nform.addEventListener('submit', function(event) {\n  event.preventDefault();\n\n  stripe.createToken(card).then(function(result) {\n    if (result.error) {\n      // Inform the user if there was an error\n      var errorElement = document.getElementById('card-errors');\n      errorElement.textContent = result.error.message;\n    } else {\n      // Send the token to your server\n      stripeTokenHandler(result.token);\n    }\n  });\n});\n\n// Submit the form with the token ID.\nfunction stripeTokenHandler(token) {\n  // Insert the token ID into the form so it gets submitted to the server\n  var form = document.getElementById('payment-form');\n  var hiddenInput = document.createElement('input');\n  hiddenInput.setAttribute('type', 'hidden');\n  hiddenInput.setAttribute('name', 'stripeToken');\n  hiddenInput.setAttribute('value', token.id);\n  form.appendChild(hiddenInput);\n\n  // Submit the form\n  form.submit();\n}`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 14`
  //         )} in exactly one sentence?`,
  //         response: `\n\nFintech APIs allow for the secure integration of technology products with financial systems and services.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 14`
  //         )}?`,
  //         response: `\n\n1. What is the main purpose of a FinTech API?\n\n2. What type of information can a FinTech API provide?\n\n3. What are some of the benefits of using a FinTech API?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 15": {
  //     documentID: ``,
  //     filler: ``,

  //     highValue: false,
  //     underConstruction: false,
  //     hasCode: true,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `15. Creating Database`, // may not need - `name`
  //     header: `15. Creating Database`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976630/video_18_gjfmgl.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 15`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         humanTouch: true,
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request: `ms. roxana, can you please explain how entrepeneurs can use platforms like Firebase to create businesses?`,
  //         response: `\n\nEntrepreneurs can use Firebase, a cloud-based development platform, in various ways to create and grow businesses. Firebase provides powerful development and analytics tools, so you don't need to worry about setting up a backend or learning how to use a database. \n\nFirebase can help entrepreneurs create their apps with a few clicks and a few lines of code. It provides easy-to-use solutions for user authentication, data storage and hosting, serverless functions, and analytics that can help entrepreneurs understand their customers better. Firebase also provides tools for automating tasks such as marketing campaigns, customer support, and more. \n\nFirebase can provide a valuable platform for entrepreneurs to launch their businesses in a cost-effective and time-efficient manner. With the help of Firebase, entrepreneurs can quickly launch their products, test their ideas, and get an early start on their businesses.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 15`
  //         )}?`,
  //         response: `\n\nNoSQL with Firebase Firestore is a document-oriented NoSQL database designed for storing, syncing and querying large datasets for modern, web and mobile app development. It stores data as documents in a distributed cloud environment. Documents are stored in collections, with each document containing a set of key-value pairs. Firestore provides features like offline data synchronization, real-time data streaming, authentication and data validation. It also lets developers query and filter data and includes automatic scaling of data across multiple regions. Firestore also offers security rules to ensure data safety and access control.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 15`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is NoSQL and Firebase Firestore? - NoSQL is a non-relational database management system and Firebase Firestore is the cloud-hosted, NoSQL database provided by Google.\n\n2. Why should I use Firebase Firestore? - Firebase Firestore provides users with a scalable, real-time database that enables data synchronization in client and server-side applications.\n\n3. How does Firebase Firestore save my data? - Firebase Firestore stores data in collections of documents and fields within those documents, similar to MongoDB or CouchDB.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 15`
  //         )}?`,
  //         response: `\n\n1. Understand the purpose of using NoSQL and Firebase Firestore in modern development \n2. Become familiar with the different types of NoSQL databases, e.g. key-value pair, document-oriented, columnar, graph-based, etc.\n3. Understand the basics of the Firebase architecture and how it works with cloud computing\n4. Learn the basics of data modeling for NoSQL databases and how to structure data to optimize query performance\n5. Understand the scalability, security, and availability of NoSQL databases on the Firebase platform\n6. Understand the basics of client-side security and authentication features available in Firebase Firestore\n7. Become familiar with querying data in Firebase Firestore, including understanding different query types, such as data ordering, filtering, and aggregation\n8. Understand the basics of Firebase Firestore synchronization and real-time data streaming\n9. Get familiar with different features available in the Firebase console, such as monitoring and analytics\n10. Become proficient with development tools like Cloud Functions and Firebase SDKs for Android, iOS, and web development`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         humanTouch: true,
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 15`
  //         )} that stores openAI's ChatGPT messages in a collection with documents defined by user_id with no other text in javascript?`,
  //         response: `\n\nHere is an example of code that uses Firebase Firestore to store openAI's ChatGPT messages in a collection with documents defined by user_id with no other text in Javascript:\n\n//Wirte to Firestore using the Firebase web SDK \nvar firestore = firebase.firestore(); \n\n//Create a reference to the collection of openAI messages \nvar openAIMessagesRef = firestore.collection('chatGPT');\n\n//Create a reference to the specific user document \nvar userRef = openAIMessagesRef.doc(user_id); \n\nuserRef.set({\n   openAIMessage: openAIMessage,\n});`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 15`
  //         )} in exactly one sentence?`,
  //         response: `\n\nNoSQL Firebase Firestore is a cloud-based, scalable database service designed to store and sync application data in real time.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 15`
  //         )}?`,
  //         response: `\n\n1. What is the main advantage of using Firebase Firestore over other NoSQL databases?\n\n2. What are some of the features and benefits of using Firebase's cloud-hosted Firestore?\n\n3. How can developers structure data within Firebase Firestore to optimize performance?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  //   "Lesson 16": {
  //     documentID: ``,
  //     filler: ``,

  //     hasCode: true,
  //     highValue: false,
  //     rare: false,
  //     underConstruction: false,
  //     completed: false,
  //     needsImprovement: false,
  //     new: true,
  //     tooltip: ``,
  //     sourceType: `video`, // may not need
  //     button: `16. Working Together`, // may not need - `name`
  //     header: `16. Working Together`,
  //     fileSource:
  //       "https://res.cloudinary.com/eduprojectsil/video/upload/v1688976617/video_19_vnbbms.mp4", // may not need

  //     prompts: {
  //       patreon: {
  //         completed: false,
  //         impact: 1000,
  //         action: `generate`,
  //         icon: `►`, //`✍️`
  //         request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
  //           `Lesson 16`
  //         )}?`,
  //         response: `null`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       inspire: {
  //         humanTouch: true,
  //         completed: false,
  //         impact: 100,
  //         action: `inspire`,
  //         icon: `⚡`,
  //         request:
  //           "ms. roxana, can you please explain what robotic process automation is?",
  //         response: `\n\nRobotic process automation (RPA) is a type of technology that uses software bots (aka robotics) to execute simple and repetitive tasks and processes. They interact with applications, websites, databases, and systems, just like a human worker would, but at a much faster rate. RPA bots can be programmed to take over and automate common, tedious, and time-consuming digital tasks. They can complete these tasks using existing applications and systems, eliminating the need for manual data entry and human involvement in certain processes.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       summarize: {
  //         completed: false,
  //         impact: 100,
  //         action: `summarize`,
  //         icon: `📚`,
  //         request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
  //           `Lesson 16`
  //         )}?`,
  //         response: `\n\nGit is a version control system used for tracking changes made to projects over time. Github is a hosting platform for Git that is used to store and manage files and code in a project. It allows for collaboration between developers, thereby enabling them to update, author, review, and maintain project code. It also provides various security, branch management, and deployment features to make it easier for developers to work together. Additionally, Github offers a variety of integrations and tools to help streamline the development process.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       ask: {
  //         completed: false,
  //         impact: 100,
  //         action: `ask`,
  //         icon: `🔮`,
  //         request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
  //           `Lesson 16`
  //         )} with one sentence answers?`,
  //         response: `\n\n1. What is Git? - Git is an open source distributed version control system for tracking changes in source code.\n\n2. What is GitHub? - GitHub is a code hosting platform for version control and collaboration.\n\n3. How do I use Push and Pull in Git? - Push enables local changes to be uploaded to remote repositories, while pull allows changes from remote repositories to be downloaded to local branches.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       guide: {
  //         completed: false,
  //         impact: 100,
  //         action: `guide`,
  //         icon: `🤝`,
  //         request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
  //           `Lesson 16`
  //         )}?`,
  //         response: `\n\n1. Understand the difference between Git and Github – Git is a version control system, while Github is a cloud-based hosting service used to store and manage repositories.\n2. Learn how to create and clone a repository – the most basic step in using Git and Github.\n3. Know how to stage and commit changes – this is essential for tracking and managing changes to a repository.\n4. Gain familiarity with working with branches – branches help keep code organized and makes it easier to test possible changes before committing them to the main repository.\n5. Familiarize yourself with Cherry picking – Cherry picking allows you to choose specific commits from other branches and add them to your current branch. \n6. Understand how to use Github pull requests – If a team is working on the same project, pull requests are vital for enabling team collaboration.\n7. Be familiar with reverting a commit – Reverting a commit is useful for undoing any changes that have been made to a codebase. \n8. Become familiar with forking repositories – Forks are like separate copies of a repository, and are used to experiment without disrupting the main repository. \n9. Know how to manage merge conflicts – Merge conflicts arise when multiple people are making changes to a codebase at the same time, and they need to be managed to keep the codebase functional. \n10. Learn how to use Github Gists – Gists are short snippets of code that can be stored and shared with others.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       demonstrate: {
  //         completed: false,
  //         impact: 100,
  //         action: `demonstrate`,
  //         icon: `🎨`,
  //         request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
  //           `Lesson 16`
  //         )} with no other text in the command line?`,
  //         response: `\n\ngit clone https://github.com/username/repositoryname.git`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       define: {
  //         completed: false,
  //         impact: 100,
  //         action: `define`, // may not need
  //         icon: `🧿`, // may not need
  //         request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
  //           `Lesson 16`
  //         )} in exactly one sentence?`,
  //         response: `\n\nGit is a version control system for tracking changes in code, and Github is a cloud-based host for version control repositories.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },

  //       quiz: {
  //         completed: false,
  //         impact: 100,
  //         action: `quiz`,
  //         icon: `🧪`,
  //         request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
  //           `Lesson 16`
  //         )}?`,
  //         response: `\n\n1. What is the difference between Git and GitHub?\n2. What command is used to create a local Git repository?\n3. How can multiple collaborators work on an open source project in the same repository?`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //       shop: {
  //         completed: false,
  //         impact: 100,
  //         action: `shop`,
  //         icon: `🛍️`,
  //         request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
  //         response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
  //         spanish: ``,
  //         tooltip: ``,
  //       },
  //     },
  //   },
  // },
};
