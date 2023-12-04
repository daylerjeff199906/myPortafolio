// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCELPU8iWcxrdo1RrhEGRXGQtXg-MY8SyY",
  authDomain: "my-portafolio-d9cb9.firebaseapp.com",
  projectId: "my-portafolio-d9cb9",
  storageBucket: "my-portafolio-d9cb9.appspot.com",
  messagingSenderId: "5813717792",
  appId: "1:5813717792:web:7e6fffbb059891f9cf2545",
  measurementId: "G-0Z8BCK42QP",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
