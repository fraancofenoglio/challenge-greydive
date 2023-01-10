import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB8TvyHnXlfkNzbst6ogTX-7_VfeH9qRh8",
  authDomain: "challenge-greydive-d0271.firebaseapp.com",
  projectId: "challenge-greydive-d0271",
  storageBucket: "challenge-greydive-d0271.appspot.com",
  messagingSenderId: "807534411295",
  appId: "1:807534411295:web:13eb76949a745d2b731f2a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}
