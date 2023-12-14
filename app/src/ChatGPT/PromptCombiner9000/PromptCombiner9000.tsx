import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { isEmpty } from "lodash";
import { logEvent } from "firebase/analytics";
import Patreon from "../Patreon/Patreon";
import CodeEditor from "../CodeEditor/CodeEditor";
import { analytics } from "../../database/firebaseResources";
import { Button } from "react-bootstrap";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const Wrapper = styled.div`
  text-align: left;
`;

const Heading = styled.h2`
  margin-top: 24px;
`;

const MessageContainer = styled.div`
  background-color: ${(props) => (props.loading ? "black" : "#2C2C2E")};
  color: white;
  display: ${(props) => (props.loading ? "none" : "flex")};
  justify-content: flex-start;
  padding: 20px;
  min-width: 350px;
  // max-width: 600px;
  max-width: 70.5%;
  border-radius: 30px;
  margin: 24px 0 12px 0;
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
`;

const Advertisement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledPromptHeaderButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  color: white;
`;

const renderContent = (type, response, patreonObject, handleScheduler) => {
  switch (type) {
    case "patreon":
      return (
        <Patreon
          patreonObject={patreonObject}
          handleScheduler={handleScheduler}
        />
      );
    case "practice":
      return <CodeEditor patreonObject={patreonObject} />;
    case "demonstrate":
      if (patreonObject?.hasCode) {
        return (
          <Editor
            value={response}
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
        );
      } else {
        return <div>{response}</div>;
      }
      break;
    default:
      return <div>{response}</div>;
  }
};

export const PromptCombiner9000 = ({
  key,
  loadingMessage,
  chatGptResponse,
  patreonObject,
  parentVisibility,
  setParentVisibility,
  handleScheduler,
}) => {
  const [promptVisibility, setPromptVisibility] = useState("flex");
  if (isEmpty(patreonObject)) {
    return null;
  }

  const { type, response, icon } = chatGptResponse;

  const handlePromptHeaderVisibility = (event) => {
    setParentVisibility(false);

    if (promptVisibility === "none") {
      setPromptVisibility("flex");
    } else {
      setPromptVisibility("none");
    }
  };

  useEffect(() => {
    if (parentVisibility) {
      setPromptVisibility("flex");
    }
  }, [parentVisibility]);

  return (
    <Wrapper>
      {loadingMessage.length < 1 && (
        <Heading
          id={type}
          onClick={handlePromptHeaderVisibility}
          // style={{
          //   border:
          //     promptVisibility === "flex"
          //       ? "1px solid transparent"
          //       : "1px solid white",
          // }}
        >
          <StyledPromptHeaderButton variant="dark">
            {type === "patreon" ? "generate" : type} {icon}
          </StyledPromptHeaderButton>
        </Heading>
      )}

      <MessageContainer
        loading={loadingMessage}
        id={key + type}
        style={{
          display: promptVisibility,
        }}
      >
        <FlexBox>
          {loadingMessage.length < 1 &&
            response &&
            renderContent(type, response, patreonObject, handleScheduler)}
        </FlexBox>
      </MessageContainer>
    </Wrapper>
  );
};
