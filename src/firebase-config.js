
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_GcSBDRP9D2YG4bqRSdgn3OGetqjAblw",
  authDomain: "oddaj-rzeczy-1cdfd.firebaseapp.com",
  projectId: "oddaj-rzeczy-1cdfd",
  storageBucket: "oddaj-rzeczy-1cdfd.appspot.com",
  messagingSenderId: "874675703558",
  appId: "1:874675703558:web:78be09f2692ff354edd887",
  measurementId: "G-JG6ZB8MSSW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);