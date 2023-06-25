import { LearnMore } from "./LearnMore/LearnMore";
// import robotsLogo from "../common/media/images/robotsLogo.png";
import roxanabrand from "../common/media/images/roxanabrand.gif";
import { prettyColorPalette } from "../styles/lazyStyles";
import { Apply } from "./Apply/Apply";
export const Header = ({
  auth,
  globalReserveCounter,
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  computePercentage,
  patreonObject,
  handleRandomDemoPressed,
}) => {
  return (
    <div style={{ color: prettyColorPalette.softYellowGlow }}>
      <img width="125px" src={roxanabrand} />
      <br />
      <br />
      <h2>RO.₿.E</h2>
      <h3>Robots Building Education</h3>
      {/* <h4>{globalReserveCounter}</h4> */}

      <br />
      <LearnMore auth={auth} />
      <Apply
        auth={auth}
        globalReserveCounter={globalReserveCounter}
        patreonObject={patreonObject}
        userDocumentReference={userDocumentReference}
        databaseUserDocument={databaseUserDocument}
        setDatabaseUserDocument={setDatabaseUserDocument}
        globalDocumentReference={globalDocumentReference}
        globalImpactCounter={globalImpactCounter}
        setGlobalImpactCounter={setGlobalImpactCounter}
        computePercentage={computePercentage}
      />
    </div>
  );
};
