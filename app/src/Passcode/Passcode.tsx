import { Button } from "react-bootstrap";
import { logEvent } from "firebase/analytics";
import { analytics } from "../database/firebaseResources";
import { ui } from "../common/uiSchema";
import ChatGPT from "../ChatGPT/ChatGPT";

export const Passcode = ({ handleZeroKnowledgePassword, patreonObject }) => {
  return (
    <div>
      <h2>Enter Passcode</h2>
      <input onChange={handleZeroKnowledgePassword} type="password" />
      <br />
      <br />

      <a
        onClick={() =>
          logEvent(analytics, "select_promotion", {
            creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
            creative_slot: `Get Passcode Slot`,
            promotion_id: `Robots Building Education`,
            promotion_name: "advertising_launch",
          })
        }
        target={"_blank"}
        href="https://www.patreon.com/RobotsBuildingEducation"
        style={{ color: "white" }}
      >
        <Button variant="dark" style={{ width: "250px", height: "50px" }}>
          &nbsp; Get Subscriber Passcode
        </Button>
      </a>
      <br />
      <br />

      <br />
      <br />
      {patreonObject ? (
        <div>
          <h2 style={{ color: "white", marginTop: 12 }}>
            {/* Lesson 1 - Coding &amp; Logic */}
            Demo: Learning Mindset & Perspective
          </h2>
          <ChatGPT
            patreonObject={
              ui()["Engineer"]["Coding Crash Course Version 3"][
                "Learning Mindset & Perspective"
              ]
            }
            isDemo={true}
          />
        </div>
      ) : null}
    </div>
  );
};
