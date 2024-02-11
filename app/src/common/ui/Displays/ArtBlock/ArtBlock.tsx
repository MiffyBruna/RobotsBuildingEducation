import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import { RoxanaLoadingAnimation, postInstructions } from "../../../uiSchema";
import { customInstructions } from "./ArtBlock.compute";
import { EmotionalIntelligenceStyles } from "../SchedulerBlock/SchedulerBlock";

// Styled components definitions (if not defined elsewhere)
// const Container, Stage, Title, Time, Explanation ... (Keep or adjust these as necessary)

export const ArtBlock = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const [parsedContent, setParsedContent] = useState("");
  const [hasError, setHasError] = useState(false);

  // Function to trigger DALL-E image creation
  const createImage = async (parsedContent) => {
    setIsLoading(true);
    // Assume 'postInstructions' and 'customInstructions' are defined to prepare the request
    let prompt = customInstructions(parsedContent); // Adjust according to your API requirements

    const response = await fetch(
      "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/create-image",
      {
        method: postInstructions.method,
        headers: postInstructions.headers,
        // body: JSON.stringify({ imagePrompt: prompt }),
        body: JSON.stringify({
          imagePrompt: "an image of a happy but evil genius robot named rox",
        }),
      }
    ).catch(() => {
      setHasError(true);
    });

    if (response) {
      let data = await response.json();
      //   let result = JSON.parse(data?.bot?.content);

      //   let outcome = result.schedule;
      //   let outcome = data?.bot?.content;
      //   setCofounder(outcome);
      setApiResponse(data?.imageUrl?.[0]?.url);
    }
  };

  const extractText = (children) => {
    const childArray = React.Children.toArray(children);
    return childArray
      .map((child) => {
        if (typeof child === "string") {
          return child;
        } else if (
          React.isValidElement(child) &&
          child.props &&
          child.props.children
        ) {
          return extractText(child.props.children);
        }
        return "";
      })
      .flat()
      .join("");
  };

  //   useEffect(() => {
  //     setParsedContent(extractText(children));
  //   }, [children]);

  useEffect(() => {
    let text = extractText(children);
    if (isModalOpen) {
      createImage(text);
    }
  }, [isModalOpen]);

  return (
    <div>
      <button
        style={
          {
            /* Your button styling */
          }
        }
        onClick={() => setIsModalOpen(true)}
      >
        🌀
      </button>
      <br />
      <br />
      {children}

      <Modal show={isModalOpen} centered onHide={() => setIsModalOpen(false)}>
        <Modal.Header
          closeButton
          style={EmotionalIntelligenceStyles.EmotionHeader}
        >
          <Modal.Title>Co-founder</Modal.Title>
        </Modal.Header>
        <Modal.Body style={EmotionalIntelligenceStyles.EmotionBody}>
          {isLoading ? (
            <RoxanaLoadingAnimation />
          ) : (
            <div>
              <img src={apiResponse} />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={EmotionalIntelligenceStyles.EmotionFooter}>
          <Button variant="dark" onClick={() => setIsModalOpen(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
