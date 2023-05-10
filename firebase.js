// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxQFQXnu4IKWXoO7BZap7kGSHtZSKqWlM",
  authDomain: "twitter-c5898.firebaseapp.com",
  databaseURL: "https://twitter-c5898-default-rtdb.firebaseio.com",
  projectId: "twitter-c5898",
  storageBucket: "twitter-c5898.appspot.com",
  messagingSenderId: "837394825110",
  appId: "1:837394825110:web:013c2e49e631fe198b27b7",
};

// Initialize Firebase

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
