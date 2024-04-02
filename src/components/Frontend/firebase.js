import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import { getAuth} from "firebase/auth"


const firebaseConfig = {
  // Your Firebase project configuration details
  
    apiKey: "AIzaSyC7iDp1sA8UqroOy9QhM4VnhGGTTSbvNi0",
    authDomain: "booknfix-d9224.firebaseapp.com",
    projectId: "booknfix-d9224",
    storageBucket: "booknfix-d9224.appspot.com",
    messagingSenderId: "897028051328",
    appId: "1:897028051328:web:c67b86bf1830b6f356f165",
    measurementId: "G-7YHWFTH2H6"
  
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
