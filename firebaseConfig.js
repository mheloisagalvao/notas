import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAC9Ul1RVIbDZ1-ClEAjG3q6YBVyOyR998",
  authDomain: "notas-5f258.firebaseapp.com",
  projectId: "notas-5f258",
  storageBucket: "notas-5f258.appspot.com",
  messagingSenderId: "355843739090",
  appId: "1:355843739090:web:d62b5cc1818d2dad7e4c0b"
}
firebase.initializeApp(firebaseConfig);

export const app = firebase.app();
export default firebase