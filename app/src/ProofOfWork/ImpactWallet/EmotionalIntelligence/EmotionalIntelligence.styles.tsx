import styled from "styled-components";

export const EmotionButton = styled.button`
  //   background-color: #000f89;
  background-color: ${(props) => {
    return props.disabled ? "gray" : "#000f89";
  }};
  border: none;
  height: 150px;
  width: 150px;
  border-radius: 5px;
  margin: 5px;
  text-shadow: 2px 2px 10px black;

  &:hover {
    background-color: ${(props) => {
      return props.disabled ? "black" : props.feeling.color;
    }};
  }
`;
