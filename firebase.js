import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBU0DNJ0iEbWNqXkGeTIp0ql7xrSkhQ16Q",
  authDomain: "chathdp.firebaseapp.com",
  projectId: "chathdp",
  storageBucket: "chathdp.appspot.com",
  messagingSenderId: "482423099580",
  appId: "1:482423099580:web:23a898b7ad2d1b8f1e80b9",
  measurementId: "G-ZLVM8M1Q4J"
};


const firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig, 'chathdp');

export default firebaseApp


