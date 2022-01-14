import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//initializing firebase
const config = {
  apiKey: "AIzaSyCU6d0GZfafPqxkzJzsUwwYnd_xi567X9M",
  authDomain: "e-commerce-site-e93f3.firebaseapp.com",
  projectId: "e-commerce-site-e93f3",
  storageBucket: "e-commerce-site-e93f3.appspot.com",
  messagingSenderId: "383270364585",
  appId: "1:383270364585:web:f35673b0f452e8a8ad10b8",
  measurementId: "G-DSDJQXWBM8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//initialize google auth with firebase
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
