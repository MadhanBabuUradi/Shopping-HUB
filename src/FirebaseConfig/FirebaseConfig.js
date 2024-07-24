import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUOBRNL9HtAaaHlyFf1QOiVmzc3DKE9K8",
  authDomain: "shop-it-4a4b2.firebaseapp.com",
  projectId: "shop-it-4a4b2",
  storageBucket: "shop-it-4a4b2.appspot.com",
  messagingSenderId: "489900796814",
  appId: "1:489900796814:web:1991c90bfa5b1c8121d2df",
  measurementId: "G-807ZMS1R92"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);