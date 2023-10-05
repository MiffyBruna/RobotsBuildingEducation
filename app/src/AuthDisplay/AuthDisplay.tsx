import { logEvent } from "firebase/analytics";
import {
  auth,
  AuthComponent,
  uiConfig,
  analytics,
} from "../database/firebaseResources";

export let AuthDisplay = () => {
  return (
    <div
      style={{
        border: "1px solid #1C1C1E",
        width: "fit-content",
        margin: "auto",
        backgroundColor: "#1C1C1E",
        marginBottom: "48px",
      }}
      onClick={() => {
        logEvent(analytics, "login", { method: "Google" });
      }}
    >
      Access all features:
      <AuthComponent
        id="firebaseui-auth-container"
        uiConfig={uiConfig}
        firebaseAuth={auth}
        style={{ backgroundColor: "black" }}
      />
    </div>
  );
};
