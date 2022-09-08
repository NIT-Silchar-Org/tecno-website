import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnTYyTe1o7pz0D8xDzB_73MNBcXq4agSQ",
  authDomain: "third-extension-325709.firebaseapp.com",
  databaseURL: "https://third-extension-325709-default-rtdb.firebaseio.com",
  projectId: "third-extension-325709",
  storageBucket: "third-extension-325709.appspot.com",
  messagingSenderId: "427076930682",
  appId: "1:427076930682:web:d5566f3bebe1caf0207fc3",
  measurementId: "G-05BMM4GTVP"
};

export const app = initializeApp(firebaseConfig);