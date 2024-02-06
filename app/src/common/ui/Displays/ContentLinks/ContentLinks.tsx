import { logEvent } from "firebase/analytics";
import { analytics } from "../../../../database/firebaseResources";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { getRandomColor } from "../../../../App.compute";
import { RiseUpAnimation } from "../../../../styles/lazyStyles";

// Function to handle the Patreon click event for analytics
const handleWikiContentClick = () => {
  logEvent(analytics, "select_content", {
    creative_name: `wiki link`,
    creative_slot: `Wiki Slot`,
    promotion_id: `Wiki`,
    promotion_name: "wiki_link",
  });
};

// Main Intro component
export const ContentLinks = ({ patreonObject, type }) => {
  // Render the main component
  const [isWikiOpen, setIsWikiOpen] = useState(false);
  return (
    <div>
      <img
        src={patreonObject?.prompts?.[type]?.headerImageSrc}
        width={"75%"}
        style={{
          borderRadius: "30px",
          borderBottom: "1px solid rgb(27, 27, 28)",
        }}
      />
      <br />
      <Button
        style={{ padding: 12, width: "75%", marginTop: 12 }}
        variant="dark"
        onClick={() => setIsWikiOpen(true)}
      >
        <h4>Wiki 🌎</h4>
      </Button>

      <Modal
        centered
        show={isWikiOpen}
        style={{ backgroundColor: "black" }}
        fullscreen
        keyboard
        onHide={() => setIsWikiOpen(false)}
      >
        <Modal.Header
          style={{ backgroundColor: "black", color: "white" }}
          closeVariant="white"
          closeButton
        >
          <Modal.Title>Wiki</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          <RiseUpAnimation
            speed={0.75}
            style={{ width: "100%", height: "100%" }}
          >
            <iframe
              src={patreonObject?.prompts?.[type]?.wikiLink}
              style={{
                width: "99%",
                height: "99%",
                boxShadow: `4px 4px 3px 2px ${getRandomColor()}`,
              }}
            />
          </RiseUpAnimation>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black" }}>
          <Button variant="dark" onClick={() => setIsWikiOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
      <br />
    </div>
  );
};
