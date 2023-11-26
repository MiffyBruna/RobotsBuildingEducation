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

function executeComponentString(componentString) {
  // Transpile the JSX string to JavaScript
  const { code } = transform(componentString, { presets: ["react"] });

  // Execute the transpiled code
  return eval(code);
}
// import { transform } from "babel-standalone";

export const Cofounder = ({
  isCofounderOpen,
  setIsCofounderOpen,
  userStateReference,
}) => {
  const [formData, setFormData] = useState({
    aboutYou: "",
    pace: "weekly", // Default context option
  });

  const [cofounder, setCofounder] = useState(``);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);

  const [hasError, setHasError] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    event.preventDefault();
    setHasError(false);
    setIsScheduleLoading(true);

    let prompt = customInstructions(formData);

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
    setIsScheduleLoading(false);
  };

  console.log("cofounder", cofounder);
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
          <Form onSubmit={handleSubmit} style={{ maxWidth: 700 }}>
            <Form.Group className="mb-3">
              <Form.Label>About you</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="aboutYou"
                value={formData.aboutYou}
                onChange={handleInputChange}
                placeholder="I want a canvas component that animates a sine wave"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
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
            </Form.Group> */}
            <Button
              variant="primary"
              type="submit"
              disabled={isScheduleLoading}
            >
              Create
            </Button>
          </Form>
          <br />
          {isScheduleLoading ? <RoxanaLoadingAnimation /> : ""}
          {hasError
            ? "An error occurred trying to retrieve data from OpenAI. Pls try again"
            : ""}
          <br />
          {cofounder ? (
            <div>
              <LiveProvider code={cofounder}>
                {/* {executeComponentString(cofounder)} */}
                <LivePreview />
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
