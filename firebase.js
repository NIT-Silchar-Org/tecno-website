import { initializeApp } from 'firebase/app'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCanW812VDZwmlZCn5xR10AG-Xsnwbh-Vc',
  authDomain: 'tecnoesis-app-9e759.firebaseapp.com',
  databaseURL:
    'https://tecnoesis-app-9e759-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tecnoesis-app-9e759',
  storageBucket: 'tecnoesis-app-9e759.appspot.com',
  messagingSenderId: '158581850658',
  appId: '1:158581850658:web:31ac64df29d9e5c20cc07b',
  measurementId: 'G-35MFMX2F10',
}

export const app = initializeApp(firebaseConfig)
