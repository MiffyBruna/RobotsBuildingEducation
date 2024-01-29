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
      <Modal
        centered
        show={isBossModeOpen}
        style={{ backgroundColor: "black" }}
        fullscreen
      >
        <Modal.Header style={{ backgroundColor: "black", color: "white" }}>
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
      </Modal>
    </>
  );
};
