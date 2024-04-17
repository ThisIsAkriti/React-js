// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAehw_Ag0gtqhMuOH1WdnwKmwh7OCNp4y0",
  authDomain: "okiedokiefood-12a21a.firebaseapp.com",
  projectId: "okiedokiefood-12a21a",
  storageBucket: "okiedokiefood-12a21a.appspot.com",
  messagingSenderId: "103403116576",
  appId: "1:103403116576:web:1b22c7d29bf3300ee38445",
  measurementId: "G-PPCG9D55F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);