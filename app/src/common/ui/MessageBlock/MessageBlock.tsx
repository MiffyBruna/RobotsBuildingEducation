import { useState } from "react";
import { japaneseThemePalette, textBlock } from "../../../styles/lazyStyles";
import sheilferBitcoin from "../../media/images/sheilferBitcoin.jpeg";
import { Modal } from "react-bootstrap";

export let MessageBlock = ({ children }) => {
  let [data, setData] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  let [boxShadow, setBoxShadow] = useState(
    "10px 10px 5px 0px rgba(0,0,0,0.75)"
  );

  return (
    <div
      style={{
        ...textBlock(
          japaneseThemePalette.SakuraMochiPink,
          0,
          12,
          "white",
          "10px 10px 5px 0px rgba(0,0,0,0.75)"
        ),
      }}
    >
      <button
        onMouseEnter={() => {
          setBoxShadow(
            `10px 10px 5px 0px ${japaneseThemePalette.SakuraMochiPink}`
          );
        }}
        onMouseLeave={() => {
          setBoxShadow("10px 10px 5px 0px rgba(0,0,0,0.75)");
        }}
        style={{
          boxShadow: boxShadow,
          backgroundColor: japaneseThemePalette.DeepCherryBlossomPink,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        ❤️
      </button>
      <Modal
        centered
        fullscreen={false}
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title>Under development</Modal.Title>
        </Modal.Header>
        <Modal.Body
          //   onHide={() => setIsModalOpen(false)}
          style={{
            padding: 0,
            backgroundColor: "black",
            color: "white",
            padding: 24,
          }}
        >
          something cool is being made here 🙂
          <br />
          <br />
          send me bitcoin or i will go to jail 🙂🙂🙂🙂🙂🙂🙂
          <img src={sheilferBitcoin} width={300} height={350} />
        </Modal.Body>
      </Modal>
      <br /> <br />
      {children}
    </div>
  );
};
