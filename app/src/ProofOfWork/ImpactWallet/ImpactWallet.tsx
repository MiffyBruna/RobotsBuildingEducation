import { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { Button, Form, Modal, ProgressBar } from "react-bootstrap";
import { getGlobalImpact } from "../../common/uiSchema";
import sheilferBitcoin from "../../common/media/images/sheilferBitcoin.jpeg";
import cashAppCard from "../../common/media/images/cashAppCard.jpeg";
import roxanaChat from "../../common/media/images/roxanaChat.png";
import { logEvent } from "firebase/analytics";
import { analytics, database } from "../../database/firebaseResources";
import { DiscordButton } from "../../common/ui/Displays/DiscordButton/DiscordButton";
import { doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { EmotionalIntelligence } from "./EmotionalIntelligence/EmotionalIntelligence";
import { japaneseThemePalette, textBlock } from "../../styles/lazyStyles";

import { Scheduler } from "./Scheduler/Scheduler";
import { decentralizedEducationTranscript } from "../../App.constants";
import { Star, StarsContainer } from "./ImpactWallet.styles";
import { Cofounder } from "./Cofounder/Cofounder";
import {
  Button as AlbyButton,
  Modal as AlbyModal,
  launchModal as albyLaunchModal,
  closeModal as albyCloseModal,
} from "@getalby/bitcoin-connect-react";
import { BitcoinManager } from "./BitcoinManager/BitcoinManager";
import { getAuth, signOut } from "firebase/auth";
import { ChatFrame } from "./ChatFrame/ChatFrame";
import { Portfolio } from "./Portfolio/Portfolio";
import { BossMode } from "./BossMode/BossMode";

const renderTranscriptAwards = (profileData) => {
  if (isEmpty(profileData)) {
    return (
      <div>
        No data is available. <br />
        <br />
      </div>
    );
  }

  let awards = [];

  let decentralizedEducationTranscriptCopy = decentralizedEducationTranscript;
  for (const key in decentralizedEducationTranscript) {
    awards.push(
      <div
        id={`${key}`}
        label={`${key}`}
        style={{
          width: 125,
          height: 125,
          backgroundColor: profileData[key]
            ? "rgba(13,41,179, 1)"
            : "rgba(206, 206, 214,0.3)",
          margin: 2,
          border: profileData[key]
            ? "5px solid rgba(0,0,255, 1)"
            : "5px solid gray",
          borderRadius: "20%",
          padding: 5,
        }}
      >
        {key}
      </div>
    );
  }

  return awards;
};
const renderCheckboxes = (profileData) => {
  let checkboxes = [];

  if (isEmpty(profileData)) {
    return (
      <div>
        No data is available. <br />
        <br />
      </div>
    );
  }

  for (const key in profileData) {
    if (profileData[key]) {
      checkboxes.push(
        <Form.Check
          type="checkbox"
          id={`${key}`}
          label={`${key}`}
          checked={profileData[key]}
          readOnly
        />
      );
    }
  }

  if (checkboxes.length < 1) {
    return (
      <div>
        rox doesn't see any proof of work yet. Have you not studied yet?😠{" "}
        <br />
      </div>
    );
  }

  return checkboxes;
};

export const ImpactWallet = ({
  isChatFrameOpen,
  setIsChatFrameOpen,
  globalScholarshipCounter,
  databaseUserDocument,
  computePercentage,
  globalImpactCounter,
  isImpactWalletOpen,
  setIsImpactWalletOpen,

  userAuthObject = { uid: "null" },
  handlePathSelection,
  isDemo,
  globalReserveObject,

  isEmotionalIntelligenceOpen,
  setIsEmotionalIntelligenceOpen,
  usersEmotionsCollectionReference,
  usersEmotionsFromDB,
  updateUserEmotions,
  setIsSchedulerOpen,
  isSchedulerOpen,

  showStars,
  showZap,
  isCofounderOpen,
  setIsCofounderOpen,
  handleZeroKnowledgePassword,
  userStateReference,
  globalStateReference,
  zap,
  isBossModeOpen,
  setIsBossModeOpen,
}) => {
  let [databaseUserDocumentCopy, setDatabaseUserDocumentCopy] = useState({});

  let params = useParams();

  useEffect(() => {
    if (params?.profileID && params?.profileID !== userAuthObject?.uid) {
      const docRef = doc(database, "users", params?.profileID);
      getDoc(docRef).then((res) => {
        if (!res?.data()) {
          // unsafe case?
        } else {
          setDatabaseUserDocumentCopy(res?.data());
          setIsImpactWalletOpen(true);
        }
      });
    } else {
      setDatabaseUserDocumentCopy(databaseUserDocument);
    }
  }, [databaseUserDocument]);

  let impactResult = databaseUserDocumentCopy?.impact;

  /**
   *               {/* <iframe
                src="https://chat.openai.com/g/g-09h5uQiFC-ms-roxana"
                title="W3Schools Free Online Web Tutorials"
              ></iframe> 
  */

  return (
    <>
      <div>
        {!isDemo ? (
          <Button
            style={{ textShadow: "2px 2px 12px black" }}
            onClick={() => {
              logEvent(analytics, "select_content", {
                content_type: "button",
                item_id: "Boss Mode",
              });
              setIsBossModeOpen(true);
            }}
            variant="secondary"
            // disabled
          >
            💎
          </Button>
        ) : null}
        &nbsp; &nbsp;
        {!isDemo ? (
          <Button
            style={{ textShadow: "2px 2px 12px black" }}
            onClick={() => {
              logEvent(analytics, "select_content", {
                content_type: "button",
                item_id: "Cofounder",
              });
              setIsCofounderOpen(true);
            }}
            variant="secondary"
          >
            🌀
          </Button>
        ) : null}
        &nbsp; &nbsp;
        {!isDemo ? (
          <a
            href="https://chat.openai.com/g/g-09h5uQiFC-ms-roxana"
            target="_blank"
          >
            <Button
              style={{ textShadow: "2px 2px 12px black" }}
              onClick={() => {
                logEvent(analytics, "select_content", {
                  content_type: "button",
                  item_id: "Scheduler",
                });
                // setIsChatFrameOpen(true);
              }}
              variant="secondary"
            >
              <img
                src={roxanaChat}
                width="16"
                style={{
                  borderRadius: "50%",
                  boxShadow: "2px 2px 12px black",
                  marginBottom: 1,
                }}
              />
            </Button>
          </a>
        ) : null}
        &nbsp; &nbsp;
        {!isDemo ? (
          <Button
            style={{ textShadow: "2px 2px 12px black" }}
            onClick={() => {
              logEvent(analytics, "select_content", {
                content_type: "button",
                item_id: "Therapy Session",
              });
              setIsEmotionalIntelligenceOpen(true);
            }}
            variant="secondary"
          >
            🫶🏽
          </Button>
        ) : null}
        &nbsp; &nbsp;
        <Link to={`/profile/${params?.profileID || userAuthObject?.uid}`}>
          <Button
            style={{ textShadow: "2px 2px 12px black" }}
            onClick={() => {
              logEvent(analytics, "select_content", {
                content_type: "button",
                item_id: "Proof of Work",
              });
              setIsImpactWalletOpen(true);
            }}
            variant="secondary"
          >
            🏦
            <StarsContainer className={showStars ? "animate" : ""}>
              {[...Array(10)].map((_, index) => (
                <Star className="star" key={index}>
                  ✨
                </Star>
              ))}
            </StarsContainer>
            <StarsContainer className={showZap ? "animate" : ""}>
              {[...Array(10)].map((_, index) => (
                <Star className="zap" key={index}>
                  ⚡
                </Star>
              ))}
            </StarsContainer>
          </Button>
        </Link>
        &nbsp; &nbsp; &nbsp;{" "}
        {databaseUserDocumentCopy?.impact || databaseUserDocument?.impact || 0}{" "}
        <div>
          <ProgressBar
            style={{
              backgroundColor: "black",
              borderRadius: "0px",
              margin: 6,
              height: 6,
            }}
            variant="success"
            now={Math.floor(computePercentage * 100)}
          />
        </div>
      </div>

      {/* need to conditionall render this */}
      <Modal
        centered
        show={isImpactWalletOpen}
        fullscreen
        onHide={() => setIsImpactWalletOpen(false)}
        keyboard
      >
        <Modal.Header
          closeVariant="white"
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title style={{ fontFamily: "Bungee" }}>
            Proof of Work @{params?.profileID || userAuthObject?.uid}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            padding: 0,
            backgroundColor: "black",
            color: "white",
            backgroundImage: `url(${cashAppCard})`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: 24,
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            {/* <AlbyButton onConnect={() => alert("Connected!")}></AlbyButton> */}
            {/* <BitcoinManager
                handleZeroKnowledgePassword={handleZeroKnowledgePassword}
              /> */}

            <h4 style={{ fontFamily: "Bungee" }}>
              Your Decentralized Transcript
            </h4>
            <div
              style={{
                borderRadius: "12px",
                width: "fit-content",
                padding: 12,
                color: "black",
                backgroundColor: "rgba(252, 233, 177, 1)",
                // textShadow: "0px 0px 20px black",
              }}
            >
              <Form>
                {renderCheckboxes(
                  userStateReference.databaseUserDocument.profile
                )}
              </Form>
            </div>
            <br />
            <h4 style={{ fontFamily: "Bungee" }}>Transcript Awards</h4>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {renderTranscriptAwards(
                userStateReference.databaseUserDocument.profile
              )}
            </div>
            <br />

            <h4 style={{ fontFamily: "Bungee" }}>
              Scholarships Created: {globalScholarshipCounter}
            </h4>
            <p>
              Work Done By You
              <br />
              {impactResult}
              {/* / {getGlobalImpact()} */}
              <ProgressBar
                style={{
                  backgroundColor: "black",
                  borderRadius: "0px",
                  margin: 12,
                  borderRadius: 5,
                }}
                // variant="success"
                now={Math.floor(computePercentage * 100)}
              />
              <br />
              Work Done By All
              <br />
              <b>{globalImpactCounter}</b>
              <br />
              <br />
              You are &nbsp;
              <b>
                {(
                  ((databaseUserDocumentCopy?.impact ||
                    databaseUserDocument.impact ||
                    0) /
                    globalImpactCounter) *
                  100
                ).toFixed(2) || "0"}
                %
              </b>
              &nbsp;of the work 😳
              <ProgressBar
                style={{
                  backgroundColor: "black",
                  borderRadius: "0px",
                  margin: 12,
                  borderRadius: 5,
                }}
                variant="warning"
                now={Math.floor(
                  ((databaseUserDocumentCopy?.impact ||
                    databaseUserDocument.impact ||
                    0) /
                    globalImpactCounter) *
                    100
                )}
              />
              <hr />
            </p>
            <br />
            <h4 style={{ fontFamily: "Bungee" }}> The Proof of Work System</h4>
            <p
              style={{
                maxWidth: 700,
                ...textBlock(japaneseThemePalette.KyotoPurple, 0, 24),
              }}
            >
              Robots Building Education uses a system called Proof Of Work to
              measure learning. When you use the application, you're putting
              robots to work! That work produces outcomes that should be
              meaningful to communities, like improved finance for
              under-resourced schools or homes. You can think of this system as
              some kind of engine for universal basic income! 😁
            </p>

            <p
              style={{
                maxWidth: 700,
                ...textBlock(japaneseThemePalette.FujiSanBlue, 0, 24),
              }}
            >
              The vision is to turn this into a decentralized protocol. Systems
              and interfaces should allow us to rewire education services,
              finance and content for a new era of software.
            </p>

            <br />

            <div>
              <h4 style={{ fontFamily: "Bungee" }}>The Reserve</h4>
              <h6>invested {globalReserveObject?.invested || "N/A"}</h6>

              <h6>last updated {globalReserveObject?.last_updated}</h6>
              <div></div>
              {/* <Portfolio /> */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Link to={`/`}>
            <Button variant="dark" onClick={() => setIsImpactWalletOpen(false)}>
              Back to app
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <EmotionalIntelligence
        isEmotionalIntelligenceOpen={isEmotionalIntelligenceOpen}
        setIsEmotionalIntelligenceOpen={setIsEmotionalIntelligenceOpen}
        usersEmotionsCollectionReference={usersEmotionsCollectionReference}
        usersEmotionsFromDB={usersEmotionsFromDB}
        updateUserEmotions={updateUserEmotions}
        userStateReference={userStateReference}
        globalStateReference={globalStateReference}
        zap={zap}
      />
      {/* 
      <Scheduler
        isSchedulerOpen={isSchedulerOpen}
        setIsSchedulerOpen={setIsSchedulerOpen}
        userStateReference={userStateReference}
        zap={zap}
      /> */}

      <Cofounder
        isCofounderOpen={isCofounderOpen}
        setIsCofounderOpen={setIsCofounderOpen}
        userStateReference={userStateReference}
        globalStateReference={globalStateReference}
        zap={zap}
      />

      <BossMode
        isBossModeOpen={isBossModeOpen}
        setIsBossModeOpen={setIsBossModeOpen}
        userStateReference={userStateReference}
        globalStateReference={globalStateReference}
        zap={zap}
      />

      {/* <ChatFrame
        setIsChatFrameOpen={setIsChatFrameOpen}
        isChatFrameOpen={isChatFrameOpen}
        userStateReference={userStateReference}
        globalStateReference={globalStateReference}
      /> */}
    </>
  );
};
