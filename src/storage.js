import firebase from "firebase";
import "firebase/Storage";

const firebaseConfig = {
    apiKey: "AIzaSyAacup6WBgqvjFq9kFWmfdvZPt_TOZqARM",
    authDomain: "gis-deltaforce-bob.firebaseapp.com",
    databaseURL: "https://gis-deltaforce-bob.firebaseio.com",
    storageBucket: "gs://gis-deltaforce-bob.appspot.com",
};
firebase.initializeApp(firebaseConfig);


let storage = firebase.storage();
