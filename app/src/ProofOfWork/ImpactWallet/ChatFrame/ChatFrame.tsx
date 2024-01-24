//@ts-nocheck
import { useState } from "react";
import { isEmpty } from "lodash";
import { Button, Modal } from "react-bootstrap";

export const ChatFrame = ({
  isChatFrameOpen,
  setIsChatFrameOpen,
  userStateReference,
  globalStateReference,
}) => {
  return (
    <>
      <Modal
        centered
        show={isChatFrameOpen}
        style={{ backgroundColor: "black" }}
        fullscreen
      >
        <Modal.Header style={{ backgroundColor: "black", color: "white" }}>
          <Modal.Title>rox</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          <iframe
            src="https://chat.openai.com/g/g-09h5uQiFC-ms-roxana"
            title="Rox"
            style={{ border: "1px solid red", width: "100%", height: "100%" }}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setIsChatFrameOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
