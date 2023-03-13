import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  // collection,
  // query,
  // where,
  // getDocs,
} from "firebase/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export const AuthComponent = (StyledFirebaseAuth as any).default
  ? (StyledFirebaseAuth as any).default
  : StyledFirebaseAuth;

export const firebaseConfig = {
  apiKey: "AIzaSyByci0j0u36PaK_2RNpOoC2QHq_Yi2pVhY",
  authDomain: "learn-robotsbuildingeducation.firebaseapp.com",
  projectId: "learn-robotsbuildingeducation",
  storageBucket: "learn-robotsbuildingeducation.appspot.com",
  messagingSenderId: "1016937880040",
  appId: "1:1016937880040:web:e9b478e361cafc4e61ec5d",
  measurementId: "G-N0MK759NHN",

  //G-5P3ZGB53XW
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
