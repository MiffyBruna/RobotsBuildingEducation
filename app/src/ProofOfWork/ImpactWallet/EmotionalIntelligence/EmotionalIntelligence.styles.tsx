import styled from "styled-components";

export const EmotionButton = styled.button`
  //   background-color: #000f89;
  background-color: ${(props) => {
    return props.disabled ? "gray" : props.color;
  }};
  border: none;
  height: 125px;
  width: 125px;

  border-radius: 5px;
  margin: 5px;
  text-shadow: 2px 2px 10px black;
  color: white;
  &:hover {
    background-color: ${(props) => {
      return props.disabled ? "black" : props.colorHover;
    }};
  }
`;
