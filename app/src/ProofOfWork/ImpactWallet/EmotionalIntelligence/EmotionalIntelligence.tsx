import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EmotionButton } from "./EmotionalIntelligence.styles";
import { FieldValue, Timestamp, addDoc } from "firebase/firestore";

export const EmotionalIntelligence = ({
  isEmotionalIntelligenceOpen,
  setIsEmotionalIntelligenceOpen,
  userAuthObject,
  usersEmotionsCollectionReference,
  usersEmotionsFromDB,
  documentProcForUsersEmotions,
}) => {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [disabled, setDisabled] = useState(false);

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

  const theme = {
    colors: {
      highEnergyPleasant: "#FF91A4",
      highEnergyPleasantHover: "#FF7F95",
      highEnergyUnpleasant: "#FFB3A7",
      highEnergyUnpleasantHover: "#FF9F93",
      lowEnergyPleasant: "#00A3AF",
      lowEnergyPleasantHover: "#00919D",
      lowEnergyUnpleasant: "#87CEEB",
      lowEnergyUnpleasantHover: "#76BADB",
    },
    styles: {
      highEnergyPleasant: {
        backgroundColor: "#FF91A4",
        "&:hover": {
          backgroundColor: "#FF7F95",
        },
      },
      highEnergyUnpleasant: {
        backgroundColor: "#FFB3A7",
        "&:hover": {
          backgroundColor: "#FF9F93",
        },
      },
      lowEnergyPleasant: {
        backgroundColor: "#00A3AF",
        "&:hover": {
          backgroundColor: "#00919D",
        },
      },
      lowEnergyUnpleasant: {
        backgroundColor: "#87CEEB",
        "&:hover": {
          backgroundColor: "#76BADB",
        },
      },
    },
  };

  const handleEmotionSelection = async (event, item) => {
    setSelectedEmotion(event.target.id);
    // const disableUntil = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 hours from now
    // localStorage.setItem("disableUntil", disableUntil);
    // setDisabled(true);

    const docRef = await addDoc(usersEmotionsCollectionReference, {
      ...item,
      timestamp: Date.now(),
    });

    documentProcForUsersEmotions(usersEmotionsCollectionReference);
    // console.log("User Emotion Document written with ID: ", docRef?.id);
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
    <Modal centered show={isEmotionalIntelligenceOpen} fullscreen>
      <Modal.Header
        // closeButton
        style={{
          backgroundColor: "#32CD32",
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
          backgroundColor: "#32CD32",
          color: "white",
          textShadow: "1px 1px 5px black",
        }}
      >
        <h1
          style={{
            backgroundColor: "#32CD32",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            padding: 20,
            textShadow: "1px 1px 5px black",
          }}
        >
          <div
            style={{
              backgroundColor: "#228B22",
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
            backgroundColor: "#228B22",
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
                onClick={(event) => handleEmotionSelection(event, item)}
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
                onClick={(event) => handleEmotionSelection(event, item)}
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
                backgroundColor: "#32CD32",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                padding: 20,
                textShadow: "1px 1px 5px black",
              }}
            >
              <div
                style={{
                  backgroundColor: "#228B22",
                  padding: 24,
                  borderRadius: 24,
                }}
              >
                MY EMOTIONAL JOURNEY 🥲🥹
              </div>
            </h1>
            <div
              style={{
                backgroundColor: "#228B22",
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
                  colorHover={""}
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
  );
};
