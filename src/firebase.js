import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0U1YMHB1T5jYDUQzth4dzIfL6QQE01qg",
  authDomain: "fb-clone-9417f.firebaseapp.com",
  databaseURL: "https://fb-clone-9417f.firebaseio.com",
  projectId: "fb-clone-9417f",
  storageBucket: "fb-clone-9417f.appspot.com",
  messagingSenderId: "217926234227",
  appId: "1:217926234227:web:7bfe3354987748cb8c3a06",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
