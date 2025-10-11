import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBkhnp1YG0-JTxgmfOG9Nb4PWfgyoVnZB0",
    authDomain: "flight-ticket-booking-66c9f.firebaseapp.com",
    projectId: "flight-ticket-booking-66c9f",
    storageBucket: "flight-ticket-booking-66c9f.firebasestorage.app",
    messagingSenderId: "577655644241",
    appId: "1:577655644241:web:25b57b4c68d53b2abc1870"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);