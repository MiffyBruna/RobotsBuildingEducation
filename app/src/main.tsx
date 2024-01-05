import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ImpactWallet } from "./ProofOfWork/ImpactWallet/ImpactWallet";
import GraphContainer from "./MohyMap";

// this is the craziest routing I ever did

// lets fix this after deleting things:
// remove the route and use the userAuth object instead to reference the user ID
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
