import { LearnMore } from "./LearnMore/LearnMore";
import robe_logo from "../common/media/images/robe_logo.png";
import { prettyColorPalette } from "../styles/lazyStyles";

export const Header = () => {
  return (
    <div style={{ color: prettyColorPalette.softYellowGlow }}>
      <img width="175px" src={robe_logo} style={{ marginTop: "24px" }} />
      {/* 
        <br />
        <br />
        <h2>RO.₿.E</h2>
        <h3>Robots Building Education</h3>
        <br /> 
      */}
      <br />
      <LearnMore />
    </div>
  );
};
