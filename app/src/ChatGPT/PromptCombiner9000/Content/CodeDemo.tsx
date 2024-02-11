import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { Accordion, Button, Card, Collapse } from "react-bootstrap";
import { useState } from "react";

const CodeExplanationUI = ({ patreonObject }) => {
  const [open, setOpen] = useState(false); // Controls the visibility of the explanation

  const codeExplanations = patreonObject?.prompts?.demonstrate?.codeBreakdown;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="code-explanation-collapse-text"
        aria-expanded={open}
      >
        Explain this code
      </Button>
      {open &&
        codeExplanations &&
        codeExplanations.map((item, index) => (
          <div
            style={{
              marginTop: 48,
            }}
          >
            <Collapse
              in={open}
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div id="code-explanation-collapse-text">
                <Card
                  style={{
                    boxShadow: "0px 0px 10px -6px rgba(0,0,0,1)",
                    width: "95%",
                  }}
                >
                  <Card.Header>Code Snippet {index + 1}</Card.Header>
                  <Card.Body
                    style={{
                      overflowWrap: "break-word",
                      whiteSpace: "pre-wrap",
                      border: "1px solid #F7F7F7",
                    }}
                  >
                    <p>
                      <strong>Code:</strong> {item.code}
                    </p>
                    <p>
                      <strong>Explanation:</strong> {item.explanation}
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Collapse>
          </div>
        ))}
    </div>
  );
};
export const CodeDemo = ({ patreonObject, response }) => {
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
        borderRadius: 30,
      }}
    >
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <CodeExplanationUI patreonObject={patreonObject} />
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
            whiteSpace: "pre-wrap", // Ensure text wraps within the container
          }}
          disabled
        />
      </pre>
    </div>
  );
};
