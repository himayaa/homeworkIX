// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
import firebase from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_BnCSdcrFaUiv9GpDXZ5NZyJ_K51ZUtE",
  authDomain: "recipe-app-f3b44.firebaseapp.com",
  projectId: "recipe-app-f3b44",
  storageBucket: "recipe-app-f3b44.appspot.com",
  messagingSenderId: "978225367787",
  appId: "1:978225367787:web:93cd46c3502c87fd274cae",
  measurementId: "G-9PBFP45G08"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;