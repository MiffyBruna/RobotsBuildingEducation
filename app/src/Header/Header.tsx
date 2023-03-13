import { About } from "./About/About";
import robotsLogo from "../common/media/images/robotsLogo.png";

export const Header = () => {
  return (
    <>
      <h2>RO.₿.E</h2>
      <h3 style={{ color: "white" }}>Robots Building Education</h3>
      <img width="200px" src={robotsLogo} />

      <br />
      <br />
      <About />
    </>
  );
};
