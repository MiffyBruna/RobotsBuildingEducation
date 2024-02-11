//@ts-nocheck
import { useState } from "react";
import { isEmpty } from "lodash";
import { Button, Modal } from "react-bootstrap";

export const ChatFrame = ({
  isBossModeOpen,
  setIsBossModeOpen,
  userStateReference,
  globalStateReference,
  zap,
}) => {
  return (
    <>
      <div>hello</div>
      {/* <Modal
        centered
        show={isBossModeOpen}
        style={{ backgroundColor: "black" }}
        fullscreen
        keyboard
        onHide={() => setIsBossModeOpen(false)}
      >
        <Modal.Header style={{ backgroundColor: "black", color: "white" }} closeVariant="white" closeButton>
          <Modal.Title>rox</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          hello world
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black" }}>
          <Button variant="dark" onClick={() => setIsBossModeOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
