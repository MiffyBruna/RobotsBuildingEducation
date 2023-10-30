import { useState, useEffect } from "react";
import { LearnMore } from "./LearnMore/LearnMore";
import robe_logo from "../common/media/images/robe_logo.png";
import { prettyColorPalette } from "../styles/lazyStyles";
import { Form } from "react-bootstrap";
import { words } from "../common/words/words";

export const Header = ({ languageMode, setLanguageMode }) => {
  // State for Language mode switch
  const [isSpanishMode, setIsSpanishMode] = useState(false);
  const [languageModeLabel, setLanguageModeLabel] = useState("English");

  // State for Color palette switch
  const [isHolyGhostModeActive, setIsHolyGhostModeActive] = useState(false);
  const [colorPaletteLabel, setColorPaletteLabel] = useState(
    languageMode.buttons["59"]
  );

  // Function to toggle language mode and update label
  const toggleLanguageMode = () => {
    setIsSpanishMode(!isSpanishMode);
  };

  // Function to toggle color palette mode and update label
  const toggleColorPaletteMode = () => {
    setIsHolyGhostModeActive(!isHolyGhostModeActive);
  };

  // Update the language mode label when switch state changes
  useEffect(() => {
    setLanguageModeLabel(isSpanishMode ? "Español" : "English");
    setLanguageMode(isSpanishMode ? words["Español"] : words["English"]);
  }, [isSpanishMode]);

  // Update the color palette label when switch state changes
  useEffect(() => {
    setColorPaletteLabel(
      isHolyGhostModeActive
        ? languageMode.buttons["60"]
        : languageMode.buttons["59"]
    );
  }, [isHolyGhostModeActive, languageMode]);
  return (
    <div style={{ color: prettyColorPalette.softYellowGlow }}>
      <img width="175px" src={robe_logo} style={{ marginTop: "24px" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "left",
            boxSizing: "border-box",

            marginRight: 5,
            width: "250px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form
            style={{
              width: "200px",
              padding: 5,
            }}
          >
            <Form.Switch>
              <Form.Check
                type="switch"
                id="custom-switch-lang"
                label={languageModeLabel}
                onChange={toggleLanguageMode}
                checked={isSpanishMode}
              />
              <Form.Check
                disabled
                type="switch"
                id="custom-switch-color"
                label={colorPaletteLabel}
                onChange={toggleColorPaletteMode}
                checked={isHolyGhostModeActive}
              />
            </Form.Switch>
          </Form>
        </div>
      </div>
      <br />
      <LearnMore languageMode={languageMode} />
    </div>
  );
};
