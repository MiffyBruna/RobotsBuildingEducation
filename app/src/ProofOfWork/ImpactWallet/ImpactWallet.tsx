import { useEffect, useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import { getGlobalImpact } from "../../common/uiSchema";
import sheilferBitcoin from "../../common/media/images/sheilferBitcoin.jpeg";
import cashAppCard from "../../common/media/images/cashAppCard.jpeg";
import { logEvent } from "firebase/analytics";
import { analytics, database } from "../../database/firebaseResources";
import { DiscordButton } from "../../ChatGPT/Prompts/DiscordButton/DiscordButton";
import { doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { EmotionalIntelligence } from "./EmotionalIntelligence/EmotionalIntelligence";

export const ImpactWallet = ({
  globalScholarshipCounter,
  databaseUserDocument,
  computePercentage,
  globalImpactCounter,
  isImpactWalletOpen,
  setIsImpactWalletOpen,

  userAuthObject = { uid: "demo" },
  handlePathSelection,
  isDemo,
  globalReserveObject,

  isEmotionalIntelligenceOpen,
  setIsEmotionalIntelligenceOpen,
  usersEmotionsCollectionReference,
  usersEmotionsFromDB,
  documentProcForUsersEmotions,
}) => {
  let [databaseUserDocumentCopy, setDatabaseUserDocumentCopy] = useState({});

  let params = useParams();

  let [borderStateForBitcoinButton, setBorderStateForBitcoinButton] = useState({
    border: "1px solid blue",
  });
  let [borderStateForLightningButton, setBorderStateForLightningButton] =
    useState({ border: "1px solid blue" });

  useEffect(() => {
    // mountWallet();

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
  }, []);

  let copyToClipboard = (network) => {
    // Get the text field
    let addresses = {
      bitcoin: "39JpVJoeXkCoHN3qvCytc7RyX5AYNYiWfG",
      lightning:
        "lnbc1pjq4u64dqdgdshx6pqg9c8qpp5xwhu3aa37yc3fyxe4wneytm85fuja3pxjkr9ptf505pkzw9pgt5qsp5tlf279qfpnc9zml558mqdw2t4dz6duf0gunnul3ulzm9wdu2lhfq9qrsgqcqpcxqy8ayqrzjqv06k0m23t593pngl0jt7n9wznp64fqngvctz7vts8nq4tukvtljqze59vqqnqcqquqqqqqqqqqqqqqq9grzjqtsjy9p55gdceevp36fvdmrkxqvzfhy8ak2tgc5zgtjtra9xlaz97zya75qq86gqqvqqqqqqqqqqqqqq9gf02ywdfg64sknwdg63m79u25jyl586g9zqgxzrhzhc034jfas3akxwmctky7rs2tgdx894l59g39lxu4436rsv5f9r8nrlf7tag8l5qqsfu06z",
    };

    // Copy the text inside the text field
    navigator.clipboard.writeText(addresses[network]);
  };

  let animateBorderLoading = async (button) => {
    if (button === "bitcoin") {
      setBorderStateForBitcoinButton({ border: "1px solid gold" });
    } else {
      setBorderStateForLightningButton({ border: "1px solid gold" });
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(750);

    if (button === "bitcoin") {
      setBorderStateForBitcoinButton({ border: "1px solid blue" });
    } else {
      setBorderStateForLightningButton({ border: "1px solid blue" });
    }
  };

  let impactResult =
    databaseUserDocumentCopy?.impact ||
    databaseUserDocument?.impact ||
    15200 / getGlobalImpact();

  return (
    <>
      <div>
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
                item_id: "Impact Wallet",
              });
              setIsImpactWalletOpen(true);
            }}
            variant="secondary"
          >
            🏦
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

      <Modal centered show={isImpactWalletOpen} fullscreen>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title>
            Impact Wallet @{params?.profileID || userAuthObject?.uid}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => setIsImpactWalletOpen(false)}
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
          <DiscordButton />

          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: 24,
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <h4>Scholarships Created: {globalScholarshipCounter}</h4>
            <p>
              Work Done By You
              <br />
              {impactResult}
              <ProgressBar
                style={{
                  backgroundColor: "black",
                  borderRadius: "0px",
                  margin: 12,
                }}
                variant="success"
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
                ).toFixed(2)}
                %
              </b>
              &nbsp;of the work 😳
              <ProgressBar
                style={{
                  backgroundColor: "black",
                  borderRadius: "0px",
                  margin: 12,
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

            <div>
              <h1>The Reserve</h1>
              <h3>invested {globalReserveObject?.invested || "N/A"}</h3>

              <h6>last updated {globalReserveObject?.last_updated}</h6>
              <div></div>
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
                  variant="dark"
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
                  variant="dark"
                  style={borderStateForLightningButton}
                  onClick={() => animateBorderLoading("lightning")}
                >
                  ⚡ Copy Lightning Address
                </Button>
              </div>

              <br />
            </div>

            <br />
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
        documentProcForUsersEmotions={documentProcForUsersEmotions}
      />
    </>
  );
};
