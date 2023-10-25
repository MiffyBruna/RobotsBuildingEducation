import React, { useState } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { isEmpty } from "lodash";
import { logEvent } from "firebase/analytics";
import Patreon from "../Patreon/Patreon";
import CodeEditor from "../CodeEditor/CodeEditor";
import { analytics } from "../../database/firebaseResources";
import { Button } from "react-bootstrap";

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
  max-width: 600px;
  border-radius: 30px;
  margin: 24px 0 12px 0;
  transition: 0.2s all ease-in-out;
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

const renderContent = (type, response, patreonObject) => {
  switch (type) {
    case "patreon":
      return <Patreon patreonObject={patreonObject} />;
    case "practice":
      return <CodeEditor patreonObject={patreonObject} />;
    case "demonstrate":
      if (patreonObject?.hasCode) {
        return (
          <SyntaxHighlighter
            language={patreonObject?.prompts?.demonstrate?.request
              ?.split(" ")
              .slice(-1)[0]
              ?.slice(0, -1)}
            style={a11yDark}
            wrapLines={true}
            wrapLongLines={true}
            customStyle={{ width: "100%" }}
          >
            {response}
          </SyntaxHighlighter>
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
  loadingMessage,
  chatGptResponse,
  patreonObject,
}) => {
  const [promptVisibility, setPromptVisibility] = useState("flex");
  if (isEmpty(patreonObject)) {
    return null;
  }

  const { type, response, icon } = chatGptResponse;

  console.log("type of prompt", type);

  const handlePromptHeaderVisibility = (event) => {
    console.log(event.target.id);

    if (promptVisibility === "none") {
      setPromptVisibility("flex");
    } else {
      setPromptVisibility("none");
    }
  };

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
        style={{
          display: promptVisibility,
        }}
      >
        <FlexBox>
          {loadingMessage.length < 1 &&
            response &&
            renderContent(type, response, patreonObject)}
        </FlexBox>
      </MessageContainer>
    </Wrapper>
  );
};
