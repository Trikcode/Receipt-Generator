// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBat-mde7eQhx1uKTuRKxicSwPV4ykA3OE",
  authDomain: "internopay-receipt.firebaseapp.com",
  projectId: "internopay-receipt",
  storageBucket: "internopay-receipt.appspot.com",
  messagingSenderId: "831150329822",
  appId: "1:831150329822:web:509163cea7be22819d574f",
  measurementId: "G-TFQBL85FJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
