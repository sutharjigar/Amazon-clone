// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC1msFuGKC2dIVhNFb3vfnEZ0yX7x9EOsA',
  authDomain: 'challange-4efa0.firebaseapp.com',
  projectId: 'challange-4efa0',
  storageBucket: 'challange-4efa0.appspot.com',
  messagingSenderId: '816231529948',
  appId: '1:816231529948:web:53d550b9477a9f7eb1e319',
  measurementId: 'G-T1S9BP7VTG',
}

// initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig)

// initialize database
// /firestore real time data base
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
