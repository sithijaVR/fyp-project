// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAz0uBpuQNLxzOVmQKb53Aq4Lp4XHU2eM0",
  authDomain: "plc-1fb09.firebaseapp.com",
  projectId: "plc-1fb09",
  storageBucket: "plc-1fb09.appspot.com",
  messagingSenderId: "466367014811",
  appId: "1:466367014811:web:ada742989a6a68d036e33e",
  measurementId: "G-X8S3FNR5XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);