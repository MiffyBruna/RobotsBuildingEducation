import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import isEmpty from "lodash/isEmpty";
import { auth, database } from "../../../database/firebaseResources";

export const CreateClassroom = ({
  userAuthObject,
  setIsCreateClassroomOpen,
  isCreateClassroomOpen,
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
  documentProcForGlobalModules,
}) => {
  let [currentPrompt, setCurrentPrompt] = useState("");
  let [currentCourseCode, setCurrentCourseCode] = useState("CS115");
  let [currentTitle, setCurrentTitle] = useState(
    "RO.B.E Tutoring Computer Science"
  );

  let [isResponseGenerating, setIsResponseGenerating] = useState(false);
  let [didGptFailTask, setDidGptFailTask] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  let handleSubjectTitleChange = (event) => {
    setCurrentTitle(event.target.value);
  };

  let handleCurrentCourseCode = (event) => {
    setCurrentCourseCode(event.target.value);
  };

  const handleCourseGeneration = async () => {
    // update the user creating the course
    console.log("display", userAuthObject);
    console.log("user doc ref", userDocumentReference);
    // await addDoc(collection(userDocumentReference, "courses"), {
    //   creator: userAuthObject?.uid,
    // });
    // create a document in the course collection
    // modules ?

    if (
      (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) &&
      !isDemo
    ) {
      //doesnt return obj, so update firebase and react seperately

      let moduleCollectionRef = collection(userDocumentReference, "courses");

      let courseDocument = {
        passcode: userAuthObject?.uid + "-" + currentCourseCode,
        title: currentTitle,
      };

      await setDoc(
        doc(userDocumentReference, "courses", courseDocument.passcode),
        courseDocument
      );
      await setDoc(
        doc(database, "courses", courseDocument.passcode),
        courseDocument
      );

      setIsCreateClassroomOpen(false);

      //   let storedDocument = doc(userDocumentReference, "modules", uniqueID);
      //   // let globalModules = doc(globalModulesCollectionReference,)
      //   const docSnap = await getDoc(storedDocument);

      //   if (docSnap.exists()) {
      //   } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      //   }

      //   await updateDoc(userDocumentReference, {
      //     impact: databaseUserDocument?.impact + 1800,
      //   });

      //   await updateDoc(globalDocumentReference, {
      //     total: globalImpactCounter + 1800,
      //   });

      //   let docCopy = databaseUserDocument;
      //   docCopy.impact = databaseUserDocument?.impact + 1800;
      //   setDatabaseUserDocument(docCopy);

      //   let globalCopy = globalImpactCounter;
      //   globalCopy = globalImpactCounter + 1800;
      //   setGlobalImpactCounter(globalCopy);

      //   documentProcForGlobalModules(globalModulesCollectionReference);
      // }
    }
  };

  let mountClassroom = async () => {
    // usersModulesCollectionReference  -> usersClassroomCollectionReference
    // await getDocs(usersModulesCollectionReference).then((querySnapshot) => {
    //       let sum = 0;
    //       querySnapshot.forEach((doc) => {
    //         if (doc.data()) {
    //           console.log("CLASSROOMS", doc.data());
    //         }
    //       })
    // });
  };

  return (
    <Modal centered show={isCreateClassroomOpen} fullscreen>
      <Modal.Header
        closeButton
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Modal.Title>Create a course</Modal.Title>
      </Modal.Header>
      <Modal.Body
        onHide={() => setIsCreateClassroomOpen(false)}
        style={{
          padding: 0,
          backgroundColor: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <br></br>
        <div
          style={{
            maxWidth: "1280px",
            minWidth: "350px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h1
                      style={{
                        borderBottom: "1px solid pink",
                        padding: 12,
                        color: "white",
                        opacity: "0.8",
                      }}
                    >
                      Setup
                    </h1>
                    <div style={{ width: "fit-content" }}>
                      <h6>create a private classroom 😊</h6>
                      <br />
                      <h6>define a title</h6>
                      <div>example: RO.B.E Tutoring Computer Science</div>
                      <InputGroup size="lg">
                        {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}

                        <Form.Control
                          // aria-label="Large"
                          aria-describedby="inputGroup-sizing-md"
                          onChange={handleSubjectTitleChange}
                          style={{ padding: 12 }}
                        />
                      </InputGroup>
                      <br />

                      <br />

                      <h6>define a unique code</h6>
                      <div>example: CS115</div>
                      <InputGroup size="lg">
                        {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}

                        <Form.Control
                          // aria-label="Large"
                          aria-describedby="inputGroup-sizing-md"
                          onChange={handleCurrentCourseCode}
                          style={{ padding: 12 }}
                        />
                      </InputGroup>
                    </div>
                    <br />

                    <div>
                      <Button onClick={handleCourseGeneration}>
                        Create classroom
                      </Button>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
        <Button
          variant="secondary"
          onClick={() => {
            setIsCreateClassroomOpen(false);
          }}
        >
          leave
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
