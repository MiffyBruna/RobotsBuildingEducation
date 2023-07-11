import { Button } from "react-bootstrap";
import { useEffect, useState, useReducer } from "react";
import { Demo } from "./Demo/Demo";
import { logEvent } from "firebase/analytics";
import { analytics } from "../database/firebaseResources";
import { ui } from "../common/uiSchema";

export const Passcode = ({
  handleZeroKnowledgePassword,

  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  computePercentage,
  patreonObject,
  handleRandomDemoPressed,
}) => {
  return (
    <div>
      <h2>Enter Passcode</h2>
      <input onChange={handleZeroKnowledgePassword} type="password" />
      <br />
      <br />

      <a
        onClick={() =>
          logEvent(analytics, "select_promotion", {
            creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
            creative_slot: `Get Passcode Slot`,
            promotion_id: `Robots Building Education`,
            promotion_name: "advertising_launch",
          })
        }
        target={"_blank"}
        href="https://www.patreon.com/RobotsBuildingEducation"
        style={{ color: "white" }}
      >
        <Button variant="dark" style={{ width: "250px", height: "50px" }}>
          &nbsp; Get Subscriber Passcode
        </Button>
      </a>
      <br />
      <br />

      <br />
      <br />
      {patreonObject ? (
        <Demo
          userDocumentReference={userDocumentReference}
          databaseUserDocument={databaseUserDocument}
          setDatabaseUserDocument={setDatabaseUserDocument}
          globalDocumentReference={globalDocumentReference}
          globalImpactCounter={globalImpactCounter}
          setGlobalImpactCounter={setGlobalImpactCounter}
          computePercentage={computePercentage}
          patreonObject={
            ui()["Engineer"]["Crash Course Version 3"]["Introduction To RO.B.E"]
          }
          isDemo={true}
          demoName={"Demo: Introduction To RO.B.E"}
        />
      ) : null}
    </div>
  );
};
