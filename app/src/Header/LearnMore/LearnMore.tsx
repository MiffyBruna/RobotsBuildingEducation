import { useState } from "react";
// import { pwaInstallHandler } from "pwa-install-handler";
import { Button, Modal } from "react-bootstrap";
import { usePWAInstall } from "react-use-pwa-install";

import { logEvent } from "firebase/analytics";
import { analytics } from "../../database/firebaseResources";
import { DiscordButton } from "../../common/ui/Displays/DiscordButton/DiscordButton";

import {
  FadeInComponent,
  RiseDownAnimation,
  RiseUpAnimation,
  japaneseThemePalette,
  textBlock,
} from "../../styles/lazyStyles";
import FAQSection from "./FAQs/FAQs";

let data = {};
export const LearnMore = ({ languageMode, canInstallPwa }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const install = usePWAInstall();
  // console.log("install", install);
  return (
    <>
      {/* {canInstallPwa ? <><Button
      variant="dark"
      style={{
        color: "white",
        textShadow: "0px 0px 4px black",
      }}
      onClick={install}
    >
      Install app
    </Button>      &nbsp; &nbsp; &nbsp; &nbsp;</>: null} */}
      <FadeInComponent>
        <div style={{ fontFamily: "Bungee", color: "white" }}>rox</div>
      </FadeInComponent>
      <br />
      <FadeInComponent>
        <Button
          variant="dark"
          style={{
            color: "white",
            textShadow: "0px 0px 4px black",
          }}
          onClick={() => {
            logEvent(analytics, "select_content", {
              content_type: "button",
              item_id: "About",
            });
            setIsModalOpen(true);
          }}
        >
          {languageMode.buttons["9"]}
        </Button>
      </FadeInComponent>
      {/* <Button
        variant="danger"
        onClick={() => {
        auth.signOut();
        }}
      >
        Sign Out{" 😭😭😭"}
      </Button> */}

      <Modal
        centered
        show={isModalOpen}
        fullscreen
        style={{ backgroundColor: "black" }}
        keyboard={true}
        onHide={() => setIsModalOpen(false)}
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={{ backgroundColor: "black", color: "white" }}
          onHide={() => setIsModalOpen(false)}
        >
          {/* <Modal.Title>{languageMode.modals.titles["1"]}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // maxWidth: 700,
            width: "100%",
          }}
        >
          <FAQSection />
          <br />
          <br />

          <br />
          <br />
          <DiscordButton />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="dark" onClick={() => setIsModalOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
