import { useState } from "react";
// import { pwaInstallHandler } from "pwa-install-handler";
import { Button, Modal } from "react-bootstrap";
import { usePWAInstall } from "react-use-pwa-install";

import { logEvent } from "firebase/analytics";
import { analytics } from "../../database/firebaseResources";
import { DiscordButton } from "../../common/ui/DiscordButton/DiscordButton";

import {
  FadeInComponent,
  RiseDownAnimation,
  RiseUpAnimation,
  japaneseThemePalette,
  textBlock,
} from "../../styles/lazyStyles";
import FAQSection from "./FAQs/FAQs";

let data = {};
export const LearnMore = ({ languageMode, canInstallPwa }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const install = usePWAInstall();
  // console.log("install", install);
  return (
    <>
      {/* {canInstallPwa ? <><Button
      variant="dark"
      style={{
        color: "white",
        textShadow: "0px 0px 4px black",
      }}
      onClick={install}
    >
      Install app
    </Button>      &nbsp; &nbsp; &nbsp; &nbsp;</>: null} */}

      <FadeInComponent>
        <Button
          variant="dark"
          style={{
            color: "white",
            textShadow: "0px 0px 4px black",
          }}
          onClick={() => {
            logEvent(analytics, "select_content", {
              content_type: "button",
              item_id: "About",
            });
            setIsModalOpen(true);
          }}
        >
          {languageMode.buttons["9"]}
        </Button>
      </FadeInComponent>
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
      <Modal
        centered
        show={isModalOpen}
        fullscreen
        style={{ backgroundColor: "black" }}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
          onHide={() => setIsModalOpen(false)}
          closeVariant="white"
        >
          {/* <Modal.Title>{languageMode.modals.titles["1"]}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // maxWidth: 700,
            width: "100%",
          }}
        >
          {/* <div
            style={{ maxWidth: 700, width: "100%", backgroundColor: "black" }}
          >
            <div style={{ maxWidth: "100%", width: 700 }}>
              <h1>Frequently Asked Questions</h1>
            </div>
            <br />
            <div style={{ maxWidth: "100%", width: 700 }}>
              <p
                style={{
                  maxWidth: "100%",
                  width: 700,
                  ...textBlock(japaneseThemePalette.KyotoPurple, 0),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>What is this?</h3>
                The foundation of Robots Building Education is an AI-driven
                mentoring and tutoring environment that sets up individuals for
                success. Modern and important skills are taught here to support
                people's goals in advancing their education, changing their
                careers or starting a business.
                <br />
                <br />
                This program focuses on creating a powerful first mile for
                learning. It's meant to embolden and encourage your ambitions by
                showing you how quickly you can accomplish a challenging goal or
                overcome a barrier with the right network.
                <br />
                <br />
                My hopes and dreams with the product include the ability to
                redistribute subscriptions. I think this has the potential to
                change the digital learning landscape. My work is informed by
                these three founding principles:
                <br />
                <br />
                <ol>
                  <li>
                    Every student should have access to many best-fit teachers.
                  </li>
                  <li>
                    {" "}
                    An inordinate amount of education and inequitable learning
                    happens on social media. Unrecorded education or learning is
                    a systemic failure.
                  </li>
                  <li> Learning events should build communities.</li>
                </ol>{" "}
                <p
                  style={{
                    maxWidth: "100%",
                    width: 700,
                  }}
                >
                  <b>
                    If you want to support the early stages of RO.B.E or learn
                    more about what I teach, please continue to explore. Visit
                    the Patreon to subscribe and get a shareable passcode to
                    enter the app.
                  </b>
                </p>
              </p>
              <div
                style={{
                  ...textBlock(japaneseThemePalette.FujiSanBlue, 0),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  What kind of computer do I need?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  When it comes to learning, I recommend paper and pencil.
                  RO.B.E is not a software intensive program. It can be used on
                  your mobile device or any laptop. I like it on mobile phones.
                  <br /> <br />
                  If you're wondering what kind of computer you need to code, I
                  recommend a macbook pro. The next bext answer is whatever you
                  can afford.
                  <br />
                  <br />
                  The reason why is because you just want to solve that problem
                  and macbook pros are good general solutions to what you'll
                  need in a number of careers. If you need something specialized
                  for gaming or some AI and you're certain about your
                  investment, then in a similar spirit, invest in the best
                  computing power you can get.
                  <br />
                  <br />
                  But what if you're in a budget? In that case, any laptop will
                  do for what's being taught here. You can even get away with
                  doing something on an ipad these days, with how some web
                  services like Github Codespaces or Codepen has improved over
                  the years. https://github.com/features/codespaces
                  <br />
                </p>
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.TokyoTwilight, 0),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  Is programming hard? Do I have to be good at math?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  Hold on. This is a really loaded question. First of all, I'm
                  going to encourage you to heal the trauma you've experienced
                  in your classrooms regarding math. It happened to me too.
                  You're safe here and I'll explain how.
                  <br />
                  <br />
                  To answer your question, no. You don't have to be good at
                  math. And programming isn't hard, it's challenging. It's about
                  organizing information. Now to address you question - you
                  learn a lot more than just coding here and you should know
                  that you can accomplish the things you want to accomplish.
                  There are many days where I wish I was a better drawer and I'm
                  sure if you looked at me you'd feel confident I could achieve
                  that. I feel that way about math to you. Maybe no one made you
                  understand why it's important - for me it gave me access to
                  freedom and what I feel is the deepest understanding the
                  universe has to offer. And with that I could do anything. So I
                  was willing to fail for that.
                  <br />
                  <br />
                  So maybe you ask that question because there's a part of you
                  that wishes someone would tell you that it's easy. People can
                  make it easier. It's going to be a challenge, intellectual or
                  emotional, but that's part of the fun too. I'm here to tell
                  you that I want you to learn more than just coding, coding is
                  just a medium for that feeling I want you to experience from
                  learning.
                </p>
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.KyotoPurple, 0),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  What programming language should I pick?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  So if you've done any research already, you've probably come
                  across Python and Javascript. They're very popular for a
                  reason, but before explaining why, I strongly recommend to
                  think about what kind of machines you want to work on and what
                  kind of problems you want to solve. You can answer that deeply
                  or as strategically as you want, but either way answering
                  those questions will get you the best answer to this question.
                  <br />
                  <br />
                  The reason Javascript and Python are so widespread is because
                  of the internet. They're mostly used to answer to do a lot of
                  the service work of the internet, like how we could our web
                  browsers or how we code the cloud.
                  <br />
                  <br />
                  What what if you need and iOS app, an android one, a video
                  game, or some kind of robot? Ultimately you'll find that when
                  you "learn one language, you kinda learn them all". Again,
                  there's a reason for that, but ultimately it's like worrying
                  whether you should learn how to use a hammer or drill when
                  building a home, you're likely going to use both eventually
                  and it'll feel pretty familiar.
                </p>
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.FujiSanBlue, 0),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  Is bootcamp worth it?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  As usual, the best answer is going to be "it depends". I
                  recommend bootcamps if the value of your time is extremely
                  high. For example, you need to take care of a newborn child
                  and want to create more time and opportunity. Another example
                  is that you're mental health is in decline, you have a healthy
                  bank account and you have thoroughly examined your intent for
                  paying a premium for time.
                  <br />
                  <br />I don't recommend going to a bootcamp as a shorcut into
                  the industry. A bootcamp is no different than being
                  self-taught or going to college. You will still need to
                  <ul>
                    <li>Find some kind of education</li>
                    <li>Find some kind of early employment</li>
                    <li>Build business-savvy projects</li>
                    <li>Pass technical interviews</li>
                  </ul>
                  <br />
                  <br />
                  How you approach each will be wildly different. A self-taught
                  developer in San Francisco is different than a self-taught
                  developer in Nebraska. A computer science student at Stanford
                  will have a different environment a community college. The key
                  thing here is that your envionrment plays an important role in
                  your opportunities - so control for it early and often! That's
                  why you're here! I want you to be successful before you start
                  your journey.
                </p>
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.TokyoTwilight, 0),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  I'm thinking of attending WGU. &nbsp;Is that a good idea?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  In general, you want to prepare for the most competitive
                  option available to you. When it comes to questions like
                  these, I recommend to critically examine reputation and
                  accreditation.
                  <br />
                  <br />I think WGU is interesting because it has an intentional
                  approach to what it's trying to do with education. It's an
                  access platform. Regardless, I advise you to prepare for the
                  material before class. In fact, that is one of the strongest
                  predictors for a student's success in a classroom - exposure
                  to material before teaching.
                </p>
                <br />
                <br />
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.KyotoPurple, 0),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  What is coding and what can I do with it?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  Coding is a way to organize information. So it exists
                  everywhere.Think of it this way. Coding is written by software
                  engineers to organize information. Software engineers study
                  computer science. Computer science is the science of
                  computation. Computation is problem solving. So coding
                  expresses the science of solving problems.
                  <br />
                  <br />
                  That means you can do just about anything. You can code for
                  media, medicine research, sports, robots, energy systems,
                  financial systems or just about anything you can think of.
                  It's certainly a preferred game for entrepeneurs, but many
                  people also take the well-balanced life approach with it too.
                  So sometimes people code becasue they want a more relaxed life
                  too.
                </p>
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.FujiSanBlue, 0, 12),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  Am I too old to learn?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  No. Simply put, your brain doesn't work that way. You may
                  experience some "rustyness" if you haven't done deep learning
                  of a subject in some time, but that's not too different than a
                  college student realizing that they need to learn how to
                  learn. Maybe you already know how to learn or you understand
                  what works for you. Now suddenly you have an advantage. This
                  is a reason I suggest people spend time reflecting often,
                  you'd be surprised how much empowerment you can draw from it.
                  <br />
                  <br />
                  On that note, I would even consider seeing age as an advantage
                  rather than a disadvantage. As the technology industry
                  matures, experience and execution will be valued more than
                  innovation, speed and the tradeoffs that happen with it. As
                  one of my directors say, slow is smooth and smooth is fast.
                  This isn't to create any sense of superiority or inferiority -
                  you're just in a competitive market and it's usually better to
                  take the productive outlook.
                </p>
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.TokyoTwilight, 0, 12),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  Hey what about cybersecurity, data analytics or these
                  certificates?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  These are subjects I'm not familiar with so I'm hesistant on
                  providing guidance at risk of misinforming someone. The only
                  certification that I feel confident recommending is a UI/UX
                  one with Nielsen Norman Group, but I would still suggest
                  research beforehand too. Reddit tends to be a good place to
                  gather consensus but be careful not to accept a few people's
                  word as law either.
                </p>
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.KyotoPurple, 0),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  Did I go to school?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  Yes. School was complicated for me. I dropped out twice but
                  not finishing was not an option. While I was in school, I
                  studied what early bootcamps were teaching. It was a different
                  time and it helped me be less bored at school. I started
                  working on RO.B.E in college to make my education more
                  interesting.
                  <br />
                </p>
              </div>
              <br />
              <br />
              <div
                style={{
                  ...textBlock(japaneseThemePalette.FujiSanBlue, 0, 12),
                }}
              >
                <h3 style={{ maxWidth: "100%", width: 700 }}>
                  What stocks should I buy?
                </h3>
                <p style={{ maxWidth: "100%", width: 700 }}>
                  I'm not in that kind of business. I talk about what I invest
                  in and why.
                  <br />
                </p>
              </div>
            </div>

            <br />
            <br />
            </div> */}
          {/* <div style={{ maxWidth: "100%", width: 700 }}>
            <h1>Content</h1>
            <br />
            <br />
            <div
              style={{
                ...textBlock(japaneseThemePalette.DeepCherryBlossomPink, 0, 24),
              }}
            >
              <h3>Engineer</h3>
              <i>theme: code</i>
              <p
                style={{
                  maxWidth: "100%",
                  width: 700,
                }}
              >
                You'll find an evolving crash course that teaches you how to
                build apps, further explore computer science. and a place to
                dive into real experience with me.
              </p>
            </div>
            <br />
            <br />
            <div
              style={{
                ...textBlock(japaneseThemePalette.SakuraMochiPink, 0, 24),
              }}
            >
              <h3>Creator</h3>
              <i>theme: communication</i>
              <p style={{ maxWidth: "100%", width: 700 }}>
                Creating content is like creating code except you're more
                concerned with people than machines. This is a collection I'm
                working on centered around the power of well-rounded knowledge
                and the communication. Subjects include UI/UX research,
                philosophy, search engine optimization and other creator
                subjects like influence and expression.
              </p>
            </div>
            <br />
            <br />
            <div
              style={{
                ...textBlock(japaneseThemePalette.DeepCherryBlossomPink, 0, 24),
              }}
            >
              <h3>Dealer</h3>
              <i>theme: business</i>
              <p style={{ maxWidth: "100%", width: 700 }}>
                Robots Building Education follows the focus investing strategy
                to understand what good business is. Here you will look at
                economic relationships to better inform how you view and invest
                money.
              </p>
            </div>
            <br />
            <br />

            <div
              style={{
                ...textBlock(japaneseThemePalette.SakuraMochiPink, 0, 24),
              }}
            >
              <h2>Proof of Work</h2>
              <i>theme: decentralized technology</i>
              <p style={{ maxWidth: "100%", width: 700 }}>
                One of the motivating goals is to create a proper system for
                decentralized finance in education. The impact wallet is system
                that transforms learning events, scholarships and credentials.
              </p>
            </div>
            <br />
            <br />
            <div
              style={{
                ...textBlock(japaneseThemePalette.SakuraMochiPink, 0, 24),
              }}
            >
              <h2>Emotional Intelligence</h2>
              <i>theme: mental health</i>
              <p style={{ maxWidth: "100%", width: 700 }}>
                A tool that lets you track your emotions over time for personal
                betterment paired with a lowkey AI to assist you along the way.
              </p>
            </div>
          </div> */}
          <FAQSection />
          <br />
          <br />
          This FAQ list will grow over time. But for now, I hope this helps.
          Have fun and hope to see you around! 😊
          <br />
          <br />
          <DiscordButton />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="dark" onClick={() => setIsModalOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
