// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYS34Nbbxz6_RDn7l4SJs213I8Wqv5wc8",
  authDomain: "keeper-project-d5d2a.firebaseapp.com",
  projectId: "keeper-project-d5d2a",
  storageBucket: "keeper-project-d5d2a.appspot.com",
  messagingSenderId: "312542570977",
  appId: "1:312542570977:web:75c655989e666cc1048aa0",
  measurementId: "G-2QCEPW4FKC"
};

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;