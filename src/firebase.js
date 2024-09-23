//firebase init file
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fut-picker.firebaseapp.com",
  projectId: "fut-picker",
  storageBucket: "fut-picker.appspot.com",
  messagingSenderId: "187651233889",
  appId: "1:187651233889:web:3413d6b87e37cb744cb220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);