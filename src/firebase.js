import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
// import "firebase/database"
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
// export const database=firebase.database();
export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = firestore.doc(`user/${user.uid}`);
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`user/${uid}`).get();
  
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };