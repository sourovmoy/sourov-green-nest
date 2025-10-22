// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMI_GsN3xpK9BBgI9P4HiiP_44hEVsJQ",
  authDomain: "sourvo-green-nest.firebaseapp.com",
  projectId: "sourvo-green-nest",
  storageBucket: "sourvo-green-nest.firebasestorage.app",
  messagingSenderId: "789930641185",
  appId: "1:789930641185:web:b53d8296be85978f19a060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
