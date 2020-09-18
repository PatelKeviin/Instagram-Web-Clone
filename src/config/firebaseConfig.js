import * as firebase from "firebase/app";
// Adding the Firebase products that you want to use
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRaPXb27nBjJq88dbjz4beLlxtieelmAo",
  authDomain: "instagram-clone-67b35.firebaseapp.com",
  databaseURL: "https://instagram-clone-67b35.firebaseio.com",
  projectId: "instagram-clone-67b35",
  storageBucket: "instagram-clone-67b35.appspot.com",
  messagingSenderId: "1003119940381",
  appId: "1:1003119940381:web:8561b3843bd98121efc7f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Accessing firebase authentication services
const auth = firebase.auth();
export default auth;
