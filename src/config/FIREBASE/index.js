import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyDJMi7HdEskcPaZaxgRA1ZLvrm2CA6AfEs",
  authDomain: "modul-9-b2c4d.firebaseapp.com",
  databaseURL: "https://modul-9-b2c4d-default-rtdb.firebaseio.com/",
  projectId: "modul-9-b2c4d",
  storageBucket: "modul-9-b2c4d.appspot.com",
  messagingSenderId: "65380169181",
  appId: "1:65380169181:web:00681eab12fd8bc5aa3234"
});

const FIREBASE = firebase;

export default FIREBASE;