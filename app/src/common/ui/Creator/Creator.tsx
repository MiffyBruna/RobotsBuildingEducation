import { ChatBlock } from "../ChatBlock/ChatBlock";
import { ultimateEffeciencyJutsu } from "../ui";

export const Creator = {
  Communications: {
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
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697449875/Module_Buttons_12_h28xxn.gif",
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1697492158/IMG_9002_sfq8dw.mov", // may not need

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
            <ChatBlock type={"quiz"}>
              What does philosophy have to do with computer science?
              <br />
              <br />
              How does the design and development of algorithms and AI systems,
              often created by predominantly white or asian and male teams,
              potentially reinforce existing racial biases and systemic
              inequalities? How can these be mitigated?
              <br />
              <br />
              In what ways can critical race theory inform our understanding of
              the digital divide, and how can it guide the creation of more
              equitable access to technology and digital resources?
              <br />
              <br />
              How might concepts from critical race theory help to critique and
              reshape current practices in data collection and interpretation in
              computer science, particularly with respect to racial and ethnic
              categories?
              <br />
              <br />
              How can we apply a critical race theory lens to the discourse
              around digital privacy and surveillance, especially considering
              the differential impacts on various racial and ethnic groups?
              <br />
              <br />
              What role can philosophy and computer science play in helping to
              dismantle systemic racism as identified and outlined by critical
              race theory? For example, how can philosophical notions of ethics
              and justice inform the development and use of technology in a way
              that promotes racial justice?
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
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Interactions & Design": {
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
      button: `Interactions & Design`, // may not need - `name`
      header: `Interactions & Design`,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697448652/Module_Buttons_11_fcepaw.gif",
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1697403810/IMG_8966_gt4s4s.mov", // may not need

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
              <h3>Human-Computer Interaction (HCI) Study Guide and Roadmap</h3>

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
            <ChatBlock type={"quiz"}>
              Question 1
              <br />
              <br />
              How do you envision the evolution of human-computer interaction
              with the advancement of emerging technologies such as virtual
              reality and artificial intelligence?
              <br />
              <br />
              Question 2<br />
              <br />
              As search engines evolve to understand context and user intent,
              how do you foresee the strategies for search engine optimization
              changing?
              <br />
              <br />
              Question 3
              <br />
              <br />
              How does the increasing influence of social media on user behavior
              impact the design principles of human-computer interaction?
              <br />
              <br />
              Question 4
              <br />
              <br />
              In what ways do you think search engine algorithms should adapt to
              better capture and understand individual and societal expressions
              across the internet?
              <br />
              <br />
              Question 5
              <br />
              <br />
              How can the principles of human-computer interaction be adapted to
              accommodate the diverse ways in which different cultures express
              themselves digitally?
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
    "The Psychology Of Self-esteem": {
      documentID: ``,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1695548485/Module_Buttons_10_u50oik.gif",
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: false,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `The Psychology Of Self-esteem`, // may not need - `name`
      header: `The Psychology Of Self-esteem`,
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1695379551/kw8utz8affjpot9acemp.mov", // may not need
      prompts: {
        welcome: {
          response: (
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
          additionalContent: await import(
            "../../markdowns/selfEsteemAddendum.md?raw"
          ),
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
            <ChatBlock type={"quiz"}>
              Question 1
              <br />
              <br />
              How does the "looking-glass self" theory relate to self-esteem?
              <br />
              <br />
              Question 2
              <br />
              <br />
              Discuss the impact of social media on adolescent self-esteem.
              <br />
              <br />
              Question 3<br />
              <br />
              Explain how cognitive behavioral therapy (CBT) can be used to
              improve self-esteem.
              <br />
              <br />
              Question 4
              <br />
              <br />
              What role does self-compassion play in the development of healthy
              self-esteem?
              <br />
              <br />
              Question 5
              <br />
              <br />
              Analyze the relationship between self-esteem and academic
              performance.
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
    Custom: {
      documentID: ``,
      // backgroundImgSrc:
      //   "https://res.cloudinary.com/sheilfer/image/upload/v1695548485/Module_Buttons_10_u50oik.gif",
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: false,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Roxana's Lab`, // may not need - `name`
      header: `Roxana's Lab`,
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1695379551/kw8utz8affjpot9acemp.mov", // may not need
      prompts: {
        welcome: {
          response: <div>hi.. hello 😈</div>,
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `Hey Rox! Tell us about your genius plan with the robots! 😂`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
          additionalContent: await import(
            "../../markdowns/selfEsteemAddendum.md?raw"
          ),
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
            <ChatBlock type={"quiz"}>
              Question 1
              <br />
              <br />
              How does the "looking-glass self" theory relate to self-esteem?
              <br />
              <br />
              Question 2
              <br />
              <br />
              Discuss the impact of social media on adolescent self-esteem.
              <br />
              <br />
              Question 3<br />
              <br />
              Explain how cognitive behavioral therapy (CBT) can be used to
              improve self-esteem.
              <br />
              <br />
              Question 4
              <br />
              <br />
              What role does self-compassion play in the development of healthy
              self-esteem?
              <br />
              <br />
              Question 5
              <br />
              <br />
              Analyze the relationship between self-esteem and academic
              performance.
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
