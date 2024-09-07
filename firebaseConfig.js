// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD21s-EjOMrzJw6qI-UakysSaeEPw03yEE",
  authDomain: "proyectorealtime1esp.firebaseapp.com",
  databaseURL: "https://proyectorealtime1esp-default-rtdb.firebaseio.com",
  projectId: "proyectorealtime1esp",
  storageBucket: "proyectorealtime1esp.appspot.com",
  messagingSenderId: "1083674204610",
  appId: "1:1083674204610:web:c80573f845efa15d979e5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
