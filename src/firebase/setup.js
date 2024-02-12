import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB0UFm5j_InfaU8X3VrcxJaLepsioqQ6rA",
  authDomain: "gov-project-90370.firebaseapp.com",
  projectId: "gov-project-90370",
  storageBucket: "gov-project-90370.appspot.com",
  messagingSenderId: "651414863177",
  appId: "1:651414863177:web:18eb8928e74654f697ae98",
  measurementId: "G-DERKNKRW62"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);