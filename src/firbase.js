// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


//  do  not sher 
const firebaseConfig = {
  apiKey: "AIzaSyDBv6F4g-CLQjBINvZMvWDUJ7WmzReAlUw",
  authDomain: "new-first-ovisack-project.firebaseapp.com",
  projectId: "new-first-ovisack-project",
  storageBucket: "new-first-ovisack-project.firebasestorage.app",
  messagingSenderId: "852785876549",
  appId: "1:852785876549:web:ba413a88496cfae2791d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default(auth)