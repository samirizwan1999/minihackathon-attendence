import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getFirestore,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    onSnapshot,
    Timestamp,
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
const auth = getAuth();


let submit = document.getElementById("register");

const submission = () => {
    let timings = document.getElementById("timings").value;
    let schedule = document.getElementById("schedule").value;
    let teachers = document.getElementById("techers").value;
    let section = document.getElementById("sections").value;
    let courses = document.getElementById("courses").value;
    let batch = document.getElementById("batch").value;
    event.preventDefault();
    addDoc(collection(db, "Class"), {
        teachers: teachers,
        timings: timings,
        schedule: schedule,
        section: section,
        courses: courses,
        batch: batch
    });
    console.log(timings.value);
    console.log(schedule.value);
    console.log(teachers.value);
    console.log(section.value);
    console.log(courses.value);
    console.log(batch.value);
}

submit.addEventListener('click', submission)




function showClass(id) {
    document.getElementById('chatPanel').removeAttribute('style');
    document.getElementById('divStart').setAttribute('style', 'display:none');

    hideChatList();
}

function showChatList() {
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none')
}

function hideChatList() {
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none')
}
