import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1r5pNYmvq5GaO6wyJrT8g7DsGwxL86FE",
    authDomain: "notekeeper-97da4.firebaseapp.com",
    databaseURL: "https://notekeeper-97da4.firebaseio.com",
    projectId: "notekeeper-97da4",
    storageBucket: "notekeeper-97da4.appspot.com",
    messagingSenderId: "807589795200",
    appId: "1:807589795200:web:ef3e5cb95c18f56b30dd65",
    measurementId: "G-GHH9M8HEDM"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();