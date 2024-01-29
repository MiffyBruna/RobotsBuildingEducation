import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { japaneseThemePalette, textBlock } from "../../../../styles/lazyStyles";
import sheilferBitcoin from "../../media/images/sheilferBitcoin.jpeg";
import { Modal } from "react-bootstrap";
import { ChatBlock } from "../../ChatBlock/ChatBlock";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

export let CodeBlock = ({ code }) => {
  return (
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
          value={code}
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
  );
};
