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
  border: "1px solid #1C1C1E",
  width: "fit-content",
  margin: "auto",
  backgroundColor: "#1C1C1E",
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
