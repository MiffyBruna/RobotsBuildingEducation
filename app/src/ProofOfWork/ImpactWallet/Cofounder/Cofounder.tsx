//@ts-nocheck
import React, { useState } from "react";
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
      <ScriptHeader>{sectionData.header}</ScriptHeader>
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
}) => {
  const [formData, setFormData] = useState({
    creationDescription: "",
    placeholder: "",
    assistant: "creator",
  });

  const [cofounder, setCofounder] = useState(``);
  const [isCofounderLoading, setIsCofounderLoading] = useState(false);

  const [codeBreakdown, setCodeBreakdown] = useState(``);
  const [isCodeBreakdownLoading, setIsCodeBreakdownLoading] = useState(false);

  const [hasError, setHasError] = useState(false);

  const [thumbnail, setThumbnail] = useState("");
  const [contentScript, setContentScript] = useState("");
  const [isContentScriptLoading, setIsContentScriptLoading] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClearResults = () => {
    setCodeBreakdown("");
    setThumbnail("");
    setContentScript("");
    setCofounder("");
  };

  const handleSubmit = async () => {
    handleClearResults();
    event.preventDefault();
    setHasError(false);
    setIsCofounderLoading(true);

    let prompt = customInstructions(formData, "cofounder");

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({ prompt }),
    }).catch(() => {
      setHasError(true);
    });

    if (response) {
      let data = await response.json();
      //   let result = JSON.parse(data?.bot?.content);
      console.log("data result", data?.bot?.content);
      //   let outcome = result.schedule;
      let outcome = data?.bot?.content;
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
    }).catch(() => {
      setHasError(true);
    });

    if (response) {
      let data = await response.json();
      let result = JSON.parse(data?.bot?.content);

      let outcome = result.result;
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
    }).catch(() => {
      setHasError(true);
    });

    if (response) {
      let data = await response.json();
      let result = JSON.parse(data?.bot?.content);
      console.log("RESULT", result);
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

  return (
    <>
      <Modal centered show={isCofounderOpen} fullscreen>
        <Modal.Header style={{ backgroundColor: "black", color: "white" }}>
          <Modal.Title>Co-founder</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Form style={{ maxWidth: 700 }}>
            <Form.Group className="mb-3">
              <Form.Label>What are we building today?</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="creationDescription"
                value={formData.creationDescription}
                onChange={handleInputChange}
                placeholder="I want a canvas component that animates a sine wave"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Assistant</Form.Label>
              <Form.Select
                name="assistant"
                value={formData.assistant}
                onChange={handleInputChange}
              >
                <option value="coder">Coder</option>
                <option value="creator">Creator</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={isCofounderLoading || isContentScriptLoading}
              onClick={() => {
                formData.assistant === "creator"
                  ? handleImageGenerator()
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
          {/* {thumbnail ? <img src={thumbnail} /> : null} */}

          <br />
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
                      <h1>Code Explorer</h1>
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
                <h2>Code Editor</h2>
                <LiveError />
              </LiveProvider>

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
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="dark" onClick={() => setIsCofounderOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
