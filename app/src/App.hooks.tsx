import { useEffect, useState } from "react";
import React from "react";
import { LightningAddress } from "@getalby/lightning-tools";
import { Button, Modal, launchModal } from "@getalby/bitcoin-connect-react";
import toast, { Toaster } from "react-hot-toast";

export const useAuthState = () => {
  const [isSignedIn, setIsSignedIn] = useState("start");
  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);
  const [userAuthObject, setUserAuthObject] = useState({});

  let authStateReference = {
    isSignedIn,
    setIsSignedIn,
    isZeroKnowledgeUser,
    setIsZeroKnowledgeUser,
    userAuthObject,
    setUserAuthObject,
  };

  return { authStateReference };
};

export const useUserDocument = () => {
  const [databaseUserDocument, setDatabaseUserDocument] = useState({});
  const [userDocumentReference, setUserDocumentReference] = useState({});
  const [
    usersEmotionsCollectionReference,
    setUsersEmotionsCollectionReference,
  ] = useState({});

  const [usersEmotionsFromDB, setUsersEmotionsFromDB] = useState([]);

  let userStateReference = {
    databaseUserDocument,
    setDatabaseUserDocument,
    userDocumentReference,
    setUserDocumentReference,
    usersEmotionsCollectionReference,
    setUsersEmotionsCollectionReference,
    usersEmotionsFromDB,
    setUsersEmotionsFromDB,
  };

  return { userStateReference };
};

export const useGlobalStates = () => {
  const [globalDocumentReference, setGlobalDocumentReference] = useState({});
  const [globalImpactCounter, setGlobalImpactCounter] = useState(0);
  const [globalScholarshipCounter, setGlobalScholarshipCounter] = useState(0);
  const [globalReserveObject, setGobalReserveObject] = useState({});

  let globalStateReference = {
    globalDocumentReference,
    setGlobalDocumentReference,
    globalImpactCounter,
    setGlobalImpactCounter,
    globalScholarshipCounter,
    setGlobalScholarshipCounter,
    globalReserveObject,
    setGobalReserveObject,
  };

  return { globalStateReference };
};

export const useUIStates = () => {
  const [patreonObject, setPatreonObject] = useState({});
  const [currentPath, setCurrentPath] = useState("");
  const [currentPathForAnalytics, setCurrentPathForAnalytics] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [pathSelectionAnimationData, setPathSelectionAnimationData] = useState(
    {}
  );
  const [visibilityMap, setVisibilityMap] = useState({});
  const [isDemo, setIsDemo] = useState(true);
  const [proofOfWorkFromModules, setProofOfWorkFromModules] = useState(0);

  let uiStateReference = {
    patreonObject,
    setPatreonObject,
    currentPath,
    setCurrentPath,
    currentPathForAnalytics,
    setCurrentPathForAnalytics,
    moduleName,
    setModuleName,
    pathSelectionAnimationData,
    setPathSelectionAnimationData,
    visibilityMap,
    setVisibilityMap,
    isDemo,
    setIsDemo,
    proofOfWorkFromModules,
    setProofOfWorkFromModules,
  };

  return { uiStateReference };
};

export const useZap = (
  depositAmount = 1,
  depositMessage = "Robots Building Education Lecture"
) => {
  const [invoice, setInvoice] = useState<string | undefined>(undefined);
  const [preimage, setPreimage] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        // robots - for real use
        // const ln = new LightningAddress("levitatingnight182471@getalby.com");

        // test account (things prices at 1 zap)
        const ln = new LightningAddress("talentedfriendship526161@getalby.com");

        await ln.fetch();
        setInvoice(
          (
            await ln.requestInvoice({
              satoshi: depositAmount,
              comment: depositMessage,
            })
          ).paymentRequest
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  let payInvoice = async () => {
    try {
      if (!window.webln || !window.webln) {
        throw new Error("Please connect your wallet");
      }
      if (!invoice) {
        throw new Error("No invoice available");
      }
      const result = await window.webln.sendPayment(invoice);

      if (!result?.preimage) {
        throw new Error("Payment failed. Please try again");
      }

      return result;
    } catch (error) {
      console.log("error", error);
      console.log("{error}", { error });
      alert(
        "Unable to complete Bitcoin transaction. Check your connection, transaction limits or your wallet's balance."
      );
    }
  };

  return payInvoice;
};
