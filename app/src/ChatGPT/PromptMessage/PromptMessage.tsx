import { isEmpty } from "lodash";

// Define styles for the message container
const messageContainerStyle = {
  backgroundColor: "#0C84FF",
  color: "white",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  padding: 25,
  maxWidth: "70.5%",
  minWidth: "fit-content",
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  borderBottomLeftRadius: 50,
};

// Define styles for the main container
const mainContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

export const PromptMessage = ({
  promptMessage,
  patreonObject,
  chatGptResponseList,
  loadingMessage,
}) => {
  // Check if patreonObject exists
  if (isEmpty(patreonObject)) return null;

  // Determine the message to display
  let displayMessage = promptMessage;
  if (!promptMessage) {
    displayMessage = "let's learn!";
  }

  if (chatGptResponseList?.length > 0 && !loadingMessage) {
    displayMessage = "thank you rox!";
  }

  return (
    <div style={mainContainerStyle}>
      <div style={{ maxWidth: "70.5%" }}>
        <div style={messageContainerStyle} id={"scrollPoint"}>
          {displayMessage}
        </div>
      </div>
    </div>
  );
};
