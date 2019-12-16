import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAacup6WBgqvjFq9kFWmfdvZPt_TOZqARM",
  authDomain: "gis-deltaforce-bob.firebaseapp.com",
  databaseURL: "https://gis-deltaforce-bob.firebaseio.com",
  projectId: "gis-deltaforce-bob",
  storageBucket: "gis-deltaforce-bob.appspot.com",
  messagingSenderId: "385891058660",
  appId: "1:385891058660:web:7669738eb06e4df8a63df1",
  measurementId: "G-YNDBPRF37H"
};
const db = firebase.initializeApp(firebaseConfig).firestore();
export default db;

const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint }; //Nick muss groß
