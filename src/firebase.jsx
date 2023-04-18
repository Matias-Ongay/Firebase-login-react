
import { initializeApp } from "firebase/app";
import{ getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDCQG-GF_OVyp8jh2BLgOIx55ZiFAhlEzY",
  authDomain: "fir-login-d6ca2.firebaseapp.com",
  projectId: "fir-login-d6ca2",
  storageBucket: "fir-login-d6ca2.appspot.com",
  messagingSenderId: "316494720291",
  appId: "1:316494720291:web:5e3d96c6980eabf927f096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth};