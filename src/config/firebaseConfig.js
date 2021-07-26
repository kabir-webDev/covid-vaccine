// import firebase from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";

const firebasecon = {
  apiKey: "AIzaSyBlcce2AstAZjIv_VTHQPa_Cl0KT-5Ne4Q",
  authDomain: "co-vaxbd.firebaseapp.com",
  projectId: "co-vaxbd",
  storageBucket: "co-vaxbd.appspot.com",
  messagingSenderId: "1047100892698",
  appId: "1:1047100892698:web:474324aff3e366d368d3a3",
};

firebase.initializeApp(firebasecon);

export default firebase;

// var firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBlcce2AstAZjIv_VTHQPa_Cl0KT-5Ne4Q",
//   authDomain: "co-vaxbd.firebaseapp.com",
//   projectId: "co-vaxbd",
//   storageBucket: "co-vaxbd.appspot.com",
//   messagingSenderId: "1047100892698",
//   appId: "1:1047100892698:web:474324aff3e366d368d3a3",
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };
