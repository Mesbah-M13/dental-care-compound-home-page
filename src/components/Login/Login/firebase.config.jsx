import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCPwcmPs4zq8_FKEGGnYwVC2DIIHPXL3BA",
    authDomain: "dental-care-service-c39f1.firebaseapp.com",
    projectId: "dental-care-service-c39f1",
    storageBucket: "dental-care-service-c39f1.appspot.com",
    messagingSenderId: "53305523014",
    appId: "1:53305523014:web:b60cc68f0d0a1c17e4c347"
  };

const fireApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireApp);

export default fireApp;