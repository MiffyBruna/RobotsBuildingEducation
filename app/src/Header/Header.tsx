import { About } from "./About/About";
// import robotsLogo from "../common/media/images/robotsLogo.png";
import roxanabrand from "../common/media/images/roxanabrand.gif";
export const Header = () => {
  return (
    <>
      <h2>RO.₿.E</h2>
      <h3 style={{ color: "white" }}>Robots Building Education</h3>
      <img width="125px" src={roxanabrand} />

      <br />
      <br />
      <About />
    </>
  );
};
