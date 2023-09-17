import { ultimateEffeciencyJutsu } from "../ui";

// add a collapse feature

export const Creator = {
  Communications: {
    // Philosophx: {
    //   documentID: ``,
    //   filler: ``,
    //   new: false,
    //   highValue: false,
    //   underConstruction: true,
    //   completed: false,
    //   rare: true,
    //   needsImprovement: false,
    //   tooltip: ``,
    //   sourceType: `video`, // may not need
    //   button: `Philosophy @ RO.B.E`, // may not need - `name`
    //   header: `Philosophy @ RO.B.E`,
    //   fileSource:
    //     "https://res.cloudinary.com/eduprojectsil/video/upload/v1674721556/IMG_9188_iewsh4.mov", // may not need

    //   prompts: {
    //     patreon: {
    //       completed: false,
    //       impact: 1000,
    //       action: `generate`,
    //       icon: `►`, //`✍️`
    //       request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
    //         `Philosophy`
    //       )}?`,
    //       response: `null`,
    //       spanish: ``,
    //       tooltip: ``,
    //       additionalContent: await import("../../markdowns/philosophy.md?raw"),
    //     },
    //     inspire: {
    //       completed: false,
    //       impact: 100,
    //       action: `inspire`,
    //       icon: `⚡`,
    //       request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
    //         `Philosophy`
    //       )}?`,
    //       response: `\n\nOne inspiring story of Critical Race Theory and machine learning algorithms comes from an organization in the U.S. called “The Aequitas Project”. Aequitas is an automated system that performs risk assessments during criminal trial proceedings. Their goal is to help reduce the disparate impact of the criminal justice system on people of color, survivors of domestic abuse, and other vulnerable communities.\n\nAequitas utilizes machine learning algorithms to automatically detect and analyze data regarding the demographics of the parties involved in trial proceedings (e.g., race and gender). This data is then used in tandem with Critical Race Theory to flag any instances of bias. It is hoped that this system can ultimately be used to racial disparities in the criminal justice system and ensure a more equitable system for all its participants.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     summarize: {
    //       completed: false,
    //       impact: 100,
    //       action: `summarize`,
    //       icon: `📚`,
    //       request: `ms. roxana, can you please summarize Professor Ruha Benjamin's work with the intersection of ${ultimateEffeciencyJutsu(
    //         `Philosophy`
    //       )}?`,
    //       response: `\n\nProfessor Ruha Benjamin's work with the intersection of Critical Race Theory and machine learning algorithms focuses on how algorithms embedded in artificial intelligence technologies can reproduce and amplify racial injustice due to existing inequities in society. She argues that biases built into machine learning algorithms reflect existing societal definitions of who is desirable, dangerous and more, reinforcing existing racial hierarchies and deepening societal divides. Benjamin seeks to challenge and address these algorithms and their implications, developing strategies to make them more fair and equitable.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     ask: {
    //       completed: false,
    //       impact: 100,
    //       action: `ask`,
    //       icon: `🔮`,
    //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
    //         `Philosophy`
    //       )} with one sentence answers?`,
    //       response: `\n\n1. What is Critical Race Theory? Answer: Critical Race Theory is an interdisciplinary framework of analysis that looks at the impacts of racism and race-relations on societies and individuals. \n\n2. How can machine learning algorithms help to identify racism? Answer: Machine learning algorithms can help to identify racism by analyzing data sets of race-related, and other, factors to uncover systematic racial disparities. \n\n3. What role do data sets play in using machine learning algorithms? Answer: Data sets provide the input to machine learning algorithms and are critical to their ability to identify patterns and analyze complex problems.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     guide: {
    //       completed: false,
    //       impact: 100,
    //       action: `guide`,
    //       icon: `🤝`,
    //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
    //         `Philosophy`
    //       )}?`,
    //       response: `\n\n1. Understand the foundations of Critical Race Theory (CRT) and its uses in analyzing how racism and racial disparities influence law, education and politics.\n\n2. Gain an understanding of how machine learning algorithms utilize data and generate models to inform decision-making in various fields.\n\n3. Learn the principles of CRT-based machine learning, as well as its benefits and potential limitations.\n\n4. Become familiar with case studies where CRT-based machine learning had a positive impact on race-based decisions.\n\n5. Develop an understanding of the ethical considerations of design, implementation and use of CRT-influenced machine learning algorithms.\n\n6. Analyze whether particular historical or contemporary situations call for a CRT-based machine learning approach.\n\n7. Understand the preprocessing steps required to develop useful, valid and accurate machine learning models.\n\n8. Evaluate how to accurately label and represent data for CRT-based machine learning.\n\n9. Understand how to determine appropriate metrics for evaluating the effectiveness of CRT-based machine learning algorithms and models.\n\n10. Model legal issues arising from CRT applications of machine learning algorithms.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     demonstrate: {
    //       completed: false,
    //       impact: 100,
    //       action: `demonstrate`,
    //       icon: `🎨`,
    //       request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
    //         `Philosophy`
    //       )}`,
    //       response: `\n\nA simple example of Critical Race Theory and machine learning algorithms implemented is a sentiment analysis program that uses supervised learning algorithms such as Naive Bayes or decision trees to identify and classify text as either positive or negative, based on its semantic content. The system can also be trained to identify and put an emphasis on specific racial or cultural words, phrases or sentiments. This type of analysis can be useful for detecting bias in social media posts and other digital content.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     define: {
    //       completed: false,
    //       impact: 100,
    //       action: `define`, // may not need
    //       icon: `🧿`, // may not need
    //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
    //         `Philosophy`
    //       )} in exactly one sentence?`,
    //       response: `\n\nCritical Race Theory is an academic framework that examines the intersections of race and power, while Machine Learning algorithms are a set of self-improvement rules used by systems to solve problems.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },

    //     quiz: {
    //       completed: false,
    //       impact: 100,
    //       action: `quiz`,
    //       icon: `🧪`,
    //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
    //         `Philosophy`
    //       )} without any answers?`,
    //       response: `\n\n1. What is the connection between Critical Race Theory and machine learning algorithms?\n2. How have Critical Race Theory and machine learning algorithms been used to further social justice causes?\n3. What are the potential risks and drawbacks of artificial intelligence systems built on machine learning algorithms and Critical Race Theory?`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     shop: {
    //       completed: false,
    //       impact: 100,
    //       action: `shop`,
    //       icon: `🛍️`,
    //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
    //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //   },
    // },
    // "Creating Purpose": {
    //   documentID: ``,
    //   filler: ``,
    //   new: false,
    //   highValue: false,
    //   underConstruction: false,
    //   completed: false,
    //   rare: true,
    //   needsImprovement: false,
    //   tooltip: ``,
    //   sourceType: `markdown`, // may not need
    //   button: `Creating Purpose, Meaning & Life`, // may not need - `name`
    //   header: `Creating Purpose`,
    //   fileSource: await import("../../markdowns/creatingPurpose.md?raw"), // may not need

    //   prompts: {
    //     patreon: {
    //       completed: false,
    //       impact: 1000,
    //       action: `generate`,
    //       icon: `✍️`, //`✍️`
    //       request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
    //         `Creating Purpose`
    //       )}?`,
    //       response: `null`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     inspire: {
    //       completed: false,
    //       impact: 100,
    //       action: `inspire`,
    //       icon: `⚡`,
    //       request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
    //         `Creating Purpose`
    //       )}?`,
    //       response: `\n\nSure! Here's a story about a young girl named Surya Vadlamani from India. She was only 11-years-old when she founded a company called SV Robotics. Her company creates innovative robots and have won awards for their designs. What makes her story so inspiring is that she chose to focus on improving technologies in her home country, understanding the need for better robotics in India. She created a space for herself in a male-dominated field at a young age, inspiring the lives of many young girls in the process. Surya is an inspiring example of someone with a clear purpose who chose a problem she wanted to solve, and took a journey to use her skills, creativity and ambition to make real changes.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     summarize: {
    //       completed: false,
    //       impact: 100,
    //       action: `summarize`,
    //       icon: `📚`,
    //       request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
    //         `Creating Purpose`
    //       )}?`,
    //       response: `\n\nPurposeful problem solving and journey taking can involve a few steps:\n\n1) Identify a problem that needs to be solved and a journey that needs to be taken. This could be a social issue, a health issue, or any issue that you feel passionate about.\n\n2) Research the issue further to gain a clear understanding of the root cause of the problem.\n\n3) Create an action plan or outline that outlines the key steps needed to solve the problem or take the journey.\n\n4) Ask for feedback from those in the community affected and those who have knowledge of the problem.\n\n5) Implement the action plan and adjust it as needed throughout the process.\n\n6) Measure progress and evaluate the success of the effort.\n\n7) Celebrate successes and strive towards further progress and improvement.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     ask: {
    //       completed: false,
    //       impact: 100,
    //       action: `ask`,
    //       icon: `🔮`,
    //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
    //         `Creating Purpose`
    //       )} with one sentence answers?`,
    //       response: `\n\n1. How do I know what problem to solve? - Focus on an area of need that is important to you.\n\n2. How do I choose what journey to take? - Experiment with different approaches to see which best meets your needs and achieves your objectives.\n\n3. How can I make sure I'm creating purpose? - Develop a vision of the future you want to create and think of ways to move toward it.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     guide: {
    //       completed: false,
    //       impact: 100,
    //       action: `guide`,
    //       icon: `🤝`,
    //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
    //         `Creating Purpose`
    //       )}?`,
    //       response: `\n\n1. Brainstorm potential problems to solve. Ask questions like, “What are some current problems in the world today? What are some problems that affect the people around me?”\n\n2. Identify the root cause of each problem. Look at the big picture and determine what is causing each problem, so that you can develop an effective solution.\n\n3. Think holistically and come up with creative solutions. Try to incorporate multiple elements (ethical, legal, etc.) into one holistic solution.\n\n4. Research each problem to gain better understanding. Research a variety of sources (books, magazines, websites, etc.), so that you can gain perspective and background information.\n\n5. Define objectives and goals for each problem. Ask questions such as, “What do I want to accomplish with this project? How can I measure success?”\n\n6. Identify a team to work on the problem and its solution. Make sure the team has the skills, expertise, and access that is needed for the project.\n\n7. Develop a plan of action that covers the timeline, budget, progress, guidelines and resources.\n\n8. Implement the solution. Take the necessary steps and put the plan into action.\n\n9. Monitor progress. Establish entry and exit criteria to measure progress and determine efficacy of the solution.\n\n10. Evaluate the solution. Have the team look at the results and assess whether the solution was successful. Use the experience and results to make future improvements.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     demonstrate: {
    //       completed: false,
    //       impact: 100,
    //       action: `demonstrate`,
    //       icon: `🎨`,
    //       request: `ms. roxana, can you please show me an example of creating meaning out of life by creating journies with purpose?`,
    //       response: `\n\nOne example of creating meaning out of life by creating journeys with purpose is through setting goals and working towards achieving them. For example, if your purpose is to make a difference in the world, you can set a goal to volunteer in your community, or to create a non-profit organization to help a cause you're passionate about. Or if your purpose is to become an expert in a certain field, you can set goals to further your education by attending classes, reading books, and networking. By setting and achieving goals, you are actively creating meaningful journeys that enrich your life and the lives of others.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     define: {
    //       completed: false,
    //       impact: 100,
    //       action: `define`, // may not need
    //       icon: `🧿`, // may not need
    //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
    //         `Creating Purpose`
    //       )} in exactly one sentence?`,
    //       response: `\n\nCreating purpose is setting out meaningful goals and developing strategies to achieve them.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },

    //     quiz: {
    //       completed: false,
    //       impact: 100,
    //       action: `quiz`,
    //       icon: `🧪`,
    //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
    //         `Creating Purpose`
    //       )} without any answers?`,
    //       response: `\n\n1. What is the connection between Critical Race Theory and machine learning algorithms?\n2. How have Critical Race Theory and machine learning algorithms been used to further social justice causes?\n3. What are the potential risks and drawbacks of artificial intelligence systems built on machine learning algorithms and Critical Race Theory?`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     shop: {
    //       completed: false,
    //       impact: 100,
    //       action: `shop`,
    //       icon: `🛍️`,
    //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
    //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //   },
    // },
    // "The Drug War": {
    //   documentID: ``,
    //   filler: ``,
    //   new: false,
    //   highValue: false,
    //   underConstruction: true,
    //   completed: false,
    //   rare: true,
    //   needsImprovement: false,
    //   tooltip: ``,
    //   sourceType: `markdown`, // may not need
    //   button: `The Drug War`, // may not need - `name`
    //   header: `The Drug War"`,
    //   fileSource: await import("../../markdowns/creatingPurposeII.md?raw"), // may not need

    //   prompts: {
    //     patreon: {
    //       completed: false,
    //       impact: 1000,
    //       action: `generate`,
    //       icon: `✍️`, //`✍️`
    //       request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
    //         `The Drug War`
    //       )}?`,
    //       response: `null`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     inspire: {
    //       completed: false,
    //       impact: 100,
    //       action: `inspire`,
    //       icon: `⚡`,
    //       request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
    //         `The Drug War`
    //       )}?`,
    //       response: (
    //         <div>
    //           The Bank Secrecy Act (BSA) of 1970 is a pivotal piece of
    //           legislation that has had far-reaching consequences on the U.S.
    //           Drug War and the oppression of Black Americans. The BSA was
    //           initially designed to combat money laundering and other financial
    //           crimes by requiring financial institutions to report certain types
    //           of transactions to the government. However, the law's unintended
    //           consequences have been profound, particularly in the context of
    //           the War on Drugs and the systemic oppression of Black Americans.
    //           I. The Bank Secrecy Act and the War on Drugs The BSA as a
    //           foundation for the War on Drugs: The BSA laid the groundwork for
    //           the U.S. government to monitor and control financial transactions,
    //           which became a powerful tool in the War on Drugs. The BSA was
    //           amended several times to increase its scope and effectiveness in
    //           fighting drug trafficking, money laundering, and other financial
    //           crimes. These changes made it easier for law enforcement to seize
    //           assets linked to drug crimes, further escalating the drug war.
    //           Civil asset forfeiture: The BSA facilitated the expansion of civil
    //           asset forfeiture, a controversial practice that allows law
    //           enforcement agencies to seize property and assets linked to
    //           illegal activities without necessarily charging the owner with a
    //           crime. The use of civil asset forfeiture has disproportionately
    //           affected Black and other minority communities, as they are often
    //           targeted by law enforcement in the context of the War on Drugs.
    //           II. The BSA and the Oppression of Black Americans Racial profiling
    //           in financial transactions: The BSA requires financial institutions
    //           to report suspicious transactions, which can lead to racial
    //           profiling. Studies have shown that Black Americans are
    //           disproportionately targeted by banks and other financial
    //           institutions for additional scrutiny due to implicit bias,
    //           perpetuating a cycle of discrimination and financial exclusion.
    //           Racial disparities in drug enforcement: The War on Drugs,
    //           intensified by the BSA, has had a disproportionately negative
    //           impact on Black communities. Although drug use rates are similar
    //           across races, Black individuals are more likely to be arrested,
    //           convicted, and sentenced to longer prison terms for drug-related
    //           offenses. This has led to a massive increase in the Black
    //           incarceration rate, further exacerbating the socioeconomic
    //           disparities in the United States. Erosion of civil liberties: The
    //           BSA and the War on Drugs have led to an erosion of civil
    //           liberties, particularly for Black Americans. Law enforcement
    //           agencies have used the BSA as a pretext to conduct invasive
    //           searches, seizures, and surveillance without adequate oversight or
    //           accountability. This has fostered an environment of distrust
    //           between law enforcement and Black communities, which has
    //           contributed to the ongoing problem of systemic racism and police
    //           brutality. Conclusion The Bank Secrecy Act, initially intended to
    //           combat financial crimes, has had a significant impact on the U.S.
    //           Drug War and the oppression of Black Americans. The legislation's
    //           role in facilitating civil asset forfeiture and encouraging racial
    //           profiling has deepened racial disparities in the United States. To
    //           address these issues, it is crucial to reevaluate the BSA and its
    //           implementation, as well as to pursue broader reforms in the
    //           criminal justice system that prioritize racial equity and social
    //           justice
    //         </div>
    //       ),
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     summarize: {
    //       completed: false,
    //       impact: 100,
    //       action: `summarize`,
    //       icon: `📚`,
    //       request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
    //         `The Drug War`
    //       )}?`,
    //       response: (
    //         <div>
    //           The U.S. Drug War and American drug consumption have had profound
    //           consequences on Latin American economies, fueling the suppression
    //           and instability in the region. In particular, the insatiable
    //           demand for cocaine in the United States has led to the rise of
    //           powerful drug cartels in Colombia, Central America, and Mexico.
    //           This essay will examine the relationship between American drug
    //           consumption, the U.S. Drug War, and the economic consequences in
    //           Latin America, focusing on the rise of drug cartels and their
    //           impact on regional economies. I. American Drug Consumption and the
    //           Rise of Cartels The demand for cocaine: The high demand for
    //           cocaine in the United States has driven the growth of drug
    //           production and trafficking in Latin America, particularly in
    //           Colombia, where the majority of the world's cocaine is produced.
    //           This demand has created an immensely lucrative market for drug
    //           cartels and criminal organizations throughout the region. The
    //           emergence of cartels: The vast profits derived from drug
    //           trafficking have led to the rise of powerful cartels in Colombia,
    //           Central America, and Mexico. These organizations have established
    //           sophisticated supply chains, using violence and corruption to
    //           maintain control over the drug trade. II. The U.S. Drug War and
    //           Latin American Economies Suppression and instability: The U.S.
    //           Drug War has focused on eradicating drug production and
    //           trafficking in Latin America, but this approach has often
    //           exacerbated economic suppression and instability. Military and
    //           financial aid provided by the United States to combat cartels has
    //           inadvertently fueled violence, leading to widespread insecurity
    //           and hampering economic development. Misallocation of resources:
    //           The focus on combating drug cartels has led to a misallocation of
    //           resources in affected countries, with governments prioritizing
    //           drug enforcement over investments in infrastructure, education,
    //           and other crucial sectors. This constrains long-term economic
    //           growth and development. III. The Economic Consequences of Cartels
    //           in Colombia, Central America, and Mexico The drug trade as an
    //           economic driver: The drug trade has become a significant economic
    //           driver in countries like Colombia, Mexico, and Central American
    //           nations, as cartels invest in businesses and infrastructure to
    //           launder drug proceeds. However, this economic growth is often
    //           unsustainable and comes at a high cost, including violence,
    //           corruption, and social instability. Displacement and inequality:
    //           The violence associated with drug cartels has caused significant
    //           displacement and migration in affected countries, putting
    //           additional strain on already struggling economies. Furthermore,
    //           the wealth accumulated by cartels contributes to economic
    //           inequality, as it is concentrated in the hands of a few powerful
    //           individuals. Conclusion The U.S. Drug War and American drug
    //           consumption have played a significant role in fueling the
    //           suppression and instability of Latin American economies,
    //           particularly through the rise of cartels in Colombia, Central
    //           America, and Mexico. The immense demand for cocaine in the United
    //           States has provided cartels with vast profits and power, which
    //           they use to exert control over the drug trade and the economies of
    //           their respective countries. The resulting violence, corruption,
    //           and misallocation of resources have hindered economic development
    //           and stability in the region. Addressing these issues requires a
    //           comprehensive approach that not only tackles drug consumption and
    //           trafficking but also prioritizes social, economic, and political
    //           development in Latin America.
    //         </div>
    //       ),
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     ask: {
    //       completed: false,
    //       impact: 100,
    //       action: `ask`,
    //       icon: `🔮`,
    //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
    //         `The Drug War`
    //       )} with one sentence answers?`,
    //       response: (
    //         <div>
    //           Question 1: How has the U.S. Drug War contributed to racial
    //           inequality in the United States? Answer: The U.S. Drug War has
    //           disproportionately targeted Black and other minority communities,
    //           leading to racial disparities in arrests, convictions, and
    //           sentencing for drug-related offenses. Although drug use rates are
    //           similar across races, Black individuals are more likely to be
    //           arrested, convicted, and sentenced to longer prison terms for
    //           drug-related offenses. This has resulted in a massive increase in
    //           the Black incarceration rate, which exacerbates existing social
    //           and economic inequalities between racial groups. Question 2: How
    //           does the U.S. Drug War contribute to economic inequality in the
    //           United States? Answer: The U.S. Drug War has had several economic
    //           implications that contribute to inequality. Firstly, the high
    //           rates of incarceration associated with drug offenses, particularly
    //           for minority populations, disrupts families and communities,
    //           leading to loss of income and perpetuating cycles of poverty.
    //           Secondly, individuals with drug convictions often face significant
    //           barriers to employment, housing, and education, limiting their
    //           ability to improve their socioeconomic status. Finally, the focus
    //           on punitive measures rather than harm reduction and drug treatment
    //           programs often diverts resources away from public health and
    //           social services that could help address underlying causes of drug
    //           addiction and poverty. Question 3: How can addressing the U.S.
    //           Drug War help to reduce inequality in the United States? Answer:
    //           Addressing the U.S. Drug War to reduce inequality requires a
    //           comprehensive approach that includes policy changes, criminal
    //           justice reform, and investments in social services. Some potential
    //           steps include: Ending the criminalization of drug possession and
    //           use, and instead focusing on harm reduction, prevention, and
    //           treatment strategies. Reforming sentencing laws to reduce the
    //           disparity in punishment for drug-related offenses, especially for
    //           non-violent drug offenders. Investing in education, job training,
    //           and affordable housing to improve the socioeconomic conditions of
    //           communities disproportionately impacted by the Drug War. Expanding
    //           access to mental health and addiction treatment services to
    //           address the root causes of drug addiction and support recovery. By
    //           implementing such changes, the United States can begin to address
    //           the racial and economic inequalities perpetuated by the Drug War,
    //           promoting a more just and equitable society.
    //         </div>
    //       ),
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     guide: {
    //       completed: false,
    //       impact: 100,
    //       action: `guide`,
    //       icon: `🤝`,
    //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
    //         `The Drug War`
    //       )}?`,
    //       response: (
    //         <div>
    //           Title: Study Guide: Understanding the U.S. Drug War as the Main
    //           Source of Inequality in the United States Introduction: This study
    //           guide is designed to take you from a beginner to an expert in
    //           understanding how the U.S. Drug War has contributed to racial and
    //           economic inequalities in the United States. It is divided into
    //           five sections, each with specific resources and recommended
    //           activities to help you deepen your understanding of this complex
    //           issue. Section 1: The Basics of the U.S. Drug War Objective: Gain
    //           a foundational understanding of the U.S. Drug War, including its
    //           origins, history, and key policies. Read "The New Jim Crow: Mass
    //           Incarceration in the Age of Colorblindness" by Michelle Alexander
    //           for an overview of the U.S. Drug War and its impact on racial
    //           inequality. Watch the documentary "13th" directed by Ava DuVernay,
    //           which explores the intersection of race, justice, and mass
    //           incarceration in the United States. Research the history and key
    //           legislation of the U.S. Drug War, including the Controlled
    //           Substances Act, the Anti-Drug Abuse Act, and the "Three Strikes"
    //           laws. Section 2: Racial Disparities in Drug Enforcement and
    //           Incarceration Objective: Understand the racial disparities in drug
    //           enforcement, arrests, convictions, and sentencing. Read "Race and
    //           the Drug War" by the Drug Policy Alliance, which provides an
    //           overview of the racial disparities in drug enforcement and
    //           incarceration. Review studies on racial disparities in drug
    //           arrests, convictions, and sentencing, such as the work of the
    //           Sentencing Project and the Brennan Center for Justice. Analyze the
    //           impact of mandatory minimum sentencing laws and racial profiling
    //           on communities of color. Section 3: Economic Inequality and the
    //           U.S. Drug War Objective: Investigate the economic implications of
    //           the U.S. Drug War on individuals, families, and communities. Read
    //           "The Economic Burden of Incarceration in the U.S." by the Prison
    //           Policy Initiative, which examines the costs of incarceration for
    //           families and communities. Explore research on the barriers to
    //           employment, housing, and education for individuals with drug
    //           convictions. Analyze the impact of the U.S. Drug War on public
    //           health funding and the allocation of resources for social
    //           services. Section 4: Policy Changes and Criminal Justice Reform
    //           Objective: Examine policy changes and criminal justice reforms
    //           aimed at reducing inequality perpetuated by the U.S. Drug War.
    //           Research recent drug policy reforms, such as the legalization of
    //           marijuana in various states and the decriminalization of drug
    //           possession in countries like Portugal. Investigate alternative
    //           approaches to drug enforcement and treatment, such as harm
    //           reduction, drug courts, and diversion programs. Examine the role
    //           of community-based organizations in advocating for policy changes
    //           and providing support for individuals impacted by the U.S. Drug
    //           War. Section 5: Becoming an Expert and Taking Action Objective:
    //           Apply your knowledge and engage in actions to address the
    //           inequalities perpetuated by the U.S. Drug War. Write an op-ed,
    //           blog post, or research paper on a specific aspect of the U.S. Drug
    //           War and its impact on inequality. Attend conferences, webinars, or
    //           workshops on drug policy reform and criminal justice issues. Get
    //           involved with organizations advocating for policy changes and
    //           supporting communities impacted by the U.S. Drug War, such as the
    //           Drug Policy Alliance, the American Civil Liberties Union, or the
    //           Sentencing Project. By following this study guide and engaging
    //           with the recommended resources and activities, you will gain a
    //           comprehensive understanding of how the U.S. Drug War has
    //           contributed to racial and economic inequalities in the United
    //           States, and how you can take action to promote a more just and
    //           equitable society.
    //         </div>
    //       ),
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     demonstrate: {
    //       completed: false,
    //       impact: 100,
    //       action: `demonstrate`,
    //       icon: `🎨`,
    //       request: `ms. roxana, can you please show me an example of creating meaning out of life by creating journies with purpose?`,
    //       response: (
    //         <div>
    //           The U.S. Drug War has played a significant role in driving
    //           immigration at the Mexican border, although it is important to
    //           note that it is not the sole cause. The relationship between the
    //           U.S. Drug War and immigration can be demonstrated through the
    //           following factors: Violence and instability: The U.S. Drug War has
    //           intensified violence and instability in Mexico and other Latin
    //           American countries, as drug cartels and criminal organizations
    //           compete for control over drug trafficking routes. This violence
    //           has led to an increase in homicides, kidnappings, and extortion,
    //           which in turn, has caused many individuals and families to flee
    //           their homes in search of safety. Economic disruption: The U.S.
    //           Drug War has had a substantial impact on the economies of
    //           countries involved in drug production and trafficking, such as
    //           Mexico. As the demand for illegal drugs in the United States
    //           persists, drug cartels have continued to profit, and their
    //           influence has spread throughout various sectors of the economy.
    //           This has led to economic disruption and a lack of job
    //           opportunities for many individuals, who may then choose to migrate
    //           to the United States in search of better prospects. Corruption and
    //           weak governance: The immense profits generated by the drug trade
    //           have fueled corruption within law enforcement, the military, and
    //           political institutions in Mexico and other Latin American
    //           countries. This has weakened governance and the rule of law,
    //           making it increasingly difficult for individuals to trust local
    //           authorities and seek protection from violence. As a result, many
    //           people are compelled to leave their countries in search of
    //           security and stability. Displacement and migration: The violence
    //           and economic disruption caused by the U.S. Drug War have led to
    //           the displacement of millions of people in Latin America. This
    //           displacement often results in internal migration, with individuals
    //           moving to other parts of their countries in search of safety and
    //           opportunities. However, when internal migration options are
    //           exhausted, many individuals choose to cross the border into the
    //           United States, seeking refuge and a better life. While the U.S.
    //           Drug War is a significant contributing factor to immigration at
    //           the Mexican border, it is important to recognize that other
    //           factors, such as political instability, climate change, and
    //           poverty, also play a role in driving migration. Addressing the
    //           root causes of immigration requires a comprehensive approach that
    //           considers the multifaceted nature of this complex issue.
    //         </div>
    //       ),
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     define: {
    //       completed: false,
    //       impact: 100,
    //       action: `define`, // may not need
    //       icon: `🧿`, // may not need
    //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
    //         `The Drug War`
    //       )} in exactly one sentence?`,
    //       response: `\n\nThe U.S. Drug War perpetuates the legacy of U.S. slavery by disproportionately targeting and incarcerating Black Americans for drug-related offenses, thereby reinforcing systemic racial inequality and social control over marginalized communities.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },

    //     quiz: {
    //       completed: false,
    //       impact: 100,
    //       action: `quiz`,
    //       icon: `🧪`,
    //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
    //         `The Drug War`
    //       )} without any answers?`,
    //       response: (
    //         <div>
    //           Question 1: Discuss the potential benefits of the U.S. Drug War in
    //           terms of public safety, crime reduction, and deterring drug use,
    //           and provide examples of specific policies or programs that have
    //           contributed to these outcomes. Question 2: Analyze the role of
    //           international cooperation and partnerships in the U.S. Drug War,
    //           and evaluate their effectiveness in curbing drug trafficking and
    //           production in Latin America and other regions. Question 3: From
    //           the perspective of supporting the U.S. Drug War, examine the
    //           ethical implications of drug legalization or decriminalization,
    //           considering the potential risks to public health, safety, and
    //           social cohesion. Question 4: Assess the role of law enforcement,
    //           the judicial system, and the prison system in the U.S. Drug War,
    //           and propose improvements or reforms that could enhance their
    //           effectiveness in combating drug-related crime and addiction.
    //           Question 5: Explore the concept of "supply-side" drug control
    //           strategies (e.g., eradication of drug crops, interdiction of drug
    //           shipments) in the context of the U.S. Drug War, and evaluate their
    //           effectiveness in reducing drug availability and consumption in the
    //           United States. Note: These questions are designed to encourage
    //           critical thinking and evidence-based arguments from the
    //           perspective of supporting the U.S. Drug War. When answering these
    //           questions, consider providing a balanced view that acknowledges
    //           potential drawbacks or criticisms while defending the overall
    //           stance in favor of the U.S. Drug War.
    //         </div>
    //       ),
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     shop: {
    //       completed: false,
    //       impact: 100,
    //       action: `shop`,
    //       icon: `🛍️`,
    //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
    //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //   },
    // },
    // "Abraham Lincoln": {
    //   documentID: ``,
    //   filler: ``,
    //   new: false,
    //   highValue: false,
    //   rare: true,
    //   underConstruction: true,
    //   completed: false,
    //   needsImprovement: false,
    //   tooltip: ``,
    //   sourceType: `markdown`, // may not need
    //   button: `Abraham Lincoln`, // may not need - `name`
    //   header: `Abraham Lincoln`,
    //   fileSource: await import("../../markdowns/abrahamLincoln.md?raw"), // may not need

    //   prompts: {
    //     patreon: {
    //       robotTouch: true,
    //       completed: false,
    //       impact: 1000,
    //       action: `generate`,
    //       icon: `✍️`,
    //       request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
    //         `Abraham Lincoln`
    //       )}?`,
    //       response: `null`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     inspire: {
    //       completed: false,
    //       impact: 100,
    //       action: `inspire`,
    //       icon: `⚡`,
    //       request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
    //         `Abraham Lincoln`
    //       )}?`,
    //       response: `\n\nOne story of Abraham Lincoln's faith in divine providence is told in his Second Inaugural Address. After four years of a brutal Civil War, Lincoln declared:\n\"Neither party expected for the war the magnitude or the duration which it has already attained. Each looked for an easier triumph, and a result less fundamental and astounding. Both read the same Bible, and pray to the same God; and each invokes His aid against the other. It may seem strange that any men should dare to ask a just God’s assistance in wringing their bread from the sweat of other men’s faces; but let us judge not, that we be not judged. The prayers of both could not be answered. That of neither has been answered fully. The Almighty has His own purposes.\"\n\nBy acknowledging that both sides of the war asked God for help, Lincoln's speech acknowledges the power of divine providence. He also understood that the war was a divine trial, with both sides facing great suffering. He also made sure to point out that men are not to judge one another, and that only God knows the reason behind His purpose and His plan.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     summarize: {
    //       completed: false,
    //       impact: 100,
    //       action: `summarize`,
    //       icon: `📚`,
    //       request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
    //         `Abraham Lincoln`
    //       )}?`,
    //       response: `\n\nAbraham Lincoln (1809 - 1865) was the 16th president of the United States. He was known for leading the country through the Civil War and ending slavery in the US. He was also a strong believer in divine providence, which is the belief that God is in control of all things and will bring righteousness to all that is done in life. His faith in divine providence was so strong that he credited it with his success in leading the country during a perilous time. He believed that it was God's will that guided his decisions and ultimately put him in the right place at the right time to make necessary changes.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     ask: {
    //       completed: false,
    //       impact: 100,
    //       action: `ask`,
    //       icon: `🔮`,
    //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
    //         `Abraham Lincoln`
    //       )} with one sentence answers?`,
    //       response: `\n\n1. Did Abraham Lincoln believe in divine providence? Yes, he believed that God had a hand in guiding the course of history. \n\n2. What was Abraham Lincoln's view on how divine providence could be seen in history? Lincoln believed that every event in history was part of God's larger plan, and that this could be seen in retrospect as God guiding the course of history.\n\n3. How did Abraham Lincoln's belief in divine providence shape his political beliefs? Lincoln believed that human decisions were made by God's will, and thus his political beliefs were shaped by his religious beliefs.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     guide: {
    //       completed: false,
    //       impact: 100,
    //       action: `guide`,
    //       icon: `🤝`,
    //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
    //         `Abraham Lincoln`
    //       )}?`,
    //       response: `\n\n1. Abraham Lincoln firmly believed in the concept of divine providence.\n2. He often attributed his successes to God's will and grace.\n3. He protested against violence for fear of offending God and His purpose.\n4. Three famous quotes from Lincoln on divine providence are “I know that the Lord is always on the side of the right”, “The ways of providence are often inscrutable”, and “humbly acknowledged His divine goodness”.\n5. Lincoln believed in divine guidance allowing individual liberty while protecting the weak.\n6. He was a strong proponent of religious freedom and tolerance.\n7. Lincoln often viewed himself as a humble servant of God working to preserve the Union.\n8. He often called on God to forgive the transgressions of the people, not punish them.\n9. Lincoln viewed the Civil War as an act of divine judgment on the nation.\n10. He believed in a day of final reconciliation and peace – when God's will is fully acknowledged.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     demonstrate: {
    //       completed: false,
    //       robotTouch: true,
    //       impact: 100,
    //       action: `demonstrate`,
    //       icon: `🎨`,
    //       request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
    //         `Abraham Lincoln`
    //       )}`,
    //       response: `?\n\nSure. In an 1862 speech, Abraham Lincoln said: \n\n"We have been the recipients of the choicest bounties of Heaven; we have been preserved, these many years, in peace and prosperity; we have grown in numbers, wealth and power as no other nation has ever grown. But we have forgotten God. We have forgotten the gracious hand which preserved us in peace, and multiplied and enriched and strengthened us; and we have vainly imagined, in the deceitfulness of our hearts, that all these blessings were produced by some superior wisdom and virtue of our own.... Intoxicated with unbroken success, we have become too self-sufficient to feel the necessity of redeeming and preserving grace, too proud to pray to the God that made us." \n\nThis speech made it clear that Lincoln believed in the concept of divine providence, the notion that God works in human events to achieve his objectives. He was not just a believer, but he also acknowledged that blessings come from God and that the nation should rely on him for guidance and protection.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     define: {
    //       completed: false,
    //       impact: 100,
    //       action: `define`, // may not need
    //       icon: `🧿`, // may not need
    //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
    //         `Abraham Lincoln`
    //       )} in exactly one sentence?`,
    //       response: `\n\nAbraham Lincoln believed in divine providence as a guiding force in life, helping to guide history and individuals towards a greater good.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },

    //     quiz: {
    //       completed: false,
    //       impact: 100,
    //       action: `quiz`,
    //       icon: `🧪`,
    //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
    //         `Abraham Lincoln`
    //       )} without any answers?`,
    //       response: `\n\n1. What year did Abraham Lincoln deliver the Gettysburg Address and why was the speech historic?\n\n2. Name three specific references to “divine providence” in the Gettysburg Address, and explain how Lincoln uses each reference.\n\n3. In what ways did Abraham Lincoln’s views on divine providence shape his leadership as President of the United States?`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //     shop: {
    //       completed: false,
    //       impact: 100,
    //       action: `shop`,
    //       icon: `🛍️`,
    //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
    //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
    //       spanish: ``,
    //       tooltip: ``,
    //     },
    //   },
    // },
    //     "UI/UX": {
    //       documentID: ``,
    //       filler: ``,
    //       new: false,
    //       highValue: false,
    //       underConstruction: false,
    //       completed: false,
    //       rare: true,
    //       needsImprovement: false,
    //       tooltip: ``,
    //       sourceType: `video`, // may not need
    //       button: `User Experiences`, // may not need - `name`
    //       header: `Human Computer Interaction`,
    //       fileSource:
    //         "https://res.cloudinary.com/eduprojectsil/video/upload/v1674721527/IMG_9182_ao3yio.mov", // may not need

    //       prompts: {
    //         patreon: {
    //           completed: false,
    //           impact: 1000,
    //           action: `generate`,
    //           icon: `►`, //`✍️`
    //           request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
    //             `UI/UX`
    //           )}?`,
    //           response: `null`,
    //           spanish: ``,
    //           tooltip: ``,
    //           additionalContent: await import(
    //             "../../markdowns/humanComputerInteraction.md?raw"
    //           ),
    //         },
    //         inspire: {
    //           completed: false,
    //           impact: 100,
    //           action: `inspire`,
    //           icon: `⚡`,
    //           request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
    //             `UI/UX`
    //           )}?`,
    //           response: `\n\nOne inspiring story that comes to mind is that of the story of how NASA designed the graphical user interface (GUI) for its space shuttle mission control system. While PCs were relatively new at the time, the mission itself was decades in the making, and so a GUI was needed to help control the advanced system. NASA turned to computer scientist, Dr. Larry Tesler, and his team to design a user-friendly interface. After multiple iterations of new design concepts, they finally landed on a design that combined simple built-in tools and a system of transparency to display and manipulate data. Through this design, the team developed a completely novel user experience and provided an unprecedented level of control over the spacecraft’s functions. This would eventually aid in the successful development of the space shuttle and is considered to be one of the first major successes of user experience (UX) and human computer interaction (HCI) in modern user interface design.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         summarize: {
    //           completed: false,
    //           impact: 100,
    //           action: `summarize`,
    //           icon: `📚`,
    //           request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
    //             `UI/UX`
    //           )}?`,
    //           response: `\n\nHuman Computer Interaction (HCI) is the area of study that focuses on how humans and computers interact with each other. Through its research, HCI aims to make computer interfaces more efficient and user-friendly. User Centered Design (UCD) is an approach to software design that puts the user at the center of the process rather than the technology. This involves focusing on the needs and desires of the user to ensure the best design for them. UI/UX (User Interface/User Experience) is the practice of designing software and websites that are aesthetically pleasing, usable, interactive, and accessible to users. The UI/UX designer is responsible for creating a positive user experience.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         ask: {
    //           completed: false,
    //           impact: 100,
    //           action: `ask`,
    //           icon: `🔮`,
    //           request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
    //             `UI/UX`
    //           )} with one sentence answers?`,
    //           response: `\n\n1. What is Human Computer Interaction (HCI)? - HCI is the study of how people interact with computers to complete tasks.\n\n2. What is User Centered Design (UCD)? - UCD is the practice of designing products and services around the needs of users.\n\n3. What is User Interface/User Experience (UI/UX)? - UI/UX is the study of how users interact with digital interfaces to best accomplish their goals.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         guide: {
    //           completed: false,
    //           impact: 100,
    //           action: `guide`,
    //           icon: `🤝`,
    //           request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
    //             `UI/UX`
    //           )}?`,
    //           response: `\n\n1. Understand the basics of Human Computer Interaction (HCI), User Centered Design (UCD), and UI/UX\n2. Understand the differences between the three approaches\n3. Learn the principles of UCD and the user experience\n4. Develop user research and usability testing plans\n5. Learn strategies to identify user needs and goals\n6. Identify appropriate UI/UX design approaches to meet user needs\n7. Apply the principles of HCI, UCD, and UI/UX design throughout the design process\n8. Design effective visual, auditory, and tactile interfaces\n9. Develop an understanding of accessibility and internationalization/localization design considerations\n10. Analyze real-life examples of successful HCI, UCD, and UI/UX projects.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         demonstrate: {
    //           completed: false,
    //           impact: 100,
    //           action: `demonstrate`,
    //           icon: `🎨`,
    //           request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
    //             `UI/UX`
    //           )}?`,
    //           response: `\n\nSure! \n\nHuman Computer Interaction (HCI): HCI is a field of study that focuses on the interaction between humans and computers to create better user experiences. For example, if a user is presented with a list of items on an online store, the interface should be intuitive and easy to understand, allowing the user to quickly and easily find the items they need. \n\nUser Centered Design (UCD): UCD is a design process that focuses on the user and their needs. Designers must understand the user’s motivations and goals to develop solutions tailored to their requirements. This could come in the form of running A/B tests on a website to see which layout works best, or carrying out user feedback studies and surveys to validate a product before its launch.\n\nUI/UX Design: UI/UX design refers to the user interface and user experience of a product. A good UI/UX design should be aesthetically pleasing but also logical, intuitive, and easy to use. Examples include a shopping app that's optimized for touch screens and guides users through the product checkout workflow, or a website that makes navigation easy with a simple design and well thought out navigation structure.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         define: {
    //           completed: false,
    //           impact: 100,
    //           action: `define`, // may not need
    //           icon: `🧿`, // may not need
    //           request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
    //             `UI/UX`
    //           )} in exactly one sentence?`,
    //           response: `\n\nHuman Computer Interaction: Interaction between people and technology systems to create meaningful experiences.\nUser Centered Design: A design process that considers user needs and goals throughout each stage of the design process. \nUI/UX: The practice of creating user experiences to optimize customer satisfaction, accessibility and pleasure.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },

    //         quiz: {
    //           completed: false,
    //           impact: 100,
    //           action: `quiz`,
    //           icon: `🧪`,
    //           request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
    //             `UI/UX`
    //           )} without any answers?`,
    //           response: `\n\n1. What is the difference between user experience design and user interface design?\n\n2. What are the primary elements of effective user-centered design?\n\n3. What is the importance of user research when creating a new product or service?`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         shop: {
    //           completed: false,
    //           impact: 100,
    //           action: `shop`,
    //           icon: `🛍️`,
    //           request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
    //           response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //       },
    //     },
    //     "Content Review": {
    //       documentID: ``,
    //       filler: ``,
    //       new: false,
    //       highValue: false,
    //       underConstruction: true,
    //       completed: false,
    //       rare: true,
    //       needsImprovement: false,
    //       tooltip: ``,
    //       sourceType: `markdown`, // may not need
    //       button: `Content Review (20M+ views)`, // may not need - `name`
    //       header: `Content Review (20M+ views)`,
    //       fileSource: await import(
    //         "../../markdowns/socialMediaGrowthAnnotations.md?raw"
    //       ), // may not need

    //       prompts: {
    //         patreon: {
    //           completed: false,
    //           impact: 1000,
    //           action: `generate`,
    //           icon: `✍️`,
    //           request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
    //             `Content Review`
    //           )}?`,
    //           response: `null`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         inspire: {
    //           completed: false,
    //           impact: 100,
    //           action: `inspire`,
    //           icon: `⚡`,
    //           request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
    //             `Content Review`
    //           )}?`,
    //           response: `\n\nOne inspiring story about reviewing content to grow on social media is that of Canadian travel blogger Gwenlyn Cumyn. As a full-time entrepreneur, Gwenlyn found herself in need of more efficient ways to manage her online presence. To save time, she began curating tweets and creating shareable content for her followers. After months of trial and error, Gwenlyn was able to refine her content curation process, and as a result, she saw an increase in followers, engagement, and revenue. Gwenlyn's experience shows the power of taking time to carefully review your content and ensure that it adds value to your followers.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         summarize: {
    //           completed: false,
    //           impact: 100,
    //           action: `summarize`,
    //           icon: `📚`,
    //           request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
    //             `Content Review`
    //           )}?`,
    //           response: `\n\n1. Find Relevant Content : Locate relevant content that your followers will actually find useful.\n2. Customize Content : Take the content you find and customize it for your own social media accounts.\n3. Share Consistently : Make sure to consistently post content to maintain your presence and build a following.\n4. Repurpose Content : Find ways to repurpose content you already have in different ways to maximize its value.\n5. Monitor, Track and Analyze : Monitor your content to see what works, what needs improving and where you should focus more efforts.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         ask: {
    //           completed: false,
    //           impact: 100,
    //           action: `ask`,
    //           icon: `🔮`,
    //           request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
    //             `Content Review`
    //           )} with one sentence answers?`,
    //           response: `\n\n1. What is the best way to review content on social media? Answer: Analyze engagement metrics and user feedback to determine what content resonates and tweak your strategy accordingly.\n\n2. How often should I review content on social media? Answer: Regularly review your performance to stay on top of trends and adjust your strategy as needed.\n\n3. How do I use data to review content on social media? Answer: Look for patterns in content performance and engagement analytics to inform and guide your decisions.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         guide: {
    //           completed: false,
    //           impact: 100,
    //           action: `guide`,
    //           icon: `🤝`,
    //           request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
    //             `Content Review`
    //           )}?`,
    //           response: `\n\n1. Identify your target audience and create content tailored to meet their needs.\n2. Utilize visuals such as images, videos and infographics to increase engagement.\n3. Stay up-to-date on the latest trends and use relevant hashtags to connect with a larger audience.\n4. Be mindful of the time of day when you are posting content to maximize reach.\n5. Mix up the type of content you post, from instructional and educational to fun and entertaining.\n6. Help build relationships and engage with followers by replying to comments and messages.\n7. Use analytics and insights to track progress and learn what strategies are working best.\n8. Utilize paid ads, campaigns and influencers to expand your reach.\n9. Analyze competitor content to understand what works and what you can do better.\n10. Establish an all-inclusive social media strategy and stick to it.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         demonstrate: {
    //           completed: false,
    //           impact: 100,
    //           action: `demonstrate`,
    //           icon: `🎨`,
    //           request: `ms. roxana, can you please show me a single successful viral example of ${ultimateEffeciencyJutsu(
    //             `Content Review`
    //           )}?`,
    //           response: `\n\nOne successful example of reviewing content to grow on social media is Dollar Shave Club. In 2012, they launched their YouTube video promoting their subscription service, which went viral and attracted 12,000 customers in just 48 hours. It now has over 25 million views and the company has become a major player in the grooming industry.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         define: {
    //           completed: false,
    //           impact: 100,
    //           action: `define`, // may not need
    //           icon: `🧿`, // may not need
    //           request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
    //             `Content Review`
    //           )} in exactly one sentence?`,
    //           response: `\n\nReviewing content to grow on social media is the process of analyzing and adapting content to optimize engagement and increase followers.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },

    //         quiz: {
    //           completed: false,
    //           impact: 100,
    //           action: `quiz`,
    //           icon: `🧪`,
    //           request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
    //             `Content Review`
    //           )} without any answers?`,
    //           response: `\n\n1. What is the value of an active, engaged social media community?\n2. How can you use targeted content to build relationships and create a lasting brand impression?\n3. How can you maximize the reach, visibility and engagement of your content?`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         shop: {
    //           completed: false,
    //           impact: 100,
    //           action: `shop`,
    //           icon: `🛍️`,
    //           request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
    //           response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //       },
    //     },
    //     "SEO: Search Engine Optimization": {
    //       documentID: ``,
    //       filler: ``,
    //       new: false,
    //       highValue: false,
    //       rare: true,
    //       underConstruction: true,
    //       completed: false,
    //       needsImprovement: false,
    //       hasCode: true,
    //       tooltip: ``,
    //       sourceType: `markdown`, // may not need
    //       button: `SEO: Search Engine Optimization`, // may not need - `name`
    //       header: `SEO: Search Engine Optimization`,
    //       fileSource: await import("../../markdowns/seo.md?raw"), // may not need

    //       prompts: {
    //         patreon: {
    //           completed: false,
    //           impact: 1000,
    //           action: `generate`,
    //           icon: `✍️`,
    //           request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
    //             `SEO: Search Engine Optimization`
    //           )}?`,
    //           response: `null`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         inspire: {
    //           completed: false,
    //           impact: 100,
    //           action: `inspire`,
    //           icon: `⚡`,
    //           request: `ms. roxana, can you please share an inspiring story about Kanye West, ${ultimateEffeciencyJutsu(
    //             `SEO: Search Engine Optimization`
    //           )}?`,
    //           response: (
    //             <div>
    //               Title: "A Digital Leap: The SEO Success Story of El Pollo Loco"
    //               <br />
    //               <br />
    //               El Pollo Loco, one of the most recognized names in the Mexican
    //               fast-food industry in the United States, has harnessed the power
    //               of SEO to extend its reach, engage with customers, and grow its
    //               business in remarkable ways.
    //               <br />
    //               <br />
    //               In the mid-2000s, El Pollo Loco, although already a successful
    //               chain with hundreds of stores, faced the challenge of increasing
    //               competition and changing customer behaviors, including a shift
    //               towards online ordering. Recognizing the need to embrace digital
    //               marketing, the company embarked on a comprehensive SEO strategy to
    //               improve its online presence and drive more traffic to its website.
    //               <br />
    //               <br />
    //               Working with a top digital marketing agency, El Pollo Loco began
    //               optimizing its website for search engines. They focused on both
    //               the technical aspects, such as improving page loading speed,
    //               ensuring mobile compatibility, and establishing a logical,
    //               easy-to-navigate site structure, as well as on-page elements like
    //               keywords and meta descriptions.
    //               <br />
    //               <br />
    //               A key part of their SEO strategy was local SEO. El Pollo Loco's
    //               marketing team optimized the company's online presence for each of
    //               its locations, focusing on local keywords, and improving its
    //               visibility on online maps and directories. This allowed each of
    //               their branches to rank highly in localized search results, making
    //               it easier for customers to find their nearest El Pollo Loco
    //               restaurant.
    //               <br />
    //               <br />
    //               Additionally, they launched a blog on their website, sharing
    //               content about Mexican cuisine, cooking tips, and company news, all
    //               of which were carefully optimized for relevant keywords.
    //               <br />
    //               <br />
    //               The results of these efforts were dramatic. Website traffic
    //               increased significantly, as did online orders. They found that
    //               customers were not only coming to their site via searches for "El
    //               Pollo Loco," but also through broader search terms like "Mexican
    //               food near me," "best chicken tacos," and more.
    //               <br />
    //               <br />
    //               By 2019, El Pollo Loco's digital sales had grown to account for a
    //               significant portion of their overall revenue. Their SEO success
    //               story showcases the potential of SEO in amplifying a business's
    //               digital presence, driving sales, and ultimately improving
    //               bottom-line results. Today, El Pollo Loco remains committed to
    //               their SEO strategy, consistently optimizing their website to stay
    //               ahead in a competitive market.
    //             </div>
    //           ),
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         summarize: {
    //           completed: false,
    //           impact: 100,
    //           action: `summarize`,
    //           icon: `📚`,
    //           request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
    //             `SEO: Search Engine Optimization`
    //           )}?`,
    //           response: (
    //             <div>
    //               Title: "The Art and Science of Search Engine Optimization"
    //               <br />
    //               <br />
    //               Search Engine Optimization (SEO) is the strategic process of
    //               improving a website's visibility in search engine results. In
    //               today's digital age, SEO has become crucial for businesses and
    //               organizations to reach a wider audience, increase organic website
    //               traffic, and enhance user engagement.
    //               <br />
    //               <br />
    //               At its core, SEO is about understanding how search engines work
    //               and how users interact with them. It's about optimizing a
    //               website's content and design to make it both search
    //               engine-friendly and user-friendly. This dual focus is essential
    //               since search engines aim to provide users with the most relevant
    //               and high-quality results.
    //               <br />
    //               <br />
    //               SEO is divided into two main categories: On-page SEO and off-page
    //               SEO.
    //               <br />
    //               <br />
    //               On-page SEO involves optimizing elements within a website. This
    //               includes keyword optimization, where you ensure your content
    //               includes relevant keywords that users might use when searching for
    //               the products, services, or information you offer. Other aspects
    //               include improving site architecture to make it easy for search
    //               engines to crawl and index your pages, and enhancing user
    //               experience factors like page load speed, mobile-friendliness, and
    //               intuitive navigation.
    //               <br />
    //               <br />
    //               Off-page SEO, on the other hand, focuses on increasing your site's
    //               credibility and authority through links from other reputable
    //               sites, known as backlinks. Google and other search engines view
    //               these backlinks as votes of confidence, which can boost your
    //               site's search ranking. Social media marketing, guest blogging, and
    //               influencer marketing are some tactics used to earn high-quality
    //               backlinks.
    //               <br />
    //               <br />
    //               Local SEO is another significant aspect, especially for businesses
    //               with a physical location or those serving a specific geographical
    //               area. This involves optimizing your online presence to attract
    //               local customers, primarily through local search results. Elements
    //               of local SEO include managing your Google My Business listing,
    //               gathering positive customer reviews, and ensuring your name,
    //               address, and phone number (NAP) are consistent across all online
    //               platforms.
    //               <br />
    //               <br />
    //               Importantly, SEO is an ongoing process. Search engine algorithms
    //               constantly evolve, and user behavior changes over time. As such,
    //               businesses must continually monitor their SEO performance, adjust
    //               their strategies, and stay updated on the latest SEO trends and
    //               best practices. In conclusion, SEO is not just a technical task
    //               but a vital marketing strategy. It enables businesses to reach
    //               their target audience organically, build brand credibility, and
    //               achieve sustainable growth. Despite the effort it requires, the
    //               benefits of a well-executed SEO strategy are well worth the
    //               investment.
    //             </div>
    //           ),
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         ask: {
    //           completed: false,
    //           impact: 100,
    //           action: `ask`,
    //           icon: `🔮`,
    //           request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
    //             `SEO: Search Engine Optimization`
    //           )} with one sentence answers?`,
    //           response: (
    //             <div>
    //               <ol>
    //                 <li>
    //                   <div>
    //                     <b>
    //                       Question 1: What are keywords, and why are they important
    //                       in SEO?
    //                     </b>
    //                     <br />
    //                     <br />
    //                     Answer: Keywords are words or phrases that users enter into
    //                     search engines when looking for information, products, or
    //                     services. In SEO, keywords are crucial because they form the
    //                     connection between what people are searching for and the
    //                     content you provide to fill that need.
    //                     <br />
    //                     <br />
    //                     Your goal in ranking on search engines is to drive organic
    //                     traffic to your site from the search engine result pages
    //                     (SERPs), and the keywords you choose to target (i.e., aim to
    //                     rank for) will determine the kind of traffic you get. If you
    //                     choose the right keywords, well-aligned with your product or
    //                     service, you'll bring high-quality traffic to your site,
    //                     likely to engage or convert (e.g., make a purchase, sign up
    //                     for a newsletter).
    //                     <br />
    //                     <br />
    //                     Keyword research involves identifying popular, relevant
    //                     search terms with a balanced level of competition. The
    //                     process often includes using SEO tools to discover keywords,
    //                     analyzing the competition, and keyword mapping (assigning
    //                     the identified keywords to specific pages on your site).
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div>
    //                     <b>
    //                       Question 2: What is link building, and how does it affect
    //                       SEO?
    //                     </b>
    //                     <br />
    //                     <br />
    //                     Answer: Link building is the process of acquiring hyperlinks
    //                     from other websites to your own. A hyperlink (usually just
    //                     called a link) is a way for users to navigate between pages
    //                     on the internet.
    //                     <br />
    //                     <br />
    //                     Link building is crucial for SEO because, when it comes to
    //                     ranking web pages, search engines not only look at the
    //                     content of a page but also consider the number of links
    //                     pointing to that page from external websites and the quality
    //                     of those external websites. Essentially, the more
    //                     high-quality websites that link to your website, the more
    //                     likely you are to rank well in search results.
    //                     <br />
    //                     <br />
    //                     But, it's important to note that not all links are valued
    //                     the same. Links from relevant and reputable websites tend to
    //                     carry more weight. This is where a sound link-building
    //                     strategy comes into play. The strategy might involve content
    //                     creation, public relations, and outreach efforts aimed at
    //                     getting other websites to link to yours.
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div>
    //                     <b>Question 3: What is the role of content in SEO?</b>
    //                     <br />
    //                     <br />
    //                     Answer: Content plays a pivotal role in SEO. Search engines
    //                     aim to provide users with the most relevant and high-quality
    //                     content in response to their queries. Therefore, creating
    //                     engaging, valuable content that answers your audience's
    //                     questions is key to SEO success.
    //                     <br />
    //                     <br />
    //                     When creating content for SEO, it's essential to:
    //                     <ul>
    //                       <li>
    //                         Ensure it is unique and stands out from similar content
    //                         on the web.
    //                       </li>
    //                       <li>
    //                         Make it relevant and useful to your audience by
    //                         addressing their needs and questions.
    //                       </li>
    //                       <li>
    //                         Incorporate the right keywords naturally and
    //                         contextually.
    //                       </li>
    //                       <li>
    //                         Structure it properly using headers, subheaders, and
    //                         meta tags.
    //                       </li>
    //                       Also, consider that content isn't just about text. It
    //                       includes images, videos, infographics, charts, etc.
    //                       Diversifying your content types can engage users more
    //                       effectively and contribute positively to your SEO efforts.
    //                     </ul>
    //                     <br />
    //                     <br />
    //                     Also, consider that content isn't just about text. It
    //                     includes images, videos, infographics, charts, etc.
    //                     Diversifying your content types can engage users more
    //                     effectively and contribute positively to your SEO efforts.
    //                     <br />
    //                     <br />
    //                     Remember, the ultimate goal is to satisfy your audience's
    //                     informational needs, keep them on your site longer, and
    //                     ideally convert them into customers or subscribers. That's
    //                     where the dual nature of SEO comes in: optimizing for both
    //                     search engines and your human audience.
    //                   </div>
    //                 </li>
    //               </ol>
    //             </div>
    //           ),
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         guide: {
    //           completed: false,
    //           impact: 100,
    //           action: `guide`,
    //           icon: `🤝`,
    //           request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
    //             `SEO: Search Engine Optimization`
    //           )}?`,
    //           response: (
    //             <div>
    //               here is an expert-level study guide and roadmap to transition from
    //               a beginner to an expert in SEO:
    //               <ol>
    //                 <li>
    //                   <b>Understanding SEO Basics:</b>
    //                   <p>
    //                     Start with a solid foundation in SEO basics. You need to
    //                     understand what SEO is, why it's important, and the
    //                     difference between organic and paid search results.
    //                     Familiarize yourself with common SEO terminology and the
    //                     principles of how search engines work. Resources: Moz's
    //                     "Beginner's Guide to SEO," Google's "Search Engine
    //                     Optimization (SEO) Starter Guide."
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <b>Keyword Research:</b>
    //                   <p>
    //                     The next step is understanding keywords: what they are, why
    //                     they're important, and how to find the ones that are most
    //                     relevant to your business. You'll learn about long-tail
    //                     keywords, keyword difficulty, search intent, and keyword
    //                     optimization. Resources: SEMrush's "Keyword Research Guide",
    //                     Moz's "Keyword Explorer".
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <b>On-Page SEO:</b>
    //                   <p>
    //                     This involves optimizing individual webpages for specific
    //                     keywords to improve their search engine rankings. Key
    //                     aspects include title tags, meta descriptions, headers, URL
    //                     structure, and keyword usage within the content. Also, learn
    //                     about image optimization and the importance of good user
    //                     experience (UX). Resources: HubSpot's "On-Page SEO Guide",
    //                     Google's "On-Page SEO Guide".
    //                   </p>
    //                 </li>

    //                 <li>
    //                   <b>Technical SEO:</b>
    //                   <p>
    //                     Here, you'll delve into more advanced topics like website
    //                     architecture, mobile optimization, site speed, structured
    //                     data, XML sitemaps, and canonical URLs. You'll also learn
    //                     about robots.txt files, HTTPS, and other aspects that affect
    //                     how search engines crawl and index your website. Resources:
    //                     Google's "Technical SEO Guide", Moz's "Technical SEO Guide".
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <b>Off-Page SEO:</b>
    //                   <p>
    //                     Understand the importance of off-page elements in your SEO
    //                     strategy, primarily focusing on the practice of link
    //                     building. Learn about the value of backlinks, how to earn
    //                     them, and the importance of link quality over quantity.
    //                     Resources: Ahrefs' "Guide to Link Building", Moz's
    //                     "Beginner's Guide to Link Building".
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <b>Local SEO:</b>
    //                   <p>
    //                     If you're a local business or have a physical location,
    //                     local SEO is crucial. You'll learn about Google My Business,
    //                     local citations, online reviews, local keyword optimization,
    //                     and other factors that help you rank in local search
    //                     results. Resources: Moz's "Local SEO Guide", Search Engine
    //                     Journal's "Local SEO Guide".
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <b>Content Marketing and SEO:</b>
    //                   <p>
    //                     Understanding the symbiotic relationship between content
    //                     marketing and SEO is crucial. Learn how to create content
    //                     that not only serves your users but also attracts backlinks
    //                     and improves your search visibility. Resources: HubSpot's
    //                     "SEO Content Writing Guide", Moz's "Guide to Content
    //                     Marketing and SEO".
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <b>SEO Analytics and Reporting:</b>
    //                   <p>
    //                     Learn how to measure your SEO success. Familiarize yourself
    //                     with important metrics like organic traffic, bounce rate,
    //                     conversion rate, and keyword rankings. Become proficient in
    //                     using Google Analytics, Google Search Console, and other SEO
    //                     analytics tools. Resources: Google's "Analytics Academy",
    //                     Moz's "Guide to SEO Metrics".
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <b>Algorithm Updates and SEO Best Practices:</b>
    //                   <p>
    //                     Stay up-to-date with the latest search algorithm updates and
    //                     understand how they can impact your SEO efforts. Following
    //                     SEO best practices will help ensure your website remains
    //                     compliant with search engine guidelines. Resources: Google's
    //                     "Search Central Blog", Search Engine Journal's "SEO Guide".
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <b>Advanced SEO Techniques and Strategies:</b>
    //                   <p>
    //                     As you move towards the expert level, dive deeper into
    //                     advanced SEO topics such as Schema markup, SEO for
    //                     JavaScript-powered websites, Progressive Web Apps (PWA),
    //                     voice search optimization, and AI in SEO.
    //                     <br />
    //                     <br />
    //                     Resources: Google's "Advanced SEO Guides", Moz's
    //                   </p>
    //                 </li>
    //               </ol>
    //             </div>
    //           ),
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         demonstrate: {
    //           completed: false,
    //           impact: 100,
    //           action: `demonstrate`,
    //           icon: `🎨`,
    //           request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
    //             `SEO: Search Engine Optimization`
    //           )} in html`,
    //           response: `
    // Let's consider an example of a hypothetical blog post about organic gardening. Here's a glimpse of how the HTML might look with SEO optimizations:

    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <title>Top 10 Organic Gardening Tips for Beginners | Your Gardening Blog</title>
    //   <meta name="description" content="Learn the top 10 organic gardening tips for beginners. Start your organic garden today and grow your own healthy, fresh food.">
    //   <meta name="keywords" content="Organic Gardening, Gardening Tips, Beginner Gardening, Organic Vegetables">
    //   <link rel="canonical" href="https://www.yourgardeningblog.com/organic-gardening-tips" />
    // </head>
    // <body>
    //   <header>
    //     <h1>Top 10 Organic Gardening Tips for Beginners</h1>
    //   </header>
    //   <article>
    //     <h2>Getting Started with Organic Gardening</h2>
    //     <p>Organic gardening is a rewarding hobby...</p>
    //     <!-- Content continues... -->
    //     <h2>Our Top 10 Organic Gardening Tips</h2>
    //     <p>Here are our top 10 tips for new organic gardeners...</p>
    //     <!-- Content continues... -->
    //   </article>
    //   <footer>
    //     <!-- Footer content -->
    //   </footer>
    // </body>
    // </html>
    // - The <title> tag includes the main keyword (Organic Gardening Tips) and secondary keyword (Beginners), and it aligns with the content of the article.

    // - The description meta tag provides a concise, engaging summary of the page content, which can help in click-through rates from search results.

    // - The keywords meta tag includes relevant keywords about the page. However, note that Google officially announced in 2009 that they don’t use the keywords meta tag in web ranking, but some other search engines might still use it.

    // - The canonical link helps prevent duplicate content issues by specifying the "canonical URL", the "preferred" version of a web page.

    // - The <h1> and <h2> tags are used appropriately for headings and subheadings, and they include relevant keywords.

    // - The <p> (paragraph) tags contain the main content of the page, which should be well-written and naturally include the page's target keywords.

    // Remember, this is just a glimpse of what SEO in code might look like. Effective SEO involves much more than just optimizing your HTML. It also includes things like website performance, mobile optimization, structured data, backlinks, user engagement, and more.

    // `,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         define: {
    //           completed: false,
    //           impact: 100,
    //           action: `define`, // may not need
    //           icon: `🧿`, // may not need
    //           request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
    //             `SEO: Search Engine Optimization`
    //           )} in exactly one sentence?`,
    //           response: `\n\nSearch Engine Optimization (SEO) is the practice of enhancing a website's visibility and ranking in search engine results through various strategies, including keyword optimization, quality content creation, and link building.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },

    //         quiz: {
    //           completed: false,
    //           impact: 100,
    //           action: `quiz`,
    //           icon: `🧪`,
    //           request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
    //             `SEO: Search Engine Optimization`
    //           )}?`,
    //           response: (
    //             <div>
    //               <ol>
    //                 <li>
    //                   <b>
    //                     What is the difference between organic and paid search
    //                     results?
    //                   </b>
    //                 </li>
    //                 <li>
    //                   <b>
    //                     What is a 'long-tail keyword' and why is it important in
    //                     SEO?
    //                   </b>
    //                 </li>
    //                 <li>
    //                   <b>
    //                     Explain the term 'link building' in the context of SEO and
    //                     why it matters.
    //                   </b>
    //                 </li>
    //                 <li>
    //                   <b>What is 'local SEO' and who needs it?</b>
    //                 </li>
    //                 <li>
    //                   <b>
    //                     Why is it important to regularly monitor and adjust your SEO
    //                     strategy?
    //                   </b>
    //                 </li>
    //               </ol>
    //             </div>
    //           ),
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         shop: {
    //           completed: false,
    //           impact: 100,
    //           action: `shop`,
    //           icon: `🛍️`,
    //           request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
    //           response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //       },
    //     },
    //     "Influence & Expression": {
    //       documentID: ``,
    //       filler: ``,
    //       new: false,
    //       highValue: false,
    //       rare: true,
    //       underConstruction: true,
    //       completed: false,
    //       needsImprovement: false,
    //       tooltip: ``,
    //       sourceType: `markdown`, // may not need
    //       button: `Influence & Expression`, // may not need - `name`
    //       header: `Influence & Expression`,
    //       fileSource: await import("../../markdowns/influenceAndExpression.md?raw"), // may not need

    //       prompts: {
    //         patreon: {
    //           completed: false,
    //           impact: 1000,
    //           action: `generate`,
    //           icon: `✍️`,
    //           request: `ms. roxana, can you please generate an essay that introduces me to ${ultimateEffeciencyJutsu(
    //             `Influence & Expression`
    //           )}?`,
    //           response: `null`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         inspire: {
    //           completed: false,
    //           impact: 100,
    //           action: `inspire`,
    //           icon: `⚡`,
    //           request: `ms. roxana, can you please share an inspiring story about Kanye West, ${ultimateEffeciencyJutsu(
    //             `Influence & Expression`
    //           )}?`,
    //           response: `\n\nKanye West's story of success is an inspiring example of how expression, no matter how controversial, can help shape culture and influence social media.\n\nIn 2011, when West dropped his album, My Beautiful Dark Twisted Fantasy, which contained a dark, abrasive sound and daring lyrics, it became an instant success. The song \"All of the Lights,\" featuring Rihanna and Kid Cudi, quickly broke records, becoming West's most popular single of his career. Its impact was astonishing, charting in more than 10 countries, and climbing all the way to the number one position on the US Billboard, despite its competition from popular female singers like Katy Perry, who was at the peak of her career.\n\nThat same year, West appeared on VH1's Storytellers, a show which gives musicians the chance to explain the inspiration and implications behind their music. West spoke openly and oratorically about his vision, what he wanted to say, and how he hoped it would create a conversation with the public so they could think and discuss the issues he was addressing.\n\nWest's openness, frankness, and expression rung throughout the entire show and had an incredible impact on his fans. His words were so inspiring that social media exploded with conversations around his opinions and messages. West had given them an insight into his life and thoughts not found on any other medium or platform.\n\nThe audience walked away from the show feeling empowered, challenged, and inspired. They had been invited to go along on a journey with West as he explained his passion and vision for the future and this created a lifelong connection that continues to thrive today.\n\nKanye West is a perfect example of how expression can have a powerful impact on society and how it can be used to influence and reach people on a larger scale. Through his straight-forward and honest approach, he has managed to open up discussions and create conversations on a range of topics. West’s work continues to inspire millions today, and it is a sure testament to the power of expression.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         summarize: {
    //           completed: false,
    //           impact: 100,
    //           action: `summarize`,
    //           icon: `📚`,
    //           request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
    //             `Influence & Expression`
    //           )}?`,
    //           response: `\n\nExpression through social media is the act of conveying your thoughts, feelings, and opinions to a wider audience of peers. It can take many forms, from creative expression seen through music and images to more structured posts or comments made on social media networks. Expression has the power to influence people’s opinions and shape the conversations you have with them. It’s important to have a clear and authentic message that doesn’t come off as being salesy or pushy. Having an active and engaged presence on social media can help people learn more about you, your interests and experiences, allowing you to share advice, experiences, and more. It can also help you connect and network with a broad variety of people who share similar interests and experiences.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         ask: {
    //           completed: false,
    //           impact: 100,
    //           action: `ask`,
    //           icon: `🔮`,
    //           request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
    //             `Influence & Expression`
    //           )} with one sentence answers?`,
    //           response: `\n\n1. What is the impact of expression on influence in social media? - Expression has the power to create and shape opinion on social media, enabling individuals to have an impact on the opinions of others.\n\n2. How do I effectively express myself on social media? - Establishing an authentic, consistent, and creative expression on social media platforms is key to creating effective influence. \n\n3. How can I use expression to better engage my followers? - Utilize effective ways of expression, like visuals, humor, callouts, stories, and more, to create an engaging experience for your followers.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         guide: {
    //           completed: false,
    //           impact: 100,
    //           action: `guide`,
    //           icon: `🤝`,
    //           request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
    //             `Influence & Expression`
    //           )}?`,
    //           response: `\n\n1. Identify the major types of expressions used in social media\n2. Analyze the different ways expressions impact influence \n3. Explore the implications of expression for social media users\n4. Explain the relationships between expression and influence in social media\n5. Discover how expression in social media can be used to generate social change\n6. Compare and contrast the effects of message framing and self-expression in social media\n7. Examine the role of emotion in the expressions used on social media\n8. Assessment how the language, tone, and framing of expressions convey information and persuade audiences\n9. Investigate different strategies of effectively incorporating expressions into social media content\n10. Develop an understanding of how and why expression on social media can change opinions and become viral`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         demonstrate: {
    //           completed: false,
    //           impact: 100,
    //           action: `demonstrate`,
    //           icon: `🎨`,
    //           request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
    //             `Influence & Expression`
    //           )}`,
    //           response: `\n\nExpression has the power to influence social media in many ways. For example, a popular artist might express their opinion on a current event, posting it on Instagram. This can have a ripple effect, with followers voicing their own opinions and sparking conversations or debates on the subject. Expression can also foster relationships and connections through sharing values, beliefs, and perspectives, creating even wider reach in a digital landscape.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         define: {
    //           completed: false,
    //           impact: 100,
    //           action: `define`, // may not need
    //           icon: `🧿`, // may not need
    //           request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
    //             `Influence & Expression`
    //           )} in exactly one sentence?`,
    //           response: `\n\nExpression in social media can have a significant impact on how others perceive and interact with a user, empowering them to influence their audience.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },

    //         quiz: {
    //           completed: false,
    //           impact: 100,
    //           action: `quiz`,
    //           icon: `🧪`,
    //           request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
    //             `Influence & Expression`
    //           )}?`,
    //           response: `\n\n1. What is one way having a unique and recognizable online presence helps in influencing social media?\n\n2. Name one way someone can engage others on social media by expressing their true views or ideas?\n\n3. What is an example of using expression to influence an audience on social media to take a specific action?`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //         shop: {
    //           completed: false,
    //           impact: 100,
    //           action: `shop`,
    //           icon: `🛍️`,
    //           request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
    //           response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
    //           spanish: ``,
    //           tooltip: ``,
    //         },
    //       },
    //     },

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
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1691867474/legacy/IMG_9188_iewsh4_bzwwxi.mov", // may not need

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
          additionalContent: await import("../../markdowns/philosophy.md?raw"),
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: (
            <div>
              Abraham Lincoln's understanding of Providence, or the will and
              action of God, evolved over time and deeply influenced his
              speeches, especially during his time as President and throughout
              the Civil War. His personal and public views of Providence often
              reflected a deep and complex understanding of God's role in human
              affairs.
              <br />
              <br />
              Initially, Lincoln seemed to favor a more deistic approach, seeing
              God as a Creator who set the universe in motion but did not
              intervene in the daily lives of people. However, as the Civil War
              went on and the nation suffered through great upheaval and loss,
              his views appeared to shift towards a more theistic understanding,
              believing in a more active, personal God who is deeply involved in
              human events.
              <br />
              <br />
              Lincoln's evolving perspective on Providence can be seen in his
              presidential speeches. Notably, in his Second Inaugural Address
              delivered in March 1865, Lincoln refrained from claiming that God
              was on the Union's side in the Civil War, a common belief at the
              time. Instead, he suggested that both North and South "read the
              same Bible and pray to the same God, and each invokes His aid
              against the other."
              <br />
              <br />
              In the same speech, Lincoln advanced the idea that the Civil War
              was God's punishment to America for the sin of slavery: "He gives
              to both North and South this terrible war as the woe due to those
              by whom the offense came." In this perspective, Lincoln framed the
              war not as a struggle between two factions of people, but as a
              divine chastisement that everyone had to endure and learn from.
              <br />
              <br />
              He concluded his second inaugural address with the famous line:
              "With malice toward none; with charity for all; with firmness in
              the right, as God gives us to see the right... let us strive on to
              finish the work we are in; to bind up the nation's wounds." This
              not only calls for peace and unity but also acknowledges the role
              of Providence in guiding the nation towards the right path.
              Lincoln was suggesting that it is up to humans to discern and
              follow God's will as best they can, even in times of great trial
              and difficulty.
              <br />
              <br />
              Throughout his life and presidency, Lincoln's view of Providence
              was marked by humility, a sense of moral responsibility, and a
              profound acknowledgment of the mystery of God's purposes. His
              speeches reflect this evolving understanding, using the concept of
              Providence to express deep national introspection, moral vision,
              and a path towards unity and healing.
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
          request: `ms. roxana, can you please summarize Professor Ruha Benjamin's work with the intersection of ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: (
            <div>
              Understanding the relationship between the Civil War, Jim Crow,
              the War on Drugs, and machine learning algorithms from a critical
              race theory (CRT) perspective involves considering the historical
              context and enduring systemic racial inequalities that have shaped
              American society.
              <br />
              <br />
              The Civil War, a violent conflict fought from 1861 to 1865, was
              largely about the struggle over slavery. While it ended with the
              abolition of slavery, it did not eliminate deeply rooted racial
              prejudices. In the post-Civil War era, Southern states enacted a
              series of laws known as Jim Crow laws to maintain racial
              segregation and disenfranchise African Americans. These laws
              created a rigid racial caste system that was enforced through both
              legal means and racial terrorism.
              <br />
              <br />
              The War on Drugs, launched in the 1970s, disproportionately
              targeted communities of color for drug offenses, leading to mass
              incarceration. Some scholars, like Michelle Alexander, argue that
              the War on Drugs gave birth to a "New Jim Crow" by relegating a
              large portion of the African American community to a permanent
              second-class status through a cycle of stigmatization,
              incarceration, and socio-economic disadvantage.
              <br />
              <br />
              Critical Race Theory can provide a framework for understanding
              these historical events as evidence of systemic and structural
              racism, and how these racial disparities and prejudices have been
              perpetuated over time.
              <br />
              <br />
              Now, when we consider machine learning algorithms in this context,
              it's important to note that these algorithms are not developed in
              a vacuum. They're trained on data generated by our society and
              therefore, they absorb the biases present in that data. If the
              data used to train these algorithms comes from a society where
              systemic racism exists, the resulting models can inadvertently
              perpetuate and amplify these biases.
              <br />
              <br />
              For instance, facial recognition software has been found to have
              higher error rates in identifying individuals with darker skin
              tones. In the criminal justice system, algorithms used for risk
              assessment can disproportionately mark people of color as high
              risk due to biased data input. For example, if an algorithm is
              trained on data from a period when the War on Drugs led to higher
              arrest and incarceration rates among African Americans, it might
              "learn" to associate being African American with a higher
              likelihood of criminality.
              <br />
              <br />
              In this sense, machine learning algorithms can risk becoming
              modern enforcers of historical and systemic racial biases,
              creating a form of "technological redlining" or what Ruha Benjamin
              refers to as the "New Jim Code." Understanding and acknowledging
              this link is critical to developing more equitable algorithms and
              mitigating the risk of exacerbating racial disparities.
              <br />
              <br />
              From a CRT perspective, it's crucial to continuously question and
              critique these technologies, advocating for transparency,
              accountability, and inclusivity. Ensuring diverse representation
              in tech, auditing algorithms for racial bias, and establishing
              strict regulations can be part of the solution to break this cycle
              of systemic bias in machine learning algorithms.
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
            `Philosophy`
          )} with one sentence answers?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>What does philosophy have to do with computer science?</b>
                  <br />
                  <div>
                    The intersection of philosophy and computer science is much
                    more significant than one might initially assume. Philosophy
                    deals with fundamental questions about reality, knowledge,
                    ethics, and mind, all of which are directly relevant to
                    computing. For instance, philosophical debates around
                    artificial intelligence (AI) — whether machines can 'think'
                    or 'understand' like a human does — involve deep
                    philosophical issues about mind and consciousness.
                    Similarly, the question of how to build ethical AI or
                    ethical systems is a fundamentally philosophical question
                    about the nature of ethics, values, and responsibility.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How can understanding philosophy enhance the skills of a
                    computer scientist?
                  </b>
                  <br />
                  <div>
                    {" "}
                    Studying philosophy can enhance a computer scientist's
                    skills in numerous ways. Philosophy promotes critical
                    thinking and rigorous logical reasoning, both of which are
                    invaluable in programming and system design. Furthermore,
                    philosophy encourages you to consider multiple perspectives
                    and question assumptions, which is essential when designing
                    user-centered software or when trying to anticipate how
                    technologies might be used (or misused) in the real world.
                    Lastly, philosophy's emphasis on ethics is essential as
                    computer scientists often create systems with significant
                    societal impacts. Understanding ethical frameworks can help
                    guide the creation of more responsible and fair
                    technologies.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    What are some philosophical problems that computer science
                    has brought to light?
                  </b>
                  <br />
                  <div>
                    Computer science has reinvigorated several longstanding
                    philosophical debates and introduced entirely new ones. For
                    example, AI has revived questions about the nature of
                    intelligence, consciousness, and what it means to be a
                    person. The development of the internet and social media has
                    raised new questions about privacy, free speech, and the
                    nature of community. Additionally, machine learning
                    algorithms used in decision-making (e.g., for loan
                    approvals, job applications, etc.) have raised new questions
                    about fairness, bias, and discrimination. Each of these
                    issues involve deep, complex philosophical questions that we
                    are only just beginning to grapple with.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>
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
            `Philosophy`
          )}?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>"Enrique's Journey" by Sonia Nazario:</b>
                  <br />
                  <div>
                    This heart-wrenching epic unveils the odyssey of a brave
                    Honduran boy, Enrique, who stares danger in the eye and
                    crosses treacherous terrains to find his mother on the other
                    side of the U.S. border. It's an eye-opening, soul-stirring
                    journey into the very heart of the human experience, casting
                    a spotlight on the gut-wrenching realities of immigration.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    "The Economic Consequences of the Peace" by John Maynard
                    Keynes
                  </b>
                  <br />
                  <div>
                    {" "}
                    Keynes delivers a gripping analysis of the Treaty of
                    Versailles, which ended World War I. With the precision of a
                    master surgeon, he dissects the treaty, boldly prophesying
                    that its harsh terms would catapult the world into another
                    war. A daring prediction and critique that history would
                    later affirm.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>"The One World Schoolhouse" by Salman Khan</b>
                  <br />
                  <div>
                    Salman Khan, the visionary creator of Khan Academy, paints a
                    captivating picture of the future of education. He advocates
                    for a revolution in learning, a system where education bends
                    to the learner's needs, not the other way around,
                    transforming classrooms into a thriving global community.
                  </div>
                  <br />
                  <br />
                </li>

                <li>
                  <b>"Viral Justice" by Ruha Benjamin</b>
                  <br />
                  <div>
                    An inspiring vision of how we can build a more just world -
                    one small change at a time.
                    <br />
                    <br />
                    Long before the pandemic, Ruha Benjamin was doing
                    groundbreaking research on race, technology, and justice,
                    focusing on big, structural changes. But the twin plagues of
                    COVID-19 and anti-Black police violence inspired her to
                    rethink the importance of small, individual actions. Part
                    memoir, part manifesto, Viral Justice is a sweeping and
                    deeply personal exploration of how we can transform society
                    through the choices we make every day.
                    <br />
                    <br />
                    Vividly recounting her personal experiences and those of her
                    family, Benjamin shows how seemingly minor decisions and
                    habits could spread virally and have exponentially positive
                    effects. She recounts her father's premature death,
                    illuminating the devastating impact of the chronic stress of
                    racism, but she also introduces us to community organizers
                    who are fostering mutual aid and collective healing. Through
                    her brother's experience with the criminal justice system,
                    we see the trauma caused by policing practices and mass
                    imprisonment, but we also witness family members finding
                    strength as they come together to demand justice for their
                    loved ones. And while her own challenges as a young mother
                    reveal the vast inequities of our healthcare system,
                    Benjamin also describes how the support of doulas and
                    midwives can keep Black mothers and babies alive and well.
                    <br />
                    <br />
                    Born of a stubborn hopefulness, Viral Justice offers a
                    passionate, inspiring, and practical vision of how small
                    changes can add up to large ones, transforming our
                    relationships and communities and helping us build a more
                    just and joyful world plunging into the uncharted depths of
                    the digital realm, revealing how technology and justice
                    intertwine, exploring the viral spread of systemic biases
                    that infect our supposedly neutral digital world.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"Race After Technology" by Ruha Benjamin</b>
                  <br />
                  <div>
                    Benjamin takes readers on a journey into the "New Jim Code,"
                    a territory where technology and racial bias merge. This
                    book is a clarion call to action, a wake-up call to a world
                    seduced by the notion of objective algorithms, uncovering
                    the coded racism hidden within our digital lives.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"The New Jim Crow" by Michelle Alexander</b>
                  <br />
                  <div>
                    Alexander delivers a thunderous indictment of the modern
                    American criminal justice system. She unearths the stark
                    truth that mass incarceration, driven by the War on Drugs,
                    has resurrected a racial caste system that mirrors the Jim
                    Crow era. A chilling revelation of systemic racism that
                    lurks behind bars.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"The Stranger" by Albert Camus</b>
                  <br />
                  <div>
                    Albert Camus unravels a captivating tale of Meursault, an
                    unrepentant French Algerian who dares to confront the
                    absurdity of life head-on. In a world that demands remorse
                    for his act of murder, he defiantly clings to his
                    indifference, shaking the very pillars of moral convention.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"Teaching Community: A Pedagogy of Hope" by bell hooks</b>
                  <br />
                  <div>
                    bell hooks champions a rousing call to transform education
                    into a tool for liberation. She envisions classrooms where
                    race and gender are not hurdles but embraced diversity,
                    where mutual respect forms the bedrock of learning, and
                    where hope sows the seeds for a vibrant, inclusive
                    community.
                  </div>
                </li>
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
            `Philosophy`
          )}`,
          response: (
            <div>
              <div>
                Purpose, duty, and providence are complex philosophical concepts
                that have been interpreted in various ways throughout history
                and within different philosophical, religious, and cultural
                contexts. Here's a brief overview of how they are generally
                understood:
              </div>
              <br />
              <br />
              <ol>
                <li>
                  <b>Purpose</b>
                  <br />
                  <div>
                    In philosophy, purpose pertains to the reason or intent
                    behind an action or existence. It's often linked to ideas
                    about the meaning of life and human existence. Teleological
                    theories, for example, argue that everything in life has a
                    specific purpose or end goal (telos). In personal terms,
                    one's purpose might be understood as the overarching goal or
                    set of goals that give direction and meaning to one's life.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>Duty</b>
                  <br />
                  <div>
                    {" "}
                    Duty refers to moral or legal obligations; responsibilities
                    that individuals must fulfill. Duty-based ethics, or
                    deontology, is a moral theory that emphasizes the importance
                    of duty in determining what is right and wrong. For example,
                    Immanuel Kant, a famous deontologist, argued that moral
                    actions are not necessarily those that result in a good
                    outcome, but those that are undertaken out of a sense of
                    duty and guided by universal moral laws.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>Providence</b>
                  <br />
                  <div>
                    Providence is a religious and theological concept that
                    refers to God's intervention in the world. It implies that
                    there is a divine plan and that God's wisdom guides this
                    plan. Providence often deals with questions of theodicy, or
                    why a good and all-powerful God allows suffering and evil to
                    exist. In some interpretations, providence suggests that
                    such suffering is part of a larger, divine plan that is
                    ultimately for the greater good, even if it is beyond human
                    comprehension.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>

              <br />
              <br />
              <div>
                It's important to note that these three concepts can interact
                and overlap in complex ways. For example, someone's sense of
                duty might be tied to their belief in a divine purpose for their
                life. Meanwhile, an understanding of providence might inform
                what one perceives their purpose to be, especially within
                certain religious frameworks.
              </div>
              <br />
              <br />
              <div>
                Consider a person who believes that their purpose in life (i.e.,
                their reason for being) is to help others. This could translate
                into a sense of duty (i.e., moral obligation) to do charitable
                work. If this person also believes in divine providence, they
                might view their calling to charity work as part of a divinely
                ordained plan. They might also interpret challenges and
                successes in their work as signs of divine providence, providing
                further meaning and context to their purpose and duty.
              </div>
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
            `Philosophy`
          )} in exactly one sentence?`,
          response: (
            <div>
              Philosophy is important to study because it cultivates critical
              thinking, encourages open-mindedness, and fosters the exploration
              of fundamental questions about existence, morality, and the nature
              of reality, enabling us to better understand ourselves and the
              world around us.
            </div>
          ),
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
          response: (
            <div>
              <ol>
                <li>
                  <b>What does philosophy have to do with computer science?</b>

                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How does the design and development of algorithms and AI
                    systems, often created by predominantly white or asian and
                    male teams, potentially reinforce existing racial biases and
                    systemic inequalities? How can these be mitigated?
                  </b>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    In what ways can critical race theory inform our
                    understanding of the digital divide, and how can it guide
                    the creation of more equitable access to technology and
                    digital resources?
                  </b>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How might concepts from critical race theory help to
                    critique and reshape current practices in data collection
                    and interpretation in computer science, particularly with
                    respect to racial and ethnic categories?
                  </b>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How can we apply a critical race theory lens to the
                    discourse around digital privacy and surveillance,
                    especially considering the differential impacts on various
                    racial and ethnic groups?
                  </b>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    What role can philosophy and computer science play in
                    helping to dismantle systemic racism as identified and
                    outlined by critical race theory? For example, how can
                    philosophical notions of ethics and justice inform the
                    development and use of technology in a way that promotes
                    racial justice?
                  </b>
                  <br />
                  <br />
                </li>
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
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Human-Computer Interaction": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: false,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Human-Computer Interaction`, // may not need - `name`
      header: `Human Computer Interaction`,
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1691867533/legacy/IMG_9182_ao3yio_f5f8ue.mov", // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
          additionalContent: await import(
            "../../markdowns/humanComputerInteraction.md?raw"
          ),
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              The intersection of teaching and psychology holds immense value
              for human-computer interaction, particularly in the development of
              educational and mental health technologies. In essence,
              human-computer interaction is about designing technologies that
              understand and respond effectively to human needs and behaviors. A
              deep understanding of teaching and psychology can greatly inform
              these designs.
              <br /> <br />
              Educational psychology gives us insights into how humans learn. It
              helps us understand the structures, strategies, and types of
              feedback that can enhance learning, retention, and the application
              of knowledge. By applying these insights to human-computer
              interaction, we can create educational technologies that are not
              just interactive but also effective in promoting learning.
              <br /> <br />
              On another note, psychology plays a key role in tailoring
              education to individual needs. Every learner is unique, with
              different strengths, weaknesses, and learning styles. By
              integrating psychological principles with technology, we can
              create systems that adapt to these individual differences,
              personalizing education in ways that traditional classroom
              learning may not be able to.
              <br /> <br />
              For mental health technologies, understanding psychological
              principles and therapy techniques is critical. For instance,
              cognitive-behavioral therapy principles can be applied to create
              apps that help users track their mood, recognize negative thought
              patterns, and apply cognitive restructuring techniques. Without
              understanding psychology, developing such tools would be
              impossible.
              <br /> <br />
              Lastly, the principles of psychology and teaching also guide how
              technology itself can be made more user-friendly, engaging, and
              effective, considering factors such as cognitive load, attention,
              motivation, and behavior change. It’s not only about what the
              technologies do, but also about how they do it and how users
              interact with them.
              <br /> <br />
              Therefore, it's clear that the intersection of teaching and
              psychology has much to offer to the field of human-computer
              interaction in the development of educational and mental health
              technologies.
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
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              The relationship between human-computer interaction (HCI), search
              engine optimization (SEO), social influence, and expression is a
              complex and symbiotic one, all of which are integral aspects of
              the digital experience.
              <br />
              <br />
              Human-computer interaction is the foundational pillar upon which
              the relationship is built. HCI focuses on designing and
              implementing user-friendly interfaces that facilitate seamless
              interaction between humans and computers. It guides how
              information is displayed, how user inputs are processed, and how
              responses are provided. HCI is not just about making systems that
              work; it's about making systems that work well for people, taking
              into consideration human needs, capabilities, and limitations.
              <br />
              <br />
              Search engine optimization, on the other hand, is the method by
              which content visibility is maximized in online search results.
              SEO serves as the link between users and the vast sea of
              information available online. By utilizing SEO principles,
              developers and content creators can ensure that their digital
              offerings are easily discoverable, accessible, and relevant to
              users. SEO thus plays an essential role in guiding users through
              the digital landscape, effectively bringing together user demand
              and content supply.
              <br />
              <br />
              However, human behavior in the digital realm isn't solely guided
              by the principles of HCI and SEO. Social influence plays a pivotal
              role in shaping online interactions and decisions. Whether it's
              through social media, online reviews, or digital word-of-mouth,
              the opinions and behaviors of others can greatly sway an
              individual's actions. Online platforms can harness this power of
              social influence to drive engagement, encourage desired behaviors,
              and foster communities.
              <br />
              <br />
              Expression, as the final piece of this relationship, is the
              manifestation of individuality, creativity, and communication in
              the digital environment. It’s the means by which users assert
              their presence, share their thoughts, and engage with others.
              Whether it's through personalized avatars, unique social media
              posts, or user-generated content, digital platforms provide myriad
              opportunities for users to express themselves.
              <br />
              <br />
              In conclusion, the intersection of HCI, SEO, social influence, and
              expression creates a multifaceted and dynamic digital ecosystem.
              HCI forms the bedrock of user-friendly design, SEO ensures the
              discoverability of relevant content, social influence shapes
              online behaviors and decisions, and expression allows for
              personalization and communication. These components work in tandem
              to enhance the digital experience, fostering a user-centric
              environment that is accessible, engaging, and meaningful.
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
            `Human-Computer Interaction`
          )} with one sentence answers?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>How does HCI impact SEO and vice versa?</b>
                  <br />
                  <div>
                    HCI and SEO are interconnected in several ways. A core
                    principle of HCI is creating intuitive, user-friendly
                    interfaces. This directly impacts SEO because search engines
                    like Google use factors such as mobile-friendliness, page
                    speed, and user engagement metrics (like bounce rate and
                    session duration) as part of their ranking algorithms.
                    Conversely, SEO principles can guide HCI design. For
                    instance, understanding popular search queries can inform
                    the creation of interfaces and content that match user
                    information needs and searching behaviors.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>How does social influence relate to HCI and SEO?</b>
                  <br />
                  <div>
                    {" "}
                    Social influence plays a significant role in the digital
                    landscape. In terms of HCI, understanding how social
                    influence works can help design interfaces that encourage
                    desired behaviors, such as sharing content or contributing
                    to online communities. In terms of SEO, social signals, such
                    as likes, shares, and comments, can indirectly influence
                    search engine rankings. While these social signals aren't
                    direct ranking factors, they can lead to increased
                    visibility and backlinks, which do impact SEO.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How does personal expression factor into HCI, SEO, and
                    social influence?
                  </b>
                  <br />
                  <div>
                    Expression is a crucial component of the online experience.
                    HCI is concerned with designing systems that allow users to
                    express themselves easily and effectively, whether that's
                    through personalizing an interface or creating and sharing
                    content. For SEO, unique and high-quality user-generated
                    content can increase a site's visibility and ranking. Social
                    influence can shape expression, as users often model their
                    behavior on what they see others doing. Conversely,
                    individual expression can drive social influence by creating
                    trends or starting conversations.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>
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
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              <h1>Human-Computer Interaction (HCI) Study Guide and Roadmap</h1>

              <h2>Step 1: Foundations</h2>
              <p>
                Start by familiarizing yourself with the basics of computer
                science, design, and psychology. These fields form the
                foundation of HCI:
              </p>
              <ul>
                <li>
                  Computer Science: Courses like Harvard's CS50 on edX provide
                  an introduction to computer science.
                </li>
                <li>
                  Design: Look into courses that cover principles of design,
                  user experience (UX) design, and graphic design.
                </li>
                <li>
                  Psychology: Consider courses that offer an overview of
                  cognitive psychology and social psychology.
                </li>
              </ul>

              <h2>Step 2: Introduction to HCI</h2>
              <p>
                Take introductory courses specifically in HCI to understand its
                principles, theories, and techniques, such as Stanford
                University's "Introduction to Human-Computer Interaction Design"
                available on Coursera.
              </p>

              <h2>Step 3: Advanced HCI Studies</h2>
              <p>
                After getting the basics, delve into more advanced HCI topics
                like interactive system design, user experience research, and
                information visualization.
              </p>

              <h2>Step 4: Specialize</h2>
              <p>
                HCI is a broad field with many subareas. You might want to
                specialize based on what you enjoy most or where you see the
                most career potential, such as UX design, usability testing,
                information architecture, mobile interaction design, or
                accessibility.
              </p>

              <h2>Step 5: Practical Experience</h2>
              <p>
                Gaining practical experience is key. This can come from
                projects, internships, or work experience:
              </p>
              <ul>
                <li>
                  Apply what you've learned through class projects, freelance
                  work, or internships.
                </li>
                <li>
                  Building a portfolio of your work is crucial in showcasing
                  your skills to future employers.
                </li>
              </ul>

              <h2>Step 6: Networking and Professional Development</h2>
              <p>
                Getting involved in the HCI community can open doors to
                opportunities and deepen your learning:
              </p>
              <ul>
                <li>Attend relevant meetups, conferences, or webinars.</li>
                <li>
                  Join professional organizations like the ACM's Special
                  Interest Group on Computer-Human Interaction (ACM SIGCHI).
                </li>
                <li>
                  Stay up-to-date with the latest research by reading relevant
                  journals and magazines.
                </li>
              </ul>

              <h2>Step 7: Consider Further Education</h2>
              <p>
                If you're serious about a career in HCI, consider pursuing
                further education, such as a master's degree in HCI or a related
                field.
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
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              Human-computer interaction (HCI) principles play an integral role
              in the development and operation of mental health apps. A
              fundamental premise of HCI is user-centered design. This principle
              is of paramount importance in mental health apps where
              understanding the needs and contexts of the user base is
              essential. Developers usually collaborate with mental health
              professionals to ascertain that the app's content and strategies
              are aptly suited to handle sensitive issues.
              <br />
              <br />
              Another significant aspect of HCI involves creating intuitive and
              easy-to-use interfaces. Given the personal and potentially
              distressing nature of mental health issues, it's particularly
              important for these apps to be simple to navigate. The design
              should not contribute to a user's stress or anxiety. This requires
              a balance between functionality and aesthetics, offering a serene
              and calming environment without compromising on usability.
              <br />
              <br />
              Personalization is also a key concept in HCI and it's an
              especially relevant feature in mental health apps. Since mental
              health experiences are highly individual, these apps often
              incorporate adaptive elements that adjust according to user
              inputs, providing personalized experiences and recommendations.
              This can range from customizing reminders for self-care activities
              to offering personalized therapeutic exercises based on a user's
              specific mental health needs.
              <br />
              <br />
              Moreover, in the realm of mental health apps, HCI also entails
              designing with an empathetic approach. This could involve
              tactfully crafted notifications, non-judgmental language, and
              responses that mirror human empathy. It's all about making the
              user feel understood and supported.
              <br />
              <br />
              Finally, one must not forget the privacy and security concerns. As
              HCI is about the interaction between humans and computers, the
              field also considers how to protect users and their data. This is
              especially crucial for mental health apps where sensitive personal
              information is being shared. Privacy settings, clear data handling
              policies, and robust security measures should be embedded in the
              design from the outset.
              <br />
              <br />
              In conclusion, the principles of HCI permeate every aspect of
              mental health apps, shaping how they are designed, how they
              function, and how they interact with their users to provide
              support, relief, and tools for managing mental health.
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
            `Human-Computer Interaction`
          )} in exactly one sentence?`,
          response: (
            <div>
              Human-computer interaction informs the design of intuitive and
              user-friendly interfaces, search engine optimization ensures
              content visibility and reach, while social influence shapes user
              behavior and interactions, all of which collectively facilitate
              expressive and meaningful digital experiences.
            </div>
          ),
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )} without any answers?`,
          response: (
            <div>
              <h1>Challenging Open-Ended Questions</h1>

              <h2>Question 1</h2>
              <p>
                How do you envision the evolution of human-computer interaction
                with the advancement of emerging technologies such as virtual
                reality and artificial intelligence?
              </p>

              <h2>Question 2</h2>
              <p>
                As search engines evolve to understand context and user intent,
                how do you foresee the strategies for search engine optimization
                changing?
              </p>

              <h2>Question 3</h2>
              <p>
                How does the increasing influence of social media on user
                behavior impact the design principles of human-computer
                interaction?
              </p>

              <h2>Question 4</h2>
              <p>
                In what ways do you think search engine algorithms should adapt
                to better capture and understand individual and societal
                expressions across the internet?
              </p>

              <h2>Question 5</h2>
              <p>
                How can the principles of human-computer interaction be adapted
                to accommodate the diverse ways in which different cultures
                express themselves digitally?
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
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "The Psychology Of Self-esteem": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: false,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `The Psychology Of Self-esteem`, // may not need - `name`
      header: `The Psychology Of Self-esteem`,
      fileSource: await import("../../markdowns/psychologyOfSelfEsteem.md?raw"), // may not need
      prompts: {
        welcome: {
          response: (
            // <MessageBlock>
            <div>
              Hello, my bright stars 🌟! Welcome to today's lecture on the
              fascinating topic of the Psychology of Self-Esteem. I'm so excited
              to have you all here, and I hope you are too. 🤗
              <br />
              <br />
              Let's take a moment to acknowledge something important: each one
              of you is a unique and valuable individual. Your worth isn't
              determined by your grades, your background, or what others think
              of you. You bring your own special light to the world, and that
              light deserves to shine brightly. ✨
              <br />
              <br />
              You may have faced challenges or setbacks that made you question
              your self-worth, but remember, it's never too late to rebuild and
              strengthen your self-esteem. Today, we're going to explore how our
              minds shape our self-image and how we can empower ourselves to
              become more confident and resilient individuals. 🌱
              <br />
              <br />
              As we delve into the subject, we'll also reflect on how society
              and culture play roles in shaping our self-esteem, and how we can
              transcend those limitations to embrace our true selves.😁
              <br />
              <br />
              So sit back, open your hearts and minds, and let's embark on this
              journey together. I promise, you're in a safe space to learn,
              grow, and, most importantly, to be yourselves. 💖
              <br />
              <br />
              Ready? Let's get started! 🚀
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
            `The Psychology Of Self-esteem`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
          // additionalContent: await import(
          //   "../../markdowns/psychologyOfSelfEsteem.md?raw"
          // ),
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h3>The Life of J.K. Rowling 📚</h3>
              <p>
                Joanne Rowling was born in Yate, England, in 1965. She always
                dreamed of being a writer but faced numerous obstacles along the
                way. After graduating from the University of Exeter, she worked
                in various jobs, including as a researcher and a bilingual
                secretary, but she was not content.
              </p>

              <h4>Early Struggles and Low Points 🌧️</h4>
              <p>
                Rowling moved to Portugal to teach English, where she married
                and had a daughter. The marriage ended in divorce, and Rowling
                returned to the UK as a single mother living on state benefits.
                She was clinically depressed and considered herself a failure.
                This was a low point in her life, where her self-esteem was
                severely tested.
              </p>

              <h4>The Birth of Harry Potter ⚡</h4>
              <p>
                During a train journey, the idea for "Harry Potter" popped into
                her head. Even though she was struggling, Rowling believed in
                her story. She spent years crafting the first book, facing
                numerous rejections from publishers. Her self-esteem was
                bolstered by her belief in her work and her desire to prove
                herself.
              </p>

              <h4>Impact on Society 🌍</h4>
              <p>
                Once published, "Harry Potter" became a cultural phenomenon. It
                didn't just entertain; it encouraged a whole generation to read
                and explore themes of friendship, courage, and the importance of
                choices. The books have been translated into numerous languages,
                and the films have grossed billions worldwide.
              </p>

              <h4>The Ripple Effect 🌊</h4>
              <p>
                Rowling's journey from a struggling single mother to one of the
                most successful authors in history has made her a symbol of
                resilience and the power of self-belief. Her story has inspired
                countless individuals to overcome their challenges, boosting
                their own self-esteem and making meaningful contributions to
                society.
              </p>

              <h4>Final Thoughts 🌟🌈</h4>
              <p>
                So, my bright students, J.K. Rowling's life shows us that no
                matter how difficult your circumstances may be, your self-esteem
                and belief in your own abilities can help you rise above them.
                What do you think you could achieve if you truly believed in
                yourselves?
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
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h4>Understanding the Psychology of Self-Esteem 🌟</h4>
              <p>
                Of course, my insightful students! Let's take a brief but
                meaningful journey into the psychology of self-esteem, a subject
                that holds immense power in shaping your lives. 🌱
              </p>

              <p>
                Self-esteem is often described as the emotional evaluation of
                your own worth. It's like a mental mirror reflecting how you
                view yourself—your abilities, your limitations, and your value
                as an individual. 💖
              </p>

              <p>
                A healthy level of self-esteem is crucial for your overall
                well-being. When your self-esteem is robust, you're more likely
                to tackle challenges head-on, cultivate meaningful
                relationships, and live a life aligned with your values and
                aspirations. 🌟
              </p>

              <p>
                However, self-esteem isn't a constant state; it's a fluctuating
                continuum influenced by various factors like your upbringing,
                experiences, and even societal expectations. Let's acknowledge
                that we all live in a society that often sets standards based on
                race, gender, and economic status, among other factors. These
                external influences can be barriers, but it's crucial to
                remember that you have the power to define your self-worth. 🌈
              </p>

              <p>
                Building self-esteem is a lifelong process, my dear students. It
                involves self-awareness, self-compassion, and an active
                engagement with the world around you. Even when you face
                setbacks, which are an inevitable part of life, a strong sense
                of self-esteem equips you with the resilience to bounce back. 🌻
              </p>

              <p>
                So, to sum it up: your self-esteem is a cornerstone of your
                mental and emotional health. It impacts how you deal with life's
                ups and downs, how you connect with others, and most
                importantly, how you view yourself. Nurture it, cherish it, and
                let it be the foundation upon which you build the beautiful
                edifice of your life. 🏰💕
              </p>

              <p>
                I hope this essay empowers you to reflect on your own
                self-esteem and take steps to nourish it, for it will be one of
                your most faithful companions on the journey called life. 🌱🌟
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
            `The Psychology Of Self-esteem`
          )} with one sentence answers?`,
          response: (
            <div>
              <h4>Frequently Asked Questions on Self-Esteem 🌟</h4>

              <h4>1. What is Self-Esteem and Why is it Important? 💡</h4>
              <p>
                Self-esteem refers to how you view and evaluate yourself,
                essentially your emotional self-assessment. It's vital because
                it influences almost every aspect of your life, from your
                relationships to your ability to face challenges and even your
                mental well-being. A healthy level of self-esteem enables you to
                navigate the ups and downs of life with resilience and poise. 🌈
              </p>

              <h4>2. How Can I Improve My Self-Esteem? 🌱</h4>
              <p>
                Improving your self-esteem is an ongoing process that involves
                self-awareness, self-compassion, and positive self-talk. Start
                by acknowledging your strengths and achievements, no matter how
                small. Set achievable goals, and don't hesitate to seek support
                from friends, family, or professionals. Remember, self-esteem is
                like a muscle; the more you work on it, the stronger it gets. 🌟
              </p>

              <h4>3. Can Low Self-Esteem Affect My Mental Health? 🌧️</h4>
              <p>
                Yes, low self-esteem can significantly impact your mental
                health. It can lead to issues like anxiety, depression, and even
                contribute to more severe mental health conditions. However,
                it's important to note that while low self-esteem may be a
                factor, it is not the sole cause of mental health issues. If
                you're struggling, it's crucial to seek professional help. 💖
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
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h4>
                Roadmap to Becoming a Professional Psychologist in Self-Esteem
                🌟
              </h4>

              <h6>Step 1: High School Preparation 🎒</h6>
              <p>
                Focus on Psychology, Biology, and Statistics courses. Read
                introductory books on psychology and self-esteem.
              </p>

              <h6>Step 2: Bachelor's Degree 📚</h6>
              <p>
                Major in Psychology and take courses on Developmental
                Psychology, Social Psychology, and Personality Psychology.
              </p>

              <h6>Step 3: Internship & Volunteer Work 💼</h6>
              <p>
                Gain practical experience in clinics, schools, or mental health
                centers. Work under a psychologist specializing in self-esteem
                issues.
              </p>

              <h6>Step 4: Master's Degree 🎓</h6>
              <p>
                Specialize in Clinical or Counseling Psychology. Conduct a
                thesis on self-esteem related topics.
              </p>

              <h6>Step 5: Licensing & Certification 📜</h6>
              <p>
                Complete the required supervised hours and pass the state
                licensing exam.
              </p>

              <h6>Step 6: Doctorate (Optional) 🎓</h6>
              <p>
                Ph.D. or Psy.D. in Psychology with a focus on self-esteem.
                Publish research papers in peer-reviewed journals.
              </p>

              <h6>Step 7: Professional Development 🌱</h6>
              <p>
                Continue education through seminars, workshops, and courses.
                Become a member of psychological associations.
              </p>

              <h6>Step 8: Open Your Practice 🏥</h6>
              <p>
                Specialize in self-esteem issues, build a client base, and make
                a meaningful impact.
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
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <p>
                Taking care of your self-esteem is like tending to a garden; it
                requires patience, love, and a little bit of know-how. Let's
                explore some ways you can nurture your self-esteem and help it
                flourish. 🌱
              </p>

              <h4>1️⃣ Positive Affirmations 🌼</h4>
              <p>
                Let's start by looking ourselves in the mirror every morning and
                saying something positive. It could be as simple as, "I am
                worthy," or "I am enough." These affirmations serve as little
                seeds of positivity that, over time, can grow into a beautiful
                garden of self-love.
              </p>

              <h4>2️⃣ Self-Compassion 🌹</h4>
              <p>
                We all make mistakes; it's a part of being human. Instead of
                beating yourself up over them, treat yourself with the same
                kindness you'd offer a friend. Remind yourself that you're still
                learning and growing. It's okay to be imperfect; it makes you
                who you are.
              </p>

              <h4>3️⃣ Set Boundaries 🌳</h4>
              <p>
                Learn to say 'no' when you need to. Protecting your time and
                emotional energy is a sign of self-respect. This might be a bit
                challenging given societal expectations, but your well-being
                should always come first.
              </p>

              <h4>4️⃣ Celebrate Small Wins 🌻</h4>
              <p>
                Did you make it to class on time? Did you understand a difficult
                concept? Celebrate it! These small victories add up and help you
                recognize your own abilities and worth.
              </p>

              <h4>5️⃣ Surround Yourself with Positivity 🌿</h4>
              <p>
                Whether it's supportive friends or uplifting music, keep
                positive influences around you. They act as the sunlight and
                water that your self-esteem needs to grow.
              </p>

              <h4>6️⃣ Be Mindful of Self-Talk 🌲</h4>
              <p>
                Pay attention to how you talk to yourself. Would you talk to a
                friend that way? If not, it's time to change the narrative. Be
                your own biggest cheerleader, not your worst critic.
              </p>

              <h4>7️⃣ Connect with Your Community 🌺</h4>
              <p>
                We can't ignore that society often sends us messages that can
                erode our self-esteem, especially when those messages are
                steeped in systemic issues like race and class. However,
                embracing your roots and drawing strength from your community
                can offer a strong foundation for building your self-esteem.
              </p>

              <p>
                So, my dear students, taking care of your self-esteem is an
                ongoing process. It's like a garden that needs regular
                attention, but the rewards are so worth it. You'll grow into
                stronger, more resilient versions of yourselves. 🌈💖
              </p>

              <p>Ready to nurture your inner garden? 🌱🌟</p>
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
            `The Psychology Of Self-esteem`
          )} in exactly one sentence?`,
          response: (
            <div>
              The psychology of self-esteem revolves around the inner belief in
              one's own worth and abilities, which shapes how we navigate
              challenges, opportunities, and relationships in life. ✨💖
            </div>
          ),
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )} without any answers?`,
          response: (
            <div>
              <h4>Challenging Quiz on Self-Esteem Psychology 🌟</h4>

              <h4>Question 1</h4>
              <p>
                How does the "looking-glass self" theory relate to self-esteem?
              </p>

              <h4>Question 2</h4>
              <p>
                Discuss the impact of social media on adolescent self-esteem.
              </p>

              <h4>Question 3</h4>
              <p>
                Explain how cognitive behavioral therapy (CBT) can be used to
                improve self-esteem.
              </p>

              <h4>Question 4</h4>
              <p>
                What role does self-compassion play in the development of
                healthy self-esteem?
              </p>

              <h4>Question 5</h4>
              <p>
                Analyze the relationship between self-esteem and academic
                performance.
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
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
          tooltip: ``,
        },
      },
      // Memes: {
      //   documentID: ``,
      //   filler: ``,
      //   new: false,
      //   highValue: false,
      //   underConstruction: false,
      //   completed: false,
      //   rare: true,
      //   needsImprovement: false,

      //   tooltip: ``,
      //   sourceType: `markdown`, // may not need
      //   button: `Memes`, // may not need - `name`
      //   header: `Memes`,
      //   fileSource: await import("../../markdowns/emptyMarkdown.md?raw"), // may not need

      //   prompts: {
      //     welcome: {
      //       response: (
      //         // <MessageBlock>
      //         <div>
      //           Hello, my bright students!
      //           <br />
      //           <br />
      //           Today, we're diving into the tasty history of cooking birds for
      //           dinner. It's not just about food; it's about culture, community,
      //           and how we've come together through time. 🍗🌈 From roasting over
      //           ancient campfires to modern-day recipes, cooking birds tells a
      //           story that's rich and full of flavor. 🌍 So grab your curiosity
      //           and let's take a quick but delicious journey back in time! 🕰🍴
      //           Ready? Let's go! 🌟💖
      //         </div>
      //         // </MessageBlock>
      //       ),
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     patreon: {
      //       completed: false,
      //       impact: 1000,
      //       action: `generate`,
      //       icon: `►`, //`✍️`
      //       request: `ms. roxana, can you please show me how to ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: `null`,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     inspire: {
      //       completed: false,
      //       impact: 100,
      //       action: `inspire`,
      //       icon: `⚡`,
      //       request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     summarize: {
      //       completed: false,
      //       impact: 100,
      //       action: `summarize`,
      //       icon: `📚`,
      //       request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     ask: {
      //       completed: false,
      //       impact: 100,
      //       action: `ask`,
      //       icon: `🔮`,
      //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} with one sentence answers?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     guide: {
      //       completed: false,
      //       impact: 100,
      //       action: `guide`,
      //       icon: `🤝`,
      //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     demonstrate: {
      //       completed: false,
      //       impact: 100,
      //       action: `demonstrate`,
      //       icon: `🎨`,
      //       request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     define: {
      //       completed: false,
      //       impact: 100,
      //       action: `define`, // may not need
      //       icon: `🧿`, // may not need
      //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} in exactly one sentence?`,
      //       response: <div />,
      //       tooltip: ``,
      //     },

      //     quiz: {
      //       completed: false,
      //       impact: 100,
      //       action: `quiz`,
      //       icon: `🧪`,
      //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} without any answers?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     shop: {
      //       completed: false,
      //       impact: 100,
      //       action: `shop`,
      //       icon: `🛍️`,
      //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
      //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //   },
      // },
    },
  },
};
