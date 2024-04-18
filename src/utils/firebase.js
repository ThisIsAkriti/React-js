// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoXMmHw1KEdjQ0o9WrOUTkka_WcwL0j_o",
  authDomain: "okiedokie-food.firebaseapp.com",
  projectId: "okiedokie-food",
  storageBucket: "okiedokie-food.appspot.com",
  messagingSenderId: "959418275192",
  appId: "1:959418275192:web:b30885e3b299875479e48d",
  measurementId: "G-9YC6TJLMBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);