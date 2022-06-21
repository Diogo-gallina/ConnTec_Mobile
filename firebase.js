
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {db} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjB98iUFQtzjBIyjXa3PNQ9JmKq4pq83k",
  authDomain: "conntec-fa9f4.firebaseapp.com",
  projectId: "conntec-fa9f4",
  storageBucket: "conntec-fa9f4.appspot.com",
  messagingSenderId: "674856657150",
  appId: "1:674856657150:web:5d888b119c0e0aa5a845af",
  measurementId: "G-VF4PDMEG2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);