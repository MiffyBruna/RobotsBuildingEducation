import { Button, Form } from "react-bootstrap";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../../../../database/firebaseResources";
import { ui } from "../../../../uiSchema";
import { useState } from "react";
import { Chat } from "./Chat/Chat";

// export const get;
export const ConversationGrader = ({
  type,
  instructions,
  conversationInput,
  setConversationInput,
  conversation,
  gradeResult,
}) => {
  return (
    <>
      <Chat conversation={conversation} gradeResult={gradeResult} />
      <Form.Control
        as="textarea"
        rows={3}
        onChange={(event) => setConversationInput(event.target.value)}
        value={conversationInput}
      />
    </>
  );
};
