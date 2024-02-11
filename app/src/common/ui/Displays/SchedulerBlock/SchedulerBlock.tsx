import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";

import isEmpty from "lodash/isEmpty";
import styled from "styled-components";
import { japaneseThemePalette, textBlock } from "../../../../styles/lazyStyles";
import { RoxanaLoadingAnimation, postInstructions } from "../../../uiSchema";
import { customInstructions } from "./SchedulerBlock.compute";
import { useStore } from "../../../../Store";

import { useZapAnimation } from "../../../../App.hooks";
// import { customInstructions } from "./SchedulerBlock.compute";

export const EmotionalIntelligenceStyles = {
  EmotionHeader: {
    backgroundColor: "black",
    color: "white",
    borderBottom: "0px solid transparent",
    borderRight: "5px solid lavender",
    borderLeft: "5px solid lavender",
    borderTop: "5px solid lavender",
  },

  EmotionBody: {
    backgroundColor: "black",
    color: "white",
    borderRight: "5px solid lavender",
    borderLeft: "5px solid lavender",
    borderBottom: "5px solid lavender",
    height: 500,
  },

  EmotionFooter: {
    backgroundColor: "black",
    color: "white",
    borderTop: "1px solid transparent",
    borderRight: "5px solid lavender",
    borderLeft: "5px solid lavender",
    borderBottom: "5px solid lavender",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  color: #bf8902;
`;

const Stage = styled.div`
  background-color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px 0;
  padding: 20px;
  color: white;
`;

const Title = styled.h2`
  color: orange;
`;

const Time = styled.p`
  font-weight: bold;
  color: darkgray;
  color: white;
`;

const Explanation = styled.p``;

export const SchedulerBlock = ({ children }) => {
  const zapAnimation = useZapAnimation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  let [boxShadow, setBoxShadow] = useState("6px 6px 5px 0px rgba(0,0,0,0.75)");
  const [formState, setFormState] = useState({
    description: "",
    pace: "daily",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const [parsedContent, setParsedContent] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // setApiResponse({
    //   explanation: formState.description,
    //   breakdown: [
    //     // Your breakdown based on the formState.pace
    //     // This is where you'd dynamically generate or fetch the data based on the form input
    //   ],
    // });

    setIsLoading(true);
    e.preventDefault();
    zapAnimation();
    // Here you would normally submit the form data and fetch the API response
    // For this example, we're just setting it directly

    let prompt = customInstructions(parsedContent, formState);

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({ prompt, isJsonMode: true }),
    })
      .then((response) => {
        // if (
        //   localStorage.getItem("patreonPasscode") ===
        //   import.meta.env.VITE_BITCOIN_PASSCODE
        // ) {
        //   zap().then((lightningResponse) => {
        //     if (lightningResponse?.preimage) {
        //       updateImpact(1, userStateReference, globalStateReference);
        //     }
        //   });
        // }

        return response;
      })
      .catch(() => {
        setIsLoading(false);
      });

    console.log("response", response);
    if (response) {
      // let data = await response.json();

      // setIsLoading(false);
      // setApiResponse(data?.bot?.content || "");

      let data = await response.json();
      console.log("data", data);
      let result = JSON.parse(data?.bot?.content);
      console.log("result", result);

      let outcome = result.result;
      setApiResponse(outcome);
      setIsLoading(false);
    }
  };

  // // Function to simulate an API call to OpenAI's Chat Completion
  // const fetchChatCompletion = async () => {
  //   let prompt = customInstructions(
  //     "do something with this data",
  //     parsedContent
  //   );

  //   const response = await fetch(postInstructions.url, {
  //     method: postInstructions.method,
  //     headers: postInstructions.headers,
  //     body: JSON.stringify({ prompt, isJsonMode: true }),
  //   })
  //     .then((response) => {
  //       // if (
  //       //   localStorage.getItem("patreonPasscode") ===
  //       //   import.meta.env.VITE_BITCOIN_PASSCODE
  //       // ) {
  //       //   zap().then((lightningResponse) => {
  //       //     if (lightningResponse?.preimage) {
  //       //       updateImpact(1, userStateReference, globalStateReference);
  //       //     }
  //       //   });
  //       // }

  //       return response;
  //     })
  //     .catch(() => {
  //       setIsLoading(false);
  //     });

  //   console.log("response", response);
  //   if (response) {
  //     // let data = await response.json();

  //     // setIsLoading(false);
  //     // setApiResponse(data?.bot?.content || "");

  //     let data = await response.json();
  //     console.log("data", data);
  //     let result = JSON.parse(data?.bot?.content);
  //     console.log("result", result);

  //     let outcome = result.result;
  //     setApiResponse(outcome);
  //     setIsLoading(false);
  //   }
  // };

  const extractText = (children) => {
    // Ensure the input is always treated as an array
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
      .filter((text) => text !== null && text !== "")
      .flat();
  };

  useEffect(() => {
    const textArray = extractText(children).join("");
    setParsedContent(textArray);
  }, [children]);

  // useEffect(() => {
  //   if (isModalOpen) {
  //     fetchChatCompletion();
  //   }
  // }, [isModalOpen]);

  return (
    <div
      style={{
        ...textBlock(
          japaneseThemePalette.StrongBlue,
          0,
          12,
          "white",
          "4px 4px 5px 0px rgba(0,0,0,0.75)"
        ),
      }}
    >
      <button
        onMouseEnter={() => {
          setBoxShadow(`6px 6px 5px 0px ${japaneseThemePalette.StrongBlue}`);
        }}
        onMouseLeave={() => {
          setBoxShadow("6px 6px 5px 0px rgba(0,0,0,0.75)");
        }}
        style={{
          boxShadow: boxShadow,
          backgroundColor: japaneseThemePalette.StrongBlue,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        🌀
      </button>
      <br />
      <br />
      {children}

      <Modal
        show={isModalOpen}
        centered
        keyboard
        onHide={() => setIsModalOpen(false)}
        style={{ zIndex: 1000000 }}
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={EmotionalIntelligenceStyles.EmotionHeader}
        >
          <Modal.Title style={{ fontFamily: "Bungee" }}>Co-founder</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            ...EmotionalIntelligenceStyles.EmotionBody,
            overflow: "scroll",
          }}
        >
          {isLoading ? (
            <RoxanaLoadingAnimation />
          ) : isEmpty(apiResponse) ? (
            <div>
              <Form>
                <Form.Group controlId="paceSelect">
                  <Form.Label>Choose your pace</Form.Label>
                  <Form.Control
                    as="select"
                    name="pace"
                    value={formState.pace}
                    onChange={handleInputChange}
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </Form.Control>
                </Form.Group>
                <br />
                <Form.Group controlId="descriptionTextarea">
                  <Form.Label>
                    What else can you tell me about your schedule?
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    placeholder="Enter a description..."
                    value={formState.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <br />
                <Button variant="primary" onClick={handleSubmit}>
                  Create
                </Button>
              </Form>
            </div>
          ) : (
            <div>
              {" "}
              <Container>
                {apiResponse?.breakdown.map((stage, index) => (
                  <Stage key={index}>
                    <Title>{stage?.description}</Title>
                    <Time>
                      <b>
                        Suggested Amount of Time: {stage?.suggestedAmountOfTime}
                      </b>
                    </Time>
                    <Explanation>{stage?.explanation}</Explanation>
                  </Stage>
                ))}
              </Container>
            </div>
          )}
        </Modal.Body>
        {/* <Modal.Footer style={EmotionalIntelligenceStyles.EmotionFooter}>
          <Button variant="dark" onClick={() => setIsModalOpen(false)}>
            Exit
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};
