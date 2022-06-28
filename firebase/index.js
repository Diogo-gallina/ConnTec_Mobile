import firebase from "firebase/app";
import "firebase/firestore";
import  "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcHdumxWw2EE5zlBUWfztZnwvwPOsr-Bg",
  authDomain: "dbconntec.firebaseapp.com",
  projectId: "dbconntec",
  storageBucket: "dbconntec.appspot.com",
  messagingSenderId: "262344044770",
  appId: "1:262344044770:web:53a3b72a6bd4fa11eeaebb",
  measurementId: "G-MC00XPZT7Z"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();