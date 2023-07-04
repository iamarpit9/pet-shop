// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh6OOhhfNx4H89YJrWuq1y1XgZs4rBU64",
  authDomain: "pet-shop-86406.firebaseapp.com",
  projectId: "pet-shop-86406",
  storageBucket: "pet-shop-86406.appspot.com",
  messagingSenderId: "347445768031",
  appId: "1:347445768031:web:7046b5de0eb67ef37bd0ea",
  measurementId: "G-ZNEFMYGSYE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
