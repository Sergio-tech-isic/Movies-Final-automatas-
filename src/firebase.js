// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV4YcyxThq1zXgNIT3tXCrtdPTvq7Vv4U",
  authDomain: "app-movie-d7b36.firebaseapp.com",
  projectId: "app-movie-d7b36",
  storageBucket: "app-movie-d7b36.appspot.com",
  messagingSenderId: "284163182465",
  appId: "1:284163182465:web:c27d657afb4e2ac7242280",
  measurementId: "G-QWYNRPYY82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);