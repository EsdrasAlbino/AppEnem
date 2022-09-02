// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwK9Rdfcz-3stErI4x52PUihfuqFguCC4",
  authDomain: "appenem-100fd.firebaseapp.com",
  databaseURL: "https://appenem-100fd-default-rtdb.firebaseio.com",
  projectId: "appenem-100fd",
  storageBucket: "appenem-100fd.appspot.com",
  messagingSenderId: "987281953160",
  appId: "1:987281953160:web:254a428f8e960a3661ea3d",
  measurementId: "G-2GD49KPJL3"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

const auth = firebase.auth();

export {auth};