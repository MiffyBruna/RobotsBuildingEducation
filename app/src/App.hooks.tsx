import { useEffect, useState } from "react";
import React from "react";
import { LightningAddress } from "@getalby/lightning-tools";
import { Button, Modal, launchModal } from "@getalby/bitcoin-connect-react";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "./Store";

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
  const [globalLevelCounter, setGlobalLevelCounter] = useState(0);
  const [globalLeaderName, setGlobalLeaderName] = useState("RO.B.E");
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
    globalLevelCounter,
    setGlobalLevelCounter,
    globalLeaderName,
    setGlobalLeaderName,
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

  let payInvoice = async () => {
    console.log("running pay invoice");
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
      console.log("{error}", { error });
      console.log("error", error);
      alert(
        "Unable to complete Bitcoin transaction. Check your connection, transaction limits or your wallet's balance."
      );
    }
  };

  let createZap = async () => {
    try {
      // robots - for real use
      const ln = new LightningAddress("levitatingnight182471@getalby.com");

      // test account (things prices at 1 zap)
      // const ln = new LightningAddress("talentedfriendship526161@getalby.com");
      // ln.zap
      await ln.fetch();

      let invoiceResult = (
        await ln.requestInvoice({
          satoshi: 1,
          comment: "invoice requested",
        })
      ).paymentRequest;

      console.log("invoice result", invoiceResult);

      setInvoice(invoiceResult);
      console.log("invoice?", invoice);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // mountInvoice();
    if (invoice) {
      payInvoice();
    }
  }, [invoice]);

  // console.log("invoice result", invoice);
  return createZap;
};

export const useZapAnimation = () => {
  const setShowZap = useStore((state) => state.setShowZap);

  let animation = () => {
    setShowZap(true);
    setTimeout(() => {
      // document.getElementById("zap-container").style.display = "none";
      setShowZap(false);
    }, 2000);
  };
  // document.getElementById("zap-container").style.display = "block";

  // setTimeout(() => {
  //   console.log("do nothing");
  //   // star.style.opacity = 0;
  //   // star.style.transform = "none";
  // }, 2 * 1000);

  // Randomize animation properties for each star
  // document.querySelectorAll(".zap").forEach((star) => {
  //   const scale = Math.random() * 1.5; // Random scale
  //   const x = Math.random() * 200 - 100; // Random x-position
  //   const y = Math.random() * 200 - 100; // Random y-position
  //   const duration = Math.random() * 1 + 0.5; // Random duration

  //   // star.style.textShadow = "25px 25px 25px gold";

  //   star.style.opacity = 1;
  //   star.style.transform = `scale(${scale}) translate(${x}px, ${y}px)`;
  //   star.style.transition = `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`;

  //   // Reset the star after the animation
  //   setTimeout(() => {
  //     star.style.opacity = 0;
  //     star.style.transform = "none";
  //   }, duration * 1000);
  // });

  // Reset the whole animation after some time

  return animation;
};
