import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5cN5Hn8ura_foVlNhDMtVQ9-5vJRNJRo",
  authDomain: "mobility-challenge.firebaseapp.com",
  databaseURL: "https://mobility-challenge.firebaseio.com",
  projectId: "mobility-challenge",
  storageBucket: "mobility-challenge.appspot.com",
  messagingSenderId: "1086864537111",
  appId: "1:1086864537111:web:a94e884a615d35dd678e52",
  measurementId: "G-HZ3WND5SX4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// export default db;
