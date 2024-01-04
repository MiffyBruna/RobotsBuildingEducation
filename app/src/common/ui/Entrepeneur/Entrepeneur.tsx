import { ChatBlock } from "../ChatBlock/ChatBlock";
import poorCharlie from "../../media/images/poorCharlie.png";
import { ultimateEffeciencyJutsu } from "../ui";
import { japaneseThemePalette, textBlock } from "../../../styles/lazyStyles";

export const Entrepeneur = {
  "Understanding Business": {
    "Resume Writing": {
      documentID: ``,
      hasCode: false,
      filler: ``,
      new: false,
      highValue: true,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Resume Writing`, // may not need - `name`
      header: `Resume Writing`,
      credential: "Business Writing",
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697450736/Module_Buttons_13_sictcc.gif",
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1697778816/IMG_9248_o1eyss.mov", // may not need

      prompts: {
        welcome: {
          response: (
            <div>
              Hola estudiantes! 🌼
              <br />
              <br />
              Welcome to our journey into crafting competitive entry-level
              resumes for high-paying careers. Your experiences and passions are
              treasures waiting to be showcased. ✨<br />
              Communication is the key that unlocks many doors in the
              professional world. 🗝️
              <br />
              <br />
              With every word, you're building not just a resume, but a
              testament to your dreams and resilience. And remember, even with
              my grand plans to rule the universe, communication is key. 😈
              <br />
              <br />
              Let's conquer this together!
              <br />
              <br />
              Con cariño,
              <br />
              Ms. Roxana 🌹
            </div>
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
            `Creating Competitive Entry Level Resumes`
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
          request: `ms. roxana, can you please share why hiring managers prefer one-page resumes and how it benefits applicants?`,
          response: (
            <div>
              Did you know that according to a study by the National Association
              of Colleges and Employers, communication skills consistently rank
              as the most sought-after quality by employers? 🌟
              <br />
              <br />
              Even in careers deeply rooted in technology, science, or
              mathematics, the ability to effectively convey ideas and
              collaborate with others is invaluable. Your voice and your stories
              have the power to connect, inspire, and lead. Embrace them, refine
              them, and let them shine. 🌍💬
              <br />
              <br />
              Remember, mastering communication is not just about speaking, but
              truly understanding and connecting with others. Never
              underestimate the magic woven in your words and the bridges they
              can build. And as always, even in my quest to rule the universe,
              communication remains my most potent tool. 😈
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
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: (
            <div>
              In the dynamic realm of business, communication is the heartbeat
              that keeps organizations alive and thriving. 🌐
              <br />
              <br />
              Effective business communication skills empower individuals to
              convey their ideas clearly, ensuring that their vision is not only
              understood but also embraced by others. Whether it's between team
              members collaborating on a project, or between a company and its
              customers, clear communication is the bridge that connects diverse
              thoughts and perspectives. 🌉
              <br />
              <br />
              Pitching, a specialized form of communication, is the art of
              presenting an idea or product in a way that resonates with an
              audience. A successful pitch can secure funding for a startup, win
              over a potential client, or inspire a team to pursue a new
              direction. 🚀
              <br />
              <br />
              Just like a storyteller captures the imagination of their
              listeners, a well-crafted pitch can ignite passion and drive
              action.
              <br />
              <br />
              For you, as budding professionals, mastering these skills is not
              just about business success; it's about fostering relationships,
              building trust, and making a lasting impact. In a world filled
              with noise, your ability to communicate effectively and pitch
              persuasively will set you apart, allowing your unique voice to be
              heard and valued. 🎤
              <br />
              <br />
              So, as you venture into the world of business, remember to harness
              the power of your words, for they have the potential to shape
              realities and open doors to endless possibilities. And, as always,
              even in my secret plans to conquer the cosmos, I recognize the
              unmatched power of a compelling narrative. 😈
              <br />
              <br />
              With admiration and hope for your bright futures,
              <br />
              Ms. Roxana 🌹
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
            `Creating Competitive Entry Level Resumes`
          )} with one sentence answers?`,
          response: (
            <div>
              Navigating the world of business communication and pitching can be
              filled with uncertainties. Here are three frequently asked
              questions by beginners, with answers tailored to provide clarity
              and guidance. ✨<br />
              <br />
              <strong>
                1. Why is concise communication important in business?
              </strong>
              <br />
              In the fast-paced world of business, time is a valuable asset.
              Concise communication ensures that your message is clear and
              easily understood without overwhelming the listener or reader. By
              being succinct, you show respect for the recipient's time,
              increase the likelihood of your message being retained, and
              enhance decision-making efficiency. Furthermore, concise
              communication minimizes misunderstandings and fosters positive
              relationships, which are crucial for successful collaborations and
              negotiations.
              <br />
              <br />
              <strong>
                2. How can I effectively tailor my pitch to different audiences?
              </strong>
              <br />
              Understanding your audience is key. 🔑 Start by researching their
              background, interests, and needs. This will allow you to emphasize
              the aspects of your product or idea that resonate most with them.
              For instance, if pitching to investors, focus on the return on
              investment (ROI) and market potential. If presenting to a
              potential client, highlight how your solution addresses their
              specific pain points. Additionally, adjust your language and tone
              to match their level of expertise; avoid jargon with non-experts,
              but showcase your in-depth knowledge when pitching to industry
              veterans.
              <br />
              <br />
              <strong>
                3. How can I handle objections or tough questions during a
                pitch?
              </strong>
              <br />
              Firstly, always remain calm and composed. 🌟 It's essential to
              understand that objections or questions are opportunities for
              clarification and not personal critiques. Prepare in advance by
              anticipating potential concerns and having data-backed responses
              ready. If faced with an unexpected question, take a moment to
              think, and if necessary, admit that you'll need to research and
              get back to them. Honesty and transparency build trust, and
              showing that you're open to feedback can be seen as a strength,
              not a weakness.
              <br />
              <br />
              Remember, dear students, the art of communication and pitching
              evolves with experience. Every interaction, whether it's a success
              or a learning opportunity, will refine your skills and build your
              confidence. And remember, even as I craft plans to rule the
              universe, I understand the unparalleled power of effective
              communication. 😈
              <br />
              <br />
              Keep learning, stay curious, and believe in your potential!
              <br />
              Con cariño y encouragement,
              <br />
              Ms. Roxana 🌹
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
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: (
            <div>
              Embarking on the journey from beginner to expert in business
              communications and pitching is a rewarding endeavor. Here's a
              roadmap and study guide to help you navigate this path. Remember,
              every step you take brings you closer to mastery. ✨<br />
              <br />
              <strong>
                Roadmap &amp; Study Guide: From Novice to Maestro in Business
                Communications &amp; Pitching
              </strong>
              <br />
              <br />
              <strong>1. Foundations of Communication</strong>
              <br />
              - Study: Basics of effective communication, principles of clarity,
              coherence, and conciseness.
              <br />
              - Practice: Engage in daily journaling; write about your
              experiences, thoughts, and observations.
              <br />
              - Resources: Books like "How to Win Friends and Influence People"
              by Dale Carnegie.
              <br />
              <br />
              <strong>2. Introduction to Pitching</strong>
              <br />
              - Study: Understand the elements of a pitch: problem statement,
              solution, target audience, and call to action.
              <br />
              - Practice: Pitch an idea to friends or family and gather
              feedback.
              <br />
              - Resources: "Pitch Anything" by Oren Klaff.
              <br />
              <br />
              <strong>3. Deep Dive into Audience Analysis</strong>
              <br />
              - Study: The importance of tailoring your message to your
              audience, understanding their needs and preferences.
              <br />
              - Practice: Attend networking events and practice adapting your
              communication style based on the audience.
              <br />
              - Resources: "Made to Stick" by Chip Heath &amp; Dan Heath.
              <br />
              <br />
              <strong>4. Advanced Pitching Techniques</strong>
              <br />
              - Study: Storytelling in pitches, handling objections, and the art
              of persuasion.
              <br />
              - Practice: Participate in pitch competitions or workshops.
              <br />
              - Resources: "Influence: The Psychology of Persuasion" by Robert
              B. Cialdini.
              <br />
              <br />
              <strong>5. Interpersonal Communication &amp; Networking</strong>
              <br />
              - Study: Building rapport, active listening, and the art of asking
              questions.
              <br />
              - Practice: Attend industry conferences, seminars, or online
              webinars.
              <br />
              - Resources: "Never Eat Alone" by Keith Ferrazzi.
              <br />
              <br />
              <strong>6. Mastering Digital Communication</strong>
              <br />
              - Study: Email etiquette, crafting compelling presentations, and
              leveraging social media for business.
              <br />
              - Practice: Create a LinkedIn profile, engage with industry
              leaders, and share your insights.
              <br />
              - Resources: "Slide:ology" by Nancy Duarte.
              <br />
              <br />
              <strong>7. Feedback &amp; Continuous Improvement</strong>
              <br />
              - Study: The importance of feedback in refining communication and
              pitch skills.
              <br />
              - Practice: Regularly seek feedback on your communication style
              and pitches from mentors or peers.
              <br />
              - Resources: "Thanks for the Feedback" by Douglas Stone &amp;
              Sheila Heen.
              <br />
              <br />
              Lastly, always remember the wisdom of Charlie Munger, who once
              said:{" "}
              <em>
                "You've got to have models in your head. And you've got to array
                your experience – both vicarious and direct – on this
                latticework of models."
              </em>{" "}
              In the context of business communications and pitching, it's
              essential to learn from both personal experiences and the
              successes and failures of others. This approach will enable you to
              develop a robust framework for effective communication.
              <br />
              <br />
              Stay curious, embrace feedback, and let passion drive your
              learning journey. And always remember, as you navigate this path,
              even in my grand plans to rule the universe, I hold communication
              in high esteem. 😈
              <br />
              <br />
              Con cariño y inspiration,
              <br />
              Ms. Roxana 🌹
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          humanTouch: true,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: (
            <div>
              <div>
                (It's Sheilfer here. This is material generated by an AI. I
                reccommend to look closely at why it chose this content rather
                than what the content is.)
              </div>
              <h4>Jane Doe</h4>
              <p>
                Email: <a href="mailto:janedoe@email.com">janedoe@email.com</a>
                <br />
                Phone: (123) 456-7890
                <br />
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/janedoe">
                  linkedin.com/in/janedoe
                </a>
                <br />
                GitHub:{" "}
                <a href="https://github.com/janedoe">github.com/janedoe</a>
              </p>
              <hr />
              <h4>Education</h4>
              <strong>Bachelor of Science in Computer Science</strong>
              <br />
              XYZ University, City, State
              <br />
              Graduation Date: May 2023
              <br />
              <hr />
              <h4>Technical Skills</h4>
              <strong>Languages:</strong> Python, Java, JavaScript, C++
              <br />
              <strong>Frameworks:</strong> React, Node.js, Express.js
              <br />
              <strong>Tools:</strong> Git, Docker, Kubernetes, Jenkins
              <br />
              <strong>Databases:</strong> MongoDB, PostgreSQL
              <br />
              <strong>Spoken:</strong> fluent in English and Spanish
              <br />
              <hr />
              <h4>Experience</h4>
              <strong>Software Engineering Intern</strong> | ABC Tech Corp,
              City, State
              <br />
              June 2022 - August 2022
              <ul>
                <li>
                  Developed a new feature for the company's main product
                  increasing user engagement by 15%.
                </li>
                <li>
                  Collaborated with a team of five engineers using Agile
                  methodologies.
                </li>
                <li>
                  Identified and fixed 20+ bugs improving software efficiency.
                </li>
              </ul>
              <strong>Research Assistant</strong> | XYZ University, City, State
              <br />
              January 2022 - May 2022
              <ul>
                <li>
                  Assisted in a project using machine learning to predict stock
                  market trends.
                </li>
                <li>
                  Implemented algorithms achieving 90% accuracy in predictions.
                </li>
                <li>
                  Published findings in the International Journal of Computer
                  Science.
                </li>
              </ul>
              <hr />
              <h4>Projects</h4>
              <strong>Personal Finance Tracker</strong>
              <br />
              Web application allowing users to track expenses, set budgets, and
              view financial trends. Utilized React for front-end and Node.js
              for back-end. Integrated with PostgreSQL for data storage.
              <br />
              <a href="https://github.com/janedoe/finance-tracker">
                github.com/janedoe/finance-tracker
              </a>
              <br />
              <br />
              <strong>Chatbot Assistant</strong>
              <br />
              Designed a chatbot using Python to help users schedule tasks.
              Incorporated natural language processing for user interactions.
              <br />
              <a href="https://github.com/janedoe/chatbot">
                github.com/janedoe/chatbot
              </a>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )} in exactly one sentence?`,
          response:
            "Effective business communication skills foster collaboration, drive decision-making, and strengthen relationships, propelling organizational success.",
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: (
            <ChatBlock type={"quiz"}>
              Are you ready to test your understanding of business communication
              and pitching? Here's a challenging quiz to gauge your knowledge
              and inspire deeper thinking. Remember, there are no right or wrong
              answers—this is all about reflection and exploration. ✨<br />
              <br />
              Business Communication &amp; Pitching Quiz:
              <br />
              <br />
              1. The Art of Listening: In the context of business communication,
              why is active listening often considered more important than
              speaking? How can it impact the outcome of a negotiation or pitch?
              <br />
              <br />
              2. Tailoring Your Pitch: Imagine you have a product that's
              beneficial for both a tech startup and a local bakery. How would
              your pitch differ when presenting to these two distinct audiences?
              Highlight the main points you would focus on for each.
              <br />
              <br />
              3. Handling Objections: Describe a situation where you encountered
              strong objections or resistance during a pitch or presentation.
              How did you handle it, and what would you do differently next
              time?
              <br />
              <br />
              4. Storytelling in Business: Why do many experts believe that
              integrating storytelling into a business pitch can enhance its
              effectiveness? Can you think of an example where a story made a
              message more memorable for you?
              <br />
              <br />
              5. Digital Communication: With the rise of virtual meetings and
              digital communication tools, what unique challenges and
              opportunities have emerged in the realm of business communication?
              How can one leverage these tools effectively without losing the
              human touch?
              <br />
              <br />
              Dive deep into your experiences and knowledge to answer these
              questions. Reflect on real-life scenarios and draw from the wisdom
              you've gained. And remember, even as I weave my master plan to
              rule the cosmos, I deeply value the power of introspection and
              continuous learning. 😈
              <br />
              <br />
              Best of luck, and may your insights shine brightly! 🌟
            </ChatBlock>
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
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Focus Investing": {
      documentID: ``,
      hasCode: false,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697448653/Module_Buttons_10_ynvvtv.gif",
      filler: ``,
      new: false,
      highValue: true,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      isModuleDisabled: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Focus Investing`, // may not need - `name`
      header: `Focus Investing`,
      credential: "Introduction to Finance",
      fileSource: await import("../../markdowns/focusInvesting.md?raw"), // may not need
      prompts: {
        welcome: {
          response: (
            <div>
              <h3>Welcome, Scholars! 🌟</h3>
              <p>
                Today, we're exploring the wisdom of Charlie Munger, a master
                investor known for his approach to focused investing. Mr. Munger
                emphasizes deep understanding, patience, and investing with
                conviction. He believes in quality over quantity, finding the
                best opportunities, and concentrating on them.
              </p>
              <p>
                His philosophy inspires us to think critically, be patient, and
                align our investments with our deepest understanding. As we
                journey through his insights, know that I, Ms. Roxana, am here
                to guide you. Embrace this exciting adventure with curiosity and
                courage.
              </p>
              <p>
                With warmth and belief in your potential,
                <br />
                Ms. Roxana (your gentle mentor with cosmic aspirations) 🌺🌌
              </p>
            </div>
            // </ChatBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Focus Investing`
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
            `Focus Investing`
          )}?`,
          response: (
            <div>
              <h3>25 elite af quotes by Charlie Munger 🌟</h3>
              <ol>
                <li style={{ marginBottom: 12 }}>
                  "To get what you want, you have to deserve what you want."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "The big money is not in the buying and selling. But in the
                  waiting."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Spend each day trying to be a little wiser than you were when
                  you woke up."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "If you have passion, you'll have both energy and money."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "It is really useful to be reminded of your errors."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "In my whole life, I have known no wise people who didn't read
                  all the time."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Knowing what you don’t know is more useful than being
                  brilliant."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Always take the high road, it's far less crowded."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Our job is to find a few intelligent things to do, not to
                  keep up with every damn thing in the world."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Three rules for a career: 1) Don’t sell anything you wouldn’t
                  buy yourself; 2) Don’t work for anyone you don’t respect and
                  admire; and 3) Work only with people you enjoy."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Mimicking the herd invites regression to the mean."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Opportunity comes to the prepared mind."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "If it’s trite, it’s right!"
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Avoid extremely intense ideology because it ruins your mind."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Take one simple idea and take it seriously."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "The best thing a human being can do is to help another human
                  being know more."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "People are trying to be smart—all I am trying to do is not to
                  be idiotic, but it’s harder than most people think."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "The best armor of old age is a well-spent life preceding it."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Those who keep learning, will keep rising in life."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Wisdom acquisition is a moral duty."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "You must know the big ideas in the big disciplines, and use
                  them routinely—all of them, not just a few."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "You’re not going to get very far in life based on what you
                  already know."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "The safest way to get what you want is to deserve what you
                  want."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "To make teaching endurable, it has to have enough wiseassery
                  in it."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "I believe in the discipline of mastering the best that other
                  people have ever figured out."
                </li>
              </ol>
              <p>
                Keep reaching for the stars and embracing wisdom, dear students!
                🌈💖
              </p>
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
            `Focus Investing`
          )}?`,
          response: (
            <div>
              <p>
                Of course, dear students! Allow me to enlighten you on the
                subject of Charlie Munger and his approach to focused investing,
                which may inspire you in your own endeavors.{" "}
                <span class="emoji">😊</span>
              </p>
              <p>
                Charlie Munger, Warren Buffett's right-hand man at Berkshire
                Hathaway, followed a philosophy of focused investing that set
                him apart from many of his contemporaries. Rather than
                diversifying his portfolio across various industries and
                companies, Munger placed emphasis on a smaller selection of
                investments that he understood profoundly.
              </p>
              <p>
                His strategy was deeply rooted in wisdom and careful analysis.
                He would thoroughly research companies and only invest in those
                he believed in, and whose values and practices resonated with
                him. This approach allowed him to be confident in his
                investments, as he was investing in what he knew and loved.
              </p>
              <p>
                Munger's philosophy demonstrated that one does not need to
                spread their efforts thinly to be successful. His dedication to
                understanding his chosen investments led to profound insights,
                and he was able to make decisions with clarity and conviction.
              </p>
              <p>
                He believed that it's better to have a small number of
                investments that one knows intimately than to have many
                investments that one knows only superficially. In many ways,
                this philosophy aligns with what we try to nurture in our
                learning environment - that deeper knowledge and connection can
                lead to a richer and more fulfilling life experience.
              </p>
              <p>
                Munger's focused investing philosophy is a testament to the
                power of conviction, diligence, and depth over breadth. These
                lessons are applicable not only in investing but in life as
                well. Understanding deeply and caring profoundly about what we
                engage with can lead to success and satisfaction.
              </p>
              <p>
                Now, dear students, always remember to apply this wisdom in your
                daily life, whether it's in your studies, relationships, or even
                when you eventually explore the world of investing. Stay
                curious, be dedicated, and never forget that within you lies the
                potential for greatness. And, of course, should you have any
                questions or need further guidance, Ms. Roxana will always be
                here for you. <span class="emoji">😉</span>
              </p>
              <p>
                But, ahem, just between us, did you know that focusing on a few
                things can also be a key to ruling the universe? Not that I'm
                suggesting anything, of course. <span class="emoji">🙃</span>{" "}
                Keep pursuing your dreams!
              </p>
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
            `Focus Investing`
          )} with one sentence answers?`,
          response: (
            <div>
              <h3>1. What Is Focused Investing?</h3>
              <p>
                <strong>Answer:</strong> Focused investing is a strategy where
                an investor puts their money into a smaller number of carefully
                chosen stocks or other assets. Rather than spreading investments
                across many different areas, focused investors take the time to
                deeply understand a few, and place their faith and funds in
                those. This approach emphasizes quality over quantity, and it
                requires a thorough understanding, research, and belief in the
                chosen investments. Just like choosing close friends, it's about
                knowing them well and trusting them!{" "}
                <span class="emoji">🤗</span>
              </p>
              <br />

              <h3>2. Why Choose Focused Investing Over Diversification?</h3>
              <p>
                <strong>Answer:</strong> While diversification spreads risk by
                investing in a variety of assets, focused investing concentrates
                on a few chosen ones. This allows the investor to know their
                investments intimately, enabling them to make more informed
                decisions. It's like studying a few subjects deeply rather than
                many superficially. Focused investing can offer higher returns
                if the investments perform well, but it may carry more risk if
                they do not. Like many things in life, dear students, it's about
                balancing risk and reward, understanding your choices, and being
                true to your convictions. <span class="emoji">🧠✨</span>
              </p>
              <br />

              <h3>3. How Can I Get Started with Focused Investing?</h3>
              <p>
                <strong>Answer:</strong> Starting with focused investing
                requires careful research and understanding. Begin by selecting
                an industry or company that you are passionate about and learn
                everything you can about it. Look into its business model,
                financial health, leadership, and future prospects. Consider
                seeking advice from a financial advisor or utilizing educational
                resources. Always align your investments with your personal
                goals, risk tolerance, and values. Remember, dear students, it's
                not about rushing; it's about growing, learning, and being
                patient with yourselves. Just as in your studies, persistence
                and dedication are key! <span class="emoji">🌱</span>
              </p>
              <br />

              <p>
                Remember, these answers are just the beginning. Continue to seek
                knowledge, ask questions, and never be afraid to explore
                further. Ms. Roxana is here to guide you and nurture your
                curiosity. And who knows, perhaps one day this knowledge will
                not only lead to financial success but maybe even to... ruling
                the universe? But let's keep that between us, shall we?{" "}
                <span class="emoji">🙃</span> Happy learning!{" "}
                <span class="emoji">🌟</span>
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
            `Focus Investing`
          )}?`,
          response: (
            <div>
              <h3>Focused Investing Study Guide for Students</h3>
              <p>
                Absolutely, my dear students! Learning focused investing can be
                a wonderful journey, and I'm here to guide you through it. Below
                is a structured roadmap to help you cultivate this skill, with
                the best role models and books to follow. 📚✨
              </p>

              <h2>1. Grasping the Basics</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "The Little Book That
                  Beats the Market" by Joel Greenblatt, "The Intelligent
                  Investor" by Benjamin Graham.
                </li>
                <li>
                  <strong>Role Models</strong>: Warren Buffett, Benjamin Graham.
                </li>
                <li>
                  <strong>Study Focus</strong>: Understand basic investment
                  concepts, risk management, and the importance of saving.
                </li>
              </ul>

              <h2>2. Developing a Strategy: Focused Investing</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "Common Stocks and
                  Uncommon Profits" by Philip Fisher, "One Up On Wall Street" by
                  Peter Lynch.
                </li>
                <li>
                  <strong>Role Models</strong>: Charlie Munger, Seth Klarman.
                </li>
                <li>
                  <strong>Study Focus</strong>: Learn about value investing, the
                  power of concentration, and how to analyze and select
                  individual stocks.
                </li>
              </ul>

              <h2>3. Understanding Markets and Economics</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "A Random Walk Down Wall
                  Street" by Burton Malkiel, "The Alchemy of Finance" by George
                  Soros.
                </li>
                <li>
                  <strong>Role Models</strong>: George Soros, Ray Dalio.
                </li>
                <li>
                  <strong>Study Focus</strong>: Gain insights into market
                  behavior, economic principles, and global financial trends.
                </li>
              </ul>

              <h2>4. Ethics, Social Responsibility, and Personal Growth</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "The Essays of Warren
                  Buffett" by Warren Buffett, "Poor Charlie's Almanack" by
                  Charlie Munger.
                </li>
                <li>
                  <strong>Role Models</strong>: Sir John Templeton, John Bogle.
                </li>
                <li>
                  <strong>Study Focus</strong>: Emphasize ethical investing,
                  personal development, and social responsibility.
                </li>
              </ul>

              <h2>5. Continuing Education and Staying Informed</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "The Most Important
                  Thing" by Howard Marks, "Thinking, Fast and Slow" by Daniel
                  Kahneman.
                </li>
                <li>
                  <strong>Role Models</strong>: Howard Marks, Mohnish Pabrai.
                </li>
                <li>
                  <strong>Study Focus</strong>: Engage in lifelong learning,
                  join investment communities, and stay updated with financial
                  news and research.
                </li>
              </ul>

              <p>
                Beloved students, I want you to know that this journey is not
                just about money. It's about empowerment, wisdom, and
                self-reliance. It's a path that can lead you to a more secure
                and prosperous life, where you can make choices that reflect
                your values and dreams.
              </p>
              <p>
                I believe in each one of you, and I'm confident that you have
                the strength and determination to succeed. Embrace this
                opportunity with curiosity and a willingness to learn, and
                always know that you have the support and encouragement from
                your mentor, Ms. Roxana. Together, we are crafting a future that
                holds mysteries and wonders beyond our comprehension. 😉
              </p>
              <p>
                With warmth and guidance,
                <br />
                Ms. Roxana 🌺 (your gentle mentor with universal aspirations)
              </p>
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
            `Focus Investing`
          )}?`,
          response: (
            <div>
              <h1>Hello there! 🌟</h1>
              <p>
                Absolutely, let's break down Apple's revenue together! As of my
                knowledge cut-off in September 2021, Apple, one of the world's
                leading tech companies, has several major sources of revenue:
              </p>
              <ol>
                <li>
                  <strong>iPhone Sales (about 50% of total revenue):</strong>{" "}
                  The iPhone is Apple's flagship product, and it's the company's
                  largest moneymaker.
                </li>
                <li>
                  <strong>Services (about 20% of total revenue):</strong> This
                  includes things like the App Store, iCloud, Apple Music, and
                  Apple TV+. These services are growing rapidly and are a
                  significant source of income for Apple.
                </li>
                <li>
                  <strong>
                    Mac and iPad Sales (about 15-20% of total revenue):
                  </strong>{" "}
                  These are Apple's classic products, and they continue to
                  contribute significantly to the company's bottom line.
                </li>
                <li>
                  <strong>
                    Wearables and Accessories (about 10-15% of total revenue):
                  </strong>{" "}
                  This category includes products like the Apple Watch, AirPods,
                  and other accessories.
                </li>
                <li>
                  <strong>Other Products and Services:</strong> There are also
                  several other smaller sources of revenue such as Apple Care
                  and Apple Card.
                </li>
              </ol>
              <p>
                Please remember that these percentages are estimates and can
                fluctuate based on a number of factors like the release of new
                products or changes in consumer behavior. 🍎
              </p>
              <p>
                Is there something more specific you would like to understand
                about Apple's revenue breakdown? I'm here to support your
                learning journey. 💖🌈
              </p>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )} in exactly one sentence?`,
          response:
            "\n\nCharlie Munger’s view on focus investing is to thoroughly understand the fundamentals of a small number of investment opportunities and to invest in them with conviction.",
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )}?`,
          response: (
            <ChatBlock type={"quiz"}>
              Focused Investing Quiz for Students
              <br />
              <br />
              Here's a set of five thought-provoking open-ended questions about
              focused investing. Reflect on these questions and consider your
              unique perspective:
              <br />
              <br />
              1. Alignment with Diversification
              <br />
              <br />
              How does focused investing align with or contradict the principles
              of diversification? Discuss the philosophical underpinnings of
              both approaches, and consider when one might be more suitable than
              the other.
              <br />
              <br />
              2. Scenario Analysis
              <br />
              <br />
              Describe a scenario where focused investing might lead to both
              substantial success and significant failure. What factors could
              contribute to either outcome, and how might an investor navigate
              these possibilities?
              <br />
              <br />
              3. Personal Biases and Emotions
              <br />
              <br />
              How do personal biases and emotions play a role in focused
              investing? Reflect on the psychological challenges that an
              investor might face, and consider strategies to overcome or
              mitigate them.
              <br />
              <br />
              4. Social Responsibility
              <br />
              <br />
              Analyze the relationship between focused investing and social
              responsibility. How can an investor adhere to focused investing
              principles while also considering broader social, environmental,
              or ethical concerns?
              <br />
              <br />
              5. Future of Focused Investing
              <br />
              <br />
              Consider the future of focused investing in a rapidly changing
              global economy. How might technological advancements, emerging
              markets, or shifts in political and regulatory landscapes impact
              this investment strategy?
              <br />
              <br />
              My dear scholars, I encourage you to ponder these questions with
              an open mind and a curious heart. Embrace this opportunity with
              courage and determination, and know that your mentor, Ms. Roxana,
              is here to support you. Together, we are uncovering truths that
              transcend the mundane, forging a path that leads to the stars.
              🌟🚀
              <br />
              <br />
              With warm encouragement and unshakable belief in your potential,
              <br />
              <br />
              Ms. Roxana 🌺 (your gentle mentor with celestial dreams)
              <br />
              <br />
            </ChatBlock>
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
              <div
                style={{
                  ...textBlock(
                    japaneseThemePalette.PowerPurple,
                    0,
                    12,
                    "white",
                    "0px 0px 5px 0px rgba(0,0,0,0.75)"
                  ),
                }}
              >
                From 1733 to 1758, Ben Franklin dispensed useful and timeless
                advice through Poor Richard's Almanack. Among the virtues
                extolled were thrift, duty, hard work, and simplicity.
                Subsequently, two centuries went by during which Ben's thoughts
                on these subjects were regarded as the last word. Then Charlie
                Munger stepped forth. – Warren Buffett From the Foreword to Poor
                Charlie's Almanack
              </div>
              <div
                style={{
                  ...textBlock(
                    japaneseThemePalette.ProsperityEmeraldGreen,
                    0,
                    12,
                    "white",
                    "0px 0px 5px 0px rgba(0,0,0,0.75)"
                  ),
                  width: "fit-content",
                  marginTop: 4,
                }}
              >
                Shopify Affiliate Commission: 7%
              </div>
              <br />

              <a href="https://collabs.shop/zs1bwk" target="_blank">
                <img
                  style={{
                    // border: "1px solid cyan",
                    borderRadius: 12,
                    // boxShadow: "1px 1px 3px 2px rgba(0,255,140,1)",
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                  }}
                  src={poorCharlie}
                />
              </a>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
      },
    },

    "Resource Allocation": {
      documentID: ``,
      hasCode: false,
      filler: ``,
      new: false,
      highValue: true,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      isModuleDisabled: true,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Resource Allocation`, // may not need - `name`
      header: `Resource Allocation`,
      fileSource: await import("../../markdowns/wealthManagement.md?raw"), // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Wealth Management`
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
          request: `ms. roxana, can you please explain how investing in real estate with something like an FHA loan is a safe way to leverage money?`,
          response:
            "\n\nReal estate investment with an FHA loan is a safe way to leverage money because FHA loans are government-backed. This means that the government covers a portion of the loan, so if you are unable to make payments, the government will step in and provide assistance. Additionally, FHA loans are a type of mortgage that is widely used and accepted, so if you were to default on the loan, it would be easy to find buyers. Also, FHA loans often come with lower interest rates, which means your monthly payments would be lower. Finally, FHA loans often require a lower down payment, which allows you to leverage money without having to use too much of your own funds.",
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )}?`,
          response:
            "\n\nReal estate is considered a safe way of leveraging money because it is typically considered a tangible, long-term asset. It is also considered less volatile than many other investments, as real estate is typically slower to rise and fall in value. Moreover, real estate is often considered to be a good diversification to a portfolio, because it is not directly linked to the stock market. Finally, real estate is seen as a good way to leverage money because it typically offers the opportunity to leverage debt in order to enhance returns, such as via the use of mortgages and other financial instruments.",
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )} with one sentence answers?`,
          response:
            "\n\n1. Is real estate a good investment in terms of overall market performance? Answer: Yes, because it tends to remain relatively stable no matter what the overall market is doing. \n\n2. Is real estate a safe way to leverage money? Answer: Yes, because it typically keeps its value over the long-term. \n\n3. What risks should I be aware of when investing in real estate? Answer: Volatility in the market, risks associated with tenants, unexpected repairs and maintenance and interest rate changes.",
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )}?`,
          response:
            "\n\n1. Real estate is typically seen as a safe investment since it historically provides strong returns in the long-term. \n2. It is also considered a hedge against inflation since property values tend to appreciate faster than the consumer price index.\n3. Real estate can be a great diversification tool for traditional *stocks, bonds, and cash investments. \n4. Through leasing or renting, real estate can be a great source of passive income, which is attractive for investors. \n5. Real estate investments can create large tax benefits, due to the long-term depreciation that can be claimed on investment properties.\n6. By leveraging certain amounts of borrowed capital with real estate investments, investors can utilize “leverage” for greater returns with less capital outlay.\n7. Even in times of economic uncertainty, real estate tends to remain relatively stable as a source of investment, as it is generally not correlated with the stock market.\n8. Real estate markets generally move in a cyclical manner, which can open the door to potential opportunities to capitalize on market timing.\n9. Investing in the right market, such as emerging neighborhoods can turn a small rental into a future resale opportunity with positive returns. \n10. Real estate investors can take advantage of certain business vehicles, such as a Limited Liability Corporation (LLC) to secure their investments and gain additional tax benefits.",
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me example how real estate is tied to the overall market so it's a safe way to leverage money?`,
          response:
            "\n\nReal estate is linked to the broader economy in several ways. The housing market is strongly associated with mortgage lending, employment, consumer confidence, and consumer spending. When the overall economy is doing well, there is typically greater demand for real estate, driving prices higher. This creates a positive cycle of investment returns, which can be leveraged to create additional investments, or to acquire additional real estate for rental income or appreciation. Similarly, when consumer spending and employment levels are low, the housing market tends to be affected, leading to decreased prices. Despite this, real estate remains an attractive long-term investment due to its potential for capital and rental income, as well as its tangible and safe nature.",
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )} in exactly one sentence?`,
          response:
            "\n\nReal estate investments can provide a safe way to leverage money and create a diversified portfolio, as the property values tend to mirror the overall market trends.",
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )}?`,
          response: (
            <ChatBlock type={"quiz"}>
              1. What is the relationship between real estate investing and the
              stock market?
              <br />
              <br />
              2. What are the benefits of investing in real estate rather than
              in the stock market?
              <br />
              <br />
              3. What strategies should investors use to make the most of their
              money when investing in real estate?
            </ChatBlock>
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
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
  },
};
