import { useState } from "react";
import { ImpactWallet } from "./ImpactWallet/ImpactWallet";

export const ProofOfWork = ({
  globalScholarshipCounter,
  userAuthObject,
  displayName,
  databaseUserDocument,
  computePercentage,
  globalImpactCounter,
  handlePathSelection,
  globalReserveObject,
  usersEmotionsCollectionReference,
  usersEmotionsFromDB,
  updateUserEmotions,
  isDemo,
  //some redundancy since I haven't refactored these values yet.
  userStateReference,
  showStars,
}) => {
  const [isImpactWalletOpen, setIsImpactWalletOpen] = useState(false);
  const [isEmotionalIntelligenceOpen, setIsEmotionalIntelligenceOpen] =
    useState(false);

  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  if (isDemo) {
    return null;
  }

  return (
    <div
      style={{
        border: "1px solid #1C1C1E",

        padding: 6,
        backgroundColor: "#1C1C1E",

        maxWidth: "600px",
        minWidth: "300px",
        textAlign: "center",
        width: "100%",
      }}
    >
      {/* 
      Need to refactor this. 
      Impact wallet should only be the modal
      EmotionalIntelligence is not a child of Impact Wallet. */}
      <div style={{ marginBottom: 6 }}>👾 {displayName}</div>
      <ImpactWallet
        handlePathSelection={handlePathSelection}
        databaseUserDocument={databaseUserDocument}
        computePercentage={computePercentage}
        globalImpactCounter={globalImpactCounter}
        isImpactWalletOpen={isImpactWalletOpen}
        setIsImpactWalletOpen={setIsImpactWalletOpen}
        userAuthObject={userAuthObject}
        globalScholarshipCounter={globalScholarshipCounter}
        globalReserveObject={globalReserveObject}
        setIsEmotionalIntelligenceOpen={setIsEmotionalIntelligenceOpen}
        isEmotionalIntelligenceOpen={isEmotionalIntelligenceOpen}
        usersEmotionsCollectionReference={usersEmotionsCollectionReference}
        usersEmotionsFromDB={usersEmotionsFromDB}
        updateUserEmotions={updateUserEmotions}
        setIsSchedulerOpen={setIsSchedulerOpen}
        isSchedulerOpen={isSchedulerOpen}
        userStateReference={userStateReference}
        showStars={showStars}
      />
    </div>
  );
};
