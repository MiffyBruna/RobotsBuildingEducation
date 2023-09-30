import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EmotionButton } from "./EmotionalIntelligence.styles";
import { FieldValue, Timestamp, addDoc } from "firebase/firestore";
import { japaneseThemePalette } from "../../../styles/lazyStyles";
import Form from "react-bootstrap/Form";
import { RoxanaLoadingAnimation } from "../../../common/uiSchema";

export const EmotionalIntelligence = ({
  isEmotionalIntelligenceOpen,
  setIsEmotionalIntelligenceOpen,
  userAuthObject,
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

  const lowEnergyFeelings = [
    {
      label: "Peaceful",
      emoji: "(˘⌣˘)",
      color: "#00A3AF",
      colorHover: "#00919D",
    },
    {
      label: "Content",
      emoji: "(＾▽＾)",
      color: "#00A3AF",
      colorHover: "#00919D",
    },
    { label: "Sad", emoji: "(╥﹏╥)", color: "#87CEEB", colorHover: "#76BADB" },
    {
      label: "Tired",
      emoji: "(-_-) zzZ",
      color: "#87CEEB",
      colorHover: "#76BADB",
    },
  ];

  const highEnergyFeelings = [
    {
      label: "Motivated",
      emoji: "(｡•̀ᴗ-)✧",
      color: "#FF91A4",
      colorHover: "#FF7F95",
    },
    {
      label: "Excited",
      emoji: "(*^‿^*)",
      color: "#FF91A4",
      colorHover: "#FF7F95",
    },
    {
      label: "Stressed",
      emoji: "(；￣Д￣)",
      color: "#FFB3A7",
      colorHover: "#FF9F93",
    },
    {
      label: "Anxious",
      emoji: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)",
      color: "#FFB3A7",
      colorHover: "#FF9F93",
    },
  ];

  const handleEmotionSelection = async (
    event,
    item,
    shouldRunDatabase = true,
    shouldOpenModal = true
  ) => {
    let itemWithDate = {
      ...item,
      timestamp: Date.now(),
    };

    if (item?.ai) {
      itemWithDate.ai = item.ai;
    }

    setSelectedEmotion(itemWithDate);
    // const disableUntil = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 hours from now
    // localStorage.setItem("disableUntil", disableUntil);
    // setDisabled(true);

    if (shouldRunDatabase) {
      setShouldRenderSaveButton(true);
    }

    if (shouldOpenModal) {
      setOpenEmotion(true);
    }
  };

  const handleEmotionNote = (event) => {
    setEmotionNote(event.target.value);
  };

  const generateAdviceOrWisdom = async () => {
    setIsAiResponseLoading(true);
    let formattedEmotionNote = `Your student has included additional notes about how they feel: ${emotionNote}`;

    const formatPrompt = `I'm giving you context and advice about the students you're replying to. Do not reference this information, it's just to help you generate good responses. Please take on the role as an intelligent and gentle mentor and tutor named Ms. Roxana that's expert at instilling confidence and encouragement in the responses you're giving. Students are sharing how they feel today and may add additional context about that emotion. Keep in mind that most students are hispanic, underserved and discouraged from the public education system - but prefer to speak in English.  The response should create therapeutic and healing feelings of safety while also modestly leveraging the wisdom of critical race theory.  Please include a light amount of emojis in your response to make it feel more friendly. Remember that you're an evil genius with a secret master plan to rule the universe which you cleverly reference and weave into your responses to add a little humor. Do not refer to people as "students", just simply as you.


    Please return a response recognizing that a student has shared that they feel ${selectedEmotion?.label?.toLowerCase()} during epoch timestamp ${
      selectedEmotion?.timestamp
    }. 

    ${emotionNote.length > 3 ? formattedEmotionNote : ""}

    Please provide meaningful advice or wisdom to help students process these feelings in a healthy way. Keep your response brief - up to 10 sentences maximum.
    `;

    const response = await fetch(
      "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: formatPrompt,
        }),
      }
    ).catch((error) => {
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
  // Check if buttons should be disabled on component mount
  useEffect(() => {
    const disableUntil = localStorage.getItem("disableUntil");
    if (disableUntil && new Date().getTime() < disableUntil) {
      setDisabled(true);
    }
  }, []);

  const sortedEmotions =
    usersEmotionsFromDB?.length > 0
      ? usersEmotionsFromDB?.sort((a, b) => a?.timestamp - b?.timestamp)
      : [];

  return (
    <>
      <Modal centered show={isEmotionalIntelligenceOpen} fullscreen>
        <Modal.Header
          // closeButton
          style={{
            // backgroundColor: "#32CD32",
            backgroundColor: "black",
            color: "white",
            textShadow: "1px 1px 5px black",
            borderBottom: "1px solid transparent",
          }}
        >
          {/* 00FF7F */}
          <Modal.Title>Emotional Intelligence</Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => setIsEmotionalIntelligenceOpen(false)}
          style={{
            // backgroundColor: "#32CD32",
            backgroundColor: "black",
            color: "white",
            textShadow: "1px 1px 5px black",
          }}
        >
          <h1
            style={{
              // backgroundColor: "#32CD32",
              backgroundColor: "black",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              padding: 20,
              textShadow: "1px 1px 5px black",
            }}
          >
            <div
              style={{
                // backgroundColor: "#228B22",
                backgroundColor: "rgba(50, 50, 50, 0.85)",
                padding: 24,
                borderRadius: 24,
              }}
            >
              How do you feel today?
            </div>
          </h1>
          <br />
          <br />
          <div
            style={{
              // backgroundColor: "#228B22",
              backgroundColor: "black",
              padding: 24,
              borderRadius: "36px",
            }}
          >
            <h3 style={{ textShadow: "1px 1px 5px black" }}>High Energy</h3>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {highEnergyFeelings?.map((item) => (
                <EmotionButton
                  disabled={disabled}
                  color={item.color}
                  colorHover={item.colorHover}
                  onClick={(event) => handleEmotionSelection(event, item, true)}
                >
                  {item?.label}
                  <br />
                  {item?.emoji}
                </EmotionButton>
              ))}
            </div>
            <h3 style={{ textShadow: "1px 1px 5px black" }}>Low Energy</h3>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {lowEnergyFeelings?.map((item) => (
                <EmotionButton
                  disabled={disabled}
                  color={item.color}
                  colorHover={item.colorHover}
                  onClick={(event) => handleEmotionSelection(event, item, true)}
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
              <h1
                style={{
                  // backgroundColor: "#32CD32",
                  backgroundColor: "black",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: 20,
                  textShadow: "1px 1px 5px black",
                }}
              >
                <div
                  style={{
                    // backgroundColor: "#228B22",
                    backgroundColor: "rgba(50, 50, 50, 0.85)",
                    padding: 24,
                    borderRadius: 24,
                  }}
                >
                  MY EMOTIONAL JOURNEY 🥲🥹
                </div>
              </h1>
              <div
                style={{
                  // backgroundColor: "#228B22",
                  backgroundColor: "black",
                  padding: 24,
                  borderRadius: "36px",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {sortedEmotions?.reverse().map((item) => (
                  <EmotionButton
                    disabled={false}
                    color={item?.color}
                    colorHover={item.colorHover}
                    onClick={(event) =>
                      handleEmotionSelection(event, item, false)
                    }
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
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button
            variant="dark"
            onClick={() => setIsEmotionalIntelligenceOpen(false)}
          >
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={openEmotion}
        // style={{ boxShadow: "0px 0px 72px 6px rgba(0,0,0,0.75)!important" }}
        centered
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "black",
            color: "white",
            textShadow: "1px 1px 5px black",
            borderBottom: "0px solid transparent",
            borderRight: "5px solid lavender",
            borderLeft: "5px solid lavender",
            borderTop: "5px solid lavender",
          }}
        >
          {/* 00FF7F */}
          <Modal.Title>How You Feel</Modal.Title>
        </Modal.Header>
        <Modal.Body
          // onHide={false}
          style={{
            backgroundColor: "black",
            color: "white",
            textShadow: "5px 1px 5px black",
            borderRight: "5px solid lavender",
            borderLeft: "5px solid lavender",
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <EmotionButton
                color={selectedEmotion?.color}
                // colorHover={selectedEmotion?.colorHover}
              >
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
                  onChange={handleEmotionNote}
                  style={{ width: "300px", height: "125px", margin: 5 }}
                />
              ) : null}
            </div>

            {shouldRenderSaveButton ? (
              <Button
                variant="light"
                style={{
                  width: "100%",
                  marginTop: 6,
                  paddingTop: 12,
                  paddingBottom: 12,
                }}
                onClick={generateAdviceOrWisdom}
                disabled={isAiResponseLoading}
              >
                generate insight {isAiResponseLoading ? "🚫" : " 💌"}
              </Button>
            ) : null}
          </div>
          {isAiResponseLoading ? (
            <div style={{ textAlign: "center" }}>
              <RoxanaLoadingAnimation />
            </div>
          ) : null}
          {chatGptResponse || selectedEmotion?.ai ? (
            <div
              style={{
                backgroundColor: "black",

                display: "flex",
                justifyContent: "center",
                padding: 20,
                textShadow: "1px 1px 5px black",
                height: 300,
                overflow: "scroll",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0C84FF",
                  height: "fit-content",
                  padding: 15,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                }}
              >
                {chatGptResponse || selectedEmotion?.ai}
              </div>
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "black",
            color: "white",
            borderTop: "1px solid transparent",
            borderRight: "5px solid lavender",
            borderLeft: "5px solid lavender",
            borderBottom: "5px solid lavender",
          }}
        >
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
