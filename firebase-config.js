import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateEmail, updatePassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Replace with your project's Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAYm1y3AsVdlk4DNj5bIJMciLmqSsTvSGI",
  authDomain: "profile-685e8.firebaseapp.com",
  projectId: "profile-685e8",
  storageBucket: "profile-685e8.firebasestorage.app",
  messagingSenderId: "198395442971",
  appId: "1:198395442971:web:eca9fe6903973aa21dc5be",
  measurementId: "G-SZFDCWQSMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export to window to make them accessible in other scripts
window.db = db;
window.auth = auth;
window.doc = doc;
window.getDoc = getDoc;
window.setDoc = setDoc;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.onAuthStateChanged = onAuthStateChanged;
window.signOut = signOut;
window.updateEmail = updateEmail;
window.updatePassword = updatePassword;

console.log("Firebase initialized successfully");
