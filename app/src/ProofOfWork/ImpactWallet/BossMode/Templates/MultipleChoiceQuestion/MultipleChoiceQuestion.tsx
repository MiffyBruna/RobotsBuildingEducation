import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  StyledQuizForm,
  StyledQuizContainer,
  QuestionText,
} from "../../BossMode.styles";

const OptionContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(240, 240, 240, 0.7);
  border-radius: 5px;
  transition: background-color 0.3s;
  max-width: fit-content;

  &:hover {
    // background-color: #e0e0e0;
  }
`;

const StyledFormCheck = styled(Form.Check)`
  .form-check-input {
    /* Custom styling for radio buttons */
    margin-top: 14px;
  }
  .form-check-label {
    /* Custom styling for labels */
    color: black;
    padding: 10px;
  }
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: #007bff;
  border-color: #007bff;
  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;

export const MultipleChoiceQuestion = ({
  question,
  options,
  onAnswerSubmit,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    onAnswerSubmit(selectedOption);
    setSelectedOption(""); // Reset selection after submission
  };

  return (
    <StyledQuizContainer>
      <QuestionText>{question}</QuestionText>
      <StyledQuizForm>
        {options.map((option, index) => (
          <OptionContainer key={index}>
            <StyledFormCheck
              type="radio"
              id={option}
              name="multipleChoice"
              label={option}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
          </OptionContainer>
        ))}
        <br /> <br />
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </StyledQuizForm>
    </StyledQuizContainer>
  );
};
