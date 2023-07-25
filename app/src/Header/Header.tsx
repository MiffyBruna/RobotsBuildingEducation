import { LearnMore } from "./LearnMore/LearnMore";
import roxanabrand from "../common/media/images/roxanabrand.gif";
import { prettyColorPalette } from "../styles/lazyStyles";

export const Header = ({ auth }) => {
  return (
    <div style={{ color: prettyColorPalette.softYellowGlow }}>
      <img width="125px" src={roxanabrand} />
      <br />
      <br />
      <h2>RO.₿.E</h2>
      <h3>Robots Building Education</h3>

      <br />
      <LearnMore auth={auth} />
    </div>
  );
};
