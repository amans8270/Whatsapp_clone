import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCEZzaKl0z1PTqu7-PxdO5zqjnSGSp0vmk",
  authDomain: "whatsappdata-5a419.firebaseapp.com",
  projectId: "whatsappdata-5a419",
  storageBucket: "whatsappdata-5a419.appspot.com",
  messagingSenderId: "331573083938",
  appId: "1:331573083938:web:d8011edb5a63b4fb87af7b",
  measurementId: "G-RSJEKNTSTK"
};
const firebaseapp=firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;