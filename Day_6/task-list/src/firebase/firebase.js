// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBicsgcv_RRYRgB1-z76cJU2WX75fmY2jY",
  authDomain: "task-list-d4768.firebaseapp.com",
  projectId: "task-list-d4768",
  storageBucket: "task-list-d4768.appspot.com",
  messagingSenderId: "754918501050",
  appId: "1:754918501050:web:afd6b0a8964db684613083",
  measurementId: "G-WXBY4T9SVW"
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { d, auth };