import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";

const apiKEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: apiKEY,
  authDomain: "kenbee-test-port-blog-1.firebaseapp.com",
  projectId: "kenbee-test-port-blog-1",
  storageBucket: "kenbee-test-port-blog-1.appspot.com",
  messagingSenderId: "945880834903",
  appId: "1:945880834903:web:2d95ee3d2d01506984d412",
};

const app = initializeApp(firebaseConfig); // init firebase
const db = getFirestore(app); //init firestore service
const timeStamp = Timestamp.fromDate(new Date());

export { db, collection, getDocs, doc, getDoc, addDoc, deleteDoc, timeStamp };
