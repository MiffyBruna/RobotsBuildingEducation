import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ImpactWallet } from "./ProofOfWork/ImpactWallet/ImpactWallet";
import GraphContainer from "./MohyMap";

function detectDeviceType() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  let result = "Desktop";
  // Check for mobile devices
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  if (result === "Desktop") {
    return true;
  }

  return false;
}

function detectBrowser() {
  var userAgent = navigator.userAgent;

  let result = "Chrome";

  if (detectDeviceType()) {
    if (userAgent.match(/chrome|chromium|crios/i)) {
      result = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      result = "Firefox";
    } else if (userAgent.match(/safari/i)) {
      result = "Safari";
    } else if (userAgent.match(/opr\//i)) {
      result = "Opera";
    } else if (userAgent.match(/edg/i)) {
      result = "Edge";
    } else if (userAgent.match(/msie|trident/i)) {
      result = "Internet Explorer";
    } else {
      result = "Unknown";
    }
  }

  if (result === "Chrome") {
    return true;
  }

  return false;
}

// lets fix this after deleting things:
// remove the route and use the userAuth object instead to reference the user ID
const router = createBrowserRouter([
  {
    path: "/",
    element: <App canInstallPwa={true} />,
    children: [
      {
        path: "/profile/:profileID",
        element: <ImpactWallet />,
      },
    ],
  },
  {
    path: "/map",
    element: <GraphContainer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

if ("serviceWorker" in navigator) {
  console.log("registering");
  navigator.serviceWorker.register("service-worker.js");

  console.log("navigator", navigator.serviceWorker);
}
