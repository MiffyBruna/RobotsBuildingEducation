import { logEvent } from "firebase/analytics";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import ReactJson from "react-json-view";
import { renderWithTooltip } from "../../common/uiSchema";
import { analytics } from "../../database/firebaseResources";
import { ProofOfWork } from "../../ProofOfWork/ProofOfWork";
import { StyledPromptButton } from "../../styles/lazyStyles";
// import { DiscordButton } from "./DiscordButton/DiscordButton";

export const Prompts = ({
  //roxana
  loadingMessage,
  patreonObject,
  handleSubmit,
  chatGptResponse,
  isSpanishActive,

  //pow
  displayName,
  databaseUserDocument,
  computePercentage,
  globalImpactCounter,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let promptKeys = Object.keys(patreonObject.prompts);

  let promptMap = promptKeys.map((prompt) => {
    let hasHumanTouch = patreonObject?.prompts?.[prompt]?.humanTouch;
    let hasRobotTouch = patreonObject?.prompts?.[prompt]?.robotTouch;
    let isSpanish = patreonObject?.prompts?.[prompt]?.spanish;
    let isPremiumContent = patreonObject?.prompts?.[prompt]?.premiumContent;
    let isSponsoredContent = patreonObject?.prompts?.[prompt]?.sponsoredContent;
    let isDynamicContent = patreonObject?.prompts?.[prompt]?.dynamicContent;
    let promptSponsor = patreonObject?.prompts?.[prompt]?.sponsor;

    let isHighlighted =
      isSpanish ||
      hasHumanTouch ||
      hasRobotTouch ||
      isPremiumContent ||
      isSponsoredContent ||
      isDynamicContent;

    let borderHighlight = isSpanish
      ? "#30D158"
      : hasRobotTouch
      ? "#0C84FF"
      : hasHumanTouch
      ? "#f316ff" //
      : isPremiumContent
      ? "#F7404A"
      : isSponsoredContent
      ? "rgba(0, 255, 183, 0.776)"
      : isDynamicContent
      ? "#f7e779"
      : "#48484a";

    let tooltipMessage = isSpanish
      ? "🌎 en español"
      : hasRobotTouch
      ? "😏 finessed with machine learning"
      : hasHumanTouch
      ? "💅 fine-tuned with human touch"
      : isPremiumContent
      ? "🤖 created by RO.B.E"
      : isDynamicContent
      ? "💫 can be media or code written in Javascript, Java, Python or other useful languages."
      : isSponsoredContent
      ? `📰 Sponsored by ${promptSponsor || "[no sponsor yet]"}`
      : "#48484a";

    if (isHighlighted) {
      return renderWithTooltip(
        <StyledPromptButton
          style={{ display: loadingMessage ? "none" : "flex" }}
          loadingMessage={loadingMessage}
          onClick={(event) => {
            if (loadingMessage) {
            } else {
              handleSubmit(event, patreonObject.prompts[prompt], prompt);
            }
          }}
          borderHighlight={borderHighlight}
        >
          <a style={{ color: "white" }}>
            {patreonObject.prompts[prompt].icon}{" "}
            {patreonObject.prompts[prompt].action}
          </a>
        </StyledPromptButton>,
        tooltipMessage,
        "left",
        { border: `1px solid ${borderHighlight}`, marginRight: 24 }
      );
    } else {
      if (prompt === "intro") {
        return null;
      }
      return (
        <StyledPromptButton
          tabindex="0"
          style={{ display: loadingMessage ? "none" : "flex" }}
          borderHighlight={borderHighlight}
          loadingMessage={loadingMessage}
          onClick={(event) => {
            if (loadingMessage) {
            } else {
              handleSubmit(event, patreonObject.prompts[prompt], prompt);
            }
          }}
        >
          <a style={{ color: "white" }}>
            {patreonObject.prompts[prompt].icon}{" "}
            {patreonObject.prompts[prompt].action}
          </a>
        </StyledPromptButton>
      );
    }
  });
  //render with tooltips : TBD
  // let promptMap = promptKeys.map((prompt) =>
  //   renderWithTooltip(
  //     <StyledPromptButton
  //       loadingMessage={loadingMessage}
  //       onClick={(event) => {
  //         if (loadingMessage) {
  //         } else {
  //           handleSubmit(event, patreonObject.prompts[prompt], prompt);
  //         }
  //       }}
  //     >
  //       {patreonObject.prompts[prompt].icon}{" "}
  //       {patreonObject.prompts[prompt].action}
  //     </StyledPromptButton>,
  //     <div style={{ border: "1px solid pink" }}>
  //       <h3>Prompt Engineering</h3>
  //       <h5 style={{ border: "1px solid green" }}>
  //         Request&nbsp;{patreonObject.prompts[prompt].icon}
  //         <br />
  //         <div>{patreonObject.prompts[prompt].action}</div>
  //       </h5>
  //     </div>,
  //     "left",
  //     {
  //       display: "flex",
  //       justifyContent: "center",
  //       marginRight: "24px",
  //       border: "1px solid red",
  //     }
  //   )
  // );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      <ProofOfWork
        displayName={displayName}
        databaseUserDocument={databaseUserDocument}
        computePercentage={computePercentage}
        globalImpactCounter={globalImpactCounter}
      />
      <Button
        variant="primary"
        onClick={() => {
          logEvent(analytics, "select_content", {
            content_type: "button",
            item_id: "View Roxana",
          });

          setIsModalOpen(true);
        }}
      >
        {patreonObject?.header === "Indocumentadofy"
          ? "💗 Ver Roxana"
          : "💗 View Roxana"}
      </Button>

      {/* <DiscordButton /> */}
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
          <h3>What is this?</h3>
          <p>
            This is for students and teachers who are curious of how the AI is
            prompted and fine-tuned over time.
          </p>

          <ReactJson
            theme={"threezerotwofour"}
            enableClipboard
            src={patreonObject}
            quotesOnKeys={false}
          />
        </Modal.Body>
        <Modal.Footer style={{ color: "white", backgroundColor: "black" }}>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Thanks!
          </Button>
        </Modal.Footer>
      </Modal>

      {/* {renderWithTooltip(<div>🏦: 0</div>, "Proof of work", "left", {
        border: "1px solid #F2D466",
        marginBottom: "6px",
        borderRadius: "10px",
        backgroundColor: "#f2a900",
      })} */}
      {promptMap}
      {/* Spanish is disabled atm. */}

      {renderWithTooltip(
        <div
          style={{
            backgroundColor: true ? "#48484A" : "black",
            border: "2px solid #48484A",
            cursor: true ? "not-allowed" : "grab",
            display: loadingMessage ? "none" : "flex",
            color: "white",
            borderRadius: "10px",
            textAlign: "left",
            padding: 10,
            width: "200px",
            marginTop: "24px",
            // maxWidth: "100%",
            // minWidth: "100%",
          }}
          onClick={(event) => {
            if (true) {
            } else {
              handleSubmit(
                event,
                `ms. roxana, can you please translate your response to spanish? ${chatGptResponse}`,
                "languageToggle"
              );
            }
          }}
        >
          &#127758; {isSpanishActive ? "in English" : "translate"}
        </div>,
        "🚧 under development",
        "left",
        { marginRight: "12px", border: "1px solid #F2D466" }
      )}
    </div>
  );
};
