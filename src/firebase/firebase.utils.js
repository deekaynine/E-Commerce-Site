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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //firebase automatically gives back a ref object when pointing to a document or collection even if empty
  const collectionRef = firestore.collection(collectionKey);

  console.log(collectionRef);

  //batches all calls together so if it fails the whole batch fails, used for consistency in errors
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  //async batch call
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumlator, collection) => {
    accumlator[collection.title.toLowerCase()] = collection;
    return accumlator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//initialize google auth with firebase
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
