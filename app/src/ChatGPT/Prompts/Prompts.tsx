import { logEvent } from "firebase/analytics";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { isEmpty } from "lodash";
import ReactJson from "react-json-view";
import { analytics } from "../../database/firebaseResources";
import { ProofOfWork } from "../../ProofOfWork/ProofOfWork";
import { StyledPromptButton } from "../../styles/lazyStyles";
// import { DiscordButton } from "./DiscordButton/DiscordButton";

export const Prompts = ({ loadingMessage, patreonObject, handleSubmit }) => {
  if (!isEmpty(patreonObject)) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    let borderHighlight = "#48484a";
    let promptMap = [
      <StyledPromptButton
        tabindex="0"
        style={{ display: loadingMessage ? "none" : "flex" }}
        borderHighlight={borderHighlight}
        loadingMessage={loadingMessage}
        onClick={(event) => {
          if (loadingMessage) {
          } else {
            handleSubmit(event, patreonObject.prompts["patreon"], "patreon");
          }
        }}
      >
        <a style={{ color: "white" }}>
          {patreonObject.prompts["patreon"]?.icon} &nbsp;
          {/* {patreonObject.prompts['patreon'].action} */}
          discover
        </a>
      </StyledPromptButton>,
      <StyledPromptButton
        tabindex="0"
        style={{ display: loadingMessage ? "none" : "flex" }}
        borderHighlight={borderHighlight}
        loadingMessage={loadingMessage}
        onClick={(event) => {
          if (loadingMessage) {
          } else {
            handleSubmit(event, patreonObject.prompts["guide"], "guide");
          }
        }}
      >
        <a style={{ color: "white" }}>
          {/* {patreonObject.prompts['guide'].icon}{" "} */}
          📚 &nbsp;study
        </a>
      </StyledPromptButton>,
      ...(patreonObject.prompts.practice
        ? [
            <StyledPromptButton
              tabindex="0"
              style={{ display: loadingMessage ? "none" : "flex" }}
              borderHighlight={borderHighlight}
              loadingMessage={loadingMessage}
              onClick={(event) => {
                if (loadingMessage) {
                } else {
                  handleSubmit(
                    event,
                    patreonObject.prompts["practice"],
                    "practice"
                  );
                }
              }}
            >
              <a style={{ color: "white" }}>
                {patreonObject.prompts["practice"]?.icon} &nbsp;
                {patreonObject.prompts["practice"]?.action}
              </a>
            </StyledPromptButton>,
          ]
        : []),

      <StyledPromptButton
        tabindex="0"
        style={{ display: loadingMessage ? "none" : "flex" }}
        borderHighlight={borderHighlight}
        loadingMessage={loadingMessage}
        onClick={(event) => {
          if (loadingMessage) {
          } else {
            handleSubmit(event, patreonObject.prompts["shop"], "shop");
          }
        }}
      >
        <a style={{ color: "white" }}>
          {patreonObject.prompts["shop"]?.icon} &nbsp;
          {patreonObject.prompts["shop"]?.action}
        </a>
      </StyledPromptButton>,
    ];

    return (
      <div
        style={{
          display: "flex",

          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        {promptMap}
        <br />
        <Button
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
        </Button>

        <br />
        <br />
        <Modal
          centered
          fullscreen={true}
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
            <div
              style={{
                width: "100%",
                wordBreak: "break-word",
              }}
            >
              <h3>What is this?</h3>
              <p>
                This is for students and teachers who are curious of how the AI
                is prompted and fine-tuned over time.
              </p>

              <ReactJson
                theme={"threezerotwofour"}
                enableClipboard
                src={patreonObject}
                quotesOnKeys={false}
              />
            </div>
          </Modal.Body>
          <Modal.Footer style={{ color: "white", backgroundColor: "black" }}>
            <Button variant="dark" onClick={() => setIsModalOpen(false)}>
              Back to app
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};
