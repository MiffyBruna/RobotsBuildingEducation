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
  formatEmotionItem,
  formatFriendlyDate,
} from "./EmotionalIntelligence.compute";

import roxanaFocusing from "../../../common/media/images/roxanaFocusing.png";
import roxanaKind from "../../../common/media/images/roxanaKind.png";

export const EmotionalIntelligence = ({
  isEmotionalIntelligenceOpen,
  setIsEmotionalIntelligenceOpen,
  usersEmotionsCollectionReference,
  usersEmotionsFromDB,
  updateUserEmotions,
}) => {
  const [isEmotionModalOpen, setIsEmotionModalOpen] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [emotionNote, setEmotionNote] = useState("");
  const [shouldRenderSaveButton, setShouldRenderSaveButton] = useState(false);

  const [isAiResponseLoading, setIsAiResponseLoading] = useState(false);
  const [chatGptResponse, setChatGptResponse] = useState("");

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
    }).catch(() => {
      setIsAiResponseLoading(false);
    });

    if (response) {
      let data = await response.json();

      setIsAiResponseLoading(false);
      setChatGptResponse(data?.bot?.content || "");
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

  return (
    <>
      <Modal centered show={isEmotionalIntelligenceOpen} fullscreen>
        <Modal.Header style={EmotionalIntelligenceStyles.Header}>
          <Modal.Title>Emotional Intelligence</Modal.Title>
        </Modal.Header>
        <Modal.Body style={EmotionalIntelligenceStyles.Body}>
          <h1 style={EmotionalIntelligenceStyles.Banner}>
            <div style={EmotionalIntelligenceStyles.BannerBackground}>
              🌌&nbsp;How do you feel today?
            </div>
          </h1>

          <div style={EmotionalIntelligenceStyles.EnergyLevelContainer}>
            <h3 style={{ textAlign: "center" }}>High Energy</h3>
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
            <h3 style={{ textAlign: "center" }}>Low Energy</h3>
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
              <h1 style={EmotionalIntelligenceStyles.Banner}>
                <div style={EmotionalIntelligenceStyles.BannerBackground}>
                  The journey 🌦️
                </div>
              </h1>

              <div style={EmotionalIntelligenceStyles.JourneyContainer}>
                {Object.keys(usersEmotionsFromDB)?.map((item) => (
                  <div>
                    <br />
                    <h3
                      style={{
                        textAlign: "center",
                        width: "100vw",
                      }}
                    >
                      {item}
                    </h3>
                    {usersEmotionsFromDB[item]
                      .map((emotion) => (
                        <EmotionButton
                          color={emotion?.color}
                          colorHover={emotion.colorHover}
                          onClick={() => handleEmotionSelection(emotion, false)}
                        >
                          {emotion?.label}
                          <br />
                          {emotion?.emoji}
                        </EmotionButton>
                      ))
                      .reverse()}
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </Modal.Body>
        <Modal.Footer style={EmotionalIntelligenceStyles.Footer}>
          <Button
            variant="dark"
            onClick={() => setIsEmotionalIntelligenceOpen(false)}
          >
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isEmotionModalOpen} centered>
        <Modal.Header
          closeButton
          style={EmotionalIntelligenceStyles.EmotionHeader}
        >
          <Modal.Title>
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
            <div style={EmotionalIntelligenceStyles.TextAlignCenter}>
              <RoxanaLoadingAnimation />
            </div>
          ) : null}

          {chatGptResponse || selectedEmotion?.ai ? (
            <div style={EmotionalIntelligenceStyles.AiResponseContainer}>
              <div style={EmotionalIntelligenceStyles.AiResponseMessage}>
                {chatGptResponse || selectedEmotion?.ai}
              </div>
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer style={EmotionalIntelligenceStyles.EmotionFooter}>
          <Button
            variant="dark"
            onClick={() => {
              setIsEmotionModalOpen(false);
              setChatGptResponse("");
              setShouldRenderSaveButton(false);
              setEmotionNote("");
            }}
          >
            Exit
          </Button>

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
