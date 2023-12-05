// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD-K27MPnAuv_pdvqF5xCj2bOfrWfNIlw",
  authDomain: "myportafolio-aedd9.firebaseapp.com",
  projectId: "myportafolio-aedd9",
  storageBucket: "myportafolio-aedd9.appspot.com",
  messagingSenderId: "1098231672286",
  appId: "1:1098231672286:web:4e9d9fd4184e928cb9c14f",
  measurementId: "G-KZWSFM1L74",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);
