import { auth } from "../database/firebaseResources";
import { ProofOfWork } from "./ProofOfWork";

// Define the style for the container
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(28,28,30,0.75)",
};

// Calculate the compute percentage
const computePercentage = (userImpact, proofOfWork) => {
  return (userImpact || 0) / (proofOfWork || 77500);
};

export const ProofOfWorkWrapper = ({
  userStateReference,
  globalStateReference,
  authStateReference,
  handlePathSelection,
  updateUserEmotions,
  uiStateReference,
  showStars,
  showZap,
  handleZeroKnowledgePassword,
}) => {
  const userImpact = userStateReference.databaseUserDocument?.impact;
  const proofOfWork = uiStateReference.proofOfWorkFromModules;
  const calculatedPercentage = computePercentage(userImpact, proofOfWork);

  // Check if the user is eligible to see the ProofOfWork component
  const isUserEligible =
    userStateReference.databaseUserDocument &&
    authStateReference.isSignedIn &&
    authStateReference.isZeroKnowledgeUser;

  if (!isUserEligible) return null;

  // Extract properties for easier readability
  const { userAuthObject, isSignedIn, isZeroKnowledgeUser } =
    authStateReference;

  const {
    databaseUserDocument,
    usersEmotionsCollectionReference,
    usersEmotionsFromDB,
  } = userStateReference;

  const { globalImpactCounter, globalScholarshipCounter, globalReserveObject } =
    globalStateReference;

  const { isDemo } = uiStateReference;

  return (
    <div style={containerStyle}>
      <ProofOfWork
        userAuthObject={userAuthObject}
        displayName={auth?.currentUser?.displayName}
        databaseUserDocument={databaseUserDocument}
        computePercentage={calculatedPercentage}
        globalImpactCounter={globalImpactCounter}
        usersEmotionsCollectionReference={usersEmotionsCollectionReference}
        usersEmotionsFromDB={usersEmotionsFromDB}
        globalScholarshipCounter={globalScholarshipCounter}
        handlePathSelection={handlePathSelection}
        globalReserveObject={globalReserveObject}
        updateUserEmotions={updateUserEmotions}
        isDemo={isDemo}
        userStateReference={userStateReference}
        globalStateReference={globalStateReference}
        showStars={showStars}
        showZap={showZap}
        handleZeroKnowledgePassword={handleZeroKnowledgePassword}
      />
    </div>
  );
};
