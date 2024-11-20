// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1R6geef3sRry2PGi2dSOJ318UwOyiac4",
    authDomain: "a-platform-for-volunteers.firebaseapp.com",
    projectId: "a-platform-for-volunteers",
    storageBucket: "a-platform-for-volunteers.firebasestorage.app",
    messagingSenderId: "953895124248",
    appId: "1:953895124248:web:ecf423761549b18a07326d",
    measurementId: "G-JLP2Q6B84P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
