import { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import "./App.css";
import { ChatGPT } from "./ChatGPT/ChatGPT";

import { Paths } from "./Paths/Paths";
import {
  controlPathVisibilityMap,
  getGlobalImpact,
  randomLessonGeneratorMachine444,
  renderWithTooltip,
  RoxanaLoadingAnimation,
  ui,
} from "./common/uiSchema";
import { Collections } from "./Paths/Collections/Collections";
import { Header } from "./Header/Header";
import { Passcode } from "./Passcode/Passcode";
import {
  auth,
  AuthComponent,
  database,
  uiConfig,
  analytics,
} from "./database/firebaseResources";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import { logEvent } from "firebase/analytics";
import { useParams } from "react-router-dom";
import { ProofOfWork } from "./ProofOfWork/ProofOfWork";

logEvent(analytics, "page_view", {
  page_location: "https://learn-robotsbuildingeducation.firebaseapp.com/",
});

function App() {
  let params = useParams();

  // mounts data from route - needs refactoring/rearchitecting
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);

  // auth state
  const [isSignedIn, setIsSignedIn] = useState("start"); // Local signed-in state.
  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);
  const [userAuthObject, setUserAuthObject] = useState({});

  // this is the actual data inside a user document for UI
  const [databaseUserDocument, setDatabaseUserDocument] = useState({});

  // this is a document object reference for a user collection
  const [userDocumentReference, setUserDocumentReference] = useState({});

  //**important 🤪: this is a terrible reference. It's used to process the "impact" document found inside of the "global" collection
  //it's due for a refactor, see globalReserveObject. It may be redundant.
  const [globalDocumentReference, setGlobalDocumentReference] = useState({});

  // this GETs is a set of modules that belongs to a user. Not in use in the UI, but may be useful some other day.
  const [usersModulesCollectionReference, setUsersModulesCollectionReference] =
    useState({});

  const [
    usersEmotionsCollectionReference,
    setUsersEmotionsCollectionReference,
  ] = useState({});

  //**important 🤪: "usersCoursesCollectionReference" this can be removed. It will be developed better in the future
  const [usersCoursesCollectionReference, setUsersCoursesCollectionReference] =
    useState({});

  //**important 🤪: this GETs all AI course templates in an not scalable way.
  const [
    globalModulesCollectionReference,
    setGlobalModulesCollectionReference,
  ] = useState({});

  //this is the set of data inside of modules belonging to a user meant for UI.
  const [usersModulesFromDB, setUsersModulesFromDB] = useState([]);

  const [usersEmotionsFromDB, setUsersEmotionsFromDB] = useState([]);

  // //**important 🤪: this displays all AI course templates in an not scalable way. this is the set of data inside of global meant for UI.
  const [globalUserModulesFromDB, setGlobalUserModulesFromDB] = useState([]);

  // used to count total global count. used to get all work done before this global counter was implemented.
  const [globalImpactCounter, setGlobalImpactCounter] = useState(0);

  // ui db data result
  const [globalScholarshipCounter, setGlobalScholarshipCounter] = useState(0);

  // ui db data result
  const [globalReserveObject, setGobalReserveObject] = useState({});

  // ui schema result
  const [patreonObject, setPatreonObject] = useState<Record<string, any>>({});

  // ui schema result
  const [currentPath, setCurrentPath] = useState("");

  // copy of currentPath probably for analytics reasons and not UI ones
  const [currentPathForAnalytics, setCurrentPathForAnalytics] = useState("");

  // calculates impact from all modules
  const [proofOfWorkFromModules, setProofOfWorkFromModules] = useState(0);

  //demo flag
  const [isDemo, setIsDemo] = useState(true);

  // ui state
  const [moduleName, setModuleName] = useState("");

  // ui state
  const [pathSelectionAnimationData, setPathSelectionAnimationData] = useState({
    boxShadow: null,
    path: null,
  });

  const [visibilityMap, setVisibilityMap] = useState({
    Engineer: false,
    "RO.₿.E": false,
    Creator: false,
    Business: false,
  });

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
    setVisibilityMap(controlPathVisibilityMap(visibilityMap, event.target.id));
    setCurrentPath(event.target.id);
    setCurrentPathForAnalytics(event.target.id);

    setPatreonObject({});
    setModuleName("");

    setPathSelectionAnimationData({
      boxShadow: "1px 2px 14px 8px rgba(0,255,140,1)",
      path: event.target.id,
    });
  };

  // basic control for visual state - may be converted to animated route
  const handleModuleSelection = (module, moduleName) => {
    // can redefine this as module object rather than patreon object. low priority
    setPatreonObject(module);

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
    setModuleName(moduleName);
    setCurrentPath("");
  };

  // basic control for visual state - may be converted to animated route
  const handleZeroKnowledgePassword = (event) => {
    if (
      event.target.value === import.meta.env.VITE_PATREON_PASSCODE ||
      event.target.value === import.meta.env.VITE_FREE_PROMO_PASSCODE ||
      event.target.value === import.meta.env.VITE_FREE_BLACK_COMMUNITY ||
      event.target.value === import.meta.env.VITE_FOREVER_FREE
    ) {
      localStorage.setItem("patreonPasscode", event.target.value);
      setPatreonObject({});
      setIsZeroKnowledgeUser(true);

      logEvent(analytics, "login", { method: "zeroKnowledge" });
    }
  };

  // gets the user's modules created by RO.B.E
  let documentProcForUsersModules = async (collectionRef) => {
    await getDocs(collectionRef).then((querySnapshot) => {
      let modulesSet = [];

      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          modulesSet.push(doc.data());
        } else {
        }
      });

      setUsersModulesFromDB(modulesSet);
    });
  };

  // gets the global modules created by RO.B.E
  let documentProcForGlobalModules = async (collectionRef) => {
    await getDocs(collectionRef).then((querySnapshot) => {
      let modulesSet = [];

      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          modulesSet.push(doc.data());
        } else {
        }
      });
      setGlobalUserModulesFromDB(modulesSet);
    });
  };

  let documentProcForUsersEmotions = async (collectionRef) => {
    await getDocs(collectionRef).then((querySnapshot) => {
      let modulesSet = [];

      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          modulesSet.push(doc.data());
        } else {
        }
      });
      setUsersEmotionsFromDB(modulesSet);
    });
  };

  useEffect(() => {
    //check local storage

    if (
      localStorage.getItem("patreonPasscode") ===
        import.meta.env.VITE_PATREON_PASSCODE ||
      localStorage.getItem("patreonPasscode") ===
        import.meta.env.VITE_FREE_PROMO_PASSCODE ||
      localStorage.getItem("patreonPasscode") ===
        import.meta.env.VITE_FOREVER_FREE
    ) {
      setIsZeroKnowledgeUser(true);
    } else {
      setIsZeroKnowledgeUser(false);
    }

    onAuthStateChanged(auth, (user) => {
      // Check for user status
      //probably a better option than displayName.

      if (user?.displayName) {
        setUserAuthObject(user);
        setIsSignedIn(true);
        setIsDemo(false);
        const docRef = doc(database, "users", user.uid);
        const globalImpactDocRef = doc(database, "global", "impact");
        const globalModulesCollectionRef = collection(database, "modules");

        getDoc(docRef)
          .then((res) => {
            if (!res?.data()) {
              // first time user logs in. set up proof of work in their user document

              setDoc(docRef, {
                impact: 0,
                userAuthObj: { uid: user.uid },
              })
                .then(() => {
                  return getDoc(docRef);
                })
                .then((response) => {
                  setDatabaseUserDocument(response.data());
                });
            } else {
              console.log("user", res.data());
              setDatabaseUserDocument(res.data());
            }
          })
          .catch((error) => console.log("ERROR", error));

        getDoc(globalImpactDocRef).then((res) => {
          setGlobalImpactCounter(res.data().total);
        });

        const globalReserveDocRef = doc(database, "global", "reserve");
        getDoc(globalReserveDocRef).then((res) => {
          setGlobalScholarshipCounter(res.data().scholarships);
          setGobalReserveObject(res.data());
        });

        setUserDocumentReference(docRef);
        const usersModulesCollectionRef = collection(docRef, "modules");
        const usersEmotionsCollectionRef = collection(docRef, "emotions");
        const usersCoursesCollectionRef = collection(docRef, "courses");
        setGlobalDocumentReference(globalImpactDocRef);
        setGlobalModulesCollectionReference(globalModulesCollectionRef);
        setUsersModulesCollectionReference(usersModulesCollectionRef);
        setUsersEmotionsCollectionReference(usersEmotionsCollectionRef);
        setUsersCoursesCollectionReference(usersCoursesCollectionRef);

        documentProcForUsersModules(usersModulesCollectionRef);
        documentProcForUsersEmotions(usersEmotionsCollectionRef);
        documentProcForGlobalModules(globalModulesCollectionRef);

        // used to count total global count. used to get all work done before this global counter was implemented.
        // getDocs(collection(database, "users")).then((querySnapshot) => {
        //   let sum = 0;
        //   querySnapshot.forEach((doc) => {
        //     if (doc.data().impact) {
        //       sum = Number(doc.data().impact) + sum;
        //     }
        //   });
        //   console.log("sum", sum);
        //   setGlobalImpactCounter(sum);
        // });
      } else {
        setIsSignedIn(false);
        const docRef = doc(database, "users", "demoUsers");
        const globalImpactDocRef = doc(database, "global", "impact");
        getDoc(docRef)
          .then((res) => {
            if (!res?.data()) {
              // first time user logs in. set up proof of work in their user document
              setDoc(docRef, {
                impact: 0,
                userAuthObj: { uid: userAuthObject.uid },
              })
                .then(() => {
                  return getDoc(docRef);
                })
                .then((response) => {
                  setDatabaseUserDocument(response.data());
                });
            } else {
              setDatabaseUserDocument(res.data());
            }
          })
          .catch((error) => "ERROR");

        getDoc(globalImpactDocRef).then((res) => {
          setGlobalImpactCounter(res.data().total);
        });
        const globalReserveDocRef = doc(database, "global", "reserve");

        getDoc(globalReserveDocRef).then((res) => {
          setGlobalScholarshipCounter(res.data().scholarships);
        });

        setUserDocumentReference(docRef);
        setGlobalDocumentReference(globalImpactDocRef);
        setIsDemo(true);
        const globalModulesCollectionRef = collection(database, "modules");
        setGlobalModulesCollectionReference(globalModulesCollectionRef);
        documentProcForGlobalModules(globalModulesCollectionRef);
      }
    });

    setProofOfWorkFromModules(getGlobalImpact());
    if (params?.moduleID) {
    } else if (localStorage.getItem("patreonPasscode")?.length > 0) {
    } else {
      setPatreonObject(
        isDemo ? randomLessonGeneratorMachine444(globalUserModulesFromDB) : {}
      );
    }
  }, []);

  let mountDataForRoute = async (moddy) => {
    setIsLoadingRoute(true);

    if (params?.moduleID) {
      // setCurrentPath("RO.₿.E");
      setCurrentPathForAnalytics("RO.₿.E");
      const docRef = doc(database, "modules", moddy);
      getDoc(docRef).then((res) => {
        if (!res?.data()) {
        } else {
          setPatreonObject(res?.data()[Object.keys(res.data())[0]]);
          setCurrentPath("");
        }
      });
    }
  };

  useEffect(() => {
    if (params?.moduleID) {
      mountDataForRoute(params?.moduleID);
      setIsLoadingRoute(false);
    } else {
    }
  }, [params]);

  //

  let computePercentage =
    (databaseUserDocument.impact || 0) / (proofOfWorkFromModules || 77500);

  if (typeof isSignedIn == "string") {
    return (
      <>
        <Spinner animation="grow" variant="light" />
        <br />
        <br />
        <RoxanaLoadingAnimation />
      </>
    );
  }

  console.log("usersEmotionsFromDB", usersEmotionsFromDB);

  return (
    <>
      <div className="App" style={{ minHeight: "100vh" }}>
        <Header
          auth={auth}
          patreonObject={patreonObject}
          userDocumentReference={userDocumentReference}
          databaseUserDocument={databaseUserDocument}
          setDatabaseUserDocument={setDatabaseUserDocument}
          globalImpactCounter={globalImpactCounter}
          setGlobalImpactCounter={setGlobalImpactCounter}
          computePercentage={computePercentage}
        />
        {typeof isSignedIn === "string" ||
        (!isSignedIn && isZeroKnowledgeUser) ? (
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
            <AuthComponent
              id="firebaseui-auth-container"
              uiConfig={uiConfig}
              firebaseAuth={auth}
            />
          </div>
        ) : null}
        {!isZeroKnowledgeUser ? (
          <Passcode
            patreonObject={patreonObject}
            handleZeroKnowledgePassword={handleZeroKnowledgePassword}
            userDocumentReference={userDocumentReference}
            databaseUserDocument={databaseUserDocument}
            setDatabaseUserDocument={setDatabaseUserDocument}
            globalDocumentReference={globalDocumentReference}
            globalImpactCounter={globalImpactCounter}
            setGlobalImpactCounter={setGlobalImpactCounter}
            computePercentage={computePercentage}
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

        {isZeroKnowledgeUser ? (
          <>
            <Paths
              handlePathSelection={handlePathSelection}
              pathSelectionAnimationData={pathSelectionAnimationData}
            />

            <Collections
              usersCoursesCollectionReference={usersCoursesCollectionReference}
              userAuthObject={userAuthObject}
              visibilityMap={visibilityMap}
              handleModuleSelection={handleModuleSelection}
              currentPath={currentPath}
              patreonObject={patreonObject}
              userDocumentReference={userDocumentReference}
              databaseUserDocument={databaseUserDocument}
              setDatabaseUserDocument={setDatabaseUserDocument}
              globalDocumentReference={globalDocumentReference}
              globalImpactCounter={globalImpactCounter}
              setGlobalImpactCounter={setGlobalImpactCounter}
              displayName={auth?.currentUser?.displayName || "@DemoRobots"}
              computePercentage={computePercentage}
              isDemo={isDemo}
              moduleName={moduleName}
              globalModulesCollectionReference={
                globalModulesCollectionReference
              }
              globalUserModulesFromDB={globalUserModulesFromDB}
              documentProcForGlobalModules={documentProcForGlobalModules}
            />

            <br />

            {!isEmpty(patreonObject.button) ? (
              <h2 style={{ color: "white", marginTop: 12 }}>
                {" "}
                {patreonObject?.button || ""}{" "}
              </h2>
            ) : null}

            <br />

            <div style={{ width: "100%" }}>
              <div>
                {isEmpty(patreonObject) && !isDemo ? null : (
                  <>
                    <ChatGPT
                      globalScholarshipCounter={globalScholarshipCounter}
                      currentPath={currentPathForAnalytics}
                      patreonObject={patreonObject}
                      userDocumentReference={userDocumentReference}
                      databaseUserDocument={databaseUserDocument}
                      setDatabaseUserDocument={setDatabaseUserDocument}
                      globalDocumentReference={globalDocumentReference}
                      globalImpactCounter={globalImpactCounter}
                      setGlobalImpactCounter={setGlobalImpactCounter}
                      displayName={
                        auth?.currentUser?.displayName || "@DemoRobots"
                      }
                      computePercentage={computePercentage}
                      isDemo={isDemo}
                      moduleName={moduleName}
                      usersModulesCollectionReference={
                        usersModulesCollectionReference
                      }
                      usersModulesFromDB={usersModulesFromDB}
                      userAuthObject={userAuthObject}
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
        }}
      >
        {databaseUserDocument && isSignedIn && isZeroKnowledgeUser ? (
          <ProofOfWork
            userAuthObject={userAuthObject}
            displayName={auth?.currentUser?.displayName || "@DemoRobots"}
            databaseUserDocument={databaseUserDocument}
            computePercentage={computePercentage}
            globalImpactCounter={globalImpactCounter}
            usersModulesCollectionReference={usersModulesCollectionReference}
            usersModulesFromDB={usersModulesFromDB}
            usersEmotionsCollectionReference={usersEmotionsCollectionReference}
            usersEmotionsFromDB={usersEmotionsFromDB}
            globalScholarshipCounter={globalScholarshipCounter}
            handlePathSelection={handlePathSelection}
            globalReserveObject={globalReserveObject}
            documentProcForUsersEmotions={documentProcForUsersEmotions}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
