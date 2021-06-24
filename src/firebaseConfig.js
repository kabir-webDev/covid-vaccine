import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAALZ0cVQRQJ7ueJLVKQy99NzkEfb-cClw",
  authDomain: "co-vax-bd.firebaseapp.com",
  projectId: "co-vax-bd",
  storageBucket: "co-vax-bd.appspot.com",
  messagingSenderId: "38083083190",
  appId: "1:38083083190:web:3466c56eb97a1abc11df17",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
