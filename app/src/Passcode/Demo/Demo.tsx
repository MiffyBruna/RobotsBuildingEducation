import { useEffect, useState } from "react";
import { ChatGPT } from "../../ChatGPT/ChatGPT";
import { randomLessonGeneratorMachine444, ui } from "../../common/uiSchema";

export const Demo = ({
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  computePercentage,
  patreonObject,
}) => {
  return (
    <div>
      <h2 style={{ color: "white", marginTop: 12 }}>
        {/* Lesson 1 - Coding &amp; Logic */}
        {patreonObject.button}
      </h2>
      <ChatGPT
        // patreonObject={patreonObject}
        // userDocumentReference={userDocumentReference}
        // databaseUserDocument={databaseUserDocument}
        // setDatabaseUserDocument={setDatabaseUserDocument}
        // globalDocumentReference={globalDocumentReference}
        // globalImpactCounter={globalImpactCounter}
        // setGlobalImpactCounter={setGlobalImpactCounter}
        patreonObject={patreonObject}
        userDocumentReference={userDocumentReference}
        databaseUserDocument={databaseUserDocument}
        setDatabaseUserDocument={setDatabaseUserDocument}
        globalDocumentReference={globalDocumentReference}
        globalImpactCounter={globalImpactCounter}
        computePercentage={computePercentage}
        setGlobalImpactCounter={setGlobalImpactCounter}
        isDemo={true}
      />
    </div>
  );
};
