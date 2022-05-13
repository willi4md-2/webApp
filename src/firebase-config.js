// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4I39BfclZom34VZAZi1EAEbgr5sG9QGg",
  authDomain: "bestpromo-8a7ba.firebaseapp.com",
  projectId: "bestpromo-8a7ba",
  storageBucket: "bestpromo-8a7ba.appspot.com",
  messagingSenderId: "946754393283",
  appId: "1:946754393283:web:207f38a840e854a5293e76",
  measurementId: "G-C5KL1P6VYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);