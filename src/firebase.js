// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCifUrNb4_4hmxrzXR_obYzo7Dk1EX08k",
  authDomain: "movieapp-c59f1.firebaseapp.com",
  projectId: "movieapp-c59f1",
  storageBucket: "movieapp-c59f1.appspot.com",
  messagingSenderId: "327437158620",
  appId: "1:327437158620:web:166c54b28cc78b5a6b4c19"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };