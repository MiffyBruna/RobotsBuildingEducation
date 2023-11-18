import { useEffect, useState } from "react";

import "./App.css";

import { Paths } from "./Paths/Paths";
import {
  controlPathVisibilityMap,
  RoxanaLoadingAnimation,
} from "./common/uiSchema";
import { Collections } from "./Paths/Collections/Collections";
import { Header } from "./Header/Header";
import { Passcode } from "./Passcode/Passcode";
import { auth, analytics } from "./database/firebaseResources";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";

import { logEvent } from "firebase/analytics";

import {
  useAuthState,
  useGlobalStates,
  useUIStates,
  useUserDocument,
} from "./App.hooks";
import {
  checkActiveUserStates,
  checkSignInStates,
  handleUserAuthentication,
  sortEmotionsByDate,
} from "./App.compute";
import { validPasscodes } from "./App.constants";
import { AuthDisplay } from "./AuthDisplay/AuthDisplay";
import { LectureHeader } from "./LectureHeader/LectureHeader";
import { ChatGptWrapper } from "./ChatGPT/ChatGptWrapper";
import { ProofOfWorkWrapper } from "./ProofOfWork/ProofOfWorkWrapper";
import { words } from "./common/words/words";

logEvent(analytics, "page_view", {
  page_location: "https://learn-robotsbuildingeducation.firebaseapp.com/",
});

function App() {
  // handles passcode, google sign in and registered user info
  const { authStateReference } = useAuthState();

  // handles database data from the "users" collection
  let { userStateReference } = useUserDocument();

  // handles database data from the "global" collection
  let { globalStateReference } = useGlobalStates();

  // handles ui data
  let { uiStateReference } = useUIStates();

  // handles language switching
  let [languageMode, setLanguageMode] = useState(words["English"]);

  /**
   *
   * @param event click event
   * @description a function used to navigate the app
   * - adds event to analytics
   * - handles the selection and visibility of Engineer, Creator and Dealer paths.
   * - clears any existing patreon and module content displayed in the app
   * - creates a small animation for the path button selected
   *
   */
  const handlePathSelection = (event) => {
    logEvent(analytics, "select_item", {
      item_list_id: `RO.B.E_paths|${event.target.id}`,
      item_list_name: `RO.B.E_paths|${event.target.id}`,
      items: [
        {
          item_id: event.target.id,
          item_name: event.target.id,
        },
      ],
    });
    uiStateReference.setVisibilityMap(
      controlPathVisibilityMap(uiStateReference.visibilityMap, event.target.id)
    );
    uiStateReference.setCurrentPath(event.target.id);
    uiStateReference.setCurrentPathForAnalytics(event.target.id);

    uiStateReference.setPatreonObject({});
    uiStateReference.setModuleName("");

    uiStateReference.setPathSelectionAnimationData({
      boxShadow: "1px 2px 14px 8px rgba(0,255,140,1)",
      path: event.target.id,
    });
  };

  /**
   *
   * @param module the block of data containing content and information about a lecture
   * @param moduleName the name of the lecture selected
   * @description a function used to navigate the app
   * - adds event to analytics
   * - handles the selection and visibility of the lecture or module selected
   * - clears the path selected
   *
   */
  const handleModuleSelection = (module, moduleName) => {
    // can redefine this as module object rather than patreon object. low priority
    uiStateReference.setPatreonObject(module);

    logEvent(analytics, "select_item", {
      item_list_id: `RO.B.E_module|${moduleName}`,
      item_list_name: `RO.B.E_module|${moduleName}`,
      items: [
        {
          item_id: moduleName,
          item_name: moduleName,
        },
      ],
    });
    uiStateReference.setModuleName(moduleName);
    uiStateReference.setCurrentPath("");
  };

  /**
   *
   * @param event A typing event
   * @description a process that checks when a user has submitted a valid passcode
   * - stores passcode to local storage
   * - clears patreon lecture selected
   * - sets success password flag to true
   * - logs event to anlytics
   */
  const handleZeroKnowledgePassword = (event) => {
    if (validPasscodes.includes(event.target.value)) {
      localStorage.setItem("patreonPasscode", event.target.value);
      uiStateReference.setPatreonObject({});
      authStateReference.setIsZeroKnowledgeUser(true);
      logEvent(analytics, "login", { method: "zeroKnowledge" });
    }
  };

  /**
   *
   * @param collectionRef A collection object used to retrieve or processdatabase data
   * @description gets each emotion document in a user's collection of emotions and prepares them for display
   * - gets user's data from database
   * - sorts emotions by timestamp date
   * - sets emotions for display
   */
  let updateUserEmotions = async (collectionRef) => {
    await getDocs(collectionRef).then((querySnapshot) => {
      let emotionSet = [];

      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          emotionSet.push(doc.data());
        } else {
        }
      });
      emotionSet = sortEmotionsByDate(emotionSet);
      userStateReference.setUsersEmotionsFromDB(emotionSet);
    });
  };

  /**
   * @description check if the user has been logged in
   */

  const connectDID = async () => {
    const { web5, did: aliceDid } = await Web5.connect();

    console.log("DID", aliceDid);
  };
  useEffect(() => {
    connectDID();

    const storedPasscode = localStorage.getItem("patreonPasscode");
    authStateReference.setIsZeroKnowledgeUser(
      validPasscodes.includes(storedPasscode)
    );

    onAuthStateChanged(auth, (user) => {
      if (user?.displayName) {
        handleUserAuthentication(user, {
          authStateReference,
          uiStateReference,
          userStateReference,
          globalStateReference,
          updateUserEmotions,
        }).catch((error) => {
          console.error("Error handling user authentication:", error);
        });
      } else {
        authStateReference.setIsSignedIn(false);
        uiStateReference.setIsDemo(true);
      }
    });
  }, []);

  // console.log("language mode", languageMode);

  if (typeof authStateReference.isSignedIn == "string") {
    return <RoxanaLoadingAnimation />;
  }

  return (
    <>
      <div className="App" style={{ minHeight: "100vh" }}>
        <Header languageMode={languageMode} setLanguageMode={setLanguageMode} />

        {checkSignInStates({ authStateReference }) ? <AuthDisplay /> : null}

        {!authStateReference.isZeroKnowledgeUser ? (
          <Passcode
            patreonObject={uiStateReference.patreonObject}
            handleZeroKnowledgePassword={handleZeroKnowledgePassword}
          />
        ) : null}

        {authStateReference.isZeroKnowledgeUser &&
        checkActiveUserStates({ userStateReference, authStateReference }) ? (
          <>
            <Paths
              handlePathSelection={handlePathSelection}
              pathSelectionAnimationData={
                uiStateReference.pathSelectionAnimationData
              }
            />

            <Collections
              handleModuleSelection={handleModuleSelection}
              currentPath={uiStateReference.currentPath}
            />

            <LectureHeader uiStateReference={uiStateReference} />

            <ChatGptWrapper
              uiStateReference={uiStateReference}
              userStateReference={userStateReference}
              globalStateReference={globalStateReference}
            />
          </>
        ) : null}
      </div>

      {checkActiveUserStates({ userStateReference, authStateReference }) ? (
        <ProofOfWorkWrapper
          userStateReference={userStateReference}
          authStateReference={authStateReference}
          globalStateReference={globalStateReference}
          handlePathSelection={handlePathSelection}
          updateUserEmotions={updateUserEmotions}
          uiStateReference={uiStateReference}
        />
      ) : null}
    </>
  );
}

export default App;
