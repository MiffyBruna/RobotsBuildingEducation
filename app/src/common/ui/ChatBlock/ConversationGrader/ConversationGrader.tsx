import { Button } from "react-bootstrap";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../../../database/firebaseResources";
import { ui } from "../../../uiSchema";

export const ConversationGrader = ({ type }) => {
  return (
    <>
      <h3>Conversation Grader 4444</h3>
      <div>{type}</div>
    </>
  );
};
