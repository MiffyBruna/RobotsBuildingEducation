import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EmotionButton } from "./EmotionalIntelligence.styles";

export const EmotionalIntelligence = ({
  isEmotionalIntelligenceOpen,
  setIsEmotionalIntelligenceOpen,
}) => {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [disabled, setDisabled] = useState(false);

  const lowEnergyFeelings = [
    {
      header: <span>Pleasant &nbsp;&nbsp;&nbsp;&nbsp;</span>,
      feelings: [
        { label: "Peaceful", emoji: "(˘⌣˘)", color: "#f9a8d4" },
        { label: "Content", emoji: "(＾▽＾)", color: "#f9a8d4" },
      ],
    },
    {
      header: "Unpleasant",
      feelings: [
        { label: "Sad", emoji: "(╥﹏╥)", color: "#a8c1ff" },
        { label: "Tired", emoji: "(-_-) zzZ", color: "#a8c1ff" },
      ],
    },
  ];

  const highEnergyFeelings = [
    {
      header: <span>Pleasant &nbsp;&nbsp;&nbsp;&nbsp;</span>,
      feelings: [
        { label: "Motivated", emoji: "(｡•̀ᴗ-)✧", color: "#d4a5a5" },
        { label: "Excited", emoji: "(*^‿^*)", color: "#d4a5a5" },
      ],
    },
    {
      header: "Unpleasant",
      feelings: [
        { label: "Stressed", emoji: "(；￣Д￣)", color: "#ffd3b6" },
        { label: "Anxious", emoji: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", color: "#ffd3b6" },
      ],
    },
  ];

  const handleEmotionSelection = (event) => {
    alert("data");
    console.log("data");

    setSelectedEmotion(event.target.id);
    // const disableUntil = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 hours from now
    // localStorage.setItem("disableUntil", disableUntil);
    // setDisabled(true);
  };

  // Check if buttons should be disabled on component mount
  useEffect(() => {
    const disableUntil = localStorage.getItem("disableUntil");
    if (disableUntil && new Date().getTime() < disableUntil) {
      setDisabled(true);
    }
  }, []);

  return (
    <Modal centered show={isEmotionalIntelligenceOpen} fullscreen>
      <Modal.Header
        closeButton
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Modal.Title>Emotional Intelligence</Modal.Title>
      </Modal.Header>
      <Modal.Body
        onHide={() => setIsEmotionalIntelligenceOpen(false)}
        style={{ backgroundColor: "black", color: "white" }}
      >
        How do you feel today?
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              //   width: "40%",
              padding: "10px",
            }}
          >
            <h4>High Energy</h4>
            {highEnergyFeelings.map((group, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <h5>{group.header}</h5>
                {group.feelings.map((feeling, i) => (
                  <EmotionButton
                    key={i}
                    feeling={feeling}
                    label={feeling.label}
                    emoji={feeling.emoji}
                    disabled={disabled}
                    onClick={handleEmotionSelection}
                  >
                    {feeling.label}
                    <br />
                    {feeling.emoji}
                  </EmotionButton>
                ))}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              //   width: "40%",
              padding: "10px",
            }}
          >
            <h4>Low Energy</h4>
            {lowEnergyFeelings.map((group, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <h5>{group.header}</h5>
                {group.feelings.map((feeling, i) => (
                  <EmotionButton
                    key={i}
                    feeling={feeling}
                    label={feeling.label}
                    emoji={feeling.emoji}
                    disabled={disabled}
                    onClick={handleEmotionSelection}
                  >
                    {feeling.label}
                    <br />
                    {feeling.emoji}
                  </EmotionButton>
                ))}
              </div>
            ))}
          </div>
        </div>
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
