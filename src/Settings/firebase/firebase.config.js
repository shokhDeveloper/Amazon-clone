import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBTepQnRgWSEmIQL9fLmbPlTm_X_eaGQ9o",
  authDomain: "clone-de356.firebaseapp.com",
  projectId: "clone-de356",
  storageBucket: "clone-de356.appspot.com",
  messagingSenderId: "287060998691",
  appId: "1:287060998691:web:eb22661527a9df17b34f96",
  measurementId: "G-0TB0NRKM1G"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const GoogleProvider = new GoogleAuthProvider()