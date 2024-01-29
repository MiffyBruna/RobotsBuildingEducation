import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import {
  StyledQuizForm,
  StyledQuizContainer,
  QuestionText,
} from "../../BossMode.styles";

const StyledInput = styled(Form.Control)`
  margin-bottom: 10px;
  /* Add more styles as needed */
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 10px;
  width: 100%;
  height: 150px; // You can adjust the height as needed
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  /* Add more styles as needed */
`;

export const TextInputQuestion = ({
  currentQuestion,
  question,
  onAnswerSubmit,
}) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleInputChange = (input) => {
    setUserAnswer(input);
  };

  const handleTextChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    onAnswerSubmit(userAnswer, null, true);
    setUserAnswer(""); // Reset input field after submission
  };

  return (
    <StyledQuizContainer>
      <QuestionText>{question}</QuestionText>
      <StyledQuizForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {currentQuestion?.hasCode ? (
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
                value={userAnswer}
                onValueChange={handleInputChange}
                highlight={(input) => highlight(input, languages.js)}
                padding={25}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                  width: "100%",
                  border: "1px solid black",
                  borderRadius: 7,
                  marginTop: 12,
                }}
                autoFocus
              />
            </pre>
          </div>
        ) : (
          <StyledTextArea value={userAnswer} onChange={handleTextChange} />
        )}
        <br /> <br />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </StyledQuizForm>
    </StyledQuizContainer>
  );
};
