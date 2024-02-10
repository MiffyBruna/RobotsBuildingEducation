//@ts-nocheck
import { useState } from "react";
import { isEmpty } from "lodash";
import { Button, Modal } from "react-bootstrap";
import {
  EmotionButton,
  EmotionalIntelligenceStyles,
} from "./EmotionalIntelligence.styles";
import { addDoc } from "firebase/firestore";
import Form from "react-bootstrap/Form";
import {
  RoxanaLoadingAnimation,
  postInstructions,
} from "../../../common/uiSchema";
import {
  highEnergyFeelings,
  lowEnergyFeelings,
} from "./EmotionalIntelligence.data";
import {
  customInstructions,
  emotionSummarizer,
  formatEmotionItem,
  formatFriendlyDate,
} from "./EmotionalIntelligence.compute";

import roxanaFocusing from "../../../common/media/images/roxanaFocusing.png";
import roxanaKind from "../../../common/media/images/roxanaKind.png";
import { SunsetCanvas } from "./SunsetCanvas";
import { useZap } from "../../../App.hooks";
import { updateImpact } from "../../../App.compute";

export const EmotionalIntelligence = ({
  isEmotionalIntelligenceOpen,
  setIsEmotionalIntelligenceOpen,
  usersEmotionsCollectionReference,
  usersEmotionsFromDB,
  updateUserEmotions,
  userStateReference,
  globalStateReference,
  zap,
  handleZap,
}) => {
  const [isEmotionModalOpen, setIsEmotionModalOpen] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [emotionNote, setEmotionNote] = useState("");
  const [shouldRenderSaveButton, setShouldRenderSaveButton] = useState(false);

  const [isAiResponseLoading, setIsAiResponseLoading] = useState(false);
  const [isSummarizerLoading, setIsSummarizerLoading] = useState(false);
  const [chatGptResponse, setChatGptResponse] = useState("");

  const [summarizerResponse, setSummarizerResponse] = useState("");

  const handleEmotionSelection = async (item, shouldRunDatabase = true) => {
    let formattedItem = formatEmotionItem(item, Date.now(), "timestamp");
    formattedItem = formatEmotionItem(formattedItem, item?.ai, "ai");

    if (shouldRunDatabase) {
      setShouldRenderSaveButton(true);
    }

    setIsEmotionModalOpen(true);
    setSelectedEmotion(formattedItem);
  };

  const generateAdviceOrWisdom = async () => {
    setIsAiResponseLoading(true);

    let prompt = customInstructions({
      emotionNote,
      selectedEmotion,
    });

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({ prompt }),
    })
      .then((response) => {
        if (
          localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
        ) {
          zap().then((lightningResponse) => {
            if (lightningResponse?.preimage) {
              updateImpact(1, userStateReference, globalStateReference);
            }
          });
        }

        return response;
      })
      .catch(() => {
        setIsAiResponseLoading(false);
      });

    if (response) {
      let data = await response.json();
      setIsAiResponseLoading(false);
      setChatGptResponse(data?.bot?.content || "");
      handleZap("ai");
    }
  };

  const saveEmotionData = async () => {
    let savedData = formatEmotionItem(selectedEmotion, chatGptResponse, "ai");
    savedData = formatEmotionItem(savedData, emotionNote, "note");

    await addDoc(usersEmotionsCollectionReference, savedData);
    updateUserEmotions(usersEmotionsCollectionReference);
    setIsEmotionModalOpen(false);
    setChatGptResponse("");
    setShouldRenderSaveButton(false);
  };

  const reviewJourney = async () => {
    setIsSummarizerLoading(true);
    let prompt = emotionSummarizer(JSON.stringify(usersEmotionsFromDB));

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({ prompt }),
    })
      .then((response) => {
        if (
          localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
        ) {
          zap().then((lightningResponse) => {
            if (lightningResponse?.preimage) {
              console.log("running zap");
              console.log("userStateReference", userStateReference);
              console.log("globalStateReference", globalStateReference);
              updateImpact(1, userStateReference, globalStateReference);
            }
          });
        }

        return response;
      })
      .catch(() => {
        setIsSummarizerLoading(false);
      });

    if (response) {
      let data = await response.json();

      handleZap("ai");
      setIsSummarizerLoading(false);
      setSummarizerResponse(data?.bot?.content || "");
    }
  };

  return (
    <>
      <Modal
        centered
        show={isEmotionalIntelligenceOpen}
        fullscreen
        keyboard
        onHide={() => setIsEmotionalIntelligenceOpen(false)}
      >
        <Modal.Header
          style={EmotionalIntelligenceStyles.Header}
          closeVariant="white"
          closeButton
        >
          <Modal.Title style={{ fontFamily: "Bungee" }}>
            Emotional Intelligence
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={EmotionalIntelligenceStyles.Body}>
          <h1 style={EmotionalIntelligenceStyles.Banner}>
            <div
              style={EmotionalIntelligenceStyles.BannerBackground}
              style={{ fontFamily: "Bungee" }}
            >
              🌌&nbsp;how do you feel today?
            </div>
          </h1>

          <div style={EmotionalIntelligenceStyles.EnergyLevelContainer}>
            <h3 style={{ textAlign: "center", fontFamily: "Bungee" }}>
              High Energy
            </h3>
            <div style={EmotionalIntelligenceStyles.RowWrapCenter}>
              {highEnergyFeelings.map((item) => (
                <EmotionButton
                  color={item.color}
                  colorHover={item.colorHover}
                  onClick={() => handleEmotionSelection(item, true)}
                >
                  {item?.label}
                  <br />
                  {item?.emoji}
                </EmotionButton>
              ))}
            </div>
            <br />
            <h3 style={{ textAlign: "center", fontFamily: "Bungee" }}>
              Low Energy
            </h3>
            <div style={EmotionalIntelligenceStyles.RowWrapCenter}>
              {lowEnergyFeelings.map((item) => (
                <EmotionButton
                  color={item.color}
                  colorHover={item.colorHover}
                  onClick={() => handleEmotionSelection(item, true)}
                >
                  {item?.label}
                  <br />
                  {item?.emoji}
                </EmotionButton>
              ))}
            </div>
          </div>

          {!isEmpty(usersEmotionsFromDB) ? (
            <>
              <h1
                style={{
                  ...EmotionalIntelligenceStyles.Banner,
                  fontFamily: "Bungee",
                }}
              >
                <div
                  style={{
                    ...EmotionalIntelligenceStyles.BannerBackground,
                    fontFamily: "Bungee",
                  }}
                >
                  the journey &nbsp;
                  <Button variant="light" onClick={reviewJourney}>
                    💌
                  </Button>
                </div>
              </h1>
              {isSummarizerLoading ? (
                <div style={{ textAlign: "center" }}>
                  <RoxanaLoadingAnimation />
                </div>
              ) : null}
              {!isEmpty(summarizerResponse) ? (
                <div
                  style={
                    EmotionalIntelligenceStyles.SummarizerResponseContainer
                  }
                >
                  <div
                    style={{
                      ...EmotionalIntelligenceStyles.AiResponseMessage,
                      maxWidth: 600,
                    }}
                  >
                    {summarizerResponse}
                  </div>
                </div>
              ) : null}

              <div style={EmotionalIntelligenceStyles.JourneyContainer}>
                {Object.keys(usersEmotionsFromDB)?.map((itemDate) => {
                  return (
                    <div>
                      <br />
                      <h3
                        style={{
                          textAlign: "center",
                          width: "100vw",
                          fontFamily: "Bungee",
                        }}
                      >
                        {itemDate}
                      </h3>
                      {usersEmotionsFromDB[itemDate]
                        .map((emotion) => (
                          <EmotionButton
                            color={emotion?.color}
                            colorHover={emotion.colorHover}
                            onClick={() =>
                              handleEmotionSelection(emotion, false)
                            }
                          >
                            {emotion?.label}
                            <br />
                            {emotion?.emoji}
                          </EmotionButton>
                        ))
                        .reverse()}
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </Modal.Body>
        {/* <Modal.Footer style={EmotionalIntelligenceStyles.Footer}>
          <Button
            variant="dark"
            onClick={() => setIsEmotionalIntelligenceOpen(false)}
          >
            Back to app
          </Button>
        </Modal.Footer> */}
      </Modal>

      <Modal
        show={isEmotionModalOpen}
        centered
        keyboard
        onHide={() => {
          setIsEmotionModalOpen(false);
          setIsEmotionModalOpen(false);
          setChatGptResponse("");
          setShouldRenderSaveButton(false);
          setEmotionNote("");
        }}
        style={{ zIndex: 1000000 }}
      >
        <Modal.Header
          style={EmotionalIntelligenceStyles.EmotionHeader}
          closeVariant="white"
          closeButton
        >
          <Modal.Title style={{ fontFamily: "Bungee" }}>
            <img
              src={shouldRenderSaveButton ? roxanaFocusing : roxanaKind}
              width={50}
            />{" "}
            How You Feel
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={EmotionalIntelligenceStyles.EmotionBody}>
          <div style={{ marginBottom: 12 }}>
            <div style={EmotionalIntelligenceStyles.RowJustifyCenter}>
              <EmotionButton color={selectedEmotion?.color} noClick={true}>
                {selectedEmotion?.label}
                <br />
                {selectedEmotion?.emoji}
              </EmotionButton>
              <br />
              {shouldRenderSaveButton ? (
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={"Feel welcome to share how you feel :)"}
                  onChange={(event) => setEmotionNote(event.target.value)}
                  style={EmotionalIntelligenceStyles.EmotionNote}
                />
              ) : null}
              {selectedEmotion?.note && !shouldRenderSaveButton ? (
                <div style={{ padding: 10, height: 150, overflow: "scroll" }}>
                  <div>
                    You said the following on <br />
                    {formatFriendlyDate(selectedEmotion?.timestamp)}
                  </div>
                  <br />
                  <div style={{ wordBreak: "break-word" }}>
                    {selectedEmotion?.note}{" "}
                  </div>
                </div>
              ) : null}
            </div>

            {shouldRenderSaveButton ? (
              <div>
                <Button
                  variant="light"
                  style={EmotionalIntelligenceStyles.GenerateInsightButton}
                  onClick={generateAdviceOrWisdom}
                  disabled={isAiResponseLoading}
                >
                  generate insight 💌
                </Button>
              </div>
            ) : null}
          </div>
          {isAiResponseLoading ? (
            <div
              style={{
                ...EmotionalIntelligenceStyles.TextAlignCenter,

                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <RoxanaLoadingAnimation />
            </div>
          ) : null}

          {(chatGptResponse || selectedEmotion?.ai) && !isAiResponseLoading ? (
            <div style={EmotionalIntelligenceStyles.AiResponseContainer}>
              <div style={EmotionalIntelligenceStyles.AiResponseMessage}>
                {chatGptResponse || selectedEmotion.ai}
              </div>
            </div>
          ) : !isAiResponseLoading && !selectedEmotion?.note ? (
            <div
              style={{
                // backgroundColor: "rgba(0, 0, 0,1)",'

                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* take a deep breath and think positively :) */}
              <SunsetCanvas />
            </div>
          ) : !shouldRenderSaveButton ? (
            <div
              style={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {selectedEmotion.ai
                ? selectedEmotion?.ai
                : "AI assistance was not used."}
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer style={EmotionalIntelligenceStyles.EmotionFooter}>
          {/* <Button
            variant="dark"
            onClick={() => {
              setIsEmotionModalOpen(false);
              setChatGptResponse("");
              setShouldRenderSaveButton(false);
              setEmotionNote("");
            }}
          >
            Exit
          </Button> */}

          {shouldRenderSaveButton ? (
            <Button variant="dark" onClick={saveEmotionData}>
              Save
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};
