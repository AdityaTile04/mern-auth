// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-49ffb.firebaseapp.com",
  projectId: "mern-auth-49ffb",
  storageBucket: "mern-auth-49ffb.appspot.com",
  messagingSenderId: "481253962255",
  appId: "1:481253962255:web:5638e66f1a0efa6de9e97a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
