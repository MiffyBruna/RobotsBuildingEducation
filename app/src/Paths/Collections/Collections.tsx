import { useEffect, useState } from "react";
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
  globalModulesCollectionReference,
  globalUserModulesFromDB,
  documentProcForGlobalModules

  
}): JSX.Element | null => {
  let [isImpactGenerator7500open, setIsImpactGenerator7500open] = useState(false);
  let [hasZeroKnowledgeAccess, setHasZeroKnowledgeAccess] = useState(false);
    useEffect(()=>{
      if(localStorage.getItem("infiniteKnowledgePasscode") === import.meta.env.VITE_INFINITE_KNOWLEDGE_PASSCODE || localStorage.getItem("infiniteKnowledgePasscode") === import.meta.env.VITE_SHEILF){
        setHasZeroKnowledgeAccess(true);
      }else{
        setHasZeroKnowledgeAccess(false);
      }
    }, [])

  if (currentPath) {
    console.log("globals", globalUserModulesFromDB);
    let path = ui(globalUserModulesFromDB)[currentPath]; // Engineer: {}
 
    let collections = Object.keys(path); // []]

    console.log("Path", path);
    console.log("mods", )
    let display = collections.map((collection) => {
    let modules = Object.keys(path[collection]);
    console.log("mods", modules)

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

    let handlZeroKnowledge = (event) => {

      if(event.target.value === import.meta.env.VITE_INFINITE_KNOWLEDGE_PASSCODE || event.target.value === import.meta.env.VITE_SHEILF){
        setHasZeroKnowledgeAccess(true);
        localStorage.setItem("infiniteKnowledgePasscode", event.target.value);
      }
    }



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
              {currentPath === 'RO.₿.E' && !hasZeroKnowledgeAccess ? (
                <div>
                  <div style={{width: 475}}>
                <h3>access InfiniteKnowledgEngine9000</h3>
                </div>
                 <div style={{width: 250}}>
                <InputGroup size="lg">
                  {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}
        
                  <Form.Control
                    // aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handlZeroKnowledge}
                  />
        
                </InputGroup></div></div>) : null}
        {currentPath === 'RO.₿.E' && hasZeroKnowledgeAccess ? <Button variant="light" onClick={() => setIsImpactGenerator7500open(true)}>Activate InfiniteKnowledgeEngine9000</Button> : null}
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
                  auth?.currentUser?.displayName || "@DemoRobots"
                }
                computePercentage={computePercentage}
                isDemo={isDemo}
                moduleName={moduleName}
      
      setIsImpactGenerator7500open={setIsImpactGenerator7500open} 
      isImpactGenerator7500open={isImpactGenerator7500open}
      globalModulesCollectionReference={globalModulesCollectionReference}
      documentProcForGlobalModules={documentProcForGlobalModules}
      />
      </>
    );
  }
};
