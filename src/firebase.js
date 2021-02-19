import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBg8iCKJbATWqc-9v9JqfCWHdh00WaCvPQ",
    authDomain: "netflixx-420.firebaseapp.com",
    projectId: "netflixx-420",
    storageBucket: "netflixx-420.appspot.com",
    messagingSenderId: "365662167646",
    appId: "1:365662167646:web:2f3b0a5312b1e760818acf",
    measurementId: "G-LF85ZMY341"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;