import { useState } from "react";
import { ImpactWallet } from "./ImpactWallet/ImpactWallet";
import { RiseUpAnimation, japaneseThemePalette } from "../styles/lazyStyles";

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
  globalStateReference,
  showStars,
  showZap,
  handleZeroKnowledgePassword,
  zap,
  handleZap,
}) => {
  const [isImpactWalletOpen, setIsImpactWalletOpen] = useState(false);
  const [isEmotionalIntelligenceOpen, setIsEmotionalIntelligenceOpen] =
    useState(false);

  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  const [isCofounderOpen, setIsCofounderOpen] = useState(false);

  const [isChatFrameOpen, setIsChatFrameOpen] = useState(false);
  const [isBossModeOpen, setIsBossModeOpen] = useState(false);

  if (isDemo) {
    return null;
  }

  return (
    <div
      style={{
        border: "1px solid #1C1C1E",

        padding: 6,
        backgroundColor: showStars || showZap ? "black" : "#1C1C1E",
        // backgroundColor: "#",

        maxWidth: "600px",
        minWidth: "300px",
        textAlign: "center",
        width: "100%",
        borderRadius: 12,
      }}
    >
      {/* 
      Need to refactor this. 
      Impact wallet should only be the modal
      EmotionalIntelligence is not a child of Impact Wallet. */}

      <ImpactWallet
        displayName={displayName}
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
        showZap={showZap}
        isCofounderOpen={isCofounderOpen}
        setIsCofounderOpen={setIsCofounderOpen}
        handleZeroKnowledgePassword={handleZeroKnowledgePassword}
        globalStateReference={globalStateReference}
        isChatFrameOpen={isChatFrameOpen}
        setIsChatFrameOpen={setIsChatFrameOpen}
        isBossModeOpen={isBossModeOpen}
        setIsBossModeOpen={setIsBossModeOpen}
        zap={zap}
        handleZap={handleZap}
      />
    </div>
  );
};
