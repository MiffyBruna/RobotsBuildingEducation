import ChatGPT from "./ChatGPT";
import isEmpty from "lodash/isEmpty";

export const ChatGptWrapper = ({
  uiStateReference,
  userStateReference,
  globalStateReference,
  handleScheduler,
  handleZap,
}) => {
  // Early return if patreonObject is empty and isDemo is false
  if (isEmpty(uiStateReference.patreonObject) && !uiStateReference.isDemo) {
    return null;
  }

  // Extract relevant props
  const { currentPathForAnalytics, patreonObject, moduleName } =
    uiStateReference;

  const {
    userDocumentReference,
    databaseUserDocument,
    setDatabaseUserDocument,
  } = userStateReference;

  const {
    globalDocumentReference,
    globalImpactCounter,
    setGlobalImpactCounter,
  } = globalStateReference;

  // Main component rendering
  return (
    <div style={{ width: "100%" }}>
      <ChatGPT
        currentPath={currentPathForAnalytics}
        patreonObject={patreonObject}
        userDocumentReference={userDocumentReference}
        databaseUserDocument={databaseUserDocument}
        setDatabaseUserDocument={setDatabaseUserDocument}
        globalDocumentReference={globalDocumentReference}
        globalImpactCounter={globalImpactCounter}
        setGlobalImpactCounter={setGlobalImpactCounter}
        moduleName={moduleName}
        handleScheduler={handleScheduler}
        handleZap={handleZap}
        userStateReference={userStateReference}
        globalStateReference={globalStateReference}
      />
    </div>
  );
};
