import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMPVCZGasW6kZ_6L60HudQHc3mHaRTJ5Y",
  authDomain: "invoices-e7696.firebaseapp.com",
  projectId: "invoices-e7696",
  storageBucket: "invoices-e7696.appspot.com",
  messagingSenderId: "41443488155",
  appId: "1:41443488155:web:d95493b4c886251382713e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;