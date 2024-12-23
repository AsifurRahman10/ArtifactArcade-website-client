// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFy9XOWMmi-XYvM554zn80B2_BqRSBnIQ",
  authDomain: "artifactarcade-website.firebaseapp.com",
  projectId: "artifactarcade-website",
  storageBucket: "artifactarcade-website.firebasestorage.app",
  messagingSenderId: "703210765041",
  appId: "1:703210765041:web:c0211ec47bcc0dc8a64750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);