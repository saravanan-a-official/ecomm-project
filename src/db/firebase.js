// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACuf71w9JchIOGH0PY_-24ZvulV5K4AMg",
    authDomain: "ecomm-app-7e1d7.firebaseapp.com",
    databaseURL: "https://ecomm-app-7e1d7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ecomm-app-7e1d7",
    storageBucket: "ecomm-app-7e1d7.appspot.com",
    messagingSenderId: "4367754483",
    appId: "1:4367754483:web:c831e370dda6253db54386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)