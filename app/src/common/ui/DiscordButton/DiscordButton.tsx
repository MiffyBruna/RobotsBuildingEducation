/* React Component Version */
import { logEvent } from "firebase/analytics";
import React from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import { analytics } from "../../../database/firebaseResources";
import linkedInLogo from "../../../common/media/images/linkedInLogo.png";
import patreonLogos from "../../../common/media/images/patreonLogos.png";

export const DiscordButton = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",

      padding: 12,
      backgroundColor: "rgba(0,0,0,0.8)",
      // border: "1px solid red",
      minWidth: 375,
      maxWidth: "100%",
    }}
  >
    <a
      onClick={() =>
        logEvent(analytics, "select_promotion", {
          creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
          creative_slot: `About Slot`,
          promotion_id: `Robots Building Education`,
          promotion_name: "advertising_launch",
        })
      }
      href="https://www.patreon.com/RobotsBuildingEducation"
      target={"_blank"}
      style={{
        // border: "1px solid white",
        color: "white",
        // padding: 24,
        // backgroundColor: "#141518",

        // color: "white",
        // borderRadius: "6px",
      }}
    >
      <Button variant="light">
        <img
          style={{ borderRadius: "6px" }}
          width="32px"
          height="32px"
          src={patreonLogos}
        />
      </Button>
      <br />
      Subscribe
    </a>
    <a
      style={{ marginRight: 48 }}
      onClick={() =>
        logEvent(analytics, "select_promotion", {
          creative_name: `https://www.linkedin.com/groups/14205495/`,
          creative_slot: `LinkedIn Networking Slot`,
          promotion_id: `Robots Building Education LinkedIn`,
          promotion_name: "advertising_launch",
        })
      }
      href={"https://www.linkedin.com/groups/14205495/"}
      target={"_blank"}
      style={{ color: "white" }}
    >
      <Button variant="light">
        <img width="36px" height="32px" src={linkedInLogo} />
      </Button>
      <br />
      Network
    </a>
    <br />
    <br />
    <a
      style={{ marginRight: 48 }}
      onClick={() =>
        logEvent(analytics, "select_promotion", {
          creative_name: `https://discord.gg/9kguaaDRmt`,
          creative_slot: `Discord Slot`,
          promotion_id: `Robots Building Education Discord`,
          promotion_name: "advertising_launch",
        })
      }
      href={"https://discord.gg/9kguaaDRmt"}
      target={"_blank"}
      style={{ color: "white" }}
    >
      <Button variant="light">
        <div
          style={{
            width: 36,
            height: 32,
          }}
        >
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 245 240"
          >
            <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
            <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
          </svg>
        </div>
      </Button>
      <br />
      Contact
    </a>
    <br />
    <br />
    <a
      onClick={() =>
        logEvent(analytics, "select_promotion", {
          creative_name: `https://chat.openai.com/g/g-09h5uQiFC-ms-roxana`,
          creative_slot: `OpenAI Slot`,
          promotion_id: `Robots Building Education OpenAI`,
          promotion_name: "advertising_launch",
        })
      }
      href={"https://chat.openai.com/g/g-09h5uQiFC-ms-roxana"}
      target={"_blank"}
      style={{ color: "white" }}
    >
      <Button variant="light">
        <svg
          data-name="OpenAI Logo"
          width="36px"
          height="32px"
          viewBox="140 140 520 520"
        >
          <defs>
            <linearGradient id="linear" x1="100%" y1="22%" x2="0%" y2="78%">
              <stop offset="0%" stop-color="rgb(131,211,231)"></stop>
              <stop offset="2%" stop-color="rgb(127,203,229)"></stop>
              <stop offset="25%" stop-color="rgb(86,115,217)"></stop>
              <stop offset="49%" stop-color="rgb(105,80,190)"></stop>
              <stop offset="98%" stop-color="rgb(197,59,119)"></stop>
              <stop offset="100%" stop-color="rgb(197,59,119)"></stop>
            </linearGradient>
          </defs>
          <path
            id="logo"
            d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 -137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z"
            fill="var(--gray-900)"
          ></path>
        </svg>
      </Button>
      <br />
      OpenAI
    </a>
  </div>
);
