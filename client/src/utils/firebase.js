// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBepB8a4XMK1pguY-D6gIwLau8lIdLTcQ8",
  authDomain: "sazpin-iptv.firebaseapp.com",
  projectId: "sazpin-iptv",
  storageBucket: "sazpin-iptv.appspot.com",
  messagingSenderId: "594734112456",
  appId: "1:594734112456:web:ea7f78ed6258b1458fcffd",
  measurementId: "G-74ZPPE6KPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();

