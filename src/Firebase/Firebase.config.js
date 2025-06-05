// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp5WpukJqzCgOSJBxc4EzTOsQZOJqc3F4",
  authDomain: "dragon-news-1d9f7.firebaseapp.com",
  projectId: "dragon-news-1d9f7",
  storageBucket: "dragon-news-1d9f7.firebasestorage.app",
  messagingSenderId: "586584198181",
  appId: "1:586584198181:web:31066fd2b1fc7b8a3643cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;