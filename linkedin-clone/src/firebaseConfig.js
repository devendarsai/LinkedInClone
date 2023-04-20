// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj66D1v1v5_QGIU91JfEWg2x4nV3x9Mfg",
    authDomain: "linkedin-clone-37938.firebaseapp.com",
    projectId: "linkedin-clone-37938",
    storageBucket: "linkedin-clone-37938.appspot.com",
    messagingSenderId: "87478220401",
    appId: "1:87478220401:web:ec4ceb681fa88da82f4dd0",
    measurementId: "G-XE9TVQ9DDL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
