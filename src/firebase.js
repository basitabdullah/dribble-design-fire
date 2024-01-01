
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAcABKWEwZ6bKYHLn1xwSBodUM4PZgNtMI",
  authDomain: "dribble-design-bd50c.firebaseapp.com",
  projectId: "dribble-design-bd50c",
  storageBucket: "dribble-design-bd50c.appspot.com",
  messagingSenderId: "25953500467",
  appId: "1:25953500467:web:3220e59fa2331fb9445246"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();