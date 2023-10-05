import { auth } from "../database/firebaseResources";
import { ProofOfWork } from "./ProofOfWork";

export const ProofOfWorkWrapper = ({
  userStateReference,
  authStateReference,
  globalStateReference,
  handlePathSelection,
  updateUserEmotions,
  uiStateReference,
}) => {
  let computePercentage =
    (userStateReference.databaseUserDocument.impact || 0) /
    (uiStateReference.proofOfWorkFromModules || 77500);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(28,28,30,0.75)",
        // border: "5px solid red",
        // height: "75px",
      }}
    >
      {userStateReference.databaseUserDocument &&
      authStateReference.isSignedIn &&
      authStateReference.isZeroKnowledgeUser ? (
        <ProofOfWork
          userAuthObject={authStateReference.userAuthObject}
          displayName={auth?.currentUser?.displayName}
          databaseUserDocument={userStateReference.databaseUserDocument}
          computePercentage={computePercentage}
          globalImpactCounter={globalStateReference.globalImpactCounter}
          usersEmotionsCollectionReference={
            userStateReference.usersEmotionsCollectionReference
          }
          usersEmotionsFromDB={userStateReference.usersEmotionsFromDB}
          globalScholarshipCounter={
            globalStateReference.globalScholarshipCounter
          }
          handlePathSelection={handlePathSelection}
          globalReserveObject={globalStateReference.globalReserveObject}
          updateUserEmotions={updateUserEmotions}
          isDemo={uiStateReference.isDemo}
        />
      ) : null}
    </div>
  );
};
