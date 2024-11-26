// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //   user your own credentials
  apiKey: "AIzaSyC2eXZRrpUy_0GblM5EgWb_TE9oW5TppbY",
  authDomain: "webdevelopment-6183d.firebaseapp.com",
  databaseURL: "https://webdevelopment-6183d-default-rtdb.firebaseio.com",
  projectId: "webdevelopment-6183d",
  storageBucket: "webdevelopment-6183d.appspot.com",
  messagingSenderId: "1048137878068",
  appId: "1:1048137878068:web:80f14b0952df5237a69861",
  measurementId: "G-E09YGE3XQN"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db ,storage};
