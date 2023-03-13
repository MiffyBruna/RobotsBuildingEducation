import styled from "styled-components";
import isEmpty from "lodash/isEmpty";
export const StyledNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 100%;
  min-width: 100%;
  transition: 0.2s all ease-in-out;
  padding: 12px;
  border-radius: 2px;
  box-shadow: 0 3px 6px #0b186be2, 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    /* transform: scale(1.01); */
    /* box-shadow: 0 19px 38px  #0b186be2, 0 15px 12px rgba(0,0,0,0.22); */
  }
`;

export const StyledCollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 12px;
  transition: 0.2s all ease-in-out;
  padding: 12px;
  border-radius: 2px;
  box-shadow: 0 3px 6px #6b0b68e1, 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    /* transform: scale(1.01); */
    /* box-shadow: 0 19px 38px  #0b186be2, 0 15px 12px rgba(0,0,0,0.22); */
  }
`;
export const StyledModule = styled.button`
  border: 1px solid #636366;
  background-color: black;
  background-size: cover;
  box-sizing: border-box;
  margin: 8px;
  width: 140px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  color: white;
  transition: 0.15s all ease-in-out;
  border: 1px solid
    ${(props) => {
      return props.patreonObject.rare
        ? "#3AF6FF"
        : props.patreonObject.highValue
        ? "#F2D466"
        : props.patreonObject.new
        ? "#59CE00"
        : props.patreonObject.underConstruction
        ? "#FD0000"
        : "transaparent";
    }};

  cursor: grab;
  &:hover {
    transform: scale(1.1);
    /* box-shadow: 0 14px 28px #340627e0, 0 10px 10px rgba(0, 0, 0, 0.22); */
  }
`;

export const StyledPath = styled.button`
  background-color: #2c2c2e;

  /* max-width: 200px; */
  width: 20%;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 12px;
  /* border-radius: 46%; */
  color: white;
  transition: 0.15s all ease-in-out;

  cursor: ${(props) => {
    return props.active ? "grab" : "not-allowed";
  }};

  &:hover {
    transform: ${(props) => {
      return props.active ? "scale(1.1)" : "";
    }};

    /* box-shadow: 0 14px 28px #340627e0, 0 10px 10px rgba(0, 0, 0, 0.22); */
  }
`;

export const StyledPromptButton = styled.button`
  background-color: ${(props) => {
    return props.loadingMessage ? "#48484A" : "black";
  }};

  cursor: ${(props) => {
    return props.loadingMessage ? "not-allowed" : "grab";
  }};

  color: white;
  /* border: 2px solid #48484a; */

  border: 1px solid
    ${(props) => {
      return props?.borderHighlight;
    }};
  /* border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px; */
  text-align: left;
  padding: 10px;
  width: 200px;
  margin-top: 24px;

  display: flex;
  align-items: center;
  transition: 0.15s all ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
