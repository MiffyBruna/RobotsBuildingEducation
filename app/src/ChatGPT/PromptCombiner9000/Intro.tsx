import { logEvent } from "firebase/analytics";
import { isEmpty } from "lodash";
import { analytics } from "../../database/firebaseResources";
import { RoxanaLoadingAnimation } from "../../common/uiSchema";

// Function to handle the Patreon click event for analytics
const handlePatreonClick = (moduleName) => {
  logEvent(analytics, "select_promotion", {
    creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
    creative_slot: `${moduleName} Intro Slot`,
    promotion_id: `Robots Building Education`,
    promotion_name: "advertising_launch",
  });
  window.open("https://www.patreon.com/RobotsBuildingEducation");
};

// Main Intro component
export const Intro = ({
  moduleName,
  patreonObject,
  loadingMessage,
  isResponseActive,
  promptSelection,
}) => {
  // Return null if patreonObject is empty
  if (isEmpty(patreonObject)) return null;

  // Roxana's intro text logic
  const RoxanaIntroText = () => (
    <div>
      {!isEmpty(patreonObject?.prompts?.welcome) ? (
        <div>{patreonObject?.prompts?.welcome?.response}</div>
      ) : (
        <div>
          I'm Ms. Roxana, built with various robots made by Apple, Tiktok, and
          OpenAI. I help Sheilfer build RO.B.E 😊
          <br />
          <br />
          Want to help me build Robots Building Education? Please read more in
          your Proof of Work 🏦.
          <br />
          <br />
          Want to plug your business? Contact me inside of&nbsp;
          <a
            onClick={() => handlePatreonClick(moduleName)}
            target="_blank"
            style={{
              color: "white",
              textDecoration: "underline",
              cursor: "grab",
            }}
          >
            Patreon
          </a>
          .
          <br />
          <br />
          {patreonObject?.prompts?.intro?.response && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid red",
              }}
            >
              <div>$3 advertisement asdfasd</div>
              <h3>{patreonObject?.prompts?.intro?.response}</h3>
              <h4>{patreonObject?.prompts?.intro?.advertisementPitch}</h4>
              <a
                onClick={() => handlePatreonClick(moduleName)}
                href={patreonObject?.prompts?.intro?.advertisementLink}
                target={"_blank"}
              >
                <img
                  src={patreonObject?.prompts?.intro?.advertisementImageSrc}
                  style={patreonObject?.prompts?.intro?.backgroundStyles}
                />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Render the main component
  return (
    <div
      style={{
        backgroundColor: loadingMessage ? "black" : "#2C2C2E",
        color: "white",
        display: "flex",
        justifyContent: "flex-start",
        textAlign: "left",
        padding: 20,
        maxWidth:
          patreonObject.prompts.patreon?.icon === "►" ? "617.5px" : "82.5%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
      }}
    >
      <div style={{ display: "flex" }}>
        {loadingMessage ? (
          <RoxanaLoadingAnimation />
        ) : isResponseActive ? (
          <h2>
            {promptSelection === "patreon" && "Discover ►✍️⚡🎨"}
            {promptSelection === "guide" && "Guide 🧿📚🔮🗺️🧪"}
            {promptSelection === "shop" && "Shop 🛍️"}
            {promptSelection === "practice" && "Practice 🥋"}
          </h2>
        ) : (
          <RoxanaIntroText />
        )}
      </div>
    </div>
  );
};
