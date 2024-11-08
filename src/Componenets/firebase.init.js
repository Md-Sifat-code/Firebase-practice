// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYBwZo4WYLLzO-as7qaXhh1cG7ptXaPfg",
  authDomain: "sample-firebase-3c9ab.firebaseapp.com",
  projectId: "sample-firebase-3c9ab",
  storageBucket: "sample-firebase-3c9ab.firebasestorage.app",
  messagingSenderId: "605179091214",
  appId: "1:605179091214:web:048d1aff8b505c2c1a1f5f",
  measurementId: "G-M37E6MNJ67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)