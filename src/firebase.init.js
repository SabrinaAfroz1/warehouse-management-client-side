// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId

    apiKey: "AIzaSyAqf-FSJLeiBhRzAMCNxvzfWser8UQPbnY",
    authDomain: "sabrina-assignment11.firebaseapp.com",
    projectId: "sabrina-assignment11",
    storageBucket: "sabrina-assignment11.appspot.com",
    messagingSenderId: "761681873000",
    appId: "1:761681873000:web:e4ce972e9823d005fd13dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;