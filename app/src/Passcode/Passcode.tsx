import { Button } from "react-bootstrap";
import { logEvent } from "firebase/analytics";
import { analytics } from "../database/firebaseResources";
import { ui } from "../common/uiSchema";
import ChatGPT from "../ChatGPT/ChatGPT";
import { Deposit } from "../useZap";
import { WalletAuth } from "../WalletAuth";
import { japaneseThemePalette, textBlock } from "../styles/lazyStyles";

// Styles
const whiteTextColor = { color: "white" };
const buttonStyle = { width: "250px", height: "50px" };

// Functions
const logPromotionEvent = () => {
  logEvent(analytics, "select_promotion", {
    creative_name: "https://www.patreon.com/RobotsBuildingEducation",
    creative_slot: "Get Passcode Slot",
    promotion_id: "Robots Building Education",
    promotion_name: "advertising_launch",
  });
};

const renderPatreonContent = (patreonObject, languageMode) => {
  if (!patreonObject) return null;

  const patreonData =
    ui()["Engineer"]["Coding Crash Course Version 3"][
      "Learning Mindset & Perspective"
    ];

  return (
    <div>
      <h2 style={{ ...whiteTextColor, marginTop: 12 }}>
        Demo: Learning Mindset & Perspective
      </h2>
      <ChatGPT patreonObject={patreonData} isDemo={true} />
    </div>
  );
};

// Main Component
export const Passcode = ({ handleZeroKnowledgePassword, patreonObject }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "maroon", width: "300px", padding: 20 }}>
          ⚠️ If you clicked the Tiktok link, please use your browser when
          logging in or your attempt will be blocked by a browser security issue
          from Google (big sad, ruins this aesthetic). The menu on this screen
          should have an option to open in browser.
        </div>
      </div>
      <br />
      <br />
      <h2>Enter Passcode</h2>
      <input
        onChange={(event) => handleZeroKnowledgePassword(event, false, false)}
        type="password"
      />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          onClick={logPromotionEvent}
          target={"_blank"}
          href="https://www.patreon.com/posts/syllabus-getting-86153437?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
          style={whiteTextColor}
        >
          <Button variant="dark" style={buttonStyle}>
            &nbsp; Get Subscriber Passcode
          </Button>{" "}
        </a>
        <br />
        &nbsp; &nbsp;or &nbsp; &nbsp;
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <WalletAuth
            handleZeroKnowledgePassword={handleZeroKnowledgePassword}
          />
        </div>
      </div>
      <br />
      <br />

      <div>
        <p
          style={{
            ...textBlock(
              japaneseThemePalette.PowerPurple,
              0,
              12,
              "white",
              "10px 10px 5px 0px rgba(0,0,0,0.75)"
            ),
            textAlign: "left",
          }}
        >
          Robots Building Education 4.0 is in an experimental phase. Most users
          that I target will not have the ability to log in until they
          understand how Bitcoin works more. It's my goal to reduce friction and
          improve the user experience.
          <br />
          <br />
          If you need further help, please remember that most of the material in
          this app can or will be found in other locations for free. The app is
          is the best version of the education material. So let's learn how to
          use Bitcoin!
          <br />
          <br />
          <a
            style={{
              color: "gold",
              margin: 24,
              textDecoration: "underline",
            }}
            href="https://robotsbuildingeducation.my.canva.site/access"
            target="_blank"
          >
            🎨 How to login guide @ Canva
          </a>
          <br />
          <br />
          <a
            style={{
              color: "gold",
              margin: 24,
              textDecoration: "underline",
            }}
            href="https://www.patreon.com/robotsbuildingeducation/about"
            target="_blank"
          >
            📬 Learn more @ Patreon
          </a>
          <br />
          <br />
          <a
            style={{
              color: "gold",
              margin: 24,
              textDecoration: "underline",
            }}
            href="https://www.tiktok.com/@sheilfer/playlist/RO.B.E%203-7307138853159062318?is_from_webapp=1&sender_device=pc"
            target="_blank"
          >
            ♪ Watch the playlist for free @ Tiktok
          </a>
        </p>
        {/* <p
          style={{
            ...textBlock(
              japaneseThemePalette.StrongBlue,
              0,
              12,
              "white",
              "10px 10px 5px 0px rgba(0,0,0,0.75)"
            ),
            textAlign: "left",
          }}
        >
          <h4>Logging in</h4>

          <p>
            As mentioned below, we will need to install tools in order to fund
            our devices with cash and Bitcoin. You mostly need a phone and/or
            email along to get these services, since they're privacy focused.
            You might "mess up" along the way. That's okay. That's part of the
            learning process. Have fun with it an explore concepts. Ask ChatGPT
            for help too! 😊
          </p>
          <ol>
            <li style={{ marginBottom: 12 }}>
              Install Cash App or any money network in your country that gives
              you access to purcahse Bitcoin. Leave some cash and Bitcoin on the
              application so that your layer 3 stays funded.
              <br />
              <a
                style={{
                  color: "#ed9140",
                  margin: 24,
                  textDecoration: "underline",
                }}
                href="https://cash.app/"
                target="_blank"
              >
                cash.app
              </a>
              <br />
              <br />
            </li>
            <li style={{ marginBottom: 12 }}>
              Install Strike.me or Bitcoin lightning network app on your mobile
              device. Send some Bitcoin from your Cash App to the receiver
              address found in your Strike wallet. Leave some Bitcoin here so
              your layer 2 mobile device stays funded.
              <br />
              <a
                style={{
                  color: "#ed9140",
                  margin: 24,
                  textDecoration: "underline",
                }}
                href="https://strike.me/"
                target="_blank"
              >
                strike.me
              </a>
              <br />
              <br />
            </li>

            <li style={{ marginBottom: 12 }}>
              Create an account on Alby using your web browser and get the
              extension. Send some Bitcoin from Strike to the receiver address
              found in your Alby wallet. You can use a QR code to do this from
              your mobile device. Leave Bitcoin here so you can use Robots
              Building Education.
              <br />
              <a
                style={{
                  color: "#ed9140",
                  margin: 24,
                  textDecoration: "underline",
                }}
                href="https://getalby.com/"
                target="_blank"
              >
                getalby.com
              </a>
              <br />
            </li>
            <div></div>
          </ol>
        </p>

        <p
          style={{
            ...textBlock(
              "#fa39f3",
              0,
              12,
              "white",
              "10px 10px 5px 0px rgba(0,0,0,0.75)"
            ),
            textAlign: "left",
          }}
        >
          <h4>About Bitcoin</h4>
          First and foremost, Bitcoin is many things. It allows you to use money
          online privately like you would use cash. It also gives developers
          greater control over how it works online with code.
          <br />
          <br />I recommend to think about Bitcoin like it's property. Basically
          if you own some Bitcoin, you should be careful about how, when and
          where you spend it. So today you're probably buying Bitcoin with cash
          and you're thinking of using it on my platform because I'm hoping to
          give you something as valuable with knowledge.
        </p>

        <p
          style={{
            ...textBlock(
              japaneseThemePalette?.PowerPurple,
              0,
              12,
              "white",
              "10px 10px 5px 0px rgba(0,0,0,0.75)"
            ),
            textAlign: "left",
          }}
        >
          <h4>Network Layers</h4>
          <p>
            In short, the bigger the layer, the farther you are away from the
            Bitcoin miners, who are responsible for the creation of Bitcoin.
            Proof-of-work is the philosophy that governs Bitcoin.
          </p>
          <p>
            The <b>Layer 4</b> network appears to be decentralized applications
            and services. These are networks designed to collect SATs, which are
            the cents of Bitcoin. This includes Robots Building Education.
            Remember how I said to think carefully before spending Bitcoin?
            Think of payment as a way to grant people to make the internet
            better.
          </p>
          <p>
            The <b>Layer 3</b> network are popular money networks Americans use
            to buy Bitcoin and move dollars. Cash App, Coinbase and other mobile
            app are common custodial solution. You connect your bank account and
            primarily use the Visa, Mastercard and software networks to access
            to things.
          </p>
          <p>
            <b>Layer 2</b> networks include services like Strike (mobile) and
            Alby (web browser), which let you move Bitcoin across devices. The
            most popular layer 2 network is called Lightning, which is a
            decentralized version of Visa or Mastercard. For most people, this
            means buying Bitcoin on Cash App, moving it to your Strike wallet
            and then moving that bitcoin to your web browser wallet.
          </p>
          <p>
            <b>Layer 1</b> is the Bitcoin network. This is where we look at
            Bitcoin as technological abstractions of money systems like gold and
            treasury. Fees are high, so this longterm means that transaction on
            the layer 1 network is expensive but can move large sums of money.
          </p>
        </p> */}
      </div>
      {/* {renderPatreonContent(patreonObject)} */}
      {/* <Deposit /> */}
    </div>
  );
};
