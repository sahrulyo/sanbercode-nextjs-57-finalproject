import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDWN6yUVv8W-evHDAZigiIwfRZw_Zt4BgQ",
  authDomain: "sanberapp-firebase-auth.firebaseapp.com",
  projectId: "sanberapp-firebase-auth",
  storageBucket: "sanberapp-firebase-auth.appspot.com",
  messagingSenderId: "39238794801",
  appId: "1:39238794801:web:2eef3193b1eda1580e9f10"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, githubProvider, db };