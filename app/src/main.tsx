import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Module } from "./Paths/Collections/Module/Module";
import { ImpactWallet } from "./ProofOfWork/ImpactWallet/ImpactWallet";


// this is the craziest routing I ever did
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:moduleID",
        element: <Module />,
      },
      {
        path: "/profile/:profileID",
        element: <ImpactWallet />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <RouterProvider router={router} />

);
