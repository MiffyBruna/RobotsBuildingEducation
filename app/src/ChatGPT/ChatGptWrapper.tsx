import ChatGPT from "./ChatGPT";
import isEmpty from "lodash/isEmpty";
export const ChatGptWrapper = ({
  uiStateReference,
  userStateReference,
  globalStateReference,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <div>
        {isEmpty(uiStateReference.patreonObject) &&
        !uiStateReference.isDemo ? null : (
          <>
            <ChatGPT
              currentPath={uiStateReference.currentPathForAnalytics}
              patreonObject={uiStateReference.patreonObject}
              userDocumentReference={userStateReference.userDocumentReference}
              databaseUserDocument={userStateReference.databaseUserDocument}
              setDatabaseUserDocument={
                userStateReference.setDatabaseUserDocument
              }
              globalDocumentReference={
                globalStateReference.globalDocumentReference
              }
              globalImpactCounter={globalStateReference.globalImpactCounter}
              setGlobalImpactCounter={
                globalStateReference.setGlobalImpactCounter
              }
              moduleName={uiStateReference.moduleName}
            />
          </>
        )}
      </div>
    </div>
  );
};
