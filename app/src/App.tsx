import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import "./App.css";

import { Paths } from "./Paths/Paths";
import {
  controlPathVisibilityMap,
  RoxanaLoadingAnimation,
} from "./common/uiSchema";
import { Collections } from "./Paths/Collections/Collections";
import { Header } from "./Header/Header";
import { Passcode } from "./Passcode/Passcode";
import {
  auth,
  AuthComponent,
  uiConfig,
  analytics,
} from "./database/firebaseResources";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import { logEvent } from "firebase/analytics";
import { useParams } from "react-router-dom";
import { ProofOfWork } from "./ProofOfWork/ProofOfWork";
import ChatGPT from "./ChatGPT/ChatGPT";
import {
  useAuthState,
  useGlobalStates,
  useUIStates,
  useUserDocument,
} from "./App.hooks";
import { handleUserAuthentication, sortEmotionsByDate } from "./App.compute";
import { validPasscodes } from "./App.constants";

logEvent(analytics, "page_view", {
  page_location: "https://learn-robotsbuildingeducation.firebaseapp.com/",
});

function App() {
  let params = useParams();

  // handles passcode, google sign in and registered user info
  const { authStateReference } = useAuthState();

  let { userStateReference } = useUserDocument();

  let { globalStateReference } = useGlobalStates();

  let { uiStateReference } = useUIStates();

  // basic control for visual state - may be converted to animated route
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

  // basic control for visual state - may be converted to animated route
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

  // basic control for visual state - may be converted to animated route
  const handleZeroKnowledgePassword = (event) => {
    if (validPasscodes.includes(event.target.value)) {
      localStorage.setItem("patreonPasscode", event.target.value);
      uiStateReference.setPatreonObject({});
      authStateReference.setIsZeroKnowledgeUser(true);
      logEvent(analytics, "login", { method: "zeroKnowledge" });
    }
  };

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

  useEffect(() => {
    //check local storage

    const storedPasscode = localStorage.getItem("patreonPasscode");
    authStateReference.setIsZeroKnowledgeUser(
      validPasscodes.includes(storedPasscode)
    );

    onAuthStateChanged(auth, (user) => {
      // Check for user status
      //probably a better option than displayName.

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

  let computePercentage =
    (userStateReference.databaseUserDocument.impact || 0) /
    (uiStateReference.proofOfWorkFromModules || 77500);

  if (typeof authStateReference.isSignedIn == "string") {
    return (
      <div>
        <Spinner animation="grow" variant="light" />
        <br />
        <br />
        <RoxanaLoadingAnimation />
      </div>
    );
  }

  return (
    <>
      <div className="App" style={{ minHeight: "100vh" }}>
        <Header />

        {/* User enters passcode, and sees a google login button */}
        {/* typeof string is checked because initial state is "start" but then uses booleans */}
        {typeof authStateReference.isSignedIn === "string" ||
        (!authStateReference.isSignedIn &&
          authStateReference.isZeroKnowledgeUser) ? (
          <div
            style={{
              border: "1px solid #1C1C1E",
              width: "fit-content",
              margin: "auto",
              backgroundColor: "#1C1C1E",
              marginBottom: "48px",
            }}
            onClick={() => {
              logEvent(analytics, "login", { method: "Google" });
            }}
          >
            Access all features:
            <AuthComponent
              id="firebaseui-auth-container"
              uiConfig={uiConfig}
              firebaseAuth={auth}
              style={{ backgroundColor: "black" }}
            />
          </div>
        ) : null}

        {/* If the user hasn't submitted a passcode, the user sees a passcode field */}
        {!authStateReference.isZeroKnowledgeUser ? (
          <Passcode
            patreonObject={uiStateReference.patreonObject}
            handleZeroKnowledgePassword={handleZeroKnowledgePassword}
          />
        ) : null}

        {localStorage.getItem("patreonPasscode") ===
        import.meta.env.VITE_FREE_BLACK_COMMUNITY ? (
          <div>
            <div
              style={{
                boxSizing: "border-box",
                padding: 12,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FFF4CA",
                  color: "black",
                  boxSizing: "border-box",
                  width: "375px",
                  padding: 12,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Looks like you used the passcode BLCK.
                <br />
                Feel welcome to use subscriber services <br />
                for free 🙂
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/robotsbuildingeducation/patreon"
                  )
                }
                style={{ margin: 6, width: 190 }}
              >
                Schedule a 1-on-1
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/issues"
                  )
                }
                style={{ margin: 6, width: 190 }}
              >
                Get Experience
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/RobotsBuildingEducation/Educate/tree/main/newsletter%2B%2B"
                  )
                }
                style={{ margin: 6, width: 190 }}
              >
                Newsletter++
              </button>
            </div>
          </div>
        ) : null}

        {authStateReference.isZeroKnowledgeUser ? (
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

            <br />

            {/* this is a header after selecting a lecture module */}
            {!isEmpty(uiStateReference.patreonObject.header) ? (
              <h2 style={{ color: "white", marginTop: 12 }}>
                {uiStateReference.patreonObject?.header || ""}{" "}
              </h2>
            ) : null}

            <br />

            <div style={{ width: "100%" }}>
              <div>
                {isEmpty(uiStateReference.patreonObject) &&
                !uiStateReference.isDemo ? null : (
                  <>
                    <ChatGPT
                      currentPath={uiStateReference.currentPathForAnalytics}
                      patreonObject={uiStateReference.patreonObject}
                      userDocumentReference={
                        userStateReference.userDocumentReference
                      }
                      databaseUserDocument={
                        userStateReference.databaseUserDocument
                      }
                      setDatabaseUserDocument={
                        userStateReference.setDatabaseUserDocument
                      }
                      globalDocumentReference={
                        globalStateReference.globalDocumentReference
                      }
                      globalImpactCounter={
                        globalStateReference.globalImpactCounter
                      }
                      setGlobalImpactCounter={
                        globalStateReference.setGlobalImpactCounter
                      }
                      moduleName={uiStateReference.moduleName}
                    />
                  </>
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(28,28,30,0.75)",
          // border: "5px solid red",
          // height: "75px",
        }}
      >
        {userStateReference.databaseUserDocument &&
        authStateReference.isSignedIn &&
        authStateReference.isZeroKnowledgeUser ? (
          <ProofOfWork
            userAuthObject={authStateReference.userAuthObject}
            displayName={auth?.currentUser?.displayName}
            databaseUserDocument={userStateReference.databaseUserDocument}
            computePercentage={computePercentage}
            globalImpactCounter={globalStateReference.globalImpactCounter}
            usersEmotionsCollectionReference={
              userStateReference.usersEmotionsCollectionReference
            }
            usersEmotionsFromDB={userStateReference.usersEmotionsFromDB}
            globalScholarshipCounter={
              globalStateReference.globalScholarshipCounter
            }
            handlePathSelection={handlePathSelection}
            globalReserveObject={globalStateReference.globalReserveObject}
            updateUserEmotions={updateUserEmotions}
            isDemo={uiStateReference.isDemo}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
