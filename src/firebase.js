//firebase init file
import { initializeApp } from "firebase/app";

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
initializeApp(firebaseConfig);