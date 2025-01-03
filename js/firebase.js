// firebase.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbuixZHJDTXD1RMP595LxmUsO9xEhtP08",
  authDomain: "escrow-82240.firebaseapp.com",
  projectId: "escrow-82240",
  storageBucket: "escrow-82240.appspot.com",
  messagingSenderId: "824319107104",
  appId: "1:824319107104:web:d999961048d600c6875c45",
  measurementId: "G-YE6X6BFGPH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };



