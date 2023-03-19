import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { renderWithTooltip, ui, uiPaths } from "../../common/uiSchema";
import { auth } from "../../database/firebaseResources";
import {
  StyledCollectionContainer,
  StyledModule,
} from "../../styles/lazyStyles";
import { ImpactGenerator7500 } from "./ImpactGenerator7500/ImpactGenerator7500";
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

  
}): JSX.Element | null => {
  let [isImpactGenerator7500open, setIsImpactGenerator7500open] = useState(false);
  let [hasZeroKnowledgeAccess, setHasZeroKnowledgeAccess] = useState(false);
  let [handle]

  if (currentPath) {
    let path = ui()[currentPath]; // Engineer: {}
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
                />
              ))}
            </StyledCollectionContainer>
          </div>
        );
      }
    });


    return (
      <>
      <div
        style={{
          transition: "0.23s all ease-in-out",
          // opacity: isCodingVisible ? 1 : 0,
          // visibility: isCodingVisible ? "visible" : "hidden",
        }}
      >
        <br />
              {currentPath === '26th Street Labs' !hasZeroKnowledgeAccess ? (
                <InputGroup size="lg">
                  {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}
        
                  <Form.Control
                    // aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleSubjectTitleChange}
                  />
        
                </InputGroup>) : null}
        {currentPath === '26th Street Labs' && hasZeroKnowledgeAccess ? <Button onClick={() => setIsImpactGenerator7500open(true)}>Activate ImpactGenerator7500</Button> : null}
        {/* {renderWithTooltip(
          <Button variant="primary">🔥🌱💰💎</Button>,
          <div>
            {" "}
            🌱 = new &nbsp; <br />
            💰= high value &nbsp; <br />
            💎 = rare value&nbsp;
            <br />
            &nbsp;🔥 = under construction
            <br />
            <br />
          </div>,
          "right"
        )} */}
        {display}
      </div>
      <ImpactGenerator7500 

                   currentPath={currentPath}
                patreonObject={patreonObject}
                userDocumentReference={userDocumentReference}
                databaseUserDocument={databaseUserDocument}
                setDatabaseUserDocument={setDatabaseUserDocument}
                globalDocumentReference={globalDocumentReference}
                globalImpactCounter={globalImpactCounter}
                setGlobalImpactCounter={setGlobalImpactCounter}
                displayName={
                  auth?.currentUser?.displayName || "Demo Robots"
                }
                computePercentage={computePercentage}
                isDemo={isDemo}
                moduleName={moduleName}
      
      setIsImpactGenerator7500open={setIsImpactGenerator7500open} 
      isImpactGenerator7500open={isImpactGenerator7500open}
      />
      </>
    );
  }
};
