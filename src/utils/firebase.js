// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCANi3f5HVTyUBnv9wPasRVKOWxRVaKxxo",
  authDomain: "netflixgpt-f2e12.firebaseapp.com",
  projectId: "netflixgpt-f2e12",
  storageBucket: "netflixgpt-f2e12.firebasestorage.app",
  messagingSenderId: "172834649165",
  appId: "1:172834649165:web:59de3baa28964423ded804",
  measurementId: "G-S13P27ELZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();