
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyAz0uBpuQNLxzOVmQKb53Aq4Lp4XHU2eM0",
  authDomain: "plc-1fb09.firebaseapp.com",
  //databaseURL:"https://plc-1fb09-default-rtdb.firebaseio.com",
  projectId: "plc-1fb09",
  storageBucket: "plc-1fb09.appspot.com",
  messagingSenderId: "466367014811",
  appId: "1:466367014811:web:ada742989a6a68d036e33e",
  measurementId: "G-X8S3FNR5XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

// export const database_1= app.database()