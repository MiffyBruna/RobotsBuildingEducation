// Import required modules
import { logEvent } from "firebase/analytics";
import {
  auth,
  AuthComponent,
  uiConfig,
  analytics,
} from "../database/firebaseResources";

// Define constants for styling
const containerStyle = {
  border: "2px solid #1C1C1E",
  borderRadius: "10px",
  width: "fit-content",
  margin: "auto",
  backgroundColor: "black",
  marginBottom: "48px",
};

const authComponentStyle = {
  backgroundColor: "black",
};

// Event Handler Function
const handleOnClick = () => {
  logEvent(analytics, "login", { method: "Google" });
};

// AuthDisplay Component
export const AuthDisplay = () => {
  return (
    <div style={containerStyle} onClick={handleOnClick}>
      <br />
      Access all features:
      <AuthComponent
        id="firebaseui-auth-container"
        uiConfig={uiConfig}
        firebaseAuth={auth}
        style={authComponentStyle}
      />
    </div>
  );
};
