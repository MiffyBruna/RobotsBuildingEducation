import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import isEmpty from 'lodash/isEmpty';
import { updateDoc } from "firebase/firestore";
import { database } from "./database/firebaseResources";
import { getGlobalImpact } from "./common/uiSchema";
import { decentralizedEducationTranscript } from "./App.constants";

export const sortEmotionsByDate = (usersEmotionsFromDB) => {
    let insertTestDate = usersEmotionsFromDB;
    
    let sortedDates = insertTestDate?.length > 0
      ? insertTestDate?.sort((a, b) => a?.timestamp - b?.timestamp)
      : [];

      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const groupedByMonthYear = {};

      sortedDates.forEach(item => {
        const date = new Date(item.timestamp);
        const month = date.getMonth(); // JavaScript months are 0-based
        const year = date.getFullYear();
        
        const key = `${monthNames[month]} ${year}`;


        
        if (!groupedByMonthYear[key]) {
          groupedByMonthYear[key] = [];
        }
        
        groupedByMonthYear[key].push(item);
      });
      

      return groupedByMonthYear

      

  };
  
export const setupUserDocument = async (docRef, userStateReference, user) => {
    const res = await getDoc(docRef);

    if (!res?.data()) {
      await setDoc(docRef, { impact: 0, userAuthObj: { uid: user.uid }, profile: decentralizedEducationTranscript });
      const response = await getDoc(docRef);
      userStateReference.setDatabaseUserDocument(response.data());
    } else {
        userStateReference.setDatabaseUserDocument(res.data());
    }
  };
  
export const updateGlobalCounters = async (globalImpactDocRef, globalReserveDocRef, globalStateReference) => {
    const [globalImpactRes, globalReserveRes] = await Promise.all([
      getDoc(globalImpactDocRef),
      getDoc(globalReserveDocRef),
    ]);
  
    globalStateReference.setGlobalLeaderName(globalImpactRes.data().discord);
    globalStateReference.setGlobalLevelCounter(globalImpactRes.data().level);
    globalStateReference.setGlobalImpactCounter(globalImpactRes.data().total);
    globalStateReference.setGlobalScholarshipCounter(globalReserveRes.data().scholarships);
    globalStateReference.setGobalReserveObject(globalReserveRes.data());
  };

export const handleUserAuthentication = async (user, appFunctions) => {
    appFunctions.authStateReference.setUserAuthObject(user);
    appFunctions.authStateReference.setIsSignedIn(true);
    appFunctions.uiStateReference.setIsDemo(false);
  
    const docRef = doc(database, "users", user.uid);
    const globalImpactDocRef = doc(database, "global", "impact");
    const globalReserveDocRef = doc(database, "global", "reserve");
  
    await setupUserDocument(docRef, appFunctions.userStateReference, user);
    await updateGlobalCounters(globalImpactDocRef, globalReserveDocRef, appFunctions.globalStateReference);
  
    appFunctions.userStateReference.setUserDocumentReference(docRef);
    const usersEmotionsCollectionRef = collection(docRef, "emotions");
    
    appFunctions.globalStateReference.setGlobalDocumentReference(globalImpactDocRef);
    appFunctions.userStateReference.setUsersEmotionsCollectionReference(usersEmotionsCollectionRef);
    appFunctions.updateUserEmotions(usersEmotionsCollectionRef);
    appFunctions.uiStateReference.setProofOfWorkFromModules(getGlobalImpact());
};


export const checkSignInStates = ({ authStateReference }) => {
  if( typeof authStateReference.isSignedIn === "string" || (!authStateReference.isSignedIn && authStateReference.isZeroKnowledgeUser))
    return true
  else
    return false
}


export const checkActiveUserStates = ({ userStateReference, authStateReference }) =>{
  if(userStateReference.databaseUserDocument && authStateReference.isSignedIn && authStateReference.isZeroKnowledgeUser)
    return true
  else
    return false
}

export const updateImpact = async (
  impact,
  userStateReference,
  globalStateReference,
) => {

  const {databaseUserDocument, userDocumentReference, setDatabaseUserDocument} = userStateReference;
  const { globalImpactCounter,globalDocumentReference, setGlobalImpactCounter} = globalStateReference;
 
  if (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) {


    await updateDoc(userDocumentReference, {
      impact: databaseUserDocument?.impact + impact,
    });

    await updateDoc(globalDocumentReference, {
      total: globalImpactCounter + impact,
    });

    setDatabaseUserDocument((prevDoc) => ({
      ...prevDoc,
      impact: prevDoc?.impact + impact,
    }));

    setGlobalImpactCounter((prevCounter) => prevCounter + impact);
  } else {
  }
};

export const updateLevel = async (
  level,
  discordTag,
  userStateReference,
  globalStateReference,
) => {

  const {databaseUserDocument, userDocumentReference, setDatabaseUserDocument} = userStateReference;
  const { globalImpactCounter,globalDocumentReference, setGlobalLevelCounter, setGlobalLeaderName} = globalStateReference;
 
  if (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) {


    await updateDoc(userDocumentReference, {
      level: level+1,
    });


    if(level+1 >= globalStateReference?.globalLevelCounter){
      await updateDoc(globalDocumentReference, {
        level: level+1,
        discord: discordTag
      });

      setGlobalLevelCounter(level+1);
      setGlobalLeaderName(discordTag)
    }
    

    setDatabaseUserDocument((prevDoc) => ({
      ...prevDoc,
      level: level+1,
    }));

    // setGlobalImpactCounter((prevCounter) => prevCounter + impact);
  } else {
  }
};

