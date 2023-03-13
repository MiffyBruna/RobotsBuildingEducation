import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import khanac from "./media/khanac.jpeg";
import snow from "./media/snow.jpeg";
import phillyd from "./media/phillyd.jpeg";
import { borderRadius } from "@mui/system";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../database/firebaseResources";
export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          logEvent(analytics, "select_content", {
            content_type: "button",
            item_id: "About",
          });
          setIsModalOpen(true);
        }}
      >
        About
      </Button>
      <br />
      <br />

      <Modal centered show={isModalOpen} fullscreen>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title> Robots Building Education Creates Impact</Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => setIsModalOpen(false)}
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h2>Robots Building Education</h2>
          <p>
            Robots Building Education is a system that believes your digital
            learning should create immediate impact for another student or
            teacher. It uses a "proof of work" to share how often RO.B.E is used
            collectively. Proof of work creates a protocol called <b>Impact</b>,
            which distributes subscription or user deposits to a student or
            teacher in a school underserved by its regulators. The current
            version of this generates and distributes $1,000 scholarships.
          </p>
          <p>
            The goal is to create a powerful first hour of learning in order to
            embolden your ambitions by showing you how quickly you can
            accomplish a challenging goal with the right help.
          </p>
          <h2>Testimonials</h2>
          <p>
            I have not collected testimonials. I'm sure the right ones will come
            in due time. Here are some relationships I'm proud to have created
            organically through media. Khan Academy was what inspired me many
            years ago, so I'm happy to be here how I am today. You might notice
            that energy here!
            <br />
            <br />
            <img width={300} src={khanac} />
            <br />
            <br />
            <img width={300} src={snow} />
            <br />
            <br />
            <img width={300} src={phillyd} />
            &nbsp;&nbsp;
          </p>
          <h2>Content</h2>
          <p>
            You're going to find a collection of various materials here. The
            idea is to illustrate a story of information that is valuable to you
            and likely harder to achieve if you come from a disadvantaged
            background. Many people have used it to get encouraged to complete a
            college education or to unlearn things that set one back.
          </p>
          <ol>
            <li>Coding & App Building Crash Course</li>
            <li>Critical Race Theory</li>
            <li>User Interface & User Experience Research</li>
            <li>Social Media Growth</li>
            <li>Philosophy</li>
            <li>Real Estate</li>
            <li>Computer Science</li>
            <li>Stock Market</li>
            <li>Resume Development</li>
            <li>Bitcoin</li>
            <li>Entrepeneurialism</li>
            <li>Daily Open Office Live Streams</li>
            <li>Daily Discord Checkins</li>
          </ol>
          <p>
            In a nutshell, you're learning a few principle skills for effective
            creativity. Engineering, communication and finance. If you want to
            support this application, please join the patreon for $1 for full
            access!
          </p>
          <br />
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
              width: "150px",
              border: "1px solid white",
              padding: 24,
              marginTop: 100,
              color: "white",
              borderRadius: "6px",
            }}
          >
            RO.B.E Patreon
          </a>
          <br />
          <br /> <br />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Okay Bye!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
