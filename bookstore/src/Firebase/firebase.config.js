// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7usFNfBxR7P03JJ3JJ6YuMNqh6_loYtc",
  authDomain: "book-store-6acaf.firebaseapp.com",
  projectId: "book-store-6acaf",
  storageBucket: "book-store-6acaf.firebasestorage.app",
  messagingSenderId: "108948036777",
  appId: "1:108948036777:web:02cb0f066b2ffb18699db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;