//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {
  RoxanaLoadingAnimation,
  postInstructions,
} from "../../../common/uiSchema";
import { customInstructions } from "./Scheduler.compute";
import styled from "styled-components";
import { addDoc, updateDoc } from "firebase/firestore";

const LearningPathContainer = styled.div`
  background-color: #fff0f5; /* Light pink background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Module = styled.div`
  background-color: #fdf5e6; /* Light orange background for each module */
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const ModuleTitle = styled.h2`
  color: #d2691e; /* Warm color for titles */
  font-weight: bold;
`;

const ModuleDetails = styled.p`
  color: #333; /* Standard text color */
  margin: 10px 0;
`;

const ModuleMeta = styled.div`
  font-size: 0.9em;
  color: #808080; /* Grey for meta information */
`;

const Duration = styled.span`
  margin-right: 10px;
`;

export const Scheduler = ({
  isSchedulerOpen,
  setIsSchedulerOpen,
  userStateReference,
}) => {
  const [formData, setFormData] = useState({
    aboutYou: "",
    pace: "weekly", // Default context option
  });

  const [schedule, setSchedule] = useState([]);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    event.preventDefault();
    setHasError(false);
    setIsScheduleLoading(true);

    // setIsAiResponseLoading(true);

    let prompt = customInstructions({ formData });

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({ prompt, isJsonMode: true }),
    }).catch(() => {
      //   setIsAiResponseLoading(false);
      setHasError(true);
    });

    if (response) {
      let data = await response.json();
      let result = JSON.parse(data?.bot?.content);
      let outcome = result.schedule;
      setSchedule(outcome);
    }
    setIsScheduleLoading(false);
  };

  const handleSaveSchedule = async () => {
    setIsSaveLoading(true);
    console.log("done...");
    let document = userStateReference.databaseUserDocument;
    await updateDoc(userStateReference.userDocumentReference, {
      ...document,
      schedule,
    });

    userStateReference.setDatabaseUserDocument((prevDoc) => ({
      ...prevDoc,
      schedule,
    }));

    setIsSaveLoading(false);
  };

  let mapping =
    schedule?.length > 0
      ? schedule
      : userStateReference?.databaseUserDocument?.schedule;

  console.log("MAPPING", mapping);
  return (
    <>
      <Modal centered show={isSchedulerOpen} fullscreen>
        <Modal.Header style={{ backgroundColor: "black", color: "white" }}>
          <Modal.Title>Schedules</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          <Form onSubmit={handleSubmit} style={{ maxWidth: 700 }}>
            <Form.Group className="mb-3">
              <Form.Label>About you</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="aboutYou"
                value={formData.aboutYou}
                onChange={handleInputChange}
                placeholder="I'm a single mother that graduated from college studying finance. I'm very goal-oriented but I know very little about coding!"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Choose your pace</Form.Label>
              <Form.Select
                name="pace"
                value={formData.pace}
                onChange={handleInputChange}
              >
                <option value="ASAP">ASAP</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={isScheduleLoading}
            >
              Create
            </Button>
          </Form>
          <br />
          {isScheduleLoading ? <RoxanaLoadingAnimation /> : ""}
          {hasError
            ? "An error occurred trying to retrieve data from OpenAI. Pls try again"
            : ""}
          <br />
          <br />
          <div className="learning-path">
            {schedule?.length > 0 ? (
              <Button
                onClick={() => handleSaveSchedule()}
                disabled={isSaveLoading}
              >
                Save Schedule
              </Button>
            ) : null}
            <br />

            {isSaveLoading ? <RoxanaLoadingAnimation /> : ""}
            <br />
            {mapping?.map((module, index) => (
              <div key={index} className="module">
                <br />
                <h2 className="module-title">{module.subject}</h2>
                <b>Why:</b>&nbsp;
                <span className="reason">{module.reason}</span>
                <br />
                <div className="module-meta">
                  <b>
                    {" "}
                    Duration:{" "}
                    <span className="duration">{module.duration}</span>
                  </b>
                  <br /> <br />
                  <p className="module-details">{module.details}</p>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="dark" onClick={() => setIsSchedulerOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
