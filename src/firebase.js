  
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDTkv9V7nEyh9E2hoXEbuDcEzvDHW8RaWU",
  authDomain: "clonewhatsapp-713ec.firebaseapp.com",
  databaseURL: "https://clonewhatsapp-713ec.firebaseio.com",
  projectId: "clonewhatsapp-713ec",
  storageBucket: "clonewhatsapp-713ec.appspot.com",
  messagingSenderId: "810901158251",
  appId: "1:810901158251:web:dc660bcc82423722e2b42e",
  measurementId: "G-M77E3YC21S"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;