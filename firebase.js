import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoOMu1xZXV881ocvNrRG_hx_KfO1uSYxo",
  authDomain: "tecno-app-dev.firebaseapp.com",
  projectId: "tecno-app-dev",
  storageBucket: "tecno-app-dev.appspot.com",
  messagingSenderId: "345426299777",
  appId: "1:345426299777:web:22c476791b91cb30d2b680",
  measurementId: "G-QXRLHLZGMW"
};

export const app = initializeApp(firebaseConfig);