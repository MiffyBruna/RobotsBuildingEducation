import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { japaneseThemePalette, textBlock } from "../../../../styles/lazyStyles";
import sheilferBitcoin from "../../media/images/sheilferBitcoin.jpeg";
import { Modal } from "react-bootstrap";
import { ChatBlock } from "../../ChatBlock/ChatBlock";

export let CodeBlock = ({ code }) => {
  return (
    <>
      <br />
      <div
      //   style={{ boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)" }}
      >
        <SyntaxHighlighter
          // text={}
          language={"javascript"}
          // showLineNumbers={true}
          // theme={dracula}
          // style={{ position: "relative", border: "1px solid yellow" }}
          style={a11yDark}
          wrapLines={true}
          wrapLongLines={true}
          customStyle={{ width: "100%" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};
