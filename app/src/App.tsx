import { useEffect, useState, useReducer } from "react";
import { isEmpty } from "lodash";

import "./App.css";
import { ChatGPT } from "./ChatGPT/ChatGPT";

import { Paths } from "./Paths/Paths";
import {
  controlPathVisibilityMap,
  getGlobalImpact,
  renderWithTooltip,
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
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import { logEvent } from "firebase/analytics";

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
  // const [state, dispatch] = useReducer(reducer, { age: 42 });
  const [isSignedIn, setIsSignedIn] = useState("start"); // Local signed-in state.
  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);

  // this is the data inside a user document
  const [databaseUserDocument, setDatabaseUserDocument] = useState({});

  // this is a document object reference for a user collection
  const [userDocumentReference, setUserDocumentReference] = useState({});
  const [globalDocumentReference, setGlobalDocumentReference] = useState({});

  // used to count total global count. used to get all work done before this global counter was implemented.
  const [globalImpactCounter, setGlobalImpactCounter] = useState(0);

  const [patreonObject, setPatreonObject] = useState<Record<string, any>>({});
  const [currentPath, setCurrentPath] = useState("");
  const [currentPathForAnalytics, setCurrentPathForAnalytics] = useState("");
  const [proofOfWorkFromModules, setProofOfWorkFromModules] = useState(0);

  const [isDemo, setIsDemo] = useState(true);
  const [moduleName, setModuleName] = useState("");

  const [visibilityMap, setVisibilityMap] = useState({
    Engineer: false,
    "26th Street": false,
    Creator: false,
    Business: false,
  });

  const handlePathSelection = (event) => {
    console.log("event", event.target.id);
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
  };

  const handleModuleSelection = (module, moduleName) => {
    // can redefine this as module object rather than patreon object. low priority
    setPatreonObject(module);

    console.log("Module", module);
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
      "26th Street": false,
      Creator: false,
      Business: false,
    });
  };

  const handleZeroKnowledgePassword = (event) => {
    if (event.target.value === import.meta.env.VITE_PATREON_PASSCODE) {
      localStorage.setItem("patreonPasscode", event.target.value);
      setIsZeroKnowledgeUser(true);
      logEvent(analytics, "login", { method: "zeroKnowledge" });
    }
  };

  useEffect(() => {
    //check local storage

    if (
      localStorage.getItem("patreonPasscode") ===
      import.meta.env.VITE_PATREON_PASSCODE
    ) {
      setIsZeroKnowledgeUser(true);
    } else {
      setIsZeroKnowledgeUser(false);
    }

    onAuthStateChanged(auth, (user) => {
      // Check for user status
      //probably a better option than displayName.
      if (user?.displayName) {
        setIsSignedIn(true);
        setIsDemo(false);
        const docRef = doc(database, "users", user.uid);

        const globalImpactDocRef = doc(database, "global", "impact");
        getDoc(docRef).then((res) => {
          if (!res?.data()) {
            // first time user logs in. set up proof of work in their user document
            setDoc(docRef, {
              impact: 0,
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
        });

        getDoc(globalImpactDocRef).then((res) => {
          console.log("rest", res.data());
          setGlobalImpactCounter(res.data().total);
        });

        setUserDocumentReference(docRef);
        setGlobalDocumentReference(globalImpactDocRef);

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
        getDoc(docRef).then((res) => {
          if (!res?.data()) {
            // first time user logs in. set up proof of work in their user document
            setDoc(docRef, {
              impact: 0,
            })
              .then(() => {
                return getDoc(docRef);
              })
              .then((response) => {
                console.log("DATA", response.data());
                setDatabaseUserDocument(response.data());
              });
          } else {
            console.log("ELSA");
            setDatabaseUserDocument(res.data());
          }
        });

        getDoc(globalImpactDocRef).then((res) =>
          setGlobalImpactCounter(res.data().total)
        );

        setUserDocumentReference(docRef);
        setGlobalDocumentReference(globalImpactDocRef);
        setIsDemo(true);
      }
    });

    setProofOfWorkFromModules(getGlobalImpact());
  }, []);

  //

  let computePercentage =
    (databaseUserDocument.impact || 0) / (proofOfWorkFromModules || 77500);

  if (typeof isSignedIn == "string") {
    return <Spinner animation="grow" variant="light" />;
  }

  return (
    <div className="App">
      {/* <button onClick={() => dispatch({ type: "incremented_age" })}>
        click
      </button>
      my age {state.age} */}
      {/*  */}
      <Header />

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

      {/* {isSignedIn !== "start" && isSignedIn && isZeroKnowledgeUser ? (
        <ProofOfWork
          displayName={auth?.currentUser?.displayName || "Demo Robots"}
          databaseUserDocument={databaseUserDocument}
          computePercentage={computePercentage}
          globalImpactCounter={globalImpactCounter}
        />
      ) : null} */}

      {!isZeroKnowledgeUser ? (
        <Passcode
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
          <div>
            The Impact Wallet and content is being visually upgraded soon 😊
          </div>

          {/* <div>My Accoun</div> */}
          {/* navigate */}

          <Paths handlePathSelection={handlePathSelection} />

          <Collections
            visibilityMap={visibilityMap}
            handleModuleSelection={handleModuleSelection}
            currentPath={currentPath}
          />

          <br />
          {/* selected header */}
          {!isEmpty(patreonObject.button) ? (
            <h2 style={{ color: "white", marginTop: 12 }}>
              {" "}
              {patreonObject?.button || ""}{" "}
            </h2>
          ) : null}

          {/* render chatbot */}
          <div style={{ width: "100%" }}>
            <div>
              {isEmpty(patreonObject) ? null : (
                <>
                  <ChatGPT
                    currentPath={currentPathForAnalytics}
                    patreonObject={patreonObject}
                    userDocumentReference={userDocumentReference}
                    databaseUserDocument={databaseUserDocument}
                    setDatabaseUserDocument={setDatabaseUserDocument}
                    globalDocumentReference={globalDocumentReference}
                    globalImpactCounter={globalImpactCounter}
                    setGlobalImpactCounter={setGlobalImpactCounter}
                    displayName={
                      auth?.currentUser?.displayName || "Demo Robots"
                    }
                    computePercentage={computePercentage}
                    isDemo={isDemo}
                    moduleName={moduleName}
                  />
                </>
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
