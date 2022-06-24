import firebase from "firebase/app";
import "firebase/firestore";
import  "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg4jCE0DyaAp9cdmKNBAH72HSIdOdAF9o",
  authDomain: "ctprov-6ce43.firebaseapp.com",
  projectId: "ctprov-6ce43",
  storageBucket: "ctprov-6ce43.appspot.com",
  messagingSenderId: "387311582309",
  appId: "1:387311582309:web:3a8f1b25b00904e1b41a8c",
  measurementId: "G-KDD1PK7G3R"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();