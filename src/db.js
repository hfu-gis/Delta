import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9Rti5aPk9vzrj6V-CSwIlaJcnXn9kFz0",
  authDomain: "deltashop-6a97f.firebaseapp.com",
  databaseURL: "https://deltashop-6a97f.firebaseio.com",
  projectId: "deltashop-6a97f",
  storageBucket: "deltashop-6a97f.appspot.com",
  messagingSenderId: "493723113811",
  appId: "1:493723113811:web:1a5fdc607544257c6369a6",
  measurementId: "G-PNKMG3ZL3W"
};
const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;
const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
