
import { logEvent } from "firebase/analytics";
import { Spinner } from "react-bootstrap";
import { isEmpty } from "lodash";
import lionel from "../../../common/media/images/lionel.png";
import roxanaGif from "../../../common/media/images/roxanaGif.gif";
import { analytics } from "../../../database/firebaseResources";

export const Intro = ({ isDemo,moduleName, patreonObject, loadingMessage, chatGptResponse, promptSelection, shouldRenderIntro}) => {
  if(!isEmpty(patreonObject)){
  let RoxanaLoadingAnimation = () => {
    return (
      <div>
        <Spinner animation="grow" variant="info" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <img width="150px" src={roxanaGif} />
        <Spinner animation="grow" variant="primary" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  }
  let RoxanaIntroText = () => {
    if (isDemo && shouldRenderIntro) {
      return (
        <div>
          i'm ms. roxana, I'm built with various robots made by Apple, Tiktok
          and OpenAI and I help Sheilfer build RO.B.E 😊
          <br />
          <br />
          If you want to help us build Robots Building Education, please read
          more in your Impact Wallet &nbsp;🏦
          <br />
          <br />
          If you want to plug your business with a &nbsp;🛍️ shopping tab or
          slot, please contact me inside of&nbsp;{" "}
          <a
            onClick={() => {
              logEvent(analytics, "select_promotion", {
                creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
                creative_slot: `${moduleName} Intro Slot`,
                promotion_id: `Robots Building Education`,
                promotion_name: "advertising_launch",
              });
              window.open("https://www.patreon.com/RobotsBuildingEducation");
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
          {isDemo ? (
            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <br/>
              <h3>#100Devs</h3>
              <h5>
                {
                  "Hi there, I'm Leon 👋🏽 By day, I help people of color unlock high growth careers as software engineers at Resilient Coders"
                }
              </h5>
              <a
                onClick={() => {
                  logEvent(analytics, "select_promotion", {
                    creative_name: "https://leonnoel.com/100devs/",
                    creative_slot: "demo Intro Slot",
                    promotion_id: "#100devs",
                    promotion_name: "advertising_launch",
                  });
                  window.open("https://leonnoel.com/100devs/");
                }}
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {/* https://leonnoel.com/100devs/ */}
                <img
                  src={lionel}
                  style={{
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,1), 0 6px 6px rgba(0,0,0,1)",
                    height: 150,
                    width: 150,
                    borderRadius: "12px",
                    marginTop: 12,
                  }}
                />
              </a>
            </div>
          ) : (
            <span>
              If you want to advertise on RO.B.E, please contact me in
              <a
                onClick={() =>
                  logEvent(analytics, "select_promotion", {
                    creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
                    creative_slot: `${moduleName} Intro Slot`,
                    promotion_id: `Robots Building Education`,
                    promotion_name: "advertising_launch",
                  })
                }
                href="https://www.patreon.com/RobotsBuildingEducation"
              >
                Patreon
              </a>
            </span>
          )}
          <br />
        </div>
      );
    }
    return (
      <div>
        {patreonObject?.header === "Indocumentadofy" ? (
          "¡¡Hola!! Soy miss roxana, una maestra construida con OpenAI. Ayudo a Sheilfer a construir RO.B.E ayudándote a aprender más con indicaciones útiles hola!! 😊"
        ) : (
          <div>
            i'm ms. roxana, I'm built with various robots made by Apple, Tiktok
            and OpenAI and I help Sheilfer build RO.B.E 😊
            <br />
            <br />
            If you want to help us build Robots Building Education, please read
            more in your Impact Wallet &nbsp;🏦.
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
                window.open("https://www.patreon.com/RobotsBuildingEducation");
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
              }}
            >
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
            ):null}

          </div>
        )}
      </div>
    );
  };


  return(
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
        //  border:'1px solid #252930' 

        // overflow: "auto",
        // maxWidth: "80%",
        // maxWidth: 300,
        // maxWidth: loadingStates.demonstrate ? "100%" : "75%",
        // minWidth: loadingStates.demonstrate ? "100%" : "75%",
      }}
    >
     <div style={{ display: "flex"}}>
      {loadingMessage ? (
          <RoxanaLoadingAnimation />
        ) : chatGptResponse ? (
        <h2> 
          { promptSelection === 'patreon' ? '⚡🧿►✍️' : null } 
          { promptSelection === 'guide' ? '📚🔮🤝👾🧪' : null} 
          { promptSelection === 'shop' ? '🛍️' : null }
        </h2>
        ) : (
          <RoxanaIntroText />
        )}
     </div>
     </div>
  )
    }else{
        }
        return null
}