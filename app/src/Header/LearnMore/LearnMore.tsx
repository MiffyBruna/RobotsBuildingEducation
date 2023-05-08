import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import khanac from "./media/khanac.jpeg";
import snow from "./media/snow.jpeg";
import phillyd from "./media/phillyd.jpeg";
import elkhanmigo from "../../common/media/images/elkhanmigo.jpg";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../database/firebaseResources";
import { DiscordButton } from "../../ChatGPT/Prompts/DiscordButton/DiscordButton";
export const LearnMore = ({ auth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button
        variant="light"
        onClick={() => {
          logEvent(analytics, "select_content", {
            content_type: "button",
            item_id: "About",
          });
          setIsModalOpen(true);
        }}
      >
        Learn more
      </Button>

      <br />
      <br />
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DiscordButton />
      </div> */}
      {/* <br />
      <br /> */}
      {/* <Button
        variant="danger"
        onClick={() => {
        auth.signOut();
        }}
      >
        Sign Out{" 😭😭😭"}
      </Button> */}
      <br />
      <br />

      <Modal centered show={isModalOpen} fullscreen>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title>About</Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => setIsModalOpen(false)}
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ maxWidth: "100%", width: 700 }}>
            Robots
            <br /> Building <br />
            Education
          </h1>
          <p style={{ maxWidth: "100%", width: 700 }}>
            Robots Building Education is a system that converts your learning
            into scholarships. Its goal is to inspire people to pursue the most
            competitive education they can to complete their goals. In most
            cases, that's a college degree or starting a business. Do you feel
            like the school system left you behind?
            <br />
            <br />
            If so, RO.B.E is made for you.
          </p>
          <p style={{ maxWidth: "100%", width: 700 }}>
            This program focuses on and develops a powerful first hour of
            learning and supplements it with generational knowledge.
            Generational skills are things like coding, investing in stocks or
            creating content on social media. It's meant to embolden and
            encourage your ambitions by showing you how quickly you can
            accomplish a challenging goal or barrier with the right network and
            support.
          </p>
          <p style={{ maxWidth: "100%", width: 700 }}>
            <b>
              If you want to support the early stages of RO.B.E or learn more
              about what I teach, please continue to explore. Visit the Patreon
              to subscribe and get a shareable passcode to enter the app.
            </b>
          </p>
          <br />
          {/* <div style={{ width: "700px", maxWidth: "100%" }}>
            <a
              onClick={() =>
                logEvent(analytics, "select_promotion", {
                  creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
                  creative_slot: `About Slot`,
                  promotion_id: `Robots Building Education`,
                  promotion_name: "advertising_launch",
                })
              }
              href="https://www.patreon.com/RobotsBuildingEducation"
              target={"_blank"}
              style={{
                border: "1px solid white",
                padding: 24,
                backgroundColor: "#141518",

                color: "white",
                borderRadius: "6px",
              }}
            >
              <img
                style={{ borderRadius: "6px" }}
                // width="32px"
                src="https://pbs.twimg.com/profile_images/1266950784609992705/xEe7mBx9_400x400.png"
              />
              RO.B.E
            </a>
          </div> */}
          <br />
          <br />
          <DiscordButton />
          <br />
          <br />
          <h2>Testimonials</h2>
          <p style={{ maxWidth: "100%", width: 700 }}>
            I have not collected testimonials. I'm sure the right ones will come
            in due time. Here are some relationships I'm proud to have created
            organically through media. Khan Academy was what inspired me many
            years ago, so I'm happy to be a rival AI company to "Khanmigo" today
            😊🔪
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img width={350} src={elkhanmigo} />
              <br />
              <img width={350} src={khanac} />
              <br />

              <img width={350} src={snow} />

              <br />
              <img width={350} src={phillyd} />
            </div>
            &nbsp;&nbsp;
          </p>
          <h1>Content</h1>
          <br />
          <br />
          <h3>Engineer</h3>
          <i>theme: code</i>
          <p style={{ maxWidth: "100%", width: 700 }}>
            You'll find an evolving crash course that teaches you how to build
            apps, followed by a place to dive into real experience with me and
            additional content to further explore computer science.
          </p>
          <br />
          <br />
          <h3>Creator</h3>
          <i>theme: philosophy</i>
          <p style={{ maxWidth: "100%", width: 700 }}>
            Creating content is like creating code except you're more concerned
            with people than machines. This is a collection I'm working on
            centered around the power of well-rounded knowledge and the
            communication.
          </p>
          <br />
          <br />
          <h3>Dealer</h3>
          <i>theme: business</i>
          <p style={{ maxWidth: "100%", width: 700 }}>
            Robots Building Education follows the focused investing strategy to
            understand what good business is. Here you will look at economic
            relationships to better inform how you view and invest money.
          </p>
          <br />
          <br />
          <h3>Boss Mode</h3>
          <i>theme: testing</i>
          <p style={{ maxWidth: "100%", width: 700 }}>
            Boss Mode will create a testing environment where you can be
            assisted by OpenAI to reinforce learning. Think of it of it like
            Duolingo meets Bowser.
          </p>
          <br />
          <br />
          <h2>RO.₿.E</h2>
          <i>theme: intelligent assistance</i>
          <p style={{ maxWidth: "100%", width: 700 }}>
            Robots Building Education will be tools built for teachers and
            students so that they can create content for a classroom. Right now,
            you can generate "courses" in my style and share them publicly. In
            the future, you will have this feature available for private
            classrooms, so that students can create content for class when
            they're too nervous to ask questions. Eventually, full customization
            will be allowed to add more human touch to the content created (like
            my course).
          </p>
          <br />
          <br />
          <h1>Frequently Asked Questions</h1>
          <p style={{ maxWidth: "100%", width: 700 }}>
            These are questions that I get really often when I'm streaming or
            helping people get started. It's really difficult to give you guys
            the best answer many times, because it's worth informing you deeply
            as a beginner. You may have been directed to come here instead so
            that you could get the better answer and hopefully you can
            appreciate my decision to convert this process. It's a lot of work
            and if you join my robots can help me instead!
          </p>
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>
            What kind of computer do I need?
          </h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            When it comes to learning, I recommend paper and pencil. RO.B.E is
            not a software intensive program. It can be used on your mobile
            device or any laptop. I like it on mobile phones.
            <br /> <br />
            If you're wondering what kind of computer you need to code, I
            recommend a macbook pro. The reason why is because you just want to
            solve that problem and macbook pros are good general solutions to
            what you'll need in a number of careers. If you need something
            specialized for gaming or some AI and you're certain about your
            investment, then in a similar spirit, invest in the best computing
            power you can get.
            <br />
            <br />
            But what if you're in a budget? In that case, any laptop will do for
            what's being taught here. You can even get away with doing something
            on an ipad these days, with how some web services like Github
            Codespaces or Codepen has improved over the years.
            https://github.com/features/codespaces
            <br />
          </p>
          <br />
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>
            Is programming hard? Do I have to be good at math?
          </h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            Hold on. This is a really loaded question. First of all, I'm going
            to encourage you to heal the trauma you've experienced in your
            classrooms regarding math. It happened to me too. You're safe here
            and I'll explain how.
            <br />
            <br />
            To answer your question, no. You don't have to be good at math. And
            programming isn't hard, it's challenging. It's about organizing
            information. Now to address you question - you learn a lot more than
            just coding here and you should know that you can accomplish the
            things you want to accomplish. There are many days where I wish I
            was a better drawer and I'm sure if you looked at me you'd feel
            confident I could achieve that. I feel that way about math to you.
            Maybe no one made you understand why it's important - for me it gave
            me access to freedom and what I feel is the deepest understanding
            the universe has to offer. And with that I could do anything. So I
            was willing to fail for that.
            <br />
            <br />
            So maybe you ask that question because there's a part of you that
            wishes someone would tell you that it's easy. People can make it
            easier. It's going to be a challenge, intellectual or emotional, but
            that's part of the fun too. I'm here to tell you that I want you to
            learn more than just coding, coding is just a medium for that
            feeling I want you to experience from learning.
          </p>
          <br />
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>
            What programming language should I pick?
          </h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            So if you've done any research already, you've probably come across
            Python and Javascript. They're very popular for a reason, but before
            explaining why, I strongly recommend to think about what kind of
            machines you want to work on and what kind of problems you want to
            solve. You can answer that deeply or as strategically as you want,
            but either way answering those questions will get you the best
            answer to this question.
            <br />
            <br />
            The reason Javascript and Python are so widespread is because of the
            internet. They're mostly used to answer to do a lot of the service
            work of the internet, like how we could our web browsers or how we
            code the cloud.
            <br />
            <br />
            What what if you need and iOS app, an android one, a video game, or
            some kind of robot? Ultimately you'll find that when you "learn one
            language, you kinda learn them all". Again, there's a reason for
            that, but ultimately it's like worrying whether you should learn how
            to use a hammer or drill when building a home, you're likely going
            to use both eventually and it'll feel pretty familiar.
          </p>
          <br />
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>
            Is bootcamp worth it?
          </h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            As usual, the best answer is going to be "it depends". I recommend
            bootcamps if the value of your time is extremely high. For example,
            you need to take care of a newborn child and want to create more
            time and opportunity. Another example is that you're mental health
            is in decline, you have a healthy bank account and you have
            thoroughly examined your intent for paying a premium for time.
            <br />
            <br />I don't recommend going to a bootcamp as a shorcut into the
            industry. A bootcamp is no different than being self-taught or going
            to college. You will still need to
            <ul>
              <li>Find some kind of education</li>
              <li>Find some kind of early employment</li>
              <li>Build business-savvy projects</li>
              <li>Pass technical interviews</li>
            </ul>
            <br />
            <br />
            How you approach each will be wildly different. A self-taught
            developer in San Francisco is different than a self-taught developer
            in Nebraska. A computer science student at Stanford will have a
            different environment a community college. The key thing here is
            that your envionrment plays an important role in your opportunities
            - so control for it early and often! That's why you're here! I want
            you to be successful before you start your journey.
          </p>
          <br />
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>
            What is coding and what can I do with it?
          </h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            Coding is a way to organize information. So it exists
            everywhere.Think of it this way. Coding is written by software
            engineers to organize information. Software engineers study computer
            science. Computer science is the science of computation. Computation
            is problem solving. So coding expresses the science of solving
            problems.
            <br />
            <br />
            That means you can do just about anything. You can code for media,
            medicine research, sports, robots, energy systems, financial systems
            or just about anything you can think of. It's certainly a preferred
            game for entrepeneurs, but many people also take the well-balanced
            life approach with it too. So sometimes people code becasue they
            want a more relaxed life too.
          </p>
          <br />
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>
            Am I Too Old To Learn?
          </h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            No. Simply put, your brain doesn't work that way. You may experience
            some "rustyness" if you haven't done deep learning of a subject in
            some time, but that's not too different than a college student
            realizing that they need to learn how to learn. Maybe you already
            know how to learn or you understand what works for you. Now suddenly
            you have an advantage. This is a reason I suggest people spend time
            reflecting often, you'd be surprised how much empowerment you can
            draw from it.
            <br />
            <br />
            On that note, I would even consider seeing age as an advantage
            rather than a disadvantage. As the technology industry matures,
            experience and execution will be valued more than innovation, speed
            and the tradeoffs that happen with it. As one of my directors say,
            slow is smooth and smooth is fast. This isn't to create any sense of
            superiority or inferiority - you're just in a competitive market and
            it's usually better to take the productive outlook.
          </p>
          <br />
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>
            Hey what about cybersecurity, data analytics or these certificates?
          </h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            These are subjects I'm not familiar with so I'm hesistant on
            providing guidance at risk of misinforming someone. The only
            certification that I feel confident recommending is a UI/UX one with
            Nielsen Norman Group, but I would still suggest research beforehand
            too. Reddit tends to be a good place to gather consensus but be
            careful not to accept a few people's word as law either.
          </p>
          <br />
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>Did I go to school?</h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            Yes. School was complicated for me. I dropped out twice but not
            finishing was not an option. While I was in school, I studied what
            early bootcamps were teaching. It was a different time and it helped
            me be less bored at school. I started working on RO.B.E in college
            to make my education more interesting.
            <br />
          </p>
          <br />
          <br />
          <h3 style={{ maxWidth: "100%", width: 700 }}>
            What stocks shouild I buy?
          </h3>
          <p style={{ maxWidth: "100%", width: 700 }}>
            I'm not in that kind of business. I talk about what I invest in and
            why.
            <br />
          </p>
          <br />
          <br />
          This FAQ list will grow over time. But for now, I hope this helps.
          Please consider subscribing to help me grow this business. Thank you!
          😊
          <br />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
