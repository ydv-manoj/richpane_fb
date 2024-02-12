import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'



const firebaseConfig = {
  apiKey: "AIzaSyBj9rkBJax7UF4tx7sSzB5ZqU9LcNW5zW4",
  authDomain: "blinkitchallenge.firebaseapp.com",
  projectId: "blinkitchallenge",
  storageBucket: "blinkitchallenge.appspot.com",
  messagingSenderId: "1039691962872",
  appId: "1:1039691962872:web:02230742f2f375ae259e0d"
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