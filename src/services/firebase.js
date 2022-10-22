
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import firestore from "@react-native-firebase/firestore"


export const firebaseConfig = {
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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export const db = firestore()

