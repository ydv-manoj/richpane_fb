import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'



const firebaseConfig = {
  apiKey: "AIzaSyD-YmEEjXAuuy_PyJHnAR_SZcCHC41ahsw",
  authDomain: "richpanel-31982.firebaseapp.com",
  projectId: "richpanel-31982",
  storageBucket: "richpanel-31982.appspot.com",
  messagingSenderId: "487499064848",
  appId: "1:487499064848:web:3bd4aed1e7c57b48998c95",
  measurementId: "G-D9L6RXKT7Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const firebaseT=firebase.auth;

const projectFirestore = firebase.firestore()
const projectAuth =firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore,projectAuth,projectStorage,timestamp,firebaseT}