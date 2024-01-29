import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import {
  StyledQuizForm,
  StyledQuizContainer,
  QuestionText,
} from "../../BossMode.styles";

const StyledInput = styled(Form.Control)`
  margin-bottom: 15px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  &:hover,
  &:focus {
    background-color: #0056b3;
  }
`;

export const OutputQuestion = ({ question, onAnswerSubmit }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    onAnswerSubmit(userAnswer);
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
        <StyledInput
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <StyledButton type="submit" variant="primary">
          Submit
        </StyledButton>
      </StyledQuizForm>
    </StyledQuizContainer>
  );
};
