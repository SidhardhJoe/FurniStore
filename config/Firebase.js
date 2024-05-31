// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDce23J808QMfEcg8uK-fi11GriQnNFxU4",
  authDomain: "furnistore-a235c.firebaseapp.com",
  projectId: "furnistore-a235c",
  storageBucket: "furnistore-a235c.appspot.com",
  messagingSenderId: "478713563038",
  appId: "1:478713563038:web:e1e0f4e419605c7e89f88f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)