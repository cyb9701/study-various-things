import { initializeApp } from "firebase/app";
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpPNK2taVJQTDohkkGDSL87ncF6UWmEao",
    authDomain: "react-native-todo-app-de31f.firebaseapp.com",
    projectId: "react-native-todo-app-de31f",
    storageBucket: "react-native-todo-app-de31f.appspot.com",
    messagingSenderId: "988519365750",
    appId: "1:988519365750:web:70c1b1fa0cb6915a917357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


