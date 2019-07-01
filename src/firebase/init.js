import firebase from 'firebase'
import firestore from 'firebase/firestore'

//initialize firebase

var firebaseConfig = {
  apiKey: "AIzaSyDAP9mC4wDa2ULLyQR4X670AODz3POnVFE",
  authDomain: "nysl-mobile-arya.firebaseapp.com",
  databaseURL: "https://nysl-mobile-arya.firebaseio.com",
  projectId: "nysl-mobile-arya",
  storageBucket: "nysl-mobile-arya.appspot.com",
  messagingSenderId: "248541271577",
  appId: "1:248541271577:web:74fa5daa3c8f9241"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestapsInSnapshots: true })

  export default firebaseApp.firestore()