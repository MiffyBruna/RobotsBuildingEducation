import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { renderWithTooltip, ui, uiPaths } from "../../common/uiSchema";
import { auth } from "../../database/firebaseResources";
import {
  StyledCollectionContainer,
  StyledModule,
} from "../../styles/lazyStyles";

import { InfiniteKnowledgeEngine9001 } from "./InfiniteKnowlegeEngine9001/InfiniteKnowlegeEngine9001";
import { Module } from "./Module/Module";

export const Collections = ({
  handleModuleSelection,
  visibilityMap,
  currentPath,

  patreonObject,
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  displayName,
  computePercentage,
  isDemo,
  moduleName,
  globalModulesCollectionReference,
  globalUserModulesFromDB,
  documentProcForGlobalModules,
  usersCoursesCollectionReference,
  userAuthObject,
}): JSX.Element | null => {
  let [
    isInfiniteKnowledgeEngine9001open,
    setIsInfiniteKnowledgeEngine9001open,
  ] = useState(false);

  let [hasZeroKnowledgeAccess, setHasZeroKnowledgeAccess] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("infiniteKnowledgePasscode") ===
        import.meta.env.VITE_INFINITE_KNOWLEDGE_PASSCODE ||
      localStorage.getItem("infiniteKnowledgePasscode") ===
        import.meta.env.VITE_SHEILF
    ) {
      setHasZeroKnowledgeAccess(true);
    } else {
      setHasZeroKnowledgeAccess(false);
    }
  }, []);

  if (currentPath) {
    let path = ui(globalUserModulesFromDB)[currentPath]; // Engineer: {}

    let collections = Object.keys(path); // []]

    let display = collections.map((collection) => {
      let modules = Object.keys(path[collection]);

      if (modules?.length) {
        return (
          <div>
            <br />
            <h3>{collection}</h3>

            <br />
            <div></div>
            <StyledCollectionContainer>
              {modules.map((module) => (
                <Module
                  path={currentPath}
                  collection={collection}
                  module={module}
                  handleModuleSelection={handleModuleSelection}
                  globalUserModulesFromDB={globalUserModulesFromDB}
                />
              ))}
            </StyledCollectionContainer>
          </div>
        );
      }
    });

    let handleZeroKnowledge = (event) => {
      if (
        event.target.value ===
          import.meta.env.VITE_INFINITE_KNOWLEDGE_PASSCODE ||
        event.target.value === import.meta.env.VITE_SHEILF
      ) {
        setHasZeroKnowledgeAccess(true);
        localStorage.setItem("infiniteKnowledgePasscode", event.target.value);
      }
    };

    return (
      <>
        <div
          style={{
            transition: "0.23s all ease-in-out",
          }}
        >
          <br />
          {currentPath === "RO.₿.E" && !hasZeroKnowledgeAccess ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%" }}>
                <h3>access IKE9001</h3>
              </div>
              <div style={{ width: 250 }}>
                <InputGroup size="lg">
                  {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}

                  <Form.Control
                    // aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleZeroKnowledge}
                  />
                </InputGroup>
              </div>
            </div>
          ) : null}
          <br />

          {display}

          {currentPath === "RO.₿.E" && hasZeroKnowledgeAccess ? (
            <Button
              variant="light"
              onClick={() => setIsInfiniteKnowledgeEngine9001open(true)}
            >
              Activate InfiniteKnowledgeEngine9001
            </Button>
          ) : null}
        </div>

        <InfiniteKnowledgeEngine9001
          currentPath={currentPath}
          patreonObject={patreonObject}
          userDocumentReference={userDocumentReference}
          databaseUserDocument={databaseUserDocument}
          setDatabaseUserDocument={setDatabaseUserDocument}
          globalDocumentReference={globalDocumentReference}
          globalImpactCounter={globalImpactCounter}
          setGlobalImpactCounter={setGlobalImpactCounter}
          displayName={auth?.currentUser?.displayName || "@DemoRobots"}
          computePercentage={computePercentage}
          isDemo={isDemo}
          moduleName={moduleName}
          setIsInfiniteKnowledgeEngine9001open={
            setIsInfiniteKnowledgeEngine9001open
          }
          isInfiniteKnowledgeEngine9001open={isInfiniteKnowledgeEngine9001open}
          globalModulesCollectionReference={globalModulesCollectionReference}
          documentProcForGlobalModules={documentProcForGlobalModules}
        />
      </>
    );
  }
};
