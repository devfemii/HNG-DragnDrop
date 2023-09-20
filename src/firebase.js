// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSpQyxjJjWy_D3Jm4k9CgYMPey2ntL2bU",
  authDomain: "drag-gallery.firebaseapp.com",
  projectId: "drag-gallery",
  storageBucket: "drag-gallery.appspot.com",
  messagingSenderId: "688870439283",
  appId: "1:688870439283:web:6366377ae155bc1824ed06",
  measurementId: "G-KNJLVSBBG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;