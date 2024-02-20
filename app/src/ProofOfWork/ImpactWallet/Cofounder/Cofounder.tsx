//@ts-nocheck
import React, { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { Button, Modal, Form } from "react-bootstrap";
import {
  RoxanaLoadingAnimation,
  postInstructions,
} from "../../../common/uiSchema";

import styled from "styled-components";
import { addDoc, updateDoc } from "firebase/firestore";
import { customInstructions } from "./Cofounder.compute";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { transform } from "@babel/standalone";
import { highlight, languages } from "prismjs/components/prism-core";

import CodeEditor from "../../../ChatGPT/CodeEditor/CodeEditor";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import {
  aiDescription,
  aiPlaceholderDescription,
  executiveAssistantKnowledge,
} from "./Cofounder.constants";
import { useZap } from "../../../App.hooks";
import { updateImpact } from "../../../App.compute";
const Container = styled.div`
  font-family: "Arial", sans-serif;
  color: #4a4a4a;
  background-color: #f9f0f9;
  padding: 20px;
  border-radius: 10px;
`;

const Header = styled.header`
  color: #ff66c4;
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const InformationSection = styled.section`
  background-color: #ffe6f0;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
`;

const CodeBreakdownSection = styled.div`
  margin: 20px 0;
`;

const CodeBreakdownItem = styled.div`
  background-color: #fff;
  border: 1px solid #ff99d6;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
`;

const CodeSnippet = styled.div`
  background-color: #f0f0f0;
  border-left: 4px solid #ff66c4;
  padding: 5px;
  font-family: "Courier New", monospace;
`;

const Description = styled.div`
  color: #ff66c4;
  font-weight: bold;
  margin-top: 10px;
`;

const Explanation = styled.div`
  background-color: #ffe6f0;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #ffccf9;
  border-radius: 5px;
  margin-top: 20px;
`;

const ScriptContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #1e1e1e; // Dark background
`;

const Section = styled.div`
  border: 1px solid #393939; // Slightly lighter border for contrast
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #282828; // Dark section background
`;

const ScriptHeader = styled.h2`
  color: #4fc3f7; // Bright color for headers
  margin-bottom: 10px;
`;

const ScriptLines = styled.div`
  color: #fff; // White text for readability
  margin-bottom: 15px;
`;

const InstructionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  color: #bdbdbd; // Light grey for instructions
`;

const Instruction = styled.li`
  margin-bottom: 5px;
`;

const LetterContainer = styled.div`
  font-family: "Arial", sans-serif;

  max-width: 800px;
  //   margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: scroll;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
  line-height: 1.5;
  font-size: 16px;
  color: black;
`;

const LetterHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const LetterFooter = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const GrantApplicationLetter = ({ letterText }) => {
  const renderParagraphs = (text) => {
    return text
      .split("\n")
      .map((paragraph, index) => (
        <Paragraph key={index}>{paragraph}</Paragraph>
      ));
  };

  return (
    <LetterContainer>
      {/* <LetterHeader> */}
      {/* Dynamic header content can be inserted here */}
      {/* </LetterHeader> */}
      {renderParagraphs(letterText)}
      {/* <LetterFooter> */}
      {/* Dynamic footer content can be inserted here */}
      {/* </LetterFooter> */}
    </LetterContainer>
  );
};

function executeComponentString(componentString) {
  // Transpile the JSX string to JavaScript
  const { code } = transform(componentString, { presets: ["react"] });

  // Execute the transpiled code
  return eval(code);
}
// import { transform } from "babel-standalone";

const ScriptDisplayComponent = ({ scriptData }) => {
  return (
    <ScriptContainer>
      {scriptData.map((item, index) => (
        <ScriptSection key={index} sectionData={item} />
      ))}
    </ScriptContainer>
  );
};

const ScriptSection = ({ sectionData }) => {
  return (
    <Section>
      <ScriptHeader style={{ fontFamily: "Bungee" }}>
        {sectionData.header}
      </ScriptHeader>
      <ScriptLines>
        {sectionData.script_lines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </ScriptLines>
      <InstructionList>
        {sectionData.instructions.map((instruction, idx) => (
          <Instruction key={idx}>{instruction}</Instruction>
        ))}
      </InstructionList>
    </Section>
  );
};

export const Cofounder = ({
  isCofounderOpen,
  setIsCofounderOpen,
  userStateReference,
  globalStateReference,
  zap,
  handleZap,
}) => {
  const [formData, setFormData] = useState({
    creationDescription: "",
    placeholder: aiPlaceholderDescription?.creator,
    assistant: "creator",
    pace: "quarterly",
  });

  // console.log("databaseUserDocument", userStateReference);
  const [cofounder, setCofounder] = useState(``);
  const [isCofounderLoading, setIsCofounderLoading] = useState(false);

  const [codeBreakdown, setCodeBreakdown] = useState(``);
  const [isCodeBreakdownLoading, setIsCodeBreakdownLoading] = useState(false);

  const [hasError, setHasError] = useState(false);

  const [thumbnail, setThumbnail] = useState("");
  const [contentScript, setContentScript] = useState("");
  const [isContentScriptLoading, setIsContentScriptLoading] = useState(false);
  const [assistantDescription, setAssistantDescription] = useState(
    aiDescription["creator"]
  );
  const [placeholderDescription, setPlaceholderDescription] = useState(
    aiPlaceholderDescription?.["creator"]
  );

  const [businessWriting, setBusinessWriting] = useState("");
  const [isBusinessWritingLoading, setIsBusinessWritingLoading] =
    useState(false);

  const [schedule, setSchedule] = useState([]);

  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (event.target.name === "assistant") {
      setAssistantDescription(aiDescription[event.target.value]);
      setPlaceholderDescription(aiPlaceholderDescription[event.target.value]);
    }
  };

  const handleClearResults = () => {
    setCodeBreakdown("");
    setThumbnail("");
    setContentScript("");
    setCofounder("");
    setBusinessWriting("");
  };

  const handleSubmit = async () => {
    handleClearResults();
    event.preventDefault();
    setHasError(false);
    setIsCofounderLoading(true);

    let assistantType =
      formData.assistant === "assistant" ? "assistant" : "cofounder";
    let prompt = customInstructions(formData, assistantType);

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({
        prompt,
        isJsonMode: formData.assistant === "assistant",
      }),
    })
      .then((response) => {
        if (
          localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
        ) {
          zap().then((lightningResponse) => {
            if (lightningResponse?.preimage) {
              console.log("running zap");
              console.log("userStateReference", userStateReference);
              console.log("globalStateReference", globalStateReference);
              updateImpact(1, userStateReference, globalStateReference);
            }
          });
        }

        return response;
      })
      .catch(() => {
        setHasError(true);
      });

    if (response) {
      let data = await response.json();
      //   let result = JSON.parse(data?.bot?.content);

      //   let outcome = result.schedule;
      let outcome = data?.bot?.content;
      handleZap("ai");
      setCofounder(outcome);
    }
    setIsCofounderLoading(false);
  };

  const handleCodeBreakdown = async () => {
    event.preventDefault();
    setHasError(false);
    setIsCodeBreakdownLoading(true);

    let prompt = customInstructions(cofounder, "codeBreakdown");

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({ prompt, isJsonMode: true }),
    })
      .then((response) => {
        if (
          localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
        ) {
          zap().then((lightningResponse) => {
            if (lightningResponse?.preimage) {
              console.log("running zap");
              console.log("userStateReference", userStateReference);
              console.log("globalStateReference", globalStateReference);
              updateImpact(1, userStateReference, globalStateReference);
            }
          });
        }

        return response;
      })
      .catch(() => {
        setHasError(true);
      });

    if (response) {
      let data = await response.json();
      let result = JSON.parse(data?.bot?.content);

      let outcome = result.result;
      handleZap("ai");
      setCodeBreakdown(outcome);
    }
    setIsCodeBreakdownLoading(false);
  };

  const handleContentScriptGenerator = async () => {
    setHasError(false);
    setIsCofounderLoading(true);
    let prompt = customInstructions(formData, "creator-script");

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({ prompt, isJsonMode: true }),
    })
      .then((response) => {
        if (
          localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
        ) {
          zap().then((lightningResponse) => {
            if (lightningResponse?.preimage) {
              console.log("running zap");
              console.log("userStateReference", userStateReference);
              console.log("globalStateReference", globalStateReference);
              updateImpact(1, userStateReference, globalStateReference);
            }
          });
        }

        return response;
      })
      .catch(() => {
        setHasError(true);
      });

    if (response) {
      let data = await response.json();
      let result = JSON.parse(data?.bot?.content);

      handleZap("ai");
      let outcome = result.result.script;
      setContentScript(outcome);
    }
    setIsCofounderLoading(false);
    setIsContentScriptLoading(false);
  };

  const handleImageGenerator = async () => {
    handleClearResults();
    setIsContentScriptLoading(true);
    event.preventDefault();
    // setHasError(false);
    // setIsCofounderLoading(true);

    // let prompt = customInstructions(formData, "creator-image");

    // const response = await fetch(
    //   "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/create-image",
    //   {
    //     method: postInstructions.method,
    //     headers: postInstructions.headers,
    //     body: JSON.stringify({ imagePrompt: prompt }),
    //   }
    // ).catch(() => {
    //   setHasError(true);
    // });

    // if (response) {
    //   let data = await response.json();
    //   //   let result = JSON.parse(data?.bot?.content);
    //   console.log("data result", data);
    //   //   let outcome = result.schedule;
    //   //   let outcome = data?.bot?.content;
    //   //   setCofounder(outcome);
    //   setThumbnail(data?.imageUrl?.[0]?.url);

    // }
    handleContentScriptGenerator();
  };

  const handleBusinessWriting = async () => {
    handleClearResults();
    event.preventDefault();
    setHasError(false);
    setIsCofounderLoading(true);

    let prompt = customInstructions(formData, "business");

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({ prompt }),
    })
      .then((response) => {
        if (
          localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
        ) {
          zap().then((lightningResponse) => {
            if (lightningResponse?.preimage) {
              console.log("running zap");
              console.log("userStateReference", userStateReference);
              console.log("globalStateReference", globalStateReference);
              updateImpact(1, userStateReference, globalStateReference);
            }
          });
        }

        return response;
      })
      .catch(() => {
        setHasError(true);
      });

    if (response) {
      let data = await response.json();
      //   let result = JSON.parse(data?.bot?.content);

      //   let outcome = result.schedule;
      handleZap("ai");
      let outcome = data?.bot?.content;
      setBusinessWriting(outcome);
    }
    setIsCofounderLoading(false);
  };

  const handleSubmitSchedule = async () => {
    handleClearResults();
    event.preventDefault();
    setHasError(false);
    setIsCofounderLoading(true);

    let prompt = customInstructions(formData, "assistant");

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({
        prompt,
        isJsonMode: true,
      }),
    })
      .then((response) => {
        if (
          localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
        ) {
          zap().then((lightningResponse) => {
            if (lightningResponse?.preimage) {
              console.log("running zap");
              console.log("userStateReference", userStateReference);
              console.log("globalStateReference", globalStateReference);
              updateImpact(1, userStateReference, globalStateReference);
            }
          });
        }

        return response;
      })
      .catch(() => {
        setHasError(true);
      });

    if (response) {
      handleZap("ai");
      let data = await response.json();
      let result = JSON.parse(data?.bot?.content);
      let outcome = result.schedule;
      setSchedule(outcome);
    }
    setIsCofounderLoading(false);
  };

  const handleSaveSchedule = async () => {
    setIsSaveLoading(true);

    let document = userStateReference.databaseUserDocument;

    await updateDoc(userStateReference.userDocumentReference, {
      ...document,
      schedule: schedule,
    });

    userStateReference.setDatabaseUserDocument((prevDoc) => ({
      ...prevDoc,
      schedule: schedule,
    }));

    setIsSaveLoading(false);
  };

  let mapping =
    schedule?.length > 0
      ? schedule
      : userStateReference?.databaseUserDocument?.schedule;

  // console.log("schedule", schedule);
  // console.log("map", mapping);
  return (
    <>
      <Modal
        centered
        show={isCofounderOpen}
        fullscreen
        keyboard
        onHide={() => setIsCofounderOpen(false)}
      >
        <Modal.Header
          style={{ backgroundColor: "black", color: "white" }}
          closeVariant="white"
          closeButton
        >
          <Modal.Title style={{ fontFamily: "Bungee" }}>Co-founder</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h4>
            Select an assistant to help you solve business problems quickly.
          </h4>
          <p style={{ maxWidth: "800px" }}>{assistantDescription}</p>

          <Form style={{ maxWidth: 700 }}>
            <Form.Group className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Assistant</Form.Label>
                <Form.Select
                  name="assistant"
                  value={formData.assistant}
                  onChange={handleInputChange}
                >
                  <option value="coder">Coder</option>
                  <option value="creator">Creator</option>
                  <option value="business">Business Writer</option>
                  <option value="assistant">Executive Assistant</option>
                </Form.Select>
              </Form.Group>

              <Form.Label>What are we building today?</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="creationDescription"
                value={formData.creationDescription}
                onChange={handleInputChange}
                placeholder={placeholderDescription}
              />
            </Form.Group>

            {formData?.assistant === "assistant" ? (
              <Form.Group className="mb-3">
                <Form.Label>Choose your pace</Form.Label>
                <Form.Select
                  name="pace"
                  value={formData.pace}
                  onChange={handleInputChange}
                >
                  <option value="ASAP">ASAP</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </Form.Select>
              </Form.Group>
            ) : null}

            <Button
              variant="primary"
              type="submit"
              disabled={isCofounderLoading || isContentScriptLoading}
              onClick={() => {
                formData.assistant === "creator"
                  ? handleImageGenerator()
                  : formData.assistant === "business"
                  ? handleBusinessWriting()
                  : formData.assistant === "assistant"
                  ? handleSubmitSchedule()
                  : handleSubmit();
              }}
            >
              Create
            </Button>
          </Form>
          <br />
          {isCofounderLoading ? <RoxanaLoadingAnimation /> : ""}
          {hasError
            ? "An error occurred trying to retrieve data from OpenAI. Pls try again"
            : ""}
          <br />

          {!schedule ? (
            <div className="learning-path">
              {schedule?.length > 0 ? (
                <Button
                  onClick={() => handleSaveSchedule()}
                  disabled={isSaveLoading}
                >
                  Save Schedule
                </Button>
              ) : null}
              <br />

              {isSaveLoading ? <RoxanaLoadingAnimation /> : ""}
              <br />
              {formData?.assistant === "assistant" &&
                mapping?.map((module, index) => (
                  <div key={index} className="module">
                    <br />
                    <h2 className="module-title">{module.subject}</h2>
                    <b>Why:</b>&nbsp;
                    <span className="reason">{module.reason}</span>
                    <br />
                    <div className="module-meta">
                      <b>
                        {" "}
                        Duration:{" "}
                        <span className="duration">{module.duration}</span>
                      </b>
                      <br /> <br />
                      <p className="module-details">{module.details}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : null}
          <br />
          {businessWriting ? (
            <div>
              <GrantApplicationLetter letterText={businessWriting} />
            </div>
          ) : null}
          <br />
          {/* {thumbnail ? <img src={thumbnail} /> : null} */}
          {contentScript ? (
            <div>
              We don't have access to DALL-E-3 yet, and DALL-E-2 is really bad
              so thumbnail generation is disabled for now 😔
              <ScriptDisplayComponent scriptData={contentScript} />
            </div>
          ) : null}
          <br />
          {cofounder ? (
            <div>
              <LiveProvider code={cofounder}>
                {/* {executeComponentString(cofounder)} */}
                <LivePreview />
                <br />
                <Button onClick={handleCodeBreakdown}>
                  Break this code down
                </Button>
                <br />
                <br />
                {isCodeBreakdownLoading ? <RoxanaLoadingAnimation /> : ""}
                {codeBreakdown ? (
                  <Container>
                    <Header>
                      <h1 style={{ fontFamily: "Bungee" }}>Code Explorer</h1>
                      <p>Discover how the code works, step by step!</p>
                    </Header>

                    <InformationSection>
                      {codeBreakdown.information}
                    </InformationSection>

                    <CodeBreakdownSection>
                      {codeBreakdown.breakdown.map((item, index) => (
                        <CodeBreakdownItem key={index}>
                          <Editor
                            value={item.code}
                            // onValueChange={handleChange}
                            highlight={(input) =>
                              highlight(input, languages.js)
                            }
                            padding={10}
                            style={{
                              fontFamily: '"Fira code", "Fira Mono", monospace',
                              fontSize: 12,
                              width: "100%",
                              // border: "1px solid black",
                              borderRadius: 7,
                            }}
                            disabled
                          />
                          <Description>{item.description}</Description>
                          <Explanation>{item.explanation}</Explanation>
                        </CodeBreakdownItem>
                      ))}
                    </CodeBreakdownSection>

                    {/* <Footer>Got questions? We're here to help!</Footer> */}
                  </Container>
                ) : null}
                <br />
                <h2 style={{ fontFamily: "Bungee" }}>Code Editor</h2>
                <LiveError />
              </LiveProvider>

              <div
                style={{
                  color: "#696969",
                  backgroundColor: "#faf3e0",
                  width: "100%",
                  padding: 20,
                  wordBreak: "break-word",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 15,
                }}
              >
                <pre>
                  <Editor
                    value={cofounder}
                    // onValueChange={handleChange}
                    highlight={(input) => highlight(input, languages.js)}
                    padding={10}
                    style={{
                      fontFamily: '"Fira code", "Fira Mono", monospace',
                      fontSize: 12,
                      width: "100%",
                      // border: "1px solid black",
                      borderRadius: 7,
                    }}
                    disabled
                  />
                </pre>
              </div>
            </div>
          ) : null}
        </Modal.Body>
        {/* <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="dark" onClick={() => setIsCofounderOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
