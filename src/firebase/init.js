
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEWDJRsIos5i3wX17wy1TGMT6rHhMIpOU",
  authDomain: "week7-bingqing.firebaseapp.com",
  projectId: "week7-bingqing",
  storageBucket: "week7-bingqing.appspot.com",
  messagingSenderId: "661689613180",
  appId: "1:661689613180:web:c6e8d5e9ea8734716982f9"
};


 const app = initializeApp(firebaseConfig);
 const db = getFirestore()
 export default db

 