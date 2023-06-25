import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { isEmpty } from "lodash";
import Spinner from "react-bootstrap/Spinner";
import Patreon from "../../Patreon/Patreon";
import puesFuckIt from "../../../common/media/images/puesFuckIt.jpeg";
import { analytics } from "../../../database/firebaseResources";
import { logEvent } from "firebase/analytics";
import lionel from "../../../common/media/images/lionel.png";
import roxanaGif from "../../../common/media/images/roxanaGif.gif";
import "../Roxana.css";
import { Sketching } from "./Sketching";

// This is an archived version of a set of 9 prompts.
export const PromptCombiner9000 = ({
  loadingMessage,

  chatGptResponse,
  patreonObject,
  isDemo,
  moduleName = "demo",
  promptSelection,
  isGeneratedDemo,
}) => {
  // if(promptType === 'patreon'){
  //    list = [
  //     patreonObject?.prompts['inspire'].response,
  //     patreonObject?.prompts['patreon'].response,
  //     patreonObject?.prompts['demonstrate'].response,
  //   ];

  // }else if(promptType === 'guide'){
  //    list = [
  //     patreonObject?.prompts['define'].response,
  //     patreonObject?.prompts['summarize'].response,
  //     patreonObject?.prompts['ask'].response,
  //           patreonObject?.prompts['guide'].response,
  //                 patreonObject?.prompts['quiz'].response,
  //   ]
  // }else if(promptType==='shop'){
  //   list = [
  //     patreonObject?.prompts['shop'].response,
  //   ]
  // }

  if (!isEmpty(patreonObject)) {
    return (
      <>
        <div style={{ textAlign: "left" }}>
          {loadingMessage.length < 1 ? (
            <h2 style={{ marginTop: 24 }}>
              {chatGptResponse.type === "patreon"
                ? "generate"
                : chatGptResponse.type.toLowerCase()}{" "}
              {chatGptResponse?.icon}
            </h2>
          ) : null}

          <div
            // Gray response message by the AI
            style={{
              backgroundColor: loadingMessage ? "black" : "#2C2C2E",
              color: "white",

              display: loadingMessage ? "none" : "flex",
              justifyContent: "flex-start",
              textAlign: "left",
              padding: 20,
              // maxWidth:
              //   patreonObject.prompts.patreon.icon === "►" ? "617.5px" : "82.5%",
              maxWidth: "90%",
              width: "fit-content",

              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              marginTop: 24,
              marginBottom: 12,
              // overflow: "auto",
              // maxWidth: "80%",
              // maxWidth: 300,
              // maxWidth: loadingStates.demonstrate ? "100%" : "75%",
              // minWidth: loadingStates.demonstrate ? "100%" : "75%",
            }}
          >
            <div style={{ display: "flex" }}>
              {loadingMessage.length < 1 &&
              chatGptResponse.response &&
              chatGptResponse.type === "patreon" ? (
                <Patreon
                  patreonObject={patreonObject}
                  isGeneratedDemo={isGeneratedDemo}
                />
              ) : loadingMessage.length < 1 &&
                chatGptResponse.response &&
                (chatGptResponse.type === "guide" ||
                  chatGptResponse.type === "ask" ||
                  chatGptResponse.type === "quiz") ? (
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  {(typeof chatGptResponse.response === "string" &&
                    chatGptResponse.response
                      ?.match(/\b\d+\.\s+(.+?)(?=\s*\b\d+\. |\s*$)/g)
                      ?.map((item) => {
                        return <li style={{ paddingBottom: 24 }}>{item}</li>;
                      })) ||
                    chatGptResponse.response}
                </ul>
              ) : loadingMessage.length < 1 &&
                chatGptResponse.response &&
                chatGptResponse.type === "demonstrate" &&
                patreonObject?.hasCode ? (
                <div
                  style={{
                    // border: "1px solid red",
                    position: "relative",
                  }}
                >
                  <SyntaxHighlighter
                    // text={}
                    language={patreonObject?.prompts?.demonstrate?.request
                      ?.split(" ")
                      .slice(-1)[0]
                      ?.slice(0, -1)}
                    // showLineNumbers={true}
                    // theme={dracula}
                    // style={{ position: "relative", border: "1px solid yellow" }}
                    style={a11yDark}
                    wrapLines={true}
                    wrapLongLines={true}
                    customStyle={{ width: "100%" }}
                  >
                    {chatGptResponse.response}
                  </SyntaxHighlighter>
                </div>
              ) : (loadingMessage.length < 1 &&
                  ((chatGptResponse.response &&
                    chatGptResponse.type === "summarize") ||
                    (chatGptResponse.response &&
                      chatGptResponse.type === "define") ||
                    (chatGptResponse.response &&
                      chatGptResponse.type === "inspire") ||
                    (chatGptResponse.response &&
                      chatGptResponse.type === "patreon") ||
                    (chatGptResponse.response &&
                      chatGptResponse.type === "market") ||
                    (chatGptResponse.response &&
                      chatGptResponse.type === "demonstrate") ||
                    (chatGptResponse.response &&
                      chatGptResponse.type === "anything"))) ||
                chatGptResponse ? (
                <div>{chatGptResponse.response}</div>
              ) : // <Sketching />
              loadingMessage.length < 1 &&
                chatGptResponse.response &&
                chatGptResponse.type === "shop" &&
                !isDemo ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    textAlign: "center",
                  }}
                >
                  <div>$3 advertisement</div>
                  <h3>{patreonObject?.prompts?.shop?.response}</h3>
                  <h4>{patreonObject?.prompts?.shop?.advertisementPitch}</h4>
                  <a
                    onClick={() =>
                      logEvent(analytics, "select_promotion", {
                        creative_name: `${patreonObject?.prompts?.shop?.advertisementLink}`,
                        creative_slot: `${moduleName} Shop Slot`,
                        promotion_id: `${patreonObject?.prompts?.shop?.response}`,
                        promotion_name: "advertising_launch",
                      })
                    }
                    href={patreonObject?.prompts?.shop?.advertisementLink}
                    target={"_blank"}
                  >
                    <img
                      src={patreonObject?.prompts?.shop?.advertisementImageSrc}
                      style={patreonObject?.prompts?.shop?.backgroundStyles}
                    />
                  </a>
                </div>
              ) : loadingMessage.length < 1 &&
                chatGptResponse.response &&
                chatGptResponse.type === "shop" &&
                isDemo ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    textAlign: "center",
                  }}
                >
                  <h3>The PF Collections</h3>
                  <h5>
                    {
                      "👕👚➡️# A journey to Street Fashion🔞 bold style for Los Chingones 🔥Frisco 415🔥"
                    }
                  </h5>
                  <a
                    onClick={() =>
                      logEvent(analytics, "select_promotion", {
                        creative_name: "https://thepfcollections.com/",
                        creative_slot: "Demo Shop Slot",
                        promotion_id: "The PF Collection",
                        promotion_name: "advertising_launch",
                      })
                    }
                    href="https://thepfcollections.com/"
                    target={"_blank"}
                  >
                    <img
                      src={puesFuckIt}
                      style={{
                        boxShadow:
                          "0 10px 20px rgba(0,0,0,1), 0 6px 6px rgba(0,0,0,1)",
                        height: 150,
                        width: 150,
                        borderRadius: "12px",
                        marginTop: 12,
                      }}
                    />
                  </a>
                </div>
              ) : (
                ""
              )}

              {/* message */}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
