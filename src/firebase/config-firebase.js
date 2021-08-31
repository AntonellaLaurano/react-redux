import firebase from "firebase/app";
import 'firebase/firestore'  // Base de datos
import 'firebase/auth'  // Autenticaciones

const firebaseConfig = {
    apiKey: "AIzaSyATuFH9MQlxYlODlLaujSzhdENUctMY0vc",
    authDomain: "crud-react-2b56f.firebaseapp.com",
    projectId: "crud-react-2b56f",
    storageBucket: "crud-react-2b56f.appspot.com",
    messagingSenderId: "1071684481606",
    appId: "1:1071684481606:web:22f64064efded6cb681047"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };