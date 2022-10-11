/* eslint-disable import/prefer-default-export */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChTl6Lh4dBhB3_58WcuTM8YAOCSRpanAA",
  authDomain: "personal-portfolio-374ec.firebaseapp.com",
  projectId: "personal-portfolio-374ec",
  storageBucket: "personal-portfolio-374ec.appspot.com",
  messagingSenderId: "578766694757",
  appId: "1:578766694757:web:f1c1c669bb85b7e922d98c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
