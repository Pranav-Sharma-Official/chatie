import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatie-anushi.firebaseapp.com",
  projectId: "chatie-anushi",
  storageBucket: "chatie-anushi.appspot.com",
  messagingSenderId: "750237609492",
  appId: "1:750237609492:web:3dcb122ae4ac8bd4950101"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()