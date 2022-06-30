import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth"

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeFdQFXSXVEZoRVQVDmkJyyTdidEL6a-4",
  authDomain: "crwn-clothing-db-de437.firebaseapp.com",
  projectId: "crwn-clothing-db-de437",
  storageBucket: "crwn-clothing-db-de437.appspot.com",
  messagingSenderId: "672068244987",
  appId: "1:672068244987:web:c4a382beeebf9d0d2ee75e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth,additionInformation ={}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef,
        { displayName, email, createAt ,...additionInformation});
    }
    catch (error) {
      console.log('error creating the user ', error.message);
    }

  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
}