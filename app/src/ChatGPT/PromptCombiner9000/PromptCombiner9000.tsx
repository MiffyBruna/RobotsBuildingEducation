import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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
import { PanLeftComponent, PanRightComponent } from "../../styles/lazyStyles";
import { ContentLinks } from "../../common/ui/Displays/ContentLinks/ContentLinks";
import { CodeDemo } from "./Content/CodeDemo";

const delayedAnimation = keyframes`
from {
    transform: translateY(100px);
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;
const StyledAnimatedPromptCombiner = styled.div`
  animation: ${delayedAnimation} 0.25s ease-out;
  animation-delay: ${(props) => props.index * 0.2}s; /* Delay based on index */
  opacity: 0; /* Start with opacity 0 to make the animation visible */
  visibility: hidden;
  animation-fill-mode: forwards; /* Keep the element visible after the animation */
`;
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
  border-radius: 50px;
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

const renderContent = (
  type,
  response,
  patreonObject,
  handleScheduler,
  userStateReference,
  globalStateReference,
  handleZap,
  zap
) => {
  switch (type) {
    case "patreon":
      return (
        <Patreon
          patreonObject={patreonObject}
          handleScheduler={handleScheduler}
          userStateReference={userStateReference}
          globalStateReference={globalStateReference}
          handleZap={handleZap}
          zap={zap}
        />
      );
    case "practice":
      return <CodeEditor patreonObject={patreonObject} />;
    case "demonstrate":
      if (patreonObject?.hasCode) {
        return <CodeDemo response={response} patreonObject={patreonObject} />;
      } else {
        return <div style={{ padding: 20 }}>{response}</div>;
      }
      break;
    case "shop":
      return (
        <div style={{ padding: 20 }}>
          <code style={{ fontSize: 12 }}>
            Shopify links don't work rn but the books are good to know about 😔
          </code>
          <br />
          <br />
          {response}
        </div>
      );
    default:
      return (
        <div style={{ padding: 20 }}>
          {patreonObject?.prompts?.[type]?.headerImageSrc ? (
            <ContentLinks patreonObject={patreonObject} type={type} />
          ) : null}

          {response}
        </div>
      );
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
  userStateReference,
  globalStateReference,
  handleZap,
  zap,
  index,
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
          <PanLeftComponent>
            <StyledPromptHeaderButton variant="dark">
              {type === "patreon" ? "discover" : type} {icon}
            </StyledPromptHeaderButton>
          </PanLeftComponent>
        </Heading>
      )}

      <StyledAnimatedPromptCombiner index={index}>
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
              renderContent(
                type,
                response,
                patreonObject,
                handleScheduler,
                userStateReference,
                globalStateReference,
                handleZap,
                zap
              )}
          </FlexBox>
        </MessageContainer>
      </StyledAnimatedPromptCombiner>
    </Wrapper>
  );
};
