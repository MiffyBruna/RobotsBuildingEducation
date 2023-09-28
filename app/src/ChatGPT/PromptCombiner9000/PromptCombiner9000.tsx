import React from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { isEmpty } from "lodash";
import { logEvent } from "firebase/analytics";
import Patreon from "../Patreon/Patreon";
import CodeEditor from "../CodeEditor/CodeEditor";
import { analytics } from "../../database/firebaseResources";

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

const renderContent = (type, response, patreonObject, isGeneratedDemo) => {
  switch (type) {
    case "patreon":
      return (
        <Patreon
          patreonObject={patreonObject}
          isGeneratedDemo={isGeneratedDemo}
        />
      );
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
  isDemo,
  moduleName = "demo",
  isGeneratedDemo,
}) => {
  if (isEmpty(patreonObject)) {
    return null;
  }

  const { type, response, icon } = chatGptResponse;

  return (
    <Wrapper>
      {loadingMessage.length < 1 && (
        <Heading>
          {type === "patreon" ? "generate" : type} {icon}
        </Heading>
      )}
      <MessageContainer loading={loadingMessage}>
        <FlexBox>
          {loadingMessage.length < 1 &&
            response &&
            renderContent(type, response, patreonObject, isGeneratedDemo)}
        </FlexBox>
      </MessageContainer>
    </Wrapper>
  );
};
