import styled from "styled-components";

export const EmotionButton = styled.button`
  //   background-color: #000f89;
  background-color: ${(props) => {
    return props.color ? props.color : props.color;
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
      return props.colorHover ? props.colorHover : props.color;
    }};

    cursor: ${(props) => {
      console.log("propsnoClick", props.noClick);
      return props.noClick ? "unset" : "pointer";
    }};
  }
`;

export const EmotionalIntelligenceStyles = {
  Header: {
    backgroundColor: "black",
    color: "white",
  },
  Body: {
    backgroundColor: "black",
    color: "white",
  },

  Banner: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },

  BannerBackground: {
    backgroundColor: "rgba(50, 50, 50, 0.85)",
    padding: 24,
    borderRadius: 24,
  },

  EnergyLevelContainer: {
    padding: 24,
  },

  RowWrapCenter: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  RowJustifyCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  JourneyContainer: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 48,
  },

  Footer: {
    backgroundColor: "black",
    color: "white",
  },

  EmotionHeader: {
    backgroundColor: "black",
    color: "white",
    borderBottom: "0px solid transparent",
    borderRight: "5px solid lavender",
    borderLeft: "5px solid lavender",
    borderTop: "5px solid lavender",
  },

  EmotionBody: {
    backgroundColor: "black",
    color: "white",
    borderRight: "5px solid lavender",
    borderLeft: "5px solid lavender",
  },

  EmotionFooter: {
    backgroundColor: "black",
    color: "white",
    borderTop: "1px solid transparent",
    borderRight: "5px solid lavender",
    borderLeft: "5px solid lavender",
    borderBottom: "5px solid lavender",
  },

  EmotionNote: { width: 300, height: 125, margin: 5 },

  GenerateInsightButton: {
    width: "100%",
    marginTop: 6,
    paddingTop: 12,
    paddingBottom: 12,
  },

  TextAlignCenter: { textAlign: "center" },

  AiResponseContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
    textShadow: "1px 1px 5px black",
    height: 300,
    overflow: "scroll",
  },

  AiResponseMessage: {
    backgroundColor: "#0C84FF",
    height: "fit-content",
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
};
