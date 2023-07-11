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
  globalReserve,
  handlePathSelection,
  isDemo,
}) => {
  const [isImpactWalletOpen, setIsImpactWalletOpen] = useState(false);

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
          globalReserve={globalReserve}
          globalScholarshipCounter={globalScholarshipCounter}
          isDemo={isDemo}
        />
      </div>
    );
  }

  console.log("database user doc", databaseUserDocument);

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
        globalReserve={globalReserve}
        globalScholarshipCounter={globalScholarshipCounter}
      />
      {/* <a onClick={() => auth.signOut()}>Sign-out</a> */}
    </div>
  );
};
