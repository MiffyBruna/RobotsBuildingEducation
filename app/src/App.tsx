import { useEffect, useState, useReducer } from "react";
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

export const reducer = (state, action) => {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
};

function App() {
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);
  let params = useParams();
  // const [state, dispatch] = useReducer(reducer, { age: 42 });
  const [isSignedIn, setIsSignedIn] = useState("start"); // Local signed-in state.
  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);
  const [userAuthObject, setUserAuthObject] = useState({});

  // this is the data inside a user document
  const [databaseUserDocument, setDatabaseUserDocument] = useState({});

  // this is a document object reference for a user collection
  const [userDocumentReference, setUserDocumentReference] = useState({});
  const [globalDocumentReference, setGlobalDocumentReference] = useState({});
  const [usersModulesCollectionReference, setUsersModulesCollectionReference] =
    useState({});

  //courses references are deprecated
  const [usersCoursesCollectionReference, setUsersCoursesCollectionReference] =
    useState({});

  const [
    globalModulesCollectionReference,
    setGlobalModulesCollectionReference,
  ] = useState({});
  const [usersModulesFromDB, setUsersModulesFromDB] = useState([]); //setGlobalUserModulesFromDB
  const [globalUserModulesFromDB, setGlobalUserModulesFromDB] = useState([]);
  // used to count total global count. used to get all work done before this global counter was implemented.
  const [globalImpactCounter, setGlobalImpactCounter] = useState(0);
  const [globalScholarshipCounter, setGlobalScholarshipCounter] = useState(0);
  const [globalReserveCounter, setGlobalReserveCounter] = useState(0);
  const [patreonObject, setPatreonObject] = useState<Record<string, any>>({});
  const [currentPath, setCurrentPath] = useState("");
  const [currentPathForAnalytics, setCurrentPathForAnalytics] = useState("");
  const [proofOfWorkFromModules, setProofOfWorkFromModules] = useState(0);

  const [isDemo, setIsDemo] = useState(true);
  const [moduleName, setModuleName] = useState("");

  const [visibilityMap, setVisibilityMap] = useState({
    Engineer: false,
    "RO.₿.E": false,
    Creator: false,
    Business: false,
  });

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
  };

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
    setVisibilityMap({
      Engineer: false,
      "RO.₿.E": false,
      Creator: false,
      Business: false,
    });
  };

  const handleZeroKnowledgePassword = (event) => {
    if (
      event.target.value === import.meta.env.VITE_PATREON_PASSCODE ||
      event.target.value === import.meta.env.VITE_FREE_PROMO_PASSCODE ||
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
          console.log("gone");
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
          console.log("gone");
        }
      });
      setGlobalUserModulesFromDB(modulesSet);
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
              setDatabaseUserDocument(res.data());
            }
          })
          .catch((error) => console.log("ERROR", error));

        getDoc(globalImpactDocRef).then((res) => {
          console.log("resssss", res.data());
          setGlobalImpactCounter(res.data().total);
        });

        const globalReserveDocRef = doc(database, "global", "reserve");
        getDoc(globalReserveDocRef).then((res) => {
          console.log("res", res.data());
          setGlobalReserveCounter(res.data().amount);
          setGlobalScholarshipCounter(res.data().scholarships);
        });

        setUserDocumentReference(docRef);
        const usersModulesCollectionRef = collection(docRef, "modules");
        const usersCoursesCollectionRef = collection(docRef, "courses");
        setGlobalDocumentReference(globalImpactDocRef);
        setGlobalModulesCollectionReference(globalModulesCollectionRef);
        setUsersModulesCollectionReference(usersModulesCollectionRef);
        setUsersCoursesCollectionReference(usersCoursesCollectionRef);

        documentProcForUsersModules(usersModulesCollectionRef);
        documentProcForGlobalModules(globalModulesCollectionRef);

        // used to count total global count. used to get all work done before this global counter was implemented.
        // getDocs(collection(database, "users")).then((querySnapshot) => {
        //   let sum = 0;
        //   querySnapshot.forEach((doc) => {
        //     if (doc.data().impact) {
        //       sum = doc.data().impact + sum;
        //     }
        //   });

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
              console.log("ELSE");

              setDatabaseUserDocument(res.data());
            }
          })
          .catch((error) => console.log("ERROR"));

        getDoc(globalImpactDocRef).then((res) => {
          setGlobalImpactCounter(res.data().total);
        });
        const globalReserveDocRef = doc(database, "global", "reserve");

        getDoc(globalReserveDocRef).then((res) => {
          console.log("res", res.data());
          setGlobalReserveCounter(res.data().amount);
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
      console.log("no data");
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

  return (
    <>
      <div className="App" style={{ minHeight: "100vh" }}>
        <Header
          auth={auth}
          globalReserveCounter={globalReserveCounter}
          patreonObject={patreonObject}
          userDocumentReference={userDocumentReference}
          databaseUserDocument={databaseUserDocument}
          setDatabaseUserDocument={setDatabaseUserDocument}
          globalDocumentReference={globalDocumentReference}
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
        {isZeroKnowledgeUser ? (
          <>
            <Paths handlePathSelection={handlePathSelection} />

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
                      globalReserve={globalReserveCounter}
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
            globalReserve={globalReserveCounter}
            globalScholarshipCounter={globalScholarshipCounter}
            handlePathSelection={handlePathSelection}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
