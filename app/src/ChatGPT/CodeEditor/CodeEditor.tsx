import { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const CodeEditor = ({ patreonObject }) => {
  const stepMap = patreonObject?.prompts?.practice?.steps || [
    {
      code: "const express = require('express');",
      guidance: (
        <div style={{ border: "1px solid red" }}>
          ok this does a explain thing blah blah
        </div>
      ),
    },
    {
      code: "const cors = require('cors');",
      guidance: (
        <div style={{ border: "1px solid red" }}>we be explaining stuff</div>
      ),
    },
    // Add more steps as needed
  ];

  const codeSteps = stepMap.map((item) => item.code);

  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const isComplete = currentStep === codeSteps.length && isValid;
  const progressPercent = (currentStep / codeSteps.length) * 100;

  useEffect(() => {
    setUserInput("");
    setIsValid(false);
  }, [currentStep]);

  const handleChange = (input) => {
    setUserInput(input);
    setIsValid(input === codeSteps[currentStep]);
  };

  const handleSubmit = () => {
    if (isValid) {
      if (currentStep < codeSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === codeSteps.length - 1) {
        setCurrentStep(currentStep + 1); // Increment to signify completion
      }
    }
  };

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
      <div style={{ width: "100%", backgroundColor: "#ccc", marginBottom: 20 }}>
        <div
          style={{
            width: `${progressPercent}%`,
            height: "10px",
            backgroundColor: isComplete ? "#a8d5ba" : "aquamarine",
            transition: "width 0.4s ease",
          }}
        ></div>
      </div>

      {stepMap
        .slice(0, Math.min(currentStep, stepMap.length - 1) + 1)
        .map((step, index) => (
          <div key={index} style={{ marginBottom: 20 }}>
            {step.guidance}
            <br />
            <pre
              style={{
                // backgroundColor:
                //   index === currentStep
                //     ? isValid
                //       ? "#a8d5ba"
                //       : "rgba(215,137,215, 0.7)"
                //     : "#faf3e0",
                padding: 10,
                borderRadius: 7,
                border:
                  index === currentStep
                    ? isValid
                      ? "4px solid #a8d5ba"
                      : "4px solid rgba(215,137,215, 1)"
                    : "4px solid #a8d5ba",
              }}
            >
              <Editor
                value={step.code}
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
              {/* {step} */}
            </pre>
            {index === currentStep && (
              <Editor
                value={userInput}
                onValueChange={handleChange}
                highlight={(input) => highlight(input, languages.js)}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                  width: "100%",
                  border: "1px solid black",
                  borderRadius: 7,
                }}
                autoFocus
              />
            )}
          </div>
        ))}

      <button
        disabled={!isValid || isComplete}
        style={{
          backgroundColor: isValid && !isComplete ? "#a8d5ba" : "#d789d7",
          color: isValid && !isComplete ? "#f5fffc" : "#ffeffd",
          marginTop: 10,
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>

      {progressPercent === 100 && (
        <div style={{ marginTop: 20, color: "#4e9a06", fontSize: "1.2em" }}>
          {/* {patreonObject?.prompts?.practice?.reward ||
            "Congratulations on completing the challenge!"} */}
          <Editor
            value={patreonObject?.prompts?.practice?.displayCode}
            // onValueChange={handleChange}
            highlight={(input) => highlight(input, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              width: "100%",
              border: "1px solid black",
              borderRadius: 7,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
