// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHb3dvrYemQ3IHqieKmO19LjbVrCPeHkk',
  authDomain: 'netflix-clone-d2438.firebaseapp.com',
  projectId: 'netflix-clone-d2438',
  storageBucket: 'netflix-clone-d2438.appspot.com',
  messagingSenderId: '513905116553',
  appId: '1:513905116553:web:fa5f249f8d65d43c4b8d58',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
