import { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";

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
import { getDocs, updateDoc } from "firebase/firestore";

import { logEvent } from "firebase/analytics";

import {
  useAuthState,
  useGlobalStates,
  useUIStates,
  useUserDocument,
  useZap,
  useZapAnimation,
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
import { InstallPWA } from "./InstallPWA";
import { RiseUpAnimation } from "./styles/lazyStyles";
import { useStore } from "./Store";

logEvent(analytics, "page_view", {
  page_location: "https://learn-robotsbuildingeducation.firebaseapp.com/",
});

let App = ({ canInstallPwa }) => {
  const showStars = useStore((state) => state.showStars);
  const showZap = useStore((state) => state.showZap);
  const setShowStars = useStore((state) => state.setShowStars);
  const setShowZap = useStore((state) => state.setShowZap);
  const handleZap = useZapAnimation();

  let zap = useZap(1, "Robots Building Education Zap");

  const [loading, setLoading] = useState(true);
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
  // const [showStars, setShowStars] = useState(false);
  // const [showZap, setShowZap] = useState(false);

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
  const handleZeroKnowledgePassword = (
    event,
    logout = false,
    bitcoin = false
  ) => {
    if (validPasscodes.includes(event?.target?.value)) {
      localStorage.setItem("patreonPasscode", event.target.value);
      uiStateReference.setPatreonObject({});
      authStateReference.setIsZeroKnowledgeUser(true);
      logEvent(analytics, "login", { method: "zeroKnowledge" });
    }

    if (logout) {
      uiStateReference.setPatreonObject({});
      authStateReference.setIsZeroKnowledgeUser(false);
      logEvent(analytics, "login", { method: "zeroKnowledge" });
    }

    if (bitcoin) {
      localStorage.setItem(
        "patreonPasscode",
        import.meta.env.VITE_BITCOIN_PASSCODE
      );
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
    // const { web5, did: aliceDid } = await Web5.connect();
    // console.log("DID", aliceDid);
  };
  useEffect(() => {
    // connectDID();

    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker
    //     .register("/service-worker.js")
    //     .then(() => console.log("Service Worker registered successfully."))
    //     .catch((error) =>
    //       console.log("Service Worker registration failed:", error)
    //     );
    // }

    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    const storedPasscode = localStorage.getItem("patreonPasscode");

    authStateReference.setIsZeroKnowledgeUser(
      !isEmpty(window?.webln?.walletPubkey) ||
        localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_PATREON_PASSCODE ||
        localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
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

  if (loading || typeof authStateReference.isSignedIn == "string") {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RiseUpAnimation>
          <RoxanaLoadingAnimation />
        </RiseUpAnimation>
      </div>
    );
  }

  const handleScheduler = async (scheduleEvent) => {
    let locationOfHeader = uiStateReference.patreonObject.credential;

    let data = {};

    let profile = {
      ...userStateReference.databaseUserDocument.profile,
      [locationOfHeader]: true,
    };

    await updateDoc(userStateReference.userDocumentReference, {
      profile,
    });

    userStateReference.setDatabaseUserDocument((prevDoc) => ({
      ...prevDoc,
      profile,
    }));

    setShowStars(true);

    // // Randomize animation properties for each star
    // document.querySelectorAll(".star").forEach((star) => {
    //   const scale = Math.random() * 10; // Random scale
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
    setTimeout(() => setShowStars(false), 2000);
  };

  // const handleZap = async () => {
  //   // document.getElementById("zap-container").style.display = "block";
  //   setShowZap(true);
  //   // setTimeout(() => {
  //   //   console.log("do nothing");
  //   //   // star.style.opacity = 0;
  //   //   // star.style.transform = "none";
  //   // }, 2 * 1000);

  //   // Randomize animation properties for each star
  //   // document.querySelectorAll(".zap").forEach((star) => {
  //   //   const scale = Math.random() * 1.5; // Random scale
  //   //   const x = Math.random() * 200 - 100; // Random x-position
  //   //   const y = Math.random() * 200 - 100; // Random y-position
  //   //   const duration = Math.random() * 1 + 0.5; // Random duration

  //   //   // star.style.textShadow = "25px 25px 25px gold";

  //   //   star.style.opacity = 1;
  //   //   star.style.transform = `scale(${scale}) translate(${x}px, ${y}px)`;
  //   //   star.style.transition = `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`;

  //   //   // Reset the star after the animation
  //   //   setTimeout(() => {
  //   //     star.style.opacity = 0;
  //   //     star.style.transform = "none";
  //   //   }, duration * 1000);
  //   // });

  //   // Reset the whole animation after some time
  //   setTimeout(() => {
  //     // document.getElementById("zap-container").style.display = "none";
  //     setShowZap(false);
  //   }, 2000);
  // };

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="App"
        style={{
          minHeight: "100dvh",
          width: 640,
          maxWidth: "100%",
        }}
      >
        {/* <InstallPWA /> */}
        <Header
          languageMode={languageMode}
          setLanguageMode={setLanguageMode}
          handleZeroKnowledgePassword={handleZeroKnowledgePassword}
          canInstallPwa={canInstallPwa}
        />

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
              handleScheduler={handleScheduler}
              handleZap={handleZap}
              zap={zap}
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
          showStars={showStars}
          showZap={showZap}
          handleZeroKnowledgePassword={handleZeroKnowledgePassword}
          zap={zap}
          handleZap={handleZap}
        />
      ) : null}
    </div>
  );
};

export default App;
