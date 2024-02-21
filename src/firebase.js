import { initializeApp } from 'firebase/app';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDaxqBLGLL1p_s6L9Za8zcbEoHOGuftFcA',
  authDomain: 'auth-test-a25cf.firebaseapp.com',
  projectId: 'auth-test-a25cf',
  storageBucket: 'auth-test-a25cf.appspot.com',
  messagingSenderId: '64820429308',
  appId: '1:64820429308:web:fa4eedc187f3b10de8b279',
  measurementId: 'G-MMH78739WY',
};

const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
