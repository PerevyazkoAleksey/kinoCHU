import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { getFirestore } from '@firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDc_Aq-EhIEydh_nZXS-Mx_Ow4Op1IW4Ys",
  authDomain: "kinochu-7b5c5.firebaseapp.com",
  projectId: "kinochu-7b5c5",
  storageBucket: "kinochu-7b5c5.appspot.com",
  messagingSenderId: "1072368513029",
  appId: "1:1072368513029:web:929b3f4b0f0fc1b9e7ec6c",
  measurementId: "G-6MHL3QFPLB"
};

let app, auth, db;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    db = getFirestore(app);
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
  db = getFirestore(app);
}

export { auth, db }