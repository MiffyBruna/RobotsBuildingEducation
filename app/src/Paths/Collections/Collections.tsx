import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { renderWithTooltip, ui, uiPaths } from "../../common/uiSchema";
import { auth } from "../../database/firebaseResources";
import {
  StyledCollectionContainer,
  StyledModule,
} from "../../styles/lazyStyles";
import { CreateClassroom } from "./CreateClassroom/CreateClassroom";
import { InfiniteKnowledgeEngine9001 } from "./InfiniteKnowlegeEngine9001/InfiniteKnowlegeEngine9001";
import { Module } from "./Module/Module";

export const Collections = ({
  handleModuleSelection,
  visibilityMap,
  currentPath,

  patreonObject,
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  displayName,
  computePercentage,
  isDemo,
  moduleName,
  globalModulesCollectionReference,
  globalUserModulesFromDB,
  documentProcForGlobalModules,
  usersCoursesCollectionReference,
  userAuthObject,
}): JSX.Element | null => {
  let [
    isInfiniteKnowledgeEngine9001open,
    setIsInfiniteKnowledgeEngine9001open,
  ] = useState(false);

  let [isCreateClassroomOpen, setIsCreateClassroomOpen] = useState(false);
  let [hasZeroKnowledgeAccess, setHasZeroKnowledgeAccess] = useState(false);
  let [hasCourseAdminAccess, setHasCourseAdminAccess] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("infiniteKnowledgePasscode") ===
        import.meta.env.VITE_INFINITE_KNOWLEDGE_PASSCODE ||
      localStorage.getItem("infiniteKnowledgePasscode") ===
        import.meta.env.VITE_SHEILF
    ) {
      setHasZeroKnowledgeAccess(true);
    } else {
      setHasZeroKnowledgeAccess(false);
    }
    if (
      localStorage.getItem("courseAdminPasscode") ===
        import.meta.env.VITE_COURSE_ADMIN_PASSCODE ||
      localStorage.getItem("courseAdminPasscode") ===
        import.meta.env.VITE_SHEILF
    ) {
      setHasCourseAdminAccess(true);
    } else {
      setHasCourseAdminAccess(false);
    }
  }, []);

  let mountClassroom = async () => {
    // await getDocs(usersCoursesCollectionReference).then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     if (doc.data()) {
    //       console.log(`Classroom ${doc.id}`, doc.data());
    //     }
    //   });
    // });
    // let questions = usersCoursesCollectionReference.doc(
    //   "Mmm5paEOafcRSr5nOM5I3Ia82f43-Hellowrodl"
    // );
    // // Query the 'questions' subcollection within the course document
    // questions
    //   .collection("questions")
    //   .get()
    //   .then((querySnapshot) => {
    //     // Iterate through each question document
    //     querySnapshot.forEach((questionDoc) => {
    //       console.log(
    //         `Question ID: ${questionDoc.id} - Data: `,
    //         questionDoc.data()
    //       );
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching questions: ", error);
    //   });
    /**
     * 
     * 
        // Replace with your own user and course document IDs
        const userId = 'someUserId';
        const courseId = 'someCourseId';

        // Get the reference to the user's specific course
        const courseRef = doc(db, 'users', userId, 'courses', courseId);

        // Query the 'questions' subcollection within the course document
        getDocs(collection(courseRef, 'questions')).then((querySnapshot) => {
          // Iterate through each question document
          querySnapshot.forEach((questionDoc) => {
            console.log(`Question ID: ${questionDoc.id} - Data: `, questionDoc.data());
          });
        }).catch((error) => {
          console.error("Error fetching questions: ", error);
        });
     */
    /**
     *
     *
     *
     * I'm using Firestore. I have a collection users with a list of user documents. Each user document has a collection of courses, which is composed of a list of course documents.  Each course document has a collection of questions, which has a list of document questions,  Each question collection has a list of questions. I want to access the list of question documents, how do I do that with Firestore?
     *
     * Can you write that code in firestore's latest version?
     */
  };

  useEffect(() => {
    if (hasCourseAdminAccess) {
      console.log("you got it bro");
      mountClassroom();
    } else {
      console.log("u dont got it");
    }
  }, [hasCourseAdminAccess]);

  if (currentPath) {
    let path = ui(globalUserModulesFromDB)[currentPath]; // Engineer: {}

    let collections = Object.keys(path); // []]

    let display = collections.map((collection) => {
      let modules = Object.keys(path[collection]);

      if (modules?.length) {
        return (
          <div>
            <br />
            <h3>{collection}</h3>

            <br />
            <div></div>
            <StyledCollectionContainer>
              {modules.map((module) => (
                <Module
                  path={currentPath}
                  collection={collection}
                  module={module}
                  handleModuleSelection={handleModuleSelection}
                  globalUserModulesFromDB={globalUserModulesFromDB}
                />
              ))}
            </StyledCollectionContainer>
          </div>
        );
      }
    });

    let handleZeroKnowledge = (event) => {
      if (
        event.target.value ===
          import.meta.env.VITE_INFINITE_KNOWLEDGE_PASSCODE ||
        event.target.value === import.meta.env.VITE_SHEILF
      ) {
        setHasZeroKnowledgeAccess(true);
        localStorage.setItem("infiniteKnowledgePasscode", event.target.value);
      }
    };

    // lets just assume that the password is "NARUTO", we, and by that I mean, I,  can handle the entry point later
    // lets build the teacher UI foist
    let handleCourseAdminPasscode = (event, participant) => {
      if (
        (event.target.value === event.target.value) ===
          import.meta.env.VITE_SHEILF ||
        event.target.value === import.meta.env.VITE_COURSE_ADMIN_PASSCODE
      ) {
        setHasCourseAdminAccess(true);
        localStorage.setItem("courseAdminPasscode", event.target.value);
      }
    };

    return (
      <>
        <div
          style={{
            transition: "0.23s all ease-in-out",
            // opacity: isCodingVisible ? 1 : 0,
            // visibility: isCodingVisible ? "visible" : "hidden",
          }}
        >
          {/* This is some RO.₿.Efeature shit  */}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}{" "}
          {/* This is some RO.₿.Efeature shit  */}
          <br />
          {currentPath === "RO.₿.E" && !hasZeroKnowledgeAccess ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%" }}>
                <h3>access IKE9001</h3>
              </div>
              <div style={{ width: 250 }}>
                <InputGroup size="lg">
                  {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}

                  <Form.Control
                    // aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleZeroKnowledge}
                  />
                </InputGroup>
              </div>
            </div>
          ) : null}
          <br />
          {display}
          {currentPath === "RO.₿.E" && hasZeroKnowledgeAccess ? (
            <Button
              variant="light"
              onClick={() => setIsInfiniteKnowledgeEngine9001open(true)}
            >
              Activate InfiniteKnowledgeEngine9001
            </Button>
          ) : null}
          {currentPath === "Raise Ur Hand" && !hasCourseAdminAccess ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "100%" }}>
                  <h3>Are you running a course?</h3>
                </div>
                <div style={{ width: 250 }}>
                  <InputGroup size="lg">
                    {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}
                    <FloatingLabel
                      controlId="floatingInput"
                      label="admin passcode"
                      className="mb-3"
                      style={{ color: "black" }}
                    >
                      <Form.Control
                        // aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={(event) =>
                          handleCourseAdminPasscode(event, "educators")
                        }
                      />
                    </FloatingLabel>
                  </InputGroup>
                </div>
              </div>
              <br />
              <br />

              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              {/* this some raise ur hand type features */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "100%" }}>
                  <h3>Are you attending a course?</h3>
                </div>
                <div style={{ width: 250 }}>
                  <InputGroup size="lg">
                    {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}
                    <FloatingLabel
                      controlId="floatingInput"
                      label="course passcode"
                      className="mb-3"
                      style={{ color: "black" }}
                    >
                      <Form.Control
                        id={"floatingInput"}
                        // aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={(event) =>
                          handleCourseAdminPasscode(event, "student")
                        }
                      />
                    </FloatingLabel>
                  </InputGroup>
                </div>
              </div>
            </>
          ) : null}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {/* Raise dat hand */}
          {currentPath === "Raise Ur Hand" && hasCourseAdminAccess ? (
            <div
              style={{
                maxWidth: "100%",
                border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="light"
                onClick={() => setIsCreateClassroomOpen(true)}
              >
                Create a course
              </Button>
              <div style={{ width: "200px" }}>
                Data
                <br />
                <InputGroup size="lg">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="course passcode"
                    className="mb-3"
                    style={{ color: "black" }}
                  >
                    <Form.Control
                      id={"floatingInput"}
                      // aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={(event) =>
                        handleCourseAdminPasscode(event, "student")
                      }
                    />
                  </FloatingLabel>
                </InputGroup>
              </div>
              <Button
                variant="light"
                onClick={() => setIsInfiniteKnowledgeEngine9001open(true)}
              >
                Activate InfiniteKnowledgeEngine9001
              </Button>

              <div>What's good {userAuthObject.uid}</div>
            </div>
          ) : null}
        </div>

        <CreateClassroom
          userAuthObject={userAuthObject}
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
          setIsCreateClassroomOpen={setIsCreateClassroomOpen}
          isCreateClassroomOpen={isCreateClassroomOpen}
          globalModulesCollectionReference={globalModulesCollectionReference}
          documentProcForGlobalModules={documentProcForGlobalModules}
        />

        <InfiniteKnowledgeEngine9001
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
          setIsInfiniteKnowledgeEngine9001open={
            setIsInfiniteKnowledgeEngine9001open
          }
          isInfiniteKnowledgeEngine9001open={isInfiniteKnowledgeEngine9001open}
          globalModulesCollectionReference={globalModulesCollectionReference}
          documentProcForGlobalModules={documentProcForGlobalModules}
        />
      </>
    );
  }
};
