import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7CXInRsaeHAnRK1qVcIynusyBRm2wIJU",
  authDomain: "xp-plus-ai-training-platform.firebaseapp.com",
  projectId: "xp-plus-ai-training-platform",
  storageBucket: "xp-plus-ai-training-platform.firebasestorage.app",
  messagingSenderId: "715866902219",
  appId: "1:715866902219:web:81fb4a92e0137fe889554e",
  measurementId: "G-0CFV5CX7RV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();