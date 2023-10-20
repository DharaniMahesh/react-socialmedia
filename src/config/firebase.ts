// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPtc-1crSQLqA2M0N7Pt8RL4cWUz0YhuI",
  authDomain: "react-course-afc02.firebaseapp.com",
  projectId: "react-course-afc02",
  storageBucket: "react-course-afc02.appspot.com",
  messagingSenderId: "669371226503",
  appId: "1:669371226503:web:32926d2fa1d6f5eb2ddb22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)