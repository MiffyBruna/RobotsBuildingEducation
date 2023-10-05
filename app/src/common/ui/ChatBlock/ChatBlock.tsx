import { useState } from "react";
import { japaneseThemePalette, textBlock } from "../../../styles/lazyStyles";
import { Modal } from "react-bootstrap";
import { ConversationGrader } from "./ConversationGrader/ConversationGrader";
import {
  customInstructions,
  gatherConversationContext,
} from "./ChatBlock.compute";

export let ChatBlock = ({ children, type = "quiz" }) => {
  let [data, setData] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  let [boxShadow, setBoxShadow] = useState(
    "10px 10px 5px 0px rgba(0,0,0,0.75)"
  );

  let messageContext = gatherConversationContext(children);

  let instructions = customInstructions({ type, messageContext });

  return (
    <div
      style={{
        ...textBlock(
          japaneseThemePalette.PowerPurple,
          0,
          12,
          "white",
          "10px 10px 5px 0px rgba(0,0,0,0.75)"
        ),
      }}
    >
      <button
        onMouseEnter={() => {
          setBoxShadow(`10px 10px 5px 0px ${japaneseThemePalette.PowerPurple}`);
        }}
        onMouseLeave={() => {
          setBoxShadow("10px 10px 5px 0px rgba(0,0,0,0.75)");
        }}
        style={{
          boxShadow: boxShadow,
          backgroundColor: japaneseThemePalette.PowerPink,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        ❤️
      </button>
      <Modal
        centered
        fullscreen={false}
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title>Under development</Modal.Title>
        </Modal.Header>
        <Modal.Body
          //   onHide={() => setIsModalOpen(false)}
          style={{
            padding: 0,
            backgroundColor: "black",
            color: "white",
            padding: 24,
          }}
        >
          something cool is being made here 🙂
          <ConversationGrader type={type} />
        </Modal.Body>
      </Modal>
      <br /> <br />
      {children}
    </div>
  );
};
