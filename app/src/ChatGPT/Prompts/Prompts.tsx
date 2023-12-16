import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { isEmpty } from "lodash";
import ReactJson from "react-json-view";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../database/firebaseResources";
import { StyledPromptButton } from "../../styles/lazyStyles";
import { computeTotalImpactFromPrompt } from "../ChatGPT.compute";
import { Deposit } from "../../Deposit";

// Reusable Button Component
const PromptButton = ({
  patreonObject,
  icon,
  action,
  type,
  loading,
  onClick,
  prompt,
}) => {
  console.log("running prompt");
  if (
    localStorage.getItem("patreonPasscode") ===
    import.meta.env.VITE_BITCOIN_PASSCODE
  ) {
    let satoshis = computeTotalImpactFromPrompt(patreonObject, type);
    let data = Deposit(satoshis);
    return (
      <StyledPromptButton
        tabindex="0"
        borderHighlight={"#48484a"}
        style={{ display: loading ? "none" : "flex" }}
        onClick={(e) => {
          data().then((response) => {
            console.log("response....", response);
            if (response?.preimage) {
              onClick(e);
            }
          });
        }}
      >
        <a style={{ color: "white" }}>
          {icon} &nbsp;{action || type}
        </a>
      </StyledPromptButton>
    );
  }

  return (
    <StyledPromptButton
      tabindex="0"
      borderHighlight={"#48484a"}
      style={{ display: loading ? "none" : "flex" }}
      onClick={(e) => {
        onClick(e, prompt, type);
      }}
    >
      <a style={{ color: "white" }}>
        {icon} &nbsp;{action || type}
      </a>
    </StyledPromptButton>
  );
};

// Modal Content as a separate component
const ModalContent = ({ patreonObject }) => (
  <>
    <h3>What is this?</h3>
    <p>
      This is for students and teachers who are curious of how the AI is
      prompted and fine-tuned over time.
    </p>
    <ReactJson
      theme="threezerotwofour"
      enableClipboard
      src={patreonObject}
      quotesOnKeys={false}
    />
  </>
);

export const Prompts = ({ loadingMessage, patreonObject, handleSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isEmpty(patreonObject)) return null;

  const promptTypes = ["patreon", "guide", "practice", "shop"];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      {promptTypes.map((type) => {
        const prompt = patreonObject.prompts[type];
        if (!prompt) return null;
        return (
          <PromptButton
            patreonObject={patreonObject}
            key={type}
            icon={prompt?.icon}
            action={prompt?.action}
            type={type}
            loading={!!loadingMessage}
            prompt={prompt}
            onClick={(e) => !loadingMessage && handleSubmit(e, prompt, type)}
          />
        );
      })}

      <br />
      {/* <Button
        variant="dark"
        onClick={() => {
          logEvent(analytics, "select_content", {
            content_type: "button",
            item_id: "View Roxana",
          });
          setIsModalOpen(true);
        }}
      >
        💗 Roxana
      </Button> */}
      <br />
      <br />
      <Modal
        centered
        fullscreen
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
        <Modal.Header
          closeButton
          style={{ color: "white", backgroundColor: "black" }}
        >
          <Modal.Title>AI Prompt Engineering</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          <ModalContent patreonObject={patreonObject} />
        </Modal.Body>
        <Modal.Footer style={{ color: "white", backgroundColor: "black" }}>
          <Button variant="dark" onClick={() => setIsModalOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
