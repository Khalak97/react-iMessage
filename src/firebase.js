import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEPxGIvPNYQlnKkJpDcero2tqeTHpLcjc",
  authDomain: "react-message-a5b52.firebaseapp.com",
  databaseURL: "https://react-message-a5b52.firebaseio.com",
  projectId: "react-message-a5b52",
  storageBucket: "react-message-a5b52.appspot.com",
  messagingSenderId: "867550970633",
  appId: "1:867550970633:web:e82d3dd15c8ed8616c49d8",
  measurementId: "G-H0ZQ18P9TY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
