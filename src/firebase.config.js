// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASWF4lOxYzdyIDcjsnq_rR6kw8lclTO0o",
  authDomain: "eccomerce2-5bbc7.firebaseapp.com",
  projectId: "eccomerce2-5bbc7",
  storageBucket: "eccomerce2-5bbc7.appspot.com",
  messagingSenderId: "759524898106",
  appId: "1:759524898106:web:0c4199878ddd3c99ebcc03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app