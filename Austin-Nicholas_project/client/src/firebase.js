//import { initializeApp } from "firebase/app";
//import {getFirestore} from "@firebase/firestore";
//import {getAuth} from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore'
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBsmBe8PJ4v5ofJQP5X2ZeHwCIorJMkC9k",
    authDomain: "auth-development-e0982.firebaseapp.com",
    projectId: "auth-development-e0982",
    storageBucket: "auth-development-e0982.appspot.com",
    messagingSenderId: "517312067084",
    appId: "1:517312067084:web:e669e6d855ab7161296029"
  };

firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);

export default firebase;
export const storage = firebase.storage().ref();
export const auth = firebase.auth();
export const db = firebase.firestore();
//export default app;