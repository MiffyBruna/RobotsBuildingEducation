import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  InputGroup,
  Modal,
  ProgressBar,
} from "react-bootstrap";
import ReactJson from "react-json-view";
import { isEmpty, uniq } from "lodash";
import { RoxanaLoadingAnimation } from "../../../common/uiSchema";
import { ChatGPT } from "../../../ChatGPT/ChatGPT";
import { auth, database } from "../../../database/firebaseResources";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const InfiniteKnowledgeEngine9001 = ({
  setIsInfiniteKnowledgeEngine9001open,
  isInfiniteKnowledgeEngine9001open,
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
  let [currentRoleModel, setCurrentRoleModel] = useState("Professor");
  let [character, setCharacter] = useState("Barack Obama");
  let [currentPrompt, setCurrentPrompt] = useState("");
  let [currentTitle, setCurrentTitle] = useState("");
  let [gptResponse, setGptResponse] = useState({});
  let [isResponseGenerating, setIsResponseGenerating] = useState(false);
  let [didGptFailTask, setDidGptFailTask] = useState(false);

  let [currentLanguage, setCurrentLanguage] = useState("");

  let [currentIdentities, setCurrentIdentities] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  let [demo, setDemo] = useState({
    "Demo Copy": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: false,
      tooltip: ``,
      sourceType: `ai`,
      button: ``,
      header: ``,
      fileSource: "",
      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`, //`✍️`
          request: `ms. roxana, can you please generate an essay that introduces me to  ?`,
          response: "",
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about expression and its impacts on influence in social media?`,
          response: "",
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of expression and its impacts on influence in social media?`,
          response: "",
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about expression and its impacts on influence in social media with one sentence answers?`,
          response: "",
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for expression and its impacts on influence in social media?`,
          response: "",
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of creating meaning out of life by creating journies with purpose?`,
          response: "",
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define expression and its impacts on influence in social media in exactly one sentence?`,
          response: "",
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about expression and its impacts on influence in social media without any answers?`,
          response: "",
        },
        furtherReading: {
          completed: false,
          impact: 100,
          action: `further reading`,
          icon: `🦉`,
          request: `What do you recommend someone should read to learn more about expression and its impacts on influence in social media?`,
          response: "",
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: "",
        },
      },
    },
  });

  let selectRoleModel = (event) => {
    setCurrentRoleModel(event.target.value);
  };

  let selectCharacter = (event) => {
    setCharacter(event.target.value);
  };

  let selectCulturalRegions = (event) => {
    if (
      !currentIdentities.includes(event.target.id) ||
      isEmpty(currentIdentities)
    ) {
      let copyOfState = [...currentIdentities, event.target.id];
      let removeDuplicates = uniq(copyOfState);
      setCurrentIdentities(removeDuplicates);
    } else {
      let copyOfState = [...currentIdentities, event.target.id];
      let removeDuplicates = uniq(copyOfState);
      let filteredItems = removeDuplicates.filter(
        (item) => item !== event.target.id
      );

      setCurrentIdentities(filteredItems);
    }
  };

  let selectSpokenLanguage = (event) => {
    setCurrentLanguage(event.target.value);
  };

  let handleSubjectTitleChange = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleSubjectPromptChange = (event) => {
    setCurrentPrompt(event.target.value);
  };

  const promptGenerate = () => {
    let result = {
      patreon: {
        request: `can you please generate a short essay on ${currentPrompt} in under 15 sentences?`,
        response: "",
      },
      inspire: {
        request: `can you please share an short inspiring story about ${currentPrompt}?`,
        response: "",
      },
      summarize: {
        request: `can you please quickly summarize the basics of ${currentPrompt} in a paragraph?`,
        response: "",
      },
      ask: {
        request: `can you please show me three frequently asked beginner questions about ${currentPrompt} with one sentence answers?`,
        response: "",
      },
      guide: {
        request: `can you please create a 10 bullet point study study guide for ${currentPrompt}?`,
        response: "",
      },
      demonstrate: {
        request: `can you please illustrate a brief and clear example of ${currentPrompt}?`,
        response: "",
      },
      define: {
        request: `can you please define ${currentPrompt} in exactly one sentence?`,
        response: "",
      },
      quiz: {
        request: `can you please write only a 3 question quiz for beginners that's challenging about ${currentPrompt}?`,
        response: "",
      },
      furtherReading: {
        request: `What books or authors do you recommend someone should read to learn more about ${currentPrompt}?`,
        response: "",
      },
    };

    return JSON.stringify(result);
  };
  const FirestoreAutoId = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    "Return id",
      Array.from({ length: 20 }).reduce(
        (acc) =>
          `${acc}${chars.charAt(Math.floor(Math.random() * chars.length))}`
      );
    return Array.from({ length: 20 })
      .reduce(
        (acc) =>
          `${acc}${chars.charAt(Math.floor(Math.random() * chars.length))}`
      )
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
  };
  const handleCourseGeneration = async () => {
    try {
      let uniqueID = FirestoreAutoId();
      setIsResponseGenerating(true);
      setGptResponse({});
      setDidGptFailTask(false);

      // this API has a $5 limit. Please configure your own setup to test in a seperate location.

      const response = await fetch(
        "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: `I'm going to send a JSON value that describes a set of questions being asked to you. Please parse it and answer them as a warm and energetic person imitating ${currentRoleModel?.toLocaleLowerCase()} as an educator in order to best facilitate learning. Answer each question found in the key defined as 'request' and fill out the 'response' key with your answer as a string. Please only change the response and return a valid JSON string that can be parsed with JSON.parse(answer). ${promptGenerate()}`,
          }),
        }
      ).catch((error) => {
        "error", error;
        "err", { error };
      });

      let json = await response.json();

      // let json = {
      //    bot: "\n\n{\n    \"patreon\": {\"request\": \"ms. roxana, can you please generate a short essay on the importance of modern US History in 15 sentences?\", \"response\": \"Modern US History is important to understand as it serves as the foundation for understanding the current state of the nation. It helps explain the roots of some national issues and can teach us valuable lessons on how to better address current and future issues. Further, it gives us the tools and critical thinking skills to better appreciate the current political climate. It can help inform us around decisions related to civil liberties, minorities, and the role of the nation in world affairs. Studying Modern US History also gives us context around our own identities, as it can help us uncover the strength of our cultural heritage. By considering the history of government, economics and social issues, we can gain a better understanding of our nation’s progress over time and how our efforts today will shape the future for future generations. It allows us to debate on a number of critical topics, including the power of public opinion and the responsibilities of our government. Moreover, it enables us to contemplate on how to build a more equitable society. Finally, studying Modern US History puts us in better position to be informed citizens, able to make informed decisions when it comes to voting or other political actions.\"},\n    \"inspire\": {\"request\": \"ms. roxana, can you please share a brief inspiring story about the importance of modern US History?\", \"response\": \"One inspiring story of the importance of modern US History is that of Fred Korematsu. Fred was an American citizen of Japanese descent and in 1942 was ordered to evacuate California with the rest of Japanese Americans due to US policy regarding Pearl Harbor. Fred refused to comply and was arrested, jailed and later brought to court under the charge of violating military orders. He eventually lost the trial, where the supreme court ruled for the government, citing national security as a reason for the evacuation. Later, Fred’s conviction was overturned in 1983 as the court determined that the executive branch had misled the supreme court during Fred’s original case. Fred became a prominent civil rights activist, and is an inspiring example of the power of civil liberties in the US – a story that can be traced from modern US History.\"},\n    \"summarize\": {\"request\": \"ms. roxana, can you please quickly summarize the basics of the importance of modern US History in a 3 sentence paragraph?\", \"response\": \"Modern US History is important to understand as it can help inform our views on current and pressing national issues. It provides key tools to be informed and effective citizens, by considering the history of government, economics and social issues. Additionally, it enables us to appreciate the strength of our cultural heritage, and to build a more equitable society.\"},\n    \"ask\": {\"request\": \"ms. roxana, can you please show me three frequently asked beginner questions about the importance of modern US History with one sentence answers?\", \"response\": \"Q: What is modern US History? A: Modern US History is the study of the history of the United States from the end of the 19th century to today. Q: Why is modern US History important? A: Modern US History is important to understand as it can help inform us around decisions related to civil liberties, minorities, and the role of the nation in world affairs. Q: How can studying modern US History help us? A: Studying modern US History can help us gain a better understanding of our nation’s progress over time, builds critical thinking and debating skills, and helps to develop an informed citizenry.\"},\n    \"guide\": {\"request\": \"ms. roxana, can you please create a 10 point study study guide for the importance of modern US History?\", \"response\": \"1. Identify the key elements of Modern US History. 2. Learn about the civil liberties, and how they have impacted social reform in the US. 3. Understand the role of minorities in US Politics. 4. Study the development of the federal government and the three branches. 5. Research the key events of the 20th century, and how they shaped Modern US History. 6. Evaluate the impact of economic theories on everyday life. 7. Explore the history of social movements and their role in society. 8. Compare the roles of the President in domestic and foreign policies. 9. Learn about the struggles of civil rights and civil liberties in the US. 10. Develop an understanding of the influence of foreign powers and international relations on US History. \"},\n    \"demonstrate\": {\"request\": \"ms. roxana, what's an example of the importance of modern US History?\", \"response\": \"An example of the importance of modern US History is the Civil Rights Movement, which was a struggle for racial justice that took place throughout the 1950s and 1960s. This movement changed the face of modern US History as it not only helped secure equal rights to African Americans, but also gave other minority groups hope for a better tomorrow.\"}, \n    \"define\": {\"request\": \"ms. roxana, can you please define the importance of modern US History in exactly one sentence?\", \"response\": \"The importance of Modern US History lies in its ability to provide political and social context for understanding our current national issues and helping us develop into informed citizens.\"}, \n    \"quiz\": {\"request\": \"ms. roxana, can you please write a 3 question quiz for beginners that's challenging about the importance of modern US History?\", \"response\": \"Q1: What political event took place in the 1950s and 1960s that changed modern US History? A1: The Civil Rights Movement. Q2: What economic theory had a major impact on the growth of the nation in the 20th century? A2: Keynesian economics. Q3: What happened to Fred Korematsu after he was arrested for refusing to evacuate California in 1942? A3: His conviction was overturned in 1983 by the Supreme Court.\"}\n}"
      // };

      "JSON", json;
      let data = JSON.parse(json.bot?.content);

      let demoCopy = demo;

      // database user module key
      if (Object.keys(demoCopy)[0] !== uniqueID) {
        Object.defineProperty(
          demoCopy,
          uniqueID,
          Object.getOwnPropertyDescriptor(demoCopy, Object.keys(demoCopy)[0])
        );
        delete demoCopy[Object.keys(demoCopy)[0]];
      }

      // for every key found in the first key set of demo
      Object.keys(demoCopy[Object.keys(demoCopy)[0]].prompts).forEach(
        (prompt) => {
          "data", demoCopy[Object.keys(demoCopy)[0]].prompts[prompt].request;
          demoCopy[Object.keys(demoCopy)[0]].prompts[prompt].request =
            data[prompt]?.request || "e";
          demoCopy[Object.keys(demoCopy)[0]].prompts[prompt].response =
            data[prompt]?.response || "e";
        }
      );

      demoCopy[Object.keys(demoCopy)[0]].header = currentTitle;
      demoCopy[Object.keys(demoCopy)[0]].button = currentTitle;

      // the keys found ins
      // Object.keys(Object.keys(demo)[0].prompts).forEach(prompt => {
      //   demo[Object.keys(demo)[0]].request = parsedData[prompt].request
      //   demo[prompt].response = demo[prompt].response
      // })

      "copy", demoCopy;

      setDemo(demoCopy);
      setGptResponse(data);
      setIsResponseGenerating(false);

      if (
        (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) &&
        !isDemo
      ) {
        //doesnt return obj, so update firebase and react seperately

        let moduleCollectionRef = collection(userDocumentReference, "modules");

        await setDoc(doc(userDocumentReference, "modules", uniqueID), demoCopy);
        await setDoc(doc(database, "modules", uniqueID), demoCopy);

        let storedDocument = doc(userDocumentReference, "modules", uniqueID);
        // let globalModules = doc(globalModulesCollectionReference,)
        const docSnap = await getDoc(storedDocument);

        if (docSnap.exists()) {
        } else {
          // doc.data() will be undefined in this case
          ("No such document!");
        }

        await updateDoc(userDocumentReference, {
          impact: databaseUserDocument?.impact + 1800,
        });

        await updateDoc(globalDocumentReference, {
          total: globalImpactCounter + 1800,
        });

        let docCopy = databaseUserDocument;
        docCopy.impact = databaseUserDocument?.impact + 1800;
        setDatabaseUserDocument(docCopy);

        let globalCopy = globalImpactCounter;
        globalCopy = globalImpactCounter + 1800;
        setGlobalImpactCounter(globalCopy);

        documentProcForGlobalModules(globalModulesCollectionReference);
      }

      localStorage.setItem("lastClicked", new Date().toISOString());
      setIsDisabled(true);
    } catch (error) {
      //release try again buttonthe importance of modern US history after civil rights
      "error", error;
      "{error}", { error };
      setDidGptFailTask(true);
      setIsResponseGenerating(false);
      setGptResponse({});
    }
  };

  useEffect(() => {
    const lastClicked = localStorage.getItem("lastClicked");
    const oneMinuteAgo = new Date(Date.now() - 60000); // One minute in milliseconds
    // Two weeks in milliseconds

    if (
      lastClicked &&
      new Date(lastClicked) >= oneMinuteAgo &&
      import.meta.env.VITE_SHEILF !==
        localStorage.getItem("infiniteKnowledgePasscode")
    ) {
      setIsDisabled(true);
    }
  }, []);

  return (
    <Modal centered show={isInfiniteKnowledgeEngine9001open} fullscreen>
      <Modal.Header
        closeButton
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Modal.Title>InfiniteKnowledgeEngine9001</Modal.Title>
      </Modal.Header>
      <Modal.Body
        onHide={() => setIsInfiniteKnowledgeEngine9001open(false)}
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
                <h1
                  style={{
                    borderBottom: "1px solid teal",
                    padding: 12,
                    color: "white",
                    opacity: "0.8",
                  }}
                >
                  Tone
                </h1>
                <div style={{ width: "fit-content" }}>
                  <h6>create voice tone for the robot</h6>
                  <br />

                  <div style={{ maxWidth: 300 }}>
                    select a role model 💡
                    <Form.Select
                      aria-label="select-role-model"
                      onChange={selectRoleModel}
                      value={currentRoleModel}
                      style={{
                        padding: 12,
                        fontSize: "1.5rem",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      {[
                        "Rumi",
                        // "Sal Khan",
                        "Steve Jobs",
                        "Maya Angelou",
                        "Barack Obama",
                        "Sonia Sotomayor",
                        "Doctor",
                        "Lawyer",
                        "Therapist",
                        "Professor",
                        "Entrepeneur",
                        "Software Engineer",
                        "Social Media Manager",
                        "Elementary School Teacher",
                      ].map((type) => (
                        <option label={`${type}`} id={type} name="roleModels">
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </div>

                  {/* <div style={{maxWidth:300}}>
          
                  select a language
                  <Form.Select aria-label="select-role-model" onChange={selectSpokenLanguage}>

                    {['English', 'Spanish', 'Swahili', 'Yoruba', 'Modern Standard Arabic'].map((type) => (

                      <option
                        label={`${type}`}
                        id={type}
                        name="languages"
                      >{type}</option>

                    ))}

                  </Form.Select>

                </div> */}

                  {/* <div style={{ maxWidth: 300 }}>
                    select a character 💡
                    <Form.Select
                      aria-label="select-character"
                      onChange={selectCharacter}
                      value={character}
                      style={{
                        padding: 12,
                        fontSize: "1.5rem",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      {[
                      ].map((type) => (
                        <option label={`${type}`} id={type} name="characters">
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </div> */}

                  {/* <div style={{ maxWidth: 450 }}>
                    select an ethnic or cultural identity 🌍
                    <br />
                    <Form
                      aria-label="select-role-model"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        maxWidth: 450,
                        justifyContent: "center",
                      }}
                    >
                      {[
                        "American",
                        "Amerindian",
                        "Black American",
                        "Latino",
                        "African",
                        "Arabic",
                        "Asian",
                        "South Asian",
                        "Eastern European",
                        "Western European",
                      ].map((type) => (
                        <div
                          key={`default-${type}`}
                          className="mb-3"
                          style={{
                            margin: 12,
                            width: 200,
                            backgroundColor: "black",
                            color: "white",
                            border: "1px solid #AC8E68",
                            borderRadius: 16,
                            padding: 12,
                          }}
                        >
                          <Form.Check
                            onChange={selectCulturalRegions}
                            type="checkbox"
                            id={`${type}`}
                            label={`${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </div> */}
                </div>
                <br />
                <br />
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
                      Create
                    </h1>
                    <div style={{ width: "fit-content" }}>
                      <h6>
                        create a module with a few simple key descriptions
                      </h6>
                      <br />

                      <h6>define a title</h6>
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

                      <h6>
                        define a subject you want to generate material for
                      </h6>
                      <InputGroup size="lg">
                        {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}

                        <Form.Control
                          // aria-label="Large"
                          as="textarea"
                          aria-describedby="inputGroup-sizing-md"
                          onChange={handleSubjectPromptChange}
                          style={{ padding: 12 }}
                        />
                      </InputGroup>
                      <br />
                    </div>

                    <div>
                      <Button
                        disabled={
                          currentPrompt?.length < 1 ||
                          currentTitle?.length < 1 ||
                          isResponseGenerating ||
                          isDisabled
                        }
                        onClick={handleCourseGeneration}
                      >
                        {didGptFailTask ? "Try again" : "Create module"}
                      </Button>
                      <br />
                      <br />
                      {!gptResponse ? (
                        <>
                          You may need to try a few times. sorry 🐌🐢
                          <br />
                          robot internet is in its dial-up era 😔
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isResponseGenerating ? (
              <div>
                <RoxanaLoadingAnimation />
              </div>
            ) : null}

            {!isEmpty(gptResponse) && !isResponseGenerating ? (
              <div style={{ maxWidth: 450 }}>
                <u>Success! 🎉 This course has been saved to your profile</u>
                <br />
                visit{" "}
                <Link
                  to={`${Object.keys(demo)[0]}`}
                  onClick={() => setIsInfiniteKnowledgeEngine9001open(false)}
                >
                  {" "}
                  /{Object.keys(demo)[0]}{" "}
                </Link>{" "}
                to share or view your course
                <br />
                <br />
                <h3>{currentTitle}</h3>
                <ChatGPT
                  currentPath={currentPath}
                  patreonObject={demo[Object.keys(demo)[0]]}
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
                  isGeneratedDemo={true}
                />
                <br />
                <h3>Prompt Engine Optimization</h3>
                <div>This is what the robot is made out of 🏗️</div>
                <ReactJson
                  theme={"threezerotwofour"}
                  enableClipboard
                  src={demo[Object.keys(demo)[0]]?.prompts}
                  quotesOnKeys={false}
                />
              </div>
            ) : null}

            {isResponseGenerating ? (
              <div style={{ maxWidth: 450 }}>
                <br />
                <br />
                <h3>Here's how I'm generating the course 😊</h3>
                <ReactJson
                  theme={"threezerotwofour"}
                  enableClipboard
                  src={{
                    ["T-ask"]: `I'm going to send a JSON value that describes a set of questions being asked to you. Please answer them as a warm and energetic ${currentIdentities.join(
                      ", "
                    )} ${currentRoleModel.toLocaleLowerCase()} educating beginners. Answer each question found in the key defined as 'request' and fill out the 'response' key with your answer. Thank you ms. roxana!`,
                  }}
                  quotesOnKeys={false}
                />
                <br />
              </div>
            ) : null}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
        <Button
          variant="secondary"
          onClick={() => {
            setCurrentRoleModel("Professor");
            setCurrentTitle("");
            setCurrentIdentities([]);
            setDidGptFailTask(false);
            setCurrentPrompt("");

            setIsInfiniteKnowledgeEngine9001open(false);
          }}
        >
          Back to app
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
