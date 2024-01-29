import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styled from "styled-components";
import { QuestionText } from "../../BossMode.styles";

// Styled components
const BlockContainer = styled.div`
  padding: 10px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "#e1e1e1" : "white")};
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.2)" : "none"};

  /* Smooth transition for background color and box-shadow */
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  color: black;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const DroppableArea = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
export const SelectionQuestion = ({ question, onAnswerSubmit }) => {
  const [codeBlocks, setCodeBlocks] = useState(question.blocks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(codeBlocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCodeBlocks(items);
  };

  const checkAnswer = () => {
    const userOrder = codeBlocks.map((block) => block.id);
    let answer =
      JSON.stringify(userOrder) === JSON.stringify(question.correctOrder);

    onAnswerSubmit(answer, { data: "ok" });
    // if (answer) {
    //   alert("Correct! 🎉");
    // } else {
    //   alert("Not quite right, try again! 🤔");
    // }
  };

  return (
    <>
      <QuestionText>{question?.text}</QuestionText>
      <br />
      <br />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <DroppableArea {...provided.droppableProps} ref={provided.innerRef}>
              {codeBlocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided, snapshot) => (
                    <BlockContainer
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                    >
                      {block.content}
                    </BlockContainer>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </DroppableArea>
          )}
        </Droppable>
        <br />
        <br />
        <button onClick={checkAnswer}>Submit Answer</button>
      </DragDropContext>
    </>
  );
};
