import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { logEvent } from "firebase/analytics";
import { analytics } from "../../database/firebaseResources";
import { DiscordButton } from "../../ChatGPT/Prompts/DiscordButton/DiscordButton";
import { Demo } from "../../Passcode/Demo/Demo";
import { ui } from "../../common/uiSchema";
import sheilferBitcoin from "../../common/media/images/sheilferBitcoin.jpeg";
import { useParams } from "react-router-dom";
export const Apply = ({
  auth,
  globalReserveCounter,
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  computePercentage,
  patreonObject,
  handleRandomDemoPressed,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [databaseUserDocumentCopy, setDatabaseUserDocumentCopy] =
    useState(databaseUserDocument);

  let params = useParams();

  let [borderStateForBitcoinButton, setBorderStateForBitcoinButton] = useState({
    border: "1px solid blue",
  });
  let [borderStateForLightningButton, setBorderStateForLightningButton] =
    useState({ border: "1px solid blue" });

  let [borderStateForEmailButton, setBorderStateEmailButton] = useState({
    border: "1px solid blue",
  });

  let copyToClipboard = (network, isEmail = false) => {
    // Get the text field
    let addresses = {
      bitcoin: "39JpVJoeXkCoHN3qvCytc7RyX5AYNYiWfG",
      lightning:
        "lnbc1pjq4u64dqdgdshx6pqg9c8qpp5xwhu3aa37yc3fyxe4wneytm85fuja3pxjkr9ptf505pkzw9pgt5qsp5tlf279qfpnc9zml558mqdw2t4dz6duf0gunnul3ulzm9wdu2lhfq9qrsgqcqpcxqy8ayqrzjqv06k0m23t593pngl0jt7n9wznp64fqngvctz7vts8nq4tukvtljqze59vqqnqcqquqqqqqqqqqqqqqq9grzjqtsjy9p55gdceevp36fvdmrkxqvzfhy8ak2tgc5zgtjtra9xlaz97zya75qq86gqqvqqqqqqqqqqqqqq9gf02ywdfg64sknwdg63m79u25jyl586g9zqgxzrhzhc034jfas3akxwmctky7rs2tgdx894l59g39lxu4436rsv5f9r8nrlf7tag8l5qqsfu06z",
    };

    // Copy the text inside the text field
    if (isEmail) {
      navigator.clipboard.writeText("sheilfer@robotsbuildingeducation.com");
    } else {
      navigator.clipboard.writeText(addresses[network]);
    }
  };

  let animateBorderLoading = async (button) => {
    if (button === "email") {
      setBorderStateEmailButton({ border: "1px solid gold" });
    } else if (button === "bitcoin") {
      setBorderStateForBitcoinButton({ border: "1px solid gold" });
    } else {
      setBorderStateForLightningButton({ border: "1px solid gold" });
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(750);

    if (button === "email") {
      setBorderStateEmailButton({ border: "1px solid blue" });
    } else if (button === "bitcoin") {
      setBorderStateForBitcoinButton({ border: "1px solid blue" });
    } else {
      setBorderStateForLightningButton({ border: "1px solid blue" });
    }
  };
  return (
    <>
      <Button
        variant="success"
        onClick={() => {
          logEvent(analytics, "select_content", {
            content_type: "button",
            item_id: "Apply",
          });
          setIsModalOpen(true);
        }}
      >
        Apply To Scholarship
      </Button>

      <br />
      <br />
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DiscordButton />
      </div> */}
      {/* <br />
      <br /> */}
      {/* <Button
        variant="danger"
        onClick={() => {
        auth.signOut();
        }}
      >
        Sign Out{" 😭😭😭"}
      </Button> */}
      <br />
      <br />

      <Modal centered show={isModalOpen} fullscreen>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title>About</Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => setIsModalOpen(false)}
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ maxWidth: "100%", width: 700 }}>
            Basic
            <br /> Community <br />
            Income
          </h1>
          <DiscordButton />
          <p style={{ maxWidth: "100%", width: 700 }}>
            To apply to the scholarship or community investment, email{" "}
            <h3>
              <u>sheilfer@robotsbuildingeducation.com</u>
              <div
                id="bitcoin"
                onClick={() => {
                  logEvent(analytics, "select_promotion", {
                    creative_name: `Email Address Button`,
                    creative_slot: `Email Address Slot`,
                    promotion_id: `Robots Building Education Email AddressSlot`,
                    promotion_name: "advertising_launch",
                  });
                  copyToClipboard("email", true);
                }}
                style={{ transition: "0.3s all ease-in-out" }}
              >
                <br />
                <Button
                  onClick={() => animateBorderLoading("email")}
                  style={borderStateForBitcoinButton}
                >
                  ✉ Copy Email Address
                </Button>
              </div>
            </h3>{" "}
            <br />
            Please include:
            <ol>
              <li>
                A title mentioning the keyword "Scholarship" with your email
                subject
                <br />
              </li>
              <li>
                A way to send payments, whether it's zelle, cashapp, venmo,
                bitcoin or even by paycheck, please just include the information
                I need
                <br />
              </li>
              <li>
                Permission to use your story, while respecting your privacy, in
                public content or book material
                <br />
              </li>
              <li>
                A story, vision and/or where you draw your purpose. I want you
                to feel important and seen. At the very least, if you don't win
                any awards, you can use this moment to author about you and your
                future
                <br />
              </li>
            </ol>
          </p>
          <br />
          <br />
          <h1 style={{ maxWidth: "100%", width: 700 }}>Supporting RO.B.E</h1>
          <p style={{ maxWidth: "100%", width: 700 }}>
            The best way to help me grow is by checking out what I'm building,
            sharing it on social media and most importantly, subscribing to my
            Patreon to gain full access to everything I'm developing. Bitcoin is
            also generously accepted.
            <br /> <br />
            I've managed to bring the cost of AI tutoring down 2000-3000% to my
            big competitors and can offer learning services for as little as $10
            a year, which breaks down to be less than a dollar a month or less
            than 3 cents per day.
            <br /> <br />
            In the future, this product will build software for teachers,
            parents and students alike. More support increases the velocity of
            scholarships generated so it goes a long way to receive your
            support! Thank you 🙏
            <br /> <br />
            <p>
              <div>
                <img src={sheilferBitcoin} width={300} height={350} />

                <br />
                <br />
                <br />
                <b>To track transaction or send without QR</b>
                <br />
                <br />
                <div
                  id="bitcoin"
                  onClick={() => {
                    logEvent(analytics, "select_promotion", {
                      creative_name: `Bitcoin Address Button`,
                      creative_slot: `Bitcoin Address Slot`,
                      promotion_id: `Robots Building Education Bitcoin AddressSlot`,
                      promotion_name: "advertising_launch",
                    });
                    copyToClipboard("bitcoin");
                  }}
                  style={{ transition: "0.3s all ease-in-out" }}
                >
                  <Button
                    onClick={() => animateBorderLoading("bitcoin")}
                    style={borderStateForBitcoinButton}
                  >
                    ₿ Copy Bitcoin Address
                  </Button>
                </div>
                <br />
                <div
                  id="lightning"
                  onClick={() => {
                    logEvent(analytics, "select_promotion", {
                      creative_name: `Lightning Address Button`,
                      creative_slot: `Lightning Address Slot`,
                      promotion_id: `Robots Building Education Lightning Address Slot`,
                      promotion_name: "advertising_launch",
                    });

                    copyToClipboard("lightning");
                  }}
                  style={{ transition: "0.3s all ease-in-out" }}
                >
                  <Button
                    style={borderStateForLightningButton}
                    onClick={() => animateBorderLoading("lightning")}
                  >
                    ⚡ Copy Lightning Address
                  </Button>
                </div>
                {/* <p style={{ maxWidth: 720 }}>
                <br />
                100% of subscriptions are stored as Bitcoin as a reserve system
                for RO.B.E. This reserve is designed to position Robots Building
                Education for growth. You're encouraged to send Bitcoin as
                another way to support the growth of RO.B.E without
                subscriptions. This is currently the <b>only</b> way I'm
                monetizing on RO.B.E
              </p> */}

                <br />
              </div>
            </p>
            <br />
            <Demo
              userDocumentReference={userDocumentReference}
              databaseUserDocument={databaseUserDocument}
              setDatabaseUserDocument={setDatabaseUserDocument}
              globalDocumentReference={globalDocumentReference}
              globalImpactCounter={globalImpactCounter}
              setGlobalImpactCounter={setGlobalImpactCounter}
              computePercentage={computePercentage}
              patreonObject={
                ui()["Creator"]["Communication Science"]["Philosophy"]
              }
              isDemo={true}
              demoName={"Demo: Philosophy @ RO.B.E"}
            />
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
