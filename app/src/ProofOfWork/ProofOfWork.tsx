import { doc } from "firebase/firestore";
import { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { getGlobalImpact, renderWithTooltip } from "../common/uiSchema";
import { database } from "../database/firebaseResources";
import { ImpactWallet } from "./ImpactWallet/ImpactWallet";

export const ProofOfWork = ({
  globalScholarshipCounter,
  userAuthObject,
  displayName,
  databaseUserDocument,
  computePercentage,
  globalImpactCounter,
  isModule = false,
  usersModulesCollectionReference = null,
  usersModulesFromDB,

  handlePathSelection,
  isDemo,
  globalReserveObject,
  usersEmotionsCollectionReference,
  usersEmotionsFromDB,
  documentProcForUsersEmotions,
}) => {
  const [isImpactWalletOpen, setIsImpactWalletOpen] = useState(false);
  const [isEmotionalIntelligenceOpen, setIsEmotionalIntelligenceOpen] =
    useState(false);

  if (displayName === "@DemoRobots") {
    return (
      <div
        style={{
          border: "1px solid #1C1C1E",
          width: "fit-content",

          backgroundColor: "#1C1C1E",
          marginBottom: "48px",
          maxWidth: "600px",
          minWidth: "300px",
          padding: 12,
          textAlign: "center",
        }}
      >
        <p>👾 {displayName}</p>
        <ImpactWallet
          databaseUserDocument={databaseUserDocument}
          computePercentage={computePercentage}
          globalImpactCounter={globalImpactCounter}
          isImpactWalletOpen={isImpactWalletOpen}
          setIsImpactWalletOpen={setIsImpactWalletOpen}
          usersModulesCollectionReference={usersModulesCollectionReference}
          usersModulesFromDB={usersModulesFromDB}
          globalScholarshipCounter={globalScholarshipCounter}
          isDemo={isDemo}
          globalReserveObject={globalReserveObject}
        />
      </div>
    );
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
      <div style={{ marginBottom: 6 }}>👾 {displayName}</div>
      <ImpactWallet
        handlePathSelection={handlePathSelection}
        databaseUserDocument={databaseUserDocument}
        computePercentage={computePercentage}
        globalImpactCounter={globalImpactCounter}
        isImpactWalletOpen={isImpactWalletOpen}
        setIsImpactWalletOpen={setIsImpactWalletOpen}
        usersModulesCollectionReference={usersModulesCollectionReference}
        usersModulesFromDB={usersModulesFromDB}
        userAuthObject={userAuthObject}
        globalScholarshipCounter={globalScholarshipCounter}
        globalReserveObject={globalReserveObject}
        setIsEmotionalIntelligenceOpen={setIsEmotionalIntelligenceOpen}
        isEmotionalIntelligenceOpen={isEmotionalIntelligenceOpen}
        usersEmotionsCollectionReference={usersEmotionsCollectionReference}
        usersEmotionsFromDB={usersEmotionsFromDB}
        documentProcForUsersEmotions={documentProcForUsersEmotions}
      />
      {/* <a onClick={() => auth.signOut()}>Sign-out</a> */}
    </div>
  );
};
