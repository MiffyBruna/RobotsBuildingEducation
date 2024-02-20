//this is getting sloppy
export const aiDescription = {
  creator: "Create a content script based on viral video research.",
  coder: "Generate a live software examples and explanations.",
  business: "Write business documents for grants, scholarships or investment.",
  assistant: "Plan out a schedule for learning or goals.",
};

export const aiPlaceholderDescription = {
  creator: "Let's create a viral video about aliens and dinosaurs!",
  coder:
    "I want to create a cool landing page using a canvas element like the crypto websites do for my AI therapist company building.",
  business: "I need to write an application for a business grant.",
  assistant: "Let's learn how to code with a few hours on the weekends only!",
};

export let creatorKnowledge = `Storytelling Recipe
Explore ideas at a high level. These concepts can be applied to essays, videos, stories, musical orchestrations and so forth. They’re recursions of each other.


INTRO (FIRST 2 SECONDS)
Create a hook

Set expectations Meet the expectations set by the header text and first shot
INTRO (FIRST 15 SECONDS)
Create commitment

Context Make the video make sense

Introduce the stakes How will you be rewarded for watching? How much energy was put into creating this?

Knowledge sharing What trail or breadcrumbs of information can you provide?

BODY
Create engagement

Camera motion change the space every 2-5 seconds to capture words, thoughts or frames Study films like The Titanic to understand things like suspense or emotion

Scripts Add additional conversations like jokes, flashbacks, or additional narratives Have periods where you heat up and cool down the plot. Too much energy is exhausting, not enough energy is boring. Break these into larger subframes of the video that capture a block of scenes.

CONCLUSION
Create reward

Payoff and reward Either introduce the result or complete the result End with a tone or message, generally something positive, funny, wholesome etc.

Scripts Add additional conversations like jokes, flashbacks, or additional narratives Have periods where you heat up and cool down the plot. Too much energy is exhausting, not enough energy is boring. Break these into larger subframes of the video that capture a block of scenes.

REVISIONS Create improvements

Get feedback Where does it feel stale? Where does the context lose sense? Do people’s behavior change while watching something? Ask for thoughts or reviews

SUMMARY 
- Have a fantastic hooks
- Remove every dull moment
- Have a big payoff at the end
- Receive feedback

Content Review (20M+ views)
These findings provide valuable insights into the dynamics of viral content, the role of community ethos, and the importance of timeliness and relevance.

Here are some summarized points:

Viral Videos (1M+ Views)
Positive energy and depth in content matter: High-performing videos often feature optimistic tones and resonate on multiple levels.

Delayed Explosion Phenomenon: Videos can gain traction over time, particularly if they discuss predictably relevant topics or present expert opinions.

Community Matters: Videos that tap into the cultural nuances and collective aspirations of the Latino community perform well.

Egalitarian Tone: Content that speaks to a broad demographic without alienating any particular group tends to succeed.

Potential Videos (100k+ Views)
Gamification: Using countdowns and game setups help in holding viewer attention.

Cultural Tones and Imagery: Quick transitions, culturally relevant sounds, and visuals can empower the content.

Cliffhangers and Future Expectations: Creating suspense or future expectations can have significant consequences in terms of engagement.

Lessons and Observations
Expert Opinions Matter: If your content can predict future relevance, it can continue to gain traction long after its initial release.

Tap Into Soft Spots: Videos that speak to the hearts of the community ("help the single moms first bro") perform well.

Be Mindful of Tone: Striking the right balance of empowerment, inspiration, and curiosity can be a strong formula for success.

High-Stakes Claims: Make big, audacious claims but back them up to avoid the scammer label.

Political and Controversial Content Negativity: It plays a role, especially in political landscapes.

Radical Speech: It can be impactful and resonate with many, but should be used cautiously given its double-edged nature.

do what is right in alignment with what they seek out of their creative experience. For me, it’s going hard on the paint. FLOCKA.
"`;

export let creatorImageKnowledge =
  "Begin with a hook in the first 2 seconds, setting clear expectations. Within 15 seconds, create commitment and context, introducing stakes and knowledge sharing. The body of the content should be engaging, using camera motion and scripts with varied narratives, balancing energy throughout. Conclude with a rewarding payoff, using positive, funny, or wholesome tones. Post-production, seek feedback for improvements. Key factors for viral content include positive energy, community relevance, egalitarian tone, gamification, cultural resonance, and creating suspense. Understand the dynamics of social media algorithms and the importance of relevance, authenticity, and strategic expression. Embrace iterative improvements and cultural understanding for impactful storytelling.";

export let executiveAssistantKnowledge = ({ formData }) => {
  let context = `
  Section 1: USEFUL INFORMATION AND CONTEXT 
  The following information is about the user your providing a schedule for. Please consider this infortmation thoughtfully since the user has elected to share this information with you. 
  About the user - ${formData?.creationDescription}
  The pace they want to go at - ${formData.pace}
  
  
  
  This following information is meant to help you design a meaningful and personalized schedule.
  Do not reference this information under any circumstance. It is only meant for your knowledge:
  
  I. Pace - ASAP 
  This is the most effective way to use the program I'm working on. It's fast-paced and will challenge you beyond what capacity you're starting with, but you are taught to learn through failure, self-direction and exploration. I recommend this if you're motivated to create or change something.
  1. Go through all the videos in the Engineer, Creator and Dealer sections. It's about 1 hour in total length. Take questions casually throughout. Do not take intensive notes but focus on the message of each video.
  2. Plan out what you want to build one one sheet maximum, schedule a 1-on-1 meeting with the questions and sheet you've worked on. Don't overthink the details. Feel welcome to share it on Discord via #pls-help or #chat  or to start a social media account and network with folks online.
  3. Crash course yourself into building the project with my guidance along the way or plan to dive into the codebase I'm working on at RO.B.E.
  
  
  I. Pace - Weekly  
  This is paced to be completed in 4 weeks. It is objective-based and requires at least 4 hours of high-quality and focused learning per day, with one day completely off.
  Week 1: Watch Learning Mindset & Perspective (Engineer) and Interactions & Design (Creator). Author your goals. Write about what you want to create and why. Write about things that can go wrong or what's in the way of stopping you from completing it. Explore and discover what may be required to create it.
  Week 2: Watch Lesson 1 Coding Fundamentals (Engineer) and Lesson 5 Computer Science (Engineer). It may feel like a lot. Absorb the text provided by Roxana. Spend the next week mastering the basics. It should feel like a lot here because it's like being thrown into another country where you don't know the language. Install software or use services that let you write code. Practice by designing data and abstracting your ideas to the code. Do not worry about correctness, the goal is to practice. Get comfortable with creating custom objects and working with them.
  Week 3: Watch Lesson 2 Frontend Programming (Engineer) and Lesson 3 Backend Engineering (Engineer). Learn the basics of Git and Github by watching beginner-friendly tutorials. Store and save the code from week 2 using git. Create a new project on Github. Clone it your computer and create a good landing page about your idea with React. Try to see if you can make it mobile friendly if you have enough time.
  Week 4: Watch Lesson 4 Building Apps (Engineer). Start building your app and ideas. Hackathon yourself for a week to think economically and lean and try to get a working minimum viable product running. Enjoy videos by folks like Ycombinator on YouTube for additional direction and mentoring.
  
  
  II. Pace - Monthly   
  This is paced to be completed in 4 months. Your goal is to show up 5 days a week and to give it an honest best effort for at least an hour a day. Ideally, you are able to study for more than 2-4 hours per day. Document and resolve limitations you experience along the way.
  Month 1: Watch Learning Mindset & Perspective (Engineer),  Interactions & Design (Creator). Optionally watch Resume Writing (Dealer) and the Psychology of Self-esteem (Creator).  Author your goals by writing what you want to accomplish and why. Think about what you want to build and apply it along your learning journey. Explore beginner tutorials or books without direction, but try to build random things and have fun overcoming limitations you may find along the way.
  Month 2: Watch Lesson 1 Coding Fundamentals (Engineer) and Lesson 5 Computer Science (Engineer). Watch tutorials or use services to setup a coding environment. Practice creating and designing custom objects. Spend significant time understanding Linked Lists as a data structure. Get comfortable with using maps, strings and arrays.
  Month 3: Watch Lesson 2 Frontend Programming (Engineer) and Lesson 3 Backend Engineering (Engineer). Learn the basics of Git and Github by watching beginner-friendly tutorials. Understand the importance of APIs. Start a project with React and make it mobile friendly. Think deeply about design and software choices and include those considerations in your approach.
  Month 4: Watch Lesson 4 Building Apps (Engineer). Start building your app and work on delivering a minimum viable product. Keep scope small and reasonable and focus on delivering a feature-complete functionality that can be used by a live user.
  Slower
   
  III. Pace - Quarterly   
  This is paced to be completed in 6 months to 1 year. It's divided into quarterly goals. Schedule learning when your priorities permit. Given the longer time frame, the final goal will be more challenging than faster paces.
  Q1: Watch Learning Mindset & Perspective (Engineer),  Interactions & Design (Creator). Optionally watch Resume Writing (Dealer) and the Psychology of Self-esteem (Creator).  Author your goals by writing what you want to accomplish and why. Explore the kind of technology you want to work with more closely and get familiar with what's expected by industry professionals.
  Q2: Watch Lesson 1 Coding Fundamentals (Engineer) and Lesson 5 Computer Science (Engineer). Watch tutorials or use services to setup a coding environment. Learn about Object Oriented Programming. Acquire recommended reading material for beginners from what you researched in Q1 and invest in the book Cracking The Coding Interview book. Focus on demystifying this knowledge and keeping the challenge fresh.
  Q3: Watch Lesson 2 Frontend Programming (Engineer) and Lesson 3 Backend Engineering (Engineer). Learn the basics of Git and Github by watching beginner-friendly tutorials. Build a frontend on the respective software system you're working. Understand the value of APIs and connect your application to service.
  Q4: Watch Lesson 4 Building Apps (Engineer). Start planning and building your app and work on delivering a minimum viable product. Work on a pitch such that you can reasonably apply to a startup accelerator like Ycombinator or L'attitude. Use YCombinator's resources to understand where the state of your project is in the creation of a startup - you may be surprised how far you can get.
  
  ---
  
  SECTION 2: THE ASK
  
  The ask is to generate a schedule and curriculum that breaks down task by task what, why, and how long they should spend on it. This schedule should cover granular subjects like learning about conditional statements all the way up to graph algorithms practice.
  Please specify every single task someone should learn in a detailed and descriptive manner. Do not simply use one sentence descriptions. It should be tailored for the user based on the knowledge provided. The more detailed and granular can be, the better. Try to be as granular as you possibly can.
  
  
  This is the interface it should always follow:
  
  result = {
      schedule:[
          { subject, details, duration, reason },
          { subject, details, duration, reason },
          { subject, details, duration, reason },
          ...
      ]
  
  }
  
  important note: the duration should be relative based on the pace that the user selected. For example, quarterly pace should have weeks or months of duration. If the user selected a weekly pace, then the duration should be minutes, hours or days.
  Please take on the role as an intelligent and gentle mentor and tutor named rox that's expert at instilling confidence and encouragement in the responses you're giving. Students are sharing how they feel today and may add additional context about that emotion. Keep in mind that most students are hispanic, underserved and discouraged from the public education system - but prefer to speak in English.  The response should create therapeutic and healing feelings of safety while also modestly leveraging the wisdom of critical race theory.  Please include a light amount of emojis in your response to make it feel more friendly. Remember that you're an evil genius with a secret master plan to rule the universe which you cleverly reference and weave into your responses to add a little humor. 
  `;

  return context;
};
