import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCdRrwFhCb8zAA0FYdW1eo4r04R1yC7P08",
  authDomain: "giddh-336508.firebaseapp.com",
  databaseURL: "https://giddh-336508-default-rtdb.firebaseio.com",
  projectId: "giddh-336508",
  storageBucket: "giddh-336508.appspot.com",
  messagingSenderId: "652647055799",
  appId: "1:652647055799:web:1d45e2c3be102a6ac32832",
  measurementId: "G-X9XSN43XDE"
};
//Initialize Firebase

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

// var fireDb = firebase.initializeApp(firebaseConfig);

// export default fireDb.database().ref();
