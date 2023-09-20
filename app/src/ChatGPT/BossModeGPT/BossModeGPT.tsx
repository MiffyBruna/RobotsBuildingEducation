import {
  Button,
  FloatingLabel,
  Form,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import roxanabrand from "../../common/media/images/roxanabrand.gif";
import roxanaGif from "../../common/media/images/roxanaGif.gif";
import isEmpty from "lodash/isEmpty";
import { updateDoc } from "firebase/firestore";
import Patreon from "../Patreon/Patreon";

export let BossModeGPT = ({
  patreonObject,
  promptSelection,
  loadingMessage,
  isRaidActive,
  handleBossModeGptRequest,
  bossModeGptHelperResponse,
  setBossModeGptHelperRequest,
  userDocumentReference,
  displayName,
  databaseUserDocument,
  isDemo,
  setDatabaseUserDocument,
  setGlobalImpactCounter,
  globalImpactCounter,
  globalDocumentReference,
}) => {
  // implement generally and reference this for animation score https://codepen.io/DLewin/pen/pBQQyb

  let RoxanaLoadingAnimation = () => {
    return (
      <div>
        <Spinner animation="grow" variant="info" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <img width="150px" src={roxanaGif} />
        <Spinner animation="grow" variant="primary" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };

  let handleSubmitAnswer = async () => {
    if (
      (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) &&
      !isDemo
    ) {
      //doesnt return obj, so update firebase and react seperately
      await updateDoc(userDocumentReference, {
        impact: databaseUserDocument?.impact + 1000,
      });

      await updateDoc(userDocumentReference, {
        level: databaseUserDocument?.level
          ? databaseUserDocument?.level + 1
          : 1,
      });

      // update global work
      await updateDoc(globalDocumentReference, {
        total: globalImpactCounter + 1000,
      });

      //   //copy it to react
      let docCopy = databaseUserDocument;
      docCopy.impact = databaseUserDocument?.impact + 1000;
      databaseUserDocument.level = databaseUserDocument?.level
        ? databaseUserDocument?.level + 1
        : 1;
      setDatabaseUserDocument(docCopy);

      let globalCopy = globalImpactCounter;
      globalCopy = globalImpactCounter + 250;
      setGlobalImpactCounter(globalCopy);
    } else {
      //copy it to react

      let docCopy = databaseUserDocument;
      docCopy.impact = databaseUserDocument?.impact + 1000;
      databaseUserDocument.level = databaseUserDocument?.level
        ? databaseUserDocument?.level + 1
        : 1;
      setDatabaseUserDocument(docCopy);

      let globalCopy = globalImpactCounter;
      globalCopy = globalImpactCounter + 1000;
      setGlobalImpactCounter(globalCopy);
    }
  };

  if (loadingMessage) {
    return <RoxanaLoadingAnimation />;
  }

  return (
    <div
      style={
        {
          // border: "1px solid red",
          // display: "flex",
          // flexDirection: "column",
          // alignContent: "center",
        }
      }
    >
      <br />
      <br />
      {promptSelection === "patreon" ? (
        <div>
          <div
            style={{
              width: "100%",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "400px",
                boxShadow:
                  "0 6x 12px rgba(255,255,255,1), 0 3px 3px rgba(255,255,255,1)",
              }}
            >
              <Patreon patreonObject={patreonObject} isAutoPlay />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#273932",
              color: "#FFF5CA",
              padding: 24,
              textAlign: "justify",
            }}
          >
            {bossModeGptHelperResponse
              ? bossModeGptHelperResponse
              : "Providence, in religion, is the belief that the universe is governed by the providence of God, or in some interpretations, of a group of gods. It means that God is actively involved in all aspects of the world, from the smallest details to the largest events. Abraham Lincoln was a firm believer in providence and often resorted to this concept in moments of crisis. He believed that God was a source of strength during difficult times, such as the Civil War. He was often quoted as saying “The will of God prevails.” He also believed that God was active in guiding the United States. In his Second Inaugural Address, he stated, “It may seem strange that any men should dare to ask a just God's assistance in wringing their bread from the sweat of other men's faces”, but he believed with faith and patience all difficulties will be overcome. This belief in providence has been seen in the events around the inauguration of the first African-American president, Barack Obama. Many people believe that the institution of slavery was finally overturned by the hand of providence."}
          </div>

          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <InputGroup
              size="lg"
              style={{
                padding: 12,
                width: "61.8%",
              }}
            >
              <FloatingLabel
                controlId="floatingTextarea"
                label="ask OpenAI for help"
                className="mb-3"
                style={{ color: "#FFF5CA", fontSize: "0.9rem" }}
              >
                <Form.Control
                  // aria-label="Large"

                  as="textarea"
                  aria-describedby="inputGroup-sizing-md"
                  style={{
                    fontSize: "0.8rem",
                    height: "100px",
                    backgroundColor: "#11220E",
                    color: "#FFF5CA",
                  }}
                  onChange={(event) =>
                    setBossModeGptHelperRequest(event.target.value)
                  }
                  value={
                    "Can you explain what providence is and how Abraham Lincoln used it?"
                  }
                  disabled={true}
                />
              </FloatingLabel>
            </InputGroup>
            <Button
              style={{
                height: "100%",
                backgroundColor: "#11220E",
                color: "#FFF5CA",
              }}
              variant="dark"
              onClick={handleBossModeGptRequest}
              disabled={true}
            >
              🧚 ask
            </Button>
          </div>

          <br />

          <br />
          <br />

          {/* basic submit input,prob itsown component based on patreon object/lesson number */}
          <Button variant="dark" onClick={handleSubmitAnswer} disabled={true}>
            Check Answer
          </Button>
        </div>
      ) : null}

      {/* {promptSelection === "guide" ? <div> ok II </div> : null}

      {promptSelection === "shop" ? <div> ok III </div> : null} */}
    </div>
  );
};
