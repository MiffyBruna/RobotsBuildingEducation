import { Button } from "react-bootstrap";
import { logEvent } from "firebase/analytics";
import { analytics } from "../database/firebaseResources";
import { ui } from "../common/uiSchema";
import ChatGPT from "../ChatGPT/ChatGPT";

// Styles
const whiteTextColor = { color: "white" };
const buttonStyle = { width: "250px", height: "50px" };

// Functions
const logPromotionEvent = () => {
  logEvent(analytics, "select_promotion", {
    creative_name: "https://www.patreon.com/RobotsBuildingEducation",
    creative_slot: "Get Passcode Slot",
    promotion_id: "Robots Building Education",
    promotion_name: "advertising_launch",
  });
};

const renderPatreonContent = (patreonObject) => {
  if (!patreonObject) return null;

  const patreonData =
    ui()["Engineer"]["Coding Crash Course Version 3"][
      "Learning Mindset & Perspective"
    ];

  return (
    <div>
      <h2 style={{ ...whiteTextColor, marginTop: 12 }}>
        Demo: Learning Mindset & Perspective
      </h2>
      <ChatGPT patreonObject={patreonData} isDemo={true} />
    </div>
  );
};

// Main Component
export const Passcode = ({ handleZeroKnowledgePassword, patreonObject }) => {
  return (
    <div>
      <h2>Enter Passcode</h2>
      <input onChange={handleZeroKnowledgePassword} type="password" />
      <br />
      <br />

      <a
        onClick={logPromotionEvent}
        target={"_blank"}
        href="https://www.patreon.com/RobotsBuildingEducation"
        style={whiteTextColor}
      >
        <Button variant="dark" style={buttonStyle}>
          &nbsp; Get Subscriber Passcode
        </Button>
      </a>
      <br />
      <br />

      {renderPatreonContent(patreonObject)}
    </div>
  );
};
