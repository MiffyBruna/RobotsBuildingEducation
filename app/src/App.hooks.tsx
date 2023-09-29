import { useState } from "react";

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

  return {
    authStateReference,
    isSignedIn,
    setIsSignedIn,
    isZeroKnowledgeUser,
    setIsZeroKnowledgeUser,
    userAuthObject,
    setUserAuthObject,
  };
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

  return {
    userStateReference,
    databaseUserDocument,
    setDatabaseUserDocument,
    userDocumentReference,
    setUserDocumentReference,
    usersEmotionsCollectionReference,
    setUsersEmotionsCollectionReference,
    usersEmotionsFromDB,
    setUsersEmotionsFromDB,
  };
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

  return {
    globalStateReference,
    globalDocumentReference,
    setGlobalDocumentReference,
    globalImpactCounter,
    setGlobalImpactCounter,
    globalScholarshipCounter,
    setGlobalScholarshipCounter,
    globalReserveObject,
    setGobalReserveObject,
  };
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

  return {
    uiStateReference,
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
};
