import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase konfiguratsiya
const firebaseConfig = {
  apiKey: "AIzaSyCTzqkt_0eW5e9vwtgHoRiQ2gQ5pN-E_lc",
  authDomain: "iprooauth2.firebaseapp.com",
  projectId: "iprooauth2",
  storageBucket: "iprooauth2.appspot.com",
  messagingSenderId: "1081084381900",
  appId: "1:1081084381900:web:ede000a134261bfe8f1069",
  measurementId: "G-S5BXV7TRWH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
