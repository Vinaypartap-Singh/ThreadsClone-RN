// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFrvV3mia7uQwm-JWJW3vICzthKPKXrOc",
  authDomain: "threadsclone-b0190.firebaseapp.com",
  projectId: "threadsclone-b0190",
  storageBucket: "threadsclone-b0190.appspot.com",
  messagingSenderId: "871416998087",
  appId: "1:871416998087:web:8215ef323bff3d6ec576e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
