import React from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { isEmpty } from "lodash";
import { logEvent } from "firebase/analytics";
import Patreon from "../Patreon/Patreon";
import { analytics } from "../../database/firebaseResources";
import CodeEditor from "../CodeEditor/CodeEditor";

const Container = styled.div`
  text-align: left;
`;

const Title = styled.h2`
  margin-top: 24px;
`;

const ResponseBox = styled.div`
  background-color: ${(props) => (props.loading ? "black" : "#2C2C2E")};
  color: white;
  display: ${(props) => (props.loading ? "none" : "flex")};
  justify-content: flex-start;
  text-align: left;
  padding: 20px;
  min-width: 350px;
  max-width: 600px;
  border-radius: 30px 30px 30px 0;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const ResponseRenderer = ({
  type,
  response,
  patreonObject,
  isGeneratedDemo,
}) => {
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
    // Add other cases as needed
    default:
      return <div>{response}</div>;
  }
};

export const PromptCombiner9000 = ({
  loadingMessage,
  chatGptResponse,
  patreonObject,

  isGeneratedDemo,
}) => {
  if (isEmpty(patreonObject)) return null;

  return (
    <Container>
      {loadingMessage.length < 1 && (
        <Title>
          {chatGptResponse.type === "patreon"
            ? "generate"
            : chatGptResponse.type.toLowerCase()}{" "}
          {chatGptResponse?.icon}
        </Title>
      )}
      <ResponseBox loading={loadingMessage.length >= 1}>
        <div style={{ display: "flex", width: "100%" }}>
          <ResponseRenderer
            type={chatGptResponse.type}
            response={chatGptResponse.response}
            patreonObject={patreonObject}
            isGeneratedDemo={isGeneratedDemo}
          />
        </div>
      </ResponseBox>
    </Container>
  );
};
