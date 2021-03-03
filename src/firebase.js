import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBd8Y7RKo7uDDkPRNQo83CHUKR7KtBv16U",
    authDomain: "imessage-clone-b1bed.firebaseapp.com",
    projectId: "imessage-clone-b1bed",
    storageBucket: "imessage-clone-b1bed.appspot.com",
    messagingSenderId: "598675803890",
    appId: "1:598675803890:web:b08ab880d753351b4a0a6b",
    measurementId: "G-Q5P7H58L1Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
