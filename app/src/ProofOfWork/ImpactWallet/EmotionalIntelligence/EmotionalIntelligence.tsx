//@ts-nocheck
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  EmotionButton,
  EmotionalIntelligenceBodyStyles,
  EmotionalIntelligenceHeaderStyles,
  EmotionalIntelligenceStyles,
} from "./EmotionalIntelligence.styles";
import { addDoc } from "firebase/firestore";
import Form from "react-bootstrap/Form";
import { RoxanaLoadingAnimation } from "../../../common/uiSchema";
import {
  highEnergyFeelings,
  lowEnergyFeelings,
  postInstructions,
} from "./EmotionalIntelligence.data";

export const EmotionalIntelligence = ({
  isEmotionalIntelligenceOpen,
  setIsEmotionalIntelligenceOpen,
  usersEmotionsCollectionReference,
  usersEmotionsFromDB,
  documentProcForUsersEmotions,
}) => {
  const [openEmotion, setOpenEmotion] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [emotionNote, setEmotionNote] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [shouldRenderSaveButton, setShouldRenderSaveButton] = useState(false);

  const [isAiResponseLoading, setIsAiResponseLoading] = useState(false);
  const [chatGptResponse, setChatGptResponse] = useState("");

  const handleEmotionSelection = async (
    item,
    shouldRunDatabase = true,
    shouldOpenModal = true
  ) => {
    let formattedItem = {
      ...item,
      timestamp: Date.now(),
    };

    if (item?.ai) {
      formattedItem.ai = item.ai;
    }

    if (shouldRunDatabase) {
      setShouldRenderSaveButton(true);
    }

    if (shouldOpenModal) {
      setOpenEmotion(true);
    }

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
    let savedData = selectedEmotion;

    if (chatGptResponse) {
      savedData = {
        ...savedData,
        ai: chatGptResponse,
      };
    }
    await addDoc(usersEmotionsCollectionReference, savedData);
    documentProcForUsersEmotions(usersEmotionsCollectionReference);
    setOpenEmotion(false);
    setChatGptResponse("");
    setShouldRenderSaveButton(false);
  };

  const sortedEmotions =
    usersEmotionsFromDB?.length > 0
      ? usersEmotionsFromDB?.sort((a, b) => a?.timestamp - b?.timestamp)
      : [];

  return (
    <>
      <Modal centered show={isEmotionalIntelligenceOpen} fullscreen>
        <Modal.Header style={EmotionalIntelligenceStyles.Header}>
          <Modal.Title>Emotional Intelligence</Modal.Title>
        </Modal.Header>
        <Modal.Body style={EmotionalIntelligenceStyles.Body}>
          <h1 style={EmotionalIntelligenceStyles.Banner}>
            <div style={EmotionalIntelligenceStyles.BannerBackground}>
              🌌 How do you feel today?
            </div>
          </h1>

          <div style={EmotionalIntelligenceStyles.EnergyLevelContainer}>
            <h3>High Energy</h3>
            <div style={EmotionalIntelligenceStyles.RowWrapCenter}>
              {highEnergyFeelings.map((item) => (
                <EmotionButton
                  disabled={disabled}
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
            <h3>Low Energy</h3>
            <div style={EmotionalIntelligenceStyles.RowWrapCenter}>
              {lowEnergyFeelings.map((item) => (
                <EmotionButton
                  disabled={disabled}
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

          {sortedEmotions?.length > 0 ? (
            <>
              <h1 style={EmotionalIntelligenceStyles.Banner}>
                <div style={EmotionalIntelligenceStyles.BannerBackground}>
                  MY EMOTIONAL JOURNEY 🌦️
                </div>
              </h1>
              <div style={EmotionalIntelligenceStyles.JourneyContainer}>
                {sortedEmotions?.reverse().map((item) => (
                  <EmotionButton
                    disabled={false}
                    color={item?.color}
                    colorHover={item.colorHover}
                    onClick={() => handleEmotionSelection(item, false)}
                  >
                    {item?.label}
                    <br />
                    {item?.emoji}
                  </EmotionButton>
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

      <Modal show={openEmotion} centered>
        <Modal.Header
          closeButton
          style={EmotionalIntelligenceStyles.EmotionHeader}
        >
          <Modal.Title>How You Feel</Modal.Title>
        </Modal.Header>
        <Modal.Body style={EmotionalIntelligenceStyles.EmotionBody}>
          <div style={{ marginBottom: 12 }}>
            <div style={EmotionalIntelligenceStyles.RowJustifyCenter}>
              <EmotionButton color={selectedEmotion?.color}>
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
            </div>

            {shouldRenderSaveButton ? (
              <Button
                variant="light"
                style={EmotionalIntelligenceStyles.GenerateInsightButton}
                onClick={generateAdviceOrWisdom}
                disabled={isAiResponseLoading}
              >
                generate insight 💌
              </Button>
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
            variant="light"
            onClick={() => {
              setOpenEmotion(false);
              setChatGptResponse("");
              setShouldRenderSaveButton(false);
            }}
          >
            Exit
          </Button>

          {shouldRenderSaveButton ? (
            <Button variant="light" onClick={saveEmotionData}>
              Save
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};
