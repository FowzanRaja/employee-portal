// Import the functions you need from the SDKs you need
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// .env file exists outside of the src folder, so this helps redirect to access the .env file
dotenv.config({ path: path.join(__dirname, '../.env') })

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth=getAuth();
export const db=getFirestore(app);
export default app;