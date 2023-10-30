import { isEmpty } from "lodash";

// Define styles for the message container
const messageContainerStyle = {
  backgroundColor: "#0C84FF",
  color: "white",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  padding: 20,
  maxWidth: "82.5%",
  minWidth: "fit-content",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  borderBottomLeftRadius: 30,
};

// Define styles for the main container
const mainContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

export const PromptMessage = ({ promptMessage, patreonObject }) => {
  // Check if patreonObject exists
  if (isEmpty(patreonObject)) return null;

  // Determine the message to display
  let displayMessage = promptMessage;
  if (!promptMessage) {
    displayMessage = "let's learn!";
  }

  return (
    <div style={mainContainerStyle}>
      <div style={messageContainerStyle} id={"scrollPoint"}>
        {displayMessage}
      </div>
    </div>
  );
};
