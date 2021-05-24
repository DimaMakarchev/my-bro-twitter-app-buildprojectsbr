import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4-CLj3HocKnj5S_PC9U7kKcklWOHXw5w",
    authDomain: "twitter-clone-d711c.firebaseapp.com",
    projectId: "twitter-clone-d711c",
    storageBucket: "twitter-clone-d711c.appspot.com",
    messagingSenderId: "150627691483",
    appId: "1:150627691483:web:680c072620d9d0ebebd5fe",
    measurementId: "G-9WKWVJKB5E"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export default db;

