import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getFirestore,

} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkoHEOohng9zC4OLx9JmLgC9sL2omGQO4",
    authDomain: "attendance-management-sy-3e833.firebaseapp.com",
    projectId: "attendance-management-sy-3e833",
    storageBucket: "attendance-management-sy-3e833.appspot.com",
    messagingSenderId: "361458307977",
    appId: "1:361458307977:web:6923ec5069449fd027c758",
    measurementId: "G-8VCDV53370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const login = () => {
    const email = document.getElementById("useremail");
    const password = document.getElementById("userpassword");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user", user);
            window.location.href = "dashboard.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", login);