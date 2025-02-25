import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,

    authDomain: import.meta.env.VITE_FIRESTORE_DOMAIN_ID,

    projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,

    storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,

    messagingSenderId: import.meta.env.VITE_FIRESTORE_SENDER_ID,

    appId: import.meta.env.VITE_FIRESTORE_APP_ID

};

const app = initializeApp(firebaseConfig);
export const rtdb = getDatabase(app, import.meta.env.VITE_FIRESTORE_DB_URL);