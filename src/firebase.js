import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig  = {
    apiKey: import.meta.env.VITE_APP_apiKey,
    authDomain: import.meta.env.VITE_APP_authDomain,
    databaseURL: import.meta.env.VITE_APP_databaseURL,
    projectId: import.meta.env.VITE_APP_projectId,
    storageBucket: import.meta.env.VITE_APP_storageBucket,
    messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
    appId: import.meta.env.VITE_APP_appId
}

// export const db = firebase
//     .initializeApp(firebaseConfig)
//     .firestore()
//
// export const auth = firebase
//     .auth();


// Initialize Firebase
const connection = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()

export { connection, auth }