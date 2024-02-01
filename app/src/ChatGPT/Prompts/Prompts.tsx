import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button, Modal } from "react-bootstrap";
import { isEmpty } from "lodash";
import ReactJson from "react-json-view";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../database/firebaseResources";
import { RiseUpAnimation, StyledPromptButton } from "../../styles/lazyStyles";
import { computeTotalImpactFromPrompt } from "../ChatGPT.compute";
import { useZap } from "../../App.hooks";

const delayedAnimation = keyframes`
from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const AnimatedPrompt = styled.div`
  animation: ${delayedAnimation} 0.5s ease-out;
  animation-delay: ${(props) => props.index * 0.15}s; /* Delay based on index */
  opacity: 0; /* Start with opacity 0 to make the animation visible */
  animation-fill-mode: forwards; /* Keep the element visible after the animation */
`;
// Reusable Button Component
const PromptButton = ({
  patreonObject,
  icon,
  action,
  type,
  loading,
  onClick,
  prompt,
  handleZap,
  zap,
}) => {
  console.log("action", action);
  console.log("type", type);
  let actionVar = action === "generate" ? "discover" : action;
  if (
    localStorage.getItem("patreonPasscode") ===
    import.meta.env.VITE_BITCOIN_PASSCODE
  ) {
    let satoshis = computeTotalImpactFromPrompt(patreonObject, type);
    // let data = useZap(satoshis);
    // let zap = useZap(1);
    return (
      <StyledPromptButton
        tabindex="0"
        borderHighlight={"#48484a"}
        style={{ display: loading ? "none" : "flex" }}
        onClick={(e) => {
          zap()
            .then((response) => {
              console.log("response from zap", response);
              onClick(e);
              handleZap("lecture");
            })
            .catch((error) => {
              console.log("error", error);
              console.log("{error}", { error });
            });
        }}
      >
        <a style={{ color: "white" }}>
          {icon} &nbsp;{actionVar || type}
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
        {icon} &nbsp;{actionVar || type}
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

export const Prompts = ({
  loadingMessage,
  patreonObject,
  handleSubmit,
  handleZap,
  zap,
}) => {
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
      {promptTypes.map((type, index) => {
        const prompt = patreonObject.prompts[type];
        if (!prompt) return null;
        return (
          <AnimatedPrompt index={index}>
            <PromptButton
              patreonObject={patreonObject}
              key={type}
              icon={prompt?.icon}
              action={prompt?.action}
              type={type}
              loading={!!loadingMessage}
              prompt={prompt}
              onClick={(e) => !loadingMessage && handleSubmit(e, prompt, type)}
              handleZap={handleZap}
              zap={zap}
            />
          </AnimatedPrompt>
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
        keyboard={true}
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
