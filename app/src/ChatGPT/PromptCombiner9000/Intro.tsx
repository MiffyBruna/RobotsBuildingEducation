import { logEvent } from "firebase/analytics";
import { Spinner } from "react-bootstrap";
import { isEmpty } from "lodash";
import lionel from "../../common/media/images/lionel.png";
import roxanaGif from "../../common/media/images/roxanaGif.gif";
import { analytics } from "../../database/firebaseResources";
import { RoxanaLoadingAnimation } from "../../common/uiSchema";

export const Intro = ({
  moduleName,
  patreonObject,
  loadingMessage,
  isResponseActive,
  promptSelection,
  shouldRenderIntro,
}) => {
  if (!isEmpty(patreonObject)) {
    let RoxanaIntroText = () => {
      return (
        <div>
          {!isEmpty(patreonObject?.prompts?.welcome) ? (
            <div>{patreonObject?.prompts?.welcome?.response}</div>
          ) : (
            <div>
              i'm ms. roxana, I'm built with various robots made by Apple,
              Tiktok and OpenAI and I help Sheilfer build RO.B.E 😊
              <br />
              <br />
              If you want to help us build Robots Building Education, please
              read more in your Impact Wallet &nbsp;🏦.
              <br />
              <br />
              If you want to plug your business with a &nbsp;🛍️ shopping tab or
              slot, please contact me inside of&nbsp;
              <a
                onClick={() => {
                  logEvent(analytics, "select_promotion", {
                    creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
                    creative_slot: `${moduleName} Intro Slot`,
                    promotion_id: `Robots Building Education`,
                    promotion_name: "advertising_launch",
                  });
                  window.open(
                    "https://www.patreon.com/RobotsBuildingEducation"
                  );
                }}
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
              {patreonObject?.prompts?.intro?.response ? (
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
                    onClick={() =>
                      logEvent(analytics, "select_promotion", {
                        creative_name: `${patreonObject?.prompts?.intro?.advertisementLink}`,
                        creative_slot: `${moduleName} Intro Slot`,
                        promotion_id: `${patreonObject?.prompts?.intro?.response}`,
                        promotion_name: "advertising_launch",
                      })
                    }
                    href={patreonObject?.prompts?.intro?.advertisementLink}
                    target={"_blank"}
                  >
                    <img
                      src={patreonObject?.prompts?.intro?.advertisementImageSrc}
                      style={patreonObject?.prompts?.intro?.backgroundStyles}
                    />
                  </a>
                </div>
              ) : null}
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        // Gray response message by the AI
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
        <br />
        <br />
        <div style={{ display: "flex" }}>
          {loadingMessage ? (
            <RoxanaLoadingAnimation />
          ) : isResponseActive ? (
            <>
              <h2>
                {promptSelection === "patreon" ? "Discover ►✍️⚡🎨" : null}
                {promptSelection === "guide" ? "Guide 🧿📚🔮🗺️🧪" : null}
                {promptSelection === "shop" ? "Shop 🛍️" : null}
                {promptSelection === "practice" ? "Practice 🥋" : null}
              </h2>
            </>
          ) : (
            <RoxanaIntroText />
          )}
        </div>
      </div>
    );
  } else {
  }
  return null;
};
