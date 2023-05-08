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
      {/* <div
        style={{
          border: "1px solid pink",
          width: "fit-content",
          textAlign: "center",
        }}
      >
        If you're applying to scholarship, please read the About in my Patreon  
        😊
      </div> */}
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
          <img
            style={{ borderRadius: "6px" }}
            width="32px"
            src="https://pbs.twimg.com/profile_images/1266950784609992705/xEe7mBx9_400x400.png"
          />
          &nbsp; Get Subscriber Passcode
        </Button>
      </a>
      <br />
      <br />

      {/* <Button
        variant="dark"
        style={{ width: "250px", height: "50px" }}
        onClick={() => handleRandomDemoPressed()}
      >
        <img
          src="/../../../roxana.ico"
          width="32px"
          style={{ borderRadius: "6px" }}
        />
        &nbsp; Random Demo
      </Button> */}
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
            ui()["Engineer"]["Crash Course"]["Introduction To RO.B.E"]
          }
          isDemo={true}
        />
      ) : null}
    </div>
  );
};
